﻿;
CKEDITOR.plugins.colordialog={init:function(A){A.addCommand("colordialog",new CKEDITOR.dialogCommand("colordialog"));
CKEDITOR.dialog.add("colordialog",this.path+"dialogs/colordialog.js")
}};
CKEDITOR.plugins.add("colordialog",CKEDITOR.plugins.colordialog);