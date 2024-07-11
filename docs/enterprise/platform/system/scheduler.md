---
sidebar_position: 10
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


### Description

**Task Name**

Users can specify the Task Name as per scheduling task.

    Accepted values: String

    Default: Blank 

**Task Occurrence**

It specifies type of occurrence for the task like for Once, minute, hour or daily.

    Accepted values: Select Task Occurence

    Default: Once 

**Next Run**

User can specify the date & time for the task 

    Accepted values: Integer

    Default: Blank 

**Timezone**        

Select the timezone for the task scheduled.

    Accepted values: Select Timezone

    Default: Asia / Calcutta 

**Resource** 

Specify the listener or  profile

    Accepted values: Select App / Resources

    Default: Blank 

**Task Type**

Specify the type of task

    Accepted values: Select Task Type

    Default: Genrate Report 

**Dashboard**

Select the dashboard for the report 

    Accepted values: Select Dashboard

    Default: Blank 

**Report Duration**  

Specify the occurrence of the report

    Accepted values: Integer

    Default: Blank 

**Notify Users**  

Users can use this feature to get task on mail.

    Accepted values: String

    Default: Blank 
