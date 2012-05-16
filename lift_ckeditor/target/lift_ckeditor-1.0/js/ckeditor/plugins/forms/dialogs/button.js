;
CKEDITOR.dialog.add("button",function(B){function A(E){var C=this;
var D=C.getValue();
if(D){E.attributes[C.id]=D;
if(C.id=="name"){E.attributes["data-cke-saved-name"]=D
}}else{delete E.attributes[C.id];
if(C.id=="name"){delete E.attributes["data-cke-saved-name"]
}}}return{title:B.lang.button.title,minWidth:350,minHeight:150,onShow:function(){var C=this;
delete C.button;
var E=C.getParentEditor().getSelection().getSelectedElement();
if(E&&E.is("input")){var D=E.getAttribute("type");
if(D in {button:1,reset:1,submit:1}){C.button=E;
C.setupContent(E)
}}},onOk:function(){var H=this.getParentEditor(),G=this.button,F=!G,E=G?CKEDITOR.htmlParser.fragment.fromHtml(G.getOuterHtml()).children[0]:new CKEDITOR.htmlParser.element("input");
this.commitContent(E);
var D=new CKEDITOR.htmlParser.basicWriter();
E.writeHtml(D);
var C=CKEDITOR.dom.element.createFromHtml(D.getHtml(),H.document);
if(F){H.insertElement(C)
}else{C.replace(G);
H.getSelection().selectElement(C)
}},contents:[{id:"info",label:B.lang.button.title,title:B.lang.button.title,elements:[{id:"name",type:"text",label:B.lang.common.name,"default":"",setup:function(C){this.setValue(C.data("cke-saved-name")||C.getAttribute("name")||"")
},commit:A},{id:"value",type:"text",label:B.lang.button.text,accessKey:"V","default":"",setup:function(C){this.setValue(C.getAttribute("value")||"")
},commit:A},{id:"type",type:"select",label:B.lang.button.type,"default":"button",accessKey:"T",items:[[B.lang.button.typeBtn,"button"],[B.lang.button.typeSbm,"submit"],[B.lang.button.typeRst,"reset"]],setup:function(C){this.setValue(C.getAttribute("type")||"")
},commit:A}]}]}
});