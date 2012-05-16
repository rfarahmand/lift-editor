(function(){CKEDITOR.plugins.add("stylescombo",{requires:["richcombo","styles"],init:function(E){var D=E.config,H=E.lang.stylesCombo,F={},C=[],G;
function B(I){E.getStylesSet(function(O){if(!C.length){var M,K;
for(var J=0,N=O.length;
J<N;
J++){var L=O[J];
K=L.name;
M=F[K]=new CKEDITOR.style(L);
M._name=K;
M._.enterMode=D.enterMode;
C.push(M)
}C.sort(A)
}I&&I()
})
}E.ui.addRichCombo("Styles",{label:H.label,title:H.panelTitle,className:"cke_styles",panel:{css:E.skin.editor.css.concat(D.contentsCss),multiSelect:true,attributes:{"aria-label":H.panelTitle}},init:function(){G=this;
B(function(){var M,J,L,K,I,N;
for(I=0,N=C.length;
I<N;
I++){M=C[I];
J=M._name;
K=M.type;
if(K!=L){G.startGroup(H["panelTitle"+String(K)]);
L=K
}G.add(J,M.type==CKEDITOR.STYLE_OBJECT?J:M.buildPreview(),J)
}G.commit()
})
},onClick:function(L){E.focus();
E.fire("saveSnapshot");
var K=F[L],J=E.getSelection(),I=new CKEDITOR.dom.elementPath(J.getStartElement());
K[K.checkActive(I)?"remove":"apply"](E.document);
E.fire("saveSnapshot")
},onRender:function(){E.on("selectionChange",function(N){var L=this.getValue(),K=N.data.path,P=K.elements;
for(var J=0,M=P.length,I;
J<M;
J++){I=P[J];
for(var O in F){if(F[O].checkElementRemovable(I,true)){if(O!=L){this.setValue(O)
}return 
}}}this.setValue("")
},this)
},onOpen:function(){if(CKEDITOR.env.ie||CKEDITOR.env.webkit){E.focus()
}var O=E.getSelection(),K=O.getSelectedElement(),N=new CKEDITOR.dom.elementPath(K||O.getStartElement()),I=[0,0,0,0];
this.showAll();
this.unmarkAll();
for(var J in F){var M=F[J],L=M.type;
if(M.checkActive(N)){this.mark(J)
}else{if(L==CKEDITOR.STYLE_OBJECT&&!M.checkApplicable(N)){this.hideItem(J);
I[L]--
}}I[L]++
}if(!I[CKEDITOR.STYLE_BLOCK]){this.hideGroup(H["panelTitle"+String(CKEDITOR.STYLE_BLOCK)])
}if(!I[CKEDITOR.STYLE_INLINE]){this.hideGroup(H["panelTitle"+String(CKEDITOR.STYLE_INLINE)])
}if(!I[CKEDITOR.STYLE_OBJECT]){this.hideGroup(H["panelTitle"+String(CKEDITOR.STYLE_OBJECT)])
}},reset:function(){if(G){delete G._.panel;
delete G._.list;
G._.committed=0;
G._.items={};
G._.state=CKEDITOR.TRISTATE_OFF
}F={};
C=[];
B()
}});
E.on("instanceReady",function(){B()
})
}});
function A(C,B){var E=C.type,D=B.type;
return E==D?0:E==CKEDITOR.STYLE_OBJECT?-1:D==CKEDITOR.STYLE_OBJECT?1:D==CKEDITOR.STYLE_BLOCK?1:-1
}})();