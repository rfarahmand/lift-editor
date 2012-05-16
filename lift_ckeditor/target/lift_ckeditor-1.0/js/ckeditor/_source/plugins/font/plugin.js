(function(){function A(H,P,N,C,G,K,I){var D=H.config;
var L=G.split(";"),M=[];
var O={};
for(var F=0;
F<L.length;
F++){var E=L[F];
if(E){E=E.split("/");
var J={},B=L[F]=E[0];
J[N]=M[F]=E[1]||B;
O[B]=new CKEDITOR.style(I,J);
O[B]._.definition.name=B
}else{L.splice(F--,1)
}}H.ui.addRichCombo(P,{label:C.label,title:C.panelTitle,className:"cke_"+(N=="size"?"fontSize":"font"),panel:{css:H.skin.editor.css.concat(D.contentsCss),multiSelect:false,attributes:{"aria-label":C.panelTitle}},init:function(){this.startGroup(C.panelTitle);
for(var R=0;
R<L.length;
R++){var Q=L[R];
this.add(Q,O[Q].buildPreview(),Q)
}},onClick:function(R){H.focus();
H.fire("saveSnapshot");
var Q=O[R];
if(this.getValue()==R){Q.remove(H.document)
}else{Q.apply(H.document)
}H.fire("saveSnapshot")
},onRender:function(){H.on("selectionChange",function(U){var T=this.getValue();
var S=U.data.path,W=S.elements;
for(var R=0,Q;
R<W.length;
R++){Q=W[R];
for(var V in O){if(O[V].checkElementRemovable(Q,true)){if(V!=T){this.setValue(V)
}return 
}}}this.setValue("",K)
},this)
}})
}CKEDITOR.plugins.add("font",{requires:["richcombo","styles"],init:function(C){var B=C.config;
A(C,"Font","family",C.lang.font,B.font_names,B.font_defaultLabel,B.font_style);
A(C,"FontSize","size",C.lang.fontSize,B.fontSize_sizes,B.fontSize_defaultLabel,B.fontSize_style)
}})
})();
CKEDITOR.config.font_names="Arial/Arial, Helvetica, sans-serif;Comic Sans MS/Comic Sans MS, cursive;Courier New/Courier New, Courier, monospace;Georgia/Georgia, serif;Lucida Sans Unicode/Lucida Sans Unicode, Lucida Grande, sans-serif;Tahoma/Tahoma, Geneva, sans-serif;Times New Roman/Times New Roman, Times, serif;Trebuchet MS/Trebuchet MS, Helvetica, sans-serif;Verdana/Verdana, Geneva, sans-serif";
CKEDITOR.config.font_defaultLabel="";
CKEDITOR.config.font_style={element:"span",styles:{"font-family":"#(family)"},overrides:[{element:"font",attributes:{face:null}}]};
CKEDITOR.config.fontSize_sizes="8/8px;9/9px;10/10px;11/11px;12/12px;14/14px;16/16px;18/18px;20/20px;22/22px;24/24px;26/26px;28/28px;36/36px;48/48px;72/72px";
CKEDITOR.config.fontSize_defaultLabel="";
CKEDITOR.config.fontSize_style={element:"span",styles:{"font-size":"#(size)"},overrides:[{element:"font",attributes:{size:null}}]};