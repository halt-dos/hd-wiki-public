# Profiles
Create different security profiles for different sub-sections of your website.
### Overview
Profiles is the default profile that contains most commonly used web application settings served through a virtual service. For customizing a profile, it is highly recommended to create a new profile instead of editing the default profile.  
![Profiles.png](/img/waf/v6/docs/profileee.png)
   
### How to Use:
1. Go to WAF > Listeners > Profiles
2. Click Add Profile.
3. Configure your settings.
4. Click Save Changes.
   
| Parameters         | Accepted Values | Default |
|--------------------|-----------------|---------|
| Profile Name       | String          | Blank   |
| Profile Priority   | Integer         | 0       |
| Application Type   | Drop-Down       | Others  |
| Protocol           | Drop-Down       | Any     |
| Countries          | Drop-down       | Blank   |
| Source IP Prefixes | IP Address      | Blank   |
| Destination Port   | Integer         | Blank   |
| Reference          | Drop-Down       | None    |
## Description

1.**Profile Name:**
This option allows user to specify a user-friendly name of security profile. By default, a profile with 'Default' name is already created upon adding a listener.
2.**Profile Priority:**

This option provides priotize feature for deciding which profile want to use first for matching request and taking action.

3.**Application Type:**

This option specifies type of application ( i.e. website or web service or web socket) want to select. A website is defined as a collection of web pages and related content that is identified by a common domain name whereas, a web service is a standardized medium to propagate communication between the client and server applications. And a web socket is a duplex protocol used mainly in the client-server communication channel.

4.**Protocol:**

This option specify the service type for the subdomain i.e. HTTP, TCP, UDP. Based on the protocol of the backend application, the listener/subdomain can be created with any of the three protocols. 

5.**Countries:**

This option specify countries from where request is coming should match with this profile.

6.**Source IP Prefixes:**
This option specify the source IP Prefixes for the requests coming will be matched with this profile.

7.**Destination Port:**

This option specify the destination port Prefixes where requests coming will be matched with this profile.

8.**Reference:**

This drop-down is used to clone an existing profile with the same configuration to a new profile.
Note: User can clone existing profile with the same configuration to a new profile on the new user-specified URI.
Following configurations are present under Security Profile.
