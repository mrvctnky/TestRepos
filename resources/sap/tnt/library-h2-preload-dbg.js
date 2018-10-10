/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine('sap/tnt/library',["jquery.sap.global","sap/ui/base/DataType","sap/ui/core/library","sap/m/library"],function(q,D){"use strict";sap.ui.getCore().initLibrary({name:"sap.tnt",version:"1.56.10",dependencies:["sap.ui.core","sap.m"],types:["sap.tnt.RenderMode","sap.tnt.BoxContainerLayoutConfiguration"],interfaces:[],controls:["sap.tnt.NavigationList","sap.tnt.ToolHeaderUtilitySeparator","sap.tnt.ToolHeader","sap.tnt.SideNavigation","sap.tnt.ToolPage","sap.tnt.InfoLabel","sap.tnt.BoxContainer","sap.tnt.Box"],elements:["sap.tnt.NavigationListItem"]});sap.tnt.RenderMode={Narrow:"Narrow",Loose:"Loose"};sap.tnt.BoxesPerRowConfig=D.createType("sap.tnt.BoxesPerRowConfig",{isValid:function(v){return/^(([Xx][Ll](?:[1-9]|1[0-2]))? ?([Ll](?:[1-9]|1[0-2]))? ?([Mm](?:[1-9]|1[0-2]))? ?([Ss](?:[1-9]|1[0-2]))?)$/.test(v);}},D.getType("string"));return sap.tnt;});
sap.ui.require.preload({
	"sap/tnt/manifest.json":'{"_version":"1.9.0","sap.app":{"id":"sap.tnt","type":"library","embeds":[],"applicationVersion":{"version":"1.56.10"},"title":"SAPUI5 library with responsive controls.","description":"SAPUI5 library with responsive controls.","ach":"CA-UI5-CTR","resources":"resources.json","offline":true},"sap.ui":{"technology":"UI5","supportedThemes":["base","sap_hcb"]},"sap.ui5":{"dependencies":{"minUI5Version":"1.56","libs":{"sap.ui.core":{"minVersion":"1.56.10"},"sap.m":{"minVersion":"1.56.10"}}},"library":{"i18n":"messagebundle.properties","content":{"controls":["sap.tnt.NavigationList","sap.tnt.ToolHeaderUtilitySeparator","sap.tnt.ToolHeader","sap.tnt.SideNavigation","sap.tnt.ToolPage","sap.tnt.InfoLabel","sap.tnt.BoxContainer","sap.tnt.Box"],"elements":["sap.tnt.NavigationListItem"],"types":["sap.tnt.RenderMode","sap.tnt.BoxContainerLayoutConfiguration"],"interfaces":[]}}}}'
},"sap/tnt/library-h2-preload"
);
sap.ui.loader.config({depCacheUI5:{
"sap/tnt/Box.js":["sap/m/CustomListItem.js","sap/tnt/BoxRenderer.js"],
"sap/tnt/BoxContainer.js":["jquery.sap.global.js","sap/tnt/BoxContainerList.js","sap/tnt/BoxContainerRenderer.js","sap/ui/core/Control.js"],
"sap/tnt/BoxContainerList.js":["sap/m/ListBase.js","sap/m/library.js","sap/tnt/Box.js","sap/ui/Device.js","sap/ui/core/ResizeHandler.js"],
"sap/tnt/BoxContainerListRenderer.js":["sap/m/library.js","sap/ui/Device.js"],
"sap/tnt/BoxContainerRenderer.js":["sap/ui/Device.js"],
"sap/tnt/BoxRenderer.js":["sap/m/CustomListItemRenderer.js","sap/ui/Device.js","sap/ui/core/Renderer.js"],
"sap/tnt/InfoLabel.js":["sap/tnt/InfoLabelRenderer.js","sap/tnt/library.js","sap/ui/core/Control.js","sap/ui/core/library.js"],
"sap/tnt/InfoLabelRenderer.js":["jquery.sap.global.js","sap/tnt/library.js","sap/ui/core/Renderer.js","sap/ui/core/library.js"],
"sap/tnt/NavigationList.js":["jquery.sap.global.js","sap/m/Popover.js","sap/tnt/NavigationListRenderer.js","sap/tnt/library.js","sap/ui/core/Control.js","sap/ui/core/InvisibleText.js","sap/ui/core/delegate/ItemNavigation.js"],
"sap/tnt/NavigationListItem.js":["jquery.sap.global.js","sap/tnt/NavigationList.js","sap/tnt/library.js","sap/ui/core/Icon.js","sap/ui/core/IconPool.js","sap/ui/core/Item.js","sap/ui/core/Renderer.js"],
"sap/tnt/NavigationListRenderer.js":["jquery.sap.global.js","sap/ui/core/Renderer.js"],
"sap/tnt/SideNavigation.js":["jquery.sap.global.js","sap/tnt/SideNavigationRenderer.js","sap/tnt/library.js","sap/ui/core/Control.js","sap/ui/core/Icon.js","sap/ui/core/ResizeHandler.js","sap/ui/core/delegate/ScrollEnablement.js"],
"sap/tnt/ToolHeader.js":["jquery.sap.global.js","sap/m/OverflowToolbar.js","sap/m/OverflowToolbarAssociativePopover.js","sap/tnt/ToolHeaderRenderer.js","sap/tnt/library.js","sap/ui/core/Control.js"],
"sap/tnt/ToolHeaderRenderer.js":["sap/m/BarInPageEnabler.js","sap/m/OverflowToolbarRenderer.js","sap/ui/core/Renderer.js"],
"sap/tnt/ToolHeaderUtilitySeparator.js":["jquery.sap.global.js","sap/tnt/library.js","sap/ui/core/Control.js"],
"sap/tnt/ToolPage.js":["sap/tnt/ToolPageRenderer.js","sap/tnt/library.js","sap/ui/Device.js","sap/ui/core/Control.js","sap/ui/core/ResizeHandler.js"],
"sap/tnt/library.js":["jquery.sap.global.js","sap/m/library.js","sap/ui/base/DataType.js","sap/ui/core/library.js"]
}});
//# sourceMappingURL=library-h2-preload.js.map