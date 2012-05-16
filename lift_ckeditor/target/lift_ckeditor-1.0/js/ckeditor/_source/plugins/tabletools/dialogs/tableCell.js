;
CKEDITOR.dialog.add("cellProperties",function(D){var A=D.lang.table,C=A.cell,B=D.lang.common,H=CKEDITOR.dialog.validate,J=/^(\d+(?:\.\d+)?)(px|%)$/,I=/^(\d+(?:\.\d+)?)px$/,F=CKEDITOR.tools.bind,E={type:"html",html:"&nbsp;"},G=D.lang.dir=="rtl";
function K(O,Q){var N=function(){L(this);
Q(this,this._.parentDialog);
this._.parentDialog.changeFocus()
};
var P=function(){L(this);
this._.parentDialog.changeFocus()
};
var L=function(R){R.removeListener("ok",N);
R.removeListener("cancel",P)
};
var M=function(R){R.on("ok",N);
R.on("cancel",P)
};
D.execCommand(O);
if(D._.storedDialogs.colordialog){M(D._.storedDialogs.colordialog)
}else{CKEDITOR.on("dialogDefinition",function(S){if(S.data.name!=O){return 
}var R=S.data.definition;
S.removeListener();
R.onLoad=CKEDITOR.tools.override(R.onLoad,function(T){return function(){M(this);
R.onLoad=T;
if(typeof T=="function"){T.call(this)
}}
})
})
}}return{title:C.title,minWidth:CKEDITOR.env.ie&&CKEDITOR.env.quirks?450:410,minHeight:CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?230:200,contents:[{id:"info",label:C.title,accessKey:"I",elements:[{type:"hbox",widths:["40%","5%","40%"],children:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["70%","30%"],children:[{type:"text",id:"width",width:"100px",label:B.width,validate:H.number(C.invalidWidth),onLoad:function(){var M=this.getDialog().getContentElement("info","widthType"),L=M.getElement(),O=this.getInputElement(),N=O.getAttribute("aria-labelledby");
O.setAttribute("aria-labelledby",[N,L.$.id].join(" "))
},setup:function(L){var N=parseInt(L.getAttribute("width"),10),M=parseInt(L.getStyle("width"),10);
!isNaN(N)&&this.setValue(N);
!isNaN(M)&&this.setValue(M)
},commit:function(L){var N=parseInt(this.getValue(),10),M=this.getDialog().getValueOf("info","widthType");
if(!isNaN(N)){L.setStyle("width",N+M)
}else{L.removeStyle("width")
}L.removeAttribute("width")
},"default":""},{type:"select",id:"widthType",label:D.lang.table.widthUnit,labelStyle:"visibility:hidden","default":"px",items:[[A.widthPx,"px"],[A.widthPc,"%"]],setup:function(L){var M=J.exec(L.getStyle("width")||L.getAttribute("width"));
if(M){this.setValue(M[2])
}}}]},{type:"hbox",widths:["70%","30%"],children:[{type:"text",id:"height",label:B.height,width:"100px","default":"",validate:H.number(C.invalidHeight),onLoad:function(){var N=this.getDialog().getContentElement("info","htmlHeightType"),L=N.getElement(),O=this.getInputElement(),M=O.getAttribute("aria-labelledby");
O.setAttribute("aria-labelledby",[M,L.$.id].join(" "))
},setup:function(N){var L=parseInt(N.getAttribute("height"),10),M=parseInt(N.getStyle("height"),10);
!isNaN(L)&&this.setValue(L);
!isNaN(M)&&this.setValue(M)
},commit:function(L){var M=parseInt(this.getValue(),10);
if(!isNaN(M)){L.setStyle("height",CKEDITOR.tools.cssLength(M))
}else{L.removeStyle("height")
}L.removeAttribute("height")
}},{id:"htmlHeightType",type:"html",html:"<br />"+A.widthPx}]},E,{type:"select",id:"wordWrap",label:C.wordWrap,"default":"yes",items:[[C.yes,"yes"],[C.no,"no"]],setup:function(L){var N=L.getAttribute("noWrap"),M=L.getStyle("white-space");
if(M=="nowrap"||N){this.setValue("no")
}},commit:function(L){if(this.getValue()=="no"){L.setStyle("white-space","nowrap")
}else{L.removeStyle("white-space")
}L.removeAttribute("noWrap")
}},E,{type:"select",id:"hAlign",label:C.hAlign,"default":"",items:[[B.notSet,""],[B.alignLeft,"left"],[B.alignCenter,"center"],[B.alignRight,"right"]],setup:function(M){var N=M.getAttribute("align"),L=M.getStyle("text-align");
this.setValue(L||N||"")
},commit:function(L){var M=this.getValue();
if(M){L.setStyle("text-align",M)
}else{L.removeStyle("text-align")
}L.removeAttribute("align")
}},{type:"select",id:"vAlign",label:C.vAlign,"default":"",items:[[B.notSet,""],[B.alignTop,"top"],[B.alignMiddle,"middle"],[B.alignBottom,"bottom"],[C.alignBaseline,"baseline"]],setup:function(L){var M=L.getAttribute("vAlign"),N=L.getStyle("vertical-align");
switch(N){case"top":case"middle":case"bottom":case"baseline":break;
default:N=""
}this.setValue(N||M||"")
},commit:function(L){var M=this.getValue();
if(M){L.setStyle("vertical-align",M)
}else{L.removeStyle("vertical-align")
}L.removeAttribute("vAlign")
}}]},E,{type:"vbox",padding:0,children:[{type:"select",id:"cellType",label:C.cellType,"default":"td",items:[[C.data,"td"],[C.header,"th"]],setup:function(L){this.setValue(L.getName())
},commit:function(L){L.renameNode(this.getValue())
}},E,{type:"text",id:"rowSpan",label:C.rowSpan,"default":"",validate:H.integer(C.invalidRowSpan),setup:function(L){var M=parseInt(L.getAttribute("rowSpan"),10);
if(M&&M!=1){this.setValue(M)
}},commit:function(L){var M=parseInt(this.getValue(),10);
if(M&&M!=1){L.setAttribute("rowSpan",this.getValue())
}else{L.removeAttribute("rowSpan")
}}},{type:"text",id:"colSpan",label:C.colSpan,"default":"",validate:H.integer(C.invalidColSpan),setup:function(M){var L=parseInt(M.getAttribute("colSpan"),10);
if(L&&L!=1){this.setValue(L)
}},commit:function(L){var M=parseInt(this.getValue(),10);
if(M&&M!=1){L.setAttribute("colSpan",this.getValue())
}else{L.removeAttribute("colSpan")
}}},E,{type:"hbox",padding:0,widths:["60%","40%"],children:[{type:"text",id:"bgColor",label:C.bgColor,"default":"",setup:function(M){var L=M.getAttribute("bgColor"),N=M.getStyle("background-color");
this.setValue(N||L)
},commit:function(L){var M=this.getValue();
if(M){L.setStyle("background-color",this.getValue())
}else{L.removeStyle("background-color")
}L.removeAttribute("bgColor")
}},{type:"button",id:"bgColorChoose","class":"colorChooser",label:C.chooseColor,onLoad:function(){this.getElement().getParent().setStyle("vertical-align","bottom")
},onClick:function(){var L=this;
K("colordialog",function(M){L.getDialog().getContentElement("info","bgColor").setValue(M.getContentElement("picker","selectedColor").getValue())
})
}}]},E,{type:"hbox",padding:0,widths:["60%","40%"],children:[{type:"text",id:"borderColor",label:C.borderColor,"default":"",setup:function(M){var L=M.getAttribute("borderColor"),N=M.getStyle("border-color");
this.setValue(N||L)
},commit:function(L){var M=this.getValue();
if(M){L.setStyle("border-color",this.getValue())
}else{L.removeStyle("border-color")
}L.removeAttribute("borderColor")
}},{type:"button",id:"borderColorChoose","class":"colorChooser",label:C.chooseColor,style:(G?"margin-right":"margin-left")+": 10px",onLoad:function(){this.getElement().getParent().setStyle("vertical-align","bottom")
},onClick:function(){var L=this;
K("colordialog",function(M){L.getDialog().getContentElement("info","borderColor").setValue(M.getContentElement("picker","selectedColor").getValue())
})
}}]}]}]}]}],onShow:function(){this.cells=CKEDITOR.plugins.tabletools.getSelectedCells(this._.editor.getSelection());
this.setupContent(this.cells[0])
},onOk:function(){var O=this._.editor.getSelection(),N=O.createBookmarks();
var L=this.cells;
for(var M=0;
M<L.length;
M++){this.commitContent(L[M])
}this._.editor.forceNextSelectionCheck();
O.selectBookmarks(N);
this._.editor.selectionChange()
}}
});