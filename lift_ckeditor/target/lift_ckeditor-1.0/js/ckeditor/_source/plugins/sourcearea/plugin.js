;
CKEDITOR.plugins.add("sourcearea",{requires:["editingblock"],init:function(A){var C=CKEDITOR.plugins.sourcearea,B=CKEDITOR.document.getWindow();
A.on("editingBlockReady",function(){var D,E;
A.addMode("source",{load:function(G,I){if(CKEDITOR.env.ie&&CKEDITOR.env.version<8){G.setStyle("position","relative")
}A.textarea=D=new CKEDITOR.dom.element("textarea");
D.setAttributes({dir:"ltr",tabIndex:CKEDITOR.env.webkit?-1:A.tabIndex,role:"textbox","aria-label":A.lang.editorTitle.replace("%1",A.name)});
D.addClass("cke_source");
D.addClass("cke_enable_context_menu");
A.readOnly&&D.setAttribute("readOnly","readonly");
var H={width:CKEDITOR.env.ie7Compat?"99%":"100%",height:"100%",resize:"none",outline:"none","text-align":"left"};
if(CKEDITOR.env.ie){E=function(){D.hide();
D.setStyle("height",G.$.clientHeight+"px");
D.setStyle("width",G.$.clientWidth+"px");
D.show()
};
A.on("resize",E);
B.on("resize",E);
setTimeout(E,0)
}G.setHtml("");
G.append(D);
D.setStyles(H);
A.fire("ariaWidget",D);
D.on("blur",function(){A.focusManager.blur()
});
D.on("focus",function(){A.focusManager.focus()
});
A.mayBeDirty=true;
this.loadData(I);
var F=A.keystrokeHandler;
if(F){F.attach(D)
}setTimeout(function(){A.mode="source";
A.fire("mode",{previousMode:A._.previousMode})
},(CKEDITOR.env.gecko||CKEDITOR.env.webkit)?100:0)
},loadData:function(F){D.setValue(F);
A.fire("dataReady")
},getData:function(){return D.getValue()
},getSnapshotData:function(){return D.getValue()
},unload:function(F){D.clearCustomData();
A.textarea=D=null;
if(E){A.removeListener("resize",E);
B.removeListener("resize",E)
}if(CKEDITOR.env.ie&&CKEDITOR.env.version<8){F.removeStyle("position")
}},focus:function(){D.focus()
}})
});
A.on("readOnly",function(){if(A.mode=="source"){if(A.readOnly){A.textarea.setAttribute("readOnly","readonly")
}else{A.textarea.removeAttribute("readOnly")
}}});
A.addCommand("source",C.commands.source);
if(A.ui.addButton){A.ui.addButton("Source",{label:A.lang.source,command:"source"})
}A.on("mode",function(){A.getCommand("source").setState(A.mode=="source"?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF)
})
}});
CKEDITOR.plugins.sourcearea={commands:{source:{modes:{wysiwyg:1,source:1},editorFocus:false,readOnly:1,exec:function(A){if(A.mode=="wysiwyg"){A.fire("saveSnapshot")
}A.getCommand("source").setState(CKEDITOR.TRISTATE_DISABLED);
A.setMode(A.mode=="source"?"wysiwyg":"source")
},canUndo:false}}};