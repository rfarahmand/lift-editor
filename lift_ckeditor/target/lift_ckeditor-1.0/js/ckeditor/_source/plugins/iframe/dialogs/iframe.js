(function(){var A={scrolling:{"true":"yes","false":"no"},frameborder:{"true":"1","false":"0"}};
function C(D){var E=this instanceof CKEDITOR.ui.dialog.checkbox;
if(D.hasAttribute(this.id)){var F=D.getAttribute(this.id);
if(E){this.setValue(A[this.id]["true"]==F.toLowerCase())
}else{this.setValue(F)
}}}function B(D){var G=this.getValue()==="",E=this instanceof CKEDITOR.ui.dialog.checkbox,F=this.getValue();
if(G){D.removeAttribute(this.att||this.id)
}else{if(E){D.setAttribute(this.id,A[this.id][F])
}else{D.setAttribute(this.att||this.id,F)
}}}CKEDITOR.dialog.add("iframe",function(F){var E=F.lang.iframe,D=F.lang.common,G=F.plugins.dialogadvtab;
return{title:E.title,minWidth:350,minHeight:260,onShow:function(){this.fakeImage=this.iframeNode=null;
var I=this.getSelectedElement();
if(I&&I.data("cke-real-element-type")&&I.data("cke-real-element-type")=="iframe"){this.fakeImage=I;
var H=F.restoreRealElement(I);
this.iframeNode=H;
this.setupContent(H)
}},onOk:function(){var H;
if(!this.fakeImage){H=new CKEDITOR.dom.element("iframe")
}else{H=this.iframeNode
}var K={},I={};
this.commitContent(H,K,I);
var J=F.createFakeElement(H,"cke_iframe","iframe",true);
J.setAttributes(I);
J.setStyles(K);
if(this.fakeImage){J.replace(this.fakeImage);
F.getSelection().selectElement(J)
}else{F.insertElement(J)
}},contents:[{id:"info",label:D.generalTab,accessKey:"I",elements:[{type:"vbox",padding:0,children:[{id:"src",type:"text",label:D.url,required:true,validate:CKEDITOR.dialog.validate.notEmpty(E.noUrl),setup:C,commit:B}]},{type:"hbox",children:[{id:"width",type:"text",style:"width:100%",labelLayout:"vertical",label:D.width,validate:CKEDITOR.dialog.validate.htmlLength(D.invalidHtmlLength.replace("%1",D.width)),setup:C,commit:B},{id:"height",type:"text",style:"width:100%",labelLayout:"vertical",label:D.height,validate:CKEDITOR.dialog.validate.htmlLength(D.invalidHtmlLength.replace("%1",D.height)),setup:C,commit:B},{id:"align",type:"select","default":"",items:[[D.notSet,""],[D.alignLeft,"left"],[D.alignRight,"right"],[D.alignTop,"top"],[D.alignMiddle,"middle"],[D.alignBottom,"bottom"]],style:"width:100%",labelLayout:"vertical",label:D.align,setup:function(I,H){C.apply(this,arguments);
if(H){var J=H.getAttribute("align");
this.setValue(J&&J.toLowerCase()||"")
}},commit:function(H,J,I){B.apply(this,arguments);
if(this.getValue()){I.align=this.getValue()
}}}]},{type:"hbox",widths:["50%","50%"],children:[{id:"scrolling",type:"checkbox",label:E.scrolling,setup:C,commit:B},{id:"frameborder",type:"checkbox",label:E.border,setup:C,commit:B}]},{type:"hbox",widths:["50%","50%"],children:[{id:"name",type:"text",label:D.name,setup:C,commit:B},{id:"title",type:"text",label:D.advisoryTitle,setup:C,commit:B}]},{id:"longdesc",type:"text",label:D.longDescr,setup:C,commit:B}]},G&&G.createAdvancedTab(F,{id:1,classes:1,styles:1})]}
})
})();