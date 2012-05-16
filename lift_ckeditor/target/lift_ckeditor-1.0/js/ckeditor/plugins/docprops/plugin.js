;
CKEDITOR.plugins.add("docprops",{init:function(B){var A=new CKEDITOR.dialogCommand("docProps");
A.modes={wysiwyg:B.config.fullPage};
B.addCommand("docProps",A);
CKEDITOR.dialog.add("docProps",this.path+"dialogs/docprops.js");
B.ui.addButton("DocProps",{label:B.lang.docprops.label,command:"docProps"})
}});