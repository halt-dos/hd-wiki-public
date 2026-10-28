---
sidebar_position: 7
---

# DAST Scan

Schedule and configure vulnerability scans of an endpoint.

---

### Overview

A DAST (Dynamic Application Security Testing) scan tests the running application of the endpoint for vulnerabilities. This page holds the schedule and every option of the scan. Every section is saved separately with its own **Save** button. The findings are shown in [Vulnerabilities](./vulnerabilities.md) and the reports in [Reports](../reports.md).

### How to Use:

1. Go to **Stack** > **APID** > **Endpoints** and select an endpoint.
2. Open the **Settings** tab and select **DAST Scan**.
3. Configure each section and click **Save** in it.

### Scan Schedule

The target that the scan checks, and how often it runs. Every run is kept in the scan's history.

![Scan Schedule](/img/apid/dast_schedule.png)

##### **Target**

URL of the application to scan.

```
    Accepted values: URL

    Default: https://<endpoint domain>
```

##### **Schedule**

How often the scan runs.

```
    Accepted values: Run once, or a repeating schedule

    Default: Run once
```

##### **Timezone**

Timezone the start time is in.

```
    Accepted values: Timezone

    Default: Browser timezone
```

##### **Start Time**

When the first scan runs.

```
    Accepted values: Date and time

    Default: Current time
```

### Scan Types

Active scans send test requests to the target. At least one scan type must be selected for a scan to be used.

![Scan Types](/img/apid/dast_scan_types.png)

| Scan type | Finds |
| --- | --- |
| **Remote File Inclusion** | Inclusion of files from other servers |
| **Server-side Validations** | Input that is validated only in the browser |
| **Path Traversal** | Access to files outside the intended folder |
| **Source Code Disclosure** | Exposure of application source code |
| **Cross-site Scripting** | Injection of scripts into pages |
| **SQL Injection** | Injection into database queries |
| **Command Injection** | Execution of operating system commands |
| **External Redirect** | Redirects to other websites |
| **Buffer Overflow** | Memory handling errors |
| **Parameter Tempring** | Manipulation of request parameters |
| **CRLF injection** | Manipulation of response headers |
| **Scripting** | Additional custom script rules |
| **Format String Error** | Unsafe handling of formatted text |
| **Directory Traversal** | Directory listings visible to users |

### Scope

How far a scan crawls and how hard it tests.

![Scope](/img/apid/dast_scope.png)

##### **Depth Limit**

How many links deep the scan follows.

```
    Accepted values: 1 - 1000

    Default: 5
```

##### **Attack Strength**

How many requests are sent per test. A higher strength tests more variations and takes longer.

```
    Accepted values: Low, Medium, High, Insane

    Default: Low (up to 6 requests)
```

##### **Include Subdomains**

Also scan the subdomains of the target.

```
    Accepted values: Enabled, Disabled

    Default: Disabled
```

##### **Included URLs**

Only these URLs are scanned. If empty, the whole target is scanned.

```
    Accepted values: URLs

    Default: Blank
```

##### **Excluded URLs**

These URLs are never scanned, for example logout or delete pages.

```
    Accepted values: URLs

    Default: Blank
```

### Fingerprint

Tell the scan what the target runs. The scan skips the tests that do not apply, so it is faster and quieter. All options are optional.

![Fingerprint](/img/apid/dast_fingerprint.png)

| Option | Accepted values |
| --- | --- |
| **Operating systems** | Linux, MacOS, Windows, Other |
| **Databases** | MySQL, PostgreSQL, Microsoft SQL Server, Oracle, SQLite, MS Access, Firebird, SAP MaxDB, Sybase, IBM Db2, HSQLDB, MongoDB, CouchDB, Other |
| **Web servers** | Apache, IIS, Tomcat, Other |
| **Languages** | ASP, C, JavaScript, JSP / Servlet, XML, Java, PHP, Python, Ruby, Other |

### Login

Lets the scan sign in, so that it can reach the pages behind the login.

:::tip
Use a dedicated test account with minimum privileges for scanning.
:::

![Login](/img/apid/dast_login.png)

##### **Sign in before scanning**

The scan logs in with the details below first.

```
    Accepted values: Enabled, Disabled

    Default: Disabled
```

##### **Login URL**

Page the login form is posted to.

```
    Accepted values: URL

    Default: Blank
```

##### **Username field** / **Password field**

Names of the username and password inputs in the form.

```
    Accepted values: String

    Default: Blank
```

##### **Username** / **Password**

The account the scan signs in with.

```
    Accepted values: String

    Default: Blank
```

##### **Verification tag**

Text that only appears once signed in, such as Logout. The scan uses it to confirm that the login worked.

```
    Accepted values: String

    Default: Blank
```

##### **CSRF field**

Name of the anti-CSRF token input, if the form has one.

```
    Accepted values: String

    Default: Blank
```

### Extra Request Parameters

Additional fields that are sent with the login request. Enter a **Name** and a **Value** and click **Add parameter**. They are saved together with the login.
