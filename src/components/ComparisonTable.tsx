import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Replace this with your actual JSON data
const comparisonData =[
    {
     "Features": "Capabilities"
    },
    {
     "Features": "Websites \/ FQDN",
     "Community": 1,
     "Professional": "Unlimited",
     "Enterprise": "Unlimited"
    },
    {
     "Features": "No. of Security Profiles",
     "Community": 1,
     "Professional": "1 per FQDN",
     "Enterprise": "Unlimited"
    },
    {
     "Features": "Management"
    },
    {
     "Features": "Incident \/ Attack information",
     "Community": "Yes",
     "Professional": "Yes",
     "Enterprise": "Yes"
    },
    {
     "Features": "Periodic Threat Intel",
     "Community": "Yes",
     "Professional": "Yes",
     "Enterprise": "Yes"
    },
    {
     "Features": "Support",
     "Community": "EMAIL (No ETA)",
     "Professional": "8x5 support Email (within 7 days)",
     "Enterprise": "24x7 support Email, Phone Toll Free"
    },
    {
     "Features": "Dashboards & Analytics",
     "Community": "Single Dashboard Limited (1 day)",
     "Professional": "Single Dashboard Limited (1 day)",
     "Enterprise": "Advanced Multiple Dashboard w/ customization"
    },
    {
     "Features": "Reporting",
     "Community": "No",
     "Professional": "No",
     "Enterprise": "In-built and customizable reports"
    },
    {
     "Features": "Two Factor Authentication",
     "Community": "No",
     "Professional": "No",
     "Enterprise": "Yes"
    },
    {
     "Features": "Integration"
    },
    {
     "Features": "SIEM Integration",
     "Community": "No",
     "Professional": "No",
     "Enterprise": "Yes"
    },
    {
     "Features": "SOAR Integration",
     "Community": "No",
     "Professional": "No",
     "Enterprise": "Yes"
    },
    {
     "Features": "API Integration",
     "Community": "No",
     "Professional": "No",
     "Enterprise": "Yes (XML or JSON)"
    },
    {
     "Features": "Custom Threat Intel (3rd party TI Integration)",
     "Community": "No",
     "Professional": "No",
     "Enterprise": "Yes"
    },
    {
     "Features": "Email Notification",
     "Community": "No",
     "Professional": "No",
     "Enterprise": "Yes"
    },
    {
     "Features": "AAA Integration (TACACS+ and RADIUS)",
     "Community": "No",
     "Professional": "No",
     "Enterprise": "Yes"
    },
    {
     "Features": "Export IOCs via STIX \/ TAXII",
     "Community": "No",
     "Professional": "No",
     "Enterprise": "Yes"
    },
    {
     "Features": "Identity Management (AD \/ SAML \/ LDAP\/ TOTP)",
     "Community": "No",
     "Professional": "No",
     "Enterprise": "Yes"
    },
    {
     "Features": "Backup \/ Storage",
     "Community": "No",
     "Professional": "No",
     "Enterprise": "Yes"
    },
    {
     "Features": "High Availability ",
     "Community": "No",
     "Professional": "No",
     "Enterprise": "Yes"
    },
    {
     "Features": "WAF Features"
    },
    {
     "Features": "Blacklist\/ whitelist IP Address",
     "Community": "Yes",
     "Professional": "Yes",
     "Enterprise": "Yes"
    },

    {
      "Features": "Global IP Whitelist and Blacklist",
      "Community": "No",
      "Professional": "No",
      "Enterprise": "Yes"
    },
    {
     "Features": "Geo Fencing",
     "Community": "Yes",
     "Professional": "Yes",
     "Enterprise": "Yes"
    },
    {
     "Features": "Rate Limiting",
     "Community": "Yes",
     "Professional": "Yes",
     "Enterprise": "Yes"
    },
    {
     "Features": "L7 DDoS Protection",
     "Community": "Yes",
     "Professional": "Yes",
     "Enterprise": "Yes"
    },
    {
     "Features": "Malicious Source Protection",
     "Community": "Basic",
     "Professional": "Comprehensive",
     "Enterprise": "Advanced"
    },
    {
     "Features": "Anti-Automation Protection",
     "Community": "Basic",
     "Professional": "Comprehensive",
     "Enterprise": "Advanced"
    },
    {
     "Features": "BOT management",
     "Community": "Yes",
     "Professional": "Yes",
     "Enterprise": "Yes"
    },
    {
     "Features": "Haltdos Rulesets",
     "Community": "Comprehensive",
     "Professional": "Comprehensive",
     "Enterprise": "Advanced"
    },
    {
     "Features": "API & WebSocket Protection",
     "Community": "Yes",
     "Professional": "Yes",
     "Enterprise": "Yes"
    },
    {
     "Features": "SSL\/TLS Management",
     "Community": "Yes",
     "Professional": "Yes",
     "Enterprise": "Yes"
    },
    {
     "Features": "Device Fingerprinting",
     "Community": "Yes",
     "Professional": "Yes",
     "Enterprise": "Advanced"
    },
    {
     "Features": "Request Header Management",
     "Community": "Yes",
     "Professional": "Yes",
     "Enterprise": "Yes"
    },
    {
     "Features": "URL Redirection rules",
     "Community": "Yes",
     "Professional": "Yes",
     "Enterprise": "Yes"
    },
    {
     "Features": "Negative Security Model",
     "Community": "Yes",
     "Professional": "Yes",
     "Enterprise": "Yes"
    },
    {
     "Features": "Positive Security Model",
     "Community": "No",
     "Professional": "Yes",
     "Enterprise": "Yes"
    },
    {
     "Features": "Custom Error page handling",
     "Community": "No",
     "Professional": "Yes",
     "Enterprise": "Yes"
    },
    {
     "Features": "XML & JSON Policy Management",
     "Community": "No",
     "Professional": "Yes",
     "Enterprise": "Yes"
    },
    {
     "Features": "Captcha Challenge",
     "Community": "No",
     "Professional": "Yes",
     "Enterprise": "Yes"
    },
    {
     "Features": "Custom Error page handling",
     "Community": "No",
     "Professional": "Yes",
     "Enterprise": "Yes"
    },
    {
     "Features": "AI based Attack Detection \/ Mitigation",
     "Community": "No",
     "Professional": "No",
     "Enterprise": "Yes"
    },
    {
     "Features": "Virtual Patching",
     "Community": "No",
     "Professional": "No",
     "Enterprise": "Yes"
    },
    {
     "Features": "Mobile App Protection",
     "Community": "No",
     "Professional": "No",
     "Enterprise": "Yes (Anti-BOT Mobile SDK)"
    },
    {
     "Features": "AV Scanning",
     "Community": "No",
     "Professional": "No",
     "Enterprise": "Yes"
    },
    {
     "Features": "Security Breach Prevention \/ Response Filtering",
     "Community": "No",
     "Professional": "No",
     "Enterprise": "Yes"
    },
    {
     "Features": "Protection against tampering and Website defacement",
     "Community": "No",
     "Professional": "No",
     "Enterprise": "Yes"
    },
    {
     "Features": "Correlation Engine",
     "Community": "No",
     "Professional": "No",
     "Enterprise": "Yes"
    },
    {
     "Features": "Decoys to protect against advanced bots \/ crawlers ",
     "Community": "No",
     "Professional": "No",
     "Enterprise": "Yes"
    },
    {
     "Features": "Client Certificate access Management",
     "Community": "No",
     "Professional": "No",
     "Enterprise": "Yes"
    },
    {
     "Features": "Advanced BOT Protection using Crypto Challenge",
     "Community": "No",
     "Professional": "No",
     "Enterprise": "Yes"
    },
    {
     "Features": "Load Balancing"
    },
    {
     "Features": "Load Balancing Algorithms",
     "Community": "Yes",
     "Professional": "Yes",
     "Enterprise": "Advanced"
    },
    {
     "Features": "Server Health Monitoring",
     "Community": "Yes",
     "Professional": "Yes",
     "Enterprise": "Yes"
    },
    {
     "Features": "Fail-over Management",
     "Community": "Yes",
     "Professional": "Yes",
     "Enterprise": "Yes"
    },
    {
     "Features": "Custom Webpages",
     "Community": "No",
     "Professional": "Yes",
     "Enterprise": "Yes"
    },
    {
     "Features": "Upstream TLS protocol selection",
     "Community": "No",
     "Professional": "Yes",
     "Enterprise": "Yes"
    },
    {
     "Features": "Caching",
     "Community": "No",
     "Professional": "Yes",
     "Enterprise": "Yes"
    },
    {
     "Features": "Compression",
     "Community": "No",
     "Professional": "Yes",
     "Enterprise": "Yes"
    },
    {
     "Features": "Advanced Loadbalancing",
     "Community": "No",
     "Professional": "No",
     "Enterprise": "Yes"
    },
    {
     "Features": "TCP Optimization",
     "Community": "No",
     "Professional": "No",
     "Enterprise": "Yes"
    }

];

export default function ComparisonTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="comparison table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Features</TableCell>
            <TableCell align="center">Community</TableCell>
            <TableCell align="center">Professional</TableCell>
            <TableCell align="center">Enterprise</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {comparisonData.map((row, index) => (
            <TableRow key={index}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="left">{row["Features"]}</TableCell>
              {row.Community === undefined ? (<TableCell colSpan={3} />) : (
                <>
                  <TableCell align="center">{row.Community}</TableCell>
                  <TableCell align="center">{row.Professional}</TableCell>
                  <TableCell align="center">{row.Enterprise}</TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
