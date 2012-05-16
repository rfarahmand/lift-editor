(function(){var A;
CKEDITOR.plugins.add("editingblock",{init:function(B){if(!B.config.editingBlock){return 
}B.on("themeSpace",function(C){if(C.data.space=="contents"){C.data.html+="<br>"
}});
B.on("themeLoaded",function(){B.fireOnce("editingBlockReady")
});
B.on("uiReady",function(){B.setMode(B.config.startupMode)
});
B.on("afterSetData",function(){if(!A){function C(){A=true;
B.getMode().loadData(B.getData());
A=false
}if(B.mode){C()
}else{B.on("mode",function(){if(B.mode){C();
B.removeListener("mode",arguments.callee)
}})
}}});
B.on("beforeGetData",function(){if(!A&&B.mode){A=true;
B.setData(B.getMode().getData(),null,1);
A=false
}});
B.on("getSnapshot",function(C){if(B.mode){C.data=B.getMode().getSnapshotData()
}});
B.on("loadSnapshot",function(C){if(B.mode){B.getMode().loadSnapshotData(C.data)
}});
B.on("mode",function(C){C.removeListener();
CKEDITOR.env.webkit&&B.container.on("focus",function(){B.focus()
});
if(B.config.startupFocus){B.focus()
}setTimeout(function(){B.fireOnce("instanceReady");
CKEDITOR.fire("instanceReady",null,B)
},0)
});
B.on("destroy",function(){if(this.mode){this._.modes[this.mode].unload(this.getThemeSpace("contents"))
}})
}});
CKEDITOR.editor.prototype.mode="";
CKEDITOR.editor.prototype.addMode=function(C,B){B.name=C;
(this._.modes||(this._.modes={}))[C]=B
};
CKEDITOR.editor.prototype.setMode=function(G){this.fire("beforeSetMode",{newMode:G});
var F,C=this.getThemeSpace("contents"),E=this.checkDirty();
if(this.mode){if(G==this.mode){return 
}this._.previousMode=this.mode;
this.fire("beforeModeUnload");
var D=this.getMode();
F=D.getData();
D.unload(C);
this.mode=""
}C.setHtml("");
var B=this.getMode(G);
if(!B){throw'[CKEDITOR.editor.setMode] Unknown mode "'+G+'".'
}if(!E){this.on("mode",function(){this.resetDirty();
this.removeListener("mode",arguments.callee)
})
}B.load(C,(typeof F)!="string"?this.getData():F)
};
CKEDITOR.editor.prototype.getMode=function(B){return this._.modes&&this._.modes[B||this.mode]
};
CKEDITOR.editor.prototype.focus=function(){this.forceNextSelectionCheck();
var B=this.getMode();
if(B){B.focus()
}}
})();
CKEDITOR.config.startupMode="wysiwyg";
CKEDITOR.config.editingBlock=true;