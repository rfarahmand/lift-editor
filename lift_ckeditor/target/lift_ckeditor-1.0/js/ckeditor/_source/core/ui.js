;
CKEDITOR.ui=function(A){if(A.ui){return A.ui
}this._={handlers:{},items:{},editor:A};
return this
};
CKEDITOR.ui.prototype={add:function(A,C,B){this._.items[A]={type:C,command:B.command||null,args:Array.prototype.slice.call(arguments,2)}
},create:function(B){var D=this._.items[B],C=D&&this._.handlers[D.type],E=D&&D.command&&this._.editor.getCommand(D.command);
var A=C&&C.create.apply(this,D.args);
D&&(A=CKEDITOR.tools.extend(A,this._.editor.skin[D.type],true));
if(E){E.uiItems.push(A)
}return A
},addHandler:function(B,A){this._.handlers[B]=A
}};
CKEDITOR.event.implementOn(CKEDITOR.ui);