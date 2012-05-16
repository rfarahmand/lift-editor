;
CKEDITOR.scriptLoader=(function(){var A={},B={};
return{load:function(E,N,O,F){var D=(typeof E=="string");
if(D){E=[E]
}if(!O){O=CKEDITOR
}var K=E.length,I=[],J=[];
var M=function(P){if(N){if(D){N.call(O,P)
}else{N.call(O,I,J)
}}};
if(K===0){M(true);
return 
}var H=function(P,Q){(Q?I:J).push(P);
if(--K<=0){F&&CKEDITOR.document.getDocumentElement().removeStyle("cursor");
M(Q)
}};
var L=function(P,S){A[P]=1;
var R=B[P];
delete B[P];
for(var Q=0;
Q<R.length;
Q++){R[Q](P,S)
}};
var C=function(Q){if(A[Q]){H(Q,true);
return 
}var R=B[Q]||(B[Q]=[]);
R.push(H);
if(R.length>1){return 
}var P=new CKEDITOR.dom.element("script");
P.setAttributes({type:"text/javascript",src:Q});
if(N){if(CKEDITOR.env.ie){P.$.onreadystatechange=function(){if(P.$.readyState=="loaded"||P.$.readyState=="complete"){P.$.onreadystatechange=null;
L(Q,true)
}}
}else{P.$.onload=function(){setTimeout(function(){L(Q,true)
},0)
};
P.$.onerror=function(){L(Q,false)
}
}}P.appendTo(CKEDITOR.document.getHead());
CKEDITOR.fire("download",Q)
};
F&&CKEDITOR.document.getDocumentElement().setStyle("cursor","wait");
for(var G=0;
G<K;
G++){C(E[G])
}}}
})();