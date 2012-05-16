(function(){var C=function(O,Q){var P=O.document,M=P.getBody();
var N=false;
var R=function(){N=true
};
M.on(Q,R);
(CKEDITOR.env.version>7?P.$:P.$.selection.createRange())["execCommand"](Q);
M.removeListener(Q,R);
return N
};
var H=CKEDITOR.env.ie?function(N,M){return C(N,M)
}:function(N,M){try{return N.document.$.execCommand(M,false,null)
}catch(O){return false
}};
var K=function(M){this.type=M;
this.canUndo=this.type=="cut";
this.startDisabled=true
};
K.prototype={exec:function(M,N){this.type=="cut"&&I(M);
var O=H(M,this.type);
if(!O){alert(M.lang.clipboard[this.type+"Error"])
}return O
}};
var G={canUndo:false,exec:CKEDITOR.env.ie?function(M){M.focus();
if(!M.document.getBody().fire("beforepaste")&&!C(M,"paste")){M.fire("pasteDialog");
return false
}}:function(M){try{if(!M.document.getBody().fire("beforepaste")&&!M.document.$.execCommand("Paste",false,null)){throw 0
}}catch(N){setTimeout(function(){M.fire("pasteDialog")
},0);
return false
}}};
var F=function(O){if(this.mode!="wysiwyg"){return 
}switch(O.data.keyCode){case CKEDITOR.CTRL+86:case CKEDITOR.SHIFT+45:var M=this.document.getBody();
if(CKEDITOR.env.opera||CKEDITOR.env.gecko&&CKEDITOR.env.version<10900){M.fire("paste")
}return ;
case CKEDITOR.CTRL+88:case CKEDITOR.SHIFT+46:var N=this;
this.fire("saveSnapshot");
setTimeout(function(){N.fire("saveSnapshot")
},0)
}};
function L(M){M.cancel()
}function J(U,Q,V){var S=this.document;
if(S.getById("cke_pastebin")){return 
}if(Q=="text"&&U.data&&U.data.$.clipboardData){var T=U.data.$.clipboardData.getData("text/plain");
if(T){U.data.preventDefault();
V(T);
return 
}}var M=this.getSelection(),P=new CKEDITOR.dom.range(S);
var N=new CKEDITOR.dom.element(Q=="text"?"textarea":CKEDITOR.env.webkit?"body":"div",S);
N.setAttribute("id","cke_pastebin");
CKEDITOR.env.webkit&&N.append(S.createText("\xa0"));
S.getBody().append(N);
N.setStyles({position:"absolute",top:M.getStartElement().getDocumentPosition().y+"px",width:"1px",height:"1px",overflow:"hidden"});
N.setStyle(this.config.contentsLangDirection=="ltr"?"left":"right","-1000px");
var O=M.createBookmarks();
this.on("selectionChange",L,null,null,0);
if(Q=="text"){N.$.focus()
}else{P.setStartAt(N,CKEDITOR.POSITION_AFTER_START);
P.setEndAt(N,CKEDITOR.POSITION_BEFORE_END);
P.select(true)
}var R=this;
window.setTimeout(function(){R.document.getBody().focus();
R.removeListener("selectionChange",L);
var W;
N=(CKEDITOR.env.webkit&&(W=N.getFirst())&&(W.is&&W.hasClass("Apple-style-span"))?W:N);
M.selectBookmarks(O);
N.remove();
V(N["get"+(Q=="text"?"Value":"Html")]())
},0)
}function I(N){if(!CKEDITOR.env.ie||CKEDITOR.env.quirks){return 
}var O=N.getSelection();
var Q;
if((O.getType()==CKEDITOR.SELECTION_ELEMENT)&&(Q=O.getSelectedElement())){var M=O.getRanges()[0];
var P=N.document.createText("");
P.insertBefore(Q);
M.setStartBefore(P);
M.setEndAfter(Q);
O.selectRanges([M]);
setTimeout(function(){if(Q.getParent()){P.remove();
O.selectElement(Q)
}},0)
}}var B;
function A(O,N){CKEDITOR.env.ie&&(B=1);
var M=CKEDITOR.TRISTATE_OFF;
try{M=N.document.$.queryCommandEnabled(O)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED
}catch(P){}B=0;
return M
}var D;
function E(){if(this.mode!="wysiwyg"){return 
}this.getCommand("cut").setState(D?CKEDITOR.TRISTATE_DISABLED:A("Cut",this));
this.getCommand("copy").setState(A("Copy",this));
var M=D?CKEDITOR.TRISTATE_DISABLED:CKEDITOR.env.webkit?CKEDITOR.TRISTATE_OFF:A("Paste",this);
this.fire("pasteState",M)
}CKEDITOR.plugins.add("clipboard",{requires:["dialog","htmldataprocessor"],init:function(M){M.on("paste",function(O){var P=O.data;
if(P.html){M.insertHtml(P.html)
}else{if(P.text){M.insertText(P.text)
}}setTimeout(function(){M.fire("afterPaste")
},0)
},null,null,1000);
M.on("pasteDialog",function(O){setTimeout(function(){M.openDialog("paste")
},0)
});
M.on("pasteState",function(O){M.getCommand("paste").setState(O.data)
});
function N(O,Q,S,P){var R=M.lang[Q];
M.addCommand(Q,S);
M.ui.addButton(O,{label:R,command:Q});
if(M.addMenuItems){M.addMenuItem(Q,{label:R,command:Q,group:"clipboard",order:P})
}}N("Cut","cut",new K("cut"),1);
N("Copy","copy",new K("copy"),4);
N("Paste","paste",G,8);
CKEDITOR.dialog.add("paste",CKEDITOR.getUrl(this.path+"dialogs/paste.js"));
M.on("key",F,M);
M.on("contentDom",function(){var O=M.document.getBody();
O.on(!CKEDITOR.env.ie?"paste":"beforepaste",function(P){if(B){return 
}var Q=P.data&&P.data.$;
if(CKEDITOR.env.ie&&Q&&!Q.ctrlKey){return 
}var R={mode:"html"};
M.fire("beforePaste",R);
J.call(M,P,R.mode,function(T){if(!(T=CKEDITOR.tools.trim(T.replace(/<span[^>]+data-cke-bookmark[^<]*?<\/span>/ig,"")))){return 
}var S={};
S[R.mode]=T;
M.fire("paste",S)
})
});
if(CKEDITOR.env.ie){O.on("contextmenu",function(){B=1;
setTimeout(function(){B=0
},0)
});
O.on("paste",function(P){if(!M.document.getById("cke_pastebin")){P.data.preventDefault();
B=0;
G.exec(M)
}})
}O.on("beforecut",function(){!B&&I(M)
});
O.on("mouseup",function(){setTimeout(function(){E.call(M)
},0)
},M);
O.on("keyup",E,M)
});
M.on("selectionChange",function(O){D=O.data.selection.getRanges()[0].checkReadOnly();
E.call(M)
});
if(M.contextMenu){M.contextMenu.addListener(function(O,P){var Q=P.getRanges()[0].checkReadOnly();
return{cut:!Q&&A("Cut",M),copy:A("Copy",M),paste:!Q&&(CKEDITOR.env.webkit?CKEDITOR.TRISTATE_OFF:A("Paste",M))}
})
}}})
})();