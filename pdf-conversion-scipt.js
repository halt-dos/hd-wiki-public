const puppeteer = require('puppeteer');
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://docs.haltdos.com/enterprise';
const PATHS = [

  //Enter up to 10 site links (Puppeteer limitation) 
  '/platform/system/',
  '/platform/system/status',
  '/platform/system/events',
  '/platform/system/instance/settings/operational',
  '/platform/system/instance/settings/backup_policy',
  '/platform/system/instance/settings/monitor',
  '/platform/system/instance/settings/tcp',
  '/platform/system/instance/settings/cluster_settings',
  '/platform/system/instance/analytics/',
];

async function generatePDFs(urls, baseUrl) {
  const browser = await puppeteer.launch();
  const pdfBuffers = [];

  for (const path of urls) {
    const page = await browser.newPage();
    const fullUrl = baseUrl + path;
    console.log(`Rendering: ${fullUrl}`);

    try {
      await page.goto(fullUrl, { waitUntil: 'networkidle0', timeout: 200000 });

      await page.evaluate(() => {
        const footer = document.querySelector('.custom-footer-wrapper_e3DT');
        if (footer) {
          footer.style.display = 'none';
        }

        const breadcrumb = document.querySelector('.breadcrumbs');
        if (breadcrumb) {
          breadcrumb.style.display = 'none';
        }
      });

      const pdfBuffer = await page.pdf({
        format: 'A4',
        printBackground: true,
        margin: { top: '20mm', bottom: '20mm', left: '15mm', right: '15mm' },
      });

      pdfBuffers.push(pdfBuffer);

    } catch (err) {
      console.error(`Failed to render ${fullUrl}:`, err.message);
    }

    await page.close();
  }

  await browser.close();
  return pdfBuffers;
}

async function mergePDFs(buffers, outputPath) {
  const mergedPdf = await PDFDocument.create();

  for (const buffer of buffers) {
    const doc = await PDFDocument.load(buffer);
    const copiedPages = await mergedPdf.copyPages(doc, doc.getPageIndices());
    copiedPages.forEach(page => mergedPdf.addPage(page));
  }

  const mergedBuffer = await mergedPdf.save();
  fs.writeFileSync(outputPath, mergedBuffer);
  console.log(`Merged PDF saved to ${outputPath}`);
}

(async () => {
  console.log("Starting PDF generation...");
  const pdfBuffers = await generatePDFs(PATHS, BASE_URL);

 //Enter the folder name. Make sure each file is a new script; otherwise, the previous one will be overwritten.
  await mergePDFs(pdfBuffers, path.join(__dirname, 'haltdos-enterprise-platform-system part-1-docs.pdf'));
  console.log("PDF generation completed!");
})();
