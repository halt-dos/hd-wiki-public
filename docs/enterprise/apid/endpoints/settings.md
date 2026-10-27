---
sidebar_position: 6
---

# Settings

Configure how traffic on an endpoint is handled.

---

The Settings tab has three sections: **General**, **Collections** and [**DAST Scan**](./dast_scan.md).

### General

#### How to Use:

1. Go to **Stack** > **APID** > **Endpoints** and select an endpoint.
2. Open the **Settings** tab and select **General**.
3. Configure your settings.
4. Click **Save Changes**.

![General](/img/apid/settings_general.png)

##### **Domain**

The host this endpoint answers for.

```
    Accepted values: Domain name

    Default: Blank
```

##### **Aliases**

Other host names this endpoint also answers for. Traffic to an alias is treated like traffic to the domain.

```
    Accepted values: Domain names

    Default: Blank
```

##### **Tags**

Labels used for search and filters.

```
    Accepted values: String

    Default: Blank
```

##### **Certificates**

Certificates bound to this endpoint. They allow APID to inspect encrypted HTTPS traffic.

```
    Accepted values: Certificates

    Default: Blank
```

### Collections

Decide which part of the traffic belongs to which collection. A binding sends every request whose path starts with a URI to a collection.

#### How to Use:

1. Open the **Settings** tab and select **Collections**.
2. Click **Add binding** button.
3. Configure your settings.
4. Click **Save binding**.

![Collections](/img/apid/settings_collections.png)

![Add binding](/img/apid/add_binding.png)

##### **URI**

Requests whose path starts with this URI are attributed to the collection.

```
    Accepted values: Path, for example /api/v1

    Default: Blank
```

##### **Collection**

The collection that these requests are attributed to.

```
    Accepted values: Collection

    Default: Blank
```

##### **Version**

The version of the code that is running for this endpoint, if known.

```
    Accepted values: String

    Default: Blank
```
