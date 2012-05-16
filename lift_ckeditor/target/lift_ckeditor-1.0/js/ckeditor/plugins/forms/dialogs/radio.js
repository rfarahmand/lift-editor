;
CKEDITOR.dialog.add("radio",function(A){return{title:A.lang.checkboxAndRadio.radioTitle,minWidth:350,minHeight:140,onShow:function(){var C=this;
delete C.radioButton;
var B=C.getParentEditor().getSelection().getSelectedElement();
if(B&&B.getName()=="input"&&B.getAttribute("type")=="radio"){C.radioButton=B;
C.setupContent(B)
}},onOk:function(){var B,D=this.radioButton,C=!D;
if(C){B=this.getParentEditor();
D=B.document.createElement("input");
D.setAttribute("type","radio")
}if(C){B.insertElement(D)
}this.commitContent({element:D})
},contents:[{id:"info",label:A.lang.checkboxAndRadio.radioTitle,title:A.lang.checkboxAndRadio.radioTitle,elements:[{id:"name",type:"text",label:A.lang.common.name,"default":"",accessKey:"N",setup:function(B){this.setValue(B.data("cke-saved-name")||B.getAttribute("name")||"")
},commit:function(B){var C=B.element;
if(this.getValue()){C.data("cke-saved-name",this.getValue())
}else{C.data("cke-saved-name",false);
C.removeAttribute("name")
}}},{id:"value",type:"text",label:A.lang.checkboxAndRadio.value,"default":"",accessKey:"V",setup:function(B){this.setValue(B.getAttribute("value")||"")
},commit:function(B){var C=B.element;
if(this.getValue()){C.setAttribute("value",this.getValue())
}else{C.removeAttribute("value")
}}},{id:"checked",type:"checkbox",label:A.lang.checkboxAndRadio.selected,"default":"",accessKey:"S",value:"checked",setup:function(B){this.setValue(B.getAttribute("checked"))
},commit:function(B){var F=B.element;
if(!(CKEDITOR.env.ie||CKEDITOR.env.opera)){if(this.getValue()){F.setAttribute("checked","checked")
}else{F.removeAttribute("checked")
}}else{var E=F.getAttribute("checked"),D=!!this.getValue();
if(E!=D){var C=CKEDITOR.dom.element.createFromHtml('<input type="radio"'+(D?' checked="checked"':"")+"></input>",A.document);
F.copyAttributes(C,{type:1,checked:1});
C.replace(F);
A.getSelection().selectElement(C);
B.element=C
}}}}]}]}
});