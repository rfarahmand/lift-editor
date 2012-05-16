;
CKEDITOR.skins.add("v2",(function(){return{editor:{css:["editor.css"]},dialog:{css:["dialog.css"]},separator:{canGroup:false},templates:{css:["templates.css"]},margins:[0,14,18,14]}
})());
(function(){CKEDITOR.dialog?A():CKEDITOR.on("dialogPluginReady",A);
function A(){CKEDITOR.dialog.on("resize",function(B){var G=B.data,F=G.width,E=G.height,D=G.dialog,C=D.parts.contents;
if(G.skin!="v2"){return 
}C.setStyles({width:F+"px",height:E+"px"});
if(!CKEDITOR.env.ie||CKEDITOR.env.ie9Compat){return 
}setTimeout(function(){var K=D.parts.dialog.getChild([0,0,0]),J=K.getChild(0),I=J.getSize("width");
E+=J.getChild(0).getSize("height")+1;
var H=K.getChild(2);
H.setSize("width",I);
H=K.getChild(7);
H.setSize("width",I-28);
H=K.getChild(4);
H.setSize("height",E);
H=K.getChild(5);
H.setSize("height",E)
},100)
})
}})();