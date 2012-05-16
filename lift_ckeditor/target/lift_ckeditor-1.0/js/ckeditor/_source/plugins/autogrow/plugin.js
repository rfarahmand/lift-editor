(function(){function B(F){var E=F.getStyle("overflow-y");
var G=F.getDocument();
var D=CKEDITOR.dom.element.createFromHtml('<span style="margin:0;padding:0;border:0;clear:both;width:1px;height:1px;display:block;">'+(CKEDITOR.env.webkit?"&nbsp;":"")+"</span>",G);
G[CKEDITOR.env.ie?"getBody":"getDocumentElement"]().append(D);
var C=D.getDocumentPosition(G).y+D.$.offsetHeight;
D.remove();
F.setStyle("overflow-y",E);
return C
}var A=function(I){if(!I.window){return 
}var L=I.document,G=new CKEDITOR.dom.element(L.getWindow().$.frameElement),H=L.getBody(),E=L.getDocumentElement(),D=I.window.getViewPaneSize().height,K=L.$.compatMode=="BackCompat"?H:E,C=B(K);
C+=(I.config.autoGrow_bottomSpace||0);
var F=I.config.autoGrow_minHeight!=undefined?I.config.autoGrow_minHeight:200,J=I.config.autoGrow_maxHeight||Infinity;
C=Math.max(C,F);
C=Math.min(C,J);
if(C!=D){C=I.fire("autoGrow",{currentHeight:D,newHeight:C}).newHeight;
I.resize(I.container.getStyle("width"),C,true)
}if(K.$.scrollHeight>K.$.clientHeight&&C<J){K.setStyle("overflow-y","hidden")
}else{K.removeStyle("overflow-y")
}};
CKEDITOR.plugins.add("autogrow",{init:function(D){D.addCommand("autogrow",{exec:A,modes:{wysiwyg:1},readOnly:1,canUndo:false,editorFocus:false});
var E={contentDom:1,key:1,selectionChange:1,insertElement:1,mode:1};
D.config.autoGrow_onStartup&&(E.instanceReady=1);
for(var C in E){D.on(C,function(F){var G=D.getCommand("maximize");
if(F.editor.mode=="wysiwyg"&&(!G||G.state!=CKEDITOR.TRISTATE_ON)){setTimeout(function(){A(F.editor);
A(F.editor)
},100)
}})
}}})
})();