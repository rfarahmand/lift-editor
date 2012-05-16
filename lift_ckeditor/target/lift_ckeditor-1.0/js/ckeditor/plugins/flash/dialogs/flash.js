(function(){var I=1,H=2,G=4,F={id:[{type:I,name:"id"}],classid:[{type:I,name:"classid"}],codebase:[{type:I,name:"codebase"}],pluginspage:[{type:G,name:"pluginspage"}],src:[{type:H,name:"movie"},{type:G,name:"src"},{type:I,name:"data"}],name:[{type:G,name:"name"}],align:[{type:I,name:"align"}],title:[{type:I,name:"title"},{type:G,name:"title"}],"class":[{type:I,name:"class"},{type:G,name:"class"}],width:[{type:I,name:"width"},{type:G,name:"width"}],height:[{type:I,name:"height"},{type:G,name:"height"}],hSpace:[{type:I,name:"hSpace"},{type:G,name:"hSpace"}],vSpace:[{type:I,name:"vSpace"},{type:G,name:"vSpace"}],style:[{type:I,name:"style"},{type:G,name:"style"}],type:[{type:G,name:"type"}]},E=["play","loop","menu","quality","scale","salign","wmode","bgcolor","base","flashvars","allowScriptAccess","allowFullScreen"];
for(var D=0;
D<E.length;
D++){F[E[D]]=[{type:G,name:E[D]},{type:H,name:E[D]}]
}E=["allowFullScreen","play","loop","menu"];
for(D=0;
D<E.length;
D++){F[E[D]][0]["default"]=F[E[D]][1]["default"]=true
}var C=CKEDITOR.tools.cssLength;
function B(R,Q,P){var J=this;
var O=F[J.id];
if(!O){return 
}var N=J instanceof CKEDITOR.ui.dialog.checkbox;
for(var M=0;
M<O.length;
M++){var L=O[M];
switch(L.type){case I:if(!R){continue
}if(R.getAttribute(L.name)!==null){var K=R.getAttribute(L.name);
if(N){J.setValue(K.toLowerCase()=="true")
}else{J.setValue(K)
}return 
}else{if(N){J.setValue(!!L["default"])
}}break;
case H:if(!R){continue
}if(L.name in P){K=P[L.name];
if(N){J.setValue(K.toLowerCase()=="true")
}else{J.setValue(K)
}return 
}else{if(N){J.setValue(!!L["default"])
}}break;
case G:if(!Q){continue
}if(Q.getAttribute(L.name)){K=Q.getAttribute(L.name);
if(N){J.setValue(K.toLowerCase()=="true")
}else{J.setValue(K)
}return 
}else{if(N){J.setValue(!!L["default"])
}}}}}function A(R,Q,P){var S=this;
var O=F[S.id];
if(!O){return 
}var N=S.getValue()==="",M=S instanceof CKEDITOR.ui.dialog.checkbox;
for(var L=0;
L<O.length;
L++){var K=O[L];
switch(K.type){case I:if(!R||K.name=="data"&&Q&&!R.hasAttribute("data")){continue
}var J=S.getValue();
if(N||M&&J===K["default"]){R.removeAttribute(K.name)
}else{R.setAttribute(K.name,J)
}break;
case H:if(!R){continue
}J=S.getValue();
if(N||M&&J===K["default"]){if(K.name in P){P[K.name].remove()
}}else{if(K.name in P){P[K.name].setAttribute("value",J)
}else{var T=CKEDITOR.dom.element.createFromHtml("<cke:param></cke:param>",R.getDocument());
T.setAttributes({name:K.name,value:J});
if(R.getChildCount()<1){T.appendTo(R)
}else{T.insertBefore(R.getFirst())
}}}break;
case G:if(!Q){continue
}J=S.getValue();
if(N||M&&J===K["default"]){Q.removeAttribute(K.name)
}else{Q.setAttribute(K.name,J)
}}}}CKEDITOR.dialog.add("flash",function(M){var L=!M.config.flashEmbedTagOnly,K=M.config.flashAddEmbedTag||M.config.flashEmbedTagOnly,J,N="<div>"+CKEDITOR.tools.htmlEncode(M.lang.common.preview)+'<br><div id="cke_FlashPreviewLoader'+CKEDITOR.tools.getNextNumber()+'" style="display:none"><div class="loading">&nbsp;</div></div><div id="cke_FlashPreviewBox'+CKEDITOR.tools.getNextNumber()+'" class="FlashPreviewBox"></div></div>';
return{title:M.lang.flash.title,minWidth:420,minHeight:310,onShow:function(){var S=this;
S.fakeImage=S.objectNode=S.embedNode=null;
J=new CKEDITOR.dom.element("embed",M.document);
var R=S.getSelectedElement();
if(R&&R.data("cke-real-element-type")&&R.data("cke-real-element-type")=="flash"){S.fakeImage=R;
var Q=M.restoreRealElement(R),P=null,O=null,a={};
if(Q.getName()=="cke:object"){P=Q;
var Z=P.getElementsByTag("embed","cke");
if(Z.count()>0){O=Z.getItem(0)
}var Y=P.getElementsByTag("param","cke");
for(var X=0,W=Y.count();
X<W;
X++){var V=Y.getItem(X),U=V.getAttribute("name"),T=V.getAttribute("value");
a[U]=T
}}else{if(Q.getName()=="cke:embed"){O=Q
}}S.objectNode=P;
S.embedNode=O;
S.setupContent(P,O,a,R)
}},onOk:function(){var S=this;
var R=null,Q=null,P=null;
if(!S.fakeImage){if(L){R=CKEDITOR.dom.element.createFromHtml("<cke:object></cke:object>",M.document);
var O={classid:"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",codebase:"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"};
R.setAttributes(O)
}if(K){Q=CKEDITOR.dom.element.createFromHtml("<cke:embed></cke:embed>",M.document);
Q.setAttributes({type:"application/x-shockwave-flash",pluginspage:"http://www.macromedia.com/go/getflashplayer"});
if(R){Q.appendTo(R)
}}}else{R=S.objectNode;
Q=S.embedNode
}if(R){P={};
var Y=R.getElementsByTag("param","cke");
for(var X=0,W=Y.count();
X<W;
X++){P[Y.getItem(X).getAttribute("name")]=Y.getItem(X)
}}var V={},U={};
S.commitContent(R,Q,P,V,U);
var T=M.createFakeElement(R||Q,"cke_flash","flash",true);
T.setAttributes(U);
T.setStyles(V);
if(S.fakeImage){T.replace(S.fakeImage);
M.getSelection().selectElement(T)
}else{M.insertElement(T)
}},onHide:function(){if(this.preview){this.preview.setHtml("")
}},contents:[{id:"info",label:M.lang.common.generalTab,accessKey:"I",elements:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["280px","110px"],align:"right",children:[{id:"src",type:"text",label:M.lang.common.url,required:true,validate:CKEDITOR.dialog.validate.notEmpty(M.lang.flash.validateSrc),setup:B,commit:A,onLoad:function(){var P=this.getDialog(),O=function(Q){J.setAttribute("src",Q);
P.preview.setHtml('<embed height="100%" width="100%" src="'+CKEDITOR.tools.htmlEncode(J.getAttribute("src"))+'" type="application/x-shockwave-flash"></embed>')
};
P.preview=P.getContentElement("info","preview").getElement().getChild(3);
this.on("change",function(Q){if(Q.data&&Q.data.value){O(Q.data.value)
}});
this.getInputElement().on("change",function(Q){O(this.getValue())
},this)
}},{type:"button",id:"browse",filebrowser:"info:src",hidden:true,style:"display:inline-block;margin-top:10px;",label:M.lang.common.browseServer}]}]},{type:"hbox",widths:["25%","25%","25%","25%","25%"],children:[{type:"text",id:"width",style:"width:95px",label:M.lang.common.width,validate:CKEDITOR.dialog.validate.htmlLength(M.lang.common.invalidHtmlLength.replace("%1",M.lang.common.width)),setup:B,commit:A},{type:"text",id:"height",style:"width:95px",label:M.lang.common.height,validate:CKEDITOR.dialog.validate.htmlLength(M.lang.common.invalidHtmlLength.replace("%1",M.lang.common.height)),setup:B,commit:A},{type:"text",id:"hSpace",style:"width:95px",label:M.lang.flash.hSpace,validate:CKEDITOR.dialog.validate.integer(M.lang.flash.validateHSpace),setup:B,commit:A},{type:"text",id:"vSpace",style:"width:95px",label:M.lang.flash.vSpace,validate:CKEDITOR.dialog.validate.integer(M.lang.flash.validateVSpace),setup:B,commit:A}]},{type:"vbox",children:[{type:"html",id:"preview",style:"width:95%;",html:N}]}]},{id:"Upload",hidden:true,filebrowser:"uploadButton",label:M.lang.common.upload,elements:[{type:"file",id:"upload",label:M.lang.common.upload,size:38},{type:"fileButton",id:"uploadButton",label:M.lang.common.uploadSubmit,filebrowser:"info:src","for":["Upload","upload"]}]},{id:"properties",label:M.lang.flash.propertiesTab,elements:[{type:"hbox",widths:["50%","50%"],children:[{id:"scale",type:"select",label:M.lang.flash.scale,"default":"",style:"width : 100%;",items:[[M.lang.common.notSet,""],[M.lang.flash.scaleAll,"showall"],[M.lang.flash.scaleNoBorder,"noborder"],[M.lang.flash.scaleFit,"exactfit"]],setup:B,commit:A},{id:"allowScriptAccess",type:"select",label:M.lang.flash.access,"default":"",style:"width : 100%;",items:[[M.lang.common.notSet,""],[M.lang.flash.accessAlways,"always"],[M.lang.flash.accessSameDomain,"samedomain"],[M.lang.flash.accessNever,"never"]],setup:B,commit:A}]},{type:"hbox",widths:["50%","50%"],children:[{id:"wmode",type:"select",label:M.lang.flash.windowMode,"default":"",style:"width : 100%;",items:[[M.lang.common.notSet,""],[M.lang.flash.windowModeWindow,"window"],[M.lang.flash.windowModeOpaque,"opaque"],[M.lang.flash.windowModeTransparent,"transparent"]],setup:B,commit:A},{id:"quality",type:"select",label:M.lang.flash.quality,"default":"high",style:"width : 100%;",items:[[M.lang.common.notSet,""],[M.lang.flash.qualityBest,"best"],[M.lang.flash.qualityHigh,"high"],[M.lang.flash.qualityAutoHigh,"autohigh"],[M.lang.flash.qualityMedium,"medium"],[M.lang.flash.qualityAutoLow,"autolow"],[M.lang.flash.qualityLow,"low"]],setup:B,commit:A}]},{type:"hbox",widths:["50%","50%"],children:[{id:"align",type:"select",label:M.lang.common.align,"default":"",style:"width : 100%;",items:[[M.lang.common.notSet,""],[M.lang.common.alignLeft,"left"],[M.lang.flash.alignAbsBottom,"absBottom"],[M.lang.flash.alignAbsMiddle,"absMiddle"],[M.lang.flash.alignBaseline,"baseline"],[M.lang.common.alignBottom,"bottom"],[M.lang.common.alignMiddle,"middle"],[M.lang.common.alignRight,"right"],[M.lang.flash.alignTextTop,"textTop"],[M.lang.common.alignTop,"top"]],setup:B,commit:function(T,S,R,Q,P){var O=this.getValue();
A.apply(this,arguments);
O&&(P.align=O)
}},{type:"html",html:"<div></div>"}]},{type:"fieldset",label:CKEDITOR.tools.htmlEncode(M.lang.flash.flashvars),children:[{type:"vbox",padding:0,children:[{type:"checkbox",id:"menu",label:M.lang.flash.chkMenu,"default":true,setup:B,commit:A},{type:"checkbox",id:"play",label:M.lang.flash.chkPlay,"default":true,setup:B,commit:A},{type:"checkbox",id:"loop",label:M.lang.flash.chkLoop,"default":true,setup:B,commit:A},{type:"checkbox",id:"allowFullScreen",label:M.lang.flash.chkFull,"default":true,setup:B,commit:A}]}]}]},{id:"advanced",label:M.lang.common.advancedTab,elements:[{type:"hbox",widths:["45%","55%"],children:[{type:"text",id:"id",label:M.lang.common.id,setup:B,commit:A},{type:"text",id:"title",label:M.lang.common.advisoryTitle,setup:B,commit:A}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",id:"bgcolor",label:M.lang.flash.bgcolor,setup:B,commit:A},{type:"text",id:"class",label:M.lang.common.cssClass,setup:B,commit:A}]},{type:"text",id:"style",validate:CKEDITOR.dialog.validate.inlineStyle(M.lang.common.invalidInlineStyle),label:M.lang.common.cssStyle,setup:B,commit:A}]}]}
})
})();