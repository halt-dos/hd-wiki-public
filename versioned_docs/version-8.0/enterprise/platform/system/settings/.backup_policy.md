---
sidebar_position: 1
---

# Backup Policy

Integration with FTP server for backing up and restoration

---

**Haltdos** supports periodic or on-demand backup for storing logs and policies to external FTP / SFTP servers. The platform also supports restoring from FTP if needed.

By default, **Haltdos** retains logs locally on the device for a duration of 90 days. This duration can be increased to at most 550 days depending upon organization policy.

:::info
It is recommended to configure periodic backup to avoid data loss and ensure log availability for compliance and forensic examination.
:::

### How to Use:

1. Go to **Stack > Settings > Security > Backup Policy**
2. Configure your settings
3. Click Save

![backup_policy](/img/platform/backup_policy1.png)

| PARAMETERS           | ACCEPTED VALUES | DEFAULT |
|----------------------|-----------------|---------|
| Log Retention Period | Integer         | 90      |
| Backup Enabled       | Boolean         | False   |
| Backup Host Name     | String          | Blank   |
| Use SFTP             | Boolean         | False   |
| Authentication       | Boolean         | False   |
| Username             | String          | Blank   |
| Password             | String          | Blank   |
| Backup Directory     | String          | Blank   |
| Backup Now           | Button          | Blank   |
| Restore              | Button          | Blank   |

#### Description:

**Log Retention Period**

This policy allows users to set the retention period for backups. This policy refers to the number of days for which logs retain locally on the device.

**Backup Enabled**

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

**Backup Now**

This option allows users to click on the button to back up the current configuration.

**Restore**

This option Click on the button to restore the default configuration