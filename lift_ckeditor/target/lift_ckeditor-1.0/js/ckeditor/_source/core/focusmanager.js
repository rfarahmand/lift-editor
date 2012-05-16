;
CKEDITOR.focusManager=function(A){if(A.focusManager){return A.focusManager
}this.hasFocus=false;
this._={editor:A};
return this
};
CKEDITOR.focusManager.prototype={focus:function(){if(this._.timer){clearTimeout(this._.timer)
}if(!this.hasFocus){if(CKEDITOR.currentInstance){CKEDITOR.currentInstance.focusManager.forceBlur()
}var A=this._.editor;
A.container.getChild(1).addClass("cke_focus");
this.hasFocus=true;
A.fire("focus")
}},blur:function(){var A=this;
if(A._.timer){clearTimeout(A._.timer)
}A._.timer=setTimeout(function(){delete A._.timer;
A.forceBlur()
},100)
},forceBlur:function(){if(this.hasFocus){var A=this._.editor;
A.container.getChild(1).removeClass("cke_focus");
this.hasFocus=false;
A.fire("blur")
}}};