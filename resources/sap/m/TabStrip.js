/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/core/Control','sap/ui/core/IconPool','sap/ui/core/delegate/ItemNavigation','sap/ui/base/ManagedObject','sap/ui/core/delegate/ScrollEnablement','./AccButton','./TabStripItem','sap/m/Select','sap/m/SelectList','sap/ui/Device','sap/ui/core/Renderer','sap/ui/core/ResizeHandler','sap/m/library','sap/ui/core/Icon','sap/m/SelectRenderer','sap/m/SelectListRenderer','./TabStripRenderer'],function(q,C,I,a,M,S,A,T,b,c,D,R,d,l,e,f,g,h){"use strict";var i=l.SelectType;var B=l.ButtonType;var j=C.extend("sap.m.TabStrip",{metadata:{library:"sap.m",properties:{hasSelect:{type:"boolean",group:"Misc",defaultValue:false}},aggregations:{items:{type:"sap.m.TabStripItem",multiple:true,singularName:"item"},addButton:{type:"sap.m.Button",multiple:false,singularName:"addButton"},_select:{type:'sap.m.Select',multiple:false,visibility:"hidden"},_rightArrowButton:{type:'sap.m.AccButton',multiple:false,visibility:"hidden"},_leftArrowButton:{type:'sap.m.AccButton',multiple:false,visibility:"hidden"}},associations:{selectedItem:{type:'sap.m.TabStripItem',group:"Misc"}},events:{itemClose:{allowPreventDefault:true,parameters:{item:{type:"sap.m.TabStripItem"}}},itemPress:{parameters:{item:{type:"sap.m.TabStripItem"}}},itemSelect:{allowPreventDefault:true,parameters:{item:{type:"sap.m.TabContainerItem"}}}}},constructor:function(v,s){var H=false;if(!s&&typeof v==='object'){s=v;}if(s){H=s['hasSelect'];delete s['hasSelect'];}M.prototype.constructor.apply(this,arguments);this.setProperty('hasSelect',H,true);}});var r=sap.ui.getCore().getLibraryResourceBundle("sap.m");j.ICON_BUTTONS={LeftArrowButton:"slim-arrow-left",RightArrowButton:"slim-arrow-right",DownArrowButton:"slim-arrow-down",AddButton:"add"};j.SELECT_ITEMS_ID_SUFFIX='-SelectItem';j.SCROLL_SIZE=320;j.MIN_DRAG_OFFSET=D.support.touch?15:5;j.SCROLL_ANIMATION_DURATION=sap.ui.getCore().getConfiguration().getAnimation()?500:0;j.prototype.init=function(){this._bDoScroll=!D.system.phone;this._bRtl=sap.ui.getCore().getConfiguration().getRTL();this._iCurrentScrollLeft=0;this._iMaxOffsetLeft=null;this._scrollable=null;this._oTouchStartX=null;if(!D.system.phone){this._oScroller=new S(this,this.getId()+"-tabs",{horizontal:true,vertical:false,nonTouchScrolling:true});}};j.prototype.exit=function(){this._bRtl=null;this._iCurrentScrollLeft=null;this._iMaxOffsetLeft=null;this._scrollable=null;this._oTouchStartX=null;if(this._oScroller){this._oScroller.destroy();this._oScroller=null;}if(this._sResizeListenerId){d.deregister(this._sResizeListenerId);this._sResizeListenerId=null;}this._removeItemNavigation();};j.prototype.onBeforeRendering=function(){if(this._sResizeListenerId){d.deregister(this._sResizeListenerId);this._sResizeListenerId=null;}};j.prototype.onAfterRendering=function(){if(this._oScroller){this._oScroller.setIconTabBar(this,q.proxy(this._handleOverflowButtons,this),null);}this._addItemNavigation();if(!D.system.phone){this._oScroller._$Container=this.$("tabsContainer");this._adjustScrolling();if(this.getSelectedItem()){if(!sap.ui.getCore().isThemeApplied()){sap.ui.getCore().attachThemeChanged(this._handleInititalScrollToItem,this);}else{this._handleInititalScrollToItem();}}this._sResizeListenerId=d.register(this.getDomRef(),q.proxy(this._adjustScrolling,this));}};j.prototype._handleInititalScrollToItem=function(){var $=sap.ui.getCore().byId(this.getSelectedItem());if($.$().length>0){this._scrollIntoView($,500);}sap.ui.getCore().detachThemeChanged(this._handleInititalScrollToItem,this);};j.prototype.getFocusDomRef=function(){var t=sap.ui.getCore().byId(this.getSelectedItem());if(!t){return null;}return t.getDomRef();};j.prototype.applyFocusInfo=function(F){if(F.focusDomRef){q(F.focusDomRef).focus();}};j.prototype._addItemNavigation=function(){var H=this.getDomRef("tabsContainer"),p=this.getItems(),t=[];p.forEach(function(s){var u=s.getDomRef();q(u).attr("tabindex","-1");t.push(u);});if(!this._oItemNavigation){this._oItemNavigation=new a();}this._oItemNavigation.setRootDomRef(H);this._oItemNavigation.setItemDomRefs(t);this._oItemNavigation.setCycling(false);this._oItemNavigation.setPageSize(5);this._oItemNavigation.setDisabledModifiers({sapnext:["alt"],sapprevious:["alt"]});this.addDelegate(this._oItemNavigation);};j.prototype._checkScrolling=function(){var t=this.getDomRef("tabs"),s=t&&(t.scrollWidth>this.getDomRef("tabsContainer").offsetWidth);this.$().toggleClass("sapMTSScrollable",s);return s;};j.prototype._handleOverflowButtons=function(){var t=this.getDomRef("tabs"),p=this.getDomRef("tabsContainer"),s,u,v,w=false,x=false,y=this._checkScrolling();if(y&&!this.getAggregation("_rightArrowButton")&&!this.getAggregation("_leftArrowButton")){this._getLeftArrowButton();this._getRightArrowButton();var z=sap.ui.getCore().createRenderManager();this.getRenderer().renderRightOverflowButtons(z,this,true);this.getRenderer().renderLeftOverflowButtons(z,this,true);z.destroy();}if(y&&t&&p){if(this._bRtl){s=q(p).scrollLeftRTL();}else{s=p.scrollLeft;}u=t.scrollWidth;v=p.clientWidth;if(Math.abs(u-v)===1){u=v;}if(s>0){if(this._bRtl){x=true;}else{w=true;}}if((u>v)&&(s+v<u)){if(this._bRtl){w=true;}else{x=true;}}this.$().toggleClass("sapMTSScrollBack",w).toggleClass("sapMTSScrollForward",x);}else{this.$().toggleClass("sapMTSScrollBack",false).toggleClass("sapMTSScrollForward",false);}};j.prototype._adjustScrolling=function(){this._iMaxOffsetLeft=Math.abs(this.$("tabsContainer").width()-this.$("tabs").width());this._handleOverflowButtons();};j.prototype._getLeftArrowButton=function(){return this._getArrowButton("_leftArrowButton",r.getText("TABSTRIP_SCROLL_BACK"),j.ICON_BUTTONS.LeftArrowButton,-j.SCROLL_SIZE);};j.prototype._getRightArrowButton=function(){return this._getArrowButton("_rightArrowButton",r.getText("TABSTRIP_SCROLL_FORWARD"),j.ICON_BUTTONS.RightArrowButton,j.SCROLL_SIZE);};j.prototype._getArrowButton=function(s,t,p,u){var v=this.getAggregation(s),w=this;if(!v){v=new A({type:B.Transparent,icon:I.getIconURI(p),tooltip:t,tabIndex:"-1",ariaHidden:"true",press:function(E){w._scroll(u,j.SCROLL_ANIMATION_DURATION);}});this.setAggregation(s,v,true);}return v;};j.prototype._removeItemNavigation=function(){if(this._oItemNavigation){this.removeDelegate(this._oItemNavigation);this._oItemNavigation.destroy();delete this._oItemNavigation;}};j.prototype._scroll=function(p,s){var t=this.getDomRef("tabsContainer").scrollLeft,u=D.browser.internet_explorer||D.browser.edge,v;if(this._bRtl&&!u){v=t-p;if(D.browser.firefox){if(v<-this._iMaxOffsetLeft){v=-this._iMaxOffsetLeft;}if(v>0){v=0;}}}else{v=t+p;if(v<0){v=0;}if(v>this._iMaxOffsetLeft){v=this._iMaxOffsetLeft;}}this._oScroller.scrollTo(v,0,s);this._iCurrentScrollLeft=v;};j.prototype._scrollIntoView=function(p,s){var $=this.$("tabs"),t=p.$(),u=$.innerWidth()-$.width(),v=t.outerWidth(true),w=t.position().left-u/2,x=this.getDomRef("tabsContainer"),y=x.scrollLeft,z=this.$("tabsContainer").width(),N=y,E=D.browser.internet_explorer||D.browser.edge;if(w<0||w>z-v){if(this._bRtl&&D.browser.firefox){if(w<0){N+=w+v-z;}else{N+=w;}}else if(this._bRtl&&E){if(w<0){N-=w;}else{N-=w+v-z;}}else{if(w<0){N+=w;}else{N+=w+v-z;}}this._iCurrentScrollLeft=N;this._oScroller.scrollTo(N,0,s);}};j.prototype._createSelect=function(t){var s,p,u,v={type:D.system.phone?i.Default:i.IconOnly,autoAdjustWidth:true,maxWidth:D.system.phone?"100%":"2.5rem",icon:I.getIconURI(j.ICON_BUTTONS.DownArrowButton),tooltip:r.getText("TABSTRIP_OPENED_TABS"),change:function(E){p=E.getParameters()['selectedItem'];u=this._findTabStripItemFromSelectItem(p);this._activateItem(u,E);}.bind(this)};s=new m(v).addStyleClass("sapMTSOverflowSelect");this._addItemsToSelect(s,t);return s;};j.prototype.onsapselect=function(E){E.setMarked();E.preventDefault();this._activateItem(E.srcControl,E);};j.prototype.onsapdelete=function(E){var p=q("#"+E.target.id).control(0),s=p.getId()===this.getSelectedItem(),t=function(){this._moveToNextItem(s);};this._removeItem(p,t);};j.prototype._moveToNextItem=function(s){if(!this._oItemNavigation){return;}var p=this.getItems().length,t=this._oItemNavigation.getFocusedIndex(),N=p===t?--t:t,u=this.getItems()[N],F=function(){if(this._oItemNavigation){this._oItemNavigation.focusItem(N);}};if(s){this.setSelectedItem(u);this.fireItemPress({item:u});}q.sap.delayedCall(0,this,F);};j.prototype._activateItem=function(p,E){if(this.fireItemSelect({item:p})){if(p&&p instanceof T){if(!this.getSelectedItem()||this.getSelectedItem()!==p.getId()){this.setSelectedItem(p);}this.fireItemPress({item:p});}}else if(E&&!E.isDefaultPrevented()){E.preventDefault();}};j.prototype.addAggregation=function(s,O,p){if(s==='items'){this._handleItemsAggregation(['addAggregation',O,p],true);}return C.prototype.addAggregation.call(this,s,O,p);};j.prototype.insertAggregation=function(s,O,p,t){if(s==='items'){this._handleItemsAggregation(['insertAggregation',O,p,t],true);}return C.prototype.insertAggregation.call(this,s,O,p,t);};j.prototype.removeAggregation=function(s,O,p){if(s==='items'){this._handleItemsAggregation(['removeAggregation',O,p]);}return C.prototype.removeAggregation.call(this,s,O,p);};j.prototype.removeAllAggregation=function(s,p){if(s==='items'){this._handleItemsAggregation(['removeAllAggregation',null,p]);}return C.prototype.removeAllAggregation.call(this,s,p);};j.prototype.destroyAggregation=function(s,p){if(s==='items'){this._handleItemsAggregation(['destroyAggregation',p]);}return C.prototype.destroyAggregation.call(this,s,p);};j.prototype.setSelectedItem=function(s){if(!s){return;}if(s.$().length>0){this._scrollIntoView(s,500);}this._updateAriaSelectedAttributes(this.getItems(),s);this._updateSelectedItemClasses(s.getId());if(this.getHasSelect()){var p=this._findSelectItemFromTabStripItem(s);this.getAggregation('_select').setSelectedItem(p);}return j.prototype.setAssociation.call(this,"selectedItem",s,true);};j.prototype.setProperty=function(p,v,s){var t;t=C.prototype.setProperty.call(this,p,v,s);if(p==='hasSelect'){if(v){if(!this.getAggregation('_select')){t=this.setAggregation('_select',this._createSelect(this.getItems()));}}else{t=this.destroyAggregation('_select');}}return t;};j.prototype._attachItemEventListeners=function(O){if(O instanceof T){var E=['itemClosePressed','itemPropertyChanged'];E.forEach(function(s){s=s.charAt(0).toUpperCase()+s.slice(1);O['detach'+s](this['_handle'+s]);O['attach'+s](this['_handle'+s].bind(this));},this);}};j.prototype._detachItemEventListeners=function(O){if(!O||typeof O!=='object'||!(O instanceof T)){var p=this.getItems();p.forEach(function(s){if(typeof s!=='object'||!(s instanceof T)){return;}return this._detachItemEventListeners(s);}.bind(this));}};j.prototype._handleItemPropertyChanged=function(E){var s=this._findSelectItemFromTabStripItem(E.getSource());s.setProperty(E['mParameters'].propertyKey,E['mParameters'].propertyValue);};j.prototype._handleItemClosePressed=function(E){this._removeItem(E.getSource());};j.prototype._removeItem=function(p,s){var t;if(!(p instanceof T)){q.sap.log.error('Expecting instance of a TabStripSelectItem, given: ',p);}if(p.getId().indexOf(j.SELECT_ITEMS_ID_SUFFIX)!==-1){t=this._findTabStripItemFromSelectItem(p);}else{t=p;}if(this.fireItemClose({item:t})){this.removeAggregation('items',t);this._moveToNextItem(p.getId()===this.getSelectedItem());if(s){s.call(this);}}};j.prototype._handleItemsAggregation=function(p,s){var t='items',F=p[0],O=p[1],N=[t];p.forEach(function(u,v){if(v>0){N.push(u);}});if(s){this._attachItemEventListeners(O);}else{this._detachItemEventListeners(O);}if(t!=="items"){return this;}if(this.getHasSelect()){this._handleSelectItemsAggregation(N,s,F,O);}return this;};j.prototype._handleSelectItemsAggregation=function(p,s,F,O){var t=this.getAggregation('_select'),u;if(F==='destroyAggregation'&&!t){return;}if(O===null||typeof O!=='object'){return t[F]['apply'](t,p);}if(s){u=this._createSelectItemFromTabStripItem(O);}else{u=this._findSelectItemFromTabStripItem(O);}p.forEach(function(v,w){if(typeof v==='object'){p[w]=u;}});return t[F]['apply'](t,p);};j.prototype._addItemsToSelect=function(s,p){p.forEach(function(t){var u=this._createSelectItemFromTabStripItem(t);s.addAggregation('items',u);if(t.getId()===this.getSelectedItem()){s.setSelectedItem(u);}},this);};j.prototype._createSelectItemFromTabStripItem=function(t){var s;if(!t&&!(t instanceof sap.m.TabContainerItem)){q.sap.log.error('Expecting instance of "sap.m.TabContainerItem": instead of '+t+' given.');return;}s=new T({id:t.getId()+j.SELECT_ITEMS_ID_SUFFIX,text:t.getText(),modified:t.getModified(),itemClosePressed:function(E){this._handleItemClosePressed(E);}.bind(this)});s.addEventDelegate({ontap:function(E){var p=E.srcControl;if((p instanceof A||p instanceof e)){this.fireItemClosePressed({item:this});}}},s);return s;};j.prototype._findTabStripItemFromSelectItem=function(t){var p,s=t.getId().replace(j.SELECT_ITEMS_ID_SUFFIX,''),u=this.getItems();for(p=0;p<u.length;p++){if(u[p].getId()===s){return u[p];}}};j.prototype._findSelectItemFromTabStripItem=function(t){var p,s,u=t.getId()+j.SELECT_ITEMS_ID_SUFFIX;if(this.getHasSelect()){s=this.getAggregation('_select').getItems();for(p=0;p<s.length;p++){if(s[p].getId()===u){return s[p];}}}};j.prototype._updateAriaSelectedAttributes=function(p,s){var t;p.forEach(function(u){t="false";if(u.$()){if(s&&s.getId()===u.getId()){t="true";}u.$().attr("aria-selected",t);}});};j.prototype._updateSelectedItemClasses=function(s){if(this.$("tabs")){this.$("tabs").children(".sapMTabStripItemSelected").removeClass("sapMTabStripItemSelected");q("#"+s).addClass("sapMTabStripItemSelected");}};j.prototype.changeItemState=function(v,s){var $;var p=this.getItems();p.forEach(function(t){if(v===t.getId()){$=q(t.$());if(s===true&&!$.hasClass(T.CSS_CLASS_MODIFIED)){$.addClass(T.CSS_CLASS_MODIFIED);}else{$.removeClass(T.CSS_CLASS_MODIFIED);}}});};j.prototype.ontouchstart=function(E){var t=q(E.target).control(0);if(t instanceof T||t instanceof A||t instanceof e||t instanceof m){this._oTouchStartX=E.changedTouches[0].pageX;}};j.prototype.ontouchend=function(E){var t,p;if(!this._oTouchStartX){return;}t=q(E.target).control(0);p=Math.abs(E.changedTouches[0].pageX-this._oTouchStartX);if(p<j.MIN_DRAG_OFFSET){if(t instanceof T){this._activateItem(t,E);}else if(t instanceof A){if(t&&t.getParent&&t.getParent()instanceof T){t=t.getParent();this._removeItem(t);}}else if(t instanceof e){if(t&&t.getParent&&t.getParent().getParent&&t.getParent().getParent()instanceof T){t=t.getParent().getParent();this._removeItem(t);}}this._oTouchStartX=null;}};j.prototype.destroyItems=function(){this.setAssociation("selectedItem",null);return this.destroyAggregation("items");};var k=R.extend(f);var m=b.extend("sap.m.internal.TabStripSelect",{renderer:k});m.prototype.onAfterRendering=function(){b.prototype.onAfterRendering.apply(this,arguments);this.$().attr("tabindex","-1");};m.prototype.onAfterRenderingPicker=function(){var p=this.getPicker();b.prototype.onAfterRenderingPicker.call(this);if(D.system.phone){return;}p.setOffsetX(Math.round(sap.ui.getCore().getConfiguration().getRTL()?this.getPicker().$().width()-this.$().width():this.$().width()-this.getPicker().$().width()));p.setOffsetY(this.$().parents().hasClass('sapUiSizeCompact')?2:3);p._calcPlacement();};m.prototype.createList=function(){this._oList=new o({width:"100%"}).attachSelectionChange(this.onSelectionChange,this).addEventDelegate({ontap:function(E){this.close();}},this);return this._oList;};m.prototype.setValue=function(v){b.prototype.setValue.apply(this,arguments);this.$("label").toggleClass("sapMTSOverflowSelectLabelModified",this.getSelectedItem()&&this.getSelectedItem().getProperty("modified"));return this;};var n=R.extend(g);n.renderItem=function(p,L,s,t){p.write("<li");p.writeElementData(s);p.addClass(g.CSS_CLASS+"ItemBase");p.addClass(g.CSS_CLASS+"Item");p.addClass("sapMTSOverflowSelectListItem");if(s.getProperty("modified")){p.addClass("sapMTSOverflowSelectListItemModified");}if(D.system.desktop){p.addClass(g.CSS_CLASS+"ItemBaseHoverable");}if(s===L.getSelectedItem()){p.addClass(g.CSS_CLASS+"ItemBaseSelected");}p.writeAttribute("tabindex",0);p.writeClasses();this.writeItemAccessibilityState.apply(this,arguments);p.write(">");p.write('<p class=\"sapMSelectListItemText\">');p.writeEscaped(s.getText().slice(0,(D.system.phone?s.getText().length:T.DISPLAY_TEXT_MAX_LENGTH)));if(!D.system.phone&&s.getText().length>T.DISPLAY_TEXT_MAX_LENGTH){p.write('...');}p.write('</p>');p.renderControl(s.getAggregation('_closeButton'));p.write("</li>");};var o=c.extend("sap.m.internal.TabStripSelectList",{renderer:n});return j;});
