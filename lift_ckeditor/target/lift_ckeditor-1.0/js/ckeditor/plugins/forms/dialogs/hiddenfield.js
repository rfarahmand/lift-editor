;
CKEDITOR.dialog.add("hiddenfield",function(A){return{title:A.lang.hidden.title,hiddenField:null,minWidth:350,minHeight:110,onShow:function(){var C=this;
delete C.hiddenField;
var B=C.getParentEditor(),E=B.getSelection(),D=E.getSelectedElement();
if(D&&D.data("cke-real-element-type")&&D.data("cke-real-element-type")=="hiddenfield"){C.hiddenField=D;
D=B.restoreRealElement(C.hiddenField);
C.setupContent(D);
E.selectElement(C.hiddenField)
}},onOk:function(){var C=this;
var B=C.getValueOf("info","_cke_saved_name"),G=C.getValueOf("info","value"),F=C.getParentEditor(),E=CKEDITOR.env.ie&&!(CKEDITOR.document.$.documentMode>=8)?F.document.createElement('<input name="'+CKEDITOR.tools.htmlEncode(B)+'">'):F.document.createElement("input");
E.setAttribute("type","hidden");
C.commitContent(E);
var D=F.createFakeElement(E,"cke_hidden","hiddenfield");
if(!C.hiddenField){F.insertElement(D)
}else{D.replace(C.hiddenField);
F.getSelection().selectElement(D)
}return true
},contents:[{id:"info",label:A.lang.hidden.title,title:A.lang.hidden.title,elements:[{id:"_cke_saved_name",type:"text",label:A.lang.hidden.name,"default":"",accessKey:"N",setup:function(B){this.setValue(B.data("cke-saved-name")||B.getAttribute("name")||"")
},commit:function(B){if(this.getValue()){B.setAttribute("name",this.getValue())
}else{B.removeAttribute("name")
}}},{id:"value",type:"text",label:A.lang.hidden.value,"default":"",accessKey:"V",setup:function(B){this.setValue(B.getAttribute("value")||"")
},commit:function(B){if(this.getValue()){B.setAttribute("value",this.getValue())
}else{B.removeAttribute("value")
}}}]}]}
});