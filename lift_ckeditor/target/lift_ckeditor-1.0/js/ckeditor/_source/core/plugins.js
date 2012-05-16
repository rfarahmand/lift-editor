;
CKEDITOR.plugins=new CKEDITOR.resourceManager("_source/plugins/","plugin");
CKEDITOR.plugins.load=CKEDITOR.tools.override(CKEDITOR.plugins.load,function(A){return function(B,F,D){var E={};
var C=function(G){A.call(this,G,function(H){CKEDITOR.tools.extend(E,H);
var M=[];
for(var L in H){var K=H[L],J=K&&K.requires;
if(J){for(var I=0;
I<J.length;
I++){if(!E[J[I]]){M.push(J[I])
}}}}if(M.length){C.call(this,M)
}else{for(L in E){K=E[L];
if(K.onLoad&&!K.onLoad._called){K.onLoad();
K.onLoad._called=1
}}if(F){F.call(D||window,E)
}}},this)
};
C.call(this,B)
}
});
CKEDITOR.plugins.setLang=function(D,E,F){var C=this.get(D),A=C.langEntries||(C.langEntries={}),B=C.lang||(C.lang=[]);
if(CKEDITOR.tools.indexOf(B,E)==-1){B.push(E)
}A[E]=F
};