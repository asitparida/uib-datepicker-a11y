angular.module("ui.bootstrap.datepicker.a11y",["ui.bootstrap.dateparser","ui.bootstrap.isClass"]).value("$datepickerA11ySuppressError",!1).value("$datepickerA11yLiteralWarning",!0).constant("UibDatepickerA11yConfig",{datepickerMode:"day",formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",maxDate:null,maxMode:"year",minDate:null,minMode:"day",monthColumns:3,ngModelOptions:{},shortcutPropagation:!1,showWeeks:!0,yearColumns:5,yearRows:4}).controller("UibDatepickerA11yController",["$scope","$element","$attrs","$parse","$interpolate","$locale","$log","dateFilter","UibDatepickerA11yConfig","$datepickerA11yLiteralWarning","$datepickerSuppressError","uibDateParser",function(e,t,a,i,r,n,o,s,l,c,d,u){function p(t){e.datepickerMode=t,e.datepickerOptions.datepickerMode=t}var h=this,m={$setViewValue:angular.noop},D={},f=[];t.addClass("uib-datepicker"),a.$set("role","application"),e.datepickerOptions||(e.datepickerOptions={}),this.modes=["day","month","year"],["customClass","dateDisabled","datepickerMode","formatDay","formatDayHeader","formatDayTitle","formatMonth","formatMonthTitle","formatYear","maxDate","maxMode","minDate","minMode","monthColumns","showWeeks","shortcutPropagation","startingDay","yearColumns","yearRows"].forEach(function(t){switch(t){case"customClass":case"dateDisabled":e[t]=e.datepickerOptions[t]||angular.noop;break;case"datepickerMode":e.datepickerMode=angular.isDefined(e.datepickerOptions.datepickerMode)?e.datepickerOptions.datepickerMode:l.datepickerMode;break;case"formatDay":case"formatDayHeader":case"formatDayTitle":case"formatMonth":case"formatMonthTitle":case"formatYear":h[t]=angular.isDefined(e.datepickerOptions[t])?r(e.datepickerOptions[t])(e.$parent):l[t];break;case"monthColumns":case"showWeeks":case"shortcutPropagation":case"yearColumns":case"yearRows":h[t]=angular.isDefined(e.datepickerOptions[t])?e.datepickerOptions[t]:l[t];break;case"startingDay":angular.isDefined(e.datepickerOptions.startingDay)?h.startingDay=e.datepickerOptions.startingDay:angular.isNumber(l.startingDay)?h.startingDay=l.startingDay:h.startingDay=(n.DATETIME_FORMATS.FIRSTDAYOFWEEK+8)%7;break;case"maxDate":case"minDate":e.$watch("datepickerOptions."+t,function(e){e?angular.isDate(e)?h[t]=u.fromTimezone(new Date(e),D.timezone):(c&&o.warn("Literal date support has been deprecated, please switch to date object usage"),h[t]=new Date(s(e,"medium"))):h[t]=l[t]?u.fromTimezone(new Date(l[t]),D.timezone):null,h.refreshView()});break;case"maxMode":case"minMode":e.datepickerOptions[t]?e.$watch(function(){return e.datepickerOptions[t]},function(a){h[t]=e[t]=angular.isDefined(a)?a:e.datepickerOptions[t],("minMode"===t&&h.modes.indexOf(e.datepickerOptions.datepickerMode)<h.modes.indexOf(h[t])||"maxMode"===t&&h.modes.indexOf(e.datepickerOptions.datepickerMode)>h.modes.indexOf(h[t]))&&(e.datepickerMode=h[t],e.datepickerOptions.datepickerMode=h[t])}):h[t]=e[t]=l[t]||null}}),e.uniqueId="datepicker-"+e.$id+"-"+Math.floor(1e4*Math.random()),e.datePickerUID="dpt_"+Math.floor(1e3*Math.random()),e.disabled=angular.isDefined(a.disabled)||!1,angular.isDefined(a.ngDisabled)&&f.push(e.$parent.$watch(a.ngDisabled,function(t){e.disabled=t,h.refreshView()})),e.isActive=function(t){return 0===h.compare(t.date,h.activeDate)&&(e.activeDateId=t.uid,console.log("hello",e.activeDateId),!0)},this.init=function(t){m=t,D=t.$options||e.datepickerOptions.ngModelOptions||l.ngModelOptions,e.datepickerOptions.initDate?(h.activeDate=u.fromTimezone(e.datepickerOptions.initDate,D.timezone)||new Date,e.$watch("datepickerOptions.initDate",function(e){e&&(m.$isEmpty(m.$modelValue)||m.$invalid)&&(h.activeDate=u.fromTimezone(e,D.timezone),h.refreshView())})):h.activeDate=new Date;var a=m.$modelValue?new Date(m.$modelValue):new Date;this.activeDate=isNaN(a)?u.fromTimezone(new Date,D.timezone):u.fromTimezone(a,D.timezone),m.$render=function(){h.render()}},this.render=function(){if(m.$viewValue){var e=new Date(m.$viewValue),t=!isNaN(e);t?this.activeDate=u.fromTimezone(e,D.timezone):d||o.error('Datepicker directive: "ng-model" value must be a Date object')}this.refreshView()},this.refreshView=function(){if(this.element){if(e.selectedDt=null,this._refreshView(),e.activeDt){e.activeDateId=e.activeDt.uid;var t="#"+e.activeDateId+" button span",a=document.querySelector(t);a&&(a.innerHTML=e.activeDt.label),a=document.querySelector("#tb"+e.datePickerUID+"[aria-activedescendant]"),a&&a.setAttribute("aria-activedescendant",e.activeDateId)}var i=m.$viewValue?new Date(m.$viewValue):null;i=u.fromTimezone(i,D.timezone),m.$setValidity("dateDisabled",!i||this.element&&!this.isDisabled(i))}},this.createDateObject=function(t,a){var i=m.$viewValue?new Date(m.$viewValue):null;i=u.fromTimezone(i,D.timezone);var r=new Date;r=u.fromTimezone(r,D.timezone);var n=this.compare(t,r),o={date:t,label:u.filter(t,a),selected:i&&0===this.compare(t,i),disabled:this.isDisabled(t),past:n<0,current:0===n,future:n>0,customClass:this.customClass(t)||null};return i&&0===this.compare(t,i)&&(e.selectedDt=o),h.activeDate&&0===this.compare(o.date,h.activeDate)&&(e.activeDt=o),o},this.isDisabled=function(t){return e.disabled||this.minDate&&this.compare(t,this.minDate)<0||this.maxDate&&this.compare(t,this.maxDate)>0||e.dateDisabled&&e.dateDisabled({date:t,mode:e.datepickerMode})},this.customClass=function(t){return e.customClass({date:t,mode:e.datepickerMode})},this.split=function(e,t){for(var a=[];e.length>0;)a.push(e.splice(0,t));return a},e.select=function(t){if(e.datepickerMode===h.minMode){var a=m.$viewValue?u.fromTimezone(new Date(m.$viewValue),D.timezone):new Date(0,0,0,0,0,0,0);a.setFullYear(t.getFullYear(),t.getMonth(),t.getDate()),a=u.toTimezone(a,D.timezone),m.$setViewValue(a),m.$render()}else h.activeDate=t,p(h.modes[h.modes.indexOf(e.datepickerMode)-1]),e.$emit("uib:datepicker.mode");e.$broadcast("uib:datepicker.focus")},e.move=function(e){var t=h.activeDate.getFullYear()+e*(h.step.years||0),a=h.activeDate.getMonth()+e*(h.step.months||0);h.activeDate.setFullYear(t,a,1),h.refreshView()},e.toggleMode=function(t){t=t||1,e.datepickerMode===h.maxMode&&1===t||e.datepickerMode===h.minMode&&t===-1||(p(h.modes[h.modes.indexOf(e.datepickerMode)+t]),e.$emit("uib:datepicker.mode"))},e.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var g=function(){h.element[0].focus()};e.$on("uib:datepicker.focus",g),e.keydown=function(t){var a=e.keys[t.which];if(a&&!t.altKey&&!e.disabled)if(t.preventDefault(),h.shortcutPropagation||t.stopPropagation(),"enter"===a||"space"===a){if(h.isDisabled(h.activeDate))return;e.select(h.activeDate)}else!t.ctrlKey||"up"!==a&&"down"!==a?(h.handleKeyDown(a,t),h.refreshView()):e.toggleMode("up"===a?1:-1)},t.on("keydown",function(t){e.$apply(function(){e.keydown(t)})}),e.$on("$destroy",function(){for(;f.length;)f.shift()()})}]).controller("UibDaypickerA11yController",["$scope","$element","dateFilter",function(e,t,a){function i(e,t){return 1!==t||e%4!==0||e%100===0&&e%400!==0?n[t]:29}function r(e){var t=new Date(e);t.setDate(t.getDate()+4-(t.getDay()||7));var a=t.getTime();return t.setMonth(0),t.setDate(1),Math.floor(Math.round((a-t)/864e5)/7)+1}var n=[31,28,31,30,31,30,31,31,30,31,30,31];this.step={months:1},this.element=t,this.init=function(t){angular.extend(t,this),e.showWeeks=t.showWeeks,t.refreshView()},this.getDates=function(e,t){for(var a,i=new Array(t),r=new Date(e),n=0;n<t;)a=new Date(r),i[n++]=a,r.setDate(r.getDate()+1);return i},this._refreshView=function(){var t=this.activeDate.getFullYear(),i=this.activeDate.getMonth(),n=new Date(this.activeDate);n.setFullYear(t,i,1);var o=this.startingDay-n.getDay(),s=o>0?7-o:-o,l=new Date(n);s>0&&l.setDate(-s+1);for(var c=this.getDates(l,42),d=0;d<42;d++)c[d]=angular.extend(this.createDateObject(c[d],this.formatDay),{secondary:c[d].getMonth()!==i,uid:e.uniqueId+"-"+d});e.labels=new Array(7);for(var u=0;u<7;u++)e.labels[u]={abbr:a(c[u].date,this.formatDayHeader),full:a(c[u].date,"EEEE")};if(e.title=a(this.activeDate,this.formatDayTitle),e.rows=this.split(c,7),e.showWeeks){e.weekNumbers=[];for(var p=(11-this.startingDay)%7,h=e.rows.length,m=0;m<h;m++)e.weekNumbers.push(r(e.rows[m][p].date))}},this.compare=function(e,t){var a=new Date(e.getFullYear(),e.getMonth(),e.getDate()),i=new Date(t.getFullYear(),t.getMonth(),t.getDate());return a.setFullYear(e.getFullYear()),i.setFullYear(t.getFullYear()),a-i},this.handleKeyDown=function(e,t){var a=this.activeDate.getDate();if("left"===e)a-=1;else if("up"===e)a-=7;else if("right"===e)a+=1;else if("down"===e)a+=7;else if("home"===e||"end"===e){if(t.ctrlKey)return void("home"===e?(this.activeDate.setMonth(0),this.activeDate.setDate(1)):"end"===e&&(this.activeDate.setMonth(11),this.activeDate.setDate(31)))}else if("pageup"===e||"pagedown"===e)if(t.shiftKey){var r=this.activeDate.getFullYear()+("pageup"===e?-1:1);this.activeDate.setFullYear(r)}else{var n=this.activeDate.getMonth()+("pageup"===e?-1:1);this.activeDate.setMonth(n,1),a=Math.min(i(this.activeDate.getFullYear(),this.activeDate.getMonth()),a)}else"home"===e?a=1:"end"===e&&(a=i(this.activeDate.getFullYear(),this.activeDate.getMonth()));this.activeDate.setDate(a)}}]).controller("UibMonthpickerA11yController",["$scope","$element","dateFilter",function(e,t,a){this.step={years:1},this.element=t,this.init=function(e){angular.extend(e,this),e.refreshView()},this._refreshView=function(){for(var t,i=new Array(12),r=this.activeDate.getFullYear(),n=0;n<12;n++)t=new Date(this.activeDate),t.setFullYear(r,n,1),i[n]=angular.extend(this.createDateObject(t,this.formatMonth),{uid:e.uniqueId+"-"+n});e.title=a(this.activeDate,this.formatMonthTitle),e.rows=this.split(i,this.monthColumns),e.yearHeaderColspan=this.monthColumns>3?this.monthColumns-2:1},this.compare=function(e,t){var a=new Date(e.getFullYear(),e.getMonth()),i=new Date(t.getFullYear(),t.getMonth());return a.setFullYear(e.getFullYear()),i.setFullYear(t.getFullYear()),a-i},this.handleKeyDown=function(e,t){var a=this.activeDate.getMonth();if("left"===e)a-=1;else if("up"===e)a-=this.monthColumns;else if("right"===e)a+=1;else if("down"===e)a+=this.monthColumns;else if("pageup"===e||"pagedown"===e){var i=this.activeDate.getFullYear()+("pageup"===e?-1:1);this.activeDate.setFullYear(i)}else"home"===e?a=0:"end"===e&&(a=11);this.activeDate.setMonth(a)}}]).controller("UibYearpickerA11yController",["$scope","$element","dateFilter",function(e,t,a){function i(e){return parseInt((e-1)/n,10)*n+1}var r,n;this.element=t,this.yearpickerInit=function(){r=this.yearColumns,n=this.yearRows*r,this.step={years:n}},this._refreshView=function(){for(var t,a=new Array(n),o=0,s=i(this.activeDate.getFullYear());o<n;o++)t=new Date(this.activeDate),t.setFullYear(s+o,0,1),a[o]=angular.extend(this.createDateObject(t,this.formatYear),{uid:e.uniqueId+"-"+o});e.title=[a[0].label,a[n-1].label].join(" - "),e.rows=this.split(a,r),e.columns=r},this.compare=function(e,t){return e.getFullYear()-t.getFullYear()},this.handleKeyDown=function(e,t){var a=this.activeDate.getFullYear();"left"===e?a-=1:"up"===e?a-=r:"right"===e?a+=1:"down"===e?a+=r:"pageup"===e||"pagedown"===e?a+=("pageup"===e?-1:1)*n:"home"===e?a=i(this.activeDate.getFullYear()):"end"===e&&(a=i(this.activeDate.getFullYear())+n-1),this.activeDate.setFullYear(a)}}]).directive("uibDatepickerA11y",function(){return{templateUrl:function(e,t){return t.templateUrl||"uib/template/datepicker/a11y/datepicker.html"},scope:{datepickerOptions:"=?"},require:["uibDatepickerA11y","^ngModel"],restrict:"A",controller:"UibDatepickerA11yController",controllerAs:"datepicker",link:function(e,t,a,i){var r=i[0],n=i[1];r.init(n)}}}).directive("uibDaypickerA11y",function(){return{templateUrl:function(e,t){return t.templateUrl||"uib/template/datepicker/a11y/day.html"},require:["^uibDatepickerA11y","uibDaypickerA11y"],restrict:"A",controller:"UibDaypickerA11yController",link:function(e,t,a,i){var r=i[0],n=i[1];n.init(r)}}}).directive("uibMonthpickerA11y",function(){return{templateUrl:function(e,t){return t.templateUrl||"uib/template/datepicker/a11y/month.html"},require:["^uibDatepickerA11y","uibMonthpickerA11y"],restrict:"A",controller:"UibMonthpickerA11yController",link:function(e,t,a,i){var r=i[0],n=i[1];n.init(r)}}}).directive("uibYearpickerA11y",function(){return{templateUrl:function(e,t){return t.templateUrl||"uib/template/datepicker/a11y/year.html"},require:["^uibDatepickerA11y","uibYearpickerA11y"],restrict:"A",controller:"UibYearpickerA11yController",link:function(e,t,a,i){var r=i[0];angular.extend(r,i[1]),r.yearpickerInit(),r.refreshView()}}});