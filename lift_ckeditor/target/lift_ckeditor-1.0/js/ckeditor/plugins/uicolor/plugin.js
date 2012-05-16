;
CKEDITOR.plugins.add("uicolor",{requires:["dialog"],lang:["bg","cs","cy","da","de","el","en","eo","et","fa","fi","fr","he","hr","it","mk","nb","nl","no","pl","tr","ug","uk","vi","zh-cn"],init:function(A){if(CKEDITOR.env.ie6Compat){return 
}A.addCommand("uicolor",new CKEDITOR.dialogCommand("uicolor"));
A.ui.addButton("UIColor",{label:A.lang.uicolor.title,command:"uicolor",icon:this.path+"uicolor.gif"});
CKEDITOR.dialog.add("uicolor",this.path+"dialogs/uicolor.js");
CKEDITOR.scriptLoader.load(CKEDITOR.getUrl("plugins/uicolor/yui/yui.js"));
A.element.getDocument().appendStyleSheet(CKEDITOR.getUrl("plugins/uicolor/yui/assets/yui.css"))
}});