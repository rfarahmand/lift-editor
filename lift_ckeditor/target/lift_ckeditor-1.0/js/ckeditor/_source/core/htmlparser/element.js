;
CKEDITOR.htmlParser.element=function(B,A){this.name=B;
this.attributes=A||(A={});
this.children=[];
var C=A["data-cke-real-element-type"]||B||"";
var G=C.match(/^cke:(.*)/);
G&&(C=G[1]);
var D=CKEDITOR.dtd,E=!!(D.$nonBodyContent[C]||D.$block[C]||D.$listItem[C]||D.$tableContent[C]||D.$nonEditable[C]||C=="br"),F=!!D.$empty[B];
this.isEmpty=F;
this.isUnknown=!D[B];
this._={isBlockLike:E,hasInlineStarted:F||!E}
};
CKEDITOR.htmlParser.cssStyle=function(){var C,A=arguments[0],B={};
C=A instanceof CKEDITOR.htmlParser.element?A.attributes.style:A;
(C||"").replace(/&quot;/g,'"').replace(/\s*([^ :;]+)\s*:\s*([^;]+)\s*(?=;|$)/g,function(E,D,F){D=="font-family"&&(F=F.replace(/["']/g,""));
B[D.toLowerCase()]=F
});
return{rules:B,populate:function(E){var D=this.toString();
if(D){E instanceof CKEDITOR.dom.element?E.setAttribute("style",D):E instanceof CKEDITOR.htmlParser.element?E.attributes.style=D:E.style=D
}},toString:function(){var D=[];
for(var E in B){B[E]&&D.push(E,":",B[E],";")
}return D.join("")
}}
};
(function(){var A=function(C,B){C=C[0];
B=B[0];
return C<B?-1:C>B?1:0
};
CKEDITOR.htmlParser.element.prototype={type:CKEDITOR.NODE_ELEMENT,add:CKEDITOR.htmlParser.fragment.prototype.add,clone:function(){return new CKEDITOR.htmlParser.element(this.name,this.attributes)
},writeHtml:function(E,B){var F=this.attributes;
var I=this,D=I.name,N,K,P;
var O;
I.filterChildren=function(){if(!O){var Q=new CKEDITOR.htmlParser.basicWriter();
CKEDITOR.htmlParser.fragment.prototype.writeChildrenHtml.call(I,Q,B);
I.children=new CKEDITOR.htmlParser.fragment.fromHtml(Q.getHtml(),0,I.clone()).children;
O=1
}};
if(B){while(true){if(!(D=B.onElementName(D))){return 
}I.name=D;
if(!(I=B.onElement(I))){return 
}I.parent=this.parent;
if(I.name==D){break
}if(I.type!=CKEDITOR.NODE_ELEMENT){I.writeHtml(E,B);
return 
}D=I.name;
if(!D){for(var M=0,C=this.children.length;
M<C;
M++){this.children[M].parent=I.parent
}this.writeChildrenHtml.call(I,E,O?null:B);
return 
}}F=I.attributes
}E.openTag(D,F);
var J=[];
for(var H=0;
H<2;
H++){for(N in F){K=N;
P=F[N];
if(H==1){J.push([N,P])
}else{if(B){while(true){if(!(K=B.onAttributeName(N))){delete F[N];
break
}else{if(K!=N){delete F[N];
N=K;
continue
}else{break
}}}if(K){if((P=B.onAttribute(I,K,P))===false){delete F[K]
}else{F[K]=P
}}}}}}if(E.sortAttributes){J.sort(A)
}var L=J.length;
for(H=0;
H<L;
H++){var G=J[H];
E.attribute(G[0],G[1])
}E.openTagClose(D,I.isEmpty);
if(!I.isEmpty){this.writeChildrenHtml.call(I,E,O?null:B);
E.closeTag(D)
}},writeChildrenHtml:function(C,B){CKEDITOR.htmlParser.fragment.prototype.writeChildrenHtml.apply(this,arguments)
}}
})();