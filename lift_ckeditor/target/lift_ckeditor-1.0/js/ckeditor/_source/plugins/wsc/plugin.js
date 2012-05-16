;
CKEDITOR.plugins.add("wsc",{requires:["dialog"],init:function(B){var A="checkspell";
var C=B.addCommand(A,new CKEDITOR.dialogCommand(A));
C.modes={wysiwyg:(!CKEDITOR.env.opera&&!CKEDITOR.env.air&&document.domain==window.location.hostname)};
B.ui.addButton("SpellChecker",{label:B.lang.spellCheck.toolbar,command:A});
CKEDITOR.dialog.add(A,this.path+"dialogs/wsc.js")
}});
CKEDITOR.config.wsc_customerId=CKEDITOR.config.wsc_customerId||"1:ua3xw1-2XyGJ3-GWruD3-6OFNT1-oXcuB1-nR6Bp4-hgQHc-EcYng3-sdRXG3-NOfFk";
CKEDITOR.config.wsc_customLoaderScript=CKEDITOR.config.wsc_customLoaderScript||null;