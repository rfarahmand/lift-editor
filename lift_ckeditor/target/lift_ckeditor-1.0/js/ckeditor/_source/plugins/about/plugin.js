;
CKEDITOR.plugins.add("about",{requires:["dialog"],init:function(A){var B=A.addCommand("about",new CKEDITOR.dialogCommand("about"));
B.modes={wysiwyg:1,source:1};
B.canUndo=false;
B.readOnly=1;
A.ui.addButton("About",{label:A.lang.about.title,command:"about"});
CKEDITOR.dialog.add("about",this.path+"dialogs/about.js")
}});