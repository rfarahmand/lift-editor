(function(){var A=[];
CKEDITOR.on("reset",function(){A=[]
});
CKEDITOR.tools={arrayCompare:function(C,B){if(!C&&!B){return true
}if(!C||!B||C.length!=B.length){return false
}for(var D=0;
D<C.length;
D++){if(C[D]!=B[D]){return false
}}return true
},clone:function(E){var F;
if(E&&(E instanceof Array)){F=[];
for(var C=0;
C<E.length;
C++){F[C]=this.clone(E[C])
}return F
}if(E===null||(typeof (E)!="object")||(E instanceof String)||(E instanceof Number)||(E instanceof Boolean)||(E instanceof Date)||(E instanceof RegExp)){return E
}F=new E.constructor();
for(var B in E){var D=E[B];
F[B]=this.clone(D)
}return F
},capitalize:function(B){return B.charAt(0).toUpperCase()+B.substring(1).toLowerCase()
},extend:function(G){var E=arguments.length,C,H;
if(typeof (C=arguments[E-1])=="boolean"){E--
}else{if(typeof (C=arguments[E-2])=="boolean"){H=arguments[E-1];
E-=2
}}for(var D=1;
D<E;
D++){var F=arguments[D];
for(var B in F){if(C===true||G[B]==undefined){if(!H||(B in H)){G[B]=F[B]
}}}}return G
},prototypedCopy:function(B){var C=function(){};
C.prototype=B;
return new C()
},isArray:function(B){return(!!B&&B instanceof Array)
},isEmpty:function(B){for(var C in B){if(B.hasOwnProperty(C)){return false
}}return true
},cssStyleToDomStyle:(function(){var C=document.createElement("div").style;
var B=(typeof C.cssFloat!="undefined")?"cssFloat":(typeof C.styleFloat!="undefined")?"styleFloat":"float";
return function(D){if(D=="float"){return B
}else{return D.replace(/-./g,function(E){return E.substr(1).toUpperCase()
})
}}
})(),buildStyleHtml:function(D){D=[].concat(D);
var E,B=[];
for(var C=0;
C<D.length;
C++){E=D[C];
if(/@import|[{}]/.test(E)){B.push("<style>"+E+"</style>")
}else{B.push('<link type="text/css" rel=stylesheet href="'+E+'">')
}}return B.join("")
},htmlEncode:function(F){var D=function(H){var G=new CKEDITOR.dom.element("span");
G.setText(H);
return G.getHtml()
};
var E=(D("\n").toLowerCase()=="<br>")?function(G){return D(G).replace(/<br>/gi,"\n")
}:D;
var C=(D(">")==">")?function(G){return E(G).replace(/>/g,"&gt;")
}:E;
var B=(D("  ")=="&nbsp; ")?function(G){return C(G).replace(/&nbsp;/g," ")
}:C;
this.htmlEncode=B;
return this.htmlEncode(F)
},htmlEncodeAttr:function(B){return B.replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
},getNextNumber:(function(){var B=0;
return function(){return ++B
}
})(),getNextId:function(){return"cke_"+this.getNextNumber()
},override:function(C,B){return B(C)
},setTimeout:function(E,C,D,B,F){if(!F){F=window
}if(!D){D=F
}return F.setTimeout(function(){if(B){E.apply(D,[].concat(B))
}else{E.apply(D)
}},C||0)
},trim:(function(){var B=/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g;
return function(C){return C.replace(B,"")
}
})(),ltrim:(function(){var B=/^[ \t\n\r]+/g;
return function(C){return C.replace(B,"")
}
})(),rtrim:(function(){var B=/[ \t\n\r]+$/g;
return function(C){return C.replace(B,"")
}
})(),indexOf:(Array.prototype.indexOf)?function(C,B){return C.indexOf(B)
}:function(E,D){for(var C=0,B=E.length;
C<B;
C++){if(E[C]===D){return C
}}return -1
},bind:function(B,C){return function(){return B.apply(C,arguments)
}
},createClass:function(D){var G=D.$,C=D.base,F=D.privates||D._,E=D.proto,H=D.statics;
if(F){var B=G;
G=function(){var J=this._||(this._={});
for(var K in F){var I=F[K];
J[K]=(typeof I=="function")?CKEDITOR.tools.bind(I,this):I
}B.apply(this,arguments)
}
}if(C){G.prototype=this.prototypedCopy(C.prototype);
G.prototype.constructor=G;
G.prototype.base=function(){this.base=C.prototype.base;
C.apply(this,arguments);
this.base=arguments.callee
}
}if(E){this.extend(G.prototype,E,true)
}if(H){this.extend(G,H,true)
}return G
},addFunction:function(C,B){return A.push(function(){return C.apply(B||this,arguments)
})-1
},removeFunction:function(B){A[B]=null
},callFunction:function(C){var B=A[C];
return B&&B.apply(window,Array.prototype.slice.call(arguments,1))
},cssLength:(function(){return function(B){return B+(!B||isNaN(Number(B))?"":"px")
}
})(),convertToPx:(function(){var B;
return function(C){if(!B){B=CKEDITOR.dom.element.createFromHtml('<div style="position:absolute;left:-9999px;top:-9999px;margin:0px;padding:0px;border:0px;"></div>',CKEDITOR.document);
CKEDITOR.document.getBody().append(B)
}if(!(/%$/).test(C)){B.setStyle("width",C);
return B.$.clientWidth
}return C
}
})(),repeat:function(C,B){return new Array(B+1).join(C)
},tryThese:function(){var D;
for(var C=0,E=arguments.length;
C<E;
C++){var B=arguments[C];
try{D=B();
break
}catch(F){}}return D
},genKey:function(){return Array.prototype.slice.call(arguments).join("-")
}}
})();