(function(){function B(H,G){var F;
try{F=H.getSelection().getRanges()[0]
}catch(E){return null
}F.shrink(CKEDITOR.SHRINK_TEXT);
return F.getCommonAncestor().getAscendant(G,1)
}var A=function(E){return E.type==CKEDITOR.NODE_ELEMENT&&E.is("li")
},D={a:"lower-alpha",A:"upper-alpha",i:"lower-roman",I:"upper-roman",1:"decimal",disc:"disc",circle:"circle",square:"square"};
function C(H,G){var F=H.lang.list;
if(G=="bulletedListStyle"){return{title:F.bulletedTitle,minWidth:300,minHeight:50,contents:[{id:"info",accessKey:"I",elements:[{type:"select",label:F.type,id:"type",align:"center",style:"width:150px",items:[[F.notset,""],[F.circle,"circle"],[F.disc,"disc"],[F.square,"square"]],setup:function(J){var I=J.getStyle("list-style-type")||D[J.getAttribute("type")]||J.getAttribute("type")||"";
this.setValue(I)
},commit:function(J){var I=this.getValue();
if(I){J.setStyle("list-style-type",I)
}else{J.removeStyle("list-style-type")
}}}]}],onShow:function(){var J=this.getParentEditor(),I=B(J,"ul");
I&&this.setupContent(I)
},onOk:function(){var J=this.getParentEditor(),I=B(J,"ul");
I&&this.commitContent(I)
}}
}else{if(G=="numberedListStyle"){var E=[[F.notset,""],[F.lowerRoman,"lower-roman"],[F.upperRoman,"upper-roman"],[F.lowerAlpha,"lower-alpha"],[F.upperAlpha,"upper-alpha"],[F.decimal,"decimal"]];
if(!CKEDITOR.env.ie||CKEDITOR.env.version>7){E.concat([[F.armenian,"armenian"],[F.decimalLeadingZero,"decimal-leading-zero"],[F.georgian,"georgian"],[F.lowerGreek,"lower-greek"]])
}return{title:F.numberedTitle,minWidth:300,minHeight:50,contents:[{id:"info",accessKey:"I",elements:[{type:"hbox",widths:["25%","75%"],children:[{label:F.start,type:"text",id:"start",validate:CKEDITOR.dialog.validate.integer(F.validateStartNumber),setup:function(J){var I=J.getFirst(A).getAttribute("value")||J.getAttribute("start")||1;
I&&this.setValue(I)
},commit:function(M){var L=M.getFirst(A),K=L.getAttribute("value")||M.getAttribute("start")||1;
M.getFirst(A).removeAttribute("value");
var J=parseInt(this.getValue(),10);
if(isNaN(J)){M.removeAttribute("start")
}else{M.setAttribute("start",J)
}var I=L,O=K,N=isNaN(J)?1:J;
while((I=I.getNext(A))&&O++){if(I.getAttribute("value")==O){I.setAttribute("value",N+O-K)
}}}},{type:"select",label:F.type,id:"type",style:"width: 100%;",items:E,setup:function(J){var I=J.getStyle("list-style-type")||D[J.getAttribute("type")]||J.getAttribute("type")||"";
this.setValue(I)
},commit:function(J){var I=this.getValue();
if(I){J.setStyle("list-style-type",I)
}else{J.removeStyle("list-style-type")
}}}]}]}],onShow:function(){var J=this.getParentEditor(),I=B(J,"ol");
I&&this.setupContent(I)
},onOk:function(){var J=this.getParentEditor(),I=B(J,"ol");
I&&this.commitContent(I)
}}
}}}CKEDITOR.dialog.add("numberedListStyle",function(E){return C(E,"numberedListStyle")
});
CKEDITOR.dialog.add("bulletedListStyle",function(E){return C(E,"bulletedListStyle")
})
})();