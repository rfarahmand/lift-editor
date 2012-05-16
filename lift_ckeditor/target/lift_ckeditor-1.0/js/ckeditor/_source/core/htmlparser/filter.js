(function(){CKEDITOR.htmlParser.filter=CKEDITOR.tools.createClass({$:function(F){this._={elementNames:[],attributeNames:[],elements:{$length:0},attributes:{$length:0}};
if(F){this.addRules(F,10)
}},proto:{addRules:function(G,F){if(typeof F!="number"){F=10
}A(this._.elementNames,G.elementNames,F);
A(this._.attributeNames,G.attributeNames,F);
E(this._.elements,G.elements,F);
E(this._.attributes,G.attributes,F);
this._.text=D(this._.text,G.text,F)||this._.text;
this._.comment=D(this._.comment,G.comment,F)||this._.comment;
this._.root=D(this._.root,G.root,F)||this._.root
},onElementName:function(F){return C(F,this._.elementNames)
},onAttributeName:function(F){return C(F,this._.attributeNames)
},onText:function(G){var F=this._.text;
return F?F.filter(G):G
},onComment:function(G,H){var F=this._.comment;
return F?F.filter(G,H):G
},onFragment:function(F){var G=this._.root;
return G?G.filter(F):F
},onElement:function(H){var J=[this._.elements["^"],this._.elements[H.name],this._.elements.$],I,F;
for(var G=0;
G<3;
G++){I=J[G];
if(I){F=I.filter(H,this);
if(F===false){return null
}if(F&&F!=H){return this.onNode(F)
}if(H.parent&&!H.name){break
}}}return H
},onNode:function(G){var F=G.type;
return F==CKEDITOR.NODE_ELEMENT?this.onElement(G):F==CKEDITOR.NODE_TEXT?new CKEDITOR.htmlParser.text(this.onText(G.value)):F==CKEDITOR.NODE_COMMENT?new CKEDITOR.htmlParser.comment(this.onComment(G.value)):null
},onAttribute:function(H,G,J){var I=this._.attributes[G];
if(I){var F=I.filter(J,H,this);
if(F===false){return false
}if(typeof F!="undefined"){return F
}}return J
}}});
function C(F,I){for(var G=0;
F&&G<I.length;
G++){var H=I[G];
F=F.replace(H[0],H[1])
}return F
}function A(L,F,J){if(typeof F=="function"){F=[F]
}var I,H,M=L.length,G=F&&F.length;
if(G){for(I=0;
I<M&&L[I].pri<J;
I++){}for(H=G-1;
H>=0;
H--){var K=F[H];
if(K){K.pri=J;
L.splice(I,0,K)
}}}}function E(I,F,H){if(F){for(var G in F){var J=I[G];
I[G]=D(J,F[G],H);
if(!J){I.$length++
}}}}function D(H,G,F){if(G){G.pri=F;
if(H){if(!H.splice){if(H.pri>F){H=[G,H]
}else{H=[H,G]
}H.filter=B
}else{A(H,G,F)
}return H
}else{G.filter=G;
return G
}}}function B(H){var K=H.type||H instanceof CKEDITOR.htmlParser.fragment;
for(var G=0;
G<this.length;
G++){if(K){var L=H.type,J=H.name
}var I=this[G],F=I.apply(window,arguments);
if(F===false){return F
}if(K){if(F&&(F.name!=J||F.type!=L)){return F
}}else{if(typeof F!="string"){return F
}}F!=undefined&&(H=F)
}return H
}})();