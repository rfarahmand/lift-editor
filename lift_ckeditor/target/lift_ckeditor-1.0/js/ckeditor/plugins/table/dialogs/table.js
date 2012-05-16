(function(){var B=CKEDITOR.tools.cssLength,A=function(G){var F=this.id;
if(!G.info){G.info={}
}G.info[F]=this.getValue()
};
function E(N){var M=0,L=0;
for(var K=0,J,I=N.$.rows.length;
K<I;
K++){J=N.$.rows[K],M=0;
for(var H=0,G,F=J.cells.length;
H<F;
H++){G=J.cells[H];
M+=G.colSpan
}M>L&&(L=M)
}return L
}function D(F){return function(){var H=this.getValue(),G=!!(CKEDITOR.dialog.validate.integer()(H)&&H>0);
if(!G){alert(F);
this.select()
}return G
}
}function C(I,H){var G=function(J){return new CKEDITOR.dom.element(J,I.document)
},F=I.plugins.dialogadvtab;
return{title:I.lang.table.title,minWidth:310,minHeight:CKEDITOR.env.ie?310:280,onLoad:function(){var K=this,J=K.getContentElement("advanced","advStyles");
if(J){J.on("change",function(M){var L=this.getStyle("width",""),P=K.getContentElement("info","txtWidth");
P&&P.setValue(L,true);
var O=this.getStyle("height",""),N=K.getContentElement("info","txtHeight");
N&&N.setValue(O,true)
})
}},onShow:function(){var J=this;
var R=I.getSelection(),Q=R.getRanges(),P=null,O=J.getContentElement("info","txtRows"),N=J.getContentElement("info","txtCols"),M=J.getContentElement("info","txtWidth"),L=J.getContentElement("info","txtHeight");
if(H=="tableProperties"){if(P=R.getSelectedElement()){P=P.getAscendant("table",true)
}else{if(Q.length>0){if(CKEDITOR.env.webkit){Q[0].shrink(CKEDITOR.NODE_ELEMENT)
}var K=Q[0].getCommonAncestor(true);
P=K.getAscendant("table",true)
}}J._.selectedElement=P
}if(P){J.setupContent(P);
O&&O.disable();
N&&N.disable()
}else{O&&O.enable();
N&&N.enable()
}M&&M.onChange();
L&&L.onChange()
},onOk:function(){var c=I.getSelection(),b=this._.selectedElement&&c.createBookmarks(),a=this._.selectedElement||G("table"),Z=this,Y={};
this.commitContent(Y,a);
if(Y.info){var X=Y.info;
if(!this._.selectedElement){var W=a.append(G("tbody")),U=parseInt(X.txtRows,10)||0,S=parseInt(X.txtCols,10)||0;
for(var Q=0;
Q<U;
Q++){var P=W.append(G("tr"));
for(var O=0;
O<S;
O++){var N=P.append(G("td"));
if(!CKEDITOR.env.ie){N.append(G("br"))
}}}}var M=X.selHeaders;
if(!a.$.tHead&&(M=="row"||M=="both")){var L=new CKEDITOR.dom.element(a.$.createTHead());
W=a.getElementsByTag("tbody").getItem(0);
var K=W.getElementsByTag("tr").getItem(0);
for(Q=0;
Q<K.getChildCount();
Q++){var J=K.getChild(Q);
if(J.type==CKEDITOR.NODE_ELEMENT&&!J.data("cke-bookmark")){J.renameNode("th");
J.setAttribute("scope","col")
}}L.append(K.remove())
}if(a.$.tHead!==null&&!(M=="row"||M=="both")){L=new CKEDITOR.dom.element(a.$.tHead);
W=a.getElementsByTag("tbody").getItem(0);
var V=W.getFirst();
while(L.getChildCount()>0){K=L.getFirst();
for(Q=0;
Q<K.getChildCount();
Q++){var T=K.getChild(Q);
if(T.type==CKEDITOR.NODE_ELEMENT){T.renameNode("td");
T.removeAttribute("scope")
}}K.insertBefore(V)
}L.remove()
}if(!this.hasColumnHeaders&&(M=="col"||M=="both")){for(P=0;
P<a.$.rows.length;
P++){T=new CKEDITOR.dom.element(a.$.rows[P].cells[0]);
T.renameNode("th");
T.setAttribute("scope","row")
}}if(this.hasColumnHeaders&&!(M=="col"||M=="both")){for(Q=0;
Q<a.$.rows.length;
Q++){P=new CKEDITOR.dom.element(a.$.rows[Q]);
if(P.getParent().getName()=="tbody"){T=new CKEDITOR.dom.element(P.$.cells[0]);
T.renameNode("td");
T.removeAttribute("scope")
}}}X.txtHeight?a.setStyle("height",X.txtHeight):a.removeStyle("height");
X.txtWidth?a.setStyle("width",X.txtWidth):a.removeStyle("width");
if(!a.getAttribute("style")){a.removeAttribute("style")
}}if(!this._.selectedElement){I.insertElement(a);
setTimeout(function(){var e=new CKEDITOR.dom.element(a.$.rows[0].cells[0]),d=new CKEDITOR.dom.range(I.document);
d.moveToPosition(e,CKEDITOR.POSITION_AFTER_START);
d.select(1)
},0)
}else{try{c.selectBookmarks(b)
}catch(R){}}},contents:[{id:"info",label:I.lang.table.title,elements:[{type:"hbox",widths:[null,null],styles:["vertical-align:top"],children:[{type:"vbox",padding:0,children:[{type:"text",id:"txtRows","default":3,label:I.lang.table.rows,required:true,controlStyle:"width:5em",validate:D(I.lang.table.invalidRows),setup:function(J){this.setValue(J.$.rows.length)
},commit:A},{type:"text",id:"txtCols","default":2,label:I.lang.table.columns,required:true,controlStyle:"width:5em",validate:D(I.lang.table.invalidCols),setup:function(J){this.setValue(E(J))
},commit:A},{type:"html",html:"&nbsp;"},{type:"select",id:"selHeaders","default":"",label:I.lang.table.headers,items:[[I.lang.table.headersNone,""],[I.lang.table.headersRow,"row"],[I.lang.table.headersColumn,"col"],[I.lang.table.headersBoth,"both"]],setup:function(M){var L=this.getDialog();
L.hasColumnHeaders=true;
for(var K=0;
K<M.$.rows.length;
K++){var J=M.$.rows[K].cells[0];
if(J&&J.nodeName.toLowerCase()!="th"){L.hasColumnHeaders=false;
break
}}if(M.$.tHead!==null){this.setValue(L.hasColumnHeaders?"both":"row")
}else{this.setValue(L.hasColumnHeaders?"col":"")
}},commit:A},{type:"text",id:"txtBorder","default":1,label:I.lang.table.border,controlStyle:"width:3em",validate:CKEDITOR.dialog.validate.number(I.lang.table.invalidBorder),setup:function(J){this.setValue(J.getAttribute("border")||"")
},commit:function(K,J){if(this.getValue()){J.setAttribute("border",this.getValue())
}else{J.removeAttribute("border")
}}},{id:"cmbAlign",type:"select","default":"",label:I.lang.common.align,items:[[I.lang.common.notSet,""],[I.lang.common.alignLeft,"left"],[I.lang.common.alignCenter,"center"],[I.lang.common.alignRight,"right"]],setup:function(J){this.setValue(J.getAttribute("align")||"")
},commit:function(K,J){if(this.getValue()){J.setAttribute("align",this.getValue())
}else{J.removeAttribute("align")
}}}]},{type:"vbox",padding:0,children:[{type:"hbox",widths:["5em"],children:[{type:"text",id:"txtWidth",controlStyle:"width:5em",label:I.lang.common.width,title:I.lang.common.cssLengthTooltip,"default":500,getValue:B,validate:CKEDITOR.dialog.validate.cssLength(I.lang.common.invalidCssLength.replace("%1",I.lang.common.width)),onChange:function(){var J=this.getDialog().getContentElement("advanced","advStyles");
J&&J.updateStyle("width",this.getValue())
},setup:function(K){var J=K.getStyle("width");
J&&this.setValue(J)
},commit:A}]},{type:"hbox",widths:["5em"],children:[{type:"text",id:"txtHeight",controlStyle:"width:5em",label:I.lang.common.height,title:I.lang.common.cssLengthTooltip,"default":"",getValue:B,validate:CKEDITOR.dialog.validate.cssLength(I.lang.common.invalidCssLength.replace("%1",I.lang.common.height)),onChange:function(){var J=this.getDialog().getContentElement("advanced","advStyles");
J&&J.updateStyle("height",this.getValue())
},setup:function(K){var J=K.getStyle("height");
J&&this.setValue(J)
},commit:A}]},{type:"html",html:"&nbsp;"},{type:"text",id:"txtCellSpace",controlStyle:"width:3em",label:I.lang.table.cellSpace,"default":1,validate:CKEDITOR.dialog.validate.number(I.lang.table.invalidCellSpacing),setup:function(J){this.setValue(J.getAttribute("cellSpacing")||"")
},commit:function(K,J){if(this.getValue()){J.setAttribute("cellSpacing",this.getValue())
}else{J.removeAttribute("cellSpacing")
}}},{type:"text",id:"txtCellPad",controlStyle:"width:3em",label:I.lang.table.cellPad,"default":1,validate:CKEDITOR.dialog.validate.number(I.lang.table.invalidCellPadding),setup:function(J){this.setValue(J.getAttribute("cellPadding")||"")
},commit:function(K,J){if(this.getValue()){J.setAttribute("cellPadding",this.getValue())
}else{J.removeAttribute("cellPadding")
}}}]}]},{type:"html",align:"right",html:""},{type:"vbox",padding:0,children:[{type:"text",id:"txtCaption",label:I.lang.table.caption,setup:function(M){var N=this;
N.enable();
var L=M.getElementsByTag("caption");
if(L.count()>0){var K=L.getItem(0),J=K.getFirst(CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT));
if(J&&!J.equals(K.getBogus())){N.disable();
N.setValue(K.getText());
return 
}K=CKEDITOR.tools.trim(K.getText());
N.setValue(K)
}},commit:function(M,L){if(!this.isEnabled()){return 
}var K=this.getValue(),J=L.getElementsByTag("caption");
if(K){if(J.count()>0){J=J.getItem(0);
J.setHtml("")
}else{J=new CKEDITOR.dom.element("caption",I.document);
if(L.getChildCount()){J.insertBefore(L.getFirst())
}else{J.appendTo(L)
}}J.append(new CKEDITOR.dom.text(K,I.document))
}else{if(J.count()>0){for(var N=J.count()-1;
N>=0;
N--){J.getItem(N).remove()
}}}}},{type:"text",id:"txtSummary",label:I.lang.table.summary,setup:function(J){this.setValue(J.getAttribute("summary")||"")
},commit:function(K,J){if(this.getValue()){J.setAttribute("summary",this.getValue())
}else{J.removeAttribute("summary")
}}}]}]},F&&F.createAdvancedTab(I)]}
}CKEDITOR.dialog.add("table",function(F){return C(F,"table")
});
CKEDITOR.dialog.add("tableProperties",function(F){return C(F,"tableProperties")
})
})();