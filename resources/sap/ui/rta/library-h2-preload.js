/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine('sap/ui/rta/library',['jquery.sap.global','sap/ui/core/Core','sap/ui/core/library'],function(q,C,c){"use strict";sap.ui.getCore().initLibrary({name:"sap.ui.rta",version:"1.56.10",dependencies:["sap.ui.core","sap.m","sap.ui.fl","sap.ui.dt"],types:[],interfaces:[],controls:[],elements:[]});return sap.ui.rta;});sap.ui.require.preload({"sap/ui/rta/manifest.json":'{"_version":"1.9.0","sap.app":{"id":"sap.ui.rta","type":"library","embeds":["appVariant/manageApps/webapp"],"applicationVersion":{"version":"1.56.10"},"title":"SAPUI5 library with RTA controls.","description":"SAPUI5 library with RTA controls.","ach":"CA-UI5-FL-RTA","resources":"resources.json","offline":true},"sap.ui":{"technology":"UI5","supportedThemes":["base","sap_hcb"]},"sap.ui5":{"dependencies":{"minUI5Version":"1.56","libs":{"sap.ui.core":{"minVersion":"1.56.10"},"sap.ui.layout":{"minVersion":"1.56.10"},"sap.m":{"minVersion":"1.56.10"},"sap.ui.fl":{"minVersion":"1.56.10"},"sap.ui.dt":{"minVersion":"1.56.10"}}},"library":{"i18n":"messagebundle.properties","content":{"controls":[],"elements":[],"types":[],"interfaces":[]}}}}'},"sap/ui/rta/library-h2-preload");sap.ui.loader.config({depCacheUI5:{"sap/ui/rta/Client.js":["sap/base/util/extend.js","sap/base/util/uid.js","sap/ui/base/ManagedObject.js","sap/ui/core/postmessage/Bus.js","sap/ui/rta/util/ServiceEventBus.js","sap/ui/thirdparty/URI.js"],"sap/ui/rta/ControlTreeModifier.js":["sap/ui/core/util/reflection/JsControlTreeModifier.js"],"sap/ui/rta/RuntimeAuthoring.js":["jquery.sap.global.js","sap/m/MessageBox.js","sap/m/MessageToast.js","sap/ui/Device.js","sap/ui/base/ManagedObject.js","sap/ui/core/BusyIndicator.js","sap/ui/dt/DOMUtil.js","sap/ui/dt/DesignTime.js","sap/ui/dt/Overlay.js","sap/ui/dt/OverlayRegistry.js","sap/ui/dt/Util.js","sap/ui/dt/plugin/ContextMenu.js","sap/ui/dt/plugin/TabHandling.js","sap/ui/fl/FlexControllerFactory.js","sap/ui/fl/Utils.js","sap/ui/fl/registry/Settings.js","sap/ui/rta/Utils.js","sap/ui/rta/appVariant/Feature.js","sap/ui/rta/command/CommandFactory.js","sap/ui/rta/command/LREPSerializer.js","sap/ui/rta/command/Stack.js","sap/ui/rta/plugin/Combine.js","sap/ui/rta/plugin/ControlVariant.js","sap/ui/rta/plugin/CreateContainer.js","sap/ui/rta/plugin/CutPaste.js","sap/ui/rta/plugin/DragDrop.js","sap/ui/rta/plugin/RTAElementMover.js","sap/ui/rta/plugin/Remove.js","sap/ui/rta/plugin/Rename.js","sap/ui/rta/plugin/Selection.js","sap/ui/rta/plugin/Settings.js","sap/ui/rta/plugin/Split.js","sap/ui/rta/plugin/additionalElements/AddElementsDialog.js","sap/ui/rta/plugin/additionalElements/AdditionalElementsAnalyzer.js","sap/ui/rta/plugin/additionalElements/AdditionalElementsPlugin.js","sap/ui/rta/service/index.js","sap/ui/rta/toolbar/Fiori.js","sap/ui/rta/toolbar/Personalization.js","sap/ui/rta/toolbar/Standalone.js","sap/ui/rta/util/PopupManager.js","sap/ui/rta/util/ServiceEventBus.js","sap/ui/rta/util/StylesLoader.js","sap/ui/rta/util/UrlParser.js"],"sap/ui/rta/Utils.js":["jquery.sap.global.js","sap/m/MessageBox.js","sap/ui/dt/OverlayUtil.js","sap/ui/fl/Utils.js","sap/ui/fl/registry/Settings.js"],"sap/ui/rta/appVariant/AppVariantDialog.js":["sap/m/Dialog.js","sap/m/DialogRenderer.js","sap/ui/layout/form/ResponsiveGridLayout.js","sap/ui/layout/form/SimpleForm.js","sap/ui/rta/Utils.js"],"sap/ui/rta/appVariant/AppVariantManager.js":["sap/m/MessageBox.js","sap/ui/base/ManagedObject.js","sap/ui/core/BusyIndicator.js","sap/ui/fl/transport/TransportSelection.js","sap/ui/rta/Utils.js","sap/ui/rta/appVariant/AppVariantDialog.js","sap/ui/rta/appVariant/AppVariantUtils.js","sap/ui/rta/appVariant/Feature.js","sap/ui/rta/appVariant/S4HanaCloudBackend.js"],"sap/ui/rta/appVariant/AppVariantOverviewDialog.js":["sap/m/Dialog.js","sap/m/DialogRenderer.js","sap/ui/core/ComponentContainer.js","sap/ui/fl/Utils.js","sap/ui/rta/Utils.js","sap/ui/rta/appVariant/AppVariantUtils.js","sap/ui/rta/appVariant/manageApps/webapp/Component.js"],"sap/ui/rta/appVariant/AppVariantUtils.js":["sap/m/MessageBox.js","sap/ui/fl/LrepConnector.js","sap/ui/fl/Utils.js","sap/ui/fl/descriptorRelated/api/DescriptorInlineChangeFactory.js","sap/ui/fl/descriptorRelated/api/DescriptorVariantFactory.js","sap/ui/rta/Utils.js"],"sap/ui/rta/appVariant/Feature.js":["sap/m/MessageBox.js","sap/ui/core/BusyIndicator.js","sap/ui/fl/Utils.js","sap/ui/rta/Utils.js","sap/ui/rta/appVariant/AppVariantUtils.js"],"sap/ui/rta/appVariant/S4HanaCloudBackend.js":["sap/ui/base/ManagedObject.js","sap/ui/model/odata/v2/ODataModel.js"],"sap/ui/rta/appVariant/Utils.js":["jquery.sap.global.js","sap/ui/fl/LrepConnector.js","sap/ui/rta/appVariant/AppVariantUtils.js"],"sap/ui/rta/appVariant/manageApps/webapp/Component.js":["sap/ui/core/UIComponent.js"],"sap/ui/rta/appVariant/manageApps/webapp/controller/ManageApps.controller.js":["jquery.sap.global.js","sap/m/MessageBox.js","sap/ui/core/BusyIndicator.js","sap/ui/core/mvc/Controller.js","sap/ui/rta/RuntimeAuthoring.js","sap/ui/rta/Utils.js","sap/ui/rta/appVariant/AppVariantUtils.js","sap/ui/rta/appVariant/Feature.js","sap/ui/rta/appVariant/Utils.js","sap/ui/rta/appVariant/manageApps/webapp/model/models.js"],"sap/ui/rta/appVariant/manageApps/webapp/model/models.js":["sap/ui/model/json/JSONModel.js"],"sap/ui/rta/appVariant/manageApps/webapp/view/ManageApps.view.xml":["sap/m/Button.js","sap/m/Column.js","sap/m/ColumnListItem.js","sap/m/ObjectIdentifier.js","sap/m/Table.js","sap/m/Text.js","sap/ui/core/Icon.js","sap/ui/core/InvisibleText.js","sap/ui/core/mvc/XMLView.js","sap/ui/rta/appVariant/manageApps/webapp/controller/ManageApps.controller.js"],"sap/ui/rta/command/AddODataProperty.js":["sap/ui/rta/command/FlexCommand.js"],"sap/ui/rta/command/AddXML.js":["jquery.sap.global.js","sap/ui/fl/Utils.js","sap/ui/rta/command/FlexCommand.js"],"sap/ui/rta/command/AppDescriptorCommand.js":["sap/ui/fl/descriptorRelated/api/DescriptorChangeFactory.js","sap/ui/fl/descriptorRelated/api/DescriptorInlineChangeFactory.js","sap/ui/rta/command/BaseCommand.js"],"sap/ui/rta/command/BaseCommand.js":["sap/ui/base/ManagedObject.js"],"sap/ui/rta/command/BindProperty.js":["sap/ui/rta/Utils.js","sap/ui/rta/command/FlexCommand.js"],"sap/ui/rta/command/Combine.js":["sap/ui/rta/command/FlexCommand.js"],"sap/ui/rta/command/CommandFactory.js":["sap/ui/base/ManagedObject.js","sap/ui/dt/ElementUtil.js","sap/ui/dt/OverlayRegistry.js","sap/ui/fl/Utils.js","sap/ui/fl/registry/ChangeRegistry.js"],"sap/ui/rta/command/CompositeCommand.js":["sap/ui/fl/Utils.js","sap/ui/rta/command/BaseCommand.js"],"sap/ui/rta/command/ControlVariantConfigure.js":["sap/ui/fl/Utils.js","sap/ui/fl/changeHandler/BaseTreeModifier.js","sap/ui/rta/command/BaseCommand.js"],"sap/ui/rta/command/ControlVariantDuplicate.js":["sap/ui/fl/Utils.js","sap/ui/fl/changeHandler/BaseTreeModifier.js","sap/ui/rta/command/BaseCommand.js"],"sap/ui/rta/command/ControlVariantSetTitle.js":["sap/ui/fl/Utils.js","sap/ui/fl/changeHandler/BaseTreeModifier.js","sap/ui/rta/command/BaseCommand.js"],"sap/ui/rta/command/ControlVariantSwitch.js":["sap/ui/fl/Utils.js","sap/ui/fl/changeHandler/BaseTreeModifier.js","sap/ui/rta/command/BaseCommand.js"],"sap/ui/rta/command/CreateContainer.js":["jquery.sap.global.js","sap/ui/rta/command/FlexCommand.js"],"sap/ui/rta/command/FlexCommand.js":["sap/ui/core/util/reflection/JsControlTreeModifier.js","sap/ui/fl/FlexControllerFactory.js","sap/ui/fl/Utils.js","sap/ui/rta/ControlTreeModifier.js","sap/ui/rta/command/BaseCommand.js"],"sap/ui/rta/command/LREPSerializer.js":["sap/ui/base/ManagedObject.js","sap/ui/fl/Change.js","sap/ui/fl/FlexControllerFactory.js","sap/ui/fl/Utils.js","sap/ui/fl/registry/Settings.js","sap/ui/rta/ControlTreeModifier.js","sap/ui/rta/command/AppDescriptorCommand.js","sap/ui/rta/command/BaseCommand.js","sap/ui/rta/command/FlexCommand.js","sap/ui/rta/command/Stack.js"],"sap/ui/rta/command/Move.js":["jquery.sap.global.js","sap/ui/rta/command/FlexCommand.js"],"sap/ui/rta/command/Property.js":["sap/ui/rta/Utils.js","sap/ui/rta/command/FlexCommand.js"],"sap/ui/rta/command/Remove.js":["sap/ui/rta/command/FlexCommand.js"],"sap/ui/rta/command/Rename.js":["jquery.sap.global.js","sap/ui/rta/command/FlexCommand.js"],"sap/ui/rta/command/Reveal.js":["sap/ui/rta/command/FlexCommand.js"],"sap/ui/rta/command/Settings.js":["sap/ui/rta/command/FlexCommand.js"],"sap/ui/rta/command/Split.js":["sap/ui/rta/command/FlexCommand.js"],"sap/ui/rta/command/Stack.js":["sap/ui/base/ManagedObject.js","sap/ui/fl/ChangePersistenceFactory.js","sap/ui/fl/Utils.js","sap/ui/rta/ControlTreeModifier.js","sap/ui/rta/command/CompositeCommand.js","sap/ui/rta/command/Settings.js"],"sap/ui/rta/command/appDescriptor/AddLibrary.js":["sap/ui/rta/command/AppDescriptorCommand.js"],"sap/ui/rta/library.js":["jquery.sap.global.js","sap/ui/core/Core.js","sap/ui/core/library.js"],"sap/ui/rta/plugin/Combine.js":["sap/ui/dt/OverlayRegistry.js","sap/ui/rta/Utils.js","sap/ui/rta/plugin/Plugin.js"],"sap/ui/rta/plugin/ControlVariant.js":["sap/m/delegate/ValueStateMessage.js","sap/ui/base/ManagedObject.js","sap/ui/dt/ElementOverlay.js","sap/ui/dt/OverlayRegistry.js","sap/ui/dt/OverlayUtil.js","sap/ui/fl/Utils.js","sap/ui/fl/changeHandler/BaseTreeModifier.js","sap/ui/fl/variants/VariantManagement.js","sap/ui/rta/Utils.js","sap/ui/rta/command/CompositeCommand.js","sap/ui/rta/plugin/Plugin.js","sap/ui/rta/plugin/RenameHandler.js"],"sap/ui/rta/plugin/CreateContainer.js":["sap/ui/fl/Utils.js","sap/ui/rta/Utils.js","sap/ui/rta/plugin/Plugin.js"],"sap/ui/rta/plugin/CutPaste.js":["jquery.sap.global.js","sap/ui/dt/OverlayUtil.js","sap/ui/dt/plugin/CutPaste.js","sap/ui/rta/Utils.js","sap/ui/rta/plugin/Plugin.js","sap/ui/rta/plugin/RTAElementMover.js"],"sap/ui/rta/plugin/DragDrop.js":["jquery.sap.global.js","sap/ui/dt/OverlayRegistry.js","sap/ui/dt/plugin/ControlDragDrop.js","sap/ui/rta/Utils.js","sap/ui/rta/plugin/Plugin.js","sap/ui/rta/plugin/RTAElementMover.js"],"sap/ui/rta/plugin/EasyAdd.js":["sap/ui/dt/OverlayRegistry.js","sap/ui/rta/plugin/additionalElements/AdditionalElementsPlugin.js"],"sap/ui/rta/plugin/EasyRemove.js":["sap/m/Button.js","sap/ui/dt/OverlayRegistry.js","sap/ui/rta/plugin/Remove.js"],"sap/ui/rta/plugin/Plugin.js":["sap/ui/base/ManagedObject.js","sap/ui/dt/ElementOverlay.js","sap/ui/dt/OverlayRegistry.js","sap/ui/dt/OverlayUtil.js","sap/ui/dt/Plugin.js","sap/ui/fl/Utils.js","sap/ui/fl/changeHandler/JsControlTreeModifier.js","sap/ui/fl/registry/ChangeRegistry.js"],"sap/ui/rta/plugin/RTAElementMover.js":["sap/ui/dt/ElementUtil.js","sap/ui/dt/MetadataPropagationUtil.js","sap/ui/dt/OverlayRegistry.js","sap/ui/dt/OverlayUtil.js","sap/ui/dt/plugin/ElementMover.js","sap/ui/fl/Utils.js","sap/ui/rta/Utils.js","sap/ui/rta/command/CommandFactory.js","sap/ui/rta/plugin/Plugin.js","sap/ui/rta/util/BindingsExtractor.js"],"sap/ui/rta/plugin/Remove.js":["sap/ui/dt/OverlayRegistry.js","sap/ui/rta/Utils.js","sap/ui/rta/command/CompositeCommand.js","sap/ui/rta/plugin/Plugin.js"],"sap/ui/rta/plugin/Rename.js":["jquery.sap.global.js","sap/ui/dt/ElementUtil.js","sap/ui/dt/Overlay.js","sap/ui/dt/OverlayRegistry.js","sap/ui/dt/OverlayUtil.js","sap/ui/rta/Utils.js","sap/ui/rta/plugin/Plugin.js","sap/ui/rta/plugin/RenameHandler.js"],"sap/ui/rta/plugin/RenameHandler.js":["jquery.sap.global.js","sap/ui/dt/DOMUtil.js","sap/ui/dt/ElementUtil.js","sap/ui/dt/Overlay.js","sap/ui/dt/OverlayRegistry.js","sap/ui/dt/OverlayUtil.js","sap/ui/rta/Utils.js","sap/ui/rta/plugin/Plugin.js"],"sap/ui/rta/plugin/Selection.js":["sap/ui/dt/OverlayRegistry.js","sap/ui/fl/Utils.js","sap/ui/rta/Utils.js","sap/ui/rta/plugin/Plugin.js"],"sap/ui/rta/plugin/Settings.js":["sap/base/Log.js","sap/ui/rta/Utils.js","sap/ui/rta/plugin/Plugin.js"],"sap/ui/rta/plugin/Split.js":["sap/ui/dt/OverlayRegistry.js","sap/ui/fl/Utils.js","sap/ui/rta/Utils.js","sap/ui/rta/plugin/Plugin.js"],"sap/ui/rta/plugin/additionalElements/AddElementsDialog.js":["jquery.sap.global.js","sap/m/Button.js","sap/m/CustomListItem.js","sap/m/Dialog.js","sap/m/Label.js","sap/m/LabelDesign.js","sap/m/List.js","sap/m/ListType.js","sap/m/ScrollContainer.js","sap/m/SearchField.js","sap/m/Toolbar.js","sap/m/ToolbarSpacer.js","sap/m/VBox.js","sap/ui/base/ManagedObject.js","sap/ui/dt/ElementUtil.js","sap/ui/model/Filter.js","sap/ui/model/FilterOperator.js","sap/ui/model/Sorter.js","sap/ui/model/json/JSONModel.js","sap/ui/rta/Utils.js","sap/ui/rta/command/CommandFactory.js","sap/ui/rta/command/CompositeCommand.js"],"sap/ui/rta/plugin/additionalElements/AdditionalElementsAnalyzer.js":["jquery.sap.global.js","sap/ui/core/StashedControlSupport.js","sap/ui/dt/ElementUtil.js","sap/ui/rta/Utils.js","sap/ui/rta/util/BindingsExtractor.js"],"sap/ui/rta/plugin/additionalElements/AdditionalElementsPlugin.js":["jquery.sap.global.js","sap/ui/core/StashedControlSupport.js","sap/ui/dt/ElementDesignTimeMetadata.js","sap/ui/dt/ElementUtil.js","sap/ui/dt/OverlayRegistry.js","sap/ui/fl/Utils.js","sap/ui/rta/Utils.js","sap/ui/rta/plugin/Plugin.js"],"sap/ui/rta/service/ControllerExtension.js":["sap/ui/dt/Util.js","sap/ui/fl/Utils.js"],"sap/ui/rta/service/Outline.js":["sap/ui/dt/ElementOverlay.js","sap/ui/dt/ElementUtil.js","sap/ui/dt/Overlay.js","sap/ui/dt/OverlayRegistry.js","sap/ui/dt/Util.js","sap/ui/rta/Utils.js"],"sap/ui/rta/service/Receiver.js":["sap/base/util/uid.js","sap/ui/core/postmessage/Bus.js","sap/ui/dt/Util.js"],"sap/ui/rta/test/controlEnablingCheck.js":["sap/ui/core/ComponentContainer.js","sap/ui/core/UIComponent.js","sap/ui/core/mvc/XMLView.js","sap/ui/dt/DesignTime.js","sap/ui/dt/ElementDesignTimeMetadata.js","sap/ui/dt/OverlayRegistry.js","sap/ui/fl/ChangePersistence.js","sap/ui/fl/ChangePersistenceFactory.js","sap/ui/fl/FlexControllerFactory.js","sap/ui/fl/library.js","sap/ui/fl/registry/Settings.js","sap/ui/model/Model.js","sap/ui/rta/ControlTreeModifier.js","sap/ui/rta/command/CommandFactory.js","sap/ui/thirdparty/sinon-qunit.js","sap/ui/thirdparty/sinon.js"],"sap/ui/rta/toolbar/Adaptation.js":["sap/m/Button.js","sap/m/Menu.js","sap/m/MenuButton.js","sap/m/MenuItem.js","sap/m/SegmentedButton.js","sap/m/SegmentedButtonItem.js","sap/m/ToolbarSpacer.js","sap/ui/rta/toolbar/Base.js"],"sap/ui/rta/toolbar/Base.js":["jquery.sap.global.js","sap/m/Toolbar.js","sap/ui/core/BusyIndicator.js","sap/ui/core/Popup.js","sap/ui/rta/library.js","sap/ui/rta/util/Animation.js"],"sap/ui/rta/toolbar/BaseRenderer.js":["sap/m/ToolbarRenderer.js","sap/ui/core/Renderer.js"],"sap/ui/rta/toolbar/Fiori.js":["sap/m/Image.js","sap/ui/rta/Utils.js","sap/ui/rta/toolbar/Adaptation.js"],"sap/ui/rta/toolbar/Personalization.js":["sap/m/ToolbarSpacer.js","sap/ui/rta/toolbar/Base.js"],"sap/ui/rta/toolbar/Standalone.js":["sap/ui/rta/toolbar/Adaptation.js"],"sap/ui/rta/util/Animation.js":["jquery.sap.global.js"],"sap/ui/rta/util/BindingsExtractor.js":["sap/ui/dt/ElementUtil.js","sap/ui/rta/Utils.js"],"sap/ui/rta/util/PopupManager.js":["jquery.sap.global.js","sap/m/Dialog.js","sap/m/InstanceManager.js","sap/m/Popover.js","sap/ui/base/ManagedObject.js","sap/ui/core/Component.js","sap/ui/core/ComponentContainer.js","sap/ui/core/Element.js","sap/ui/core/Popup.js","sap/ui/dt/Overlay.js","sap/ui/dt/OverlayRegistry.js","sap/ui/fl/Utils.js"],"sap/ui/rta/util/ServiceEventBus.js":["sap/ui/core/EventBus.js"],"sap/ui/rta/util/StylesLoader.js":["jquery.sap.global.js"],"sap/ui/rta/view/RemoveElementDialog.fragment.xml":["sap/m/Button.js","sap/m/Dialog.js","sap/ui/core/Fragment.js","sap/ui/layout/VerticalLayout.js"]}});
