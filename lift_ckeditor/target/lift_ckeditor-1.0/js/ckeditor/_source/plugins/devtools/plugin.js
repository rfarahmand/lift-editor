;
CKEDITOR.plugins.add("devtools",{lang:["bg","cs","cy","da","de","el","en","eo","et","fa","fi","fr","gu","he","hr","it","nb","nl","no","pl","tr","ug","uk","vi","zh-cn"],init:function(A){A._.showDialogDefinitionTooltips=1
},onLoad:function(){CKEDITOR.document.appendStyleText(CKEDITOR.config.devtools_styles||"#cke_tooltip { padding: 5px; border: 2px solid #333; background: #ffffff }#cke_tooltip h2 { font-size: 1.1em; border-bottom: 1px solid; margin: 0; padding: 1px; }#cke_tooltip ul { padding: 0pt; list-style-type: none; }")
}});
(function(){function C(F,E,D,H){var J=F.lang.devTools,G='<a href="http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.dialog.definition.'+(D?(D.type=="text"?"textInput":D.type):"content")+'.html" target="_blank">'+(D?D.type:"content")+"</a>",I="<h2>"+J.title+"</h2><ul><li><strong>"+J.dialogName+"</strong> : "+E.getName()+"</li><li><strong>"+J.tabName+"</strong> : "+H+"</li>";
if(D){I+="<li><strong>"+J.elementId+"</strong> : "+D.id+"</li>"
}I+="<li><strong>"+J.elementType+"</strong> : "+G+"</li>";
return I+"</ul>"
}function B(K,D,G,I,E,H){var J=D.getDocumentPosition(),L={"z-index":CKEDITOR.dialog._.currentZIndex+10,top:(J.y+D.getSize("height"))+"px"};
A.setHtml(K(G,I,E,H));
A.show();
if(G.lang.dir=="rtl"){var F=CKEDITOR.document.getWindow().getViewPaneSize();
L.right=(F.width-J.x-D.getSize("width"))+"px"
}else{L.left=J.x+"px"
}A.setStyles(L)
}var A;
CKEDITOR.on("reset",function(){A&&A.remove();
A=null
});
CKEDITOR.on("dialogDefinition",function(D){var F=D.editor;
if(F._.showDialogDefinitionTooltips){if(!A){A=CKEDITOR.dom.element.createFromHtml('<div id="cke_tooltip" tabindex="-1" style="position: absolute"></div>',CKEDITOR.document);
A.hide();
A.on("mouseover",function(){this.show()
});
A.on("mouseout",function(){this.hide()
});
A.appendTo(CKEDITOR.document.getBody())
}var E=D.data.definition.dialog,G=F.config.devtools_textCallback||C;
E.on("load",function(){var J=E.parts.tabs.getChildren(),K;
for(var I=0,H=J.count();
I<H;
I++){K=J.getItem(I);
K.on("mouseover",function(){var L=this.$.id;
B(G,this,F,E,null,L.substring(4,L.lastIndexOf("_")))
});
K.on("mouseout",function(){A.hide()
})
}E.foreach(function(M){if(M.type in {hbox:1,vbox:1}){return 
}var L=M.getElement();
if(L){L.on("mouseover",function(){B(G,this,F,E,M,E._.currentTabId)
});
L.on("mouseout",function(){A.hide()
})
}})
})
}})
})();