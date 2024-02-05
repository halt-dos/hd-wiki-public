# Web Security
User can specify Web Security settings on this page for Listener

---

### Overview
Bot Protection helps you quickly determine, manage, and mitigate automated requests. You can configure Advance bot settings in order to ensure advanced bot protection.

![websec](/img/waf/v7/docs/websec.png)

### How to Use:
1. Go to **WAF** > **Listeners** > **Advanced Settings** > **Bot Settings**
2. Configure your settings
3. Click **Save Changes**

| Parameter | Accepted Values | Default
| ----------- | ----------- | -------- |
|CSRF Cookie Expiry|Integer|0
|CSRF Token Validity|Integer|60
|Tarpit Delay|Integer|5
|Tarpit Duration|Integer|300


### Description 


##### **CSRF Cookie Expiry**

Users can specify the expiry time of the CSRF cookie in seconds. Set 0 to disable CSRF. This value is dependent on the profile CSRF setting that should be enabled to perform mitigation.

##### **CSRF Token Validity**

Users can specify the grace time period in seconds for which CSRF token will be allowed.

##### **Tarpit Delay**

Users can specify the tarpit delay.

##### **Tarpit Duration**

Users can specify the tarpit duration.

:::note Note 
Tarpit delay and tarpit duration are two different values. For example, user has created a rule of rate limiting of 5mbps and resultant it'll tarpit the end user IP for the tarpit delay of 5 seconds and tarpit duration is set to 10 minutes. It means the end user IP will be got a tarpit delay for 5 seconds for next 10 minutes. After the time end user's IP will be free from tarpit delay and will start getting normal response from WAF device.
:::