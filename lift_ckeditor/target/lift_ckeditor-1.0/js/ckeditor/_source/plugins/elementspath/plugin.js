(function(){var A={toolbarFocus:{editorFocus:false,readOnly:1,exec:function(D){var E=D._.elementsPath.idBase;
var C=CKEDITOR.document.getById(E+"0");
C&&C.focus(CKEDITOR.env.ie||CKEDITOR.env.air)
}}};
var B='<span class="cke_empty">&nbsp;</span>';
CKEDITOR.plugins.add("elementspath",{requires:["selection"],init:function(E){var I="cke_path_"+E.name;
var J;
var F=function(){if(!J){J=CKEDITOR.document.getById(I)
}return J
};
var K="cke_elementspath_"+CKEDITOR.tools.getNextNumber()+"_";
E._.elementsPath={idBase:K,filters:[]};
E.on("themeSpace",function(L){if(L.data.space=="bottom"){L.data.html+='<span id="'+I+'_label" class="cke_voice_label">'+E.lang.elementsPath.eleLabel+'</span><div id="'+I+'" class="cke_path" role="group" aria-labelledby="'+I+'_label">'+B+"</div>"
}});
function G(N){E.focus();
var M=E._.elementsPath.list[N];
if(M.is("body")){var L=new CKEDITOR.dom.range(E.document);
L.selectNodeContents(M);
L.select()
}else{E.getSelection().selectElement(M)
}}var C=CKEDITOR.tools.addFunction(G);
var H=CKEDITOR.tools.addFunction(function(M,O){var N=E._.elementsPath.idBase,L;
O=new CKEDITOR.dom.event(O);
var P=E.lang.dir=="rtl";
switch(O.getKeystroke()){case P?39:37:case 9:L=CKEDITOR.document.getById(N+(M+1));
if(!L){L=CKEDITOR.document.getById(N+"0")
}L.focus();
return false;
case P?37:39:case CKEDITOR.SHIFT+9:L=CKEDITOR.document.getById(N+(M-1));
if(!L){L=CKEDITOR.document.getById(N+(E._.elementsPath.list.length-1))
}L.focus();
return false;
case 27:E.focus();
return false;
case 13:case 32:G(M);
return false
}return true
});
E.on("selectionChange",function(X){var T=CKEDITOR.env,a=X.data.selection,Q=a.getStartElement(),R=[],U=X.editor,Z=U._.elementsPath.list=[],N=U._.elementsPath.filters;
while(Q){var W=0,M;
if(Q.data("cke-display-name")){M=Q.data("cke-display-name")
}else{if(Q.data("cke-real-element-type")){M=Q.data("cke-real-element-type")
}else{M=Q.getName()
}}for(var P=0;
P<N.length;
P++){var V=N[P](Q,M);
if(V===false){W=1;
break
}M=V||M
}if(!W){var S=Z.push(Q)-1;
var O="";
if(T.opera||(T.gecko&&T.mac)){O+=' onkeypress="return false;"'
}if(T.gecko){O+=' onblur="this.style.cssText = this.style.cssText;"'
}var Y=U.lang.elementsPath.eleTitle.replace(/%1/,M);
R.unshift('<a id="',K,S,'" href="javascript:void(\'',M,'\')" tabindex="-1" title="',Y,'"'+((CKEDITOR.env.gecko&&CKEDITOR.env.version<10900)?' onfocus="event.preventBubble();"':"")+' hidefocus="true"  onkeydown="return CKEDITOR.tools.callFunction(',H,",",S,', event );"'+O,' onclick="CKEDITOR.tools.callFunction('+C,",",S,'); return false;"',' role="button" aria-labelledby="'+K+S+'_label">',M,'<span id="',K,S,'_label" class="cke_label">'+Y+"</span>","</a>")
}if(M=="body"){break
}Q=Q.getParent()
}var L=F();
L.setHtml(R.join("")+B);
U.fire("elementsPathUpdate",{space:L})
});
function D(){J&&J.setHtml(B);
delete E._.elementsPath.list
}E.on("readOnly",D);
E.on("contentDomUnload",D);
E.addCommand("elementsPathFocus",A.toolbarFocus)
}})
})();