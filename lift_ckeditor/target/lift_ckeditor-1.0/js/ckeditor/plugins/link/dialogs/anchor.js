;
CKEDITOR.dialog.add("anchor",function(B){var A=function(E){this._.selectedElement=E;
var D=E.data("cke-saved-name");
this.setValueOf("info","txtName",D||"")
};
function C(E,D){return E.createFakeElement(D,"cke_anchor","anchor")
}return{title:B.lang.anchor.title,minWidth:300,minHeight:60,onOk:function(){var D=this;
var K=D.getValueOf("info","txtName"),J={name:K,"data-cke-saved-name":K};
if(D._.selectedElement){if(D._.selectedElement.data("cke-realelement")){var I=C(B,B.document.createElement("a",{attributes:J}));
I.replace(D._.selectedElement)
}else{D._.selectedElement.setAttributes(J)
}}else{var H=B.getSelection(),G=H&&H.getRanges()[0];
if(G.collapsed){if(CKEDITOR.plugins.link.synAnchorSelector){J["class"]="cke_anchor_empty"
}if(CKEDITOR.plugins.link.emptyAnchorFix){J.contenteditable="false";
J["data-cke-editable"]=1
}var F=B.document.createElement("a",{attributes:J});
if(CKEDITOR.plugins.link.fakeAnchor){F=C(B,F)
}G.insertNode(F)
}else{if(CKEDITOR.env.ie&&CKEDITOR.env.version<9){J["class"]="cke_anchor"
}var E=new CKEDITOR.style({element:"a",attributes:J});
E.type=CKEDITOR.STYLE_INLINE;
E.apply(B.document)
}}},onHide:function(){delete this._.selectedElement
},onShow:function(){var D=this;
var H=B.getSelection(),G=H.getSelectedElement(),F;
if(G){if(CKEDITOR.plugins.link.fakeAnchor){var E=CKEDITOR.plugins.link.tryRestoreFakeAnchor(B,G);
E&&A.call(D,E);
D._.selectedElement=G
}else{if(G.is("a")&&G.hasAttribute("name")){A.call(D,G)
}}}else{F=CKEDITOR.plugins.link.getSelectedLink(B);
if(F){A.call(D,F);
H.selectElement(F)
}}D.getContentElement("info","txtName").focus()
},contents:[{id:"info",label:B.lang.anchor.title,accessKey:"I",elements:[{type:"text",id:"txtName",label:B.lang.anchor.name,required:true,validate:function(){if(!this.getValue()){alert(B.lang.anchor.errorName);
return false
}return true
}}]}]}
});