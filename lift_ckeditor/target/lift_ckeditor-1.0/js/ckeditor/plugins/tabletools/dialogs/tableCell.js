;
CKEDITOR.dialog.add("cellProperties",function(K){var J=K.lang.table,I=J.cell,H=K.lang.common,G=CKEDITOR.dialog.validate,F=/^(\d+(?:\.\d+)?)(px|%)$/,E=/^(\d+(?:\.\d+)?)px$/,D=CKEDITOR.tools.bind,C={type:"html",html:"&nbsp;"},B=K.lang.dir=="rtl";
function A(M,L){var Q=function(){var R=this;
O(R);
L(R,R._.parentDialog);
R._.parentDialog.changeFocus()
},P=function(){O(this);
this._.parentDialog.changeFocus()
},O=function(R){R.removeListener("ok",Q);
R.removeListener("cancel",P)
},N=function(R){R.on("ok",Q);
R.on("cancel",P)
};
K.execCommand(M);
if(K._.storedDialogs.colordialog){N(K._.storedDialogs.colordialog)
}else{CKEDITOR.on("dialogDefinition",function(S){if(S.data.name!=M){return 
}var R=S.data.definition;
S.removeListener();
R.onLoad=CKEDITOR.tools.override(R.onLoad,function(T){return function(){N(this);
R.onLoad=T;
if(typeof T=="function"){T.call(this)
}}
})
})
}}return{title:I.title,minWidth:CKEDITOR.env.ie&&CKEDITOR.env.quirks?450:410,minHeight:CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?230:200,contents:[{id:"info",label:I.title,accessKey:"I",elements:[{type:"hbox",widths:["40%","5%","40%"],children:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["70%","30%"],children:[{type:"text",id:"width",width:"100px",label:H.width,validate:G.number(I.invalidWidth),onLoad:function(){var M=this.getDialog().getContentElement("info","widthType"),L=M.getElement(),O=this.getInputElement(),N=O.getAttribute("aria-labelledby");
O.setAttribute("aria-labelledby",[N,L.$.id].join(" "))
},setup:function(M){var L=parseInt(M.getAttribute("width"),10),N=parseInt(M.getStyle("width"),10);
!isNaN(L)&&this.setValue(L);
!isNaN(N)&&this.setValue(N)
},commit:function(M){var L=parseInt(this.getValue(),10),N=this.getDialog().getValueOf("info","widthType");
if(!isNaN(L)){M.setStyle("width",L+N)
}else{M.removeStyle("width")
}M.removeAttribute("width")
},"default":""},{type:"select",id:"widthType",label:K.lang.table.widthUnit,labelStyle:"visibility:hidden","default":"px",items:[[J.widthPx,"px"],[J.widthPc,"%"]],setup:function(M){var L=F.exec(M.getStyle("width")||M.getAttribute("width"));
if(L){this.setValue(L[2])
}}}]},{type:"hbox",widths:["70%","30%"],children:[{type:"text",id:"height",label:H.height,width:"100px","default":"",validate:G.number(I.invalidHeight),onLoad:function(){var M=this.getDialog().getContentElement("info","htmlHeightType"),L=M.getElement(),O=this.getInputElement(),N=O.getAttribute("aria-labelledby");
O.setAttribute("aria-labelledby",[N,L.$.id].join(" "))
},setup:function(M){var L=parseInt(M.getAttribute("height"),10),N=parseInt(M.getStyle("height"),10);
!isNaN(L)&&this.setValue(L);
!isNaN(N)&&this.setValue(N)
},commit:function(M){var L=parseInt(this.getValue(),10);
if(!isNaN(L)){M.setStyle("height",CKEDITOR.tools.cssLength(L))
}else{M.removeStyle("height")
}M.removeAttribute("height")
}},{id:"htmlHeightType",type:"html",html:"<br />"+J.widthPx}]},C,{type:"select",id:"wordWrap",label:I.wordWrap,"default":"yes",items:[[I.yes,"yes"],[I.no,"no"]],setup:function(M){var L=M.getAttribute("noWrap"),N=M.getStyle("white-space");
if(N=="nowrap"||L){this.setValue("no")
}},commit:function(L){if(this.getValue()=="no"){L.setStyle("white-space","nowrap")
}else{L.removeStyle("white-space")
}L.removeAttribute("noWrap")
}},C,{type:"select",id:"hAlign",label:I.hAlign,"default":"",items:[[H.notSet,""],[H.alignLeft,"left"],[H.alignCenter,"center"],[H.alignRight,"right"]],setup:function(M){var L=M.getAttribute("align"),N=M.getStyle("text-align");
this.setValue(N||L||"")
},commit:function(M){var L=this.getValue();
if(L){M.setStyle("text-align",L)
}else{M.removeStyle("text-align")
}M.removeAttribute("align")
}},{type:"select",id:"vAlign",label:I.vAlign,"default":"",items:[[H.notSet,""],[H.alignTop,"top"],[H.alignMiddle,"middle"],[H.alignBottom,"bottom"],[I.alignBaseline,"baseline"]],setup:function(M){var L=M.getAttribute("vAlign"),N=M.getStyle("vertical-align");
switch(N){case"top":case"middle":case"bottom":case"baseline":break;
default:N=""
}this.setValue(N||L||"")
},commit:function(M){var L=this.getValue();
if(L){M.setStyle("vertical-align",L)
}else{M.removeStyle("vertical-align")
}M.removeAttribute("vAlign")
}}]},C,{type:"vbox",padding:0,children:[{type:"select",id:"cellType",label:I.cellType,"default":"td",items:[[I.data,"td"],[I.header,"th"]],setup:function(L){this.setValue(L.getName())
},commit:function(L){L.renameNode(this.getValue())
}},C,{type:"text",id:"rowSpan",label:I.rowSpan,"default":"",validate:G.integer(I.invalidRowSpan),setup:function(M){var L=parseInt(M.getAttribute("rowSpan"),10);
if(L&&L!=1){this.setValue(L)
}},commit:function(M){var L=parseInt(this.getValue(),10);
if(L&&L!=1){M.setAttribute("rowSpan",this.getValue())
}else{M.removeAttribute("rowSpan")
}}},{type:"text",id:"colSpan",label:I.colSpan,"default":"",validate:G.integer(I.invalidColSpan),setup:function(M){var L=parseInt(M.getAttribute("colSpan"),10);
if(L&&L!=1){this.setValue(L)
}},commit:function(M){var L=parseInt(this.getValue(),10);
if(L&&L!=1){M.setAttribute("colSpan",this.getValue())
}else{M.removeAttribute("colSpan")
}}},C,{type:"hbox",padding:0,widths:["60%","40%"],children:[{type:"text",id:"bgColor",label:I.bgColor,"default":"",setup:function(M){var L=M.getAttribute("bgColor"),N=M.getStyle("background-color");
this.setValue(N||L)
},commit:function(M){var L=this.getValue();
if(L){M.setStyle("background-color",this.getValue())
}else{M.removeStyle("background-color")
}M.removeAttribute("bgColor")
}},{type:"button",id:"bgColorChoose","class":"colorChooser",label:I.chooseColor,onLoad:function(){this.getElement().getParent().setStyle("vertical-align","bottom")
},onClick:function(){var L=this;
A("colordialog",function(M){L.getDialog().getContentElement("info","bgColor").setValue(M.getContentElement("picker","selectedColor").getValue())
})
}}]},C,{type:"hbox",padding:0,widths:["60%","40%"],children:[{type:"text",id:"borderColor",label:I.borderColor,"default":"",setup:function(M){var L=M.getAttribute("borderColor"),N=M.getStyle("border-color");
this.setValue(N||L)
},commit:function(M){var L=this.getValue();
if(L){M.setStyle("border-color",this.getValue())
}else{M.removeStyle("border-color")
}M.removeAttribute("borderColor")
}},{type:"button",id:"borderColorChoose","class":"colorChooser",label:I.chooseColor,style:(B?"margin-right":"margin-left")+": 10px",onLoad:function(){this.getElement().getParent().setStyle("vertical-align","bottom")
},onClick:function(){var L=this;
A("colordialog",function(M){L.getDialog().getContentElement("info","borderColor").setValue(M.getContentElement("picker","selectedColor").getValue())
})
}}]}]}]}]}],onShow:function(){var L=this;
L.cells=CKEDITOR.plugins.tabletools.getSelectedCells(L._.editor.getSelection());
L.setupContent(L.cells[0])
},onOk:function(){var N=this;
var M=N._.editor.getSelection(),L=M.createBookmarks(),P=N.cells;
for(var O=0;
O<P.length;
O++){N.commitContent(P[O])
}N._.editor.forceNextSelectionCheck();
M.selectBookmarks(L);
N._.editor.selectionChange()
}}
});