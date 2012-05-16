(function(){function C(G,F){var E;
try{E=G.getSelection().getRanges()[0]
}catch(H){return null
}E.shrink(CKEDITOR.SHRINK_TEXT);
return E.getCommonAncestor().getAscendant(F,1)
}var B=function(E){return E.type==CKEDITOR.NODE_ELEMENT&&E.is("li")
};
var A={a:"lower-alpha",A:"upper-alpha",i:"lower-roman",I:"upper-roman","1":"decimal",disc:"disc",circle:"circle",square:"square"};
function D(G,F){var H=G.lang.list;
if(F=="bulletedListStyle"){return{title:H.bulletedTitle,minWidth:300,minHeight:50,contents:[{id:"info",accessKey:"I",elements:[{type:"select",label:H.type,id:"type",align:"center",style:"width:150px",items:[[H.notset,""],[H.circle,"circle"],[H.disc,"disc"],[H.square,"square"]],setup:function(I){var J=I.getStyle("list-style-type")||A[I.getAttribute("type")]||I.getAttribute("type")||"";
this.setValue(J)
},commit:function(I){var J=this.getValue();
if(J){I.setStyle("list-style-type",J)
}else{I.removeStyle("list-style-type")
}}}]}],onShow:function(){var J=this.getParentEditor(),I=C(J,"ul");
I&&this.setupContent(I)
},onOk:function(){var J=this.getParentEditor(),I=C(J,"ul");
I&&this.commitContent(I)
}}
}else{if(F=="numberedListStyle"){var E=[[H.notset,""],[H.lowerRoman,"lower-roman"],[H.upperRoman,"upper-roman"],[H.lowerAlpha,"lower-alpha"],[H.upperAlpha,"upper-alpha"],[H.decimal,"decimal"]];
if(!CKEDITOR.env.ie||CKEDITOR.env.version>7){E.concat([[H.armenian,"armenian"],[H.decimalLeadingZero,"decimal-leading-zero"],[H.georgian,"georgian"],[H.lowerGreek,"lower-greek"]])
}return{title:H.numberedTitle,minWidth:300,minHeight:50,contents:[{id:"info",accessKey:"I",elements:[{type:"hbox",widths:["25%","75%"],children:[{label:H.start,type:"text",id:"start",validate:CKEDITOR.dialog.validate.integer(H.validateStartNumber),setup:function(I){var J=I.getFirst(B).getAttribute("value")||I.getAttribute("start")||1;
J&&this.setValue(J)
},commit:function(J){var M=J.getFirst(B);
var K=M.getAttribute("value")||J.getAttribute("start")||1;
J.getFirst(B).removeAttribute("value");
var N=parseInt(this.getValue(),10);
if(isNaN(N)){J.removeAttribute("start")
}else{J.setAttribute("start",N)
}var I=M,O=K,L=isNaN(N)?1:N;
while((I=I.getNext(B))&&O++){if(I.getAttribute("value")==O){I.setAttribute("value",L+O-K)
}}}},{type:"select",label:H.type,id:"type",style:"width: 100%;",items:E,setup:function(I){var J=I.getStyle("list-style-type")||A[I.getAttribute("type")]||I.getAttribute("type")||"";
this.setValue(J)
},commit:function(I){var J=this.getValue();
if(J){I.setStyle("list-style-type",J)
}else{I.removeStyle("list-style-type")
}}}]}]}],onShow:function(){var J=this.getParentEditor(),I=C(J,"ol");
I&&this.setupContent(I)
},onOk:function(){var J=this.getParentEditor(),I=C(J,"ol");
I&&this.commitContent(I)
}}
}}}CKEDITOR.dialog.add("numberedListStyle",function(E){return D(E,"numberedListStyle")
});
CKEDITOR.dialog.add("bulletedListStyle",function(E){return D(E,"bulletedListStyle")
})
})();