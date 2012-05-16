(function(){var B="a11yhelp",A="a11yHelp";
CKEDITOR.plugins.add(B,{availableLangs:{cs:1,cy:1,da:1,de:1,el:1,en:1,eo:1,fa:1,fi:1,fr:1,gu:1,he:1,it:1,mk:1,nb:1,nl:1,no:1,tr:1,ug:1,vi:1,"zh-cn":1},init:function(C){var D=this;
C.addCommand(A,{exec:function(){var E=C.langCode;
E=D.availableLangs[E]?E:"en";
CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(D.path+"lang/"+E+".js"),function(){CKEDITOR.tools.extend(C.lang,D.langEntries[E]);
C.openDialog(A)
})
},modes:{wysiwyg:1,source:1},readOnly:1,canUndo:false});
CKEDITOR.dialog.add(A,this.path+"dialogs/a11yhelp.js")
}})
})();