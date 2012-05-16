;
CKEDITOR.dialog.add("radio",function(A){return{title:A.lang.checkboxAndRadio.radioTitle,minWidth:350,minHeight:140,onShow:function(){delete this.radioButton;
var B=this.getParentEditor().getSelection().getSelectedElement();
if(B&&B.getName()=="input"&&B.getAttribute("type")=="radio"){this.radioButton=B;
this.setupContent(B)
}},onOk:function(){var D,C=this.radioButton,B=!C;
if(B){D=this.getParentEditor();
C=D.document.createElement("input");
C.setAttribute("type","radio")
}if(B){D.insertElement(C)
}this.commitContent({element:C})
},contents:[{id:"info",label:A.lang.checkboxAndRadio.radioTitle,title:A.lang.checkboxAndRadio.radioTitle,elements:[{id:"name",type:"text",label:A.lang.common.name,"default":"",accessKey:"N",setup:function(B){this.setValue(B.data("cke-saved-name")||B.getAttribute("name")||"")
},commit:function(C){var B=C.element;
if(this.getValue()){B.data("cke-saved-name",this.getValue())
}else{B.data("cke-saved-name",false);
B.removeAttribute("name")
}}},{id:"value",type:"text",label:A.lang.checkboxAndRadio.value,"default":"",accessKey:"V",setup:function(B){this.setValue(B.getAttribute("value")||"")
},commit:function(C){var B=C.element;
if(this.getValue()){B.setAttribute("value",this.getValue())
}else{B.removeAttribute("value")
}}},{id:"checked",type:"checkbox",label:A.lang.checkboxAndRadio.selected,"default":"",accessKey:"S",value:"checked",setup:function(B){this.setValue(B.getAttribute("checked"))
},commit:function(E){var D=E.element;
if(!(CKEDITOR.env.ie||CKEDITOR.env.opera)){if(this.getValue()){D.setAttribute("checked","checked")
}else{D.removeAttribute("checked")
}}else{var B=D.getAttribute("checked");
var F=!!this.getValue();
if(B!=F){var C=CKEDITOR.dom.element.createFromHtml('<input type="radio"'+(F?' checked="checked"':"")+"></input>",A.document);
D.copyAttributes(C,{type:1,checked:1});
C.replace(D);
A.getSelection().selectElement(C);
E.element=C
}}}}]}]}
});