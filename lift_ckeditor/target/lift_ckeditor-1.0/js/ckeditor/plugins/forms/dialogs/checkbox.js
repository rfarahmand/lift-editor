;
CKEDITOR.dialog.add("checkbox",function(A){return{title:A.lang.checkboxAndRadio.checkboxTitle,minWidth:350,minHeight:140,onShow:function(){var C=this;
delete C.checkbox;
var B=C.getParentEditor().getSelection().getSelectedElement();
if(B&&B.getAttribute("type")=="checkbox"){C.checkbox=B;
C.setupContent(B)
}},onOk:function(){var B,D=this.checkbox,C=!D;
if(C){B=this.getParentEditor();
D=B.document.createElement("input");
D.setAttribute("type","checkbox");
B.insertElement(D)
}this.commitContent({element:D})
},contents:[{id:"info",label:A.lang.checkboxAndRadio.checkboxTitle,title:A.lang.checkboxAndRadio.checkboxTitle,startupFocus:"txtName",elements:[{id:"txtName",type:"text",label:A.lang.common.name,"default":"",accessKey:"N",setup:function(B){this.setValue(B.data("cke-saved-name")||B.getAttribute("name")||"")
},commit:function(B){var C=B.element;
if(this.getValue()){C.data("cke-saved-name",this.getValue())
}else{C.data("cke-saved-name",false);
C.removeAttribute("name")
}}},{id:"txtValue",type:"text",label:A.lang.checkboxAndRadio.value,"default":"",accessKey:"V",setup:function(B){var C=B.getAttribute("value");
this.setValue(CKEDITOR.env.ie&&C=="on"?"":C)
},commit:function(B){var E=B.element,D=this.getValue();
if(D&&!(CKEDITOR.env.ie&&D=="on")){E.setAttribute("value",D)
}else{if(CKEDITOR.env.ie){var C=new CKEDITOR.dom.element("input",E.getDocument());
E.copyAttributes(C,{value:1});
C.replace(E);
A.getSelection().selectElement(C);
B.element=C
}else{E.removeAttribute("value")
}}}},{id:"cmbSelected",type:"checkbox",label:A.lang.checkboxAndRadio.selected,"default":"",accessKey:"S",value:"checked",setup:function(B){this.setValue(B.getAttribute("checked"))
},commit:function(B){var G=B.element;
if(CKEDITOR.env.ie){var F=!!G.getAttribute("checked"),E=!!this.getValue();
if(F!=E){var D=CKEDITOR.dom.element.createFromHtml('<input type="checkbox"'+(E?' checked="checked"':"")+"/>",A.document);
G.copyAttributes(D,{type:1,checked:1});
D.replace(G);
A.getSelection().selectElement(D);
B.element=D
}}else{var C=this.getValue();
if(C){G.setAttribute("checked","checked")
}else{G.removeAttribute("checked")
}}}}]}]}
});