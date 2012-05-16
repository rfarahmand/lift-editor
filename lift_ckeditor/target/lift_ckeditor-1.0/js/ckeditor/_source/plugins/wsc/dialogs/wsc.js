;
CKEDITOR.dialog.add("checkspell",function(H){var E=CKEDITOR.tools.getNextNumber(),J="cke_frame_"+E,K="cke_data_"+E,C="cke_error_"+E,D,L=document.location.protocol||"http:",G=H.lang.spellCheck.notAvailable;
var I='<textarea style="display: none" id="'+K+'" rows="10" cols="40"> </textarea><div id="'+C+'" style="display:none;color:red;font-size:16px;font-weight:bold;padding-top:160px;text-align:center;z-index:11;"></div><iframe src="" style="width:100%;background-color:#f1f1e3;" frameborder="0" name="'+J+'" id="'+J+'" allowtransparency="1"></iframe>';
var B=H.config.wsc_customLoaderScript||(L+"//loader.webspellchecker.net/sproxy_fck/sproxy.php?plugin=fck2&customerid="+H.config.wsc_customerId+"&cmd=script&doc=wsc&schema=22");
if(H.config.wsc_customLoaderScript){G+='<p style="color:#000;font-size:11px;font-weight: normal;text-align:center;padding-top:10px">'+H.lang.spellCheck.errorLoading.replace(/%s/g,H.config.wsc_customLoaderScript)+"</p>"
}function A(N,O){var M=0;
return function(){if(typeof (window.doSpell)=="function"){if(typeof (D)!="undefined"){window.clearInterval(D)
}F(N)
}else{if(M++==180){window._cancelOnError(O)
}}}
}window._cancelOnError=function(M){if(typeof (window.WSC_Error)=="undefined"){CKEDITOR.document.getById(J).setStyle("display","none");
var N=CKEDITOR.document.getById(C);
N.setStyle("display","block");
N.setHtml(M||H.lang.spellCheck.notAvailable)
}};
function F(P){var O=new window._SP_FCK_LangCompare(),N=CKEDITOR.getUrl(H.plugins.wsc.path+"dialogs/"),M=N+"tmpFrameset.html";
window.gFCKPluginName="wsc";
O.setDefaulLangCode(H.config.defaultLanguage);
window.doSpell({ctrl:K,lang:H.config.wsc_lang||O.getSPLangCode(H.langCode),intLang:H.config.wsc_uiLang||O.getSPLangCode(H.langCode),winType:J,onCancel:function(){P.hide()
},onFinish:function(Q){H.focus();
P.getParentEditor().setData(Q.value);
P.hide()
},staticFrame:M,framesetPath:M,iframePath:N+"ciframe.html",schemaURI:N+"wsc.css",userDictionaryName:H.config.wsc_userDictionaryName,customDictionaryName:H.config.wsc_customDictionaryIds&&H.config.wsc_customDictionaryIds.split(","),domainName:H.config.wsc_domainName});
CKEDITOR.document.getById(C).setStyle("display","none");
CKEDITOR.document.getById(J).setStyle("display","block")
}return{title:H.config.wsc_dialogTitle||H.lang.spellCheck.title,minWidth:485,minHeight:380,buttons:[CKEDITOR.dialog.cancelButton],onShow:function(){var M=this.getContentElement("general","content").getElement();
M.setHtml(I);
M.getChild(2).setStyle("height",this._.contentSize.height+"px");
if(typeof (window.doSpell)!="function"){CKEDITOR.document.getHead().append(CKEDITOR.document.createElement("script",{attributes:{type:"text/javascript",src:B}}))
}var N=H.getData();
CKEDITOR.document.getById(K).setValue(N);
D=window.setInterval(A(this,G),250)
},onHide:function(){window.ooo=undefined;
window.int_framsetLoaded=undefined;
window.framesetLoaded=undefined;
window.is_window_opened=false
},contents:[{id:"general",label:H.config.wsc_dialogTitle||H.lang.spellCheck.title,padding:0,elements:[{type:"html",id:"content",html:""}]}]}
});
CKEDITOR.dialog.on("resize",function(A){var E=A.data,B=E.dialog;
if(B._.name=="checkspell"){var D=B.getContentElement("general","content").getElement(),C=D&&D.getChild(2);
C&&C.setSize("height",E.height);
C&&C.setSize("width",E.width)
}});