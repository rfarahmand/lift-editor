;
CKEDITOR.command=function(A,B){this.uiItems=[];
this.exec=function(C){if(this.state==CKEDITOR.TRISTATE_DISABLED){return false
}if(this.editorFocus){A.focus()
}if(this.fire("exec")===true){return true
}return(B.exec.call(this,A,C)!==false)
};
this.refresh=function(){if(this.fire("refresh")===true){return true
}return(B.refresh&&B.refresh.apply(this,arguments)!==false)
};
CKEDITOR.tools.extend(this,B,{modes:{wysiwyg:1},editorFocus:1,state:CKEDITOR.TRISTATE_OFF});
CKEDITOR.event.call(this)
};
CKEDITOR.command.prototype={enable:function(){if(this.state==CKEDITOR.TRISTATE_DISABLED){this.setState((!this.preserveState||(typeof this.previousState=="undefined"))?CKEDITOR.TRISTATE_OFF:this.previousState)
}},disable:function(){this.setState(CKEDITOR.TRISTATE_DISABLED)
},setState:function(A){if(this.state==A){return false
}this.previousState=this.state;
this.state=A;
this.fire("state");
return true
},toggleState:function(){if(this.state==CKEDITOR.TRISTATE_OFF){this.setState(CKEDITOR.TRISTATE_ON)
}else{if(this.state==CKEDITOR.TRISTATE_ON){this.setState(CKEDITOR.TRISTATE_OFF)
}}}};
CKEDITOR.event.implementOn(CKEDITOR.command.prototype,true);