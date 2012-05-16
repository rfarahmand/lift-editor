(function(){var E=CKEDITOR.tools.cssLength;
var B=function(F){var G=this.id;
if(!F.info){F.info={}
}F.info[G]=this.getValue()
};
function A(L){var I=0,H=0;
for(var G=0,M,N=L.$.rows.length;
G<N;
G++){M=L.$.rows[G],I=0;
for(var F=0,J,K=M.cells.length;
F<K;
F++){J=M.cells[F];
I+=J.colSpan
}I>H&&(H=I)
}return H
}function D(F){return function(){var H=this.getValue(),G=!!(CKEDITOR.dialog.validate.integer()(H)&&H>0);
if(!G){alert(F);
this.select()
}return G
}
}function C(G,I){var F=function(J){return new CKEDITOR.dom.element(J,G.document)
};
var H=G.plugins.dialogadvtab;
return{title:G.lang.table.title,minWidth:310,minHeight:CKEDITOR.env.ie?310:280,onLoad:function(){var J=this;
var K=J.getContentElement("advanced","advStyles");
if(K){K.on("change",function(M){var O=this.getStyle("width",""),P=J.getContentElement("info","txtWidth");
P&&P.setValue(O,true);
var L=this.getStyle("height",""),N=J.getContentElement("info","txtHeight");
N&&N.setValue(L,true)
})
}},onShow:function(){var P=G.getSelection(),L=P.getRanges(),O=null;
var K=this.getContentElement("info","txtRows"),N=this.getContentElement("info","txtCols"),M=this.getContentElement("info","txtWidth"),J=this.getContentElement("info","txtHeight");
if(I=="tableProperties"){if((O=P.getSelectedElement())){O=O.getAscendant("table",true)
}else{if(L.length>0){if(CKEDITOR.env.webkit){L[0].shrink(CKEDITOR.NODE_ELEMENT)
}var Q=L[0].getCommonAncestor(true);
O=Q.getAscendant("table",true)
}}this._.selectedElement=O
}if(O){this.setupContent(O);
K&&K.disable();
N&&N.disable()
}else{K&&K.enable();
N&&N.enable()
}M&&M.onChange();
J&&J.onChange()
},onOk:function(){var c=G.getSelection(),Y=this._.selectedElement&&c.createBookmarks();
var W=this._.selectedElement||F("table"),a=this,b={};
this.commitContent(b,W);
if(b.info){var X=b.info;
if(!this._.selectedElement){var J=W.append(F("tbody")),Q=parseInt(X.txtRows,10)||0,R=parseInt(X.txtCols,10)||0;
for(var U=0;
U<Q;
U++){var P=J.append(F("tr"));
for(var T=0;
T<R;
T++){var L=P.append(F("td"));
if(!CKEDITOR.env.ie){L.append(F("br"))
}}}}var N=X.selHeaders;
if(!W.$.tHead&&(N=="row"||N=="both")){var V=new CKEDITOR.dom.element(W.$.createTHead());
J=W.getElementsByTag("tbody").getItem(0);
var M=J.getElementsByTag("tr").getItem(0);
for(U=0;
U<M.getChildCount();
U++){var O=M.getChild(U);
if(O.type==CKEDITOR.NODE_ELEMENT&&!O.data("cke-bookmark")){O.renameNode("th");
O.setAttribute("scope","col")
}}V.append(M.remove())
}if(W.$.tHead!==null&&!(N=="row"||N=="both")){V=new CKEDITOR.dom.element(W.$.tHead);
J=W.getElementsByTag("tbody").getItem(0);
var K=J.getFirst();
while(V.getChildCount()>0){M=V.getFirst();
for(U=0;
U<M.getChildCount();
U++){var S=M.getChild(U);
if(S.type==CKEDITOR.NODE_ELEMENT){S.renameNode("td");
S.removeAttribute("scope")
}}M.insertBefore(K)
}V.remove()
}if(!this.hasColumnHeaders&&(N=="col"||N=="both")){for(P=0;
P<W.$.rows.length;
P++){S=new CKEDITOR.dom.element(W.$.rows[P].cells[0]);
S.renameNode("th");
S.setAttribute("scope","row")
}}if((this.hasColumnHeaders)&&!(N=="col"||N=="both")){for(U=0;
U<W.$.rows.length;
U++){P=new CKEDITOR.dom.element(W.$.rows[U]);
if(P.getParent().getName()=="tbody"){S=new CKEDITOR.dom.element(P.$.cells[0]);
S.renameNode("td");
S.removeAttribute("scope")
}}}X.txtHeight?W.setStyle("height",X.txtHeight):W.removeStyle("height");
X.txtWidth?W.setStyle("width",X.txtWidth):W.removeStyle("width");
if(!W.getAttribute("style")){W.removeAttribute("style")
}}if(!this._.selectedElement){G.insertElement(W);
setTimeout(function(){var e=new CKEDITOR.dom.element(W.$.rows[0].cells[0]);
var d=new CKEDITOR.dom.range(G.document);
d.moveToPosition(e,CKEDITOR.POSITION_AFTER_START);
d.select(1)
},0)
}else{try{c.selectBookmarks(Y)
}catch(Z){}}},contents:[{id:"info",label:G.lang.table.title,elements:[{type:"hbox",widths:[null,null],styles:["vertical-align:top"],children:[{type:"vbox",padding:0,children:[{type:"text",id:"txtRows","default":3,label:G.lang.table.rows,required:true,controlStyle:"width:5em",validate:D(G.lang.table.invalidRows),setup:function(J){this.setValue(J.$.rows.length)
},commit:B},{type:"text",id:"txtCols","default":2,label:G.lang.table.columns,required:true,controlStyle:"width:5em",validate:D(G.lang.table.invalidCols),setup:function(J){this.setValue(A(J))
},commit:B},{type:"html",html:"&nbsp;"},{type:"select",id:"selHeaders","default":"",label:G.lang.table.headers,items:[[G.lang.table.headersNone,""],[G.lang.table.headersRow,"row"],[G.lang.table.headersColumn,"col"],[G.lang.table.headersBoth,"both"]],setup:function(K){var L=this.getDialog();
L.hasColumnHeaders=true;
for(var M=0;
M<K.$.rows.length;
M++){var J=K.$.rows[M].cells[0];
if(J&&J.nodeName.toLowerCase()!="th"){L.hasColumnHeaders=false;
break
}}if((K.$.tHead!==null)){this.setValue(L.hasColumnHeaders?"both":"row")
}else{this.setValue(L.hasColumnHeaders?"col":"")
}},commit:B},{type:"text",id:"txtBorder","default":1,label:G.lang.table.border,controlStyle:"width:3em",validate:CKEDITOR.dialog.validate.number(G.lang.table.invalidBorder),setup:function(J){this.setValue(J.getAttribute("border")||"")
},commit:function(K,J){if(this.getValue()){J.setAttribute("border",this.getValue())
}else{J.removeAttribute("border")
}}},{id:"cmbAlign",type:"select","default":"",label:G.lang.common.align,items:[[G.lang.common.notSet,""],[G.lang.common.alignLeft,"left"],[G.lang.common.alignCenter,"center"],[G.lang.common.alignRight,"right"]],setup:function(J){this.setValue(J.getAttribute("align")||"")
},commit:function(K,J){if(this.getValue()){J.setAttribute("align",this.getValue())
}else{J.removeAttribute("align")
}}}]},{type:"vbox",padding:0,children:[{type:"hbox",widths:["5em"],children:[{type:"text",id:"txtWidth",controlStyle:"width:5em",label:G.lang.common.width,title:G.lang.common.cssLengthTooltip,"default":500,getValue:E,validate:CKEDITOR.dialog.validate.cssLength(G.lang.common.invalidCssLength.replace("%1",G.lang.common.width)),onChange:function(){var J=this.getDialog().getContentElement("advanced","advStyles");
J&&J.updateStyle("width",this.getValue())
},setup:function(J){var K=J.getStyle("width");
K&&this.setValue(K)
},commit:B}]},{type:"hbox",widths:["5em"],children:[{type:"text",id:"txtHeight",controlStyle:"width:5em",label:G.lang.common.height,title:G.lang.common.cssLengthTooltip,"default":"",getValue:E,validate:CKEDITOR.dialog.validate.cssLength(G.lang.common.invalidCssLength.replace("%1",G.lang.common.height)),onChange:function(){var J=this.getDialog().getContentElement("advanced","advStyles");
J&&J.updateStyle("height",this.getValue())
},setup:function(J){var K=J.getStyle("height");
K&&this.setValue(K)
},commit:B}]},{type:"html",html:"&nbsp;"},{type:"text",id:"txtCellSpace",controlStyle:"width:3em",label:G.lang.table.cellSpace,"default":1,validate:CKEDITOR.dialog.validate.number(G.lang.table.invalidCellSpacing),setup:function(J){this.setValue(J.getAttribute("cellSpacing")||"")
},commit:function(K,J){if(this.getValue()){J.setAttribute("cellSpacing",this.getValue())
}else{J.removeAttribute("cellSpacing")
}}},{type:"text",id:"txtCellPad",controlStyle:"width:3em",label:G.lang.table.cellPad,"default":1,validate:CKEDITOR.dialog.validate.number(G.lang.table.invalidCellPadding),setup:function(J){this.setValue(J.getAttribute("cellPadding")||"")
},commit:function(K,J){if(this.getValue()){J.setAttribute("cellPadding",this.getValue())
}else{J.removeAttribute("cellPadding")
}}}]}]},{type:"html",align:"right",html:""},{type:"vbox",padding:0,children:[{type:"text",id:"txtCaption",label:G.lang.table.caption,setup:function(L){this.enable();
var K=L.getElementsByTag("caption");
if(K.count()>0){var J=K.getItem(0);
var M=J.getFirst(CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT));
if(M&&!M.equals(J.getBogus())){this.disable();
this.setValue(J.getText());
return 
}J=CKEDITOR.tools.trim(J.getText());
this.setValue(J)
}},commit:function(N,M){if(!this.isEnabled()){return 
}var J=this.getValue(),L=M.getElementsByTag("caption");
if(J){if(L.count()>0){L=L.getItem(0);
L.setHtml("")
}else{L=new CKEDITOR.dom.element("caption",G.document);
if(M.getChildCount()){L.insertBefore(M.getFirst())
}else{L.appendTo(M)
}}L.append(new CKEDITOR.dom.text(J,G.document))
}else{if(L.count()>0){for(var K=L.count()-1;
K>=0;
K--){L.getItem(K).remove()
}}}}},{type:"text",id:"txtSummary",label:G.lang.table.summary,setup:function(J){this.setValue(J.getAttribute("summary")||"")
},commit:function(K,J){if(this.getValue()){J.setAttribute("summary",this.getValue())
}else{J.removeAttribute("summary")
}}}]}]},H&&H.createAdvancedTab(G)]}
}CKEDITOR.dialog.add("table",function(F){return C(F,"table")
});
CKEDITOR.dialog.add("tableProperties",function(F){return C(F,"tableProperties")
})
})();