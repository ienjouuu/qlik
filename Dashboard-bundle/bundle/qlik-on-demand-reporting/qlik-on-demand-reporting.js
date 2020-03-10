/**
 * @license
 * Copyright (c) 2018 S-cubed Aps DK. All rights reserved.
 * 
 * Copyrights licensed under the terms of the MIT license.
 * Original source <https://github.com/bohua/nprinting-sense-on-demand>
 */
define(["jquery","qlik","./js/properties","./js/helpers","text!./css/qlik-on-demand-reporting.css","text!./template/view-main-single.html","text!./template/view-popup.html","text!./template/view-senseid-mismatch-popup.html","qvangular","core.utils/deferred"],function(d,e,t,f,n,o,p,l,g,v){d("<style>").html(n).appendTo("head");var h,m=e.currApp(),q={export:{},delete:{},download:null};function w(){var o=[];return h.map(function(e){var t,n,i,s;o.push((t=e,n=v(),i=!1,(s=function(r){return r.length>=t.selectedCount?r:m.createCube({qDimensions:[{qDef:{qFieldDefs:[t.fieldName]}}],qInitialDataFetch:[{qTop:r.length,qLeft:0,qHeight:1e4,qWidth:1}]}).then(function(e){var t=e.layout.qHyperCube.qDataPages[0].qMatrix;m.destroySessionObject(e.layout.qInfo.qId);for(var n=0;n<t.length;n++){var o=t[n].map(function(e){return i?e.qNum:isNaN(e.qNum)?e.qText:(i=!0,e.qNum)});r=r.concat(o)}return s(r)})})([]).then(function(e){n.resolve({fieldName:t.fieldName,selectedCount:e.length,selectedValues:e,isNumeric:i})}),n.promise))}),v.all(o)}return{support:{snapshot:!1,export:!1,exportData:!1},definition:t,template:o,controller:["$scope","$element","$interval",function(e,t,n){var o;o=e,m.model.properties.published||m.getObjectProperties(o.layout.qInfo.qId).then(function(e){var t=!1;e.properties.npsod.conn.qAppId?e.properties.npsod.conn.qAppId!=m.id&&(g.getService("luiDialog").show({template:l,closeOnEscape:!0,closeOnOutside:!0}),e.properties.npsod.conn.qAppId=m.id,t=!0):(e.properties.npsod.conn.qAppId=m.id,t=!0),t&&e.setProperties(e.properties).then(function(){m.doSave()})}),e.downloadable=!1;var u=e.layout.npsod.conn,s=null;if(e.showDialog=function(){e.object&&1===e.object.getInteractionState()&&e.popupDg()},void 0===e.FirstTime){e.FirstTime=!0;var r="ontouchstart"in document.documentElement?"touchstart":"click";d(t).find("button.lui-button").bind(r,e.showDialog)}var i=d(t).parents(".qv-inner-object"),a=d(t).parents(".qv-object");i.css("background","transparent"),a.css("border","none"),a.find(".lui-icon--expand ").remove();var c=m.selectionState();c.OnData.bind(function(){h=c.selections}),e.popupDg=function(){g.getService("luiDialog").show({template:p,controller:["$scope","$interval",function(r,n){r.disableNewReport=!1,r.stage="",r.loadingMessage="",r.errorMessage="",r.loadingCount=0;var o="";function i(){return f.doGetTasks(u.server,u.app).then(function(e){if(e.data){var t=JSON.stringify(e.data.items);t!==o&&(o=t,r.taskList=e.data.items,r.taskList.some(function(e){return"running"===e.status})?s||(s=n(function(){i()},1e3)):s&&(n.cancel(s),s=null))}}).catch(function(e){l(e)})}function p(e){r.loadingMessage=e,r.stage="loading"}function l(e){0===e.status||404===e.status?(r.disableNewReport=!0,r.errorMessage="Unable to connect to server."):1===e.status?(r.disableNewReport=!0,r.errorMessage="No NPrinting connections configured for this Sense app."):400===e.status?r.errorMessage="Incomplete configuration.":403===e.status?(r.disableNewReport=!0,r.errorMessage="Server access blocked by server."):r.errorMessage="Unknown error.",r.go2OverviewStage(!1)}r.go2OverviewStage=function(e){e?(p("Refreshing data..."),i().then(function(){r.stage="overview"})):r.stage="overview"},r.go2SelectReportStage=function(){r.errorMessage="",p("Fetching reports..."),f.doGetReportlist(u.server,u.app).then(function(e){r.reportList=e,r.stage="selectReport",r.$apply()}).catch(function(e){l(e)})},r.go2selectFormatStage=function(t){p("Fetching formats..."),f.doGetExportFormats(u.server,t.id).then(function(e){r.currReport=t,r.outputFormats=e.data.outputFormats,r.stage="selectFormat",r.$apply()}).catch(function(e){l(e)})},r.exportReport=function(e){var t,n,o,i,s,a,c;n=e?(t=r.currReport.id,e):(t=u.report,u.exportFormat),p("Initializing report..."),(o={conn:u,report:t,format:n},i=o.conn,s=o.report,a=o.format,c=v(),q.export[s]?c.reject({message:"",status:1}):s&&a?(q.export[s]=!0,w().then(function(r){if(!i.server)throw"Server Connection is not specified";var e=[];if(!i.id){if(!i.app)throw"App is not specified";e.push(f.getConnections(i.server,i.app))}return Promise.all(e).then(function(e){var t=e.shift();t&&0<t.length&&(i.id=t[0].id);var n=f.doGetActionURL(i.server,"api/v1/ondemand/requests"),o={type:"report",config:{reportId:s,outputFormat:a},selections:r,connectionId:i.id};return d.ajax({url:n,method:"POST",contentType:"application/json",data:JSON.stringify(o),xhrFields:{withCredentials:!0}}).then(function(){c.resolve()})})}).catch(function(e){c.reject(e)}).finally(function(){delete q.export[s]})):c.reject({message:"Missing template or format",status:400}),c.promise).then(function(){r.go2OverviewStage(!0)}).catch(function(e){l(e)})},r.deleteTask=function(e){if(!q.delete[e.id]){q.delete[e.id]=!0;var t=e.status;e.status="deleting",f.doDeleteTask(u.server,e.id).then(function(){delete q.delete[e.id],i()}).catch(function(){e.status=t,delete q.delete[e.id]})}},r.downloadTask=function(e){q.download!=e&&(q.download=e,f.downloadTask(u.server,e).finally(function(){q.download=null}))},r.cancel=function(){r.close()},p("Connecting..."),f.getConnections(u.server,u.app).then(function(e){0!==e.length?f.getLoginNtlm(u.server).then(function(){r.go2OverviewStage(!0)}).catch(function(e){l(e)}):l({status:1})}).catch(function(e){l(e)})}],input:{stage:e.stage},closeOnEscape:!0}).closed.then(function(){s&&(n.cancel(s),s=null)})}}]}});