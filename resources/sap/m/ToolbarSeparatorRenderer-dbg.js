/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([],
	function() {
	"use strict";


	/**
	 * ToolbarSeparator renderer.
	 * @namespace
	 */
	var ToolbarSeparatorRenderer = {};

	ToolbarSeparatorRenderer.render = function(rm, oControl) {
		rm.write("<div");
		rm.writeControlData(oControl);
		rm.addClass("sapMTBSeparator");

		//ARIA
		rm.writeAccessibilityState(oControl, {
			role: "separator"
		});

		rm.writeClasses();
		rm.write("></div>");
	};

	return ToolbarSeparatorRenderer;

}, /* bExport= */ true);
