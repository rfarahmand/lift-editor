(function(){var E=".%2 p,.%2 div,.%2 pre,.%2 address,.%2 blockquote,.%2 h1,.%2 h2,.%2 h3,.%2 h4,.%2 h5,.%2 h6{background-repeat: no-repeat;background-position: top %3;border: 1px dotted gray;padding-top: 8px;padding-%3: 8px;}.%2 p{%1p.png);}.%2 div{%1div.png);}.%2 pre{%1pre.png);}.%2 address{%1address.png);}.%2 blockquote{%1blockquote.png);}.%2 h1{%1h1.png);}.%2 h2{%1h2.png);}.%2 h3{%1h3.png);}.%2 h4{%1h4.png);}.%2 h5{%1h5.png);}.%2 h6{%1h6.png);}";
var A=/%1/g,B=/%2/g,D=/%3/g;
var C={readOnly:1,preserveState:true,editorFocus:false,exec:function(F){this.toggleState();
this.refresh(F)
},refresh:function(F){if(F.document){var G=(this.state==CKEDITOR.TRISTATE_ON)?"addClass":"removeClass";
F.document.getBody()[G]("cke_show_blocks")
}}};
CKEDITOR.plugins.add("showblocks",{requires:["wysiwygarea"],init:function(F){var G=F.addCommand("showblocks",C);
G.canUndo=false;
if(F.config.startupOutlineBlocks){G.setState(CKEDITOR.TRISTATE_ON)
}F.addCss(E.replace(A,"background-image: url("+CKEDITOR.getUrl(this.path)+"images/block_").replace(B,"cke_show_blocks ").replace(D,F.lang.dir=="rtl"?"right":"left"));
F.ui.addButton("ShowBlocks",{label:F.lang.showBlocks,command:"showblocks"});
F.on("mode",function(){if(G.state!=CKEDITOR.TRISTATE_DISABLED){G.refresh(F)
}});
F.on("contentDom",function(){if(G.state!=CKEDITOR.TRISTATE_DISABLED){G.refresh(F)
}})
}})
})();