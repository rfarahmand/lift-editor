(function(){var A=/\[\[[^\]]+\]\]/g;
CKEDITOR.plugins.add("placeholder",{requires:["dialog"],lang:["bg","cs","cy","da","de","el","en","eo","et","fa","fi","fr","he","hr","it","nb","nl","no","pl","tr","ug","uk","vi","zh-cn"],init:function(B){var C=B.lang.placeholder;
B.addCommand("createplaceholder",new CKEDITOR.dialogCommand("createplaceholder"));
B.addCommand("editplaceholder",new CKEDITOR.dialogCommand("editplaceholder"));
B.ui.addButton("CreatePlaceholder",{label:C.toolbar,command:"createplaceholder",icon:this.path+"placeholder.gif"});
if(B.addMenuItems){B.addMenuGroup("placeholder",20);
B.addMenuItems({editplaceholder:{label:C.edit,command:"editplaceholder",group:"placeholder",order:1,icon:this.path+"placeholder.gif"}});
if(B.contextMenu){B.contextMenu.addListener(function(E,D){if(!E||!E.data("cke-placeholder")){return null
}return{editplaceholder:CKEDITOR.TRISTATE_OFF}
})
}}B.on("doubleclick",function(D){if(CKEDITOR.plugins.placeholder.getSelectedPlaceHoder(B)){D.data.dialog="editplaceholder"
}});
B.addCss(".cke_placeholder{background-color: #ffff00;"+(CKEDITOR.env.gecko?"cursor: default;":"")+"}");
B.on("contentDom",function(){B.document.getBody().on("resizestart",function(D){if(B.getSelection().getSelectedElement().data("cke-placeholder")){D.data.preventDefault()
}})
});
CKEDITOR.dialog.add("createplaceholder",this.path+"dialogs/placeholder.js");
CKEDITOR.dialog.add("editplaceholder",this.path+"dialogs/placeholder.js")
},afterInit:function(B){var E=B.dataProcessor,D=E&&E.dataFilter,C=E&&E.htmlFilter;
if(D){D.addRules({text:function(F){return F.replace(A,function(G){return CKEDITOR.plugins.placeholder.createPlaceholder(B,null,G,1)
})
}})
}if(C){C.addRules({elements:{span:function(F){if(F.attributes&&F.attributes["data-cke-placeholder"]){delete F.name
}}}})
}}})
})();
CKEDITOR.plugins.placeholder={createPlaceholder:function(B,A,E,D){var C=new CKEDITOR.dom.element("span",B.document);
C.setAttributes({contentEditable:"false","data-cke-placeholder":1,"class":"cke_placeholder"});
E&&C.setText(E);
if(D){return C.getOuterHtml()
}if(A){if(CKEDITOR.env.ie){C.insertAfter(A);
setTimeout(function(){A.remove();
C.focus()
},10)
}else{C.replace(A)
}}else{B.insertElement(C)
}return null
},getSelectedPlaceHoder:function(B){var A=B.getSelection().getRanges()[0];
A.shrink(CKEDITOR.SHRINK_TEXT);
var C=A.startContainer;
while(C&&!(C.type==CKEDITOR.NODE_ELEMENT&&C.data("cke-placeholder"))){C=C.getParent()
}return C
}};