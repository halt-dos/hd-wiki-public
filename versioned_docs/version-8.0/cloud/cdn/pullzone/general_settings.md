---
sidebar_position: 2
---

# General Settings

User can specify general settings on the current pullzone

---

User can configure below settings for pullzone.

**How to Use**

1. Go to **CDN > Pullzones > General Settings**.

2. Configure Settings.

3. Click on Save.

| SETTINGS              | ACCEPTED VALUES                                             | DEFAULT                                                                  |
|-----------------------|-------------------------------------------------------------|--------------------------------------------------------------------------|
| ORIGIN URL            | HTTP URL                                                    | http://resourcename/                                                     |
| HOSTNAME              | String                                                      | Hostname                                                                 |
| Add Custom Hostnames  | String                                                      | Blank                                                                    |
| Cache Expiry Time     | Choose from the dropdown (ex. Respect Origin Cache-Control) | Respect Origin Cache-Control, Override: 1 year, Override: 3 months, etc. |
| Disable Cookies       | Toggle                                                      | On                                                                       |
| Vary Cache By         | Choose from the predefined list                             | URL Query String                                                         |
| Add CORS Header For   | String                                                      | eot, ttf, woff, woff2, css                                               |
| Add Canonical Headers | Toggle                                                      | Off                                                                      |
| Ignore Vary Header    | Toggle                                                      | On                                                                       |
| Forward Host Header   | Toggle                                                      | Off                                                                      |
| Purge                 | Zone, URL                                                   | None                                                                     |

**ORIGIN URL**

Specify the HTTP URL of your back-end server on which you need to do caching. We can update origin url using edit button and click again to save it.

**Add Custom Hostnames**

Custom hostnames can be used instead of our default hdcdn.xyz hostname. After adding the hostname, create a CNAME record.

**Cache Expiry Time**

Configure cache expiry time after which cached data will be re-validated.

**Disable Cookies**

Enable this feature to strip all the Set-Cookie headers from the zone hostname. It also gives you a cookie less domain.

**Vary Cache By**

Enable Vary Cache to use each of the selected parameters as part of the cache keys. Each parameters combination stores its own separate cached file.

- **URL Query String** : Enable this feature to use it as part of the caching key. For example, image.jpg and image.jpg?v=1 will be treated as two separate files.

- **User Country Code** : Enable this feature to use the country code of the user as part of the caching key. Users from different countries will get different cached files.

- **Browser WebP Support** : Enable this feature to use requesting user's support for WebP as part of the caching key. Browsers that support WebP will get different cached than browsers that do not.

**Add CORS Header For**

Enable this feature to automatically add CORS headers (Cross-Origin Resource Sharing) to all requests to files along with extensions from the list.

**Add Canonical Headers**

Enable this feature to automatically add a Canonical link header to your requests targeting to your origin URL. Perfect for SEO optimization.

**Ignore Vary Header**

Enable this feature to ignore the Vary header for the best possible Cache Hit Rate and Performance.

**Forward Host Header**

Ensure it remains disabled in most cases. Enable this feature to forward the original host header of the request to the origin server.

**Purge**

Purging a URL will remove the file from the CDN cache and re-download it from your origin server. Please enter the exact CDN URL of each individual file. Note: We don't support Wildcard values.

- **Purge Zone** : Purges all the files cached in the zone.

- **Purge URL** : Purges all the files specified in the URL input field.

