# uib-datepicker-a11y
Angular UI Bootstrap datepicker with a11y fixes

<br />
##Changes incorporated

1.	Fix for reading out the correct date number with respect to the days on the pop up edge when we move between months
2.	Support for CTRL + HOME – go to the first day of the current year
3.	Support for CTRL + END – go to the last day of the current year
4.	Support for SHIFT + PAGEUP  – go to the same day in previous year
5.	Support for SHIFT + PAGEDOWN  – go to the same day in next year

All fixes are enhancements/quick-fixes  over the capabilities natively provided by the plugin itself. Since the plugin natively does not support selecting a range of  dates, no  a11y fixes/enhancements have been provided or planned for. 

<br />
##Dev Setup

Project Source @ https://github.com/asitparida/uib-datepicker-a11y
Bower Package : uib-datepicker-a11y

1.	Provide the reference to the ‘uib-datepicker-a11y.min.js’ file 
2.	Load the ‘ui.bootstrap.datepickerPopup.a11y’ as dependency in your application
3.	Then, we need to provide the following change in the html as compared to the erstwhile directive 

Replace the
##### uib-datepicker-popup="{{format}}" with uib-datepicker-a11y-popup="{{format}}"

