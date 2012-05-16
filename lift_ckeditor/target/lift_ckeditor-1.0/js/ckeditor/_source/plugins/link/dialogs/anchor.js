;
CKEDITOR.dialog.add("anchor",function(B){var C=function(D){this._.selectedElement=D;
var E=D.data("cke-saved-name");
this.setValueOf("info","txtName",E||"")
};
function A(E,D){return E.createFakeElement(D,"cke_anchor","anchor")
}return{title:B.lang.anchor.title,minWidth:300,minHeight:60,onOk:function(){var G=this.getValueOf("info","txtName");
var E={name:G,"data-cke-saved-name":G};
if(this._.selectedElement){if(this._.selectedElement.data("cke-realelement")){var J=A(B,B.document.createElement("a",{attributes:E}));
J.replace(this._.selectedElement)
}else{this._.selectedElement.setAttributes(E)
}}else{var I=B.getSelection(),D=I&&I.getRanges()[0];
if(D.collapsed){if(CKEDITOR.plugins.link.synAnchorSelector){E["class"]="cke_anchor_empty"
}if(CKEDITOR.plugins.link.emptyAnchorFix){E.contenteditable="false";
E["data-cke-editable"]=1
}var F=B.document.createElement("a",{attributes:E});
if(CKEDITOR.plugins.link.fakeAnchor){F=A(B,F)
}D.insertNode(F)
}else{if(CKEDITOR.env.ie&&CKEDITOR.env.version<9){E["class"]="cke_anchor"
}var H=new CKEDITOR.style({element:"a",attributes:E});
H.type=CKEDITOR.STYLE_INLINE;
H.apply(B.document)
}}},onHide:function(){delete this._.selectedElement
},onShow:function(){var F=B.getSelection(),G=F.getSelectedElement(),D;
if(G){if(CKEDITOR.plugins.link.fakeAnchor){var E=CKEDITOR.plugins.link.tryRestoreFakeAnchor(B,G);
E&&C.call(this,E);
this._.selectedElement=G
}else{if(G.is("a")&&G.hasAttribute("name")){C.call(this,G)
}}}else{D=CKEDITOR.plugins.link.getSelectedLink(B);
if(D){C.call(this,D);
F.selectElement(D)
}}this.getContentElement("info","txtName").focus()
},contents:[{id:"info",label:B.lang.anchor.title,accessKey:"I",elements:[{type:"text",id:"txtName",label:B.lang.anchor.name,required:true,validate:function(){if(!this.getValue()){alert(B.lang.anchor.errorName);
return false
}return true
}}]}]}
});