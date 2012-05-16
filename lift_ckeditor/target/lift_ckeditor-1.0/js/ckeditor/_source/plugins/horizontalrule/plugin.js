(function(){var B={canUndo:false,exec:function(F){var E=F.document.createElement("hr"),C=new CKEDITOR.dom.range(F.document);
F.insertElement(E);
C.moveToPosition(E,CKEDITOR.POSITION_AFTER_END);
var D=E.getNext();
if(!D||D.type==CKEDITOR.NODE_ELEMENT&&!D.isEditable()){C.fixBlock(true,F.config.enterMode==CKEDITOR.ENTER_DIV?"div":"p")
}C.select()
}};
var A="horizontalrule";
CKEDITOR.plugins.add(A,{init:function(C){C.addCommand(A,B);
C.ui.addButton("HorizontalRule",{label:C.lang.horizontalrule,command:A})
}})
})();