;
if(CKEDITOR.status=="unloaded"){(function(){CKEDITOR.event.implementOn(CKEDITOR);
CKEDITOR.loadFullCore=function(){if(CKEDITOR.status!="basic_ready"){CKEDITOR.loadFullCore._load=1;
return 
}delete CKEDITOR.loadFullCore;
var B=document.createElement("script");
B.type="text/javascript";
B.src=CKEDITOR.basePath+"ckeditor.js";
document.getElementsByTagName("head")[0].appendChild(B)
};
CKEDITOR.loadFullCoreTimeout=0;
CKEDITOR.replaceClass="ckeditor";
CKEDITOR.replaceByClassEnabled=1;
var A=function(B,D,C,F){if(CKEDITOR.env.isCompatible){if(CKEDITOR.loadFullCore){CKEDITOR.loadFullCore()
}var E=C(B,D,F);
CKEDITOR.add(E);
return E
}return null
};
CKEDITOR.replace=function(B,C){return A(B,C,CKEDITOR.editor.replace)
};
CKEDITOR.appendTo=function(B,C,D){return A(B,C,CKEDITOR.editor.appendTo,D)
};
CKEDITOR.add=function(B){var C=this._.pending||(this._.pending=[]);
C.push(B)
};
CKEDITOR.replaceAll=function(){var B=document.getElementsByTagName("textarea");
for(var E=0;
E<B.length;
E++){var D=null,C=B[E];
if(!C.name&&!C.id){continue
}if(typeof arguments[0]=="string"){var F=new RegExp("(?:^|\\s)"+arguments[0]+"(?:$|\\s)");
if(!F.test(C.className)){continue
}}else{if(typeof arguments[0]=="function"){D={};
if(arguments[0](C,D)===false){continue
}}}this.replace(C,D)
}};
(function(){var B=function(){var D=CKEDITOR.loadFullCore,C=CKEDITOR.loadFullCoreTimeout;
if(CKEDITOR.replaceByClassEnabled){CKEDITOR.replaceAll(CKEDITOR.replaceClass)
}CKEDITOR.status="basic_ready";
if(D&&D._load){D()
}else{if(C){setTimeout(function(){if(CKEDITOR.loadFullCore){CKEDITOR.loadFullCore()
}},C*1000)
}}};
if(window.addEventListener){window.addEventListener("load",B,false)
}else{if(window.attachEvent){window.attachEvent("onload",B)
}}})();
CKEDITOR.status="basic_loaded"
})()
};