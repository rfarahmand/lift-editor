;
CKEDITOR.plugins.add("find",{init:function(B){var A=CKEDITOR.plugins.find;
B.ui.addButton("Find",{label:B.lang.findAndReplace.find,command:"find"});
var D=B.addCommand("find",new CKEDITOR.dialogCommand("find"));
D.canUndo=false;
D.readOnly=1;
B.ui.addButton("Replace",{label:B.lang.findAndReplace.replace,command:"replace"});
var C=B.addCommand("replace",new CKEDITOR.dialogCommand("replace"));
C.canUndo=false;
CKEDITOR.dialog.add("find",this.path+"dialogs/find.js");
CKEDITOR.dialog.add("replace",this.path+"dialogs/find.js")
},requires:["styles"]});
CKEDITOR.config.find_highlight={element:"span",styles:{"background-color":"#004",color:"#fff"}};