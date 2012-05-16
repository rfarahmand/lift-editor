(function(){var A={modes:{wysiwyg:1,source:1},canUndo:false,readOnly:1,exec:function(N){var H,G=N.config,K=G.baseHref?'<base href="'+G.baseHref+'"/>':"",I=CKEDITOR.env.isCustomDomain();
if(G.fullPage){H=N.getData().replace(/<head>/,"$&"+K).replace(/[^>]*(?=<\/title>)/,"$& &mdash; "+N.lang.preview)
}else{var L="<body ",M=N.document&&N.document.getBody();
if(M){if(M.getAttribute("id")){L+='id="'+M.getAttribute("id")+'" '
}if(M.getAttribute("class")){L+='class="'+M.getAttribute("class")+'" '
}}L+=">";
H=N.config.docType+'<html dir="'+N.config.contentsLangDirection+'"><head>'+K+"<title>"+N.lang.preview+"</title>"+CKEDITOR.tools.buildStyleHtml(N.config.contentsCss)+"</head>"+L+N.getData()+"</body></html>"
}var E=640,C=420,J=80;
try{var Q=window.screen;
E=Math.round(Q.width*0.8);
C=Math.round(Q.height*0.7);
J=Math.round(Q.width*0.1)
}catch(O){}var F="";
if(I){window._cke_htmlToLoad=H;
F='javascript:void( (function(){document.open();document.domain="'+document.domain+'";document.write( window.opener._cke_htmlToLoad );document.close();window.opener._cke_htmlToLoad = null;})() )'
}var D=window.open(F,null,"toolbar=yes,location=no,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width="+E+",height="+C+",left="+J);
if(!I){var P=D.document;
P.open();
P.write(H);
P.close();
CKEDITOR.env.webkit&&setTimeout(function(){P.body.innerHTML+=""
},0)
}}};
var B="preview";
CKEDITOR.plugins.add(B,{init:function(C){C.addCommand(B,A);
C.ui.addButton("Preview",{label:C.lang.preview,command:B})
}})
})();