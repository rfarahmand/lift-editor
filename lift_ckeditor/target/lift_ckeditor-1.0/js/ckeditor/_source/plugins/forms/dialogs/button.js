;
CKEDITOR.dialog.add("button",function(A){function B(C){var D=this.getValue();
if(D){C.attributes[this.id]=D;
if(this.id=="name"){C.attributes["data-cke-saved-name"]=D
}}else{delete C.attributes[this.id];
if(this.id=="name"){delete C.attributes["data-cke-saved-name"]
}}}return{title:A.lang.button.title,minWidth:350,minHeight:150,onShow:function(){delete this.button;
var C=this.getParentEditor().getSelection().getSelectedElement();
if(C&&C.is("input")){var D=C.getAttribute("type");
if(D in {button:1,reset:1,submit:1}){this.button=C;
this.setupContent(C)
}}},onOk:function(){var F=this.getParentEditor(),E=this.button,D=!E;
var C=E?CKEDITOR.htmlParser.fragment.fromHtml(E.getOuterHtml()).children[0]:new CKEDITOR.htmlParser.element("input");
this.commitContent(C);
var G=new CKEDITOR.htmlParser.basicWriter();
C.writeHtml(G);
var H=CKEDITOR.dom.element.createFromHtml(G.getHtml(),F.document);
if(D){F.insertElement(H)
}else{H.replace(E);
F.getSelection().selectElement(H)
}},contents:[{id:"info",label:A.lang.button.title,title:A.lang.button.title,elements:[{id:"name",type:"text",label:A.lang.common.name,"default":"",setup:function(C){this.setValue(C.data("cke-saved-name")||C.getAttribute("name")||"")
},commit:B},{id:"value",type:"text",label:A.lang.button.text,accessKey:"V","default":"",setup:function(C){this.setValue(C.getAttribute("value")||"")
},commit:B},{id:"type",type:"select",label:A.lang.button.type,"default":"button",accessKey:"T",items:[[A.lang.button.typeBtn,"button"],[A.lang.button.typeSbm,"submit"],[A.lang.button.typeRst,"reset"]],setup:function(C){this.setValue(C.getAttribute("type")||"")
},commit:B}]}]}
});