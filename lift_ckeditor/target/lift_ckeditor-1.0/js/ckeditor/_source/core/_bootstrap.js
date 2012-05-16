(function(){if(CKEDITOR.env.webkit){CKEDITOR.env.hc=false;
return 
}var B=CKEDITOR.dom.element.createFromHtml('<div style="width:0px;height:0px;position:absolute;left:-10000px;border: 1px solid;border-color: red blue;"></div>',CKEDITOR.document);
B.appendTo(CKEDITOR.document.getHead());
try{CKEDITOR.env.hc=B.getComputedStyle("border-top-color")==B.getComputedStyle("border-right-color")
}catch(A){CKEDITOR.env.hc=false
}if(CKEDITOR.env.hc){CKEDITOR.env.cssClass+=" cke_hc"
}B.remove()
})();
CKEDITOR.plugins.load(CKEDITOR.config.corePlugins.split(","),function(){CKEDITOR.status="loaded";
CKEDITOR.fire("loaded");
var B=CKEDITOR._.pending;
if(B){delete CKEDITOR._.pending;
for(var A=0;
A<B.length;
A++){CKEDITOR.add(B[A])
}}});
if(CKEDITOR.env.ie){try{document.execCommand("BackgroundImageCache",false,true)
}catch(e){}};