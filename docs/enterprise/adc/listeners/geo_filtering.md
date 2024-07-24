---
sidebar_position: 3
---

# Geo Filtering
**Geo-filtering** is the practice of restricting access to Internet content, based upon the user's geographical location. With the help of Internet geolocation techniques, check user's IP address against the blacklist or whitelist, accounts, and measuring the end-to-end delay of a network connection to estimate the physical location of the user and restrict them.

Our solution restricts user's based upon Blacklisted IP Prefixes and Countries. It also allows permanently to access website through Whitelisted IP Prefixes.

---
![Geo Filtering](/img/adc/v8/docs/geo_filtering.png)

### How to Use:

1. Go to **Stack** > [**SLB**](/enterprise/adc) > [**Listeners**](./listeners.md) > **Geo Filtering** 
2. Configure your settings.
3. Click **Save Changes**.

### Description:

##### **Blacklisted Countries**

This section specifies the list of countries that will be permanently disallowed from accessing the website.

    Accepted values: list of country as per ISO 3166-1 alpha-2 standard 2 letter country-code.

    Default: Blank 

For more information about ISO 3166-1 alpha-2, please refer to this site: [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)

##### **Whitelisted IP Prefixes**

This section specifies the list of IPs that will be permanently allowed for accessing the website.

    Accepted values: IP prefixes

    Default: Blank   
    
##### **Blacklisted IP Prefixes**

This section specifies the list of IPs that will be permanently disallowed from accessing the website.

    Accepted values: IP prefixes

    Default: Blank 

##### **Bad Reputation Traffic**

Users can specify the action to be performed on traffic from suspicious IPs.

    Accepted values: NO ACTION

    Default: NO ACTION

##### Blacklisted ASN 

User need to specific Specify the list of Autonomous System Numbers that will be permanently disallowed from accessing the website.

    Accepted values: String

    Default: Blank
