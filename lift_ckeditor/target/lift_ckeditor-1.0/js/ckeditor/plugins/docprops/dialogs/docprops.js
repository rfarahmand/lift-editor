;
CKEDITOR.dialog.add("docProps",function(M){var L=M.lang.docprops,K=M.lang.common,J={};
function I(R,Q){var P=function(){O(this);
Q(this,this._.parentDialog)
},O=function(S){S.removeListener("ok",P);
S.removeListener("cancel",O)
},N=function(S){S.on("ok",P);
S.on("cancel",O)
};
M.execCommand(R);
if(M._.storedDialogs.colordialog){N(M._.storedDialogs.colordialog)
}else{CKEDITOR.on("dialogDefinition",function(T){if(T.data.name!=R){return 
}var S=T.data.definition;
T.removeListener();
S.onLoad=CKEDITOR.tools.override(S.onLoad,function(U){return function(){N(this);
S.onLoad=U;
if(typeof U=="function"){U.call(this)
}}
})
})
}}function H(){var O=this.getDialog(),N=O.getContentElement("general",this.id+"Other");
if(!N){return 
}if(this.getValue()=="other"){N.getInputElement().removeAttribute("readOnly");
N.focus();
N.getElement().removeClass("cke_disabled")
}else{N.getInputElement().setAttribute("readOnly",true);
N.getElement().addClass("cke_disabled")
}}function G(P,O,N){return function(V,U,T){var S=J,R=typeof N!="undefined"?N:this.getValue();
if(!R&&P in S){S[P].remove()
}else{if(R&&P in S){S[P].setAttribute("content",R)
}else{if(R){var Q=new CKEDITOR.dom.element("meta",M.document);
Q.setAttribute(O?"http-equiv":"name",P);
Q.setAttribute("content",R);
T.append(Q)
}}}}
}function F(O,N){return function(){var Q=J,P=O in Q?Q[O].getAttribute("content")||"":"";
if(N){return P
}this.setValue(P);
return null
}
}function E(N){return function(S,R,Q,P){P.removeAttribute("margin"+N);
var O=this.getValue();
if(O!==""){P.setStyle("margin-"+N,CKEDITOR.tools.cssLength(O))
}else{P.removeStyle("margin-"+N)
}}
}function D(S){var R={},Q=S.getElementsByTag("meta"),P=Q.count();
for(var O=0;
O<P;
O++){var N=Q.getItem(O);
R[N.getAttribute(N.hasAttribute("http-equiv")?"http-equiv":"name").toLowerCase()]=N
}return R
}function C(P,O,N){P.removeStyle(O);
if(P.getComputedStyle(O)!=N){P.setStyle(O,N)
}}var B=function(P,O,N){return{type:"hbox",padding:0,widths:["60%","40%"],children:[CKEDITOR.tools.extend({type:"text",id:P,label:L[O]},N||{},1),{type:"button",id:P+"Choose",label:L.chooseColor,className:"colorChooser",onClick:function(){var Q=this;
I("colordialog",function(S){var R=Q.getDialog();
R.getContentElement(R._.currentTabId,P).setValue(S.getContentElement("picker","selectedColor").getValue())
})
}}]}
},A="javascript:void((function(){"+encodeURIComponent("document.open();"+(CKEDITOR.env.isCustomDomain()?"document.domain='"+document.domain+"';":"")+'document.write( \'<html style="background-color: #ffffff; height: 100%"><head></head><body style="width: 100%; height: 100%; margin: 0px">'+L.previewHtml+"</body></html>' );document.close();")+"})())";
return{title:L.title,minHeight:330,minWidth:500,onShow:function(){var Q=M.document,P=Q.getElementsByTag("html").getItem(0),O=Q.getHead(),N=Q.getBody();
J=D(Q);
this.setupContent(Q,P,O,N)
},onHide:function(){J={}
},onOk:function(){var Q=M.document,P=Q.getElementsByTag("html").getItem(0),O=Q.getHead(),N=Q.getBody();
this.commitContent(Q,P,O,N)
},contents:[{id:"general",label:K.generalTab,elements:[{type:"text",id:"title",label:L.docTitle,setup:function(N){this.setValue(N.getElementsByTag("title").getItem(0).data("cke-title"))
},commit:function(R,Q,P,O,N){if(N){return 
}R.getElementsByTag("title").getItem(0).data("cke-title",this.getValue())
}},{type:"hbox",children:[{type:"select",id:"dir",label:K.langDir,style:"width: 100%",items:[[K.notSet,""],[K.langDirLtr,"ltr"],[K.langDirRtl,"rtl"]],setup:function(Q,P,O,N){this.setValue(N.getDirection()||"")
},commit:function(R,Q,P,O){var N=this.getValue();
if(N){O.setAttribute("dir",N)
}else{O.removeAttribute("dir")
}O.removeStyle("direction")
}},{type:"text",id:"langCode",label:K.langCode,setup:function(O,N){this.setValue(N.getAttribute("xml:lang")||N.getAttribute("lang")||"")
},commit:function(S,R,Q,P,O){if(O){return 
}var N=this.getValue();
if(N){R.setAttributes({"xml:lang":N,lang:N})
}else{R.removeAttributes({"xml:lang":1,lang:1})
}}}]},{type:"hbox",children:[{type:"select",id:"charset",label:L.charset,style:"width: 100%",items:[[K.notSet,""],[L.charsetASCII,"us-ascii"],[L.charsetCE,"iso-8859-2"],[L.charsetCT,"big5"],[L.charsetCR,"iso-8859-5"],[L.charsetGR,"iso-8859-7"],[L.charsetJP,"iso-2022-jp"],[L.charsetKR,"iso-2022-kr"],[L.charsetTR,"iso-8859-9"],[L.charsetUN,"utf-8"],[L.charsetWE,"iso-8859-1"],[L.other,"other"]],"default":"",onChange:function(){var N=this;
N.getDialog().selectedCharset=N.getValue()!="other"?N.getValue():"";
H.call(N)
},setup:function(){var N=this;
N.metaCharset="charset" in J;
var Q=F(N.metaCharset?"charset":"content-type",1,1),P=Q.call(N);
!N.metaCharset&&P.match(/charset=[^=]+$/)&&(P=P.substring(P.indexOf("=")+1));
if(P){N.setValue(P.toLowerCase());
if(!N.getValue()){N.setValue("other");
var O=N.getDialog().getContentElement("general","charsetOther");
O&&O.setValue(P)
}N.getDialog().selectedCharset=P
}H.call(N)
},commit:function(R,Q,P,O,N){var S=this;
if(N){return 
}var V=S.getValue(),U=S.getDialog().getContentElement("general","charsetOther");
V=="other"&&(V=U?U.getValue():"");
V&&!S.metaCharset&&(V=(J["content-type"]?J["content-type"].getAttribute("content").split(";")[0]:"text/html")+"; charset="+V);
var T=G(S.metaCharset?"charset":"content-type",1,V);
T.call(S,R,Q,P)
}},{type:"text",id:"charsetOther",label:L.charsetOther,onChange:function(){this.getDialog().selectedCharset=this.getValue()
}}]},{type:"hbox",children:[{type:"select",id:"docType",label:L.docType,style:"width: 100%",items:[[K.notSet,""],["XHTML 1.1",'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">'],["XHTML 1.0 Transitional",'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'],["XHTML 1.0 Strict",'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">'],["XHTML 1.0 Frameset",'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">'],["HTML 5","<!DOCTYPE html>"],["HTML 4.01 Transitional",'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">'],["HTML 4.01 Strict",'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">'],["HTML 4.01 Frameset",'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">'],["HTML 3.2",'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">'],["HTML 2.0",'<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML//EN">'],[L.other,"other"]],onChange:H,setup:function(){var N=this;
if(M.docType){N.setValue(M.docType);
if(!N.getValue()){N.setValue("other");
var O=N.getDialog().getContentElement("general","docTypeOther");
O&&O.setValue(M.docType)
}}H.call(N)
},commit:function(T,S,R,Q,P){if(P){return 
}var O=this.getValue(),N=this.getDialog().getContentElement("general","docTypeOther");
M.docType=O=="other"?N?N.getValue():"":O
}},{type:"text",id:"docTypeOther",label:L.docTypeOther}]},{type:"checkbox",id:"xhtmlDec",label:L.xhtmlDec,setup:function(){this.setValue(!!M.xmlDeclaration)
},commit:function(R,Q,P,O,N){if(N){return 
}if(this.getValue()){M.xmlDeclaration='<?xml version="1.0" encoding="'+(this.getDialog().selectedCharset||"utf-8")+'"?>';
Q.setAttribute("xmlns","http://www.w3.org/1999/xhtml")
}else{M.xmlDeclaration="";
Q.removeAttribute("xmlns")
}}}]},{id:"design",label:L.design,elements:[{type:"hbox",widths:["60%","40%"],children:[{type:"vbox",children:[B("txtColor","txtColor",{setup:function(Q,P,O,N){this.setValue(N.getComputedStyle("color"))
},commit:function(S,R,Q,P,O){if(this.isChanged()||O){P.removeAttribute("text");
var N=this.getValue();
if(N){P.setStyle("color",N)
}else{P.removeStyle("color")
}}}}),B("bgColor","bgColor",{setup:function(R,Q,P,O){var N=O.getComputedStyle("background-color")||"";
this.setValue(N=="transparent"?"":N)
},commit:function(S,R,Q,P,O){if(this.isChanged()||O){P.removeAttribute("bgcolor");
var N=this.getValue();
if(N){P.setStyle("background-color",N)
}else{C(P,"background-color","transparent")
}}}}),{type:"hbox",widths:["60%","40%"],padding:1,children:[{type:"text",id:"bgImage",label:L.bgImage,setup:function(R,Q,P,O){var N=O.getComputedStyle("background-image")||"";
if(N=="none"){N=""
}else{N=N.replace(/url\(\s*(["']?)\s*([^\)]*)\s*\1\s*\)/i,function(U,T,S){return S
})
}this.setValue(N)
},commit:function(R,Q,P,O){O.removeAttribute("background");
var N=this.getValue();
if(N){O.setStyle("background-image","url("+N+")")
}else{C(O,"background-image","none")
}}},{type:"button",id:"bgImageChoose",label:K.browseServer,style:"display:inline-block;margin-top:10px;",hidden:true,filebrowser:"design:bgImage"}]},{type:"checkbox",id:"bgFixed",label:L.bgFixed,setup:function(Q,P,O,N){this.setValue(N.getComputedStyle("background-attachment")=="fixed")
},commit:function(Q,P,O,N){if(this.getValue()){N.setStyle("background-attachment","fixed")
}else{C(N,"background-attachment","scroll")
}}}]},{type:"vbox",children:[{type:"html",id:"marginTitle",html:'<div style="text-align: center; margin: 0px auto; font-weight: bold">'+L.margin+"</div>"},{type:"text",id:"marginTop",label:L.marginTop,style:"width: 80px; text-align: center",align:"center",inputStyle:"text-align: center",setup:function(Q,P,O,N){this.setValue(N.getStyle("margin-top")||N.getAttribute("margintop")||"")
},commit:E("top")},{type:"hbox",children:[{type:"text",id:"marginLeft",label:L.marginLeft,style:"width: 80px; text-align: center",align:"center",inputStyle:"text-align: center",setup:function(Q,P,O,N){this.setValue(N.getStyle("margin-left")||N.getAttribute("marginleft")||"")
},commit:E("left")},{type:"text",id:"marginRight",label:L.marginRight,style:"width: 80px; text-align: center",align:"center",inputStyle:"text-align: center",setup:function(Q,P,O,N){this.setValue(N.getStyle("margin-right")||N.getAttribute("marginright")||"")
},commit:E("right")}]},{type:"text",id:"marginBottom",label:L.marginBottom,style:"width: 80px; text-align: center",align:"center",inputStyle:"text-align: center",setup:function(Q,P,O,N){this.setValue(N.getStyle("margin-bottom")||N.getAttribute("marginbottom")||"")
},commit:E("bottom")}]}]}]},{id:"meta",label:L.meta,elements:[{type:"textarea",id:"metaKeywords",label:L.metaKeywords,setup:F("keywords"),commit:G("keywords")},{type:"textarea",id:"metaDescription",label:L.metaDescription,setup:F("description"),commit:G("description")},{type:"text",id:"metaAuthor",label:L.metaAuthor,setup:F("author"),commit:G("author")},{type:"text",id:"metaCopyright",label:L.metaCopyright,setup:F("copyright"),commit:G("copyright")}]},{id:"preview",label:K.preview,elements:[{type:"html",id:"previewHtml",html:'<iframe src="'+A+'" style="width: 100%; height: 310px" hidefocus="true" frameborder="0" id="cke_docProps_preview_iframe"></iframe>',onLoad:function(){this.getDialog().on("selectPage",function(O){if(O.data.page=="preview"){var N=this;
setTimeout(function(){var S=CKEDITOR.document.getById("cke_docProps_preview_iframe").getFrameDocument(),R=S.getElementsByTag("html").getItem(0),Q=S.getHead(),P=S.getBody();
N.commitContent(S,R,Q,P,1)
},50)
}});
CKEDITOR.document.getById("cke_docProps_preview_iframe").getAscendant("table").setStyle("height","100%")
}}]}]}
});