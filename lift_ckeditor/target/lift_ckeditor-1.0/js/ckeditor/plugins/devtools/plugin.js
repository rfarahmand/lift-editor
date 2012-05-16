;
CKEDITOR.plugins.add("devtools",{lang:["bg","cs","cy","da","de","el","en","eo","et","fa","fi","fr","gu","he","hr","it","nb","nl","no","pl","tr","ug","uk","vi","zh-cn"],init:function(A){A._.showDialogDefinitionTooltips=1
},onLoad:function(){CKEDITOR.document.appendStyleText(CKEDITOR.config.devtools_styles||"#cke_tooltip { padding: 5px; border: 2px solid #333; background: #ffffff }#cke_tooltip h2 { font-size: 1.1em; border-bottom: 1px solid; margin: 0; padding: 1px; }#cke_tooltip ul { padding: 0pt; list-style-type: none; }")
}});
(function(){function B(J,I,H,G){var F=J.lang.devTools,E='<a href="http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.dialog.definition.'+(H?H.type=="text"?"textInput":H.type:"content")+'.html" target="_blank">'+(H?H.type:"content")+"</a>",D="<h2>"+F.title+"</h2><ul><li><strong>"+F.dialogName+"</strong> : "+I.getName()+"</li><li><strong>"+F.tabName+"</strong> : "+G+"</li>";
if(H){D+="<li><strong>"+F.elementId+"</strong> : "+H.id+"</li>"
}D+="<li><strong>"+F.elementType+"</strong> : "+E+"</li>";
return D+"</ul>"
}function A(L,K,J,I,H,G){var F=K.getDocumentPosition(),E={"z-index":CKEDITOR.dialog._.currentZIndex+10,top:F.y+K.getSize("height")+"px"};
C.setHtml(L(J,I,H,G));
C.show();
if(J.lang.dir=="rtl"){var D=CKEDITOR.document.getWindow().getViewPaneSize();
E.right=D.width-F.x-K.getSize("width")+"px"
}else{E.left=F.x+"px"
}C.setStyles(E)
}var C;
CKEDITOR.on("reset",function(){C&&C.remove();
C=null
});
CKEDITOR.on("dialogDefinition",function(G){var F=G.editor;
if(F._.showDialogDefinitionTooltips){if(!C){C=CKEDITOR.dom.element.createFromHtml('<div id="cke_tooltip" tabindex="-1" style="position: absolute"></div>',CKEDITOR.document);
C.hide();
C.on("mouseover",function(){this.show()
});
C.on("mouseout",function(){this.hide()
});
C.appendTo(CKEDITOR.document.getBody())
}var E=G.data.definition.dialog,D=F.config.devtools_textCallback||B;
E.on("load",function(){var K=E.parts.tabs.getChildren(),J;
for(var I=0,H=K.count();
I<H;
I++){J=K.getItem(I);
J.on("mouseover",function(){var L=this.$.id;
A(D,this,F,E,null,L.substring(4,L.lastIndexOf("_")))
});
J.on("mouseout",function(){C.hide()
})
}E.foreach(function(M){if(M.type in {hbox:1,vbox:1}){return 
}var L=M.getElement();
if(L){L.on("mouseover",function(){A(D,this,F,E,M,E._.currentTabId)
});
L.on("mouseout",function(){C.hide()
})
}})
})
}})
})();