(function(){var B=["click","keydown","mousedown","keypress","mouseover","mouseout"];
function A(C){var E=C.getElementsByTag("*"),F=E.count(),G;
for(var D=0;
D<F;
D++){G=E.getItem(D);
(function(I){for(var H=0;
H<B.length;
H++){(function(J){var K=I.getAttribute("on"+J);
if(I.hasAttribute("on"+J)){I.removeAttribute("on"+J);
I.on(J,function(T){var M=/(return\s*)?CKEDITOR\.tools\.callFunction\(([^)]+)\)/.exec(K),U=M&&M[1],P=M&&M[2].split(","),R=/return false;/.test(K);
if(P){var S=P.length,L;
for(var Q=0;
Q<S;
Q++){P[Q]=L=CKEDITOR.tools.trim(P[Q]);
var O=L.match(/^(["'])([^"']*?)\1$/);
if(O){P[Q]=O[2];
continue
}if(L.match(/\d+/)){P[Q]=parseInt(L,10);
continue
}switch(L){case"this":P[Q]=I.$;
break;
case"event":P[Q]=T.data.$;
break;
case"null":P[Q]=null;
break
}}var N=CKEDITOR.tools.callFunction.apply(window,P);
if(U&&N===false){R=1
}}if(R){T.data.preventDefault()
}})
}})(B[H])
}})(G)
}}CKEDITOR.plugins.add("adobeair",{init:function(C){if(!CKEDITOR.env.air){return 
}C.addCss("body { padding: 8px }");
C.on("uiReady",function(){A(C.container);
if(C.sharedSpaces){for(var D in C.sharedSpaces){A(C.sharedSpaces[D])
}}C.on("elementsPathUpdate",function(E){A(E.data.space)
})
});
C.on("contentDom",function(){C.document.on("click",function(D){D.data.preventDefault(true)
})
})
}});
CKEDITOR.ui.on("ready",function(D){var F=D.data;
if(F._.panel){var C=F._.panel._.panel,E;
(function(){if(!C.isLoaded){setTimeout(arguments.callee,30);
return 
}E=C._.holder;
A(E)
})()
}else{if(F instanceof CKEDITOR.dialog){A(F._.element)
}}})
})();
CKEDITOR.dom.document.prototype.write=CKEDITOR.tools.override(CKEDITOR.dom.document.prototype.write,function(B){function A(E,D,H,G){var F=E.append(D),C=CKEDITOR.htmlParser.fragment.fromHtml(H).children[0].attributes;
C&&F.setAttributes(C);
G&&F.append(E.getDocument().createText(G))
}return function(D,F){if(this.getBody()){var E=this,C=this.getHead();
D=D.replace(/(<style[^>]*>)([\s\S]*?)<\/style>/gi,function(G,H,I){A(C,"style",H,I);
return""
});
D=D.replace(/<base\b[^>]*\/>/i,function(G){A(C,"base",G);
return""
});
D=D.replace(/<title>([\s\S]*)<\/title>/i,function(G,H){E.$.title=H;
return""
});
D=D.replace(/<head>([\s\S]*)<\/head>/i,function(G){var H=new CKEDITOR.dom.element("div",E);
H.setHtml(G);
H.moveChildren(C);
return""
});
D.replace(/(<body[^>]*>)([\s\S]*)(?=$|<\/body>)/i,function(H,I,J){E.getBody().setHtml(J);
var G=CKEDITOR.htmlParser.fragment.fromHtml(I).children[0].attributes;
G&&E.getBody().setAttributes(G)
})
}else{B.apply(this,arguments)
}}
});