;
CKEDITOR.dom.range=function(A){this.startContainer=null;
this.startOffset=null;
this.endContainer=null;
this.endOffset=null;
this.collapsed=true;
this.document=A
};
(function(){var E=function(J){J.collapsed=(J.startContainer&&J.endContainer&&J.startContainer.equals(J.endContainer)&&J.startOffset==J.endOffset)
};
var F=function(U,Z,K,J){U.optimizeBookmark();
var h=U.startContainer;
var W=U.endContainer;
var c=U.startOffset;
var Q=U.endOffset;
var Y;
var R;
if(W.type==CKEDITOR.NODE_TEXT){W=W.split(Q)
}else{if(W.getChildCount()>0){if(Q>=W.getChildCount()){W=W.append(U.document.createText(""));
R=true
}else{W=W.getChild(Q)
}}}if(h.type==CKEDITOR.NODE_TEXT){h.split(c);
if(h.equals(W)){W=h.getNext()
}}else{if(!c){h=h.getFirst().insertBeforeMe(U.document.createText(""));
Y=true
}else{if(c>=h.getChildCount()){h=h.append(U.document.createText(""));
Y=true
}else{h=h.getChild(c).getPrevious()
}}}var e=h.getParents();
var M=W.getParents();
var d,l,g;
for(d=0;
d<e.length;
d++){l=e[d];
g=M[d];
if(!l.equals(g)){break
}}var f=K,V,T,O,S;
for(var a=d;
a<e.length;
a++){V=e[a];
if(f&&!V.equals(h)){T=f.append(V.clone())
}O=V.getNext();
while(O){if(O.equals(M[a])||O.equals(W)){break
}S=O.getNext();
if(Z==2){f.append(O.clone(true))
}else{O.remove();
if(Z==1){f.append(O)
}}O=S
}if(f){f=T
}}f=K;
for(var X=d;
X<M.length;
X++){V=M[X];
if(Z>0&&!V.equals(W)){T=f.append(V.clone())
}if(!e[X]||V.$.parentNode!=e[X].$.parentNode){O=V.getPrevious();
while(O){if(O.equals(e[X])||O.equals(h)){break
}S=O.getPrevious();
if(Z==2){f.$.insertBefore(O.$.cloneNode(true),f.$.firstChild)
}else{O.remove();
if(Z==1){f.$.insertBefore(O.$,f.$.firstChild)
}}O=S
}}if(f){f=T
}}if(Z==2){var L=U.startContainer;
if(L.type==CKEDITOR.NODE_TEXT){L.$.data+=L.$.nextSibling.data;
L.$.parentNode.removeChild(L.$.nextSibling)
}var P=U.endContainer;
if(P.type==CKEDITOR.NODE_TEXT&&P.$.nextSibling){P.$.data+=P.$.nextSibling.data;
P.$.parentNode.removeChild(P.$.nextSibling)
}}else{if(l&&g&&(h.$.parentNode!=l.$.parentNode||W.$.parentNode!=g.$.parentNode)){var N=g.getIndex();
if(Y&&g.$.parentNode==h.$.parentNode){N--
}if(J&&l.type==CKEDITOR.NODE_ELEMENT){var b=CKEDITOR.dom.element.createFromHtml('<span data-cke-bookmark="1" style="display:none">&nbsp;</span>',U.document);
b.insertAfter(l);
l.mergeSiblings(false);
U.moveToBookmark({startNode:b})
}else{U.setStart(g.getParent(),N)
}}U.collapse(true)
}if(Y){h.remove()
}if(R&&W.$.parentNode){W.remove()
}};
var C={abbr:1,acronym:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,"var":1};
function G(K){var L=false,J=CKEDITOR.dom.walker.bookmark(true);
return function(M){if(J(M)){return true
}if(M.type==CKEDITOR.NODE_TEXT){if(M.hasAscendant("pre")||CKEDITOR.tools.trim(M.getText()).length){return false
}}else{if(M.type==CKEDITOR.NODE_ELEMENT){if(!C[M.getName()]){if(!K&&!CKEDITOR.env.ie&&M.getName()=="br"&&!L){L=true
}else{return false
}}}}return true
}
}var B=CKEDITOR.dom.walker.bogus();
function I(J){return function(K){return !J&&B(K)||(K.type==CKEDITOR.NODE_TEXT?!CKEDITOR.tools.trim(K.getText())||!!K.getParent().data("cke-bookmark"):K.getName() in CKEDITOR.dtd.$removeEmpty)
}
}var A=new CKEDITOR.dom.walker.whitespaces(),D=new CKEDITOR.dom.walker.bookmark();
function H(J){return !A(J)&&!D(J)
}CKEDITOR.dom.range.prototype={clone:function(){var J=new CKEDITOR.dom.range(this.document);
J.startContainer=this.startContainer;
J.startOffset=this.startOffset;
J.endContainer=this.endContainer;
J.endOffset=this.endOffset;
J.collapsed=this.collapsed;
return J
},collapse:function(J){if(J){this.endContainer=this.startContainer;
this.endOffset=this.startOffset
}else{this.startContainer=this.endContainer;
this.startOffset=this.endOffset
}this.collapsed=true
},cloneContents:function(){var J=new CKEDITOR.dom.documentFragment(this.document);
if(!this.collapsed){F(this,2,J)
}return J
},deleteContents:function(J){if(this.collapsed){return 
}F(this,0,null,J)
},extractContents:function(K){var J=new CKEDITOR.dom.documentFragment(this.document);
if(!this.collapsed){F(this,1,J,K)
}return J
},createBookmark:function(M){var L,J;
var K;
var O;
var N=this.collapsed;
L=this.document.createElement("span");
L.data("cke-bookmark",1);
L.setStyle("display","none");
L.setHtml("&nbsp;");
if(M){K="cke_bm_"+CKEDITOR.tools.getNextNumber();
L.setAttribute("id",K+"S")
}if(!N){J=L.clone();
J.setHtml("&nbsp;");
if(M){J.setAttribute("id",K+"E")
}O=this.clone();
O.collapse();
O.insertNode(J)
}O=this.clone();
O.collapse(true);
O.insertNode(L);
if(J){this.setStartAfter(L);
this.setEndBefore(J)
}else{this.moveToPosition(L,CKEDITOR.POSITION_AFTER_END)
}return{startNode:M?K+"S":L,endNode:M?K+"E":J,serializable:M,collapsed:N}
},createBookmark2:function(P){var M=this.startContainer,N=this.endContainer;
var J=this.startOffset,K=this.endOffset;
var O=this.collapsed;
var Q,L;
if(!M||!N){return{start:0,end:0}
}if(P){if(M.type==CKEDITOR.NODE_ELEMENT){Q=M.getChild(J);
if(Q&&Q.type==CKEDITOR.NODE_TEXT&&J>0&&Q.getPrevious().type==CKEDITOR.NODE_TEXT){M=Q;
J=0
}if(Q&&Q.type==CKEDITOR.NODE_ELEMENT){J=Q.getIndex(1)
}}while(M.type==CKEDITOR.NODE_TEXT&&(L=M.getPrevious())&&L.type==CKEDITOR.NODE_TEXT){M=L;
J+=L.getLength()
}if(!O){if(N.type==CKEDITOR.NODE_ELEMENT){Q=N.getChild(K);
if(Q&&Q.type==CKEDITOR.NODE_TEXT&&K>0&&Q.getPrevious().type==CKEDITOR.NODE_TEXT){N=Q;
K=0
}if(Q&&Q.type==CKEDITOR.NODE_ELEMENT){K=Q.getIndex(1)
}}while(N.type==CKEDITOR.NODE_TEXT&&(L=N.getPrevious())&&L.type==CKEDITOR.NODE_TEXT){N=L;
K+=L.getLength()
}}}return{start:M.getAddress(P),end:O?null:N.getAddress(P),startOffset:J,endOffset:K,normalized:P,collapsed:O,is2:true}
},moveToBookmark:function(O){if(O.is2){var P=this.document.getByAddress(O.start,O.normalized),K=O.startOffset;
var Q=O.end&&this.document.getByAddress(O.end,O.normalized),M=O.endOffset;
this.setStart(P,K);
if(Q){this.setEnd(Q,M)
}else{this.collapse(true)
}}else{var N=O.serializable,L=N?this.document.getById(O.startNode):O.startNode,J=N?this.document.getById(O.endNode):O.endNode;
this.setStartBefore(L);
L.remove();
if(J){this.setEndBefore(J);
J.remove()
}else{this.collapse(true)
}}},getBoundaryNodes:function(){var N=this.startContainer,K=this.endContainer,J=this.startOffset,M=this.endOffset,L;
if(N.type==CKEDITOR.NODE_ELEMENT){L=N.getChildCount();
if(L>J){N=N.getChild(J)
}else{if(L<1){N=N.getPreviousSourceNode()
}else{N=N.$;
while(N.lastChild){N=N.lastChild
}N=new CKEDITOR.dom.node(N);
N=N.getNextSourceNode()||N
}}}if(K.type==CKEDITOR.NODE_ELEMENT){L=K.getChildCount();
if(L>M){K=K.getChild(M).getPreviousSourceNode(true)
}else{if(L<1){K=K.getPreviousSourceNode()
}else{K=K.$;
while(K.lastChild){K=K.lastChild
}K=new CKEDITOR.dom.node(K)
}}}if(N.getPosition(K)&CKEDITOR.POSITION_FOLLOWING){N=K
}return{startNode:N,endNode:K}
},getCommonAncestor:function(K,M){var N=this.startContainer,J=this.endContainer,L;
if(N.equals(J)){if(K&&N.type==CKEDITOR.NODE_ELEMENT&&this.startOffset==this.endOffset-1){L=N.getChild(this.startOffset)
}else{L=N
}}else{L=N.getCommonAncestor(J)
}return M&&!L.is?L.getParent():L
},optimize:function(){var J=this.startContainer;
var K=this.startOffset;
if(J.type!=CKEDITOR.NODE_ELEMENT){if(!K){this.setStartBefore(J)
}else{if(K>=J.getLength()){this.setStartAfter(J)
}}}J=this.endContainer;
K=this.endOffset;
if(J.type!=CKEDITOR.NODE_ELEMENT){if(!K){this.setEndBefore(J)
}else{if(K>=J.getLength()){this.setEndAfter(J)
}}}},optimizeBookmark:function(){var K=this.startContainer,J=this.endContainer;
if(K.is&&K.is("span")&&K.data("cke-bookmark")){this.setStartAt(K,CKEDITOR.POSITION_BEFORE_START)
}if(J&&J.is&&J.is("span")&&J.data("cke-bookmark")){this.setEndAt(J,CKEDITOR.POSITION_AFTER_END)
}},trim:function(M,P){var N=this.startContainer,J=this.startOffset,Q=this.collapsed;
if((!M||Q)&&N&&N.type==CKEDITOR.NODE_TEXT){if(!J){J=N.getIndex();
N=N.getParent()
}else{if(J>=N.getLength()){J=N.getIndex()+1;
N=N.getParent()
}else{var L=N.split(J);
J=N.getIndex()+1;
N=N.getParent();
if(this.startContainer.equals(this.endContainer)){this.setEnd(L,this.endOffset-this.startOffset)
}else{if(N.equals(this.endContainer)){this.endOffset+=1
}}}}this.setStart(N,J);
if(Q){this.collapse(true);
return 
}}var O=this.endContainer;
var K=this.endOffset;
if(!(P||Q)&&O&&O.type==CKEDITOR.NODE_TEXT){if(!K){K=O.getIndex();
O=O.getParent()
}else{if(K>=O.getLength()){K=O.getIndex()+1;
O=O.getParent()
}else{O.split(K);
K=O.getIndex()+1;
O=O.getParent()
}}this.setEnd(O,K)
}},enlarge:function(X,U){switch(X){case CKEDITOR.ENLARGE_ELEMENT:if(this.collapsed){return 
}var L=this.getCommonAncestor();
var T=this.document.getBody();
var N,l;
var e,j,R;
var M=false;
var Y;
var J;
var V=this.startContainer;
var O=this.startOffset;
if(V.type==CKEDITOR.NODE_TEXT){if(O){V=!CKEDITOR.tools.trim(V.substring(0,O)).length&&V;
M=!!V
}if(V){if(!(j=V.getPrevious())){e=V.getParent()
}}}else{if(O){j=V.getChild(O-1)||V.getLast()
}if(!j){e=V
}}while(e||j){if(e&&!j){if(!R&&e.equals(L)){R=true
}if(!T.contains(e)){break
}if(!M||e.getComputedStyle("display")!="inline"){M=false;
if(R){N=e
}else{this.setStartBefore(e)
}}j=e.getPrevious()
}while(j){Y=false;
if(j.type==CKEDITOR.NODE_COMMENT){j=j.getPrevious();
continue
}else{if(j.type==CKEDITOR.NODE_TEXT){J=j.getText();
if(/[^\s\ufeff]/.test(J)){j=null
}Y=/[\s\ufeff]$/.test(J)
}else{if((j.$.offsetWidth>0||U&&j.is("br"))&&!j.data("cke-bookmark")){if(M&&CKEDITOR.dtd.$removeEmpty[j.getName()]){J=j.getText();
if((/[^\s\ufeff]/).test(J)){j=null
}else{var c=j.$.getElementsByTagName("*");
for(var h=0,P;
P=c[h++];
){if(!CKEDITOR.dtd.$removeEmpty[P.nodeName.toLowerCase()]){j=null;
break
}}}if(j){Y=!!J.length
}}else{j=null
}}}}if(Y){if(M){if(R){N=e
}else{if(e){this.setStartBefore(e)
}}}else{M=true
}}if(j){var d=j.getPrevious();
if(!e&&!d){e=j;
j=null;
break
}j=d
}else{e=null
}}if(e){e=e.getParent()
}}V=this.endContainer;
O=this.endOffset;
e=j=null;
R=M=false;
if(V.type==CKEDITOR.NODE_TEXT){V=!CKEDITOR.tools.trim(V.substring(O)).length&&V;
M=!(V&&V.getLength());
if(V){if(!(j=V.getNext())){e=V.getParent()
}}}else{j=V.getChild(O);
if(!j){e=V
}}while(e||j){if(e&&!j){if(!R&&e.equals(L)){R=true
}if(!T.contains(e)){break
}if(!M||e.getComputedStyle("display")!="inline"){M=false;
if(R){l=e
}else{if(e){this.setEndAfter(e)
}}}j=e.getNext()
}while(j){Y=false;
if(j.type==CKEDITOR.NODE_TEXT){J=j.getText();
if(/[^\s\ufeff]/.test(J)){j=null
}Y=/^[\s\ufeff]/.test(J)
}else{if(j.type==CKEDITOR.NODE_ELEMENT){if((j.$.offsetWidth>0||U&&j.is("br"))&&!j.data("cke-bookmark")){if(M&&CKEDITOR.dtd.$removeEmpty[j.getName()]){J=j.getText();
if((/[^\s\ufeff]/).test(J)){j=null
}else{c=j.$.getElementsByTagName("*");
for(h=0;
P=c[h++];
){if(!CKEDITOR.dtd.$removeEmpty[P.nodeName.toLowerCase()]){j=null;
break
}}}if(j){Y=!!J.length
}}else{j=null
}}}else{Y=1
}}if(Y){if(M){if(R){l=e
}else{this.setEndAfter(e)
}}}if(j){d=j.getNext();
if(!e&&!d){e=j;
j=null;
break
}j=d
}else{e=null
}}if(e){e=e.getParent()
}}if(N&&l){L=N.contains(l)?l:N;
this.setStartBefore(L);
this.setEndAfter(L)
}break;
case CKEDITOR.ENLARGE_BLOCK_CONTENTS:case CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS:var b=new CKEDITOR.dom.range(this.document);
T=this.document.getBody();
b.setStartAt(T,CKEDITOR.POSITION_AFTER_START);
b.setEnd(this.startContainer,this.startOffset);
var g=new CKEDITOR.dom.walker(b),m,W,f=CKEDITOR.dom.walker.blockBoundary((X==CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS)?{br:1}:null),S=function(n){var i=f(n);
if(!i){m=n
}return i
},a=function(n){var i=S(n);
if(!i&&n.is&&n.is("br")){W=n
}return i
};
g.guard=S;
e=g.lastBackward();
m=m||T;
this.setStartAt(m,!m.is("br")&&(!e&&this.checkStartOfBlock()||e&&m.contains(e))?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_AFTER_END);
if(X==CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS){var k=this.clone();
g=new CKEDITOR.dom.walker(k);
var Z=CKEDITOR.dom.walker.whitespaces(),Q=CKEDITOR.dom.walker.bookmark();
g.evaluator=function(i){return !Z(i)&&!Q(i)
};
var K=g.previous();
if(K&&K.type==CKEDITOR.NODE_ELEMENT&&K.is("br")){return 
}}b=this.clone();
b.collapse();
b.setEndAt(T,CKEDITOR.POSITION_BEFORE_END);
g=new CKEDITOR.dom.walker(b);
g.guard=(X==CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS)?a:S;
m=null;
e=g.lastForward();
m=m||T;
this.setEndAt(m,(!e&&this.checkEndOfBlock()||e&&m.contains(e))?CKEDITOR.POSITION_BEFORE_END:CKEDITOR.POSITION_BEFORE_START);
if(W){this.setEndAfter(W)
}}},shrink:function(Q,V){if(!this.collapsed){Q=Q||CKEDITOR.SHRINK_TEXT;
var L=this.clone();
var M=this.startContainer,X=this.endContainer,T=this.startOffset,U=this.endOffset,O=this.collapsed;
var K=1,W=1;
if(M&&M.type==CKEDITOR.NODE_TEXT){if(!T){L.setStartBefore(M)
}else{if(T>=M.getLength()){L.setStartAfter(M)
}else{L.setStartBefore(M);
K=0
}}}if(X&&X.type==CKEDITOR.NODE_TEXT){if(!U){L.setEndBefore(X)
}else{if(U>=X.getLength()){L.setEndAfter(X)
}else{L.setEndAfter(X);
W=0
}}}var J=new CKEDITOR.dom.walker(L),N=CKEDITOR.dom.walker.bookmark();
J.evaluator=function(Y){return Y.type==(Q==CKEDITOR.SHRINK_ELEMENT?CKEDITOR.NODE_ELEMENT:CKEDITOR.NODE_TEXT)
};
var P;
J.guard=function(Z,Y){if(N(Z)){return true
}if(Q==CKEDITOR.SHRINK_ELEMENT&&Z.type==CKEDITOR.NODE_TEXT){return false
}if(Y&&Z.equals(P)){return false
}if(!Y&&Z.type==CKEDITOR.NODE_ELEMENT){P=Z
}return true
};
if(K){var S=J[Q==CKEDITOR.SHRINK_ELEMENT?"lastForward":"next"]();
S&&this.setStartAt(S,V?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_BEFORE_START)
}if(W){J.reset();
var R=J[Q==CKEDITOR.SHRINK_ELEMENT?"lastBackward":"previous"]();
R&&this.setEndAt(R,V?CKEDITOR.POSITION_BEFORE_END:CKEDITOR.POSITION_AFTER_END)
}return !!(K||W)
}},insertNode:function(M){this.optimizeBookmark();
this.trim(false,true);
var L=this.startContainer;
var K=this.startOffset;
var J=L.getChild(K);
if(J){M.insertBefore(J)
}else{L.append(M)
}if(M.getParent().equals(this.endContainer)){this.endOffset++
}this.setStartBefore(M)
},moveToPosition:function(K,J){this.setStartAt(K,J);
this.collapse(true)
},selectNodeContents:function(J){this.setStart(J,0);
this.setEnd(J,J.type==CKEDITOR.NODE_TEXT?J.getLength():J.getChildCount())
},setStart:function(K,J){if(K.type==CKEDITOR.NODE_ELEMENT&&CKEDITOR.dtd.$empty[K.getName()]){J=K.getIndex(),K=K.getParent()
}this.startContainer=K;
this.startOffset=J;
if(!this.endContainer){this.endContainer=K;
this.endOffset=J
}E(this)
},setEnd:function(J,K){if(J.type==CKEDITOR.NODE_ELEMENT&&CKEDITOR.dtd.$empty[J.getName()]){K=J.getIndex()+1,J=J.getParent()
}this.endContainer=J;
this.endOffset=K;
if(!this.startContainer){this.startContainer=J;
this.startOffset=K
}E(this)
},setStartAfter:function(J){this.setStart(J.getParent(),J.getIndex()+1)
},setStartBefore:function(J){this.setStart(J.getParent(),J.getIndex())
},setEndAfter:function(J){this.setEnd(J.getParent(),J.getIndex()+1)
},setEndBefore:function(J){this.setEnd(J.getParent(),J.getIndex())
},setStartAt:function(K,J){switch(J){case CKEDITOR.POSITION_AFTER_START:this.setStart(K,0);
break;
case CKEDITOR.POSITION_BEFORE_END:if(K.type==CKEDITOR.NODE_TEXT){this.setStart(K,K.getLength())
}else{this.setStart(K,K.getChildCount())
}break;
case CKEDITOR.POSITION_BEFORE_START:this.setStartBefore(K);
break;
case CKEDITOR.POSITION_AFTER_END:this.setStartAfter(K)
}E(this)
},setEndAt:function(K,J){switch(J){case CKEDITOR.POSITION_AFTER_START:this.setEnd(K,0);
break;
case CKEDITOR.POSITION_BEFORE_END:if(K.type==CKEDITOR.NODE_TEXT){this.setEnd(K,K.getLength())
}else{this.setEnd(K,K.getChildCount())
}break;
case CKEDITOR.POSITION_BEFORE_START:this.setEndBefore(K);
break;
case CKEDITOR.POSITION_AFTER_END:this.setEndAfter(K)
}E(this)
},fixBlock:function(J,M){var L=this.createBookmark(),K=this.document.createElement(M);
this.collapse(J);
this.enlarge(CKEDITOR.ENLARGE_BLOCK_CONTENTS);
this.extractContents().appendTo(K);
K.trim();
if(!CKEDITOR.env.ie){K.appendBogus()
}this.insertNode(K);
this.moveToBookmark(L);
return K
},splitBlock:function(O){var R=new CKEDITOR.dom.elementPath(this.startContainer),L=new CKEDITOR.dom.elementPath(this.endContainer);
var Q=R.blockLimit,N=L.blockLimit;
var P=R.block,M=L.block;
var S=null;
if(!Q.equals(N)){return null
}if(O!="br"){if(!P){P=this.fixBlock(true,O);
M=new CKEDITOR.dom.elementPath(this.endContainer).block
}if(!M){M=this.fixBlock(false,O)
}}var K=P&&this.checkStartOfBlock(),J=M&&this.checkEndOfBlock();
this.deleteContents();
if(P&&P.equals(M)){if(J){S=new CKEDITOR.dom.elementPath(this.startContainer);
this.moveToPosition(M,CKEDITOR.POSITION_AFTER_END);
M=null
}else{if(K){S=new CKEDITOR.dom.elementPath(this.startContainer);
this.moveToPosition(P,CKEDITOR.POSITION_BEFORE_START);
P=null
}else{M=this.splitElement(P);
if(!CKEDITOR.env.ie&&!P.is("ul","ol")){P.appendBogus()
}}}}return{previousBlock:P,nextBlock:M,wasStartOfBlock:K,wasEndOfBlock:J,elementPath:S}
},splitElement:function(K){if(!this.collapsed){return null
}this.setEndAt(K,CKEDITOR.POSITION_BEFORE_END);
var J=this.extractContents();
var L=K.clone(false);
J.appendTo(L);
L.insertAfter(K);
this.moveToPosition(K,CKEDITOR.POSITION_AFTER_END);
return L
},checkBoundaryOfElement:function(L,J){var M=(J==CKEDITOR.START);
var K=this.clone();
K.collapse(M);
K[M?"setStartAt":"setEndAt"](L,M?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_BEFORE_END);
var N=new CKEDITOR.dom.walker(K);
N.evaluator=I(M);
return N[M?"checkBackward":"checkForward"]()
},checkStartOfBlock:function(){var M=this.startContainer,J=this.startOffset;
if(J&&M.type==CKEDITOR.NODE_TEXT){var L=CKEDITOR.tools.ltrim(M.substring(0,J));
if(L.length){return false
}}this.trim();
var N=new CKEDITOR.dom.elementPath(this.startContainer);
var K=this.clone();
K.collapse(true);
K.setStartAt(N.block||N.blockLimit,CKEDITOR.POSITION_AFTER_START);
var O=new CKEDITOR.dom.walker(K);
O.evaluator=G(true);
return O.checkBackward()
},checkEndOfBlock:function(){var M=this.endContainer,L=this.endOffset;
if(M.type==CKEDITOR.NODE_TEXT){var J=CKEDITOR.tools.rtrim(M.substring(L));
if(J.length){return false
}}this.trim();
var N=new CKEDITOR.dom.elementPath(this.endContainer);
var K=this.clone();
K.collapse(false);
K.setEndAt(N.block||N.blockLimit,CKEDITOR.POSITION_BEFORE_END);
var O=new CKEDITOR.dom.walker(K);
O.evaluator=G(false);
return O.checkForward()
},checkReadOnly:(function(){function J(K,L){while(K){if(K.type==CKEDITOR.NODE_ELEMENT){if(K.getAttribute("contentEditable")=="false"&&!K.data("cke-editable")){return 0
}else{if(K.is("html")||K.getAttribute("contentEditable")=="true"&&(K.contains(L)||K.equals(L))){break
}}}K=K.getParent()
}return 1
}return function(){var L=this.startContainer,K=this.endContainer;
return !(J(L,K)&&J(K,L))
}
})(),moveToElementEditablePosition:function(L,K){function J(P,N){var O;
if(P.type==CKEDITOR.NODE_ELEMENT&&P.isEditable(false)&&!CKEDITOR.dtd.$nonEditable[P.getName()]){O=P[K?"getLast":"getFirst"](H)
}if(!N&&!O){O=P[K?"getPrevious":"getNext"](H)
}return O
}var M=0;
while(L){if(L.type==CKEDITOR.NODE_TEXT){this.moveToPosition(L,K?CKEDITOR.POSITION_AFTER_END:CKEDITOR.POSITION_BEFORE_START);
M=1;
break
}if(L.type==CKEDITOR.NODE_ELEMENT){if(L.isEditable()){this.moveToPosition(L,K?CKEDITOR.POSITION_BEFORE_END:CKEDITOR.POSITION_AFTER_START);
M=1
}}L=J(L,M)
}return !!M
},moveToElementEditStart:function(J){return this.moveToElementEditablePosition(J)
},moveToElementEditEnd:function(J){return this.moveToElementEditablePosition(J,true)
},getEnclosedNode:function(){var J=this.clone();
J.optimize();
if(J.startContainer.type!=CKEDITOR.NODE_ELEMENT||J.endContainer.type!=CKEDITOR.NODE_ELEMENT){return null
}var M=new CKEDITOR.dom.walker(J),L=CKEDITOR.dom.walker.bookmark(true),O=CKEDITOR.dom.walker.whitespaces(true),N=function(P){return O(P)&&L(P)
};
J.evaluator=N;
var K=M.next();
M.reset();
return K&&K.equals(M.previous())?K:null
},getTouchedStartNode:function(){var J=this.startContainer;
if(this.collapsed||J.type!=CKEDITOR.NODE_ELEMENT){return J
}return J.getChild(this.startOffset)||J
},getTouchedEndNode:function(){var J=this.endContainer;
if(this.collapsed||J.type!=CKEDITOR.NODE_ELEMENT){return J
}return J.getChild(this.endOffset-1)||J
}}
})();
CKEDITOR.POSITION_AFTER_START=1;
CKEDITOR.POSITION_BEFORE_END=2;
CKEDITOR.POSITION_BEFORE_START=3;
CKEDITOR.POSITION_AFTER_END=4;
CKEDITOR.ENLARGE_ELEMENT=1;
CKEDITOR.ENLARGE_BLOCK_CONTENTS=2;
CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS=3;
CKEDITOR.START=1;
CKEDITOR.END=2;
CKEDITOR.STARTEND=3;
CKEDITOR.SHRINK_ELEMENT=1;
CKEDITOR.SHRINK_TEXT=2;