(function(){CKEDITOR.plugins.add("enterkey",{requires:["keystrokes","indent"],init:function(H){H.addCommand("enter",{modes:{wysiwyg:1},editorFocus:false,exec:function(J){F(J)
}});
H.addCommand("shiftEnter",{modes:{wysiwyg:1},editorFocus:false,exec:function(J){D(J)
}});
var I=H.keystrokeHandler.keystrokes;
I[13]="enter";
I[CKEDITOR.SHIFT+13]="shiftEnter"
}});
CKEDITOR.plugins.enterkey={enterBlock:function(M,R,S,O){S=S||E(M);
if(!S){return 
}var d=S.document;
var c=S.checkStartOfBlock(),T=S.checkEndOfBlock(),U=new CKEDITOR.dom.elementPath(S.startContainer),P=U.block;
if(c&&T){if(P&&(P.is("li")||P.getParent().is("li"))){M.execCommand("outdent");
return 
}if(P&&P.getParent().is("blockquote")){P.breakParent(P.getParent());
if(!P.getPrevious().getFirst(CKEDITOR.dom.walker.invisible(1))){P.getPrevious().remove()
}if(!P.getNext().getFirst(CKEDITOR.dom.walker.invisible(1))){P.getNext().remove()
}S.moveToElementEditStart(P);
S.select();
return 
}}else{if(P&&P.is("pre")){if(!T){A(M,R,S,O);
return 
}}else{if(P&&CKEDITOR.dtd.$captionBlock[P.getName()]){A(M,R,S,O);
return 
}}}var b=(R==CKEDITOR.ENTER_DIV?"div":"p");
var Y=S.splitBlock(b);
if(!Y){return 
}var N=Y.previousBlock,Q=Y.nextBlock;
var J=Y.wasStartOfBlock,V=Y.wasEndOfBlock;
var W;
if(Q){W=Q.getParent();
if(W.is("li")){Q.breakParent(W);
Q.move(Q.getNext(),1)
}}else{if(N&&(W=N.getParent())&&W.is("li")){N.breakParent(W);
W=N.getNext();
S.moveToElementEditStart(W);
N.move(N.getPrevious())
}}if(!J&&!V){if(Q.is("li")&&(W=Q.getFirst(CKEDITOR.dom.walker.invisible(true)))&&W.is&&W.is("ul","ol")){(CKEDITOR.env.ie?d.createText("\xa0"):d.createElement("br")).insertBefore(W)
}if(Q){S.moveToElementEditStart(Q)
}}else{var K,L;
if(N){if(N.is("li")||!(B.test(N.getName())||N.is("pre"))){K=N.clone()
}}else{if(Q){K=Q.clone()
}}if(!K){if(W&&W.is("li")){K=W
}else{K=d.createElement(b);
if(N&&(L=N.getDirection())){K.setAttribute("dir",L)
}}}else{if(O&&!K.is("li")){K.renameNode(b)
}}var H=Y.elementPath;
if(H){for(var X=0,Z=H.elements.length;
X<Z;
X++){var I=H.elements[X];
if(I.equals(H.block)||I.equals(H.blockLimit)){break
}if(CKEDITOR.dtd.$removeEmpty[I.getName()]){I=I.clone();
K.moveChildren(I);
K.append(I)
}}}if(!CKEDITOR.env.ie){K.appendBogus()
}if(!K.getParent()){S.insertNode(K)
}K.is("li")&&K.removeAttribute("value");
if(CKEDITOR.env.ie&&J&&(!V||!N.getChildCount())){S.moveToElementEditStart(V?N:K);
S.select()
}S.moveToElementEditStart(J&&!V?Q:K)
}if(!CKEDITOR.env.ie){if(Q){var a=d.createElement("span");
a.setHtml("&nbsp;");
S.insertNode(a);
a.scrollIntoView();
S.deleteContents()
}else{K.scrollIntoView()
}}S.select()
},enterBr:function(P,O,M,K){M=M||E(P);
if(!M){return 
}var U=M.document;
var N=(O==CKEDITOR.ENTER_DIV?"div":"p");
var H=M.checkEndOfBlock();
var V=new CKEDITOR.dom.elementPath(P.getSelection().getStartElement());
var R=V.block,L=R&&V.block.getName();
var I=false;
if(!K&&L=="li"){G(P,O,M,K);
return 
}if(!K&&H&&B.test(L)){var Q,T;
if((T=R.getDirection())){Q=U.createElement("div");
Q.setAttribute("dir",T);
Q.insertAfter(R);
M.setStart(Q,0)
}else{U.createElement("br").insertAfter(R);
if(CKEDITOR.env.gecko){U.createText("").insertAfter(R)
}M.setStartAt(R.getNext(),CKEDITOR.env.ie?CKEDITOR.POSITION_BEFORE_START:CKEDITOR.POSITION_AFTER_START)
}}else{var S;
I=(L=="pre");
if(I&&!CKEDITOR.env.gecko){S=U.createText(CKEDITOR.env.ie?"\r":"\n")
}else{S=U.createElement("br")
}M.deleteContents();
M.insertNode(S);
if(CKEDITOR.env.ie){M.setStartAt(S,CKEDITOR.POSITION_AFTER_END)
}else{U.createText("\ufeff").insertAfter(S);
if(H){S.getParent().appendBogus()
}S.getNext().$.nodeValue="";
M.setStartAt(S.getNext(),CKEDITOR.POSITION_AFTER_START);
var J=null;
if(!CKEDITOR.env.gecko){J=U.createElement("span");
J.setHtml("&nbsp;")
}else{J=U.createElement("br")
}J.insertBefore(S.getNext());
J.scrollIntoView();
J.remove()
}}M.collapse(true);
M.select(I)
}};
var C=CKEDITOR.plugins.enterkey,A=C.enterBr,G=C.enterBlock,B=/^h[1-6]$/;
function D(H){if(H.mode!="wysiwyg"){return false
}return F(H,H.config.shiftEnterMode,1)
}function F(H,I,J){J=H.config.forceEnterMode||J;
if(H.mode!="wysiwyg"){return false
}if(!I){I=H.config.enterMode
}setTimeout(function(){H.fire("saveSnapshot");
if(I==CKEDITOR.ENTER_BR){A(H,I,null,J)
}else{G(H,I,null,J)
}H.fire("saveSnapshot")
},0);
return true
}function E(J){var H=J.getSelection().getRanges(true);
for(var I=H.length-1;
I>0;
I--){H[I].deleteContents()
}return H[0]
}})();