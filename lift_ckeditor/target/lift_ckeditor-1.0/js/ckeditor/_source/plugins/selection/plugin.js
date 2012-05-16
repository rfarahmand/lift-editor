(function(){function G(){try{var P=this.getSelection();
if(!P||!P.document.getWindow().$){return 
}var N=P.getStartElement();
var O=new CKEDITOR.dom.elementPath(N);
if(!O.compare(this._.selectionPreviousPath)){this._.selectionPreviousPath=O;
this.fire("selectionChange",{selection:P,path:O,element:N})
}}catch(Q){}}var C,D;
function L(){D=true;
if(C){return 
}E.call(this);
C=CKEDITOR.tools.setTimeout(E,200,this)
}function E(){C=null;
if(D){CKEDITOR.tools.setTimeout(G,0,this);
D=false
}}function F(N){function Q(S){return S&&S.type==CKEDITOR.NODE_ELEMENT&&S.getName() in CKEDITOR.dtd.$removeEmpty
}function O(T){var S=N.document.getBody();
return !T.is("body")&&S.getChildCount()==1
}var R=N.startContainer,P=N.startOffset;
if(R.type==CKEDITOR.NODE_TEXT){return false
}return !CKEDITOR.tools.trim(R.getHtml())?Q(R)||O(R):Q(R.getChild(P-1))||Q(R.getChild(P))
}var B={modes:{wysiwyg:1,source:1},readOnly:CKEDITOR.env.ie||CKEDITOR.env.webkit,exec:function(O){switch(O.mode){case"wysiwyg":O.document.$.execCommand("SelectAll",false,null);
O.forceNextSelectionCheck();
O.selectionChange();
break;
case"source":var N=O.textarea.$;
if(CKEDITOR.env.ie){N.createTextRange().execCommand("SelectAll")
}else{N.selectionStart=0;
N.selectionEnd=N.value.length
}N.focus()
}},canUndo:false};
function M(O){I(O);
var N=O.createText("\u200B");
O.setCustomData("cke-fillingChar",N);
return N
}function A(N){return N&&N.getCustomData("cke-fillingChar")
}function J(O){var N=O&&A(O);
if(N){if(N.getCustomData("ready")){I(O)
}else{N.setCustomData("ready",1)
}}}function I(T){var S=T&&T.removeCustomData("cke-fillingChar");
if(S){var U,R=T.getSelection().getNative(),O=R&&R.type!="None"&&R.getRangeAt(0);
if(S.getLength()>1&&O&&O.intersectsNode(S.$)){U=[R.anchorOffset,R.focusOffset];
var P=R.anchorNode==S.$&&R.anchorOffset>0,Q=R.focusNode==S.$&&R.focusOffset>0;
P&&U[0]--;
Q&&U[1]--;
K(R)&&U.unshift(U.pop())
}S.setText(S.getText().replace(/\u200B/g,""));
if(U){var N=R.getRangeAt(0);
N.setStart(N.startContainer,U[0]);
N.setEnd(N.startContainer,U[1]);
R.removeAllRanges();
R.addRange(N)
}}}function K(O){if(!O.isCollapsed){var N=O.getRangeAt(0);
N.setStart(O.anchorNode,O.anchorOffset);
N.setEnd(O.focusNode,O.focusOffset);
return N.collapsed
}}CKEDITOR.plugins.add("selection",{init:function(P){if(CKEDITOR.env.webkit){P.on("selectionChange",function(){J(P.document)
});
P.on("beforeSetMode",function(){I(P.document)
});
var N,Q;
function O(){var U=P.document,T=A(U);
if(T){var S=U.$.defaultView.getSelection();
if(S.type=="Caret"&&S.anchorNode==T.$){Q=1
}N=T.getText();
T.setText(N.replace(/\u200B/g,""))
}}function R(){var T=P.document,S=A(T);
if(S){S.setText(N);
if(Q){T.$.defaultView.getSelection().setPosition(S.$,S.getLength());
Q=0
}}}P.on("beforeUndoImage",O);
P.on("afterUndoImage",R);
P.on("beforeGetData",O,null,null,0);
P.on("getData",R)
}P.on("contentDom",function(){var Z=P.document,V=Z.getBody(),U=Z.getDocumentElement();
if(CKEDITOR.env.ie){var W,a,T=1;
V.on("focusin",function(c){if(c.data.$.srcElement.nodeName!="BODY"){return 
}var b=Z.getCustomData("cke_locked_selection");
if(b){b.unlock(1);
b.lock()
}else{if(W&&T){try{W.select()
}catch(d){}W=null
}}});
V.on("focus",function(){a=1;
S()
});
V.on("beforedeactivate",function(b){if(b.data.$.toElement){return 
}a=0;
T=1
});
CKEDITOR.env.ie&&P.on("blur",function(){try{Z.$.selection.empty()
}catch(b){}});
U.on("mousedown",function(){T=0
});
U.on("mouseup",function(){T=1
});
var Y;
V.on("mousedown",function(b){if(b.data.$.button==2){var c=P.document.$.selection;
if(c.type=="None"){Y=P.window.getScrollPosition()
}}X()
});
V.on("mouseup",function(b){if(b.data.$.button==2&&Y){P.document.$.documentElement.scrollLeft=Y.x;
P.document.$.documentElement.scrollTop=Y.y
}Y=null;
a=1;
setTimeout(function(){S(true)
},0)
});
V.on("keydown",X);
V.on("keyup",function(){a=1;
S()
});
if((CKEDITOR.env.ie7Compat||CKEDITOR.env.ie6Compat)&&Z.$.compatMode!="BackCompat"){U.on("mousedown",function(b){b=b.data.$;
function d(e){e=e.data.$;
if(c){var f=V.$.createTextRange();
f.moveToPoint(e.x,e.y);
c.setEndPoint(c.compareEndPoints("StartToStart",f)<0?"EndToEnd":"StartToStart",f);
c.select()
}}if(b.y<U.$.clientHeight&&b.y>V.$.offsetTop+V.$.clientHeight&&b.x<U.$.clientWidth){var c=V.$.createTextRange();
c.moveToPoint(b.x,b.y);
c.select();
U.on("mousemove",d);
U.on("mouseup",function(e){U.removeListener("mousemove",d);
e.removeListener();
c.select();
c=null
})
}})
}if(CKEDITOR.env.ie8){U.on("mouseup",function(b){if(b.data.getTarget().getName()=="html"){var d=CKEDITOR.document.$.selection,c=d.createRange();
if(d.type!="None"&&c.parentElement().ownerDocument==Z.$){c.select()
}}})
}Z.on("selectionchange",S);
function X(){a=0
}function S(e){if(a){var d=P.document,c=P.getSelection(),b=c&&c.getNative();
if(e&&b&&b.type=="None"){if(!d.$.queryCommandEnabled("InsertImage")){CKEDITOR.tools.setTimeout(S,50,this,true);
return 
}}var f;
if(b&&b.type&&b.type!="Control"&&(f=b.createRange())&&(f=f.parentElement())&&(f=f.nodeName)&&f.toLowerCase() in {input:1,textarea:1}){return 
}W=b&&c.getRanges()[0];
L.call(P)
}}}else{Z.on("mouseup",L,P);
Z.on("keyup",L,P);
Z.on("selectionchange",L,P)
}if(CKEDITOR.env.webkit){Z.on("keydown",function(b){var c=b.data.getKey();
switch(c){case 13:case 33:case 34:case 35:case 36:case 37:case 39:case 8:case 45:case 46:I(P.document)
}},null,null,10)
}});
P.on("contentDomUnload",P.forceNextSelectionCheck,P);
P.addCommand("selectAll",B);
P.ui.addButton("SelectAll",{label:P.lang.selectAll,command:"selectAll"});
P.selectionChange=L;
CKEDITOR.env.ie9Compat&&P.on("destroy",function(){var S=P.getSelection();
S&&S.getNative().clear()
},null,null,9)
}});
CKEDITOR.editor.prototype.getSelection=function(){return this.document&&this.document.getSelection()
};
CKEDITOR.editor.prototype.forceNextSelectionCheck=function(){delete this._.selectionPreviousPath
};
CKEDITOR.dom.document.prototype.getSelection=function(){var N=new CKEDITOR.dom.selection(this);
return(!N||N.isInvalid)?null:N
};
CKEDITOR.SELECTION_NONE=1;
CKEDITOR.SELECTION_TEXT=2;
CKEDITOR.SELECTION_ELEMENT=3;
CKEDITOR.dom.selection=function(O){var N=O.getCustomData("cke_locked_selection");
if(N){return N
}this.document=O;
this.isLocked=0;
this._={cache:{}};
if(CKEDITOR.env.ie){try{var P=this.getNative().createRange();
if(!P||(P.item&&P.item(0).ownerDocument!=this.document.$)||(P.parentElement&&P.parentElement().ownerDocument!=this.document.$)){throw 0
}}catch(Q){this.isInvalid=true
}}return this
};
var H={img:1,hr:1,li:1,table:1,tr:1,td:1,th:1,embed:1,object:1,ol:1,ul:1,a:1,input:1,form:1,select:1,textarea:1,button:1,fieldset:1,thead:1,tfoot:1};
CKEDITOR.dom.selection.prototype={getNative:CKEDITOR.env.ie?function(){return this._.cache.nativeSel||(this._.cache.nativeSel=this.document.$.selection)
}:function(){return this._.cache.nativeSel||(this._.cache.nativeSel=this.document.getWindow().$.getSelection())
},getType:CKEDITOR.env.ie?function(){var N=this._.cache;
if(N.type){return N.type
}var O=CKEDITOR.SELECTION_NONE;
try{var P=this.getNative(),R=P.type;
if(R=="Text"){O=CKEDITOR.SELECTION_TEXT
}if(R=="Control"){O=CKEDITOR.SELECTION_ELEMENT
}if(P.createRange().parentElement){O=CKEDITOR.SELECTION_TEXT
}}catch(Q){}return(N.type=O)
}:function(){var O=this._.cache;
if(O.type){return O.type
}var P=CKEDITOR.SELECTION_TEXT;
var R=this.getNative();
if(!R){P=CKEDITOR.SELECTION_NONE
}else{if(R.rangeCount==1){var N=R.getRangeAt(0),Q=N.startContainer;
if(Q==N.endContainer&&Q.nodeType==1&&(N.endOffset-N.startOffset)==1&&H[Q.childNodes[N.startOffset].nodeName.toLowerCase()]){P=CKEDITOR.SELECTION_ELEMENT
}}}return(O.type=P)
},getRanges:(function(){var N=CKEDITOR.env.ie?(function(){function O(Q){return new CKEDITOR.dom.node(Q).getIndex()
}var P=function(Z,S){Z=Z.duplicate();
Z.collapse(S);
var f=Z.parentElement(),d=f.ownerDocument;
if(!f.hasChildNodes()){return{container:f,offset:0}
}var c=f.children,U,h,V=Z.duplicate(),g=0,Y=c.length-1,a=-1,X,R,Q;
while(g<=Y){a=Math.floor((g+Y)/2);
U=c[a];
V.moveToElementText(U);
X=V.compareEndPoints("StartToStart",Z);
if(X>0){Y=a-1
}else{if(X<0){g=a+1
}else{if(CKEDITOR.env.ie9Compat&&U.tagName=="BR"){var T=d.defaultView.getSelection();
return{container:T[S?"anchorNode":"focusNode"],offset:T[S?"anchorOffset":"focusOffset"]}
}else{return{container:f,offset:O(U)}
}}}}if(a==-1||a==c.length-1&&X<0){V.moveToElementText(f);
V.setEndPoint("StartToStart",Z);
R=V.text.replace(/(\r\n|\r)/g,"\n").length;
c=f.childNodes;
if(!R){U=c[c.length-1];
if(U.nodeType!=CKEDITOR.NODE_TEXT){return{container:f,offset:c.length}
}else{return{container:U,offset:U.nodeValue.length}
}}var W=c.length;
while(R>0&&W>0){h=c[--W];
if(h.nodeType==CKEDITOR.NODE_TEXT){Q=h;
R-=h.nodeValue.length
}}return{container:Q,offset:-R}
}else{V.collapse(X>0?true:false);
V.setEndPoint(X>0?"StartToStart":"EndToStart",Z);
R=V.text.replace(/(\r\n|\r)/g,"\n").length;
if(!R){return{container:f,offset:O(U)+(X>0?0:1)}
}while(R>0){try{h=U[X>0?"previousSibling":"nextSibling"];
if(h.nodeType==CKEDITOR.NODE_TEXT){R-=h.nodeValue.length;
Q=h
}U=h
}catch(b){return{container:f,offset:O(U)}
}}return{container:Q,offset:X>0?-R:Q.nodeValue.length+R}
}};
return function(){var S=this.getNative(),X=S&&S.createRange(),Y=this.getType(),W;
if(!S){return[]
}if(Y==CKEDITOR.SELECTION_TEXT){W=new CKEDITOR.dom.range(this.document);
var Q=P(X,true);
W.setStart(new CKEDITOR.dom.node(Q.container),Q.offset);
Q=P(X);
W.setEnd(new CKEDITOR.dom.node(Q.container),Q.offset);
if(W.endContainer.getPosition(W.startContainer)&CKEDITOR.POSITION_PRECEDING&&W.endOffset<=W.startContainer.getIndex()){W.collapse()
}return[W]
}else{if(Y==CKEDITOR.SELECTION_ELEMENT){var R=[];
for(var U=0;
U<X.length;
U++){var V=X.item(U),Z=V.parentNode,T=0;
W=new CKEDITOR.dom.range(this.document);
for(;
T<Z.childNodes.length&&Z.childNodes[T]!=V;
T++){}W.setStart(new CKEDITOR.dom.node(Z),T);
W.setEnd(new CKEDITOR.dom.node(Z),T+1);
R.push(W)
}return R
}}return[]
}
})():function(){var O=[],P,T=this.document,S=this.getNative();
if(!S){return O
}if(!S.rangeCount){P=new CKEDITOR.dom.range(T);
P.moveToElementEditStart(T.getBody());
O.push(P)
}for(var Q=0;
Q<S.rangeCount;
Q++){var R=S.getRangeAt(Q);
P=new CKEDITOR.dom.range(T);
P.setStart(new CKEDITOR.dom.node(R.startContainer),R.startOffset);
P.setEnd(new CKEDITOR.dom.node(R.endContainer),R.endOffset);
O.push(P)
}return O
};
return function(Z){var P=this._.cache;
if(P.ranges&&!Z){return P.ranges
}else{if(!P.ranges){P.ranges=new CKEDITOR.dom.rangeList(N.call(this))
}}if(Z){var Q=P.ranges;
for(var T=0;
T<Q.length;
T++){var U=Q[T];
var Y=U.getCommonAncestor();
if(Y.isReadOnly()){Q.splice(T,1)
}if(U.collapsed){continue
}if(U.startContainer.isReadOnly()){var V=U.startContainer;
while(V){if(V.is("body")||!V.isReadOnly()){break
}if(V.type==CKEDITOR.NODE_ELEMENT&&V.getAttribute("contentEditable")=="false"){U.setStartAfter(V)
}V=V.getParent()
}}var S=U.startContainer,a=U.endContainer,W=U.startOffset,X=U.endOffset,R=U.clone();
if(S&&S.type==CKEDITOR.NODE_TEXT){if(W>=S.getLength()){R.setStartAfter(S)
}else{R.setStartBefore(S)
}}if(a&&a.type==CKEDITOR.NODE_TEXT){if(!X){R.setEndBefore(a)
}else{R.setEndAfter(a)
}}var O=new CKEDITOR.dom.walker(R);
O.evaluator=function(c){if(c.type==CKEDITOR.NODE_ELEMENT&&c.isReadOnly()){var b=U.clone();
U.setEndBefore(c);
if(U.collapsed){Q.splice(T--,1)
}if(!(c.getPosition(R.endContainer)&CKEDITOR.POSITION_CONTAINS)){b.setStartAfter(c);
if(!b.collapsed){Q.splice(T+1,0,b)
}}return true
}return false
};
O.next()
}}return P.ranges
}
})(),getStartElement:function(){var P=this._.cache;
if(P.startElement!==undefined){return P.startElement
}var R,S=this.getNative();
switch(this.getType()){case CKEDITOR.SELECTION_ELEMENT:return this.getSelectedElement();
case CKEDITOR.SELECTION_TEXT:var O=this.getRanges()[0];
if(O){if(!O.collapsed){O.optimize();
while(1){var Q=O.startContainer,N=O.startOffset;
if(N==(Q.getChildCount?Q.getChildCount():Q.getLength())&&!Q.isBlockBoundary()){O.setStartAfter(Q)
}else{break
}}R=O.startContainer;
if(R.type!=CKEDITOR.NODE_ELEMENT){return R.getParent()
}R=R.getChild(O.startOffset);
if(!R||R.type!=CKEDITOR.NODE_ELEMENT){R=O.startContainer
}else{var T=R.getFirst();
while(T&&T.type==CKEDITOR.NODE_ELEMENT){R=T;
T=T.getFirst()
}}}else{R=O.startContainer;
if(R.type!=CKEDITOR.NODE_ELEMENT){R=R.getParent()
}}R=R.$
}}return P.startElement=(R?new CKEDITOR.dom.element(R):null)
},getSelectedElement:function(){var O=this._.cache;
if(O.selectedElement!==undefined){return O.selectedElement
}var N=this;
var P=CKEDITOR.tools.tryThese(function(){return N.getNative().createRange().item(0)
},function(){var X,R,U=N.getRanges()[0],T=U.getCommonAncestor(1,1),Z={table:1,ul:1,ol:1,dl:1};
for(var Y in Z){if((X=T.getAscendant(Y,1))){break
}}if(X){var S=new CKEDITOR.dom.range(this.document);
S.setStartAt(X,CKEDITOR.POSITION_AFTER_START);
S.setEnd(U.startContainer,U.startOffset);
var V=CKEDITOR.tools.extend(Z,CKEDITOR.dtd.$listItem,CKEDITOR.dtd.$tableContent),Q=new CKEDITOR.dom.walker(S),W=function(b,a){return function(d,e){if(d.type==CKEDITOR.NODE_TEXT&&(!CKEDITOR.tools.trim(d.getText())||d.getParent().data("cke-bookmark"))){return true
}var c;
if(d.type==CKEDITOR.NODE_ELEMENT){c=d.getName();
if(c=="br"&&a&&d.equals(d.getParent().getBogus())){return true
}if(e&&c in V||c in CKEDITOR.dtd.$removeEmpty){return true
}}b.halted=1;
return false
}
};
Q.guard=W(Q);
if(Q.checkBackward()&&!Q.halted){Q=new CKEDITOR.dom.walker(S);
S.setStart(U.endContainer,U.endOffset);
S.setEndAt(X,CKEDITOR.POSITION_BEFORE_END);
Q.guard=W(Q,1);
if(Q.checkForward()&&!Q.halted){R=X.$
}}}if(!R){throw 0
}return R
},function(){var Q=N.getRanges()[0],T,S;
for(var R=2;
R&&!((T=Q.getEnclosedNode())&&(T.type==CKEDITOR.NODE_ELEMENT)&&H[T.getName()]&&(S=T));
R--){Q.shrink(CKEDITOR.SHRINK_ELEMENT)
}return S.$
});
return O.selectedElement=(P?new CKEDITOR.dom.element(P):null)
},getSelectedText:function(){var N=this._.cache;
if(N.selectedText!==undefined){return N.selectedText
}var P="",O=this.getNative();
if(this.getType()==CKEDITOR.SELECTION_TEXT){P=CKEDITOR.env.ie?O.createRange().text:O.toString()
}return(N.selectedText=P)
},lock:function(){this.getRanges();
this.getStartElement();
this.getSelectedElement();
this.getSelectedText();
this._.cache.nativeSel={};
this.isLocked=1;
this.document.setCustomData("cke_locked_selection",this)
},unlock:function(P){var Q=this.document,N=Q.getCustomData("cke_locked_selection");
if(N){Q.setCustomData("cke_locked_selection",null);
if(P){var R=N.getSelectedElement(),O=!R&&N.getRanges();
this.isLocked=0;
this.reset();
Q.getBody().focus();
if(R){this.selectElement(R)
}else{this.selectRanges(O)
}}}if(!N||!P){this.isLocked=0;
this.reset()
}},reset:function(){this._.cache={}
},selectElement:function(O){if(this.isLocked){var N=new CKEDITOR.dom.range(this.document);
N.setStartBefore(O);
N.setEndAfter(O);
this._.cache.selectedElement=O;
this._.cache.startElement=O;
this._.cache.ranges=new CKEDITOR.dom.rangeList(N);
this._.cache.type=CKEDITOR.SELECTION_ELEMENT;
return 
}N=new CKEDITOR.dom.range(O.getDocument());
N.setStartBefore(O);
N.setEndAfter(O);
N.select();
this.document.fire("selectionchange");
this.reset()
},selectRanges:function(N){if(this.isLocked){this._.cache.selectedElement=null;
this._.cache.startElement=N[0]&&N[0].getTouchedStartNode();
this._.cache.ranges=new CKEDITOR.dom.rangeList(N);
this._.cache.type=CKEDITOR.SELECTION_TEXT;
return 
}if(CKEDITOR.env.ie){if(N.length>1){var X=N[N.length-1];
N[0].setEnd(X.endContainer,X.endOffset);
N.length=1
}if(N[0]){N[0].select()
}this.reset()
}else{var O=this.getNative();
if(!O){return 
}if(N.length){O.removeAllRanges();
CKEDITOR.env.webkit&&I(this.document)
}for(var R=0;
R<N.length;
R++){if(R<N.length-1){var Q=N[R],Y=N[R+1],a=Q.clone();
a.setStart(Q.endContainer,Q.endOffset);
a.setEnd(Y.startContainer,Y.startOffset);
if(!a.collapsed){a.shrink(CKEDITOR.NODE_ELEMENT,true);
var U=a.getCommonAncestor(),b=a.getEnclosedNode();
if(U.isReadOnly()||b&&b.isReadOnly()){Y.setStart(Q.startContainer,Q.startOffset);
N.splice(R--,1);
continue
}}}var T=N[R];
var V=this.document.$.createRange();
var P=T.startContainer;
if(T.collapsed&&(CKEDITOR.env.opera||(CKEDITOR.env.gecko&&CKEDITOR.env.version<10900))&&P.type==CKEDITOR.NODE_ELEMENT&&!P.getChildCount()){P.appendText("")
}if(T.collapsed&&CKEDITOR.env.webkit&&F(T)){var Z=M(this.document);
T.insertNode(Z);
var S=Z.getNext();
if(S&&!Z.getPrevious()&&S.type==CKEDITOR.NODE_ELEMENT&&S.getName()=="br"){I(this.document);
T.moveToPosition(S,CKEDITOR.POSITION_BEFORE_START)
}else{T.moveToPosition(Z,CKEDITOR.POSITION_AFTER_END)
}}V.setStart(T.startContainer.$,T.startOffset);
try{V.setEnd(T.endContainer.$,T.endOffset)
}catch(W){if(W.toString().indexOf("NS_ERROR_ILLEGAL_VALUE")>=0){T.collapse(1);
V.setEnd(T.endContainer.$,T.endOffset)
}else{throw W
}}O.addRange(V)
}this.document.fire("selectionchange");
this.reset()
}},createBookmarks:function(N){return this.getRanges().createBookmarks(N)
},createBookmarks2:function(N){return this.getRanges().createBookmarks2(N)
},selectBookmarks:function(Q){var N=[];
for(var P=0;
P<Q.length;
P++){var O=new CKEDITOR.dom.range(this.document);
O.moveToBookmark(Q[P]);
N.push(O)
}this.selectRanges(N);
return this
},getCommonAncestor:function(){var O=this.getRanges(),P=O[0].startContainer,N=O[O.length-1].endContainer;
return P.getCommonAncestor(N)
},scrollIntoView:function(){var N=this.getStartElement();
N.scrollIntoView()
}}
})();
(function(){var A=CKEDITOR.dom.walker.whitespaces(true),B=/\ufeff|\u00a0/,C={table:1,tbody:1,tr:1};
CKEDITOR.dom.range.prototype.select=CKEDITOR.env.ie?function(F){var G=this.collapsed,N,K,D;
var H=this.getEnclosedNode();
if(H){try{D=this.document.$.body.createControlRange();
D.addElement(H.$);
D.select();
return 
}catch(O){}}if(this.startContainer.type==CKEDITOR.NODE_ELEMENT&&this.startContainer.getName() in C||this.endContainer.type==CKEDITOR.NODE_ELEMENT&&this.endContainer.getName() in C){this.shrink(CKEDITOR.NODE_ELEMENT,true)
}var M=this.createBookmark();
var E=M.startNode;
var J;
if(!G){J=M.endNode
}D=this.document.$.body.createTextRange();
D.moveToElementText(E.$);
D.moveStart("character",1);
if(J){var L=this.document.$.body.createTextRange();
L.moveToElementText(J.$);
D.setEndPoint("EndToEnd",L);
D.moveEnd("character",-1)
}else{var I=E.getNext(A);
N=(!(I&&I.getText&&I.getText().match(B))&&(F||!E.hasPrevious()||(E.getPrevious().is&&E.getPrevious().is("br"))));
K=this.document.createElement("span");
K.setHtml("&#65279;");
K.insertBefore(E);
if(N){this.document.createText("\ufeff").insertBefore(E)
}}this.setStartBefore(E);
E.remove();
if(G){if(N){D.moveStart("character",-1);
D.select();
this.document.$.selection.clear()
}else{D.select()
}this.moveToPosition(K,CKEDITOR.POSITION_BEFORE_START);
K.remove()
}else{this.setEndBefore(J);
J.remove();
D.select()
}this.document.fire("selectionchange")
}:function(){this.document.getSelection().selectRanges([this])
}
})();