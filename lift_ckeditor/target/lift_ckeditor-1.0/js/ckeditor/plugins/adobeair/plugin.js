(function(){var B=["click","keydown","mousedown","keypress","mouseover","mouseout"];
function A(G){var F=G.getElementsByTag("*"),E=F.count(),D;
for(var C=0;
C<E;
C++){D=F.getItem(C);
(function(I){for(var H=0;
H<B.length;
H++){(function(K){var J=I.getAttribute("on"+K);
if(I.hasAttribute("on"+K)){I.removeAttribute("on"+K);
I.on(K,function(R){var Q=/(return\s*)?CKEDITOR\.tools\.callFunction\(([^)]+)\)/.exec(J),P=Q&&Q[1],O=Q&&Q[2].split(","),N=/return false;/.test(J);
if(O){var M=O.length,L;
for(var U=0;
U<M;
U++){O[U]=L=CKEDITOR.tools.trim(O[U]);
var T=L.match(/^(["'])([^"']*?)\1$/);
if(T){O[U]=T[2];
continue
}if(L.match(/\d+/)){O[U]=parseInt(L,10);
continue
}switch(L){case"this":O[U]=I.$;
break;
case"event":O[U]=R.data.$;
break;
case"null":O[U]=null;
break
}}var S=CKEDITOR.tools.callFunction.apply(window,O);
if(P&&S===false){N=1
}}if(N){R.data.preventDefault()
}})
}})(B[H])
}})(D)
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
CKEDITOR.ui.on("ready",function(F){var E=F.data;
if(E._.panel){var D=E._.panel._.panel,C;
(function(){if(!D.isLoaded){setTimeout(arguments.callee,30);
return 
}C=D._.holder;
A(C)
})()
}else{if(E instanceof CKEDITOR.dialog){A(E._.element)
}}})
})();
CKEDITOR.dom.document.prototype.write=CKEDITOR.tools.override(CKEDITOR.dom.document.prototype.write,function(B){function A(H,G,F,E){var D=H.append(G),C=CKEDITOR.htmlParser.fragment.fromHtml(F).children[0].attributes;
C&&D.setAttributes(C);
E&&D.append(H.getDocument().createText(E))
}return function(F,E){if(this.getBody()){var D=this,C=this.getHead();
F=F.replace(/(<style[^>]*>)([\s\S]*?)<\/style>/gi,function(I,H,G){A(C,"style",H,G);
return""
});
F=F.replace(/<base\b[^>]*\/>/i,function(G){A(C,"base",G);
return""
});
F=F.replace(/<title>([\s\S]*)<\/title>/i,function(H,G){D.$.title=G;
return""
});
F=F.replace(/<head>([\s\S]*)<\/head>/i,function(H){var G=new CKEDITOR.dom.element("div",D);
G.setHtml(H);
G.moveChildren(C);
return""
});
F.replace(/(<body[^>]*>)([\s\S]*)(?=$|<\/body>)/i,function(J,I,H){D.getBody().setHtml(H);
var G=CKEDITOR.htmlParser.fragment.fromHtml(I).children[0].attributes;
G&&D.getBody().setAttributes(G)
})
}else{B.apply(this,arguments)
}}
});