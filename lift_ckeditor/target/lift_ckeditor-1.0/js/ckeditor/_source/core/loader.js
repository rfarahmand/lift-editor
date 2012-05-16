;
if(typeof CKEDITOR=="undefined"){CKEDITOR={}
}if(!CKEDITOR.loader){CKEDITOR.loader=(function(){var A={"core/_bootstrap":["core/config","core/ckeditor","core/plugins","core/scriptloader","core/tools","core/dom/comment","core/dom/elementpath","core/dom/text","core/dom/rangelist"],"core/ckeditor":["core/ckeditor_basic","core/dom","core/dtd","core/dom/document","core/dom/element","core/editor","core/event","core/htmlparser","core/htmlparser/element","core/htmlparser/fragment","core/htmlparser/filter","core/htmlparser/basicwriter","core/tools"],"core/ckeditor_base":[],"core/ckeditor_basic":["core/editor_basic","core/env","core/event"],"core/command":[],"core/config":["core/ckeditor_base"],"core/dom":[],"core/dom/comment":["core/dom/node"],"core/dom/document":["core/dom","core/dom/domobject","core/dom/window"],"core/dom/documentfragment":["core/dom/element"],"core/dom/element":["core/dom","core/dom/document","core/dom/domobject","core/dom/node","core/dom/nodelist","core/tools"],"core/dom/elementpath":["core/dom/element"],"core/dom/event":[],"core/dom/node":["core/dom/domobject","core/tools"],"core/dom/nodelist":["core/dom/node"],"core/dom/domobject":["core/dom/event"],"core/dom/range":["core/dom/document","core/dom/documentfragment","core/dom/element","core/dom/walker"],"core/dom/rangelist":["core/dom/range"],"core/dom/text":["core/dom/node","core/dom/domobject"],"core/dom/walker":["core/dom/node"],"core/dom/window":["core/dom/domobject"],"core/dtd":["core/tools"],"core/editor":["core/command","core/config","core/editor_basic","core/focusmanager","core/lang","core/plugins","core/skins","core/themes","core/tools","core/ui"],"core/editor_basic":["core/event"],"core/env":[],"core/event":[],"core/focusmanager":[],"core/htmlparser":[],"core/htmlparser/comment":["core/htmlparser"],"core/htmlparser/element":["core/htmlparser","core/htmlparser/fragment"],"core/htmlparser/fragment":["core/htmlparser","core/htmlparser/comment","core/htmlparser/text","core/htmlparser/cdata"],"core/htmlparser/text":["core/htmlparser"],"core/htmlparser/cdata":["core/htmlparser"],"core/htmlparser/filter":["core/htmlparser"],"core/htmlparser/basicwriter":["core/htmlparser"],"core/lang":[],"core/plugins":["core/resourcemanager"],"core/resourcemanager":["core/scriptloader","core/tools"],"core/scriptloader":["core/dom/element","core/env"],"core/skins":["core/scriptloader"],"core/themes":["core/resourcemanager"],"core/tools":["core/env"],"core/ui":[]};
var E=(function(){if(CKEDITOR&&CKEDITOR.basePath){return CKEDITOR.basePath
}var I="";
var F=document.getElementsByTagName("script");
for(var H=0;
H<F.length;
H++){var G=F[H].src.match(/(^|.*?[\\\/])(?:_source\/)?core\/loader.js(?:\?.*)?$/i);
if(G){I=G[1];
break
}}if(I.indexOf("://")==-1){if(I.indexOf("/")===0){I=location.href.match(/^.*?:\/\/[^\/]*/)[0]+I
}else{I=location.href.match(/^[^\?]*\//)[0]+I
}}return I
})();
var C="C3HA5RM";
var B=function(F){if(CKEDITOR&&CKEDITOR.getUrl){return CKEDITOR.getUrl(F)
}return E+F+(F.indexOf("?")>=0?"&":"?")+"t="+C
};
var D=[];
return{loadedScripts:[],loadPending:function(){var I=D.shift();
if(!I){return 
}var G=B("_source/"+I+".js");
var F=document.createElement("script");
F.type="text/javascript";
F.src=G;
function H(){CKEDITOR.loader.loadedScripts.push(I);
CKEDITOR.loader.loadPending()
}if(typeof (F.onreadystatechange)!=="undefined"){F.onreadystatechange=function(){if(F.readyState=="loaded"||F.readyState=="complete"){F.onreadystatechange=null;
H()
}}
}else{F.onload=function(){setTimeout(function(){H(I)
},0)
}
}document.body.appendChild(F)
},load:function(I,J){if(I in this.loadedScripts){return 
}var H=A[I];
if(!H){throw'The script name"'+I+'" is not defined.'
}this.loadedScripts[I]=true;
for(var G=0;
G<H.length;
G++){this.load(H[G],true)
}var F=B("_source/"+I+".js");
if(document.body&&(!document.readyState||document.readyState=="complete")){D.push(I);
if(!J){this.loadPending()
}}else{this.loadedScripts.push(I);
document.write('<script src="'+F+'" type="text/javascript"><\/script>')
}}}
})()
}if(CKEDITOR._autoLoad){CKEDITOR.loader.load(CKEDITOR._autoLoad);
delete CKEDITOR._autoLoad
};