(function(){CKEDITOR.plugins.liststyle={requires:["dialog"],init:function(A){A.addCommand("numberedListStyle",new CKEDITOR.dialogCommand("numberedListStyle"));
CKEDITOR.dialog.add("numberedListStyle",this.path+"dialogs/liststyle.js");
A.addCommand("bulletedListStyle",new CKEDITOR.dialogCommand("bulletedListStyle"));
CKEDITOR.dialog.add("bulletedListStyle",this.path+"dialogs/liststyle.js");
if(A.addMenuItems){A.addMenuGroup("list",108);
A.addMenuItems({numberedlist:{label:A.lang.list.numberedTitle,group:"list",command:"numberedListStyle"},bulletedlist:{label:A.lang.list.bulletedTitle,group:"list",command:"bulletedListStyle"}})
}if(A.contextMenu){A.contextMenu.addListener(function(C,D){if(!C||C.isReadOnly()){return null
}while(C){var B=C.getName();
if(B=="ol"){return{numberedlist:CKEDITOR.TRISTATE_OFF}
}else{if(B=="ul"){return{bulletedlist:CKEDITOR.TRISTATE_OFF}
}}C=C.getParent()
}return null
})
}}};
CKEDITOR.plugins.add("liststyle",CKEDITOR.plugins.liststyle)
})();