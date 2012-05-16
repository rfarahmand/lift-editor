;
CKEDITOR.resourceManager=function(B,A){this.basePath=B;
this.fileName=A;
this.registered={};
this.loaded={};
this.externals={};
this._={waitingList:{}}
};
CKEDITOR.resourceManager.prototype={add:function(A,B){if(this.registered[A]){throw'[CKEDITOR.resourceManager.add] The resource name "'+A+'" is already registered.'
}CKEDITOR.fire(A+CKEDITOR.tools.capitalize(this.fileName)+"Ready",this.registered[A]=B||{})
},get:function(A){return this.registered[A]||null
},getPath:function(A){var B=this.externals[A];
return CKEDITOR.getUrl((B&&B.dir)||this.basePath+A+"/")
},getFilePath:function(A){var B=this.externals[A];
return CKEDITOR.getUrl(this.getPath(A)+((B&&(typeof B.file=="string"))?B.file:this.fileName+".js"))
},addExternal:function(D,C,E){D=D.split(",");
for(var B=0;
B<D.length;
B++){var A=D[B];
this.externals[A]={dir:C,file:E}
}},load:function(H,J,K){if(!CKEDITOR.tools.isArray(H)){H=H?[H]:[]
}var F=this.loaded,D=this.registered,I=[],G={},C={};
for(var E=0;
E<H.length;
E++){var B=H[E];
if(!B){continue
}if(!F[B]&&!D[B]){var A=this.getFilePath(B);
I.push(A);
if(!(A in G)){G[A]=[]
}G[A].push(B)
}else{C[B]=this.get(B)
}}CKEDITOR.scriptLoader.load(I,function(P,L){if(L.length){throw'[CKEDITOR.resourceManager.load] Resource name "'+G[L[0]].join(",")+'" was not found at "'+L[0]+'".'
}for(var O=0;
O<P.length;
O++){var Q=G[P[O]];
for(var N=0;
N<Q.length;
N++){var M=Q[N];
C[M]=this.get(M);
F[M]=1
}}J.call(K,C)
},this)
}};