;
if(!window.CKEDITOR){window.CKEDITOR=(function(){var B={timestamp:"",version:"3.6.3",revision:"7474",rnd:Math.floor(Math.random()*900)+100,_:{},status:"unloaded",basePath:(function(){var G=window.CKEDITOR_BASEPATH||"";
if(!G){var F=document.getElementsByTagName("script");
for(var E=0;
E<F.length;
E++){var D=F[E].src.match(/(^|.*[\\\/])ckeditor(?:_basic)?(?:_source)?.js(?:\?.*)?$/i);
if(D){G=D[1];
break
}}}if(G.indexOf(":/")==-1){if(G.indexOf("/")===0){G=location.href.match(/^.*?:\/\/[^\/]*/)[0]+G
}else{G=location.href.match(/^[^\?]*\/(?:)/)[0]+G
}}if(!G){throw'The CKEditor installation path could not be automatically detected. Please set the global variable "CKEDITOR_BASEPATH" before creating editor instances.'
}return G
})(),getUrl:function(D){if(D.indexOf(":/")==-1&&D.indexOf("/")!==0){D=this.basePath+D
}if(this.timestamp&&D.charAt(D.length-1)!="/"&&!/[&?]t=/.test(D)){D+=(D.indexOf("?")>=0?"&":"?")+"t="+this.timestamp
}return D
}},A=window.CKEDITOR_GETURL;
if(A){var C=B.getUrl;
B.getUrl=function(D){return A.call(B,D)||C.call(B,D)
}
}return B
})()
}CKEDITOR._autoLoad="core/ckeditor_basic";
document.write('<script type="text/javascript" src="'+CKEDITOR.getUrl("_source/core/loader.js")+'"><\/script>');