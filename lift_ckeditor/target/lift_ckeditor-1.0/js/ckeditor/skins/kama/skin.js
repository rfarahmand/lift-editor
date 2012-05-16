;
CKEDITOR.skins.add("kama",(function(){var A="cke_ui_color";
return{editor:{css:["editor.css"]},dialog:{css:["dialog.css"]},richcombo:{canGroup:false},templates:{css:["templates.css"]},margins:[0,0,0,0],init:function(B){if(B.config.width&&!isNaN(B.config.width)){B.config.width-=12
}var I=[],H=/\$color/g,G="/* UI Color Support */.cke_skin_kama .cke_menuitem .cke_icon_wrapper{\tbackground-color: $color !important;\tborder-color: $color !important;}.cke_skin_kama .cke_menuitem a:hover .cke_icon_wrapper,.cke_skin_kama .cke_menuitem a:focus .cke_icon_wrapper,.cke_skin_kama .cke_menuitem a:active .cke_icon_wrapper{\tbackground-color: $color !important;\tborder-color: $color !important;}.cke_skin_kama .cke_menuitem a:hover .cke_label,.cke_skin_kama .cke_menuitem a:focus .cke_label,.cke_skin_kama .cke_menuitem a:active .cke_label{\tbackground-color: $color !important;}.cke_skin_kama .cke_menuitem a.cke_disabled:hover .cke_label,.cke_skin_kama .cke_menuitem a.cke_disabled:focus .cke_label,.cke_skin_kama .cke_menuitem a.cke_disabled:active .cke_label{\tbackground-color: transparent !important;}.cke_skin_kama .cke_menuitem a.cke_disabled:hover .cke_icon_wrapper,.cke_skin_kama .cke_menuitem a.cke_disabled:focus .cke_icon_wrapper,.cke_skin_kama .cke_menuitem a.cke_disabled:active .cke_icon_wrapper{\tbackground-color: $color !important;\tborder-color: $color !important;}.cke_skin_kama .cke_menuitem a.cke_disabled .cke_icon_wrapper{\tbackground-color: $color !important;\tborder-color: $color !important;}.cke_skin_kama .cke_menuseparator{\tbackground-color: $color !important;}.cke_skin_kama .cke_menuitem a:hover,.cke_skin_kama .cke_menuitem a:focus,.cke_skin_kama .cke_menuitem a:active{\tbackground-color: $color !important;}";
if(CKEDITOR.env.webkit){G=G.split("}").slice(0,-1);
for(var F=0;
F<G.length;
F++){G[F]=G[F].split("{")
}}function E(K){var J=K.getById(A);
if(!J){J=K.getHead().append("style");
J.setAttribute("id",A);
J.setAttribute("type","text/css")
}return J
}function D(M,L,K){var J,P,O;
for(var N=0;
N<M.length;
N++){if(CKEDITOR.env.webkit){for(P=0;
P<L.length;
P++){O=L[P][1];
for(J=0;
J<K.length;
J++){O=O.replace(K[J][0],K[J][1])
}M[N].$.sheet.addRule(L[P][0],O)
}}else{O=L;
for(J=0;
J<K.length;
J++){O=O.replace(K[J][0],K[J][1])
}if(CKEDITOR.env.ie){M[N].$.styleSheet.cssText+=O
}else{M[N].$.innerHTML+=O
}}}}var C=/\$color/g;
CKEDITOR.tools.extend(B,{uiColor:null,getUiColor:function(){return this.uiColor
},setUiColor:function(M){var L,K=E(CKEDITOR.document),J="."+B.id,O=[J+" .cke_wrapper",J+"_dialog .cke_dialog_contents",J+"_dialog a.cke_dialog_tab",J+"_dialog .cke_dialog_footer"].join(","),N="background-color: $color !important;";
if(CKEDITOR.env.webkit){L=[[O,N]]
}else{L=O+"{"+N+"}"
}return(this.setUiColor=function(Q){var P=[[C,Q]];
B.uiColor=Q;
D([K],L,P);
D(I,G,P)
})(M)
}});
B.on("menuShow",function(M){var L=M.data[0],K=L.element.getElementsByTag("iframe").getItem(0).getFrameDocument();
if(!K.getById("cke_ui_color")){var J=E(K);
I.push(J);
var N=B.getUiColor();
if(N){D([J],G,[[C,N]])
}}});
if(B.config.uiColor){B.setUiColor(B.config.uiColor)
}}}
})());
(function(){CKEDITOR.dialog?A():CKEDITOR.on("dialogPluginReady",A);
function A(){CKEDITOR.dialog.on("resize",function(B){var G=B.data,F=G.width,E=G.height,D=G.dialog,C=D.parts.contents;
if(G.skin!="kama"){return 
}C.setStyles({width:F+"px",height:E+"px"})
})
}})();