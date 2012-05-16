(function(){var B=function(){this.toolbars=[];
this.focusCommandExecuted=false
};
B.prototype.focus=function(){for(var D=0,F;
F=this.toolbars[D++];
){for(var C=0,E;
E=F.items[C++];
){if(E.focus){E.focus();
return 
}}}};
var A={toolbarFocus:{modes:{wysiwyg:1,source:1},readOnly:1,exec:function(C){if(C.toolbox){C.toolbox.focusCommandExecuted=true;
if(CKEDITOR.env.ie||CKEDITOR.env.air){setTimeout(function(){C.toolbox.focus()
},100)
}else{C.toolbox.focus()
}}}}};
CKEDITOR.plugins.add("toolbar",{init:function(D){var E;
var C=function(I,K){var G,H;
var J=D.lang.dir=="rtl",F=D.config.toolbarGroupCycling;
F=F===undefined||F;
switch(K){case 9:case CKEDITOR.SHIFT+9:while(!H||!H.items.length){H=K==9?((H?H.next:I.toolbar.next)||D.toolbox.toolbars[0]):((H?H.previous:I.toolbar.previous)||D.toolbox.toolbars[D.toolbox.toolbars.length-1]);
if(H.items.length){I=H.items[E?(H.items.length-1):0];
while(I&&!I.focus){I=E?I.previous:I.next;
if(!I){H=0
}}}}if(I){I.focus()
}return false;
case J?37:39:case 40:G=I;
do{G=G.next;
if(!G&&F){G=I.toolbar.items[0]
}}while(G&&!G.focus);
if(G){G.focus()
}else{C(I,9)
}return false;
case J?39:37:case 38:G=I;
do{G=G.previous;
if(!G&&F){G=I.toolbar.items[I.toolbar.items.length-1]
}}while(G&&!G.focus);
if(G){G.focus()
}else{E=1;
C(I,CKEDITOR.SHIFT+9);
E=0
}return false;
case 27:D.focus();
return false;
case 13:case 32:I.execute();
return false
}return true
};
D.on("themeSpace",function(S){if(S.data.space==D.config.toolbarLocation){D.toolbox=new B();
var Y=CKEDITOR.tools.getNextId();
var L=['<div class="cke_toolbox" role="group" aria-labelledby="',Y,'" onmousedown="return false;"'],R=D.config.toolbarStartupExpanded!==false,V;
L.push(R?">":' style="display:none">');
L.push('<span id="',Y,'" class="cke_voice_label">',D.lang.toolbars,"</span>");
var Q=D.toolbox.toolbars,M=(D.config.toolbar instanceof Array)?D.config.toolbar:D.config["toolbar_"+D.config.toolbar];
for(var O=0;
O<M.length;
O++){var N,K=0,F,I=M[O],P;
if(!I){continue
}if(V){L.push("</div>");
V=0
}if(I==="/"){L.push('<div class="cke_break"></div>');
continue
}P=I.items||I;
for(var T=0;
T<P.length;
T++){var X,U=P[T],W;
X=D.ui.create(U);
if(X){W=X.canGroup!==false;
if(!K){N=CKEDITOR.tools.getNextId();
K={id:N,items:[]};
F=I.name&&(D.lang.toolbarGroups[I.name]||I.name);
L.push('<span id="',N,'" class="cke_toolbar"',(F?' aria-labelledby="'+N+'_label"':""),' role="toolbar">');
F&&L.push('<span id="',N,'_label" class="cke_voice_label">',F,"</span>");
L.push('<span class="cke_toolbar_start"></span>');
var H=Q.push(K)-1;
if(H>0){K.previous=Q[H-1];
K.previous.next=K
}}if(W){if(!V){L.push('<span class="cke_toolgroup" role="presentation">');
V=1
}}else{if(V){L.push("</span>");
V=0
}}var J=X.render(D,L);
H=K.items.push(J)-1;
if(H>0){J.previous=K.items[H-1];
J.previous.next=J
}J.toolbar=K;
J.onkey=C;
J.onfocus=function(){if(!D.toolbox.focusCommandExecuted){D.focus()
}}
}}if(V){L.push("</span>");
V=0
}if(K){L.push('<span class="cke_toolbar_end"></span></span>')
}}L.push("</div>");
if(D.config.toolbarCanCollapse){var Z=CKEDITOR.tools.addFunction(function(){D.execCommand("toolbarCollapse")
});
D.on("destroy",function(){CKEDITOR.tools.removeFunction(Z)
});
var G=CKEDITOR.tools.getNextId();
D.addCommand("toolbarCollapse",{readOnly:1,exec:function(d){var f=CKEDITOR.document.getById(G),e=f.getPrevious(),b=d.getThemeSpace("contents"),g=e.getParent(),h=parseInt(b.$.style.height,10),a=g.$.offsetHeight,c=!e.isVisible();
if(!c){e.hide();
f.addClass("cke_toolbox_collapser_min");
f.setAttribute("title",d.lang.toolbarExpand)
}else{e.show();
f.removeClass("cke_toolbox_collapser_min");
f.setAttribute("title",d.lang.toolbarCollapse)
}f.getFirst().setText(c?"\u25B2":"\u25C0");
var i=g.$.offsetHeight-a;
b.setStyle("height",(h-i)+"px");
d.fire("resize")
},modes:{wysiwyg:1,source:1}});
L.push('<a title="'+(R?D.lang.toolbarCollapse:D.lang.toolbarExpand)+'" id="'+G+'" tabIndex="-1" class="cke_toolbox_collapser');
if(!R){L.push(" cke_toolbox_collapser_min")
}L.push('" onclick="CKEDITOR.tools.callFunction('+Z+')">',"<span>&#9650;</span>","</a>")
}S.data.html+=L.join("")
}});
D.on("destroy",function(){var J,H=0,I,G,F;
J=this.toolbox.toolbars;
for(;
H<J.length;
H++){G=J[H].items;
for(I=0;
I<G.length;
I++){F=G[I];
if(F.clickFn){CKEDITOR.tools.removeFunction(F.clickFn)
}if(F.keyDownFn){CKEDITOR.tools.removeFunction(F.keyDownFn)
}}}});
D.addCommand("toolbarFocus",A.toolbarFocus);
D.ui.add("-",CKEDITOR.UI_SEPARATOR,{});
D.ui.addHandler(CKEDITOR.UI_SEPARATOR,{create:function(){return{render:function(G,F){F.push('<span class="cke_separator" role="separator"></span>');
return{}
}}
}})
}})
})();
CKEDITOR.UI_SEPARATOR="separator";
CKEDITOR.config.toolbarLocation="top";
CKEDITOR.config.toolbar_Basic=[["Bold","Italic","-","NumberedList","BulletedList","-","Link","Unlink","-","About"]];
CKEDITOR.config.toolbar_Full=[{name:"document",items:["Source","-","Save","NewPage","DocProps","Preview","Print","-","Templates"]},{name:"clipboard",items:["Cut","Copy","Paste","PasteText","PasteFromWord","-","Undo","Redo"]},{name:"editing",items:["Find","Replace","-","SelectAll","-","SpellChecker","Scayt"]},{name:"forms",items:["Form","Checkbox","Radio","TextField","Textarea","Select","Button","ImageButton","HiddenField"]},"/",{name:"basicstyles",items:["Bold","Italic","Underline","Strike","Subscript","Superscript","-","RemoveFormat"]},{name:"paragraph",items:["NumberedList","BulletedList","-","Outdent","Indent","-","Blockquote","CreateDiv","-","JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock","-","BidiLtr","BidiRtl"]},{name:"links",items:["Link","Unlink","Anchor"]},{name:"insert",items:["Image","Flash","Table","HorizontalRule","Smiley","SpecialChar","PageBreak","Iframe"]},"/",{name:"styles",items:["Styles","Format","Font","FontSize"]},{name:"colors",items:["TextColor","BGColor"]},{name:"tools",items:["Maximize","ShowBlocks","-","About"]}];
CKEDITOR.config.toolbar="Full";
CKEDITOR.config.toolbarCanCollapse=true;