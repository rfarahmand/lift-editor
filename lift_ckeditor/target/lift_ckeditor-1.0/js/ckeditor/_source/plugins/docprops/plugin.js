;
CKEDITOR.plugins.add("docprops",{init:function(A){var B=new CKEDITOR.dialogCommand("docProps");
B.modes={wysiwyg:A.config.fullPage};
A.addCommand("docProps",B);
CKEDITOR.dialog.add("docProps",this.path+"dialogs/docprops.js");
A.ui.addButton("DocProps",{label:A.lang.docprops.label,command:"docProps"})
}});