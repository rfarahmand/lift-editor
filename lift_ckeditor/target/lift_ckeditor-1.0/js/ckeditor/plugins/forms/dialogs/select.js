;
CKEDITOR.dialog.add("select",function(J){function I(M,L,K,P,O){M=A(M);
var N;
if(P){N=P.createElement("OPTION")
}else{N=document.createElement("OPTION")
}if(M&&N&&N.getName()=="option"){if(CKEDITOR.env.ie){if(!isNaN(parseInt(O,10))){M.$.options.add(N.$,O)
}else{M.$.options.add(N.$)
}N.$.innerHTML=L.length>0?L:"";
N.$.value=K
}else{if(O!==null&&O<M.getChildCount()){M.getChild(O<0?0:O).insertBeforeMe(N)
}else{M.append(N)
}N.setText(L.length>0?L:"");
N.setValue(K)
}}else{return false
}return N
}function H(M){M=A(M);
var L=D(M);
for(var K=M.getChildren().count()-1;
K>=0;
K--){if(M.getChild(K).$.selected){M.getChild(K).remove()
}}C(M,L)
}function G(M,L,K,O){M=A(M);
if(L<0){return false
}var N=M.getChild(L);
N.setText(K);
N.setValue(O);
return N
}function F(K){K=A(K);
while(K.getChild(0)&&K.getChild(0).remove()){}}function E(M,L,K){M=A(M);
var R=D(M);
if(R<0){return false
}var Q=R+L;
Q=Q<0?0:Q;
Q=Q>=M.getChildCount()?M.getChildCount()-1:Q;
if(R==Q){return false
}var P=M.getChild(R),O=P.getText(),N=P.getValue();
P.remove();
P=I(M,O,N,!K?null:K,Q);
C(M,Q);
return P
}function D(K){K=A(K);
return K?K.$.selectedIndex:-1
}function C(M,L){M=A(M);
if(L<0){return null
}var K=M.getChildren().count();
M.$.selectedIndex=L>=K?K-1:L;
return M
}function B(K){K=A(K);
return K?K.getChildren():false
}function A(K){if(K&&K.domId&&K.getInputElement().$){return K.getInputElement()
}else{if(K&&K.$){return K
}}return false
}return{title:J.lang.select.title,minWidth:CKEDITOR.env.ie?460:395,minHeight:CKEDITOR.env.ie?320:300,onShow:function(){var N=this;
delete N.selectBox;
N.setupContent("clear");
var M=N.getParentEditor().getSelection().getSelectedElement();
if(M&&M.getName()=="select"){N.selectBox=M;
N.setupContent(M.getName(),M);
var L=B(M);
for(var K=0;
K<L.count();
K++){N.setupContent("option",L.getItem(K))
}}},onOk:function(){var M=this.getParentEditor(),L=this.selectBox,K=!L;
if(K){L=M.document.createElement("select")
}this.commitContent(L);
if(K){M.insertElement(L);
if(CKEDITOR.env.ie){var O=M.getSelection(),N=O.createBookmarks();
setTimeout(function(){O.selectBookmarks(N)
},0)
}}},contents:[{id:"info",label:J.lang.select.selectInfo,title:J.lang.select.selectInfo,accessKey:"",elements:[{id:"txtName",type:"text",widths:["25%","75%"],labelLayout:"horizontal",label:J.lang.common.name,"default":"",accessKey:"N",style:"width:350px",setup:function(L,K){if(L=="clear"){this.setValue(this["default"]||"")
}else{if(L=="select"){this.setValue(K.data("cke-saved-name")||K.getAttribute("name")||"")
}}},commit:function(K){if(this.getValue()){K.data("cke-saved-name",this.getValue())
}else{K.data("cke-saved-name",false);
K.removeAttribute("name")
}}},{id:"txtValue",type:"text",widths:["25%","75%"],labelLayout:"horizontal",label:J.lang.select.value,style:"width:350px","default":"",className:"cke_disabled",onLoad:function(){this.getInputElement().setAttribute("readOnly",true)
},setup:function(L,K){if(L=="clear"){this.setValue("")
}else{if(L=="option"&&K.getAttribute("selected")){this.setValue(K.$.value)
}}}},{type:"hbox",widths:["175px","170px"],children:[{id:"txtSize",type:"text",labelLayout:"horizontal",label:J.lang.select.size,"default":"",accessKey:"S",style:"width:175px",validate:function(){var K=CKEDITOR.dialog.validate.integer(J.lang.common.validateNumberFailed);
return this.getValue()===""||K.apply(this)
},setup:function(L,K){if(L=="select"){this.setValue(K.getAttribute("size")||"")
}if(CKEDITOR.env.webkit){this.getInputElement().setStyle("width","86px")
}},commit:function(K){if(this.getValue()){K.setAttribute("size",this.getValue())
}else{K.removeAttribute("size")
}}},{type:"html",html:"<span>"+CKEDITOR.tools.htmlEncode(J.lang.select.lines)+"</span>"}]},{type:"html",html:"<span>"+CKEDITOR.tools.htmlEncode(J.lang.select.opAvail)+"</span>"},{type:"hbox",widths:["115px","115px","100px"],children:[{type:"vbox",children:[{id:"txtOptName",type:"text",label:J.lang.select.opText,style:"width:115px",setup:function(L,K){if(L=="clear"){this.setValue("")
}}},{type:"select",id:"cmbName",label:"",title:"",size:5,style:"width:115px;height:75px",items:[],onChange:function(){var M=this.getDialog(),L=M.getContentElement("info","cmbValue"),K=M.getContentElement("info","txtOptName"),O=M.getContentElement("info","txtOptValue"),N=D(this);
C(L,N);
K.setValue(this.getValue());
O.setValue(L.getValue())
},setup:function(L,K){if(L=="clear"){F(this)
}else{if(L=="option"){I(this,K.getText(),K.getText(),this.getDialog().getParentEditor().document)
}}},commit:function(M){var L=this.getDialog(),K=B(this),Q=B(L.getContentElement("info","cmbValue")),P=L.getContentElement("info","txtValue").getValue();
F(M);
for(var O=0;
O<K.count();
O++){var N=I(M,K.getItem(O).getValue(),Q.getItem(O).getValue(),L.getParentEditor().document);
if(Q.getItem(O).getValue()==P){N.setAttribute("selected","selected");
N.selected=true
}}}}]},{type:"vbox",children:[{id:"txtOptValue",type:"text",label:J.lang.select.opValue,style:"width:115px",setup:function(L,K){if(L=="clear"){this.setValue("")
}}},{type:"select",id:"cmbValue",label:"",size:5,style:"width:115px;height:75px",items:[],onChange:function(){var M=this.getDialog(),L=M.getContentElement("info","cmbName"),K=M.getContentElement("info","txtOptName"),O=M.getContentElement("info","txtOptValue"),N=D(this);
C(L,N);
K.setValue(L.getValue());
O.setValue(this.getValue())
},setup:function(M,L){var N=this;
if(M=="clear"){F(N)
}else{if(M=="option"){var K=L.getValue();
I(N,K,K,N.getDialog().getParentEditor().document);
if(L.getAttribute("selected")=="selected"){N.getDialog().getContentElement("info","txtValue").setValue(K)
}}}}}]},{type:"vbox",padding:5,children:[{type:"button",id:"btnAdd",style:"",label:J.lang.select.btnAdd,title:J.lang.select.btnAdd,style:"width:100%;",onClick:function(){var M=this.getDialog(),L=M.getParentEditor(),K=M.getContentElement("info","txtOptName"),P=M.getContentElement("info","txtOptValue"),O=M.getContentElement("info","cmbName"),N=M.getContentElement("info","cmbValue");
I(O,K.getValue(),K.getValue(),M.getParentEditor().document);
I(N,P.getValue(),P.getValue(),M.getParentEditor().document);
K.setValue("");
P.setValue("")
}},{type:"button",id:"btnModify",label:J.lang.select.btnModify,title:J.lang.select.btnModify,style:"width:100%;",onClick:function(){var M=this.getDialog(),L=M.getContentElement("info","txtOptName"),K=M.getContentElement("info","txtOptValue"),P=M.getContentElement("info","cmbName"),O=M.getContentElement("info","cmbValue"),N=D(P);
if(N>=0){G(P,N,L.getValue(),L.getValue());
G(O,N,K.getValue(),K.getValue())
}}},{type:"button",id:"btnUp",style:"width:100%;",label:J.lang.select.btnUp,title:J.lang.select.btnUp,onClick:function(){var M=this.getDialog(),L=M.getContentElement("info","cmbName"),K=M.getContentElement("info","cmbValue");
E(L,-1,M.getParentEditor().document);
E(K,-1,M.getParentEditor().document)
}},{type:"button",id:"btnDown",style:"width:100%;",label:J.lang.select.btnDown,title:J.lang.select.btnDown,onClick:function(){var M=this.getDialog(),L=M.getContentElement("info","cmbName"),K=M.getContentElement("info","cmbValue");
E(L,1,M.getParentEditor().document);
E(K,1,M.getParentEditor().document)
}}]}]},{type:"hbox",widths:["40%","20%","40%"],children:[{type:"button",id:"btnSetValue",label:J.lang.select.btnSetValue,title:J.lang.select.btnSetValue,onClick:function(){var M=this.getDialog(),L=M.getContentElement("info","cmbValue"),K=M.getContentElement("info","txtValue");
K.setValue(L.getValue())
}},{type:"button",id:"btnDelete",label:J.lang.select.btnDelete,title:J.lang.select.btnDelete,onClick:function(){var M=this.getDialog(),L=M.getContentElement("info","cmbName"),K=M.getContentElement("info","cmbValue"),O=M.getContentElement("info","txtOptName"),N=M.getContentElement("info","txtOptValue");
H(L);
H(K);
O.setValue("");
N.setValue("")
}},{id:"chkMulti",type:"checkbox",label:J.lang.select.chkMulti,"default":"",accessKey:"M",value:"checked",setup:function(L,K){if(L=="select"){this.setValue(K.getAttribute("multiple"))
}if(CKEDITOR.env.webkit){this.getElement().getParent().setStyle("vertical-align","middle")
}},commit:function(K){if(this.getValue()){K.setAttribute("multiple",this.getValue())
}else{K.removeAttribute("multiple")
}}}]}]}]}
});