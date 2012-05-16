;
CKEDITOR.dialog.add("select",function(F){function H(N,P,O,K,L){N=E(N);
var M;
if(K){M=K.createElement("OPTION")
}else{M=document.createElement("OPTION")
}if(N&&M&&M.getName()=="option"){if(CKEDITOR.env.ie){if(!isNaN(parseInt(L,10))){N.$.options.add(M.$,L)
}else{N.$.options.add(M.$)
}M.$.innerHTML=P.length>0?P:"";
M.$.value=O
}else{if(L!==null&&L<N.getChildCount()){N.getChild(L<0?0:L).insertBeforeMe(M)
}else{N.append(M)
}M.setText(P.length>0?P:"");
M.setValue(O)
}}else{return false
}return M
}function I(M){M=E(M);
var K=A(M);
for(var L=M.getChildren().count()-1;
L>=0;
L--){if(M.getChild(L).$.selected){M.getChild(L).remove()
}}J(M,K)
}function B(M,K,N,L){M=E(M);
if(K<0){return false
}var O=M.getChild(K);
O.setText(N);
O.setValue(L);
return O
}function D(K){K=E(K);
while(K.getChild(0)&&K.getChild(0).remove()){}}function C(P,M,K){P=E(P);
var L=A(P);
if(L<0){return false
}var Q=L+M;
Q=(Q<0)?0:Q;
Q=(Q>=P.getChildCount())?P.getChildCount()-1:Q;
if(L==Q){return false
}var O=P.getChild(L),N=O.getText(),R=O.getValue();
O.remove();
O=H(P,N,R,(!K)?null:K,Q);
J(P,Q);
return O
}function A(K){K=E(K);
return K?K.$.selectedIndex:-1
}function J(M,K){M=E(M);
if(K<0){return null
}var L=M.getChildren().count();
M.$.selectedIndex=(K>=L)?(L-1):K;
return M
}function G(K){K=E(K);
return K?K.getChildren():false
}function E(K){if(K&&K.domId&&K.getInputElement().$){return K.getInputElement()
}else{if(K&&K.$){return K
}}return false
}return{title:F.lang.select.title,minWidth:CKEDITOR.env.ie?460:395,minHeight:CKEDITOR.env.ie?320:300,onShow:function(){delete this.selectBox;
this.setupContent("clear");
var L=this.getParentEditor().getSelection().getSelectedElement();
if(L&&L.getName()=="select"){this.selectBox=L;
this.setupContent(L.getName(),L);
var M=G(L);
for(var K=0;
K<M.count();
K++){this.setupContent("option",M.getItem(K))
}}},onOk:function(){var M=this.getParentEditor(),L=this.selectBox,K=!L;
if(K){L=M.document.createElement("select")
}this.commitContent(L);
if(K){M.insertElement(L);
if(CKEDITOR.env.ie){var O=M.getSelection(),N=O.createBookmarks();
setTimeout(function(){O.selectBookmarks(N)
},0)
}}},contents:[{id:"info",label:F.lang.select.selectInfo,title:F.lang.select.selectInfo,accessKey:"",elements:[{id:"txtName",type:"text",widths:["25%","75%"],labelLayout:"horizontal",label:F.lang.common.name,"default":"",accessKey:"N",style:"width:350px",setup:function(K,L){if(K=="clear"){this.setValue(this["default"]||"")
}else{if(K=="select"){this.setValue(L.data("cke-saved-name")||L.getAttribute("name")||"")
}}},commit:function(K){if(this.getValue()){K.data("cke-saved-name",this.getValue())
}else{K.data("cke-saved-name",false);
K.removeAttribute("name")
}}},{id:"txtValue",type:"text",widths:["25%","75%"],labelLayout:"horizontal",label:F.lang.select.value,style:"width:350px","default":"",className:"cke_disabled",onLoad:function(){this.getInputElement().setAttribute("readOnly",true)
},setup:function(K,L){if(K=="clear"){this.setValue("")
}else{if(K=="option"&&L.getAttribute("selected")){this.setValue(L.$.value)
}}}},{type:"hbox",widths:["175px","170px"],children:[{id:"txtSize",type:"text",labelLayout:"horizontal",label:F.lang.select.size,"default":"",accessKey:"S",style:"width:175px",validate:function(){var K=CKEDITOR.dialog.validate.integer(F.lang.common.validateNumberFailed);
return((this.getValue()==="")||K.apply(this))
},setup:function(K,L){if(K=="select"){this.setValue(L.getAttribute("size")||"")
}if(CKEDITOR.env.webkit){this.getInputElement().setStyle("width","86px")
}},commit:function(K){if(this.getValue()){K.setAttribute("size",this.getValue())
}else{K.removeAttribute("size")
}}},{type:"html",html:"<span>"+CKEDITOR.tools.htmlEncode(F.lang.select.lines)+"</span>"}]},{type:"html",html:"<span>"+CKEDITOR.tools.htmlEncode(F.lang.select.opAvail)+"</span>"},{type:"hbox",widths:["115px","115px","100px"],children:[{type:"vbox",children:[{id:"txtOptName",type:"text",label:F.lang.select.opText,style:"width:115px",setup:function(K,L){if(K=="clear"){this.setValue("")
}}},{type:"select",id:"cmbName",label:"",title:"",size:5,style:"width:115px;height:75px",items:[],onChange:function(){var L=this.getDialog(),K=L.getContentElement("info","cmbValue"),O=L.getContentElement("info","txtOptName"),N=L.getContentElement("info","txtOptValue"),M=A(this);
J(K,M);
O.setValue(this.getValue());
N.setValue(K.getValue())
},setup:function(K,L){if(K=="clear"){D(this)
}else{if(K=="option"){H(this,L.getText(),L.getText(),this.getDialog().getParentEditor().document)
}}},commit:function(N){var M=this.getDialog(),K=G(this),P=G(M.getContentElement("info","cmbValue")),O=M.getContentElement("info","txtValue").getValue();
D(N);
for(var L=0;
L<K.count();
L++){var Q=H(N,K.getItem(L).getValue(),P.getItem(L).getValue(),M.getParentEditor().document);
if(P.getItem(L).getValue()==O){Q.setAttribute("selected","selected");
Q.selected=true
}}}}]},{type:"vbox",children:[{id:"txtOptValue",type:"text",label:F.lang.select.opValue,style:"width:115px",setup:function(K,L){if(K=="clear"){this.setValue("")
}}},{type:"select",id:"cmbValue",label:"",size:5,style:"width:115px;height:75px",items:[],onChange:function(){var K=this.getDialog(),N=K.getContentElement("info","cmbName"),O=K.getContentElement("info","txtOptName"),M=K.getContentElement("info","txtOptValue"),L=A(this);
J(N,L);
O.setValue(N.getValue());
M.setValue(this.getValue())
},setup:function(L,M){if(L=="clear"){D(this)
}else{if(L=="option"){var K=M.getValue();
H(this,K,K,this.getDialog().getParentEditor().document);
if(M.getAttribute("selected")=="selected"){this.getDialog().getContentElement("info","txtValue").setValue(K)
}}}}}]},{type:"vbox",padding:5,children:[{type:"button",id:"btnAdd",style:"",label:F.lang.select.btnAdd,title:F.lang.select.btnAdd,style:"width:100%;",onClick:function(){var L=this.getDialog(),P=L.getParentEditor(),O=L.getContentElement("info","txtOptName"),N=L.getContentElement("info","txtOptValue"),M=L.getContentElement("info","cmbName"),K=L.getContentElement("info","cmbValue");
H(M,O.getValue(),O.getValue(),L.getParentEditor().document);
H(K,N.getValue(),N.getValue(),L.getParentEditor().document);
O.setValue("");
N.setValue("")
}},{type:"button",id:"btnModify",label:F.lang.select.btnModify,title:F.lang.select.btnModify,style:"width:100%;",onClick:function(){var L=this.getDialog(),P=L.getContentElement("info","txtOptName"),O=L.getContentElement("info","txtOptValue"),N=L.getContentElement("info","cmbName"),K=L.getContentElement("info","cmbValue"),M=A(N);
if(M>=0){B(N,M,P.getValue(),P.getValue());
B(K,M,O.getValue(),O.getValue())
}}},{type:"button",id:"btnUp",style:"width:100%;",label:F.lang.select.btnUp,title:F.lang.select.btnUp,onClick:function(){var L=this.getDialog(),M=L.getContentElement("info","cmbName"),K=L.getContentElement("info","cmbValue");
C(M,-1,L.getParentEditor().document);
C(K,-1,L.getParentEditor().document)
}},{type:"button",id:"btnDown",style:"width:100%;",label:F.lang.select.btnDown,title:F.lang.select.btnDown,onClick:function(){var L=this.getDialog(),M=L.getContentElement("info","cmbName"),K=L.getContentElement("info","cmbValue");
C(M,1,L.getParentEditor().document);
C(K,1,L.getParentEditor().document)
}}]}]},{type:"hbox",widths:["40%","20%","40%"],children:[{type:"button",id:"btnSetValue",label:F.lang.select.btnSetValue,title:F.lang.select.btnSetValue,onClick:function(){var L=this.getDialog(),K=L.getContentElement("info","cmbValue"),M=L.getContentElement("info","txtValue");
M.setValue(K.getValue())
}},{type:"button",id:"btnDelete",label:F.lang.select.btnDelete,title:F.lang.select.btnDelete,onClick:function(){var L=this.getDialog(),N=L.getContentElement("info","cmbName"),K=L.getContentElement("info","cmbValue"),O=L.getContentElement("info","txtOptName"),M=L.getContentElement("info","txtOptValue");
I(N);
I(K);
O.setValue("");
M.setValue("")
}},{id:"chkMulti",type:"checkbox",label:F.lang.select.chkMulti,"default":"",accessKey:"M",value:"checked",setup:function(K,L){if(K=="select"){this.setValue(L.getAttribute("multiple"))
}if(CKEDITOR.env.webkit){this.getElement().getParent().setStyle("vertical-align","middle")
}},commit:function(K){if(this.getValue()){K.setAttribute("multiple",this.getValue())
}else{K.removeAttribute("multiple")
}}}]}]}]}
});