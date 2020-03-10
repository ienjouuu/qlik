/**
 * @license
 * Copyright 2018 Nodier Torres. All rights reserved.
 * 
 * Copyrights licensed under the terms of the MIT license.
 * Original source <https://github.com/NOD507/SenseDateRangePicker>
 */
define(["qlik","jquery","./lib/moment.min","./calendar-settings","css!./lib/daterangepicker.css","./lib/daterangepicker"],function(qlik,$,moment,CalendarSettings){"use strict";function createDate(num){return moment(86400*(num-25569)*1e3).utc().format("YYYYMMDD").toString()}function createMoment(str,format){return isNaN(str)?moment.utc(str,format):moment.utc(createDate(str),"YYYYMMDD")}function createRanges(props){var ranges={};return ranges[props.today]=[moment().startOf("day"),moment().startOf("day")],ranges[props.yesterday]=[moment().subtract(1,"days").startOf("day"),moment().subtract(1,"days").startOf("day")],ranges[props.lastXDays.replace("$","7")]=[moment().subtract(6,"days").startOf("day"),moment().startOf("day")],ranges[props.lastXDays.replace("$","30")]=[moment().subtract(29,"days").startOf("day"),moment().startOf("day")],ranges[props.thisMonth]=[moment().startOf("month").startOf("day"),moment().endOf("month").startOf("day")],ranges[props.lastMonth]=[moment().subtract(1,"month").startOf("month").startOf("day"),moment().subtract(1,"month").endOf("month").startOf("day")],ranges}function createDateStates(pages,sortAscending){var dateStates={};return pages.forEach(function(page){page.qMatrix.forEach(function(row){var d=createDate(row[0].qNum);dateStates[d]=row[0].qState,"S"===row[0].qState&&(sortAscending?(dateStates.rangeStart=dateStates.rangeStart||row[0].qNum,dateStates.rangeEnd=row[0].qNum):(dateStates.rangeEnd=dateStates.rangeEnd||row[0].qNum,dateStates.rangeStart=row[0].qNum))})}),dateStates}function createHtml(dateStates,DateFormat,props){var html="<div>";return html+='<div class="bootstrap_inside pull-right show-range" >',html+='   <i class="lui-icon lui-icon--calendar"></i>&nbsp;<span>',dateStates.rangeStart?(html+=createMoment(dateStates.rangeStart).format(DateFormat),dateStates.rangeEnd&&dateStates.rangeEnd!==dateStates.rangeStart&&(html+=props.separator+createMoment(dateStates.rangeEnd).format(DateFormat))):html+=props.defaultText,html+='</span> <b class="lui-button__caret lui-caret"></b>',html+="</div>",html+="</div>"}return{methods:{createDate:createDate,createMoment:createMoment,createRanges:createRanges,createDateStates:createDateStates,createHtml:createHtml},initialProperties:{version:1,qListObjectDef:{qDef:{autoSort:!1,qSortCriterias:[{qSortByNumeric:-1},{qSortByState:1}]},qShowAlternatives:!0,qFrequencyMode:"V",qInitialDataFetch:[{qWidth:1,qHeight:1e4}]},advanced:!1},exportProperties:null,importProperties:null,definition:CalendarSettings,support:{snapshot:!1,export:!1,exportData:!1},paint:function($element,layout){var self=this,interactionState=this._interactionState,noSelections=!0===this.options.noSelections,sortAscending=layout&&layout.qListObject&&layout.qListObject.qSortCriterias&&"1"==layout.qListObject.qSortCriterias.qSortByNumeric;this.dateStates=createDateStates(layout.qListObject.qDataPages,sortAscending),self.app||(self.app=qlik.currApp(this));var qlikDateFormat=layout.qListObject.qDimensionInfo.qNumFormat.qFmt||self.app.model.layout.qLocaleInfo.qDateFmt,outDateFormat=layout.props.format||qlikDateFormat;moment.locale(layout.props.locale);var minDate=createMoment(layout.props.minDate,qlikDateFormat),maxDate=createMoment(layout.props.maxDate,qlikDateFormat),startDate=createMoment(layout.props.startDate,qlikDateFormat),endDate=createMoment(layout.props.endDate,qlikDateFormat);$("#dropDown_"+layout.qInfo.qId).remove(),$element.html(createHtml(this.dateStates,outDateFormat,layout.props));var config={singleDatePicker:layout.props.isSingleDate,preventSelections:noSelections,locale:{format:outDateFormat,separator:layout.props.separator},parentEl:"#grid",autoUpdateInput:!1,autoApply:!0,opens:$element.offset().left<500?"right":"left",id:layout.qInfo.qId,getClass:function(date){var d=date.format("YYYYMMDD");return self.dateStates[d]?"state"+self.dateStates[d]:"nodata"}};minDate.isValid()&&(config.minDate=minDate),maxDate.isValid()&&(config.maxDate=maxDate),startDate.isValid()?config.startDate=startDate:config.startDate=config.minDate,endDate.isValid()?config.endDate=endDate:config.endDate=config.maxDate,layout.props.CustomRangesEnabled&&(config.locale.customRangeLabel=layout.props.customRangeLabel,config.ranges=createRanges(layout.props)),1===interactionState&&$element.find(".show-range").qlikdaterangepicker(config,function(pickStart,pickEnd,label){if(!noSelections&&pickStart.isValid()&&pickEnd.isValid()){var dateBinarySearch=function(seachDate,lowIndex,highIndex){if(lowIndex===highIndex)return lowIndex;var middleIndex=lowIndex+Math.ceil((highIndex-lowIndex)/2),middleDate=moment.utc(layout.qListObject.qDataPages[0].qMatrix[middleIndex][0].qText,qlikDateFormat);return seachDate.isAfter(middleDate)?dateBinarySearch(seachDate,lowIndex,middleIndex-1):dateBinarySearch(seachDate,middleIndex,highIndex)},lastIndex=layout.qListObject.qDataPages[0].qMatrix.length-1,lowIndex=dateBinarySearch(pickEnd.startOf("day"),0,lastIndex),highIndex=dateBinarySearch(pickStart,lowIndex,lastIndex),qElemNumbers=layout.qListObject.qDataPages[0].qMatrix.slice(lowIndex,highIndex+1).map(function(fieldValue){return fieldValue[0].qElemNumber});self.backendApi.selectValues(0,qElemNumbers,!1)}})}}});