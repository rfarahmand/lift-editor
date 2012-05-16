(function(){var A=CKEDITOR.document;
CKEDITOR.dialog.add("templates",function(I){function G(K,Q){K.setHtml("");
for(var P=0,M=Q.length;
P<M;
P++){var N=CKEDITOR.getTemplates(Q[P]),L=N.imagesPath,S=N.templates,R=S.length;
for(var O=0;
O<R;
O++){var T=S[O],U=F(T,L);
U.setAttribute("aria-posinset",O+1);
U.setAttribute("aria-setsize",R);
K.append(U)
}}}function F(M,L){var N=CKEDITOR.dom.element.createFromHtml('<a href="javascript:void(0)" tabIndex="-1" role="option" ><div class="cke_tpl_item"></div></a>');
var K='<table style="width:350px;" class="cke_tpl_preview" role="presentation"><tr>';
if(M.image&&L){K+='<td class="cke_tpl_preview_img"><img src="'+CKEDITOR.getUrl(L+M.image)+'"'+(CKEDITOR.env.ie6Compat?' onload="this.width=this.width"':"")+' alt="" title=""></td>'
}K+='<td style="white-space:normal;"><span class="cke_tpl_title">'+M.title+"</span><br/>";
if(M.description){K+="<span>"+M.description+"</span>"
}K+="</td></tr></table>";
N.getFirst().setHtml(K);
N.on("click",function(){H(M.html)
});
return N
}function H(M){var L=CKEDITOR.dialog.getCurrent(),K=L.getValueOf("selectTpl","chkInsertOpt");
if(K){I.on("contentDom",function(N){N.removeListener();
L.hide();
var O=new CKEDITOR.dom.range(I.document);
O.moveToElementEditStart(I.document.getBody());
O.select(1);
setTimeout(function(){I.fire("saveSnapshot")
},0)
});
I.fire("saveSnapshot");
I.setData(M)
}else{I.insertHtml(M);
L.hide()
}}function B(K){var O=K.data.getTarget(),M=J.equals(O);
if(M||J.contains(O)){var N=K.data.getKeystroke(),L=J.getElementsByTag("a"),P;
if(L){if(M){P=L.getItem(0)
}else{switch(N){case 40:P=O.getNext();
break;
case 38:P=O.getPrevious();
break;
case 13:case 32:O.fire("click")
}}if(P){P.focus();
K.data.preventDefault()
}}}}CKEDITOR.skins.load(I,"templates");
var J;
var C="cke_tpl_list_label_"+CKEDITOR.tools.getNextNumber(),D=I.lang.templates,E=I.config;
return{title:I.lang.templates.title,minWidth:CKEDITOR.env.ie?440:400,minHeight:340,contents:[{id:"selectTpl",label:D.title,elements:[{type:"vbox",padding:5,children:[{id:"selectTplText",type:"html",html:"<span>"+D.selectPromptMsg+"</span>"},{id:"templatesList",type:"html",focus:true,html:'<div class="cke_tpl_list" tabIndex="-1" role="listbox" aria-labelledby="'+C+'"><div class="cke_tpl_loading"><span></span></div></div><span class="cke_voice_label" id="'+C+'">'+D.options+"</span>"},{id:"chkInsertOpt",type:"checkbox",label:D.insertOption,"default":E.templates_replaceContent}]}]}],buttons:[CKEDITOR.dialog.cancelButton],onShow:function(){var K=this.getContentElement("selectTpl","templatesList");
J=K.getElement();
CKEDITOR.loadTemplates(E.templates_files,function(){var L=(E.templates||"default").split(",");
if(L.length){G(J,L);
K.focus()
}else{J.setHtml('<div class="cke_tpl_empty"><span>'+D.emptyListMsg+"</span></div>")
}});
this._.element.on("keydown",B)
},onHide:function(){this._.element.removeListener("keydown",B)
}}
})
})();