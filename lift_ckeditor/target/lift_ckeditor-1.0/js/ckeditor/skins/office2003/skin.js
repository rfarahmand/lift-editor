;
CKEDITOR.skins.add("office2003",(function(){return{editor:{css:["editor.css"]},dialog:{css:["dialog.css"]},separator:{canGroup:false},templates:{css:["templates.css"]},margins:[0,14,18,14]}
})());
(function(){CKEDITOR.dialog?A():CKEDITOR.on("dialogPluginReady",A);
function A(){CKEDITOR.dialog.on("resize",function(B){var H=B.data,G=H.width,F=H.height,E=H.dialog,D=E.parts.contents;
if(H.skin!="office2003"){return 
}D.setStyles({width:G+"px",height:F+"px"});
if(!CKEDITOR.env.ie||CKEDITOR.env.ie9Compat){return 
}var C=function(){var L=E.parts.dialog.getChild([0,0,0]),K=L.getChild(0),J=K.getSize("width");
F+=K.getChild(0).getSize("height")+1;
var I=L.getChild(2);
I.setSize("width",J);
I=L.getChild(7);
I.setSize("width",J-28);
I=L.getChild(4);
I.setSize("height",F);
I=L.getChild(5);
I.setSize("height",F)
};
setTimeout(C,100);
if(B.editor.lang.dir=="rtl"){setTimeout(C,1000)
}})
}})();