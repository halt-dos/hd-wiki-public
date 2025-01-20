---
sidebar_position: 3
---

# Geo Filtering

Geo Filtering on DNS traffic

---

## Overview

Geo Filtering is a smart way to limit access to Internet content as per the geographic location of the user. Firstly, we determine the location of the user using the Geo location techniques (such as reviewing the IP address of the user against Whitelist or blacklist, accounts, calculating network connection end-to-end delay to assess the user's physical location). Lastly, result analysis takes place to determine whether the system will allow or deny access to the site or particular content. Geo -location also aids in content modification.

![geo_filtering](/img/gslb/v8/geo.png)

### How to Use:
1. Go to  **Apps** > **GSLB** > **Listener** > **Geo Filtering**
2. Configure your settings.
3. Click **Save Changes**.  

### Description 

#### Blacklisted Countries

To block requests based on country of origin. It enables the request to be filtered based on the countries specified. Countries can be selected by typing the name of the country and any request coming from the specified countries will be dropped.

```
    Accepted values: IP Prefixes

    Default: Blank 
```


#### Whitelisted IP Prefixes

IP whitelisting is when you grant network access only to specific IP addresses. This field allows the request coming from specified IP Prefixes permanently though the country is blacklisted or any other restriction.

```
    Accepted values: IP Prefixes

    Default: Blank 
```


#### Blacklisted IP Feeds

Specify the list of IP Feeds that will be permanently disallowed from accessing the website.

```
    Accepted values: IP feed

    Default: Blank
```

For more information about ISO 3166-1 alpha-2, please refer to this site: [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)


#### BlackListed Countries

Specify the list of countries that will be permanently disallowed from accessing the website

```
    Accepted values: list of country as per ISO 3166-1 alpha-2 standard 2 letter country-code.

    Default: Blank
```


#### Use Cases

Your product is single-country based, say, for example, India. You have blocked or blacklisted all the IPs that don't originate within India. Now, you have a website or product that you need to access by IPs originating from multiple countries. In this case, you need to be cautious about IP address blocking.

It is possible that even though you are not dealing with foreign clients, you may be using online services or technology that have a presence outside India like web hosting and webmail. You need to allow such services through the Firewall as well.

Blacklisting countries is quite easy and quick. However, Geo-filtering usage is more efficient. It makes your web-blocking more precise. You can block specific IPs, a range of IPs, IP addresses list that is known to be malicious.

In case you have blocked a whole country, you can add specific IPs to the Whitelist to access websites. For example, your staff is abroad and wants to access the network; you can whitelist their IPs.

If you wish to accept traffic from only a few countries and blacklist all the others, then use the Not Country name (e.g. Not India) option. Geo Filtering also has limitations. It cannot block a targeted attack as criminals can mask their location. They can show the attack is from a particular country, but in actually they are not present there.

