;
CKEDITOR.themes.add("default",(function(){var B={};
function A(H,E){var D,G;
G=H.config.sharedSpaces;
G=G&&G[E];
G=G&&CKEDITOR.document.getById(G);
if(G){var F='<span class="cke_shared " dir="'+H.lang.dir+'"><span class="'+H.skinClass+" "+H.id+" cke_editor_"+H.name+'"><span class="'+CKEDITOR.env.cssClass+'"><span class="cke_wrapper cke_'+H.lang.dir+'"><span class="cke_editor"><div class="cke_'+E+'"></div></span></span></span></span></span>';
var C=G.append(CKEDITOR.dom.element.createFromHtml(F,G.getDocument()));
if(G.getCustomData("cke_hasshared")){C.hide()
}else{G.setCustomData("cke_hasshared",1)
}D=C.getChild([0,0,0,0]);
!H.sharedSpaces&&(H.sharedSpaces={});
H.sharedSpaces[E]=D;
H.on("focus",function(){for(var J=0,K,I=G.getChildren();
(K=I.getItem(J));
J++){if(K.type==CKEDITOR.NODE_ELEMENT&&!K.equals(C)&&K.hasClass("cke_shared")){K.hide()
}}C.show()
});
H.on("destroy",function(){C.remove()
})
}return D
}return{build:function(M,K){var E=M.name,J=M.element,I=M.elementMode;
if(!J||I==CKEDITOR.ELEMENT_MODE_NONE){return 
}if(I==CKEDITOR.ELEMENT_MODE_REPLACE){J.hide()
}var F=M.fire("themeSpace",{space:"top",html:""}).html;
var R=M.fire("themeSpace",{space:"contents",html:""}).html;
var P=M.fireOnce("themeSpace",{space:"bottom",html:""}).html;
var Q=R&&M.config.height;
var H=M.config.tabIndex||M.element.getAttribute("tabindex")||0;
if(!R){Q="auto"
}else{if(!isNaN(Q)){Q+="px"
}}var D="";
var G=M.config.width;
if(G){if(!isNaN(G)){G+="px"
}D+="width: "+G+";"
}var N=F&&A(M,"top"),O=A(M,"bottom");
N&&(N.setHtml(F),F="");
O&&(O.setHtml(P),P="");
var L="<style>."+M.skinClass+"{visibility:hidden;}</style>";
if(B[M.skinClass]){L=""
}else{B[M.skinClass]=1
}var C=CKEDITOR.dom.element.createFromHtml(['<span id="cke_',E,'" class="',M.skinClass," ",M.id," cke_editor_",E,'" dir="',M.lang.dir,'" title="',(CKEDITOR.env.gecko?" ":""),'" lang="',M.langCode,'"'+(CKEDITOR.env.webkit?' tabindex="'+H+'"':"")+' role="application" aria-labelledby="cke_',E,'_arialbl"'+(D?' style="'+D+'"':"")+'><span id="cke_',E,'_arialbl" class="cke_voice_label">'+M.lang.editor+'</span><span class="',CKEDITOR.env.cssClass,'" role="presentation"><span class="cke_wrapper cke_',M.lang.dir,'" role="presentation"><table class="cke_editor" border="0" cellspacing="0" cellpadding="0" role="presentation"><tbody><tr',F?"":' style="display:none"',' role="presentation"><td id="cke_top_',E,'" class="cke_top" role="presentation">',F,"</td></tr><tr",R?"":' style="display:none"',' role="presentation"><td id="cke_contents_',E,'" class="cke_contents" style="height:',Q,'" role="presentation">',R,"</td></tr><tr",P?"":' style="display:none"',' role="presentation"><td id="cke_bottom_',E,'" class="cke_bottom" role="presentation">',P,"</td></tr></tbody></table>"+L+"</span></span></span>"].join(""));
C.getChild([1,0,0,0,0]).unselectable();
C.getChild([1,0,0,0,2]).unselectable();
if(I==CKEDITOR.ELEMENT_MODE_REPLACE){C.insertAfter(J)
}else{J.append(C)
}M.container=C;
C.disableContextMenu();
M.on("contentDirChanged",function(S){var U=(M.lang.dir!=S.data?"add":"remove")+"Class";
C.getChild(1)[U]("cke_mixed_dir_content");
var T=this.sharedSpaces&&this.sharedSpaces[this.config.toolbarLocation];
T&&T.getParent().getParent()[U]("cke_mixed_dir_content")
});
M.fireOnce("themeLoaded");
M.fireOnce("uiReady")
},buildDialog:function(H){var J=CKEDITOR.tools.getNextNumber();
var E=CKEDITOR.dom.element.createFromHtml(['<div class="',H.id,"_dialog cke_editor_",H.name.replace(".","\\."),"_dialog cke_skin_",H.skinName,'" dir="',H.lang.dir,'" lang="',H.langCode,'" role="dialog" aria-labelledby="%title#"><table class="cke_dialog'," "+CKEDITOR.env.cssClass," cke_",H.lang.dir,'" style="position:absolute" role="presentation"><tr><td role="presentation"><div class="%body" role="presentation"><div id="%title#" class="%title" role="presentation"></div><a id="%close_button#" class="%close_button" href="javascript:void(0)" title="'+H.lang.common.close+'" role="button"><span class="cke_label">X</span></a><div id="%tabs#" class="%tabs" role="tablist"></div><table class="%contents" role="presentation"><tr><td id="%contents#" class="%contents" role="presentation"></td></tr><tr><td id="%footer#" class="%footer" role="presentation"></td></tr></table></div><div id="%tl#" class="%tl"></div><div id="%tc#" class="%tc"></div><div id="%tr#" class="%tr"></div><div id="%ml#" class="%ml"></div><div id="%mr#" class="%mr"></div><div id="%bl#" class="%bl"></div><div id="%bc#" class="%bc"></div><div id="%br#" class="%br"></div></td></tr></table>',(CKEDITOR.env.ie?"":"<style>.cke_dialog{visibility:hidden;}</style>"),"</div>"].join("").replace(/#/g,"_"+J).replace(/%/g,"cke_dialog_"));
var G=E.getChild([0,0,0,0,0]),I=G.getChild(0),K=G.getChild(1);
if(CKEDITOR.env.ie&&!CKEDITOR.env.ie6Compat){var F=CKEDITOR.env.isCustomDomain(),C="javascript:void(function(){"+encodeURIComponent("document.open();"+(F?('document.domain="'+document.domain+'";'):"")+"document.close();")+"}())",D=CKEDITOR.dom.element.createFromHtml('<iframe frameBorder="0" class="cke_iframe_shim" src="'+C+'" tabIndex="-1"></iframe>');
D.appendTo(G.getParent())
}I.unselectable();
K.unselectable();
return{element:E,parts:{dialog:E.getChild(0),title:I,close:K,tabs:G.getChild(2),contents:G.getChild([3,0,0,0]),footer:G.getChild([3,0,1,0])}}
},destroy:function(E){var C=E.container,D=E.element;
if(C){C.clearCustomData();
C.remove()
}if(D){D.clearCustomData();
E.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE&&D.show();
delete E.element
}}}
})());
CKEDITOR.editor.prototype.getThemeSpace=function(B){var A="cke_"+B;
var C=this._[A]||(this._[A]=CKEDITOR.document.getById(A+"_"+this.name));
return C
};
CKEDITOR.editor.prototype.resize=function(D,H,A,F){var B=this.container,E=CKEDITOR.document.getById("cke_contents_"+this.name),C=CKEDITOR.env.webkit&&this.document&&this.document.getWindow().$.frameElement,I=F?B.getChild(1):B;
I.setSize("width",D,true);
C&&(C.style.width="1%");
var G=A?0:(I.$.offsetHeight||0)-(E.$.clientHeight||0);
E.setStyle("height",Math.max(H-G,0)+"px");
C&&(C.style.width="100%");
this.fire("resize")
};
CKEDITOR.editor.prototype.getResizable=function(A){return A?CKEDITOR.document.getById("cke_contents_"+this.name):this.container
};