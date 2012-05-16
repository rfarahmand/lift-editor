;
CKEDITOR.skins.add("v2",(function(){return{editor:{css:["editor.css"]},dialog:{css:["dialog.css"]},separator:{canGroup:false},templates:{css:["templates.css"]},margins:[0,14,18,14]}
})());
(function(){CKEDITOR.dialog?A():CKEDITOR.on("dialogPluginReady",A);
function A(){CKEDITOR.dialog.on("resize",function(C){var G=C.data,E=G.width,B=G.height,D=G.dialog,F=D.parts.contents;
if(G.skin!="v2"){return 
}F.setStyles({width:E+"px",height:B+"px"});
if(!CKEDITOR.env.ie||CKEDITOR.env.ie9Compat){return 
}setTimeout(function(){var J=D.parts.dialog.getChild([0,0,0]),I=J.getChild(0),H=I.getSize("width");
B+=I.getChild(0).getSize("height")+1;
var K=J.getChild(2);
K.setSize("width",H);
K=J.getChild(7);
K.setSize("width",H-28);
K=J.getChild(4);
K.setSize("height",B);
K=J.getChild(5);
K.setSize("height",B)
},100)
})
}})();