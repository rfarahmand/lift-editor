;
CKEDITOR.plugins.add("format",{requires:["richcombo","styles"],init:function(E){var C=E.config,G=E.lang.format;
var B=C.format_tags.split(";");
var F={};
for(var D=0;
D<B.length;
D++){var A=B[D];
F[A]=new CKEDITOR.style(C["format_"+A]);
F[A]._.enterMode=E.config.enterMode
}E.ui.addRichCombo("Format",{label:G.label,title:G.panelTitle,className:"cke_format",panel:{css:E.skin.editor.css.concat(C.contentsCss),multiSelect:false,attributes:{"aria-label":G.panelTitle}},init:function(){this.startGroup(G.panelTitle);
for(var H in F){var I=G["tag_"+H];
this.add(H,F[H].buildPreview(I),I)
}},onClick:function(J){E.focus();
E.fire("saveSnapshot");
var I=F[J],H=new CKEDITOR.dom.elementPath(E.getSelection().getStartElement());
I[I.checkActive(H)?"remove":"apply"](E.document);
setTimeout(function(){E.fire("saveSnapshot")
},0)
},onRender:function(){E.on("selectionChange",function(K){var J=this.getValue();
var I=K.data.path;
for(var H in F){if(F[H].checkActive(I)){if(H!=J){this.setValue(H,E.lang.format["tag_"+H])
}return 
}}this.setValue("")
},this)
}})
}});
CKEDITOR.config.format_tags="p;h1;h2;h3;h4;h5;h6;pre;address;div";
CKEDITOR.config.format_p={element:"p"};
CKEDITOR.config.format_div={element:"div"};
CKEDITOR.config.format_pre={element:"pre"};
CKEDITOR.config.format_address={element:"address"};
CKEDITOR.config.format_h1={element:"h1"};
CKEDITOR.config.format_h2={element:"h2"};
CKEDITOR.config.format_h3={element:"h3"};
CKEDITOR.config.format_h4={element:"h4"};
CKEDITOR.config.format_h5={element:"h5"};
CKEDITOR.config.format_h6={element:"h6"};