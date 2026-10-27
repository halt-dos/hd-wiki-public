---
sidebar_position: 6
---

# Settings

Configure the repository, the CI/CD check and the dependency scan of a collection.

---

The Settings tab has three sections: **Repository**, **CI/CD** and **SCA Scanning**.

### Repository

The Git repository that APID imports and scans for this collection. One repository can be attached to a collection. APID reads it to discover the APIs in the code, build the SBOM and find vulnerabilities.

#### How to Use:

1. Go to **Stack** > **APID** > **Collection** and select a collection.
2. Open the **Settings** tab and select **Repository**.
3. Configure your settings.
4. Click **Save Changes**.

![Repository](/img/apid/collection_repository.png)

To detach the repository, click **Remove repository**.

##### **Repository URL**

HTTPS address of the Git repository.

```
    Accepted values: URL

    Default: Blank
```

##### **Branch**

Branch to read.

```
    Accepted values: String

    Default: main
```

##### **Access Token**

Needed for private repositories. Do not put a user name or password in the repository URL.

```
    Accepted values: String

    Default: Blank
```

### Dependency Repositories

Other repositories that the application's code is split across. They are cloned alongside the main repository during the scan. Click **Add dependency** to add one.

![Dependency repository](/img/apid/collection_dependency.png)

##### **Name**

Name to identify the dependency, for example the service name.

```
    Accepted values: String

    Default: Blank
```

##### **Repository URL**

Address of the dependency repository.

```
    Accepted values: URL

    Default: Blank
```

##### **Branch**

Branch of the dependency to read.

```
    Accepted values: String

    Default: main
```

### CI/CD

Flag pull requests that introduce risk, before they merge. A GitHub Action reports every pull request to APID, and APID scans it and labels the ones that introduce risk.

#### How to Use:

1. Open the **Settings** tab and select **CI/CD**.
2. Turn on **Gate enabled**, set the **Fail on severity** and **New findings allowed**.
3. Click **Save Changes**. An **action key** and a ready-to-use workflow are generated.
4. Add the action key to the repository secrets as `HALTDOS_APID_KEY`.
5. Add the workflow to the repository as `.github/workflows/apid-gate.yml`.

### Quality Gate

Decides what makes a pull request fail the check.

![Quality Gate](/img/apid/collection_quality_gate.png)

##### **Gate Enabled**

Accept pull requests reported by the GitHub Action.

```
    Accepted values: Enabled, Disabled

    Default: Disabled
```

##### **Fail on Severity**

New findings and schema changes at this level and above block the pull request.

```
    Accepted values: Critical, High, Medium, Low

    Default: High
```

##### **New Findings Allowed**

Number of new findings that are tolerated. 0 flags any new finding.

```
    Accepted values: Integer

    Default: 0
```

The branch that is checked is the repository branch. Pull requests into this branch are checked, and merges into it refresh the baseline.

### GitHub Action

The workflow that reports each pull request and posts the result. The runner only needs to reach the Haltdos console and have `curl` and `jq`. If the console is public, a GitHub-hosted runner such as `ubuntu-latest` can be used.

:::caution
The action key is a secret. Keep it in the repository secrets and do not publish it.
:::

### Pull Request Checks

Lists the recent evaluations of pull requests. It only labels the risk and never blocks the merge by itself. Every entry shows the result, the repository, the pull request, the branches, the author, the number of new endpoints, new endpoints without authentication and new findings, and the reasons.

![Pull request checks](/img/apid/collection_pr_checks.png)

| Result | Description |
| --- | --- |
| **Pass** | The pull request meets the quality gate. |
| **Would Block** | The pull request does not meet the quality gate. |
| **No Baseline** | There is no earlier version to compare with yet. |
| **Error** | The check could not be completed. |

The reasons include new endpoints, new endpoints without authentication, removed endpoints, removed authentication, schema changes, new findings, new vulnerable dependencies and exposure of sensitive data.

### SCA Scanning

How often dependency-vulnerability scanning runs. Full scans run through CI/CD only.

#### How to Use:

1. Open the **Settings** tab and select **SCA Scanning**.
2. Configure your settings.
3. Click **Save Changes**.

![SCA Scanning](/img/apid/collection_sca_scanning.png)

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
