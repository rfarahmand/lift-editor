(function(){function B(G){var F=G.getStyle("overflow-y"),E=G.getDocument(),D=CKEDITOR.dom.element.createFromHtml('<span style="margin:0;padding:0;border:0;clear:both;width:1px;height:1px;display:block;">'+(CKEDITOR.env.webkit?"&nbsp;":"")+"</span>",E);
E[CKEDITOR.env.ie?"getBody":"getDocumentElement"]().append(D);
var C=D.getDocumentPosition(E).y+D.$.offsetHeight;
D.remove();
G.setStyle("overflow-y",F);
return C
}var A=function(L){if(!L.window){return 
}var K=L.document,J=new CKEDITOR.dom.element(K.getWindow().$.frameElement),I=K.getBody(),H=K.getDocumentElement(),G=L.window.getViewPaneSize().height,F=K.$.compatMode=="BackCompat"?I:H,E=B(F);
E+=L.config.autoGrow_bottomSpace||0;
var D=L.config.autoGrow_minHeight!=undefined?L.config.autoGrow_minHeight:200,C=L.config.autoGrow_maxHeight||Infinity;
E=Math.max(E,D);
E=Math.min(E,C);
if(E!=G){E=L.fire("autoGrow",{currentHeight:G,newHeight:E}).newHeight;
L.resize(L.container.getStyle("width"),E,true)
}if(F.$.scrollHeight>F.$.clientHeight&&E<C){F.setStyle("overflow-y","hidden")
}else{F.removeStyle("overflow-y")
}};
CKEDITOR.plugins.add("autogrow",{init:function(E){E.addCommand("autogrow",{exec:A,modes:{wysiwyg:1},readOnly:1,canUndo:false,editorFocus:false});
var D={contentDom:1,key:1,selectionChange:1,insertElement:1,mode:1};
E.config.autoGrow_onStartup&&(D.instanceReady=1);
for(var C in D){E.on(C,function(G){var F=E.getCommand("maximize");
if(G.editor.mode=="wysiwyg"&&(!F||F.state!=CKEDITOR.TRISTATE_ON)){setTimeout(function(){A(G.editor);
A(G.editor)
},100)
}})
}}})
})();