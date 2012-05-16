(function(){var B={scrolling:{"true":"yes","false":"no"},frameborder:{"true":"1","false":"0"}};
function A(G){var D=this;
var F=D instanceof CKEDITOR.ui.dialog.checkbox;
if(G.hasAttribute(D.id)){var E=G.getAttribute(D.id);
if(F){D.setValue(B[D.id]["true"]==E.toLowerCase())
}else{D.setValue(E)
}}}function C(H){var D=this;
var G=D.getValue()==="",F=D instanceof CKEDITOR.ui.dialog.checkbox,E=D.getValue();
if(G){H.removeAttribute(D.att||D.id)
}else{if(F){H.setAttribute(D.id,B[D.id][E])
}else{H.setAttribute(D.att||D.id,E)
}}}CKEDITOR.dialog.add("iframe",function(G){var F=G.lang.iframe,E=G.lang.common,D=G.plugins.dialogadvtab;
return{title:F.title,minWidth:350,minHeight:260,onShow:function(){var H=this;
H.fakeImage=H.iframeNode=null;
var J=H.getSelectedElement();
if(J&&J.data("cke-real-element-type")&&J.data("cke-real-element-type")=="iframe"){H.fakeImage=J;
var I=G.restoreRealElement(J);
H.iframeNode=I;
H.setupContent(I)
}},onOk:function(){var H=this;
var L;
if(!H.fakeImage){L=new CKEDITOR.dom.element("iframe")
}else{L=H.iframeNode
}var K={},J={};
H.commitContent(L,K,J);
var I=G.createFakeElement(L,"cke_iframe","iframe",true);
I.setAttributes(J);
I.setStyles(K);
if(H.fakeImage){I.replace(H.fakeImage);
G.getSelection().selectElement(I)
}else{G.insertElement(I)
}},contents:[{id:"info",label:E.generalTab,accessKey:"I",elements:[{type:"vbox",padding:0,children:[{id:"src",type:"text",label:E.url,required:true,validate:CKEDITOR.dialog.validate.notEmpty(F.noUrl),setup:A,commit:C}]},{type:"hbox",children:[{id:"width",type:"text",style:"width:100%",labelLayout:"vertical",label:E.width,validate:CKEDITOR.dialog.validate.htmlLength(E.invalidHtmlLength.replace("%1",E.width)),setup:A,commit:C},{id:"height",type:"text",style:"width:100%",labelLayout:"vertical",label:E.height,validate:CKEDITOR.dialog.validate.htmlLength(E.invalidHtmlLength.replace("%1",E.height)),setup:A,commit:C},{id:"align",type:"select","default":"",items:[[E.notSet,""],[E.alignLeft,"left"],[E.alignRight,"right"],[E.alignTop,"top"],[E.alignMiddle,"middle"],[E.alignBottom,"bottom"]],style:"width:100%",labelLayout:"vertical",label:E.align,setup:function(J,I){A.apply(this,arguments);
if(I){var H=I.getAttribute("align");
this.setValue(H&&H.toLowerCase()||"")
}},commit:function(J,I,H){C.apply(this,arguments);
if(this.getValue()){H.align=this.getValue()
}}}]},{type:"hbox",widths:["50%","50%"],children:[{id:"scrolling",type:"checkbox",label:F.scrolling,setup:A,commit:C},{id:"frameborder",type:"checkbox",label:F.border,setup:A,commit:C}]},{type:"hbox",widths:["50%","50%"],children:[{id:"name",type:"text",label:E.name,setup:A,commit:C},{id:"title",type:"text",label:E.advisoryTitle,setup:A,commit:C}]},{id:"longdesc",type:"text",label:E.longDescr,setup:A,commit:C}]},D&&D.createAdvancedTab(G,{id:1,classes:1,styles:1})]}
})
})();