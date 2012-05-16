;
CKEDITOR.dialog.add("checkspell",function(L){var K=CKEDITOR.tools.getNextNumber(),J="cke_frame_"+K,I="cke_data_"+K,H="cke_error_"+K,G,F=document.location.protocol||"http:",E=L.lang.spellCheck.notAvailable,D='<textarea style="display: none" id="'+I+'" rows="10" cols="40"> </textarea><div id="'+H+'" style="display:none;color:red;font-size:16px;font-weight:bold;padding-top:160px;text-align:center;z-index:11;"></div><iframe src="" style="width:100%;background-color:#f1f1e3;" frameborder="0" name="'+J+'" id="'+J+'" allowtransparency="1"></iframe>',C=L.config.wsc_customLoaderScript||F+"//loader.webspellchecker.net/sproxy_fck/sproxy.php?plugin=fck2&customerid="+L.config.wsc_customerId+"&cmd=script&doc=wsc&schema=22";
if(L.config.wsc_customLoaderScript){E+='<p style="color:#000;font-size:11px;font-weight: normal;text-align:center;padding-top:10px">'+L.lang.spellCheck.errorLoading.replace(/%s/g,L.config.wsc_customLoaderScript)+"</p>"
}function B(M,O){var N=0;
return function(){if(typeof window.doSpell=="function"){if(typeof G!="undefined"){window.clearInterval(G)
}A(M)
}else{if(N++==180){window._cancelOnError(O)
}}}
}window._cancelOnError=function(M){if(typeof window.WSC_Error=="undefined"){CKEDITOR.document.getById(J).setStyle("display","none");
var N=CKEDITOR.document.getById(H);
N.setStyle("display","block");
N.setHtml(M||L.lang.spellCheck.notAvailable)
}};
function A(M){var P=new window._SP_FCK_LangCompare(),O=CKEDITOR.getUrl(L.plugins.wsc.path+"dialogs/"),N=O+"tmpFrameset.html";
window.gFCKPluginName="wsc";
P.setDefaulLangCode(L.config.defaultLanguage);
window.doSpell({ctrl:I,lang:L.config.wsc_lang||P.getSPLangCode(L.langCode),intLang:L.config.wsc_uiLang||P.getSPLangCode(L.langCode),winType:J,onCancel:function(){M.hide()
},onFinish:function(Q){L.focus();
M.getParentEditor().setData(Q.value);
M.hide()
},staticFrame:N,framesetPath:N,iframePath:O+"ciframe.html",schemaURI:O+"wsc.css",userDictionaryName:L.config.wsc_userDictionaryName,customDictionaryName:L.config.wsc_customDictionaryIds&&L.config.wsc_customDictionaryIds.split(","),domainName:L.config.wsc_domainName});
CKEDITOR.document.getById(H).setStyle("display","none");
CKEDITOR.document.getById(J).setStyle("display","block")
}return{title:L.config.wsc_dialogTitle||L.lang.spellCheck.title,minWidth:485,minHeight:380,buttons:[CKEDITOR.dialog.cancelButton],onShow:function(){var M=this.getContentElement("general","content").getElement();
M.setHtml(D);
M.getChild(2).setStyle("height",this._.contentSize.height+"px");
if(typeof window.doSpell!="function"){CKEDITOR.document.getHead().append(CKEDITOR.document.createElement("script",{attributes:{type:"text/javascript",src:C}}))
}var N=L.getData();
CKEDITOR.document.getById(I).setValue(N);
G=window.setInterval(B(this,E),250)
},onHide:function(){window.ooo=undefined;
window.int_framsetLoaded=undefined;
window.framesetLoaded=undefined;
window.is_window_opened=false
},contents:[{id:"general",label:L.config.wsc_dialogTitle||L.lang.spellCheck.title,padding:0,elements:[{type:"html",id:"content",html:""}]}]}
});
CKEDITOR.dialog.on("resize",function(B){var A=B.data,E=A.dialog;
if(E._.name=="checkspell"){var D=E.getContentElement("general","content").getElement(),C=D&&D.getChild(2);
C&&C.setSize("height",A.height);
C&&C.setSize("width",A.width)
}});