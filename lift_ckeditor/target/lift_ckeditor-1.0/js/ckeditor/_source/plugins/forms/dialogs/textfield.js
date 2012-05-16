;
CKEDITOR.dialog.add("textfield",function(B){var A={value:1,size:1,maxLength:1};
var C={text:1,password:1};
return{title:B.lang.textfield.title,minWidth:350,minHeight:150,onShow:function(){delete this.textField;
var D=this.getParentEditor().getSelection().getSelectedElement();
if(D&&D.getName()=="input"&&(C[D.getAttribute("type")]||!D.getAttribute("type"))){this.textField=D;
this.setupContent(D)
}},onOk:function(){var F,E=this.textField,D=!E;
if(D){F=this.getParentEditor();
E=F.document.createElement("input");
E.setAttribute("type","text")
}if(D){F.insertElement(E)
}this.commitContent({element:E})
},onLoad:function(){var E=function(F){var G=F.hasAttribute(this.id)&&F.getAttribute(this.id);
this.setValue(G||"")
};
var D=function(H){var F=H.element;
var G=this.getValue();
if(G){F.setAttribute(this.id,G)
}else{F.removeAttribute(this.id)
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
},commit:function(H){var F=H.element;
if(CKEDITOR.env.ie){var D=F.getAttribute("type");
var G=this.getValue();
if(D!=G){var E=CKEDITOR.dom.element.createFromHtml('<input type="'+G+'"></input>',B.document);
F.copyAttributes(E,{type:1});
E.replace(F);
B.getSelection().selectElement(E);
H.element=E
}}else{F.setAttribute("type",this.getValue())
}}}]}]}
});