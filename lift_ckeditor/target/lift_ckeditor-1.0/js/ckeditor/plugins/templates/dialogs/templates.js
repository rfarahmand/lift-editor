(function(){var A=CKEDITOR.document;
CKEDITOR.dialog.add("templates",function(J){function I(R,Q){R.setHtml("");
for(var P=0,O=Q.length;
P<O;
P++){var N=CKEDITOR.getTemplates(Q[P]),M=N.imagesPath,L=N.templates,K=L.length;
for(var U=0;
U<K;
U++){var T=L[U],S=H(T,M);
S.setAttribute("aria-posinset",U+1);
S.setAttribute("aria-setsize",K);
R.append(S)
}}}function H(M,L){var K=CKEDITOR.dom.element.createFromHtml('<a href="javascript:void(0)" tabIndex="-1" role="option" ><div class="cke_tpl_item"></div></a>'),N='<table style="width:350px;" class="cke_tpl_preview" role="presentation"><tr>';
if(M.image&&L){N+='<td class="cke_tpl_preview_img"><img src="'+CKEDITOR.getUrl(L+M.image)+'"'+(CKEDITOR.env.ie6Compat?' onload="this.width=this.width"':"")+' alt="" title=""></td>'
}N+='<td style="white-space:normal;"><span class="cke_tpl_title">'+M.title+"</span><br/>";
if(M.description){N+="<span>"+M.description+"</span>"
}N+="</td></tr></table>";
K.getFirst().setHtml(N);
K.on("click",function(){G(M.html)
});
return K
}function G(M){var L=CKEDITOR.dialog.getCurrent(),K=L.getValueOf("selectTpl","chkInsertOpt");
if(K){J.on("contentDom",function(O){O.removeListener();
L.hide();
var N=new CKEDITOR.dom.range(J.document);
N.moveToElementEditStart(J.document.getBody());
N.select(1);
setTimeout(function(){J.fire("saveSnapshot")
},0)
});
J.fire("saveSnapshot");
J.setData(M)
}else{J.insertHtml(M);
L.hide()
}}function F(M){var L=M.data.getTarget(),K=E.equals(L);
if(K||E.contains(L)){var P=M.data.getKeystroke(),O=E.getElementsByTag("a"),N;
if(O){if(K){N=O.getItem(0)
}else{switch(P){case 40:N=L.getNext();
break;
case 38:N=L.getPrevious();
break;
case 13:case 32:L.fire("click")
}}if(N){N.focus();
M.data.preventDefault()
}}}}CKEDITOR.skins.load(J,"templates");
var E,D="cke_tpl_list_label_"+CKEDITOR.tools.getNextNumber(),C=J.lang.templates,B=J.config;
return{title:J.lang.templates.title,minWidth:CKEDITOR.env.ie?440:400,minHeight:340,contents:[{id:"selectTpl",label:C.title,elements:[{type:"vbox",padding:5,children:[{id:"selectTplText",type:"html",html:"<span>"+C.selectPromptMsg+"</span>"},{id:"templatesList",type:"html",focus:true,html:'<div class="cke_tpl_list" tabIndex="-1" role="listbox" aria-labelledby="'+D+'"><div class="cke_tpl_loading"><span></span></div></div><span class="cke_voice_label" id="'+D+'">'+C.options+"</span>"},{id:"chkInsertOpt",type:"checkbox",label:C.insertOption,"default":B.templates_replaceContent}]}]}],buttons:[CKEDITOR.dialog.cancelButton],onShow:function(){var K=this.getContentElement("selectTpl","templatesList");
E=K.getElement();
CKEDITOR.loadTemplates(B.templates_files,function(){var L=(B.templates||"default").split(",");
if(L.length){I(E,L);
K.focus()
}else{E.setHtml('<div class="cke_tpl_empty"><span>'+C.emptyListMsg+"</span></div>")
}});
this._.element.on("keydown",F)
},onHide:function(){this._.element.removeListener("keydown",F)
}}
})
})();