;
CKEDITOR.plugins.add("iframedialog",{requires:["dialog"],onLoad:function(){CKEDITOR.dialog.addIframe=function(J,I,H,G,F,E,D){var C={type:"iframe",src:H,width:"100%",height:"100%"};
if(typeof E=="function"){C.onContentLoad=E
}else{C.onContentLoad=function(){var M=this.getElement(),L=M.$.contentWindow;
if(L.onDialogEvent){var K=this.getDialog(),N=function(O){return L.onDialogEvent(O)
};
K.on("ok",N);
K.on("cancel",N);
K.on("resize",N);
K.on("hide",function(O){K.removeListener("ok",N);
K.removeListener("cancel",N);
K.removeListener("resize",N);
O.removeListener()
});
L.onDialogEvent({name:"load",sender:this,editor:K._.editor})
}}
}var B={title:I,minWidth:G,minHeight:F,contents:[{id:"iframe",label:I,expand:true,elements:[C]}]};
for(var A in D){B[A]=D[A]
}this.add(J,function(){return B
})
};
(function(){var A=function(J,I,H){if(arguments.length<3){return 
}var G=this._||(this._={}),F=I.onContentLoad&&CKEDITOR.tools.bind(I.onContentLoad,this),E=CKEDITOR.tools.cssLength(I.width),D=CKEDITOR.tools.cssLength(I.height);
G.frameId=CKEDITOR.tools.getNextId()+"_iframe";
J.on("load",function(){var L=CKEDITOR.document.getById(G.frameId),K=L.getParent();
K.setStyles({width:E,height:D})
});
var C={src:"%2",id:G.frameId,frameborder:0,allowtransparency:true},B=[];
if(typeof I.onContentLoad=="function"){C.onload="CKEDITOR.tools.callFunction(%1);"
}CKEDITOR.ui.dialog.uiElement.call(this,J,I,B,"iframe",{width:E,height:D},C,"");
H.push('<div style="width:'+E+";height:"+D+';" id="'+this.domId+'"></div>');
B=B.join("");
J.on("show",function(){var M=CKEDITOR.document.getById(G.frameId),L=M.getParent(),K=CKEDITOR.tools.addFunction(F),N=B.replace("%1",K).replace("%2",CKEDITOR.tools.htmlEncode(I.src));
L.setHtml(N)
})
};
A.prototype=new CKEDITOR.ui.dialog.uiElement();
CKEDITOR.dialog.addUIElement("iframe",{build:function(B,D,C){return new A(B,D,C)
}})
})()
}});