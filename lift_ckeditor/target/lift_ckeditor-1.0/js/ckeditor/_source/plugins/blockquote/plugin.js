(function(){function A(E,G){var F=G.block||G.blockLimit;
if(!F||F.getName()=="body"){return CKEDITOR.TRISTATE_OFF
}if(F.getAscendant("blockquote",true)){return CKEDITOR.TRISTATE_ON
}return CKEDITOR.TRISTATE_OFF
}function D(E){var F=E.editor;
if(F.readOnly){return 
}var G=F.getCommand("blockquote");
G.state=A(F,E.data.path);
G.fire("state")
}function C(G){for(var E=0,F=G.getChildCount(),H;
E<F&&(H=G.getChild(E));
E++){if(H.type==CKEDITOR.NODE_ELEMENT&&H.isBlockBoundary()){return false
}}return true
}var B={exec:function(J){var L=J.getCommand("blockquote").state,h=J.getSelection(),U=h&&h.getRanges(true)[0];
if(!U){return 
}var M=h.createBookmarks();
if(CKEDITOR.env.ie){var H=M[0].startNode,a=M[0].endNode,K;
if(H&&H.getParent().getName()=="blockquote"){K=H;
while((K=K.getNext())){if(K.type==CKEDITOR.NODE_ELEMENT&&K.isBlockBoundary()){H.move(K,true);
break
}}}if(a&&a.getParent().getName()=="blockquote"){K=a;
while((K=K.getPrevious())){if(K.type==CKEDITOR.NODE_ELEMENT&&K.isBlockBoundary()){a.move(K);
break
}}}}var X=U.createIterator(),Q;
X.enlargeBr=J.config.enterMode!=CKEDITOR.ENTER_BR;
if(L==CKEDITOR.TRISTATE_OFF){var R=[];
while((Q=X.getNextParagraph())){R.push(Q)
}if(R.length<1){var G=J.document.createElement(J.config.enterMode==CKEDITOR.ENTER_P?"p":"div"),I=M.shift();
U.insertNode(G);
G.append(new CKEDITOR.dom.text("\ufeff",J.document));
U.moveToBookmark(I);
U.selectNodeContents(G);
U.collapse(true);
I=U.createBookmark();
R.push(G);
M.unshift(I)
}var S=R[0].getParent(),e=[];
for(var b=0;
b<R.length;
b++){Q=R[b];
S=S.getCommonAncestor(Q.getParent())
}var c={table:1,tbody:1,tr:1,ol:1,ul:1};
while(c[S.getName()]){S=S.getParent()
}var d=null;
while(R.length>0){Q=R.shift();
while(!Q.getParent().equals(S)){Q=Q.getParent()
}if(!Q.equals(d)){e.push(Q)
}d=Q
}while(e.length>0){Q=e.shift();
if(Q.getName()=="blockquote"){var F=new CKEDITOR.dom.documentFragment(J.document);
while(Q.getFirst()){F.append(Q.getFirst().remove());
R.push(F.getLast())
}F.replace(Q)
}else{R.push(Q)
}}var Y=J.document.createElement("blockquote");
Y.insertBefore(R[0]);
while(R.length>0){Q=R.shift();
Y.append(Q)
}}else{if(L==CKEDITOR.TRISTATE_ON){var f=[],T={};
while((Q=X.getNextParagraph())){var g=null,V=null;
while(Q.getParent()){if(Q.getParent().getName()=="blockquote"){g=Q.getParent();
V=Q;
break
}Q=Q.getParent()
}if(g&&V&&!V.getCustomData("blockquote_moveout")){f.push(V);
CKEDITOR.dom.element.setMarker(T,V,"blockquote_moveout",true)
}}CKEDITOR.dom.element.clearAllMarkers(T);
var E=[],P=[];
T={};
while(f.length>0){var Z=f.shift();
Y=Z.getParent();
if(!Z.getPrevious()){Z.remove().insertBefore(Y)
}else{if(!Z.getNext()){Z.remove().insertAfter(Y)
}else{Z.breakParent(Z.getParent());
P.push(Z.getNext())
}}if(!Y.getCustomData("blockquote_processed")){P.push(Y);
CKEDITOR.dom.element.setMarker(T,Y,"blockquote_processed",true)
}E.push(Z)
}CKEDITOR.dom.element.clearAllMarkers(T);
for(b=P.length-1;
b>=0;
b--){Y=P[b];
if(C(Y)){Y.remove()
}}if(J.config.enterMode==CKEDITOR.ENTER_BR){var O=true;
while(E.length){Z=E.shift();
if(Z.getName()=="div"){F=new CKEDITOR.dom.documentFragment(J.document);
var W=O&&Z.getPrevious()&&!(Z.getPrevious().type==CKEDITOR.NODE_ELEMENT&&Z.getPrevious().isBlockBoundary());
if(W){F.append(J.document.createElement("br"))
}var N=Z.getNext()&&!(Z.getNext().type==CKEDITOR.NODE_ELEMENT&&Z.getNext().isBlockBoundary());
while(Z.getFirst()){Z.getFirst().remove().appendTo(F)
}if(N){F.append(J.document.createElement("br"))
}F.replace(Z);
O=false
}}}}}h.selectBookmarks(M);
J.focus()
}};
CKEDITOR.plugins.add("blockquote",{init:function(E){E.addCommand("blockquote",B);
E.ui.addButton("Blockquote",{label:E.lang.blockquote,command:"blockquote"});
E.on("selectionChange",D)
},requires:["domiterator"]})
})();