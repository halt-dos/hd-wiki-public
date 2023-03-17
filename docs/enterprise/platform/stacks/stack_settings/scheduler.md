---
sidebar_position: 4
---

# Scheduler

Scheduling repeated tasks in Haltdos Platform

---

Haltdos supports automating repeated tasks such as reports, auto-profiling, periodic learning, scanning, etc. Stack users can configure these schedules as per their choice of periodicity to get automated emails / API alerts from the solution.

![scheduler](/img/platform/v6/docs/schedular1.png)

### How to Use:

1. Go to **Stack > Settings > Scheduler**
2. Configure your settings
3. Click Save

| PARAMETERS      | DESCRIPTION                                     | ACCEPTED VALUES | DEFAULT         |
|-----------------|-------------------------------------------------|-----------------|-----------------|
| Add Task        | Click on the Add Task button to schedule a task | Button          | NA              |
| Enabled         | Enable it to make the task active               | Boolean         | False           |
| Task Name       | Enter a user-friendly task name                 | String          | Blank           |
| Task Occurrence | Specify the type of occurrence for the task     | Dropdown        | Blank           |
| Next Run        | Specify the date & time for the task            | Integer         | Current         |
| Timezone        | Select the timezone for the task scheduled      | Drop-down       | Asia/calcutta   |
| Resource        | Specify the listener or  profile                | Drop-down       | Blank           |
| Task Type       | Specify the type of task                        | Dropdown        | Generate Report |
| Report type     | Specify the occurrence of the report            | Drop-down       | Blank           |
| Dashboard       | Select the dashboard for the report             | Drop-down       | Blank           |

