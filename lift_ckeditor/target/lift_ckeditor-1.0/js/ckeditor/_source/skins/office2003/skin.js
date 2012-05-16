;
CKEDITOR.skins.add("office2003",(function(){return{editor:{css:["editor.css"]},dialog:{css:["dialog.css"]},separator:{canGroup:false},templates:{css:["templates.css"]},margins:[0,14,18,14]}
})());
(function(){CKEDITOR.dialog?A():CKEDITOR.on("dialogPluginReady",A);
function A(){CKEDITOR.dialog.on("resize",function(C){var H=C.data,F=H.width,B=H.height,E=H.dialog,G=E.parts.contents;
if(H.skin!="office2003"){return 
}G.setStyles({width:F+"px",height:B+"px"});
if(!CKEDITOR.env.ie||CKEDITOR.env.ie9Compat){return 
}var D=function(){var K=E.parts.dialog.getChild([0,0,0]),J=K.getChild(0),I=J.getSize("width");
B+=J.getChild(0).getSize("height")+1;
var L=K.getChild(2);
L.setSize("width",I);
L=K.getChild(7);
L.setSize("width",I-28);
L=K.getChild(4);
L.setSize("height",B);
L=K.getChild(5);
L.setSize("height",B)
};
setTimeout(D,100);
if(C.editor.lang.dir=="rtl"){setTimeout(D,1000)
}})
}})();