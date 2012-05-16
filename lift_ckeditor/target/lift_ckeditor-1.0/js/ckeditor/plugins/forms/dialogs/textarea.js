;
CKEDITOR.dialog.add("textarea",function(A){return{title:A.lang.textarea.title,minWidth:350,minHeight:220,onShow:function(){var C=this;
delete C.textarea;
var B=C.getParentEditor().getSelection().getSelectedElement();
if(B&&B.getName()=="textarea"){C.textarea=B;
C.setupContent(B)
}},onOk:function(){var B,D=this.textarea,C=!D;
if(C){B=this.getParentEditor();
D=B.document.createElement("textarea")
}this.commitContent(D);
if(C){B.insertElement(D)
}},contents:[{id:"info",label:A.lang.textarea.title,title:A.lang.textarea.title,elements:[{id:"_cke_saved_name",type:"text",label:A.lang.common.name,"default":"",accessKey:"N",setup:function(B){this.setValue(B.data("cke-saved-name")||B.getAttribute("name")||"")
},commit:function(B){if(this.getValue()){B.data("cke-saved-name",this.getValue())
}else{B.data("cke-saved-name",false);
B.removeAttribute("name")
}}},{type:"hbox",widths:["50%","50%"],children:[{id:"cols",type:"text",label:A.lang.textarea.cols,"default":"",accessKey:"C",style:"width:50px",validate:CKEDITOR.dialog.validate.integer(A.lang.common.validateNumberFailed),setup:function(B){var C=B.hasAttribute("cols")&&B.getAttribute("cols");
this.setValue(C||"")
},commit:function(B){if(this.getValue()){B.setAttribute("cols",this.getValue())
}else{B.removeAttribute("cols")
}}},{id:"rows",type:"text",label:A.lang.textarea.rows,"default":"",accessKey:"R",style:"width:50px",validate:CKEDITOR.dialog.validate.integer(A.lang.common.validateNumberFailed),setup:function(B){var C=B.hasAttribute("rows")&&B.getAttribute("rows");
this.setValue(C||"")
},commit:function(B){if(this.getValue()){B.setAttribute("rows",this.getValue())
}else{B.removeAttribute("rows")
}}}]},{id:"value",type:"textarea",label:A.lang.textfield.value,"default":"",setup:function(B){this.setValue(B.$.defaultValue)
},commit:function(B){B.$.value=B.$.defaultValue=this.getValue()
}}]}]}
});