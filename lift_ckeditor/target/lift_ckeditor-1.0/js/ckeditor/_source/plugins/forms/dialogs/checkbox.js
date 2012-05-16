;
CKEDITOR.dialog.add("checkbox",function(A){return{title:A.lang.checkboxAndRadio.checkboxTitle,minWidth:350,minHeight:140,onShow:function(){delete this.checkbox;
var B=this.getParentEditor().getSelection().getSelectedElement();
if(B&&B.getAttribute("type")=="checkbox"){this.checkbox=B;
this.setupContent(B)
}},onOk:function(){var D,C=this.checkbox,B=!C;
if(B){D=this.getParentEditor();
C=D.document.createElement("input");
C.setAttribute("type","checkbox");
D.insertElement(C)
}this.commitContent({element:C})
},contents:[{id:"info",label:A.lang.checkboxAndRadio.checkboxTitle,title:A.lang.checkboxAndRadio.checkboxTitle,startupFocus:"txtName",elements:[{id:"txtName",type:"text",label:A.lang.common.name,"default":"",accessKey:"N",setup:function(B){this.setValue(B.data("cke-saved-name")||B.getAttribute("name")||"")
},commit:function(C){var B=C.element;
if(this.getValue()){B.data("cke-saved-name",this.getValue())
}else{B.data("cke-saved-name",false);
B.removeAttribute("name")
}}},{id:"txtValue",type:"text",label:A.lang.checkboxAndRadio.value,"default":"",accessKey:"V",setup:function(B){var C=B.getAttribute("value");
this.setValue(CKEDITOR.env.ie&&C=="on"?"":C)
},commit:function(E){var B=E.element,D=this.getValue();
if(D&&!(CKEDITOR.env.ie&&D=="on")){B.setAttribute("value",D)
}else{if(CKEDITOR.env.ie){var C=new CKEDITOR.dom.element("input",B.getDocument());
B.copyAttributes(C,{value:1});
C.replace(B);
A.getSelection().selectElement(C);
E.element=C
}else{B.removeAttribute("value")
}}}},{id:"cmbSelected",type:"checkbox",label:A.lang.checkboxAndRadio.selected,"default":"",accessKey:"S",value:"checked",setup:function(B){this.setValue(B.getAttribute("checked"))
},commit:function(F){var D=F.element;
if(CKEDITOR.env.ie){var B=!!D.getAttribute("checked"),G=!!this.getValue();
if(B!=G){var C=CKEDITOR.dom.element.createFromHtml('<input type="checkbox"'+(G?' checked="checked"':"")+"/>",A.document);
D.copyAttributes(C,{type:1,checked:1});
C.replace(D);
A.getSelection().selectElement(C);
F.element=C
}}else{var E=this.getValue();
if(E){D.setAttribute("checked","checked")
}else{D.removeAttribute("checked")
}}}}]}]}
});