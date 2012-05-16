;
CKEDITOR.skins=(function(){var A={},C={};
var B=function(J,H,F,P){var K=A[H];
if(!J.skin){J.skin=K;
if(K.init){K.init(J)
}}var N=function(R){for(var S=0;
S<R.length;
S++){R[S]=CKEDITOR.getUrl(C[H]+R[S])
}};
function Q(R,S){return R.replace(/url\s*\(([\s'"]*)(.*?)([\s"']*)\)/g,function(T,U,V,W){if(/^\/|^\w?:/.test(V)){return T
}else{return"url("+S+U+V+W+")"
}})
}F=K[F];
var M=!F||!!F._isLoaded;
if(M){P&&P()
}else{var D=F._pending||(F._pending=[]);
D.push(P);
if(D.length>1){return 
}var O=!F.css||!F.css.length,G=!F.js||!F.js.length;
var E=function(){if(O&&G){F._isLoaded=1;
for(var R=0;
R<D.length;
R++){if(D[R]){D[R]()
}}}};
if(!O){var I=F.css;
if(CKEDITOR.tools.isArray(I)){N(I);
for(var L=0;
L<I.length;
L++){CKEDITOR.document.appendStyleSheet(I[L])
}}else{I=Q(I,CKEDITOR.getUrl(C[H]));
CKEDITOR.document.appendStyleText(I)
}F.css=I;
O=1
}if(!G){N(F.js);
CKEDITOR.scriptLoader.load(F.js,function(){G=1;
E()
})
}E()
}};
return{add:function(D,E){A[D]=E;
E.skinPath=C[D]||(C[D]=CKEDITOR.getUrl("_source/skins/"+D+"/"))
},load:function(F,E,H){var D=F.skinName,G=F.skinPath;
if(A[D]){B(F,D,E,H)
}else{C[D]=G;
CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(G+"skin.js"),function(){B(F,D,E,H)
})
}}}
})();