(function(){function A(B){B.data.mode="html"
}CKEDITOR.plugins.add("pastefromword",{init:function(D){var B=0;
var C=function(E){E&&E.removeListener();
D.removeListener("beforePaste",A);
B&&setTimeout(function(){B=0
},0)
};
D.addCommand("pastefromword",{canUndo:false,exec:function(){B=1;
D.on("beforePaste",A);
if(D.execCommand("paste","html")===false){D.on("dialogShow",function(E){E.removeListener();
E.data.on("cancel",C)
});
D.on("dialogHide",function(E){E.data.removeListener("cancel",C)
})
}D.on("afterPaste",C)
}});
D.ui.addButton("PasteFromWord",{label:D.lang.pastefromword.toolbar,command:"pastefromword"});
D.on("pasteState",function(E){D.getCommand("pastefromword").setState(E.data)
});
D.on("paste",function(E){var G=E.data,H;
if((H=G.html)&&(B||(/(class=\"?Mso|style=\"[^\"]*\bmso\-|w:WordDocument)/).test(H))){var F=this.loadFilterRules(function(){if(F){D.fire("paste",G)
}else{if(!D.config.pasteFromWordPromptCleanup||(B||confirm(D.lang.pastefromword.confirmCleanup))){G.html=CKEDITOR.cleanWord(H,D)
}}});
F&&E.cancel()
}},this)
},loadFilterRules:function(D){var B=CKEDITOR.cleanWord;
if(B){D()
}else{var C=CKEDITOR.getUrl(CKEDITOR.config.pasteFromWordCleanupFile||(this.path+"filter/default.js"));
CKEDITOR.scriptLoader.load(C,D,null,true)
}return !B
},requires:["clipboard"]})
})();