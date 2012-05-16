;
CKEDITOR.dom.node=function(B){if(B){var A=B.nodeType==CKEDITOR.NODE_DOCUMENT?"document":B.nodeType==CKEDITOR.NODE_ELEMENT?"element":B.nodeType==CKEDITOR.NODE_TEXT?"text":B.nodeType==CKEDITOR.NODE_COMMENT?"comment":"domObject";
return new CKEDITOR.dom[A](B)
}return this
};
CKEDITOR.dom.node.prototype=new CKEDITOR.dom.domObject();
CKEDITOR.NODE_ELEMENT=1;
CKEDITOR.NODE_DOCUMENT=9;
CKEDITOR.NODE_TEXT=3;
CKEDITOR.NODE_COMMENT=8;
CKEDITOR.NODE_DOCUMENT_FRAGMENT=11;
CKEDITOR.POSITION_IDENTICAL=0;
CKEDITOR.POSITION_DISCONNECTED=1;
CKEDITOR.POSITION_FOLLOWING=2;
CKEDITOR.POSITION_PRECEDING=4;
CKEDITOR.POSITION_IS_CONTAINED=8;
CKEDITOR.POSITION_CONTAINS=16;
CKEDITOR.tools.extend(CKEDITOR.dom.node.prototype,{appendTo:function(B,A){B.append(this,A);
return B
},clone:function(A,D){var C=this.$.cloneNode(A);
var B=function(F){if(F.nodeType!=CKEDITOR.NODE_ELEMENT){return 
}if(!D){F.removeAttribute("id",false)
}F.removeAttribute("data-cke-expando",false);
if(A){var G=F.childNodes;
for(var E=0;
E<G.length;
E++){B(G[E])
}}};
B(C);
return new CKEDITOR.dom.node(C)
},hasPrevious:function(){return !!this.$.previousSibling
},hasNext:function(){return !!this.$.nextSibling
},insertAfter:function(A){A.$.parentNode.insertBefore(this.$,A.$.nextSibling);
return A
},insertBefore:function(A){A.$.parentNode.insertBefore(this.$,A.$);
return A
},insertBeforeMe:function(A){this.$.parentNode.insertBefore(A.$,this.$);
return A
},getAddress:function(D){var B=[];
var E=this.getDocument().$.documentElement;
var C=this.$;
while(C&&C!=E){var A=C.parentNode;
if(A){B.unshift(this.getIndex.call({$:C},D))
}C=A
}return B
},getDocument:function(){return new CKEDITOR.dom.document(this.$.ownerDocument||this.$.parentNode.ownerDocument)
},getIndex:function(C){var B=this.$,A=0;
while((B=B.previousSibling)){if(C&&B.nodeType==3&&(!B.nodeValue.length||(B.previousSibling&&B.previousSibling.nodeType==3))){continue
}A++
}return A
},getNextSourceNode:function(A,C,F){if(F&&!F.call){var B=F;
F=function(G){return !G.equals(B)
}
}var E=(!A&&this.getFirst&&this.getFirst()),D;
if(!E){if(this.type==CKEDITOR.NODE_ELEMENT&&F&&F(this,true)===false){return null
}E=this.getNext()
}while(!E&&(D=(D||this).getParent())){if(F&&F(D,true)===false){return null
}E=D.getNext()
}if(!E){return null
}if(F&&F(E)===false){return null
}if(C&&C!=E.type){return E.getNextSourceNode(false,C,F)
}return E
},getPreviousSourceNode:function(A,C,F){if(F&&!F.call){var B=F;
F=function(G){return !G.equals(B)
}
}var E=(!A&&this.getLast&&this.getLast()),D;
if(!E){if(this.type==CKEDITOR.NODE_ELEMENT&&F&&F(this,true)===false){return null
}E=this.getPrevious()
}while(!E&&(D=(D||this).getParent())){if(F&&F(D,true)===false){return null
}E=D.getPrevious()
}if(!E){return null
}if(F&&F(E)===false){return null
}if(C&&E.type!=C){return E.getPreviousSourceNode(false,C,F)
}return E
},getPrevious:function(C){var B=this.$,A;
do{B=B.previousSibling;
A=B&&B.nodeType!=10&&new CKEDITOR.dom.node(B)
}while(A&&C&&!C(A));
return A
},getNext:function(C){var B=this.$,A;
do{B=B.nextSibling;
A=B&&new CKEDITOR.dom.node(B)
}while(A&&C&&!C(A));
return A
},getParent:function(){var A=this.$.parentNode;
return(A&&A.nodeType==1)?new CKEDITOR.dom.node(A):null
},getParents:function(B){var C=this;
var A=[];
do{A[B?"push":"unshift"](C)
}while((C=C.getParent()));
return A
},getCommonAncestor:function(A){if(A.equals(this)){return this
}if(A.contains&&A.contains(this)){return A
}var B=this.contains?this:this.getParent();
do{if(B.contains(A)){return B
}}while((B=B.getParent()));
return null
},getPosition:function(D){var E=this.$;
var F=D.$;
if(E.compareDocumentPosition){return E.compareDocumentPosition(F)
}if(E==F){return CKEDITOR.POSITION_IDENTICAL
}if(this.type==CKEDITOR.NODE_ELEMENT&&D.type==CKEDITOR.NODE_ELEMENT){if(E.contains){if(E.contains(F)){return CKEDITOR.POSITION_CONTAINS+CKEDITOR.POSITION_PRECEDING
}if(F.contains(E)){return CKEDITOR.POSITION_IS_CONTAINED+CKEDITOR.POSITION_FOLLOWING
}}if("sourceIndex" in E){return(E.sourceIndex<0||F.sourceIndex<0)?CKEDITOR.POSITION_DISCONNECTED:(E.sourceIndex<F.sourceIndex)?CKEDITOR.POSITION_PRECEDING:CKEDITOR.POSITION_FOLLOWING
}}var B=this.getAddress(),A=D.getAddress(),G=Math.min(B.length,A.length);
for(var C=0;
C<=G-1;
C++){if(B[C]!=A[C]){if(C<G){return B[C]<A[C]?CKEDITOR.POSITION_PRECEDING:CKEDITOR.POSITION_FOLLOWING
}break
}}return(B.length<A.length)?CKEDITOR.POSITION_CONTAINS+CKEDITOR.POSITION_PRECEDING:CKEDITOR.POSITION_IS_CONTAINED+CKEDITOR.POSITION_FOLLOWING
},getAscendant:function(A,C){var D=this.$,B;
if(!C){D=D.parentNode
}while(D){if(D.nodeName&&(B=D.nodeName.toLowerCase(),(typeof A=="string"?B==A:B in A))){return new CKEDITOR.dom.node(D)
}D=D.parentNode
}return null
},hasAscendant:function(B,A){var C=this.$;
if(!A){C=C.parentNode
}while(C){if(C.nodeName&&C.nodeName.toLowerCase()==B){return true
}C=C.parentNode
}return false
},move:function(B,A){B.append(this.remove(),A)
},remove:function(A){var C=this.$;
var B=C.parentNode;
if(B){if(A){for(var D;
(D=C.firstChild);
){B.insertBefore(C.removeChild(D),C)
}}B.removeChild(C)
}return this
},replace:function(A){this.insertBefore(A);
A.remove()
},trim:function(){this.ltrim();
this.rtrim()
},ltrim:function(){var C;
while(this.getFirst&&(C=this.getFirst())){if(C.type==CKEDITOR.NODE_TEXT){var B=CKEDITOR.tools.ltrim(C.getText()),A=C.getLength();
if(!B){C.remove();
continue
}else{if(B.length<A){C.split(A-B.length);
this.$.removeChild(this.$.firstChild)
}}}break
}},rtrim:function(){var C;
while(this.getLast&&(C=this.getLast())){if(C.type==CKEDITOR.NODE_TEXT){var B=CKEDITOR.tools.rtrim(C.getText()),A=C.getLength();
if(!B){C.remove();
continue
}else{if(B.length<A){C.split(B.length);
this.$.lastChild.parentNode.removeChild(this.$.lastChild)
}}}break
}if(!CKEDITOR.env.ie&&!CKEDITOR.env.opera){C=this.$.lastChild;
if(C&&C.type==1&&C.nodeName.toLowerCase()=="br"){C.parentNode.removeChild(C)
}}},isReadOnly:function(){var A=this;
if(this.type!=CKEDITOR.NODE_ELEMENT){A=this.getParent()
}if(A&&typeof A.$.isContentEditable!="undefined"){return !(A.$.isContentEditable||A.data("cke-editable"))
}else{var B=A;
while(B){if(B.is("body")||!!B.data("cke-editable")){break
}if(B.getAttribute("contentEditable")=="false"){return true
}else{if(B.getAttribute("contentEditable")=="true"){break
}}B=B.getParent()
}return false
}}});