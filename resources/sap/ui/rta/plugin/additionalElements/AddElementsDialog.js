/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/base/ManagedObject','sap/m/Label','sap/m/LabelDesign','sap/m/Dialog','sap/ui/model/json/JSONModel','sap/m/SearchField','sap/m/Button','sap/m/Toolbar','sap/m/ToolbarSpacer','sap/ui/model/Filter','sap/ui/model/FilterOperator','sap/ui/rta/command/CommandFactory','sap/ui/rta/command/CompositeCommand','sap/m/List','sap/m/CustomListItem','sap/m/ListType','sap/m/ScrollContainer','sap/ui/model/Sorter','sap/ui/dt/ElementUtil','sap/m/VBox','sap/ui/rta/Utils'],function(q,M,L,a,D,J,S,B,T,b,F,c,C,d,e,f,g,h,i,E,V,U){"use strict";var A=M.extend("sap.ui.rta.plugin.additionalElements.AddElementsDialog",{metadata:{library:"sap.ui.rta",properties:{"customFieldEnabled":{type:"boolean",defaultValue:false},"title":{type:"string"}},events:{"opened":{},"openCustomField":{}}}});A.prototype.init=function(){this._oTextResources=sap.ui.getCore().getLibraryResourceBundle("sap.ui.rta");this._bAscendingSortOrder=false;this._oDialog=new D().addStyleClass("sapUIRtaFieldRepositoryDialog");this._oDialog.addStyleClass(U.getRtaStyleClassName());this._oDialog.removeStyleClass("sapUiPopupWithPadding");this._oDialog.setModel(new J({elements:[]}));var j=this._createContent();var k=this._createButtons();j.forEach(function(o){this._oDialog.addContent(o);},this);k.forEach(function(o){this._oDialog.addButton(o);},this);this._oDialog.setInitialFocus(this._oInput);};A.prototype._createContent=function(){this._oInput=new S({width:"100%",liveChange:[this._updateModelFilter,this]});var r=new B({text:"",icon:"sap-icon://sort",press:[this._resortList,this]});this._oCustomFieldButton=new B({text:"",icon:"sap-icon://add",tooltip:this._oTextResources.getText("BTN_FREP_CCF"),enabled:this.getCustomFieldEnabled(),press:[this._redirectToCustomFieldCreation,this]});this._oToolbarSpacer1=new b();this.oInputFields=new T({content:[this._oInput,r,this._oToolbarSpacer1,this._oCustomFieldButton]});var o=new L({design:a.Bold,tooltip:"{tooltip}",text:{parts:[{path:"label"},{path:"referencedComplexPropertyName"},{path:"duplicateComplexName"}],formatter:function(m,R,n){if(n&&R){m+=" ("+R+")";}return m;}}});var j=new L({text:{parts:[{path:"originalLabel"}],formatter:function(O){if(O){return this._oTextResources.getText("LBL_FREP",O);}return"";}.bind(this)},visible:{parts:[{path:"originalLabel"}],formatter:function(O){if(O){return true;}return false;}}});var v=new V();v.addItem(o);v.addItem(j);var s=new i("label",this._bAscendingSortOrder);this._oList=new e({mode:"MultiSelect",includeItemInSelection:true,growing:true,growingScrollToLoad:true}).setNoDataText(this._oTextResources.getText("MSG_NO_FIELDS",this._oTextResources.getText("MULTIPLE_CONTROL_NAME").toLowerCase()));var l=new f({type:g.Active,selected:"{selected}",content:[v]});this._oList.bindItems({path:"/elements",template:l,sorter:s});var k=new h({content:this._oList,vertical:true,horizontal:false}).addStyleClass("sapUIRtaCCDialogScrollContainer");return[this.oInputFields,k];};A.prototype._createButtons=function(){this._oOKButton=new B({text:this._oTextResources.getText("BTN_FREP_OK"),press:[this._submitDialog,this]});var o=new B({text:this._oTextResources.getText("BTN_FREP_CANCEL"),press:[this._cancelDialog,this]});return[this._oOKButton,o];};A.prototype._submitDialog=function(){this._oDialog.close();this._fnResolve();};A.prototype._cancelDialog=function(){this._oList.removeSelections();this._oDialog.close();this._fnReject();};A.prototype.setElements=function(j){this._oDialog.getModel().setProperty("/elements",j);};A.prototype.getElements=function(){return this._oDialog.getModel().getProperty("/elements");};A.prototype.getSelectedElements=function(){return this._oDialog.getModel().getObject("/elements").filter(function(o){return o.selected;});};A.prototype.open=function(o){return new Promise(function(r,j){this._fnResolve=r;this._fnReject=j;this._oDialog.oPopup.attachOpened(function(){this.fireOpened();}.bind(this));this._oDialog.open();}.bind(this));};A.prototype._resortList=function(o){this._bAscendingSortOrder=!this._bAscendingSortOrder;var j=this._oList.getBinding("items");var s=[];s.push(new i("label",this._bAscendingSortOrder));j.sort(s);};A.prototype._updateModelFilter=function(o){var v=o.getParameter("newValue");var j=this._oList.getBinding("items");if((typeof v)==="string"){var k=new F("label",c.Contains,v);var O=new F("originalLabel",c.Contains,v);var r=new F("referencedComplexPropertyName",c.Contains,v);var l=new F("duplicateComplexName",c.EQ,true);var m=new F({filters:[r,l],and:true});var n=new F({filters:[k,O,m],and:false});j.filter([n]);}else{j.filter([]);}};A.prototype._redirectToCustomFieldCreation=function(o){this.fireOpenCustomField();this._oDialog.close();};A.prototype.setTitle=function(t){M.prototype.setProperty.call(this,"title",t,true);this._oDialog.setTitle(t);};A.prototype.setCustomFieldEnabled=function(j){M.prototype.setProperty.call(this,"customFieldEnabled",j,true);this._oCustomFieldButton.setEnabled(j);};return A;},true);
