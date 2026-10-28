---
sidebar_position: 0
---

# Getting Started

Set up Haltdos APID from start to finish.

---

### Overview

This page lists all the steps needed to start discovering and protecting your APIs with Haltdos APID, in the order in which they should be done. Steps 1 to 5 are required. Steps 6 to 9 are optional and add more capabilities.

| Step | What you do | Required |
| --- | --- | --- |
| 1 | Choose where APID learns about traffic from (sensors) | Yes |
| 2 | Create a collection | Yes |
| 3 | Add an endpoint | Yes |
| 4 | Configure the endpoint: aliases and certificates | Yes |
| 5 | Bind the collection to the endpoint | Yes |
| 6 | Attach the source code repository | Optional |
| 7 | Scan for vulnerabilities (DAST) | Optional |
| 8 | Check pull requests (CI/CD) | Optional |
| 9 | Share with a WAF | Optional |

### Step 1: Configure the Sensors

Sensors are the source of the live traffic that APID analyzes. Configure at least one of them.

1. Go to **Stack** > **APID** > **Sensors**.
2. For traffic that passes through the appliance, use the **Traffic sensor**. Under **Listeners**, type each TCP port that your applications use, such as `80` or `443`, and press Enter.
3. Click **Save & apply**.
4. For access logs sent by a WAF, use the **Log sensor**. Click **Add log sensor**, enter the UDP address and port to listen on, for example `0.0.0.0:10070`, and click **Add log sensor**. Then click **Save**.
5. Configure the WAF or other log source to send its logs to this address.

![Sensors](/img/apid/sensors.png)

See [Sensors](./sensors.md) for details.

### Step 2: Create a Collection

A collection groups the APIs of one application.

1. Go to **Stack** > **APID** > **Collection**.
2. Click **New collection**.
3. Enter a name, for example the name of the application.
4. Click **Add collection**.

![New collection](/img/apid/new_collection.png)

See [Collections](./collections/collections.md) for details.

### Step 3: Add an Endpoint

An endpoint is the host name at which the traffic of your application arrives.

1. Go to **Stack** > **APID** > **Endpoints**.
2. Click **Add endpoint**.
3. Enter the domain, for example `api.example.com`. It must be the same host name that clients use in their requests.
4. Click **Add endpoint**.

If your hosts already appear in **Sensors** > **Shadow services**, you can also click **Add endpoint** next to a host there.

![Add endpoint](/img/apid/add_endpoint.png)

See [Endpoints](./endpoints/endpoints.md) for details.

### Step 4: Configure the Endpoint

1. Open the endpoint and go to **Settings** > **General**.
2. In **Aliases**, add every other host name that the application answers for.
3. In **Certificates**, add the certificate of the domain if the application is served over HTTPS. Without it, APID cannot read encrypted traffic.
4. Optionally add **Tags**.
5. Click **Save Changes**.

![Endpoint settings](/img/apid/settings_general.png)

See [Settings](./endpoints/settings.md) for details.

### Step 5: Bind the Collection to the Endpoint

APID decides which collection a request belongs to by the URI of the request. Without a binding, traffic is not shown in the analytics.

1. Open the endpoint and go to **Settings** > **Collections**.
2. Click **Add binding**.
3. Enter the **URI**. Use `/` to send all requests of the endpoint to the collection, or a path such as `/api/v1` for only a part of it.
4. Select the **Collection**.
5. Enter the **Version** if you know the version of the code that is running. This is optional.
6. Click **Save binding**.

![Add binding](/img/apid/add_binding.png)

To split one endpoint between several applications, add one binding for each path and select a different collection for each.

### Verify That Traffic Is Discovered

Send some requests to the application, then check the following. Allow a short time, because the statistics are summarized every minute.

1. **Endpoints** > your endpoint > **Overview**: charts of the traffic appear in **Traffic Summary** and **API Summary**. Check that the selected time range includes your requests.
2. **Endpoints** > your endpoint > **Inventory** > **Live traffic**: the APIs that were called, with their methods, hits and authentication.
3. **Sensors** > **Shadow services**: hosts that receive traffic but are not linked to any collection. Your host should no longer be listed here.

If nothing appears:

| Check | Fix |
| --- | --- |
| The collection is not bound | Complete Step 5 |
| The traffic does not reach a sensor | Make sure the port is listed under **Traffic sensor** and the traffic passes through the appliance, or that the WAF sends its logs to the **Log sensor** address |
| The application uses HTTPS | Add the certificate in Step 4. The Shadow services table marks such hosts as "no key" |
| Requests use a different host name | Add the name as an alias in Step 4 |
| The time range is wrong | Select a range that includes the requests and click refresh |

### Step 6: Attach the Source Code Repository (Optional)

This lets APID list the APIs defined in your code, build the SBOM and find vulnerable libraries. It also gives the baseline for finding shadow and zombie APIs.

1. Go to **Stack** > **APID** > **Collection** and open the collection.
2. Open the **Settings** tab and select **Repository**.
3. Under **Repository**, enter the **Repository URL** and the **Branch**. For a private repository, enter an **Access token**.
4. If the application uses code from other repositories, click **Add dependency** and enter each one.
5. Click **Save Changes**.
6. Open **SCA Scanning**, set a **Schedule**, **Timezone** and **Start time** for the regular dependency scan, and click **Save Changes**.

The results appear in the **Overview**, **Versions**, **SBOM** and **Findings** tabs. See [Collection Settings](./collections/settings.md).

### Step 7: Scan for Vulnerabilities (Optional)

1. Open the endpoint and go to **Settings** > **DAST Scan**.
2. In **Scan schedule**, check the **Target**, choose how often the scan runs and set the start time. Click **Save**.
3. In **Scan types**, select the checks to apply, and click **Save**.
4. Adjust **Scope**, **Fingerprint** and, if the application needs a login, **Login**. Click **Save** in each section.
5. When the scan completes, open **Vulnerabilities** to see the findings. The PDF report is available in **APID** > **Reports**.

![Scan schedule](/img/apid/dast_schedule.png)

See [DAST Scan](./endpoints/dast_scan.md) for details.

### Step 8: Check Pull Requests (Optional)

1. Go to **Stack** > **APID** > **Collection**, open the collection and go to **Settings** > **CI/CD**.
2. Turn on **Gate enabled**, choose **Fail on severity** and **New findings allowed**, and click **Save Changes**.
3. Copy the generated workflow file into your repository as `.github/workflows/apid-gate.yml`.
4. Add the generated action key to the repository secrets as `HALTDOS_APID_KEY`.

See [Collection Settings](./collections/settings.md).

### Step 9: Share with a WAF (Optional)

1. Go to **Stack** > **APID** > **Integration** and click **Add integration**.
2. Enter a name, select the WAF and the WAF listener that is protected.
3. Choose what to share: endpoints, virtual patching and incidents. Select how often the information is sent.
4. Click **Save integration**.

See [Integration](./integration.md).

### After Setup

- **Incidents** shows dropped requests, upstream errors and server health changes.
- **Suggestions** lists the fixes and next steps that APID recommends.
- **Access Logs** shows the individual requests received from your servers.
- **Reports** has the PDF reports of the vulnerability scans.
- **Change Tracking** on each endpoint shows schema changes and zombie, shadow and rogue APIs.
