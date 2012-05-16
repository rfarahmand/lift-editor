;
CKEDITOR.plugins.add("keystrokes",{beforeInit:function(A){A.keystrokeHandler=new CKEDITOR.keystrokeHandler(A);
A.specialKeys={}
},init:function(D){var F=D.config.keystrokes,A=D.config.blockedKeystrokes;
var E=D.keystrokeHandler.keystrokes,B=D.keystrokeHandler.blockedKeystrokes;
for(var C=0;
C<F.length;
C++){E[F[C][0]]=F[C][1]
}for(C=0;
C<A.length;
C++){B[A[C]]=1
}}});
CKEDITOR.keystrokeHandler=function(A){if(A.keystrokeHandler){return A.keystrokeHandler
}this.keystrokes={};
this.blockedKeystrokes={};
this._={editor:A};
return this
};
(function(){var C;
var B=function(G){G=G.data;
var D=G.getKeystroke();
var I=this.keystrokes[D];
var F=this._.editor;
C=(F.fire("key",{keyCode:D})===true);
if(!C){if(I){var H={from:"keystrokeHandler"};
C=(F.execCommand(I,H)!==false)
}if(!C){var E=F.specialKeys[D];
C=(E&&E(F)===true);
if(!C){C=!!this.blockedKeystrokes[D]
}}}if(C){G.preventDefault(true)
}return !C
};
var A=function(D){if(C){C=false;
D.data.preventDefault(true)
}};
CKEDITOR.keystrokeHandler.prototype={attach:function(D){D.on("keydown",B,this);
if(CKEDITOR.env.opera||(CKEDITOR.env.gecko&&CKEDITOR.env.mac)){D.on("keypress",A,this)
}}}
})();
CKEDITOR.config.blockedKeystrokes=[CKEDITOR.CTRL+66,CKEDITOR.CTRL+73,CKEDITOR.CTRL+85];
CKEDITOR.config.keystrokes=[[CKEDITOR.ALT+121,"toolbarFocus"],[CKEDITOR.ALT+122,"elementsPathFocus"],[CKEDITOR.SHIFT+121,"contextMenu"],[CKEDITOR.CTRL+CKEDITOR.SHIFT+121,"contextMenu"],[CKEDITOR.CTRL+90,"undo"],[CKEDITOR.CTRL+89,"redo"],[CKEDITOR.CTRL+CKEDITOR.SHIFT+90,"redo"],[CKEDITOR.CTRL+76,"link"],[CKEDITOR.CTRL+66,"bold"],[CKEDITOR.CTRL+73,"italic"],[CKEDITOR.CTRL+85,"underline"],[CKEDITOR.ALT+(CKEDITOR.env.ie||CKEDITOR.env.webkit?189:109),"toolbarCollapse"],[CKEDITOR.ALT+48,"a11yHelp"]];