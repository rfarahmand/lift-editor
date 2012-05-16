(function(){function D(F,E){E=E===undefined||E;
var H;
if(E){H=F.getComputedStyle("text-align")
}else{while(!F.hasAttribute||!(F.hasAttribute("align")||F.getStyle("text-align"))){var G=F.getParent();
if(!G){break
}F=G
}H=F.getStyle("text-align")||F.getAttribute("align")||""
}H&&(H=H.replace(/(?:-(?:moz|webkit)-)?(?:start|auto)/i,""));
!H&&E&&(H=F.getComputedStyle("direction")=="rtl"?"right":"left");
return H
}function C(E){if(E.editor.readOnly){return 
}E.editor.getCommand(this.name).refresh(E.data.path)
}function B(G,E,H){this.editor=G;
this.name=E;
this.value=H;
var F=G.config.justifyClasses;
if(F){switch(H){case"left":this.cssClassName=F[0];
break;
case"center":this.cssClassName=F[1];
break;
case"right":this.cssClassName=F[2];
break;
case"justify":this.cssClassName=F[3];
break
}this.cssClassRegex=new RegExp("(?:^|\\s+)(?:"+F.join("|")+")(?=$|\\s)")
}}function A(J){var H=J.editor;
var E=new CKEDITOR.dom.range(H.document);
E.setStartBefore(J.data.node);
E.setEndAfter(J.data.node);
var K=new CKEDITOR.dom.walker(E),I;
while((I=K.next())){if(I.type==CKEDITOR.NODE_ELEMENT){if(!I.equals(J.data.node)&&I.getDirection()){E.setStartAfter(I);
K=new CKEDITOR.dom.walker(E);
continue
}var F=H.config.justifyClasses;
if(F){if(I.hasClass(F[0])){I.removeClass(F[0]);
I.addClass(F[2])
}else{if(I.hasClass(F[2])){I.removeClass(F[2]);
I.addClass(F[0])
}}}var G="text-align";
var L=I.getStyle(G);
if(L=="left"){I.setStyle(G,"right")
}else{if(L=="right"){I.setStyle(G,"left")
}}}}}B.prototype={exec:function(K){var N=K.getSelection(),M=K.config.enterMode;
if(!N){return 
}var F=N.createBookmarks(),E=N.getRanges(true);
var O=this.cssClassName,J,H;
var G=K.config.useComputedState;
G=G===undefined||G;
for(var I=E.length-1;
I>=0;
I--){J=E[I].createIterator();
J.enlargeBr=M!=CKEDITOR.ENTER_BR;
while((H=J.getNextParagraph(M==CKEDITOR.ENTER_P?"p":"div"))){H.removeAttribute("align");
H.removeStyle("text-align");
var L=O&&(H.$.className=CKEDITOR.tools.ltrim(H.$.className.replace(this.cssClassRegex,"")));
var P=(this.state==CKEDITOR.TRISTATE_OFF)&&(!G||(D(H,true)!=this.value));
if(O){if(P){H.addClass(O)
}else{if(!L){H.removeAttribute("class")
}}}else{if(P){H.setStyle("text-align",this.value)
}}}}K.focus();
K.forceNextSelectionCheck();
N.selectBookmarks(F)
},refresh:function(F){var E=F.block||F.blockLimit;
this.setState(E.getName()!="body"&&D(E,this.editor.config.useComputedState)==this.value?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF)
}};
CKEDITOR.plugins.add("justify",{init:function(H){var I=new B(H,"justifyleft","left"),E=new B(H,"justifycenter","center"),G=new B(H,"justifyright","right"),F=new B(H,"justifyblock","justify");
H.addCommand("justifyleft",I);
H.addCommand("justifycenter",E);
H.addCommand("justifyright",G);
H.addCommand("justifyblock",F);
H.ui.addButton("JustifyLeft",{label:H.lang.justify.left,command:"justifyleft"});
H.ui.addButton("JustifyCenter",{label:H.lang.justify.center,command:"justifycenter"});
H.ui.addButton("JustifyRight",{label:H.lang.justify.right,command:"justifyright"});
H.ui.addButton("JustifyBlock",{label:H.lang.justify.block,command:"justifyblock"});
H.on("selectionChange",CKEDITOR.tools.bind(C,I));
H.on("selectionChange",CKEDITOR.tools.bind(C,G));
H.on("selectionChange",CKEDITOR.tools.bind(C,E));
H.on("selectionChange",CKEDITOR.tools.bind(C,F));
H.on("dirChanged",A)
},requires:["domiterator"]})
})();