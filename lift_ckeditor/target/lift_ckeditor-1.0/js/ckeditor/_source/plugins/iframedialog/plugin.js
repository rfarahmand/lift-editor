;
CKEDITOR.plugins.add("iframedialog",{requires:["dialog"],onLoad:function(){CKEDITOR.dialog.addIframe=function(C,H,A,B,J,D,I){var G={type:"iframe",src:A,width:"100%",height:"100%"};
if(typeof (D)=="function"){G.onContentLoad=D
}else{G.onContentLoad=function(){var M=this.getElement(),N=M.$.contentWindow;
if(N.onDialogEvent){var L=this.getDialog(),K=function(O){return N.onDialogEvent(O)
};
L.on("ok",K);
L.on("cancel",K);
L.on("resize",K);
L.on("hide",function(O){L.removeListener("ok",K);
L.removeListener("cancel",K);
L.removeListener("resize",K);
O.removeListener()
});
N.onDialogEvent({name:"load",sender:this,editor:L._.editor})
}}
}var E={title:H,minWidth:B,minHeight:J,contents:[{id:"iframe",label:H,expand:true,elements:[G]}]};
for(var F in I){E[F]=I[F]
}this.add(C,function(){return E
})
};
(function(){var A=function(G,C,D){if(arguments.length<3){return 
}var J=(this._||(this._={})),B=C.onContentLoad&&CKEDITOR.tools.bind(C.onContentLoad,this),I=CKEDITOR.tools.cssLength(C.width),F=CKEDITOR.tools.cssLength(C.height);
J.frameId=CKEDITOR.tools.getNextId()+"_iframe";
G.on("load",function(){var K=CKEDITOR.document.getById(J.frameId),L=K.getParent();
L.setStyles({width:I,height:F})
});
var E={src:"%2",id:J.frameId,frameborder:0,allowtransparency:true};
var H=[];
if(typeof (C.onContentLoad)=="function"){E.onload="CKEDITOR.tools.callFunction(%1);"
}CKEDITOR.ui.dialog.uiElement.call(this,G,C,H,"iframe",{width:I,height:F},E,"");
D.push('<div style="width:'+I+";height:"+F+';" id="'+this.domId+'"></div>');
H=H.join("");
G.on("show",function(){var M=CKEDITOR.document.getById(J.frameId),N=M.getParent(),L=CKEDITOR.tools.addFunction(B),K=H.replace("%1",L).replace("%2",CKEDITOR.tools.htmlEncode(C.src));
N.setHtml(K)
})
};
A.prototype=new CKEDITOR.ui.dialog.uiElement;
CKEDITOR.dialog.addUIElement("iframe",{build:function(C,D,B){return new A(C,D,B)
}})
})()
}});