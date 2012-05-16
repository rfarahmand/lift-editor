;
CKEDITOR.themes.add("default",(function(){var B={};
function A(H,G){var F,E;
E=H.config.sharedSpaces;
E=E&&E[G];
E=E&&CKEDITOR.document.getById(E);
if(E){var D='<span class="cke_shared " dir="'+H.lang.dir+'"><span class="'+H.skinClass+" "+H.id+" cke_editor_"+H.name+'"><span class="'+CKEDITOR.env.cssClass+'"><span class="cke_wrapper cke_'+H.lang.dir+'"><span class="cke_editor"><div class="cke_'+G+'"></div></span></span></span></span></span>',C=E.append(CKEDITOR.dom.element.createFromHtml(D,E.getDocument()));
if(E.getCustomData("cke_hasshared")){C.hide()
}else{E.setCustomData("cke_hasshared",1)
}F=C.getChild([0,0,0,0]);
!H.sharedSpaces&&(H.sharedSpaces={});
H.sharedSpaces[G]=F;
H.on("focus",function(){for(var K=0,J,I=E.getChildren();
J=I.getItem(K);
K++){if(J.type==CKEDITOR.NODE_ELEMENT&&!J.equals(C)&&J.hasClass("cke_shared")){J.hide()
}}C.show()
});
H.on("destroy",function(){C.remove()
})
}return F
}return{build:function(R,Q){var P=R.name,O=R.element,N=R.elementMode;
if(!O||N==CKEDITOR.ELEMENT_MODE_NONE){return 
}if(N==CKEDITOR.ELEMENT_MODE_REPLACE){O.hide()
}var M=R.fire("themeSpace",{space:"top",html:""}).html,L=R.fire("themeSpace",{space:"contents",html:""}).html,K=R.fireOnce("themeSpace",{space:"bottom",html:""}).html,J=L&&R.config.height,I=R.config.tabIndex||R.element.getAttribute("tabindex")||0;
if(!L){J="auto"
}else{if(!isNaN(J)){J+="px"
}}var H="",G=R.config.width;
if(G){if(!isNaN(G)){G+="px"
}H+="width: "+G+";"
}var F=M&&A(R,"top"),E=A(R,"bottom");
F&&(F.setHtml(M),M="");
E&&(E.setHtml(K),K="");
var D="<style>."+R.skinClass+"{visibility:hidden;}</style>";
if(B[R.skinClass]){D=""
}else{B[R.skinClass]=1
}var C=CKEDITOR.dom.element.createFromHtml(['<span id="cke_',P,'" class="',R.skinClass," ",R.id," cke_editor_",P,'" dir="',R.lang.dir,'" title="',CKEDITOR.env.gecko?" ":"",'" lang="',R.langCode,'"'+(CKEDITOR.env.webkit?' tabindex="'+I+'"':"")+' role="application" aria-labelledby="cke_',P,'_arialbl"'+(H?' style="'+H+'"':"")+'><span id="cke_',P,'_arialbl" class="cke_voice_label">'+R.lang.editor+'</span><span class="',CKEDITOR.env.cssClass,'" role="presentation"><span class="cke_wrapper cke_',R.lang.dir,'" role="presentation"><table class="cke_editor" border="0" cellspacing="0" cellpadding="0" role="presentation"><tbody><tr',M?"":' style="display:none"',' role="presentation"><td id="cke_top_',P,'" class="cke_top" role="presentation">',M,"</td></tr><tr",L?"":' style="display:none"',' role="presentation"><td id="cke_contents_',P,'" class="cke_contents" style="height:',J,'" role="presentation">',L,"</td></tr><tr",K?"":' style="display:none"',' role="presentation"><td id="cke_bottom_',P,'" class="cke_bottom" role="presentation">',K,"</td></tr></tbody></table>"+D+"</span></span></span>"].join(""));
C.getChild([1,0,0,0,0]).unselectable();
C.getChild([1,0,0,0,2]).unselectable();
if(N==CKEDITOR.ELEMENT_MODE_REPLACE){C.insertAfter(O)
}else{O.append(C)
}R.container=C;
C.disableContextMenu();
R.on("contentDirChanged",function(U){var T=(R.lang.dir!=U.data?"add":"remove")+"Class";
C.getChild(1)[T]("cke_mixed_dir_content");
var S=this.sharedSpaces&&this.sharedSpaces[this.config.toolbarLocation];
S&&S.getParent().getParent()[T]("cke_mixed_dir_content")
});
R.fireOnce("themeLoaded");
R.fireOnce("uiReady")
},buildDialog:function(K){var J=CKEDITOR.tools.getNextNumber(),I=CKEDITOR.dom.element.createFromHtml(['<div class="',K.id,"_dialog cke_editor_",K.name.replace(".","\\."),"_dialog cke_skin_",K.skinName,'" dir="',K.lang.dir,'" lang="',K.langCode,'" role="dialog" aria-labelledby="%title#"><table class="cke_dialog'," "+CKEDITOR.env.cssClass," cke_",K.lang.dir,'" style="position:absolute" role="presentation"><tr><td role="presentation"><div class="%body" role="presentation"><div id="%title#" class="%title" role="presentation"></div><a id="%close_button#" class="%close_button" href="javascript:void(0)" title="'+K.lang.common.close+'" role="button"><span class="cke_label">X</span></a><div id="%tabs#" class="%tabs" role="tablist"></div><table class="%contents" role="presentation"><tr><td id="%contents#" class="%contents" role="presentation"></td></tr><tr><td id="%footer#" class="%footer" role="presentation"></td></tr></table></div><div id="%tl#" class="%tl"></div><div id="%tc#" class="%tc"></div><div id="%tr#" class="%tr"></div><div id="%ml#" class="%ml"></div><div id="%mr#" class="%mr"></div><div id="%bl#" class="%bl"></div><div id="%bc#" class="%bc"></div><div id="%br#" class="%br"></div></td></tr></table>',CKEDITOR.env.ie?"":"<style>.cke_dialog{visibility:hidden;}</style>","</div>"].join("").replace(/#/g,"_"+J).replace(/%/g,"cke_dialog_")),H=I.getChild([0,0,0,0,0]),G=H.getChild(0),F=H.getChild(1);
if(CKEDITOR.env.ie&&!CKEDITOR.env.ie6Compat){var E=CKEDITOR.env.isCustomDomain(),D="javascript:void(function(){"+encodeURIComponent("document.open();"+(E?'document.domain="'+document.domain+'";':"")+"document.close();")+"}())",C=CKEDITOR.dom.element.createFromHtml('<iframe frameBorder="0" class="cke_iframe_shim" src="'+D+'" tabIndex="-1"></iframe>');
C.appendTo(H.getParent())
}G.unselectable();
F.unselectable();
return{element:I,parts:{dialog:I.getChild(0),title:G,close:F,tabs:H.getChild(2),contents:H.getChild([3,0,0,0]),footer:H.getChild([3,0,1,0])}}
},destroy:function(E){var D=E.container,C=E.element;
if(D){D.clearCustomData();
D.remove()
}if(C){C.clearCustomData();
E.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE&&C.show();
delete E.element
}}}
})());
CKEDITOR.editor.prototype.getThemeSpace=function(B){var A="cke_"+B,C=this._[A]||(this._[A]=CKEDITOR.document.getById(A+"_"+this.name));
return C
};
CKEDITOR.editor.prototype.resize=function(J,I,H,G){var A=this;
var F=A.container,E=CKEDITOR.document.getById("cke_contents_"+A.name),D=CKEDITOR.env.webkit&&A.document&&A.document.getWindow().$.frameElement,C=G?F.getChild(1):F;
C.setSize("width",J,true);
D&&(D.style.width="1%");
var B=H?0:(C.$.offsetHeight||0)-(E.$.clientHeight||0);
E.setStyle("height",Math.max(I-B,0)+"px");
D&&(D.style.width="100%");
A.fire("resize")
};
CKEDITOR.editor.prototype.getResizable=function(A){return A?CKEDITOR.document.getById("cke_contents_"+this.name):this.container
};