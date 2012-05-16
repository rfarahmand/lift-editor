(function(){function B(J,I,H){var G=J.join(" ");
G=G.replace(/(,|>|\+|~)/g," ");
G=G.replace(/\[[^\]]*/g,"");
G=G.replace(/#[^\s]*/g,"");
G=G.replace(/\:{1,2}[^\s]*/g,"");
G=G.replace(/\s+/g," ");
var F=G.split(" "),E=[];
for(var D=0;
D<F.length;
D++){var C=F[D];
if(H.test(C)&&!I.test(C)){if(CKEDITOR.tools.indexOf(E,C)==-1){E.push(C)
}}}return E
}function A(P,O,N){var M=[],L=[],K;
for(K=0;
K<P.styleSheets.length;
K++){var J=P.styleSheets[K],I=J.ownerNode||J.owningElement;
if(I.getAttribute("data-cke-temp")){continue
}if(J.href&&J.href.substr(0,9)=="chrome://"){continue
}var H=J.cssRules||J.rules;
for(var G=0;
G<H.length;
G++){L.push(H[G].selectorText)
}}var F=B(L,O,N);
for(K=0;
K<F.length;
K++){var E=F[K].split("."),D=E[0].toLowerCase(),C=E[1];
M.push({name:D+"."+C,element:D,attributes:{"class":C}})
}return M
}CKEDITOR.plugins.add("stylesheetparser",{requires:["styles"],onLoad:function(){var C=CKEDITOR.editor.prototype;
C.getStylesSet=CKEDITOR.tools.override(C.getStylesSet,function(D){return function(F){var E=this;
D.call(this,function(I){var H=E.config.stylesheetParser_skipSelectors||/(^body\.|^\.)/i,G=E.config.stylesheetParser_validSelectors||/\w+\.\w+/;
F(E._.stylesDefinitions=I.concat(A(E.document.$,H,G)))
})
}
})
}})
})();