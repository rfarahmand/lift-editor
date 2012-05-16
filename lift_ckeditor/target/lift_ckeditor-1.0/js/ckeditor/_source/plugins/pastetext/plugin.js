(function(){var A={exec:function(C){var B=CKEDITOR.tools.tryThese(function(){var D=window.clipboardData.getData("Text");
if(!D){throw 0
}return D
});
if(!B){C.openDialog("pastetext");
return false
}else{C.fire("paste",{text:B})
}return true
}};
CKEDITOR.plugins.add("pastetext",{init:function(C){var B="pastetext",D=C.addCommand(B,A);
C.ui.addButton("PasteText",{label:C.lang.pasteText.button,command:B});
CKEDITOR.dialog.add(B,CKEDITOR.getUrl(this.path+"dialogs/pastetext.js"));
if(C.config.forcePasteAsPlainText){C.on("beforeCommandExec",function(E){var F=E.data.commandData;
if(E.data.name=="paste"&&F!="html"){C.execCommand("pastetext");
E.cancel()
}},null,null,0);
C.on("beforePaste",function(E){E.data.mode="text"
})
}C.on("pasteState",function(E){C.getCommand("pastetext").setState(E.data)
})
},requires:["clipboard"]})
})();