;
CKEDITOR.plugins.add("domiterator");
(function(){function B(G){if(arguments.length<1){return 
}this.range=G;
this.forceBrBreak=0;
this.enlargeBr=1;
this.enforceRealBlocks=0;
this._||(this._={})
}var C=/^[\r\n\t ]+$/,F=CKEDITOR.dom.walker.bookmark(false,true),E=CKEDITOR.dom.walker.whitespaces(true),A=function(G){return F(G)&&E(G)
};
function D(J,G,I){var H=J.getNextSourceNode(G,null,I);
while(!F(H)){H=H.getNextSourceNode(G,null,I)
}return H
}B.prototype={getNextParagraph:function(e){var P;
var T;
var S;
var X;
var Y,L;
if(!this._.started){T=this.range.clone();
T.shrink(CKEDITOR.NODE_ELEMENT,true);
X=T.endContainer.hasAscendant("pre",true)||T.startContainer.hasAscendant("pre",true);
T.enlarge(this.forceBrBreak&&!X||!this.enlargeBr?CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS:CKEDITOR.ENLARGE_BLOCK_CONTENTS);
if(!T.collapsed){var Z=new CKEDITOR.dom.walker(T.clone()),R=CKEDITOR.dom.walker.bookmark(true,true);
Z.evaluator=R;
this._.nextNode=Z.next();
Z=new CKEDITOR.dom.walker(T.clone());
Z.evaluator=R;
var M=Z.previous();
this._.lastNode=M.getNextSourceNode(true);
if(this._.lastNode&&this._.lastNode.type==CKEDITOR.NODE_TEXT&&!CKEDITOR.tools.trim(this._.lastNode.getText())&&this._.lastNode.getParent().isBlockBoundary()){var N=new CKEDITOR.dom.range(T.document);
N.moveToPosition(this._.lastNode,CKEDITOR.POSITION_AFTER_END);
if(N.checkEndOfBlock()){var W=new CKEDITOR.dom.elementPath(N.endContainer);
var d=W.block||W.blockLimit;
this._.lastNode=d.getNextSourceNode(true)
}}if(!this._.lastNode){this._.lastNode=this._.docEndMarker=T.document.createText("");
this._.lastNode.insertAfter(M)
}T=null
}this._.started=1
}var K=this._.nextNode;
M=this._.lastNode;
this._.nextNode=null;
while(K){var I=0,Q=K.hasAscendant("pre");
var J=(K.type!=CKEDITOR.NODE_ELEMENT),f=0;
if(!J){var G=K.getName();
if(K.isBlockBoundary(this.forceBrBreak&&!Q&&{br:1})){if(G=="br"){J=1
}else{if(!T&&!K.getChildCount()&&G!="hr"){P=K;
S=K.equals(M);
break
}}if(T){T.setEndAt(K,CKEDITOR.POSITION_BEFORE_START);
if(G!="br"){this._.nextNode=K
}}I=1
}else{if(K.getFirst()){if(!T){T=new CKEDITOR.dom.range(this.range.document);
T.setStartAt(K,CKEDITOR.POSITION_BEFORE_START)
}K=K.getFirst();
continue
}J=1
}}else{if(K.type==CKEDITOR.NODE_TEXT){if(C.test(K.getText())){J=0
}}}if(J&&!T){T=new CKEDITOR.dom.range(this.range.document);
T.setStartAt(K,CKEDITOR.POSITION_BEFORE_START)
}S=((!I||J)&&K.equals(M));
if(T&&!I){while(!K.getNext(A)&&!S){var O=K.getParent();
if(O.isBlockBoundary(this.forceBrBreak&&!Q&&{br:1})){I=1;
J=0;
S=S||(O.equals(M));
T.setEndAt(O,CKEDITOR.POSITION_BEFORE_END);
break
}K=O;
J=1;
S=(K.equals(M));
f=1
}}if(J){T.setEndAt(K,CKEDITOR.POSITION_AFTER_END)
}K=D(K,f,M);
S=!K;
if(S||(I&&T)){break
}}if(!P){if(!T){this._.docEndMarker&&this._.docEndMarker.remove();
this._.nextNode=null;
return null
}var c=new CKEDITOR.dom.elementPath(T.startContainer);
var V=c.blockLimit,H={div:1,th:1,td:1};
P=c.block;
if(!P&&!this.enforceRealBlocks&&H[V.getName()]&&T.checkStartOfBlock()&&T.checkEndOfBlock()){P=V
}else{if(!P||(this.enforceRealBlocks&&P.getName()=="li")){P=this.range.document.createElement(e||"p");
T.extractContents().appendTo(P);
P.trim();
T.insertNode(P);
Y=L=true
}else{if(P.getName()!="li"){if(!T.checkStartOfBlock()||!T.checkEndOfBlock()){P=P.clone(false);
T.extractContents().appendTo(P);
P.trim();
var a=T.splitBlock();
Y=!a.wasStartOfBlock;
L=!a.wasEndOfBlock;
T.insertNode(P)
}}else{if(!S){this._.nextNode=(P.equals(M)?null:D(T.getBoundaryNodes().endNode,1,M))
}}}}}if(Y){var U=P.getPrevious();
if(U&&U.type==CKEDITOR.NODE_ELEMENT){if(U.getName()=="br"){U.remove()
}else{if(U.getLast()&&U.getLast().$.nodeName.toLowerCase()=="br"){U.getLast().remove()
}}}}if(L){var b=P.getLast();
if(b&&b.type==CKEDITOR.NODE_ELEMENT&&b.getName()=="br"){if(CKEDITOR.env.ie||b.getPrevious(F)||b.getNext(F)){b.remove()
}}}if(!this._.nextNode){this._.nextNode=(S||P.equals(M)||!M)?null:D(P,1,M)
}return P
}};
CKEDITOR.dom.range.prototype.createIterator=function(){return new B(this)
}
})();