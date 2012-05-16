(function(){CKEDITOR.plugins.add("image",{init:function(C){var D="image";
CKEDITOR.dialog.add(D,this.path+"dialogs/image.js");
C.addCommand(D,new CKEDITOR.dialogCommand(D));
C.ui.addButton("Image",{label:C.lang.common.image,command:D});
C.on("doubleclick",function(E){var F=E.data.element;
if(F.is("img")&&!F.data("cke-realelement")&&!F.isReadOnly()){E.data.dialog="image"
}});
if(C.addMenuItems){C.addMenuItems({image:{label:C.lang.image.menu,command:"image",group:"image"}})
}if(C.contextMenu){C.contextMenu.addListener(function(E,F){if(A(C,E)){return{image:CKEDITOR.TRISTATE_OFF}
}})
}},afterInit:function(D){C("left");
C("right");
C("center");
C("block");
function C(E){var F=D.getCommand("justify"+E);
if(F){if(E=="left"||E=="right"){F.on("exec",function(G){var H=A(D),I;
if(H){I=B(H);
if(I==E){H.removeStyle("float");
if(E==B(H)){H.removeAttribute("align")
}}else{H.setStyle("float",E)
}G.cancel()
}})
}F.on("refresh",function(G){var H=A(D),I;
if(H){I=B(H);
this.setState((I==E)?CKEDITOR.TRISTATE_ON:(E=="right"||E=="left")?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED);
G.cancel()
}})
}}}});
function A(D,C){if(!C){var E=D.getSelection();
C=(E.getType()==CKEDITOR.SELECTION_ELEMENT)&&E.getSelectedElement()
}if(C&&C.is("img")&&!C.data("cke-realelement")&&!C.isReadOnly()){return C
}}function B(C){var D=C.getStyle("float");
if(D=="inherit"||D=="none"){D=0
}if(!D){D=C.getAttribute("align")
}return D
}})();
CKEDITOR.config.image_removeLinkByEmptyURL=true;