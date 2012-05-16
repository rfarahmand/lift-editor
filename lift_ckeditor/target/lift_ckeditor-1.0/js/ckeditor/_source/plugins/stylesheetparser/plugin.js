(function(){function A(J,I,D){var F=J.join(" ");
F=F.replace(/(,|>|\+|~)/g," ");
F=F.replace(/\[[^\]]*/g,"");
F=F.replace(/#[^\s]*/g,"");
F=F.replace(/\:{1,2}[^\s]*/g,"");
F=F.replace(/\s+/g," ");
var G=F.split(" "),H=[];
for(var E=0;
E<G.length;
E++){var C=G[E];
if(D.test(C)&&!I.test(C)){if(CKEDITOR.tools.indexOf(H,C)==-1){H.push(C)
}}}return H
}function B(D,C,F){var P=[],N=[],M;
for(M=0;
M<D.styleSheets.length;
M++){var O=D.styleSheets[M],I=O.ownerNode||O.owningElement;
if(I.getAttribute("data-cke-temp")){continue
}if(O.href&&O.href.substr(0,9)=="chrome://"){continue
}var H=O.cssRules||O.rules;
for(var K=0;
K<H.length;
K++){N.push(H[K].selectorText)
}}var J=A(N,C,F);
for(M=0;
M<J.length;
M++){var E=J[M].split("."),L=E[0].toLowerCase(),G=E[1];
P.push({name:L+"."+G,element:L,attributes:{"class":G}})
}return P
}CKEDITOR.plugins.add("stylesheetparser",{requires:["styles"],onLoad:function(){var C=CKEDITOR.editor.prototype;
C.getStylesSet=CKEDITOR.tools.override(C.getStylesSet,function(D){return function(F){var E=this;
D.call(this,function(H){var I=E.config.stylesheetParser_skipSelectors||(/(^body\.|^\.)/i),G=E.config.stylesheetParser_validSelectors||(/\w+\.\w+/);
F((E._.stylesDefinitions=H.concat(B(E.document.$,I,G))))
})
}
})
}})
})();