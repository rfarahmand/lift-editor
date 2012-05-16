;
CKEDITOR.dialog.add("docProps",function(J){var D=J.lang.docprops,H=J.lang.common,C={};
function L(Q,R){var P=function(){N(this);
R(this,this._.parentDialog)
};
var N=function(S){S.removeListener("ok",P);
S.removeListener("cancel",N)
};
var O=function(S){S.on("ok",P);
S.on("cancel",N)
};
J.execCommand(Q);
if(J._.storedDialogs.colordialog){O(J._.storedDialogs.colordialog)
}else{CKEDITOR.on("dialogDefinition",function(T){if(T.data.name!=Q){return 
}var S=T.data.definition;
T.removeListener();
S.onLoad=CKEDITOR.tools.override(S.onLoad,function(U){return function(){O(this);
S.onLoad=U;
if(typeof U=="function"){U.call(this)
}}
})
})
}}function E(){var O=this.getDialog(),N=O.getContentElement("general",this.id+"Other");
if(!N){return 
}if(this.getValue()=="other"){N.getInputElement().removeAttribute("readOnly");
N.focus();
N.getElement().removeClass("cke_disabled")
}else{N.getInputElement().setAttribute("readOnly",true);
N.getElement().addClass("cke_disabled")
}}function K(N,O,P){return function(U,R,Q){var T=C,V=typeof P!="undefined"?P:this.getValue();
if(!V&&(N in T)){T[N].remove()
}else{if(V&&(N in T)){T[N].setAttribute("content",V)
}else{if(V){var S=new CKEDITOR.dom.element("meta",J.document);
S.setAttribute(O?"http-equiv":"name",N);
S.setAttribute("content",V);
Q.append(S)
}}}}
}function M(O,N){return function(){var Q=C,P=(O in Q)?Q[O].getAttribute("content")||"":"";
if(N){return P
}this.setValue(P);
return null
}
}function B(N){return function(R,Q,P,O){O.removeAttribute("margin"+N);
var S=this.getValue();
if(S!==""){O.setStyle("margin-"+N,CKEDITOR.tools.cssLength(S))
}else{O.removeStyle("margin-"+N)
}}
}function G(R){var Q={},S=R.getElementsByTag("meta"),O=S.count();
for(var N=0;
N<O;
N++){var P=S.getItem(N);
Q[P.getAttribute(P.hasAttribute("http-equiv")?"http-equiv":"name").toLowerCase()]=P
}return Q
}function F(N,P,O){N.removeStyle(P);
if(N.getComputedStyle(P)!=O){N.setStyle(P,O)
}}var A=function(P,N,O){return{type:"hbox",padding:0,widths:["60%","40%"],children:[CKEDITOR.tools.extend({type:"text",id:P,label:D[N]},O||{},1),{type:"button",id:P+"Choose",label:D.chooseColor,className:"colorChooser",onClick:function(){var Q=this;
L("colordialog",function(R){var S=Q.getDialog();
S.getContentElement(S._.currentTabId,P).setValue(R.getContentElement("picker","selectedColor").getValue())
})
}}]}
};
var I="javascript:void((function(){"+encodeURIComponent("document.open();"+(CKEDITOR.env.isCustomDomain()?"document.domain='"+document.domain+"';":"")+'document.write( \'<html style="background-color: #ffffff; height: 100%"><head></head><body style="width: 100%; height: 100%; margin: 0px">'+D.previewHtml+"</body></html>' );document.close();")+"})())";
return{title:D.title,minHeight:330,minWidth:500,onShow:function(){var Q=J.document,P=Q.getElementsByTag("html").getItem(0),O=Q.getHead(),N=Q.getBody();
C=G(Q);
this.setupContent(Q,P,O,N)
},onHide:function(){C={}
},onOk:function(){var Q=J.document,P=Q.getElementsByTag("html").getItem(0),O=Q.getHead(),N=Q.getBody();
this.commitContent(Q,P,O,N)
},contents:[{id:"general",label:H.generalTab,elements:[{type:"text",id:"title",label:D.docTitle,setup:function(N){this.setValue(N.getElementsByTag("title").getItem(0).data("cke-title"))
},commit:function(R,Q,P,N,O){if(O){return 
}R.getElementsByTag("title").getItem(0).data("cke-title",this.getValue())
}},{type:"hbox",children:[{type:"select",id:"dir",label:H.langDir,style:"width: 100%",items:[[H.notSet,""],[H.langDirLtr,"ltr"],[H.langDirRtl,"rtl"]],setup:function(Q,P,O,N){this.setValue(N.getDirection()||"")
},commit:function(Q,P,O,N){var R=this.getValue();
if(R){N.setAttribute("dir",R)
}else{N.removeAttribute("dir")
}N.removeStyle("direction")
}},{type:"text",id:"langCode",label:H.langCode,setup:function(O,N){this.setValue(N.getAttribute("xml:lang")||N.getAttribute("lang")||"")
},commit:function(R,Q,P,N,O){if(O){return 
}var S=this.getValue();
if(S){Q.setAttributes({"xml:lang":S,lang:S})
}else{Q.removeAttributes({"xml:lang":1,lang:1})
}}}]},{type:"hbox",children:[{type:"select",id:"charset",label:D.charset,style:"width: 100%",items:[[H.notSet,""],[D.charsetASCII,"us-ascii"],[D.charsetCE,"iso-8859-2"],[D.charsetCT,"big5"],[D.charsetCR,"iso-8859-5"],[D.charsetGR,"iso-8859-7"],[D.charsetJP,"iso-2022-jp"],[D.charsetKR,"iso-2022-kr"],[D.charsetTR,"iso-8859-9"],[D.charsetUN,"utf-8"],[D.charsetWE,"iso-8859-1"],[D.other,"other"]],"default":"",onChange:function(){this.getDialog().selectedCharset=this.getValue()!="other"?this.getValue():"";
E.call(this)
},setup:function(){this.metaCharset=("charset" in C);
var O=M(this.metaCharset?"charset":"content-type",1,1),P=O.call(this);
!this.metaCharset&&P.match(/charset=[^=]+$/)&&(P=P.substring(P.indexOf("=")+1));
if(P){this.setValue(P.toLowerCase());
if(!this.getValue()){this.setValue("other");
var N=this.getDialog().getContentElement("general","charsetOther");
N&&N.setValue(P)
}this.getDialog().selectedCharset=P
}E.call(this)
},commit:function(U,R,Q,O,P){if(P){return 
}var T=this.getValue(),N=this.getDialog().getContentElement("general","charsetOther");
T=="other"&&(T=N?N.getValue():"");
T&&!this.metaCharset&&(T=(C["content-type"]?C["content-type"].getAttribute("content").split(";")[0]:"text/html")+"; charset="+T);
var S=K(this.metaCharset?"charset":"content-type",1,T);
S.call(this,U,R,Q)
}},{type:"text",id:"charsetOther",label:D.charsetOther,onChange:function(){this.getDialog().selectedCharset=this.getValue()
}}]},{type:"hbox",children:[{type:"select",id:"docType",label:D.docType,style:"width: 100%",items:[[H.notSet,""],["XHTML 1.1",'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">'],["XHTML 1.0 Transitional",'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'],["XHTML 1.0 Strict",'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">'],["XHTML 1.0 Frameset",'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">'],["HTML 5","<!DOCTYPE html>"],["HTML 4.01 Transitional",'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">'],["HTML 4.01 Strict",'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">'],["HTML 4.01 Frameset",'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">'],["HTML 3.2",'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">'],["HTML 2.0",'<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML//EN">'],[D.other,"other"]],onChange:E,setup:function(){if(J.docType){this.setValue(J.docType);
if(!this.getValue()){this.setValue("other");
var N=this.getDialog().getContentElement("general","docTypeOther");
N&&N.setValue(J.docType)
}}E.call(this)
},commit:function(T,R,Q,O,P){if(P){return 
}var S=this.getValue(),N=this.getDialog().getContentElement("general","docTypeOther");
J.docType=S=="other"?(N?N.getValue():""):S
}},{type:"text",id:"docTypeOther",label:D.docTypeOther}]},{type:"checkbox",id:"xhtmlDec",label:D.xhtmlDec,setup:function(){this.setValue(!!J.xmlDeclaration)
},commit:function(R,Q,P,N,O){if(O){return 
}if(this.getValue()){J.xmlDeclaration='<?xml version="1.0" encoding="'+(this.getDialog().selectedCharset||"utf-8")+'"?>';
Q.setAttribute("xmlns","http://www.w3.org/1999/xhtml")
}else{J.xmlDeclaration="";
Q.removeAttribute("xmlns")
}}}]},{id:"design",label:D.design,elements:[{type:"hbox",widths:["60%","40%"],children:[{type:"vbox",children:[A("txtColor","txtColor",{setup:function(Q,P,O,N){this.setValue(N.getComputedStyle("color"))
},commit:function(R,Q,P,N,O){if(this.isChanged()||O){N.removeAttribute("text");
var S=this.getValue();
if(S){N.setStyle("color",S)
}else{N.removeStyle("color")
}}}}),A("bgColor","bgColor",{setup:function(Q,P,O,N){var R=N.getComputedStyle("background-color")||"";
this.setValue(R=="transparent"?"":R)
},commit:function(R,Q,P,N,O){if(this.isChanged()||O){N.removeAttribute("bgcolor");
var S=this.getValue();
if(S){N.setStyle("background-color",S)
}else{F(N,"background-color","transparent")
}}}}),{type:"hbox",widths:["60%","40%"],padding:1,children:[{type:"text",id:"bgImage",label:D.bgImage,setup:function(Q,P,O,N){var R=N.getComputedStyle("background-image")||"";
if(R=="none"){R=""
}else{R=R.replace(/url\(\s*(["']?)\s*([^\)]*)\s*\1\s*\)/i,function(U,S,T){return T
})
}this.setValue(R)
},commit:function(Q,P,O,N){N.removeAttribute("background");
var R=this.getValue();
if(R){N.setStyle("background-image","url("+R+")")
}else{F(N,"background-image","none")
}}},{type:"button",id:"bgImageChoose",label:H.browseServer,style:"display:inline-block;margin-top:10px;",hidden:true,filebrowser:"design:bgImage"}]},{type:"checkbox",id:"bgFixed",label:D.bgFixed,setup:function(Q,P,O,N){this.setValue(N.getComputedStyle("background-attachment")=="fixed")
},commit:function(Q,P,O,N){if(this.getValue()){N.setStyle("background-attachment","fixed")
}else{F(N,"background-attachment","scroll")
}}}]},{type:"vbox",children:[{type:"html",id:"marginTitle",html:'<div style="text-align: center; margin: 0px auto; font-weight: bold">'+D.margin+"</div>"},{type:"text",id:"marginTop",label:D.marginTop,style:"width: 80px; text-align: center",align:"center",inputStyle:"text-align: center",setup:function(Q,P,O,N){this.setValue(N.getStyle("margin-top")||N.getAttribute("margintop")||"")
},commit:B("top")},{type:"hbox",children:[{type:"text",id:"marginLeft",label:D.marginLeft,style:"width: 80px; text-align: center",align:"center",inputStyle:"text-align: center",setup:function(Q,P,O,N){this.setValue(N.getStyle("margin-left")||N.getAttribute("marginleft")||"")
},commit:B("left")},{type:"text",id:"marginRight",label:D.marginRight,style:"width: 80px; text-align: center",align:"center",inputStyle:"text-align: center",setup:function(Q,P,O,N){this.setValue(N.getStyle("margin-right")||N.getAttribute("marginright")||"")
},commit:B("right")}]},{type:"text",id:"marginBottom",label:D.marginBottom,style:"width: 80px; text-align: center",align:"center",inputStyle:"text-align: center",setup:function(Q,P,O,N){this.setValue(N.getStyle("margin-bottom")||N.getAttribute("marginbottom")||"")
},commit:B("bottom")}]}]}]},{id:"meta",label:D.meta,elements:[{type:"textarea",id:"metaKeywords",label:D.metaKeywords,setup:M("keywords"),commit:K("keywords")},{type:"textarea",id:"metaDescription",label:D.metaDescription,setup:M("description"),commit:K("description")},{type:"text",id:"metaAuthor",label:D.metaAuthor,setup:M("author"),commit:K("author")},{type:"text",id:"metaCopyright",label:D.metaCopyright,setup:M("copyright"),commit:K("copyright")}]},{id:"preview",label:H.preview,elements:[{type:"html",id:"previewHtml",html:'<iframe src="'+I+'" style="width: 100%; height: 310px" hidefocus="true" frameborder="0" id="cke_docProps_preview_iframe"></iframe>',onLoad:function(){this.getDialog().on("selectPage",function(O){if(O.data.page=="preview"){var N=this;
setTimeout(function(){var S=CKEDITOR.document.getById("cke_docProps_preview_iframe").getFrameDocument(),R=S.getElementsByTag("html").getItem(0),Q=S.getHead(),P=S.getBody();
N.commitContent(S,R,Q,P,1)
},50)
}});
CKEDITOR.document.getById("cke_docProps_preview_iframe").getAscendant("table").setStyle("height","100%")
}}]}]}
});