(function(){CKEDITOR.dom.rangeList=function(C){if(C instanceof CKEDITOR.dom.rangeList){return C
}if(!C){C=[]
}else{if(C instanceof CKEDITOR.dom.range){C=[C]
}}return CKEDITOR.tools.extend(C,B)
};
var B={createIterator:function(){var C=this,E=CKEDITOR.dom.walker.bookmark(),F=function(H){return !(H.is&&H.is("tr"))
},D=[],G;
return{getNextRange:function(K){G=G==undefined?0:G+1;
var M=C[G];
if(M&&C.length>1){if(!G){for(var J=C.length-1;
J>=0;
J--){D.unshift(C[J].createBookmark(true))
}}if(K){var H=0;
while(C[G+H+1]){var N=M.document,P=0,I=N.getById(D[H].endNode),O=N.getById(D[H+1].startNode),L;
while(1){L=I.getNextSourceNode(false);
if(!O.equals(L)){if(E(L)||(L.type==CKEDITOR.NODE_ELEMENT&&L.isBlockBoundary())){I=L;
continue
}}else{P=1
}break
}if(!P){break
}H++
}}M.moveToBookmark(D.shift());
while(H--){L=C[++G];
L.moveToBookmark(D.shift());
M.setEnd(L.endContainer,L.endOffset)
}}return M
}}
},createBookmarks:function(G){var C=[],F;
for(var E=0;
E<this.length;
E++){C.push(F=this[E].createBookmark(G,true));
for(var D=E+1;
D<this.length;
D++){this[D]=A(F,this[D]);
this[D]=A(F,this[D],true)
}}return C
},createBookmarks2:function(E){var D=[];
for(var C=0;
C<this.length;
C++){D.push(this[C].createBookmark2(E))
}return D
},moveToBookmarks:function(D){for(var C=0;
C<this.length;
C++){this[C].moveToBookmark(D[C])
}}};
function A(G,H,J){var F=G.serializable,C=H[J?"endContainer":"startContainer"],I=J?"endOffset":"startOffset";
var D=F?H.document.getById(G.startNode):G.startNode;
var E=F?H.document.getById(G.endNode):G.endNode;
if(C.equals(D.getPrevious())){H.startOffset=H.startOffset-C.getLength()-E.getPrevious().getLength();
C=E.getNext()
}else{if(C.equals(E.getPrevious())){H.startOffset=H.startOffset-C.getLength();
C=E.getNext()
}}C.equals(D.getParent())&&H[I]++;
C.equals(E.getParent())&&H[I]++;
H[J?"endContainer":"startContainer"]=C;
return H
}})();