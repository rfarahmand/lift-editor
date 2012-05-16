;
CKEDITOR.plugins.add("print",{init:function(A){var B="print";
var C=A.addCommand(B,CKEDITOR.plugins.print);
A.ui.addButton("Print",{label:A.lang.print,command:B})
}});
CKEDITOR.plugins.print={exec:function(A){if(CKEDITOR.env.opera){return 
}else{if(CKEDITOR.env.gecko){A.window.$.print()
}else{A.document.$.execCommand("Print")
}}},canUndo:false,readOnly:1,modes:{wysiwyg:!(CKEDITOR.env.opera)}};