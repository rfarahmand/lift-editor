;
if(!window.CKEDITOR){window.CKEDITOR=(function(){var B={timestamp:"C3HA5RM",version:"3.6.3",revision:"7474",rnd:Math.floor(Math.random()*(999-100+1))+100,_:{},status:"unloaded",basePath:(function(){var G=window.CKEDITOR_BASEPATH||"";
if(!G){var D=document.getElementsByTagName("script");
for(var F=0;
F<D.length;
F++){var E=D[F].src.match(/(^|.*[\\\/])ckeditor(?:_basic)?(?:_source)?.js(?:\?.*)?$/i);
if(E){G=E[1];
break
}}}if(G.indexOf(":/")==-1){if(G.indexOf("/")===0){G=location.href.match(/^.*?:\/\/[^\/]*/)[0]+G
}else{G=location.href.match(/^[^\?]*\/(?:)/)[0]+G
}}if(!G){throw'The CKEditor installation path could not be automatically detected. Please set the global variable "CKEDITOR_BASEPATH" before creating editor instances.'
}return G
})(),getUrl:function(D){if(D.indexOf(":/")==-1&&D.indexOf("/")!==0){D=this.basePath+D
}if(this.timestamp&&D.charAt(D.length-1)!="/"&&!(/[&?]t=/).test(D)){D+=(D.indexOf("?")>=0?"&":"?")+"t="+this.timestamp
}return D
}};
var A=window.CKEDITOR_GETURL;
if(A){var C=B.getUrl;
B.getUrl=function(D){return A.call(B,D)||C.call(B,D)
}
}return B
})()
};