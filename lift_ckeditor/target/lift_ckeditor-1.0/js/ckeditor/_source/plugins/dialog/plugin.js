;
CKEDITOR.DIALOG_RESIZE_NONE=0;
CKEDITOR.DIALOG_RESIZE_WIDTH=1;
CKEDITOR.DIALOG_RESIZE_HEIGHT=2;
CKEDITOR.DIALOG_RESIZE_BOTH=3;
(function(){var H=CKEDITOR.tools.cssLength;
function F(g){return !!this._.tabs[g][0].$.offsetHeight
}function Q(){var h=this._.currentTabId,k=this._.tabIdList.length,g=CKEDITOR.tools.indexOf(this._.tabIdList,h)+k;
for(var j=g-1;
j>g-k;
j--){if(F.call(this,this._.tabIdList[j%k])){return this._.tabIdList[j%k]
}}return null
}function a(){var h=this._.currentTabId,k=this._.tabIdList.length,g=CKEDITOR.tools.indexOf(this._.tabIdList,h);
for(var j=g+1;
j<g+k;
j++){if(F.call(this,this._.tabIdList[j%k])){return this._.tabIdList[j%k]
}}return null
}function R(h,k){var g=h.$.getElementsByTagName("input");
for(var j=0,m=g.length;
j<m;
j++){var l=new CKEDITOR.dom.element(g[j]);
if(l.getAttribute("type").toLowerCase()=="text"){if(k){l.setAttribute("value",l.getCustomData("fake_value")||"");
l.removeCustomData("fake_value")
}else{l.setCustomData("fake_value",l.getAttribute("value"));
l.setAttribute("value","")
}}}}function B(h,i){var g=this.getInputElement();
if(g){h?g.removeAttribute("aria-invalid"):g.setAttribute("aria-invalid",true)
}if(!h){if(this.select){this.select()
}else{this.focus()
}}i&&alert(i);
this.fire("validated",{valid:h,msg:i})
}function X(){var g=this.getInputElement();
g&&g.removeAttribute("aria-invalid")
}CKEDITOR.dialog=function(k,o){var l=CKEDITOR.dialog._.dialogDefinitions[o],x=CKEDITOR.tools.clone(T),AE=k.config.dialog_buttonsOrder||"OS",r=k.lang.dir,j={},y,g;
if((AE=="OS"&&CKEDITOR.env.mac)||(AE=="rtl"&&r=="ltr")||(AE=="ltr"&&r=="rtl")){x.buttons.reverse()
}l=CKEDITOR.tools.extend(l(k),x);
l=CKEDITOR.tools.clone(l);
l=new S(this,l);
var AF=CKEDITOR.document;
var w=k.theme.buildDialog(k);
this._={editor:k,element:w.element,name:o,contentSize:{width:0,height:0},size:{width:0,height:0},contents:{},buttons:{},accessKeyMap:{},tabs:{},tabIdList:[],currentTabId:null,currentTabIndex:null,pageCount:0,lastTab:null,tabBarMode:false,focusList:[],currentFocusIndex:0,hasFocus:false};
this.parts=w.parts;
CKEDITOR.tools.setTimeout(function(){k.fire("ariaWidget",this.parts.contents)
},0,this);
var AC={position:CKEDITOR.env.ie6Compat?"absolute":"fixed",top:0,visibility:"hidden"};
AC[r=="rtl"?"right":"left"]=0;
this.parts.dialog.setStyles(AC);
CKEDITOR.event.call(this);
this.definition=l=CKEDITOR.fire("dialogDefinition",{name:o,definition:l},k).definition;
if(!("removeDialogTabs" in k._)&&k.config.removeDialogTabs){var AB=k.config.removeDialogTabs.split(";");
for(y=0;
y<AB.length;
y++){var t=AB[y].split(":");
if(t.length==2){var h=t[0];
if(!j[h]){j[h]=[]
}j[h].push(t[1])
}}k._.removeDialogTabs=j
}if(k._.removeDialogTabs&&(j=k._.removeDialogTabs[o])){for(y=0;
y<j.length;
y++){l.removeContents(j[y])
}}if(l.onLoad){this.on("load",l.onLoad)
}if(l.onShow){this.on("show",l.onShow)
}if(l.onHide){this.on("hide",l.onHide)
}if(l.onOk){this.on("ok",function(i){k.fire("saveSnapshot");
setTimeout(function(){k.fire("saveSnapshot")
},0);
if(l.onOk.call(this,i)===false){i.data.hide=false
}})
}if(l.onCancel){this.on("cancel",function(i){if(l.onCancel.call(this,i)===false){i.data.hide=false
}})
}var AD=this;
var u=function(AK){var AJ=AD._.contents,AI=false;
for(var AH in AJ){for(var AG in AJ[AH]){AI=AK.call(this,AJ[AH][AG]);
if(AI){return 
}}}};
this.on("ok",function(i){u(function(AH){if(AH.validate){var AG=AH.validate(this),AI=typeof (AG)=="string"||AG===false;
if(AI){i.data.hide=false;
i.stop()
}B.call(AH,!AI,typeof AG=="string"?AG:undefined);
return AI
}})
},this,null,0);
this.on("cancel",function(i){u(function(AG){if(AG.isChanged()){if(!confirm(k.lang.common.confirmCancel)){i.data.hide=false
}return true
}})
},this,null,0);
this.parts.close.on("click",function(i){if(this.fire("cancel",{hide:true}).hide!==false){this.hide()
}i.data.preventDefault()
},this);
function q(){var AI=AD._.focusList;
AI.sort(function(AJ,i){if(AJ.tabIndex!=i.tabIndex){return i.tabIndex-AJ.tabIndex
}else{return AJ.focusIndex-i.focusIndex
}});
var AH=AI.length;
for(var AG=0;
AG<AH;
AG++){AI[AG].focusIndex=AG
}}function AA(AJ){var AK=AD._.focusList;
AJ=AJ||0;
if(AK.length<1){return 
}var AH=AD._.currentFocusIndex;
try{AK[AH].getInputElement().$.blur()
}catch(AG){}var AI=(AH+AJ+AK.length)%AK.length,i=AI;
while(AJ&&!AK[i].isFocusable()){i=(i+AJ+AK.length)%AK.length;
if(i==AI){break
}}AK[i].focus();
if(AK[i].type=="text"){AK[i].select()
}}this.changeFocus=AA;
function s(i){if(AD!=CKEDITOR.dialog._.currentTop){return 
}var AJ=i.data.getKeystroke(),AI=k.lang.dir=="rtl";
g=0;
if(AJ==9||AJ==CKEDITOR.SHIFT+9){var AH=(AJ==CKEDITOR.SHIFT+9);
if(AD._.tabBarMode){var AG=AH?Q.call(AD):a.call(AD);
AD.selectPage(AG);
AD._.tabs[AG][0].focus()
}else{AA(AH?-1:1)
}g=1
}else{if(AJ==CKEDITOR.ALT+121&&!AD._.tabBarMode&&AD.getPageCount()>1){AD._.tabBarMode=true;
AD._.tabs[AD._.currentTabId][0].focus();
g=1
}else{if((AJ==37||AJ==39)&&AD._.tabBarMode){AG=(AJ==(AI?39:37)?Q.call(AD):a.call(AD));
AD.selectPage(AG);
AD._.tabs[AG][0].focus();
g=1
}else{if((AJ==13||AJ==32)&&AD._.tabBarMode){this.selectPage(this._.currentTabId);
this._.tabBarMode=false;
this._.currentFocusIndex=-1;
AA(1);
g=1
}}}}if(g){i.stop();
i.data.preventDefault()
}}function n(i){g&&i.data.preventDefault()
}var v=this._.element;
this.on("show",function(){v.on("keydown",s,this,null,0);
if(CKEDITOR.env.opera||(CKEDITOR.env.gecko&&CKEDITOR.env.mac)){v.on("keypress",n,this)
}});
this.on("hide",function(){v.removeListener("keydown",s);
if(CKEDITOR.env.opera||(CKEDITOR.env.gecko&&CKEDITOR.env.mac)){v.removeListener("keypress",n)
}u(function(i){X.apply(i)
})
});
this.on("iframeAdded",function(i){var AG=new CKEDITOR.dom.document(i.data.iframe.$.contentWindow.document);
AG.on("keydown",s,this,null,0)
});
this.on("show",function(){q();
if(k.config.dialog_startupFocusTab&&AD._.pageCount>1){AD._.tabBarMode=true;
AD._.tabs[AD._.currentTabId][0].focus()
}else{if(!this._.hasFocus){this._.currentFocusIndex=-1;
if(l.onFocus){var AG=l.onFocus.call(this);
AG&&AG.focus()
}else{AA(1)
}if(this._.editor.mode=="wysiwyg"&&CKEDITOR.env.ie){var i=k.document.$.selection,AI=i.createRange();
if(AI){if(AI.parentElement&&AI.parentElement().ownerDocument==k.document.$||AI.item&&AI.item(0).ownerDocument==k.document.$){var AH=document.body.createTextRange();
AH.moveToElementText(this.getElement().getFirst().$);
AH.collapse(true);
AH.select()
}}}}}},this,null,4294967295);
if(CKEDITOR.env.ie6Compat){this.on("load",function(i){var AH=this.getElement(),AG=AH.getFirst();
AG.remove();
AG.appendTo(AH)
},this)
}V(this);
e(this);
(new CKEDITOR.dom.text(l.title,CKEDITOR.document)).appendTo(this.parts.title);
for(y=0;
y<l.contents.length;
y++){var m=l.contents[y];
m&&this.addPage(m)
}this.parts.tabs.on("click",function(i){var AG=i.data.getTarget();
if(AG.hasClass("cke_dialog_tab")){var AH=AG.$.id;
this.selectPage(AH.substring(4,AH.lastIndexOf("_")));
if(this._.tabBarMode){this._.tabBarMode=false;
this._.currentFocusIndex=-1;
AA(1)
}i.data.preventDefault()
}},this);
var p=[],z=CKEDITOR.dialog._.uiElementBuilders.hbox.build(this,{type:"hbox",className:"cke_dialog_footer_buttons",widths:[],children:l.buttons},p).getChild();
this.parts.footer.setHtml(p.join(""));
for(y=0;
y<z.length;
y++){this._.buttons[z[y].id]=z[y]
}};
function c(i,h,g){this.element=h;
this.focusIndex=g;
this.tabIndex=0;
this.isFocusable=function(){return !h.getAttribute("disabled")&&h.isVisible()
};
this.focus=function(){i._.currentFocusIndex=this.focusIndex;
this.element.focus()
};
h.on("keydown",function(j){if(j.data.getKeystroke() in {32:1,13:1}){this.fire("click")
}});
h.on("focus",function(){this.fire("mouseover")
});
h.on("blur",function(){this.fire("mouseout")
})
}CKEDITOR.dialog.prototype={destroy:function(){this.hide();
this._.element.remove()
},resize:(function(){return function(h,g){if(this._.contentSize&&this._.contentSize.width==h&&this._.contentSize.height==g){return 
}CKEDITOR.dialog.fire("resize",{dialog:this,skin:this._.editor.skinName,width:h,height:g},this._.editor);
this.fire("resize",{skin:this._.editor.skinName,width:h,height:g},this._.editor);
if(this._.editor.lang.dir=="rtl"&&this._.position){this._.position.x=CKEDITOR.document.getWindow().getViewPaneSize().width-this._.contentSize.width-parseInt(this._.element.getFirst().getStyle("right"),10)
}this._.contentSize={width:h,height:g}
}
})(),getSize:function(){var g=this._.element.getFirst();
return{width:g.$.offsetWidth||0,height:g.$.offsetHeight||0}
},move:(function(){var g;
return function(o,l,k){var i=this._.element.getFirst(),m=this._.editor.lang.dir=="rtl";
if(g===undefined){g=i.getComputedStyle("position")=="fixed"
}if(g&&this._.position&&this._.position.x==o&&this._.position.y==l){return 
}this._.position={x:o,y:l};
if(!g){var n=CKEDITOR.document.getWindow().getScrollPosition();
o+=n.x;
l+=n.y
}if(m){var h=this.getSize(),j=CKEDITOR.document.getWindow().getViewPaneSize();
o=j.width-h.width-o
}var p={top:(l>0?l:0)+"px"};
p[m?"right":"left"]=(o>0?o:0)+"px";
i.setStyles(p);
k&&(this._.moved=1)
}
})(),getPosition:function(){return CKEDITOR.tools.extend({},this._.position)
},show:function(){var i=this._.element;
var h=this.definition;
if(!(i.getParent()&&i.getParent().equals(CKEDITOR.document.getBody()))){i.appendTo(CKEDITOR.document.getBody())
}else{i.setStyle("display","block")
}if(CKEDITOR.env.gecko&&CKEDITOR.env.version<10900){var j=this.parts.dialog;
j.setStyle("position","absolute");
setTimeout(function(){j.setStyle("position","fixed")
},0)
}this.resize(this._.contentSize&&this._.contentSize.width||h.width||h.minWidth,this._.contentSize&&this._.contentSize.height||h.height||h.minHeight);
this.reset();
this.selectPage(this.definition.contents[0].id);
if(CKEDITOR.dialog._.currentZIndex===null){CKEDITOR.dialog._.currentZIndex=this._.editor.config.baseFloatZIndex
}this._.element.getFirst().setStyle("z-index",CKEDITOR.dialog._.currentZIndex+=10);
if(CKEDITOR.dialog._.currentTop===null){CKEDITOR.dialog._.currentTop=this;
this._.parentDialog=null;
I(this._.editor)
}else{this._.parentDialog=CKEDITOR.dialog._.currentTop;
var g=this._.parentDialog.getElement().getFirst();
g.$.style.zIndex-=Math.floor(this._.editor.config.baseFloatZIndex/2);
CKEDITOR.dialog._.currentTop=this
}i.on("keydown",N);
i.on(CKEDITOR.env.opera?"keypress":"keyup",Y);
for(var k in {keyup:1,keydown:1,keypress:1}){i.on(k,d)
}L(this,this,"\x1b",null,function(){var l=this.getButton("cancel");
if(l){l.click()
}else{if(this.fire("cancel",{hide:true}).hide!==false){this.hide()
}}});
this._.hasFocus=false;
CKEDITOR.tools.setTimeout(function(){this.layout();
this.parts.dialog.setStyle("visibility","");
this.fireOnce("load",{});
CKEDITOR.ui.fire("ready",this);
this.fire("show",{});
this._.editor.fire("dialogShow",this);
this.foreach(function(l){l.setInitValue&&l.setInitValue()
})
},100,this)
},layout:function(){var h=CKEDITOR.document.getWindow().getViewPaneSize(),g=this.getSize();
this.move(this._.moved?this._.position.x:(h.width-g.width)/2,this._.moved?this._.position.y:(h.height-g.height)/2)
},foreach:function(k){for(var h in this._.contents){for(var g in this._.contents[h]){k.call(this,this._.contents[h][g])
}}return this
},reset:(function(){var g=function(h){if(h.reset){h.reset(1)
}};
return function(){this.foreach(g);
return this
}
})(),setupContent:function(){var g=arguments;
this.foreach(function(h){if(h.setup){h.setup.apply(h,g)
}})
},commitContent:function(){var g=arguments;
this.foreach(function(h){if(CKEDITOR.env.ie&&this._.currentFocusIndex==h.focusIndex){h.getInputElement().$.blur()
}if(h.commit){h.commit.apply(h,g)
}})
},hide:function(){if(!this.parts.dialog.isVisible()){return 
}this.fire("hide",{});
this._.editor.fire("dialogHide",this);
var h=this._.element;
h.setStyle("display","none");
this.parts.dialog.setStyle("visibility","hidden");
K(this);
while(CKEDITOR.dialog._.currentTop!=this){CKEDITOR.dialog._.currentTop.hide()
}if(!this._.parentDialog){O()
}else{var g=this._.parentDialog.getElement().getFirst();
g.setStyle("z-index",parseInt(g.$.style.zIndex,10)+Math.floor(this._.editor.config.baseFloatZIndex/2))
}CKEDITOR.dialog._.currentTop=this._.parentDialog;
if(!this._.parentDialog){CKEDITOR.dialog._.currentZIndex=null;
h.removeListener("keydown",N);
h.removeListener(CKEDITOR.env.opera?"keypress":"keyup",Y);
for(var k in {keyup:1,keydown:1,keypress:1}){h.removeListener(k,d)
}var j=this._.editor;
j.focus();
if(j.mode=="wysiwyg"&&CKEDITOR.env.ie){var i=j.getSelection();
i&&i.unlock(true)
}}else{CKEDITOR.dialog._.currentZIndex-=10
}delete this._.parentDialog;
this.foreach(function(l){l.resetInitValue&&l.resetInitValue()
})
},addPage:function(m){var j=[],n=m.label?' title="'+CKEDITOR.tools.htmlEncode(m.label)+'"':"",g=m.elements,q=CKEDITOR.dialog._.uiElementBuilders.vbox.build(this,{type:"vbox",className:"cke_dialog_page_contents",children:m.elements,expand:!!m.expand,padding:m.padding,style:m.style||"width: 100%;height:100%"},j);
var p=CKEDITOR.dom.element.createFromHtml(j.join(""));
p.setAttribute("role","tabpanel");
var o=CKEDITOR.env;
var i="cke_"+m.id+"_"+CKEDITOR.tools.getNextNumber(),k=CKEDITOR.dom.element.createFromHtml(['<a class="cke_dialog_tab"',(this._.pageCount>0?" cke_last":"cke_first"),n,(!!m.hidden?' style="display:none"':""),' id="',i,'"',o.gecko&&o.version>=10900&&!o.hc?"":' href="javascript:void(0)"',' tabIndex="-1"',' hidefocus="true"',' role="tab">',m.label,"</a>"].join(""));
p.setAttribute("aria-labelledby",i);
this._.tabs[m.id]=[k,p];
this._.tabIdList.push(m.id);
!m.hidden&&this._.pageCount++;
this._.lastTab=k;
this.updateStyle();
var l=this._.contents[m.id]={},r,h=q.getChild();
while((r=h.shift())){l[r.id]=r;
if(typeof (r.getChild)=="function"){h.push.apply(h,r.getChild())
}}p.setAttribute("name",m.id);
p.appendTo(this.parts.contents);
k.unselectable();
this.parts.tabs.append(k);
if(m.accessKey){L(this,this,"CTRL+"+m.accessKey,f,G);
this._.accessKeyMap["CTRL+"+m.accessKey]=m.id
}},selectPage:function(l){if(this._.currentTabId==l){return 
}if(this.fire("selectPage",{page:l,currentPage:this._.currentTabId})===true){return 
}for(var g in this._.tabs){var j=this._.tabs[g][0],k=this._.tabs[g][1];
if(g!=l){j.removeClass("cke_dialog_tab_selected");
k.hide()
}k.setAttribute("aria-hidden",g!=l)
}var h=this._.tabs[l];
h[0].addClass("cke_dialog_tab_selected");
if(CKEDITOR.env.ie6Compat||CKEDITOR.env.ie7Compat){R(h[1]);
h[1].show();
setTimeout(function(){R(h[1],1)
},0)
}else{h[1].show()
}this._.currentTabId=l;
this._.currentTabIndex=CKEDITOR.tools.indexOf(this._.tabIdList,l)
},updateStyle:function(){this.parts.dialog[(this._.pageCount===1?"add":"remove")+"Class"]("cke_single_page")
},hidePage:function(h){var g=this._.tabs[h]&&this._.tabs[h][0];
if(!g||this._.pageCount==1||!g.isVisible()){return 
}else{if(h==this._.currentTabId){this.selectPage(Q.call(this))
}}g.hide();
this._.pageCount--;
this.updateStyle()
},showPage:function(h){var g=this._.tabs[h]&&this._.tabs[h][0];
if(!g){return 
}g.show();
this._.pageCount++;
this.updateStyle()
},getElement:function(){return this._.element
},getName:function(){return this._.name
},getContentElement:function(h,g){var i=this._.contents[h];
return i&&i[g]
},getValueOf:function(h,g){return this.getContentElement(h,g).getValue()
},setValueOf:function(h,g,i){return this.getContentElement(h,g).setValue(i)
},getButton:function(g){return this._.buttons[g]
},click:function(g){return this._.buttons[g].click()
},disableButton:function(g){return this._.buttons[g].disable()
},enableButton:function(g){return this._.buttons[g].enable()
},getPageCount:function(){return this._.pageCount
},getParentEditor:function(){return this._.editor
},getSelectedElement:function(){return this.getParentEditor().getSelection().getSelectedElement()
},addFocusable:function(j,g){if(typeof g=="undefined"){g=this._.focusList.length;
this._.focusList.push(new c(this,j,g))
}else{this._.focusList.splice(g,0,new c(this,j,g));
for(var h=g+1;
h<this._.focusList.length;
h++){this._.focusList[h].focusIndex++
}}}};
CKEDITOR.tools.extend(CKEDITOR.dialog,{add:function(g,h){if(!this._.dialogDefinitions[g]||typeof h=="function"){this._.dialogDefinitions[g]=h
}},exists:function(g){return !!this._.dialogDefinitions[g]
},getCurrent:function(){return CKEDITOR.dialog._.currentTop
},okButton:(function(){var g=function(i,h){h=h||{};
return CKEDITOR.tools.extend({id:"ok",type:"button",label:i.lang.common.ok,"class":"cke_dialog_ui_button_ok",onClick:function(j){var k=j.data.dialog;
if(k.fire("ok",{hide:true}).hide!==false){k.hide()
}}},h,true)
};
g.type="button";
g.override=function(h){return CKEDITOR.tools.extend(function(i){return g(i,h)
},{type:"button"},true)
};
return g
})(),cancelButton:(function(){var g=function(i,h){h=h||{};
return CKEDITOR.tools.extend({id:"cancel",type:"button",label:i.lang.common.cancel,"class":"cke_dialog_ui_button_cancel",onClick:function(j){var k=j.data.dialog;
if(k.fire("cancel",{hide:true}).hide!==false){k.hide()
}}},h,true)
};
g.type="button";
g.override=function(h){return CKEDITOR.tools.extend(function(i){return g(i,h)
},{type:"button"},true)
};
return g
})(),addUIElement:function(h,g){this._.uiElementBuilders[h]=g
}});
CKEDITOR.dialog._={uiElementBuilders:{},dialogDefinitions:{},currentTop:null,currentZIndex:null};
CKEDITOR.event.implementOn(CKEDITOR.dialog);
CKEDITOR.event.implementOn(CKEDITOR.dialog.prototype,true);
var T={resizable:CKEDITOR.DIALOG_RESIZE_BOTH,minWidth:600,minHeight:400,buttons:[CKEDITOR.dialog.okButton,CKEDITOR.dialog.cancelButton]};
var Z=function(m,l,k){for(var h=0,j;
(j=m[h]);
h++){if(j.id==l){return j
}if(k&&j[k]){var g=Z(j[k],l,k);
if(g){return g
}}}return null
};
var D=function(o,j,n,l,m){if(n){for(var h=0,k;
(k=o[h]);
h++){if(k.id==n){o.splice(h,0,j);
return j
}if(l&&k[l]){var g=D(k[l],j,n,l,true);
if(g){return g
}}}if(m){return null
}}o.push(j);
return j
};
var J=function(m,l,k){for(var h=0,j;
(j=m[h]);
h++){if(j.id==l){return m.splice(h,1)
}if(k&&j[k]){var g=J(j[k],l,k);
if(g){return g
}}}return null
};
var S=function(h,l){this.dialog=h;
var k=l.contents;
for(var g=0,j;
(j=k[g]);
g++){k[g]=j&&new C(h,j)
}CKEDITOR.tools.extend(this,l)
};
S.prototype={getContents:function(g){return Z(this.contents,g)
},getButton:function(g){return Z(this.buttons,g)
},addContents:function(g,h){return D(this.contents,g,h)
},addButton:function(g,h){return D(this.buttons,g,h)
},removeContents:function(g){J(this.contents,g)
},removeButton:function(g){J(this.buttons,g)
}};
function C(g,h){this._={dialog:g};
CKEDITOR.tools.extend(this,h)
}C.prototype={get:function(g){return Z(this.elements,g,"children")
},add:function(h,g){return D(this.elements,h,g,"children")
},remove:function(g){J(this.elements,g,"children")
}};
function V(l){var i=null,n=null,h=l.getElement().getFirst(),j=l.getParentEditor(),g=j.config.dialog_magnetDistance,m=j.skin.margins||[0,0,0,0];
if(typeof g=="undefined"){g=20
}function k(v){var p=l.getSize(),s=CKEDITOR.document.getWindow().getViewPaneSize(),u=v.data.$.screenX,t=v.data.$.screenY,z=u-i.x,w=t-i.y,r,q;
i={x:u,y:t};
n.x+=z;
n.y+=w;
if(n.x+m[3]<g){r=-m[3]
}else{if(n.x-m[1]>s.width-p.width-g){r=s.width-p.width+(j.lang.dir=="rtl"?0:m[1])
}else{r=n.x
}}if(n.y+m[0]<g){q=-m[0]
}else{if(n.y-m[2]>s.height-p.height-g){q=s.height-p.height+m[2]
}else{q=n.y
}}l.move(r,q,1);
v.data.preventDefault()
}function o(p){CKEDITOR.document.removeListener("mousemove",k);
CKEDITOR.document.removeListener("mouseup",o);
if(CKEDITOR.env.ie6Compat){var q=U.getChild(0).getFrameDocument();
q.removeListener("mousemove",k);
q.removeListener("mouseup",o)
}}l.parts.title.on("mousedown",function(p){i={x:p.data.$.screenX,y:p.data.$.screenY};
CKEDITOR.document.on("mousemove",k);
CKEDITOR.document.on("mouseup",o);
n=l.getPosition();
if(CKEDITOR.env.ie6Compat){var q=U.getChild(0).getFrameDocument();
q.on("mousemove",k);
q.on("mouseup",o)
}p.data.preventDefault()
},l)
}function e(m){var h=m.definition,g=h.resizable;
if(g==CKEDITOR.DIALOG_RESIZE_NONE){return 
}var l=m.getParentEditor();
var j,i,n,p,q,s;
var o=CKEDITOR.tools.addFunction(function(u){q=m.getSize();
var v=m.parts.contents,t=v.$.getElementsByTagName("iframe").length;
if(t){s=CKEDITOR.dom.element.createFromHtml('<div class="cke_dialog_resize_cover" style="height: 100%; position: absolute; width: 100%;"></div>');
v.append(s)
}i=q.height-m.parts.contents.getSize("height",!(CKEDITOR.env.gecko||CKEDITOR.env.opera||CKEDITOR.env.ie&&CKEDITOR.env.quirks));
j=q.width-m.parts.contents.getSize("width",1);
p={x:u.screenX,y:u.screenY};
n=CKEDITOR.document.getWindow().getViewPaneSize();
CKEDITOR.document.on("mousemove",k);
CKEDITOR.document.on("mouseup",r);
if(CKEDITOR.env.ie6Compat){var w=U.getChild(0).getFrameDocument();
w.on("mousemove",k);
w.on("mouseup",r)
}u.preventDefault&&u.preventDefault()
});
m.on("load",function(){var t="";
if(g==CKEDITOR.DIALOG_RESIZE_WIDTH){t=" cke_resizer_horizontal"
}else{if(g==CKEDITOR.DIALOG_RESIZE_HEIGHT){t=" cke_resizer_vertical"
}}var u=CKEDITOR.dom.element.createFromHtml('<div class="cke_resizer'+t+" cke_resizer_"+l.lang.dir+'" title="'+CKEDITOR.tools.htmlEncode(l.lang.resize)+'" onmousedown="CKEDITOR.tools.callFunction('+o+', event )"></div>');
m.parts.footer.append(u,1)
});
l.on("destroy",function(){CKEDITOR.tools.removeFunction(o)
});
function k(AA){var y=l.lang.dir=="rtl",AD=(AA.data.$.screenX-p.x)*(y?-1:1),AC=AA.data.$.screenY-p.y,t=q.width,AB=q.height,u=t+AD*(m._.moved?1:2),w=AB+AC*(m._.moved?1:2),v=m._.element.getFirst(),z=y&&v.getComputedStyle("right"),x=m.getPosition();
if(x.y+w>n.height){w=n.height-x.y
}if((y?z:x.x)+u>n.width){u=n.width-(y?z:x.x)
}if((g==CKEDITOR.DIALOG_RESIZE_WIDTH||g==CKEDITOR.DIALOG_RESIZE_BOTH)){t=Math.max(h.minWidth||0,u-j)
}if(g==CKEDITOR.DIALOG_RESIZE_HEIGHT||g==CKEDITOR.DIALOG_RESIZE_BOTH){AB=Math.max(h.minHeight||0,w-i)
}m.resize(t,AB);
if(!m._.moved){m.layout()
}AA.data.preventDefault()
}function r(){CKEDITOR.document.removeListener("mouseup",r);
CKEDITOR.document.removeListener("mousemove",k);
if(s){s.remove();
s=null
}if(CKEDITOR.env.ie6Compat){var t=U.getChild(0).getFrameDocument();
t.removeListener("mouseup",r);
t.removeListener("mousemove",k)
}}}var P;
var M={},U;
function b(g){g.data.preventDefault(1)
}function I(o){var n=CKEDITOR.document.getWindow();
var h=o.config,p=h.dialog_backgroundCoverColor||"white",j=h.dialog_backgroundCoverOpacity,q=h.baseFloatZIndex,s=CKEDITOR.tools.genKey(p,j,q),i=M[s];
if(!i){var m=['<div tabIndex="-1" style="position: ',(CKEDITOR.env.ie6Compat?"absolute":"fixed"),"; z-index: ",q,"; top: 0px; left: 0px; ",(!CKEDITOR.env.ie6Compat?"background-color: "+p:""),'" class="cke_dialog_background_cover">'];
if(CKEDITOR.env.ie6Compat){var l=CKEDITOR.env.isCustomDomain(),r="<html><body style=\\'background-color:"+p+";\\'></body></html>";
m.push('<iframe hidefocus="true" frameborder="0" id="cke_dialog_background_iframe" src="javascript:');
m.push("void((function(){document.open();"+(l?"document.domain='"+document.domain+"';":"")+"document.write( '"+r+"' );document.close();})())");
m.push('" style="position:absolute;left:0;top:0;width:100%;height: 100%;progid:DXImageTransform.Microsoft.Alpha(opacity=0)"></iframe>')
}m.push("</div>");
i=CKEDITOR.dom.element.createFromHtml(m.join(""));
i.setOpacity(j!=undefined?j:0.5);
i.on("keydown",b);
i.on("keypress",b);
i.on("keyup",b);
i.appendTo(CKEDITOR.document.getBody());
M[s]=i
}else{i.show()
}U=i;
var t=function(){var u=n.getViewPaneSize();
i.setStyles({width:u.width+"px",height:u.height+"px"})
};
var k=function(){var w=n.getScrollPosition(),v=CKEDITOR.dialog._.currentTop;
i.setStyles({left:w.x+"px",top:w.y+"px"});
if(v){do{var u=v.getPosition();
v.move(u.x,u.y)
}while((v=v._.parentDialog))
}};
P=t;
n.on("resize",t);
t();
if(!(CKEDITOR.env.mac&&CKEDITOR.env.webkit)){i.focus()
}if(CKEDITOR.env.ie6Compat){var g=function(){k();
arguments.callee.prevScrollHandler.apply(this,arguments)
};
n.$.setTimeout(function(){g.prevScrollHandler=window.onscroll||function(){};
window.onscroll=g
},0);
k()
}}function O(){if(!U){return 
}var g=CKEDITOR.document.getWindow();
U.hide();
g.removeListener("resize",P);
if(CKEDITOR.env.ie6Compat){g.$.setTimeout(function(){var h=window.onscroll&&window.onscroll.prevScrollHandler;
window.onscroll=h||null
},0)
}P=null
}function E(){for(var g in M){M[g].remove()
}M={}
}var W={};
var N=function(i){var k=i.data.$.ctrlKey||i.data.$.metaKey,l=i.data.$.altKey,h=i.data.$.shiftKey,j=String.fromCharCode(i.data.$.keyCode),g=W[(k?"CTRL+":"")+(l?"ALT+":"")+(h?"SHIFT+":"")+j];
if(!g||!g.length){return 
}g=g[g.length-1];
g.keydown&&g.keydown.call(g.uiElement,g.dialog,g.key);
i.data.preventDefault()
};
var Y=function(i){var k=i.data.$.ctrlKey||i.data.$.metaKey,l=i.data.$.altKey,h=i.data.$.shiftKey,j=String.fromCharCode(i.data.$.keyCode),g=W[(k?"CTRL+":"")+(l?"ALT+":"")+(h?"SHIFT+":"")+j];
if(!g||!g.length){return 
}g=g[g.length-1];
if(g.keyup){g.keyup.call(g.uiElement,g.dialog,g.key);
i.data.preventDefault()
}};
var L=function(g,i,h,j,l){var k=W[h]||(W[h]=[]);
k.push({uiElement:g,dialog:i,key:h,keyup:l||g.accessKeyUp,keydown:j||g.accessKeyDown})
};
var K=function(l){for(var h in W){var k=W[h];
for(var g=k.length-1;
g>=0;
g--){if(k[g].dialog==l||k[g].uiElement==l){k.splice(g,1)
}}if(k.length===0){delete W[h]
}}};
var G=function(h,g){if(h._.accessKeyMap[g]){h.selectPage(h._.accessKeyMap[g])
}};
var f=function(h,g){};
var A={27:1,13:1};
var d=function(g){if(g.data.getKeystroke() in A){g.data.stopPropagation()
}};
(function(){CKEDITOR.ui.dialog={uiElement:function(z,t,u,k,w,h,j){if(arguments.length<4){return 
}var g=(k.call?k(t):k)||"div",r=["<",g," "],q=(w&&w.call?w(t):w)||{},p=(h&&h.call?h(t):h)||{},n=(j&&j.call?j.call(this,z,t):j)||"",m=this.domId=p.id||CKEDITOR.tools.getNextId()+"_uiElement",v=this.id=t.id,y;
p.id=m;
var AA={};
if(t.type){AA["cke_dialog_ui_"+t.type]=1
}if(t.className){AA[t.className]=1
}if(t.disabled){AA.cke_disabled=1
}var o=(p["class"]&&p["class"].split)?p["class"].split(" "):[];
for(y=0;
y<o.length;
y++){if(o[y]){AA[o[y]]=1
}}var l=[];
for(y in AA){l.push(y)
}p["class"]=l.join(" ");
if(t.title){p.title=t.title
}var s=(t.style||"").split(";");
if(t.align){var x=t.align;
q["margin-left"]=x=="left"?0:"auto";
q["margin-right"]=x=="right"?0:"auto"
}for(y in q){s.push(y+":"+q[y])
}if(t.hidden){s.push("display:none")
}for(y=s.length-1;
y>=0;
y--){if(s[y]===""){s.splice(y,1)
}}if(s.length>0){p.style=(p.style?(p.style+"; "):"")+s.join("; ")
}for(y in p){r.push(y+'="'+CKEDITOR.tools.htmlEncode(p[y])+'" ')
}r.push(">",n,"</",g,">");
u.push(r.join(""));
(this._||(this._={})).dialog=z;
if(typeof (t.isChanged)=="boolean"){this.isChanged=function(){return t.isChanged
}
}if(typeof (t.isChanged)=="function"){this.isChanged=t.isChanged
}if(typeof (t.setValue)=="function"){this.setValue=CKEDITOR.tools.override(this.setValue,function(i){return function(AC){i.call(this,t.setValue.call(this,AC))
}
})
}if(typeof (t.getValue)=="function"){this.getValue=CKEDITOR.tools.override(this.getValue,function(i){return function(){return t.getValue.call(this,i.call(this))
}
})
}CKEDITOR.event.implementOn(this);
this.registerEvents(t);
if(this.accessKeyUp&&this.accessKeyDown&&t.accessKey){L(this,z,"CTRL+"+t.accessKey)
}var AB=this;
z.on("load",function(){var i=AB.getInputElement();
if(i){var AC=AB.type in {checkbox:1,ratio:1}&&CKEDITOR.env.ie&&CKEDITOR.env.version<8?"cke_dialog_ui_focused":"";
i.on("focus",function(){z._.tabBarMode=false;
z._.hasFocus=true;
AB.fire("focus");
AC&&this.addClass(AC)
});
i.on("blur",function(){AB.fire("blur");
AC&&this.removeClass(AC)
})
}});
if(this.keyboardFocusable){this.tabIndex=t.tabIndex||0;
this.focusIndex=z._.focusList.push(this)-1;
this.on("focus",function(){z._.currentFocusIndex=AB.focusIndex
})
}CKEDITOR.tools.extend(this,t)
},hbox:function(n,r,s,j,h){if(arguments.length<4){return 
}this._||(this._={});
var k=this._.children=r,l=h&&h.widths||null,p=h&&h.height||null,q={},m;
var o=function(){var i=['<tbody><tr class="cke_dialog_ui_hbox">'];
for(m=0;
m<s.length;
m++){var t="cke_dialog_ui_hbox_child",u=[];
if(m===0){t="cke_dialog_ui_hbox_first"
}if(m==s.length-1){t="cke_dialog_ui_hbox_last"
}i.push('<td class="',t,'" role="presentation" ');
if(l){if(l[m]){u.push("width:"+H(l[m]))
}}else{u.push("width:"+Math.floor(100/s.length)+"%")
}if(p){u.push("height:"+H(p))
}if(h&&h.padding!=undefined){u.push("padding:"+H(h.padding))
}if(CKEDITOR.env.ie&&CKEDITOR.env.quirks&&k[m].align){u.push("text-align:"+k[m].align)
}if(u.length>0){i.push('style="'+u.join("; ")+'" ')
}i.push(">",s[m],"</td>")
}i.push("</tr></tbody>");
return i.join("")
};
var g={role:"presentation"};
h&&h.align&&(g.align=h.align);
CKEDITOR.ui.dialog.uiElement.call(this,n,h||{type:"hbox"},j,"table",q,g,o)
},vbox:function(k,n,o,i,g){if(arguments.length<3){return 
}this._||(this._={});
var j=this._.children=n,h=g&&g.width||null,l=g&&g.heights||null;
var m=function(){var q=['<table role="presentation" cellspacing="0" border="0" '];
q.push('style="');
if(g&&g.expand){q.push("height:100%;")
}q.push("width:"+H(h||"100%"),";");
q.push('"');
q.push('align="',CKEDITOR.tools.htmlEncode((g&&g.align)||(k.getParentEditor().lang.dir=="ltr"?"left":"right")),'" ');
q.push("><tbody>");
for(var p=0;
p<o.length;
p++){var r=[];
q.push('<tr><td role="presentation" ');
if(h){r.push("width:"+H(h||"100%"))
}if(l){r.push("height:"+H(l[p]))
}else{if(g&&g.expand){r.push("height:"+Math.floor(100/o.length)+"%")
}}if(g&&g.padding!=undefined){r.push("padding:"+H(g.padding))
}if(CKEDITOR.env.ie&&CKEDITOR.env.quirks&&j[p].align){r.push("text-align:"+j[p].align)
}if(r.length>0){q.push('style="',r.join("; "),'" ')
}q.push(' class="cke_dialog_ui_vbox_child">',o[p],"</td></tr>")
}q.push("</tbody></table>");
return q.join("")
};
CKEDITOR.ui.dialog.uiElement.call(this,k,g||{type:"vbox"},i,"div",null,{role:"presentation"},m)
}}
})();
CKEDITOR.ui.dialog.uiElement.prototype={getElement:function(){return CKEDITOR.document.getById(this.domId)
},getInputElement:function(){return this.getElement()
},getDialog:function(){return this._.dialog
},setValue:function(h,g){this.getInputElement().setValue(h);
!g&&this.fire("change",{value:h});
return this
},getValue:function(){return this.getInputElement().getValue()
},isChanged:function(){return false
},selectParentTab:function(){var h=this.getInputElement(),i=h,g;
while((i=i.getParent())&&i.$.className.search("cke_dialog_page_contents")==-1){}if(!i){return this
}g=i.getAttribute("name");
if(this._.dialog._.currentTabId!=g){this._.dialog.selectPage(g)
}return this
},focus:function(){this.selectParentTab().getInputElement().focus();
return this
},registerEvents:function(j){var k=/^on([A-Z]\w+)/,g;
var l=function(m,n,i,o){n.on("load",function(){m.getInputElement().on(i,o,m)
})
};
for(var h in j){if(!(g=h.match(k))){continue
}if(this.eventProcessors[h]){this.eventProcessors[h].call(this,this._.dialog,j[h])
}else{l(this,this._.dialog,g[1].toLowerCase(),j[h])
}}return this
},eventProcessors:{onLoad:function(g,h){g.on("load",h,this)
},onShow:function(g,h){g.on("show",h,this)
},onHide:function(g,h){g.on("hide",h,this)
}},accessKeyDown:function(h,g){this.focus()
},accessKeyUp:function(h,g){},disable:function(){var h=this.getElement(),g=this.getInputElement();
g.setAttribute("disabled","true");
h.addClass("cke_disabled")
},enable:function(){var h=this.getElement(),g=this.getInputElement();
g.removeAttribute("disabled");
h.removeClass("cke_disabled")
},isEnabled:function(){return !this.getElement().hasClass("cke_disabled")
},isVisible:function(){return this.getInputElement().isVisible()
},isFocusable:function(){if(!this.isEnabled()||!this.isVisible()){return false
}return true
}};
CKEDITOR.ui.dialog.hbox.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{getChild:function(g){if(arguments.length<1){return this._.children.concat()
}if(!g.splice){g=[g]
}if(g.length<2){return this._.children[g[0]]
}else{return(this._.children[g[0]]&&this._.children[g[0]].getChild)?this._.children[g[0]].getChild(g.slice(1,g.length)):null
}}},true);
CKEDITOR.ui.dialog.vbox.prototype=new CKEDITOR.ui.dialog.hbox();
(function(){var g={build:function(o,h,l){var k=h.children,j,q=[],p=[];
for(var n=0;
(n<k.length&&(j=k[n]));
n++){var m=[];
q.push(m);
p.push(CKEDITOR.dialog._.uiElementBuilders[j.type].build(o,j,m))
}return new CKEDITOR.ui.dialog[h.type](o,p,q,l,h)
}};
CKEDITOR.dialog.addUIElement("hbox",g);
CKEDITOR.dialog.addUIElement("vbox",g)
})();
CKEDITOR.dialogCommand=function(g){this.dialogName=g
};
CKEDITOR.dialogCommand.prototype={exec:function(g){CKEDITOR.env.opera?CKEDITOR.tools.setTimeout(function(){g.openDialog(this.dialogName)
},0,this):g.openDialog(this.dialogName)
},canUndo:false,editorFocus:CKEDITOR.env.ie||CKEDITOR.env.webkit};
(function(){var h=/^([a]|[^a])+$/,g=/^\d*$/,i=/^\d*(?:\.\d+)?$/,j=/^(((\d*(\.\d+))|(\d*))(px|\%)?)?$/,l=/^(((\d*(\.\d+))|(\d*))(px|em|ex|in|cm|mm|pt|pc|\%)?)?$/i,k=/^(\s*[\w-]+\s*:\s*[^:;]+(?:;|$))*$/;
CKEDITOR.VALIDATE_OR=1;
CKEDITOR.VALIDATE_AND=2;
CKEDITOR.dialog.validate={functions:function(){var m=arguments;
return function(){var p=this&&this.getValue?this.getValue():m[0];
var r=undefined,o=CKEDITOR.VALIDATE_AND,q=[],n;
for(n=0;
n<m.length;
n++){if(typeof (m[n])=="function"){q.push(m[n])
}else{break
}}if(n<m.length&&typeof (m[n])=="string"){r=m[n];
n++
}if(n<m.length&&typeof (m[n])=="number"){o=m[n]
}var s=(o==CKEDITOR.VALIDATE_AND?true:false);
for(n=0;
n<q.length;
n++){if(o==CKEDITOR.VALIDATE_AND){s=s&&q[n](p)
}else{s=s||q[n](p)
}}return !s?r:true
}
},regex:function(m,n){return function(){var o=this&&this.getValue?this.getValue():arguments[0];
return !m.test(o)?n:true
}
},notEmpty:function(m){return this.regex(h,m)
},integer:function(m){return this.regex(g,m)
},number:function(m){return this.regex(i,m)
},cssLength:function(m){return this.functions(function(n){return l.test(CKEDITOR.tools.trim(n))
},m)
},htmlLength:function(m){return this.functions(function(n){return j.test(CKEDITOR.tools.trim(n))
},m)
},inlineStyle:function(m){return this.functions(function(n){return k.test(CKEDITOR.tools.trim(n))
},m)
},equals:function(m,n){return this.functions(function(o){return o==m
},n)
},notEqual:function(m,n){return this.functions(function(o){return o!=m
},n)
}};
CKEDITOR.on("instanceDestroyed",function(n){if(CKEDITOR.tools.isEmpty(CKEDITOR.instances)){var m;
while((m=CKEDITOR.dialog._.currentTop)){m.hide()
}E()
}var p=n.editor._.storedDialogs;
for(var o in p){p[o].destroy()
}})
})();
CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{openDialog:function(i,p){if(this.mode=="wysiwyg"&&CKEDITOR.env.ie){var m=this.getSelection();
m&&m.lock()
}var h=CKEDITOR.dialog._.dialogDefinitions[i],g=this.skin.dialog;
if(CKEDITOR.dialog._.currentTop===null){I(this)
}if(typeof h=="function"&&g._isLoaded){var n=this._.storedDialogs||(this._.storedDialogs={});
var k=n[i]||(n[i]=new CKEDITOR.dialog(this,i));
p&&p.call(k,k);
k.show();
return k
}else{if(h=="failed"){O();
throw new Error('[CKEDITOR.dialog.openDialog] Dialog "'+i+'" failed when loading definition.')
}}var l=this;
function j(r){var s=CKEDITOR.dialog._.dialogDefinitions[i],q=l.skin.dialog;
if(!q._isLoaded||o&&typeof r=="undefined"){return 
}if(typeof s!="function"){CKEDITOR.dialog._.dialogDefinitions[i]="failed"
}l.openDialog(i,p)
}if(typeof h=="string"){var o=1;
CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(h),j,null,0,1)
}CKEDITOR.skins.load(this,"dialog",j);
return null
}})
})();
CKEDITOR.plugins.add("dialog",{requires:["dialogui"]});