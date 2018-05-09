# ECS Summit website

## To change for new people for 2019

There are several TODO's in some files please look for them in the following files:

* Change the homepage -> /src/containers/home/index.js
* Change the schedule -> /src/containers/schedule/events.js
* Change the committee -> /src/containers/committee/committee.js
* Change the advisors -> /src/containers/committee/AdvisorsList.js
This one might be hard but ...
* Update the url variable in registrationForm located at /src/components/registrationForm/index.js
    * You need this to add them to a google spreadsheet
    * you can say make a copy of the previous google spreadsheet and under Tools > Script Editor
    * You can then go under Publish > Deploy as web app ...
    * MAKE SURE **Who has access to this app** IS SET TO **Anyone, even anonymous**
    * It will then have you authorize the app and once done you can now test it
* You need to follow those same steps for the volunteerForm located at /src/components/volunteerForm/index.js

If you have any other questions please feel free to message me!

## To change for new people past 2019

You must complete the steps above as well as these additional steps:

* Change the homepage -> /src/containers/home/index.js
    * Change the date as well as everything above
* Change the schedule page -> /src/containers/schedule/index.js
    * Change the defaultDate and numDays fields; More information on what they are is listed in the file



Good Luck!