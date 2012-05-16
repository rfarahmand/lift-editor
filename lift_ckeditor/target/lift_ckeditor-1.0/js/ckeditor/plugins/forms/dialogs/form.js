;
CKEDITOR.dialog.add("form",function(B){var A={action:1,id:1,method:1,enctype:1,target:1};
return{title:B.lang.form.title,minWidth:350,minHeight:200,onShow:function(){var C=this;
delete C.form;
var E=C.getParentEditor().getSelection().getStartElement(),D=E&&E.getAscendant("form",true);
if(D){C.form=D;
C.setupContent(D)
}},onOk:function(){var E,D=this.form,C=!D;
if(C){E=this.getParentEditor();
D=E.document.createElement("form");
!CKEDITOR.env.ie&&D.append(E.document.createElement("br"))
}if(C){E.insertElement(D)
}this.commitContent(D)
},onLoad:function(){function D(E){this.setValue(E.getAttribute(this.id)||"")
}function C(F){var E=this;
if(E.getValue()){F.setAttribute(E.id,E.getValue())
}else{F.removeAttribute(E.id)
}}this.foreach(function(E){if(A[E.id]){E.setup=D;
E.commit=C
}})
},contents:[{id:"info",label:B.lang.form.title,title:B.lang.form.title,elements:[{id:"txtName",type:"text",label:B.lang.common.name,"default":"",accessKey:"N",setup:function(C){this.setValue(C.data("cke-saved-name")||C.getAttribute("name")||"")
},commit:function(C){if(this.getValue()){C.data("cke-saved-name",this.getValue())
}else{C.data("cke-saved-name",false);
C.removeAttribute("name")
}}},{id:"action",type:"text",label:B.lang.form.action,"default":"",accessKey:"T"},{type:"hbox",widths:["45%","55%"],children:[{id:"id",type:"text",label:B.lang.common.id,"default":"",accessKey:"I"},{id:"enctype",type:"select",label:B.lang.form.encoding,style:"width:100%",accessKey:"E","default":"",items:[[""],["text/plain"],["multipart/form-data"],["application/x-www-form-urlencoded"]]}]},{type:"hbox",widths:["45%","55%"],children:[{id:"target",type:"select",label:B.lang.common.target,style:"width:100%",accessKey:"M","default":"",items:[[B.lang.common.notSet,""],[B.lang.common.targetNew,"_blank"],[B.lang.common.targetTop,"_top"],[B.lang.common.targetSelf,"_self"],[B.lang.common.targetParent,"_parent"]]},{id:"method",type:"select",label:B.lang.form.method,accessKey:"M","default":"GET",items:[["GET","get"],["POST","post"]]}]}]}]}
});