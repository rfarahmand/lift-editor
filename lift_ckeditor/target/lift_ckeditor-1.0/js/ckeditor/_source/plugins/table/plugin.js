;
CKEDITOR.plugins.add("table",{init:function(A){var B=CKEDITOR.plugins.table,C=A.lang.table;
A.addCommand("table",new CKEDITOR.dialogCommand("table"));
A.addCommand("tableProperties",new CKEDITOR.dialogCommand("tableProperties"));
A.ui.addButton("Table",{label:C.toolbar,command:"table"});
CKEDITOR.dialog.add("table",this.path+"dialogs/table.js");
CKEDITOR.dialog.add("tableProperties",this.path+"dialogs/table.js");
if(A.addMenuItems){A.addMenuItems({table:{label:C.menu,command:"tableProperties",group:"table",order:5},tabledelete:{label:C.deleteTable,command:"tableDelete",group:"table",order:1}})
}A.on("doubleclick",function(D){var E=D.data.element;
if(E.is("table")){D.data.dialog="tableProperties"
}});
if(A.contextMenu){A.contextMenu.addListener(function(D,E){if(!D||D.isReadOnly()){return null
}var F=D.hasAscendant("table",1);
if(F){return{tabledelete:CKEDITOR.TRISTATE_OFF,table:CKEDITOR.TRISTATE_OFF}
}return null
})
}}});