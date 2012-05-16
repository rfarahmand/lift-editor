;
CKEDITOR.skins.add("kama",(function(){var A="cke_ui_color";
return{editor:{css:["editor.css"]},dialog:{css:["dialog.css"]},richcombo:{canGroup:false},templates:{css:["templates.css"]},margins:[0,0,0,0],init:function(E){if(E.config.width&&!isNaN(E.config.width)){E.config.width-=12
}var D=[];
var C=/\$color/g;
var I="/* UI Color Support */.cke_skin_kama .cke_menuitem .cke_icon_wrapper{	background-color: $color !important;	border-color: $color !important;}.cke_skin_kama .cke_menuitem a:hover .cke_icon_wrapper,.cke_skin_kama .cke_menuitem a:focus .cke_icon_wrapper,.cke_skin_kama .cke_menuitem a:active .cke_icon_wrapper{	background-color: $color !important;	border-color: $color !important;}.cke_skin_kama .cke_menuitem a:hover .cke_label,.cke_skin_kama .cke_menuitem a:focus .cke_label,.cke_skin_kama .cke_menuitem a:active .cke_label{	background-color: $color !important;}.cke_skin_kama .cke_menuitem a.cke_disabled:hover .cke_label,.cke_skin_kama .cke_menuitem a.cke_disabled:focus .cke_label,.cke_skin_kama .cke_menuitem a.cke_disabled:active .cke_label{	background-color: transparent !important;}.cke_skin_kama .cke_menuitem a.cke_disabled:hover .cke_icon_wrapper,.cke_skin_kama .cke_menuitem a.cke_disabled:focus .cke_icon_wrapper,.cke_skin_kama .cke_menuitem a.cke_disabled:active .cke_icon_wrapper{	background-color: $color !important;	border-color: $color !important;}.cke_skin_kama .cke_menuitem a.cke_disabled .cke_icon_wrapper{	background-color: $color !important;	border-color: $color !important;}.cke_skin_kama .cke_menuseparator{	background-color: $color !important;}.cke_skin_kama .cke_menuitem a:hover,.cke_skin_kama .cke_menuitem a:focus,.cke_skin_kama .cke_menuitem a:active{	background-color: $color !important;}";
if(CKEDITOR.env.webkit){I=I.split("}").slice(0,-1);
for(var B=0;
B<I.length;
B++){I[B]=I[B].split("{")
}}function H(J){var K=J.getById(A);
if(!K){K=J.getHead().append("style");
K.setAttribute("id",A);
K.setAttribute("type","text/css")
}return K
}function F(O,L,K){var N,J,M;
for(var P=0;
P<O.length;
P++){if(CKEDITOR.env.webkit){for(J=0;
J<L.length;
J++){M=L[J][1];
for(N=0;
N<K.length;
N++){M=M.replace(K[N][0],K[N][1])
}O[P].$.sheet.addRule(L[J][0],M)
}}else{M=L;
for(N=0;
N<K.length;
N++){M=M.replace(K[N][0],K[N][1])
}if(CKEDITOR.env.ie){O[P].$.styleSheet.cssText+=M
}else{O[P].$.innerHTML+=M
}}}}var G=/\$color/g;
CKEDITOR.tools.extend(E,{uiColor:null,getUiColor:function(){return this.uiColor
},setUiColor:function(J){var L,M=H(CKEDITOR.document),O="."+E.id;
var N=[O+" .cke_wrapper",O+"_dialog .cke_dialog_contents",O+"_dialog a.cke_dialog_tab",O+"_dialog .cke_dialog_footer"].join(",");
var K="background-color: $color !important;";
if(CKEDITOR.env.webkit){L=[[N,K]]
}else{L=N+"{"+K+"}"
}return(this.setUiColor=function(P){var Q=[[G,P]];
E.uiColor=P;
F([M],L,Q);
F(D,I,Q)
})(J)
}});
E.on("menuShow",function(N){var J=N.data[0];
var L=J.element.getElementsByTag("iframe").getItem(0).getFrameDocument();
if(!L.getById("cke_ui_color")){var M=H(L);
D.push(M);
var K=E.getUiColor();
if(K){F([M],I,[[G,K]])
}}});
if(E.config.uiColor){E.setUiColor(E.config.uiColor)
}}}
})());
(function(){CKEDITOR.dialog?A():CKEDITOR.on("dialogPluginReady",A);
function A(){CKEDITOR.dialog.on("resize",function(C){var G=C.data,E=G.width,B=G.height,D=G.dialog,F=D.parts.contents;
if(G.skin!="kama"){return 
}F.setStyles({width:E+"px",height:B+"px"})
})
}})();