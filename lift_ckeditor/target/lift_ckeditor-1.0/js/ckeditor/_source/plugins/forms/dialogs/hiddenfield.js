;
CKEDITOR.dialog.add("hiddenfield",function(A){return{title:A.lang.hidden.title,hiddenField:null,minWidth:350,minHeight:110,onShow:function(){delete this.hiddenField;
var D=this.getParentEditor(),C=D.getSelection(),B=C.getSelectedElement();
if(B&&B.data("cke-real-element-type")&&B.data("cke-real-element-type")=="hiddenfield"){this.hiddenField=B;
B=D.restoreRealElement(this.hiddenField);
this.setupContent(B);
C.selectElement(this.hiddenField)
}},onOk:function(){var C=this.getValueOf("info","_cke_saved_name"),F=this.getValueOf("info","value"),E=this.getParentEditor(),D=CKEDITOR.env.ie&&!(CKEDITOR.document.$.documentMode>=8)?E.document.createElement('<input name="'+CKEDITOR.tools.htmlEncode(C)+'">'):E.document.createElement("input");
D.setAttribute("type","hidden");
this.commitContent(D);
var B=E.createFakeElement(D,"cke_hidden","hiddenfield");
if(!this.hiddenField){E.insertElement(B)
}else{B.replace(this.hiddenField);
E.getSelection().selectElement(B)
}return true
},contents:[{id:"info",label:A.lang.hidden.title,title:A.lang.hidden.title,elements:[{id:"_cke_saved_name",type:"text",label:A.lang.hidden.name,"default":"",accessKey:"N",setup:function(B){this.setValue(B.data("cke-saved-name")||B.getAttribute("name")||"")
},commit:function(B){if(this.getValue()){B.setAttribute("name",this.getValue())
}else{B.removeAttribute("name")
}}},{id:"value",type:"text",label:A.lang.hidden.value,"default":"",accessKey:"V",setup:function(B){this.setValue(B.getAttribute("value")||"")
},commit:function(B){if(this.getValue()){B.setAttribute("value",this.getValue())
}else{B.removeAttribute("value")
}}}]}]}
});