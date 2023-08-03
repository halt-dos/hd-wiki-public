---
sidebar_position: 3
---

# Backup Policy

Integration with FTP server for backing up and restoration

---

## Overview

Haltdos supports periodic or on-demand backup for storing logs and policies to external FTP / SFTP servers. The platform also supports restoring from FTP if needed.
By default, Haltdos retains logs locally on the device for a duration of 90 days. This duration can be increased to at most 550 days depending upon organization policy.

**Note** It is recommended to configure periodic backup to avoid data loss and ensure log availability for compliance and forensic examination

![Backup Policy](/img/platform/v7/docs/backup.png)


How to Use:
1. Go to **Stack > Instances > > Backup Policy**
2. Configure your settings
3. Click **Save Changes**

| PARAMETERS           | ACCEPTED VALUES | DEFAULT |
|----------------------|-----------------|---------|
| Log Retention Period | Integer         | 90 days   |
| Backup Enabled      | Boolean       | Master  |
| Cleanup Enabled |   Boolean 
| Backup Host Name       | Drop-down       | Master  |
| Use SFTP         | Boolean      | Blank   |
| Authentication    | Boolean        | 0       |
| Username       | String      | 0       |
| Password | Integer & String        | 0       |
| Backup Directory      | String        | Empty   |

## Description

**Log Retention Period**

This policy allows users to set the retention period for backups. This policy refers to the number of days for which logs retain locally on the device.

**Backup Enabled**

This option allows users to enable or disable the backup settings.

**Cleanup Enabled**

This option allows users to enable or disable the backup settings.

**Backup Host Name**

This option allows users to specify the hostname or IP address of the backup server. 

**Use SFTP**

This option helps to choose if the user wants data transfer is over SFTP (Port 22), otherwise data will transfer using FTP (Port 21). Users can enable or disable the settings as per their chioce. By default, it is set to disable.

**Authentication**

This option allows users to set a user authentication method to access the backup server. By default, this is set to disable.

**Username**
Users can only use this option when Authentication is set to enable. This option allows users to set a username to authenticate the people

**Password**
This option allows users to set the desired password to authenticate the user. This option will only be available when authentication is set to enable.

**Backup Directory**
This option allows users to specify the directory on the backup server where they can use credential information to access the backup server.
