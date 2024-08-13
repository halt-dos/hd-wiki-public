---
sidebar_position: 3
---

# NameServers

### Steps to update NS records for your domain

---

Updating your Name Servers is an essential step for using Haltdos DNS. It will help you route your web traffic through the Haltdos network. Ensure to configure your DNS properly.

"DNS management is not yet active on Haltdos. Follow the steps here to activate your domain"

This warning message states that DNS Name Servers doesn’t point to Haltdos. 

If you would like to change your DNS Provider over Haltdos DNS, read more to learn.

### Steps to Update Name Servers

1. Go to **DNS > Zones > Records**.
2. Click Gear icon next to the **Add Record** button.
3. Copy Haltdos Name Servers. These records will help you point your Domain Name to Haltdos.
4. Log in at your Hosting Registrar.
5. Go to DNS Management.
6. Click Change under Name Servers.
7. Paste the new Name Servers to your current registrar.
8. Click Save.

:::note Note 
It will take up to 24 hours to propagate.
If you find any DNS provider instructions need an update, please notify our 24x7 Support Team.
:::

### Cloudflare DNS

1. Login your Cloudflare account
2. Select Domain from the drop-down menu on the top left.
3. Click on the DNS settings tab.
4. Add the CNAME records. In the first field, enter the subdomain that you want to use, such as CDN, and in the second field, enter Edge Address (foo-bar.haltdosdns.com). 

### 123reg DNS

1. Login your 123-reg control panel.
2. Go to Domains section.
3. Choose Domain Name from the drop-down menu.
4. Click on the Manage button.
5. Click Manage DNS under the advanced domain settings menu.
6. Select the Advanced DNS tab.
7. Select CNAME from the drop-down menu.
8. Enter CDN in the hostname field (Note: Enter WWW for full site cache). Enter Edge Address in the Destination CNAME field. 
9. Click Add.

### GoDaddy DNS

1. Login your GoDaddy account.
2. Go to Product List next to Domains.
3. Click the ‘+’ button to expand the list.
4. Select the domain you want to manage and click Action > Manage DNS.
5. Go to the bottom of the Records section and click Add.
6. From the drop-down list, select CNAME.
7. Enter details in the following fields to complete.
 Host – Type the subdomain name for the alias assignment. E.g., type www. Note: Subdomain should not be more than 25 characters. It can include a period(.) but not consecutive periods (…)TTL - Select how long the server should cache the information.
 Points to - Type the name of the host you want the alias to point to. E.g., to directly map the alias to your domain name enter @.
 TTL – Specify how long the server should cache the information.
8. Click Save.

### Bluehost DNS

1. Login your Bluehost Hosting Account.
2. Go to Domains and click DNS Zone Editor icon.
3. From the drop-down menu, choose the domain you are modifying.
4. Scroll down and click on Add DNS Record.
5. Enter record name in the Host Record field.
6. Don’t change the TTL field. Manage its default setting.
7. Select CNAME from Type.
8. Enter the Address in the Points To field that you want the record should resolve to.
9. Click Add Record to create the record.

### DYN DNS

1. Login your Dyn account.
2. Go to the My Services option.
3. Search the Zone you wish to add a record to.
4. Click Dyn Standard DNS Service.
5. Click the “Add Alias (CNAME)” button. Add Hostname and Alias To in the prompt window.
6. Click Create Record.
7. Click DNS Menu.
8. Click Managed DNS.
9. Enter a domain name in Select Domain tab or choose from the “Recently Updated Domains”
10. Go to CNAME Records and click ‘+’ to add a new record. Note: We will add a CNAME record to the domain to map the root record of the domain.
11. Leave data value blank to alias to the root record of the domain name.
12. Click Submit.


### CloudDNS

1. Go to Control Panel. 
2. Click “Add new record”
3. Enter the following:
```
Type: CNAME
TTL: 30 Minute
Host: Example (www.hostname.com)
Points to: Edge Address (e.g., foo-bar.haltdosdns.com)
```


### Easy DNS

1. Login your easyDNS account.
2. Click DNS. It will redirect you to the DNS SETTINGS page.
3. Choose either of the two EDITOR: STREAMLINED or MODULAR (recommended).
4. For the DNS record type that you are trying to click the green wrench tool.


### 1&1 DNS

1. Go to https://admin.1and1.com and login your account. 
2. In case of only one package, go to the Administration page and continue to step 4.
3. In case of more than one package, choose the package corresponding to the desired domain. It redirects you to the Administration page for the desired domain.
4. Click Domain Center under Domains & Web Space. It redirects you to the Domain Overview page.
5. On the left of the domain, click the box that you want to verify. (Blue check will appear)
6. Select Create Subdomain from the New drop-down menu.
7. Type the code TOKEN (Ensure it is in lowercase letters).
8. Click OK.
9. Click the ‘+’ icon next to Subdomain Overview.
10. Checkmark the box next to the subdomain. It will now read as token_code.yourdomain.com.
11. Click Subdomain Settings.
12. In the drop-down menu, click Edit DNS settings.
13. Click the radio option next to CNAME.
14. Enter TOKEN next to the Alias. Make sure it is in lowercase letters.
15. Click OK


### Blacknight DNS

1. Go to cp.blacknight.com and login your account.
2. Go to Registered Domains.    
3. Choose Manage DNS for the desired domain.
4. Go to the DNS tab, followed by the DNS Records tab.
5. Choose Add New DNS Record.
6. Select CNAME for DNS Record Type from the drop-down menu.
7. In the Domain field, enter your CNAME.
8. In the Canonical Name field, enter the address you want the CNAME to point to.
9. Click Finish.


### DNS Park

1. Login your DNS Park account.
2. Click DNS Hosting.
3. Choose the domain you want to use with G Suite.
4. Ensure domain points to nameservers of the DNS Park. 
5. Click Alias Records.
6. Include the CNAME record value related to your use. Ensure name goes to the Host Name field, and the value goes to the Destination Name field.
7. Click Add Alias.


### Network Solutions DNS

1. Go to www.networksolutions.com. 
2. Click Manage Account.
3. Login using your credentials. Ensure to choose Manage All Services in Log In to field.
4. Go to Manage Domain Names.
5. Choose the domain name to get new DNS records.
6. Click Manage > Change Where Domain Points > Advanced DNS.
7. Click Add/Edit under the Host Aliases (CNAME Records).
8. Key in your CNAME records. (Make sure it depends on the type.) 
9. Checkmark the radio button next to the Other Host box.
10. Enter the corresponding Destination/Value/Answer in the Other Host field from the same CNAME record values table.
11. Click Continue and review your changes 
12. Click Save Changes. 
13. You have successfully created the CNAME record.
 


### EveryDNS

1. Go to EveryDNS.net and login your account.
2. Click the domain you want to use with G Suite for your Domain.
3. Review your domain points to nameservers of the EveryDNS.net.
4. Click Add a Record to create a CNAME record.
5. Include the CNAME record value linked to your use. Make sure the value matches to the Record Value field and the name matches to the Fully Qualified Domain Name field.
6. Choose your CNAME as the Record Type.
7. Click Add Record.


### ENom DNS

1. Go to www.enom.com and login your account. 
2. Go to Domains, select My Domain from the drop-down menu. It will direct you to the Manage Domains page.
3. Click the domain that you want to use with G Suite.
4. Go to Host Settings.
5. Select New Row for adding a CNAME record. In case you already have a CNAME record, edit the existing CNAME record.
6. Type your CNAME record.
7. Enter your Edge Address (e.g., foo-bar.edgedns.com).
8. Click Save.


### EuroDNS

1. Go to eurodns.com.
2. Login your account.
3. Choose My Domains in the My Domains menu. It will enlist a table citing your domains.
4. On the row of the domain, click the DNS column that you want to change. It will display DNS records for your domain. 
5. Type your CNAME record. For reference use the CNAME record values table 
6. Select Host Alias from the Add… HOSTNAME table.
7. Click the Add button.
8. Add your custom domain in the Alias: field. E.g., if your address is cdn.mydomain.com, enter CDN.
9. Add Edge Address (e.g., foo-bar.haltdosdns.com) in the Host Name: field
10. Click the Save Settings.


### Gandi.Net DNS

1. Go to https://www.gandi.net/ and sign in
2. Click the Administration tab > Control Panel link.
3. Select the domain you wish to manage.
4. Click Technical Settings > Manage DNS zone file.
5.Enter your CNAME record. Refer guidelines 
  Name: Type custom URL prefixes like www or CDN 
  Type: Choose CNAME.
  Value: Type Edge Address (e.g., foo-bar.haltdosdns.com.). At the end of the value, ensure to include a trailing dot (.) 
6. Click Submit. It will direct you to the list of entries. 
7. Click Submit Changes.

### Hover DNS

1. Go to https://www.hover.com/login and sign in.
2. Choose the domain.
3. Click DNS tab > Add Record.
4. Choose CNAME from the drop-down menu.
5. Type CNAME record. E.g., If you want to direct www.mydomain.com to CDN, in the Hostname field type www, and in the Target Host field type Edge Address.
6. Click Save.


### IX Web Hosting DNS

1. Sign in your IX Web Hosting account.
2. Go to the Hosting Account section. Click Manage.
3. Select the domain on the left side that you want to use with G Suite.
4. Click Edit > Add DNS CNAME Record.
5. Include the CNAME record value related to your use.  Ensure name matches to the Name field, and the value matches to the Data field.
6. Click Submit.


### MyDomain.Com DNS

1. Go to www.mydomain.com/ and sign in
2. Click My Services > Manage Services.
3. Click Domain Overview > Domain Administration.
4. Click on Domain Administration.
5. Choose the domain that you are using with G Suite.
6. Click DNS tab
7. Choose DNS Records.
8. Go to Add New DNS record.
9. Choose CNAME from the drop-down menu
10. Click Next.
11. Include the CNAME record value linked to your use.
12. Click Finish.


### Myhosting.Com DNS

1. Go to http://myhosting.com and sign in.
2. Go to Domain Name > DNS Management > Manage DNS.
3. Add an Alias (CNAME) record. Ensure to include the value linked to your use.
4. Click Save.


### Namecheap DNS

1. Go to www.namecheap.com and log in.
2. Click My Account > Manage Domains 
3. Select the desired domain from the list of domains.
4. Choose All host records.
5. Ensure your CNAME record value point to your Edge Address.
6. Click Save.


### No-IP DNS

1. Sign in your account.
2. Go to Host/Redirects > Manage.
3. To add a new entry, click Add. To modify an existing entry, continue to step 4.
4. Ensure the CNAME record value linked to your use. Review name matches with hostname and value with the Target Host field.
5. At the host type, choose DNS alias CNAME.
6. Click Modify.

### Register.Com DNS

1. Go to register.com and sign in.
2. Go to My Accounts > domain you are using with G Suite
3. Scroll down. Go to Advanced Technical Settings.
4. Click Edit Domain Aliases Records.
5. Type the Name/ Alias/ Host in the first field from the CNAME record values table
6. Type the corresponding Value/ Destination/ Answer in the second field from the CNAME record values table
7. Click Continue
8. Verify Changes
9. Click Continue.


### Registo.Br DNS

1. Go to registro.br and sign in 
2. Choose the domain name. It will help you to get the new DNS record.
3. Click Save > Edit DNS > + Record.
4. Choose CNAME from the drop-down menu.
5. Enter the Name/ Alias/ Host in the first field
6. Enter the Edge Address in the second field, Dados.
7. Click Save.


### Terra DomÃ­nio DNS

1. Sign in your main email account
2. Send a message to suporte.empresas@terra.com.br for new CNAME record creation or to update an existing record.
3. Add C.N.P.J. (Cadastro Nacional da Pessoa Jurídica) of the company to message.
4. Include the CNAME record value linked to your use.
5. Send message 
6. Wait for a response.


### Upperlink DNS

1. Go to dns.upperlink.com.ng and sign in.
2. Select the domain to modify or add CNAME records. 
3. Click Manage Domain DNS
4. Make sure to remove the existing custom CNAME record. 
5. Review the Zone Name field. It should read as customcname.yourdomain.com
6. Type the following information
7. Enter the following information:
   Change Default value of custom CNAME under Zone Name 
   Select CNAME under Zone Type
   Edge Address under Zone Value
   Edge Address in the content field
8. Save Changes.


### ZoneEdit DNS

1. Go to http://www.zoneedit.com and sign in your ZoneEdit account. 
2. Select the domain for which you like to add a CNAME record.
3. Select Aliases (CNAME).
4. Include the CNAME record value linked to your use.
5. Save changes.