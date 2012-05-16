(function(){var I=1,A=2,D=4;
var E={id:[{type:I,name:"id"}],classid:[{type:I,name:"classid"}],codebase:[{type:I,name:"codebase"}],pluginspage:[{type:D,name:"pluginspage"}],src:[{type:A,name:"movie"},{type:D,name:"src"},{type:I,name:"data"}],name:[{type:D,name:"name"}],align:[{type:I,name:"align"}],title:[{type:I,name:"title"},{type:D,name:"title"}],"class":[{type:I,name:"class"},{type:D,name:"class"}],width:[{type:I,name:"width"},{type:D,name:"width"}],height:[{type:I,name:"height"},{type:D,name:"height"}],hSpace:[{type:I,name:"hSpace"},{type:D,name:"hSpace"}],vSpace:[{type:I,name:"vSpace"},{type:D,name:"vSpace"}],style:[{type:I,name:"style"},{type:D,name:"style"}],type:[{type:D,name:"type"}]};
var H=["play","loop","menu","quality","scale","salign","wmode","bgcolor","base","flashvars","allowScriptAccess","allowFullScreen"];
for(var F=0;
F<H.length;
F++){E[H[F]]=[{type:D,name:H[F]},{type:A,name:H[F]}]
}H=["allowFullScreen","play","loop","menu"];
for(F=0;
F<H.length;
F++){E[H[F]][0]["default"]=E[H[F]][1]["default"]=true
}var B=CKEDITOR.tools.cssLength;
function G(M,K,P){var L=E[this.id];
if(!L){return 
}var O=(this instanceof CKEDITOR.ui.dialog.checkbox);
for(var N=0;
N<L.length;
N++){var J=L[N];
switch(J.type){case I:if(!M){continue
}if(M.getAttribute(J.name)!==null){var Q=M.getAttribute(J.name);
if(O){this.setValue(Q.toLowerCase()=="true")
}else{this.setValue(Q)
}return 
}else{if(O){this.setValue(!!J["default"])
}}break;
case A:if(!M){continue
}if(J.name in P){Q=P[J.name];
if(O){this.setValue(Q.toLowerCase()=="true")
}else{this.setValue(Q)
}return 
}else{if(O){this.setValue(!!J["default"])
}}break;
case D:if(!K){continue
}if(K.getAttribute(J.name)){Q=K.getAttribute(J.name);
if(O){this.setValue(Q.toLowerCase()=="true")
}else{this.setValue(Q)
}return 
}else{if(O){this.setValue(!!J["default"])
}}}}}function C(Q,K,R){var N=E[this.id];
if(!N){return 
}var J=(this.getValue()===""),M=(this instanceof CKEDITOR.ui.dialog.checkbox);
for(var O=0;
O<N.length;
O++){var P=N[O];
switch(P.type){case I:if(!Q||(P.name=="data"&&K&&!Q.hasAttribute("data"))){continue
}var S=this.getValue();
if(J||M&&S===P["default"]){Q.removeAttribute(P.name)
}else{Q.setAttribute(P.name,S)
}break;
case A:if(!Q){continue
}S=this.getValue();
if(J||M&&S===P["default"]){if(P.name in R){R[P.name].remove()
}}else{if(P.name in R){R[P.name].setAttribute("value",S)
}else{var L=CKEDITOR.dom.element.createFromHtml("<cke:param></cke:param>",Q.getDocument());
L.setAttributes({name:P.name,value:S});
if(Q.getChildCount()<1){L.appendTo(Q)
}else{L.insertBefore(Q.getFirst())
}}}break;
case D:if(!K){continue
}S=this.getValue();
if(J||M&&S===P["default"]){K.removeAttribute(P.name)
}else{K.setAttribute(P.name,S)
}}}}CKEDITOR.dialog.add("flash",function(M){var N=!M.config.flashEmbedTagOnly,J=M.config.flashAddEmbedTag||M.config.flashEmbedTagOnly;
var K,L="<div>"+CKEDITOR.tools.htmlEncode(M.lang.common.preview)+'<br><div id="cke_FlashPreviewLoader'+CKEDITOR.tools.getNextNumber()+'" style="display:none"><div class="loading">&nbsp;</div></div><div id="cke_FlashPreviewBox'+CKEDITOR.tools.getNextNumber()+'" class="FlashPreviewBox"></div></div>';
return{title:M.lang.flash.title,minWidth:420,minHeight:310,onShow:function(){this.fakeImage=this.objectNode=this.embedNode=null;
K=new CKEDITOR.dom.element("embed",M.document);
var X=this.getSelectedElement();
if(X&&X.data("cke-real-element-type")&&X.data("cke-real-element-type")=="flash"){this.fakeImage=X;
var R=M.restoreRealElement(X),U=null,Q=null,V={};
if(R.getName()=="cke:object"){U=R;
var T=U.getElementsByTag("embed","cke");
if(T.count()>0){Q=T.getItem(0)
}var Z=U.getElementsByTag("param","cke");
for(var S=0,P=Z.count();
S<P;
S++){var Y=Z.getItem(S),O=Y.getAttribute("name"),W=Y.getAttribute("value");
V[O]=W
}}else{if(R.getName()=="cke:embed"){Q=R
}}this.objectNode=U;
this.embedNode=Q;
this.setupContent(U,Q,V,X)
}},onOk:function(){var U=null,P=null,V=null;
if(!this.fakeImage){if(N){U=CKEDITOR.dom.element.createFromHtml("<cke:object></cke:object>",M.document);
var R={classid:"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",codebase:"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"};
U.setAttributes(R)
}if(J){P=CKEDITOR.dom.element.createFromHtml("<cke:embed></cke:embed>",M.document);
P.setAttributes({type:"application/x-shockwave-flash",pluginspage:"http://www.macromedia.com/go/getflashplayer"});
if(U){P.appendTo(U)
}}}else{U=this.objectNode;
P=this.embedNode
}if(U){V={};
var X=U.getElementsByTag("param","cke");
for(var S=0,O=X.count();
S<O;
S++){V[X.getItem(S).getAttribute("name")]=X.getItem(S)
}}var Q={},T={};
this.commitContent(U,P,V,Q,T);
var W=M.createFakeElement(U||P,"cke_flash","flash",true);
W.setAttributes(T);
W.setStyles(Q);
if(this.fakeImage){W.replace(this.fakeImage);
M.getSelection().selectElement(W)
}else{M.insertElement(W)
}},onHide:function(){if(this.preview){this.preview.setHtml("")
}},contents:[{id:"info",label:M.lang.common.generalTab,accessKey:"I",elements:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["280px","110px"],align:"right",children:[{id:"src",type:"text",label:M.lang.common.url,required:true,validate:CKEDITOR.dialog.validate.notEmpty(M.lang.flash.validateSrc),setup:G,commit:C,onLoad:function(){var O=this.getDialog(),P=function(Q){K.setAttribute("src",Q);
O.preview.setHtml('<embed height="100%" width="100%" src="'+CKEDITOR.tools.htmlEncode(K.getAttribute("src"))+'" type="application/x-shockwave-flash"></embed>')
};
O.preview=O.getContentElement("info","preview").getElement().getChild(3);
this.on("change",function(Q){if(Q.data&&Q.data.value){P(Q.data.value)
}});
this.getInputElement().on("change",function(Q){P(this.getValue())
},this)
}},{type:"button",id:"browse",filebrowser:"info:src",hidden:true,style:"display:inline-block;margin-top:10px;",label:M.lang.common.browseServer}]}]},{type:"hbox",widths:["25%","25%","25%","25%","25%"],children:[{type:"text",id:"width",style:"width:95px",label:M.lang.common.width,validate:CKEDITOR.dialog.validate.htmlLength(M.lang.common.invalidHtmlLength.replace("%1",M.lang.common.width)),setup:G,commit:C},{type:"text",id:"height",style:"width:95px",label:M.lang.common.height,validate:CKEDITOR.dialog.validate.htmlLength(M.lang.common.invalidHtmlLength.replace("%1",M.lang.common.height)),setup:G,commit:C},{type:"text",id:"hSpace",style:"width:95px",label:M.lang.flash.hSpace,validate:CKEDITOR.dialog.validate.integer(M.lang.flash.validateHSpace),setup:G,commit:C},{type:"text",id:"vSpace",style:"width:95px",label:M.lang.flash.vSpace,validate:CKEDITOR.dialog.validate.integer(M.lang.flash.validateVSpace),setup:G,commit:C}]},{type:"vbox",children:[{type:"html",id:"preview",style:"width:95%;",html:L}]}]},{id:"Upload",hidden:true,filebrowser:"uploadButton",label:M.lang.common.upload,elements:[{type:"file",id:"upload",label:M.lang.common.upload,size:38},{type:"fileButton",id:"uploadButton",label:M.lang.common.uploadSubmit,filebrowser:"info:src","for":["Upload","upload"]}]},{id:"properties",label:M.lang.flash.propertiesTab,elements:[{type:"hbox",widths:["50%","50%"],children:[{id:"scale",type:"select",label:M.lang.flash.scale,"default":"",style:"width : 100%;",items:[[M.lang.common.notSet,""],[M.lang.flash.scaleAll,"showall"],[M.lang.flash.scaleNoBorder,"noborder"],[M.lang.flash.scaleFit,"exactfit"]],setup:G,commit:C},{id:"allowScriptAccess",type:"select",label:M.lang.flash.access,"default":"",style:"width : 100%;",items:[[M.lang.common.notSet,""],[M.lang.flash.accessAlways,"always"],[M.lang.flash.accessSameDomain,"samedomain"],[M.lang.flash.accessNever,"never"]],setup:G,commit:C}]},{type:"hbox",widths:["50%","50%"],children:[{id:"wmode",type:"select",label:M.lang.flash.windowMode,"default":"",style:"width : 100%;",items:[[M.lang.common.notSet,""],[M.lang.flash.windowModeWindow,"window"],[M.lang.flash.windowModeOpaque,"opaque"],[M.lang.flash.windowModeTransparent,"transparent"]],setup:G,commit:C},{id:"quality",type:"select",label:M.lang.flash.quality,"default":"high",style:"width : 100%;",items:[[M.lang.common.notSet,""],[M.lang.flash.qualityBest,"best"],[M.lang.flash.qualityHigh,"high"],[M.lang.flash.qualityAutoHigh,"autohigh"],[M.lang.flash.qualityMedium,"medium"],[M.lang.flash.qualityAutoLow,"autolow"],[M.lang.flash.qualityLow,"low"]],setup:G,commit:C}]},{type:"hbox",widths:["50%","50%"],children:[{id:"align",type:"select",label:M.lang.common.align,"default":"",style:"width : 100%;",items:[[M.lang.common.notSet,""],[M.lang.common.alignLeft,"left"],[M.lang.flash.alignAbsBottom,"absBottom"],[M.lang.flash.alignAbsMiddle,"absMiddle"],[M.lang.flash.alignBaseline,"baseline"],[M.lang.common.alignBottom,"bottom"],[M.lang.common.alignMiddle,"middle"],[M.lang.common.alignRight,"right"],[M.lang.flash.alignTextTop,"textTop"],[M.lang.common.alignTop,"top"]],setup:G,commit:function(P,O,Q,T,R){var S=this.getValue();
C.apply(this,arguments);
S&&(R.align=S)
}},{type:"html",html:"<div></div>"}]},{type:"fieldset",label:CKEDITOR.tools.htmlEncode(M.lang.flash.flashvars),children:[{type:"vbox",padding:0,children:[{type:"checkbox",id:"menu",label:M.lang.flash.chkMenu,"default":true,setup:G,commit:C},{type:"checkbox",id:"play",label:M.lang.flash.chkPlay,"default":true,setup:G,commit:C},{type:"checkbox",id:"loop",label:M.lang.flash.chkLoop,"default":true,setup:G,commit:C},{type:"checkbox",id:"allowFullScreen",label:M.lang.flash.chkFull,"default":true,setup:G,commit:C}]}]}]},{id:"advanced",label:M.lang.common.advancedTab,elements:[{type:"hbox",widths:["45%","55%"],children:[{type:"text",id:"id",label:M.lang.common.id,setup:G,commit:C},{type:"text",id:"title",label:M.lang.common.advisoryTitle,setup:G,commit:C}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",id:"bgcolor",label:M.lang.flash.bgcolor,setup:G,commit:C},{type:"text",id:"class",label:M.lang.common.cssClass,setup:G,commit:C}]},{type:"text",id:"style",validate:CKEDITOR.dialog.validate.inlineStyle(M.lang.common.invalidInlineStyle),label:M.lang.common.cssStyle,setup:G,commit:C}]}]}
})
})();