---
sidebar_position: 0
---

# Getting Started

Onboard a website on Haltdos WAF, step by step.

---

### Overview

This page lists, in order, all the steps needed to onboard a new website or API on Haltdos WAF. A website is onboarded by adding it as a **listener**. Adding the listener alone is not enough: it should also be configured for encryption, performance, security and headers before the traffic is moved to the WAF.

| Step | What you do | Where |
| --- | --- | --- |
| 1 | Add the listener | **Apps** > **WAF** > **Listeners** |
| 2 | Enable SSL offloading and attach the certificate | **SSL Management** |
| 3 | Review the operational settings | **Settings** > **Operational** |
| 4 | Check the origin servers | **Load Balancing** > **Server Groups** |
| 5 | Enable caching and compression | **Load Balancing** > **Caching**, **Compression** |
| 6 | Configure the security profile | **Security Profiles** |
| 7 | Redirect HTTP to HTTPS | **Rules** > **Redirection Rules** |
| 8 | Add the security headers | **Rules** > **Header Rules** |
| 9 | Point the traffic to the WAF and verify | DNS, **Incidents** |

:::note
The recommended values in this guide are a good baseline for a public production website. Adjust them to the requirements of your application, and discuss any change that can affect the users, such as blocked countries or file upload limits, with the application owner first.
:::

### Before You Start

Keep the following information ready. It is normally shared by the application owner.

- The domain name of the website, for example `www.example.com`.
- The IP address or domain name and the port of the origin (backend) server.
- The SSL certificate and private key of the domain, if the website uses HTTPS. Upload them in **Resources** > **SSL Certificates** before step 2.
- The type of the application: a website or an API.

### Step 1: Add the Listener

1. Go to **Apps** > **WAF** > **Listeners**.
2. Click **Add Listener** button.
3. Enter a **Name** and the **Domain / Virtual IP** of the website.
4. Add **Tags** to identify the listener, for example `prod` or `uat`.
5. Turn on **Enable Offloading** if the website uses HTTPS.
6. To copy the configuration of an existing listener, select it in **Reference**. This is the quickest way to onboard many similar websites.
7. Select the **Service Type**: HTTP, STREAM or MAIL.
8. Enter the **Origin Servers** in the form `IP:Port`, for example `192.168.0.1:80`.
9. Click **Save**.

![Add Listener](/img/waf/v8/docs/listeners.png)

See [Listener](./listener/listener.md) for details.

### Step 2: Enable SSL Offloading and Attach the Certificate

SSL offloading lets the WAF decrypt the HTTPS traffic, so that it can be inspected.

1. Open the listener and go to **SSL Management**.
2. Turn on **Enable SSL Offloading**.
3. In **SSL Certificate**, select the certificate that belongs to the domain of the listener. A certificate that was not uploaded yet can be added with the **ADD** button.
4. Select the **SSL Cipher Suites**. **INTERMEDIATE (Recommended)** works for most websites.
5. Click **Save Changes**.

![SSL Management](/img/waf/v8/docs/WAFssl.png)

If you manage many websites of the same organization, look at a listener that is already onboarded to see which certificate is used for which domain. See [SSL Management](./listener/ssl_management.md) for details.

### Step 3: Review the Operational Settings

1. Open the listener and go to **Settings** > **Operational**.
2. Check the following options.

| Option | Recommendation |
| --- | --- |
| **Enable Error Handling** | Turn it off if the application shows its own error pages. Turn it on only when the WAF should replace the error pages of the application. |
| **Maximum HTTP Body Size** | Increase it if the application accepts large file uploads. |
| **Enable Logging** | Keep it on, so that requests are logged. |

3. Click **Save Changes**.

![Operational Settings](/img/waf/v8/docs/WAFoperational1.png)

See [Operational Settings](./listener/Setting/operational.md) for details.

### Step 4: Check the Origin Servers

1. Open the listener and go to **Load Balancing** > **Server Groups**.
2. The origin servers that you entered in step 1 are in the **DEFAULT** server group. Check that the address and the port are correct.
3. Open the group to add more servers, to select a health monitor, or to change the connection timeout.

The WAF waits 100 seconds for a response from the origin server by default. If the application needs longer, increase the connection timeout of the group. Otherwise the WAF ends the connection and the user gets a **504 Gateway Timeout** error.

### Step 5: Enable Caching and Compression

Caching and compression reduce the load on the origin server and make the website faster.

**Caching**

1. Open the listener and go to **Load Balancing** > **Caching**.
2. Turn on **Enable Caching**, **Revalidate Cache**, **Enable Background Update** and **Enable Cache Locking**.
3. Set **Browser Cache Expiry** to `0` if the browsers should not keep the cached items.
4. Click **Save Changes**.

![Caching](/img/waf/v8/docs/WAFcaching.png)

**Compression**

1. Go to **Load Balancing** > **Compression**.
2. Turn on **Enable Compression** and **Enable Decompression**.
3. Click **Save Changes**.

![Compression](/img/waf/v8/docs/WAFcompression.png)

See [Caching](./listener/loadBalancing/caching.md) and [Compression](./listener/loadBalancing/compression.md) for details.

### Step 6: Configure the Security Profile

Open the listener, go to **Security Profiles** and open the profile that protects the application, for example **DEFAULT**. Configure the following modules of the profile and click **Save Changes** in each of them.

| Module | Setting | Recommendation |
| --- | --- | --- |
| **Settings** | **Operational Mode** | **RECORD** while you are learning the traffic of a new application, then **MITIGATION** to block the attacks |
| **Settings** | **Paranoia Level** | **HIGH** for the best protection. Lower it if too many valid requests are blocked. |
| **Signatures** | **Status** of all signatures | **PROD**, so that the signatures are enforced |
| **Bot Protection** | **Tor Traffic** | **DROP** |
| **Bot Protection** | **Bad Reputation Traffic** | **DROP** |
| **Geo Filtering** | **BlackListed Countries** | The countries that must not reach the website, for example the countries in which you have no users |
| **JSON Policy** | **Policy Mode** | **STRICT** |

![Security Profile Settings](/img/waf/v8/docs/SecProfilSetting1.png)

![Bot Protection](/img/waf/v8/docs/WAFbotprotection.png)

See [Security Profiles](./listener/profiles/profiles.md), [Settings](./listener/profiles/settings.md), [Signatures](./listener/profiles/signatures.md), [Bot Protection](./listener/profiles/bot.md), [Geo Filtering](./listener/profiles/geo_filtering.md) and [JSON Policy](./listener/profiles/policy/json_policy.md) for details.

### Step 7: Redirect HTTP to HTTPS

A redirection rule sends everyone who opens the website with HTTP to HTTPS, so that the traffic is always encrypted.

1. Open the listener and go to **Rules** > **Redirection Rules**.
2. Click **Add Rule** button.
3. Configure the rule.

| Field | Value |
| --- | --- |
| **Rule Name** | `http to https` |
| **Rule Message** | `http to https` |
| **Rule Priority** | `0` |
| **Match URL** | `^http:\/\/www\.example\.com\/?(.*)$` |
| **Forward URL** | `https://www.example.com/$1` |
| **Response Code** | `302 - Temporary Redirect`, or `301 - Permanent Redirect` once you are sure that the website works over HTTPS |

4. Click **Save Changes**.

![Redirection Rules](/img/waf/v8/docs/waf_redirection.png)

Replace `www.example.com` with the domain of the listener in both the **Match URL** and the **Forward URL**. See [Redirection Rules](./listener/rules/redirectionalrules.md) for details.

### Step 8: Add the Security Headers

Header rules add security headers to every response of the application. Create one rule for each header in **Rules** > **Header Rules** with **Add Rule** button, and click **Save Changes**.

All three rules use the same values for the following fields.

| Field | Value |
| --- | --- |
| **Rule Priority** | `0` |
| **URI** | `.*` |
| **Method** | `ALL` |
| **Evaluation Phase** | `Response Phase` |
| **Rule Action** | `Add Header` |

The rules differ in the following fields.

| Header | Rule Name | Attribute Name | Attribute Value |
| --- | --- | --- | --- |
| HSTS | `strict-transport-security` | `strict-transport-security` | `max-age=3600; includeSubDomains` |
| Clickjacking protection | `Add X Frame Option` | `x-frame-options` | `SAMEORIGIN` |
| MIME sniffing protection | `X-Content-Type add` | `x-content-type-options` | `nosniff` |

![Header Rules](/img/waf/v8/docs/waf_header.png)

See [Header Rules](./listener/rules/headerrules.md) for details.

### Step 9: Point the Traffic to the WAF and Verify

The listener only receives traffic when the DNS record of the website points to the WAF.

1. Change the DNS record of the website, so that it points to the WAF. Cloud WAF deployments are given a protection URL for this, and the domain is pointed to it with a CNAME record.
2. Check the record. The answer should contain the WAF.

   ```
   dig www.example.com
   ```

   If the answer does not contain the WAF, the traffic is not going through it.
3. Open the website in a browser and check that the page loads over HTTPS and that the HTTP address is redirected to HTTPS.
4. Go to **Apps** > **WAF** > **Incidents** and check that the requests are logged for the listener.

![Incidents](/img/waf/v8/docs/incident.png)

### Troubleshooting After Onboarding

| Problem | Cause | Solution |
| --- | --- | --- |
| The traffic does not appear in the WAF | The DNS record does not point to the WAF | Run `dig` on the domain and correct the record |
| **5xx** error from the website | The WAF cannot reach the origin server | From the WAF machine run `telnet <backend-ip> <backend-port>`. A timeout means that the application is not running, or that a firewall blocks the WAF. |
| **403** with a reference ID | A request was dropped, for example by the JSON Policy | Search for the reference ID in **Incidents** and adjust the policy that blocked it |
| **504 Gateway Timeout** | The origin server takes longer than the connection timeout | Increase the connection timeout of the server group in step 4 |
| File upload fails above 10 MB | The maximum HTTP body size is reached | Increase **Maximum HTTP Body Size** in step 3 |
| File upload of a type is blocked | The file extension is restricted | Remove the extension from **Restricted File Upload** in the **Web Policy** of the security profile |
| The website is slow | High load on the WAF or a slow origin server | Check CPU, memory and connections on the WAF machine. Time a request to the origin server directly with `curl -v https://<domain>/<uri> --resolve <domain>:<port>:<backend-ip>` |

To test the origin server directly from the WAF machine, use:

```
curl -v https://<domain>/<uri> --resolve <domain>:<backend-port>:<backend-ip>
```

Check the status code and any error message of the response, and share them with the application owner.
