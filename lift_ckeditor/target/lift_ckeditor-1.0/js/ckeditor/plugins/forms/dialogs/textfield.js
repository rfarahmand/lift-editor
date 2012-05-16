;
CKEDITOR.dialog.add("textfield",function(B){var A={value:1,size:1,maxLength:1},C={text:1,password:1};
return{title:B.lang.textfield.title,minWidth:350,minHeight:150,onShow:function(){var D=this;
delete D.textField;
var E=D.getParentEditor().getSelection().getSelectedElement();
if(E&&E.getName()=="input"&&(C[E.getAttribute("type")]||!E.getAttribute("type"))){D.textField=E;
D.setupContent(E)
}},onOk:function(){var F,E=this.textField,D=!E;
if(D){F=this.getParentEditor();
E=F.document.createElement("input");
E.setAttribute("type","text")
}if(D){F.insertElement(E)
}this.commitContent({element:E})
},onLoad:function(){var E=function(G){var F=G.hasAttribute(this.id)&&G.getAttribute(this.id);
this.setValue(F||"")
},D=function(H){var G=H.element,F=this.getValue();
if(F){G.setAttribute(this.id,F)
}else{G.removeAttribute(this.id)
}};
this.foreach(function(F){if(A[F.id]){F.setup=E;
F.commit=D
}})
},contents:[{id:"info",label:B.lang.textfield.title,title:B.lang.textfield.title,elements:[{type:"hbox",widths:["50%","50%"],children:[{id:"_cke_saved_name",type:"text",label:B.lang.textfield.name,"default":"",accessKey:"N",setup:function(D){this.setValue(D.data("cke-saved-name")||D.getAttribute("name")||"")
},commit:function(E){var D=E.element;
if(this.getValue()){D.data("cke-saved-name",this.getValue())
}else{D.data("cke-saved-name",false);
D.removeAttribute("name")
}}},{id:"value",type:"text",label:B.lang.textfield.value,"default":"",accessKey:"V"}]},{type:"hbox",widths:["50%","50%"],children:[{id:"size",type:"text",label:B.lang.textfield.charWidth,"default":"",accessKey:"C",style:"width:50px",validate:CKEDITOR.dialog.validate.integer(B.lang.common.validateNumberFailed)},{id:"maxLength",type:"text",label:B.lang.textfield.maxChars,"default":"",accessKey:"M",style:"width:50px",validate:CKEDITOR.dialog.validate.integer(B.lang.common.validateNumberFailed)}],onLoad:function(){if(CKEDITOR.env.ie7Compat){this.getElement().setStyle("zoom","100%")
}}},{id:"type",type:"select",label:B.lang.textfield.type,"default":"text",accessKey:"M",items:[[B.lang.textfield.typeText,"text"],[B.lang.textfield.typePass,"password"]],setup:function(D){this.setValue(D.getAttribute("type"))
},commit:function(H){var G=H.element;
if(CKEDITOR.env.ie){var F=G.getAttribute("type"),E=this.getValue();
if(F!=E){var D=CKEDITOR.dom.element.createFromHtml('<input type="'+E+'"></input>',B.document);
G.copyAttributes(D,{type:1});
D.replace(G);
B.getSelection().selectElement(D);
H.element=D
}}else{G.setAttribute("type",this.getValue())
}}}]}]}
});