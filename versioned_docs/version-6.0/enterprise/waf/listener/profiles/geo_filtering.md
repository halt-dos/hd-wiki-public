---
sidebar_position: 2
---

# Geo Filtering

### Overview
**Geo-filtering** is the practice of restricting access to Internet content, based upon the user's geographical location. With the help of Internet geolocation techniques, check user's IP address against a blacklist or whitelist, accounts, and measuring the end-to-end delay of a network connection to estimate the physical location of the user and restrict them.
Our solution restricts user's based upon BlackListed IP Prefixes and Countries. It also allows permanently to access website through WhiteListed IP Prefixes.  

![geo-filtering](/img/waf/v6/docs/geo_filtering.png)  

### How to Use:
1. Go to WAF > Listener > Security Profiles > Geo Filtering.
2. Configure your settings.
3. Click on Save Changes.  

   
| Parameters            | Accepted Values | Default |
|-----------------------|-----------------|---------|
| Blacklist Countries   | Drop-Down       | Blank   |
| Whitelist IP Prefixes | Drop-Down       | Blank   |
| Blacklist IP Prefixes | Drop-Down       | Blank   |
   

### Description  

1.**Blacklist Countries:**
This section specify the list of countries that will be permanently disallowed from accessing the website. Countries can be selected by typing the name of the country and any request coming from the specified countries will be dropped.  

2.**Whitelist IP Prefixes:**
This section specify the list of IPs that will be permanently allowed for accessing the website. IP whitelisting is when you grant network access only to specific IP addresses.  

3.**Blacklist IP Prefixes:**
This section specify the list of IPs that will be permanently disallowed from accessing the website. IP blacklisting is a method used to filter out illegitimate or malicious IP addresses from accessing your networks. Blacklists are lists containing ranges of or individual IP addresses that you want to block.  

#### Use Cases

Try to understand the concept of geo-filtering through some real-world based example. If your product is single-country based, for example, India. Geo-filtering provides feature to block or blacklist the IPs of other countries and only give access within India.  
The other condition is that you are not dealing with foreign clients but using online services or technology that is present outside of India like web hosting and webmail. In this case, allow such services through the Firewall.  
 
Your product is single-country based, say, for example, India. You have blocked or blacklisted all the IPs that don't originate within India. Now, you have a website or product that you need to access by IPs originating from multiple countries. In this case, you need to be cautious about IP address blocking.
It is possible that even though you are not dealing with foreign clients, you may be using online services or technology that have a presence outside India like web hosting and webmail. You need to allow such services through the Firewall as well.
   
Blacklisting countries is quite easy and quick. However, Geo-filtering usage is more efficient. It makes your web-blocking more precise. You can block specific IPs, a range of IPs, IP addresses list that is known to be malicious.
   
In case you have blocked a whole country, you can add specific IPs to the Whitelist to access websites. For example, your staff is abroad and wants to access the network; you can whitelist their IPs.
   
If you wish to accept traffic from only a few countries and blacklist all the others, then use the Not Country name (e.g. Not India) option. Geo Filtering also has limitations. It cannot block a targeted attack as criminals can mask their location. They can show the attack is from a particular country, but in actuality, they are not present there.  
