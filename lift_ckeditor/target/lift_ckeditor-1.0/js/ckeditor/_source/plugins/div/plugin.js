(function(){CKEDITOR.plugins.add("div",{requires:["editingblock","domiterator","styles"],init:function(A){var B=A.lang.div;
A.addCommand("creatediv",new CKEDITOR.dialogCommand("creatediv"));
A.addCommand("editdiv",new CKEDITOR.dialogCommand("editdiv"));
A.addCommand("removediv",{exec:function(I){var J=I.getSelection(),E=J&&J.getRanges(),H,F=J.createBookmarks(),C,D=[];
function K(M){var N=new CKEDITOR.dom.elementPath(M),L=N.blockLimit,O=L.is("div")&&L;
if(O&&!O.data("cke-div-added")){D.push(O);
O.data("cke-div-added")
}}for(var G=0;
G<E.length;
G++){H=E[G];
if(H.collapsed){K(J.getStartElement())
}else{C=new CKEDITOR.dom.walker(H);
C.evaluator=K;
C.lastForward()
}}for(G=0;
G<D.length;
G++){D[G].remove(true)
}J.selectBookmarks(F)
}});
A.ui.addButton("CreateDiv",{label:B.toolbar,command:"creatediv"});
if(A.addMenuItems){A.addMenuItems({editdiv:{label:B.edit,command:"editdiv",group:"div",order:1},removediv:{label:B.remove,command:"removediv",group:"div",order:5}});
if(A.contextMenu){A.contextMenu.addListener(function(D,F){if(!D||D.isReadOnly()){return null
}var E=new CKEDITOR.dom.elementPath(D),C=E.blockLimit;
if(C&&C.getAscendant("div",true)){return{editdiv:CKEDITOR.TRISTATE_OFF,removediv:CKEDITOR.TRISTATE_OFF}
}return null
})
}}CKEDITOR.dialog.add("creatediv",this.path+"dialogs/div.js");
CKEDITOR.dialog.add("editdiv",this.path+"dialogs/div.js")
}})
})();