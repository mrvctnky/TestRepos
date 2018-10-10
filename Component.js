sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
   "use strict";
   return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata : {
            manifest: "json"
      },
      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         // set data model
         var oData = {
            recipient : {
               name : "Patient"
            }
         };
         // Instantiate a JSON model
         var oModel = new JSONModel(oData);
         // set JSON model on view 
         this.setModel(oModel);

         // Instantiate a Resource model / set i18n model
         var i18nModel = new ResourceModel({
            bundleName : "sap.ui.demo.walkthrough.i18n.i18n"
         });
         // set i18n model on view
         this.setModel(i18nModel, "i18n");
      }
   });
});