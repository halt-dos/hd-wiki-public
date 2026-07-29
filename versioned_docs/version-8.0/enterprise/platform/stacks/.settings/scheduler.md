---
sidebar_position: 4
---

# Task Scheduler

Scheduling repeated tasks in Haltdos Platform

---

Haltdos supports automating repeated tasks such as reports, auto-profiling, periodic learning, scanning, etc. Stack users can configure these schedules as per their choice of periodicity to get automated emails / API alerts from the solution.

![scheduler](/img/platform/v7/docs/task_scheduler.png)

### How to Use:

1. Go to **Stack > Settings > Task Scheduler**
2. Configure your settings
3. Click **Save Changes**

| PARAMETERS      | DESCRIPTION                                     | ACCEPTED VALUES | DEFAULT         |
|-----------------|-------------------------------------------------|-----------------|-----------------|
| Enabled         | Enable it to make the task active               | Boolean         | False           |
| Task Name       | Enter a user-friendly task name                 | String          | Blank           |
| Task Occurrence | Specify the type of occurrence for the task     | Dropdown        | Blank           |
| Next Run        | Specify the date & time for the task            | Integer         | Current         |
| Timezone        | Select the timezone for the task scheduled      | Drop-down       | Asia/calcutta   |
| Resource        | Specify the listener or  profile                | Drop-down       | Blank           |
| Task Type       | Specify the type of task                        | Dropdown        | Generate Report |
| Dashboard       | Select the dashboard for the report             | Drop-down       | Blank           |
| Report Duration | Specify the occurrence of the report            | Drop-down       | Blank           |

### Description

**Enabled**

Enable it to make the task active

```
    Accepted values: Enable / Disable

    Default: Disable 
```


**Task Name**

Users can specify the Task Name as per scheduling task.

```
    Accepted values: String

    Default: Blank 
```


**Task Occurrence**

It specifies type of occurrence for the task like for Once, minute, hour or daily.

```
    Accepted values: Select the task occurence

    Default: Blank 
```


**Next Run**

User can specify the date & time for the task 

```
    Accepted values: Integer

    Default: Blank 
```


**Timezone**        

Select the timezone for the task scheduled.

```
    Accepted values: Select Timezone

    Default: Asia/Calcutta 
```


**Resource** 

Specify the listener or  profile

```
    Accepted values: Select App/Resource

    Default: Blank 
```


**Task Type**

Specify the type of task

```
    Accepted values: Select Task Type

    Default: Genrate Report 
```


**Dashboard**

Select the dashboard for the report 

```
    Accepted values: Select Dashboard

    Default: Blank 
```


**Report Duration**  

Specify the occurrence of the report

```
    Accepted values: Select Duration

    Default: Blank 
```


**Notify Users**  

Users can use this feature to get task on mail.

```
    Accepted values: String

    Default: Blank 
```

