;
CKEDITOR.dialog.add("paste",function(B){var A=B.lang.clipboard,D=CKEDITOR.env.isCustomDomain();
function C(H){var G=new CKEDITOR.dom.document(H.document),F=G.$,E=G.getById("cke_actscrpt");
E&&E.remove();
CKEDITOR.env.ie?F.body.contentEditable="true":F.designMode="on";
if(CKEDITOR.env.ie&&CKEDITOR.env.version<8){G.getWindow().on("blur",function(){F.selection.empty()
})
}G.on("keydown",function(L){var K=L.data,J=K.getKeystroke(),I;
switch(J){case 27:this.hide();
I=1;
break;
case 9:case CKEDITOR.SHIFT+9:this.changeFocus(1);
I=1
}I&&K.preventDefault()
},this);
B.fire("ariaWidget",new CKEDITOR.dom.element(H.frameElement))
}return{title:A.title,minWidth:CKEDITOR.env.ie&&CKEDITOR.env.quirks?370:350,minHeight:CKEDITOR.env.quirks?250:245,onShow:function(){this.parts.dialog.$.offsetHeight;
this.setupContent()
},onHide:function(){if(CKEDITOR.env.ie){this.getParentEditor().document.getBody().$.contentEditable="true"
}},onLoad:function(){if((CKEDITOR.env.ie7Compat||CKEDITOR.env.ie6Compat)&&B.lang.dir=="rtl"){this.parts.contents.setStyle("overflow","hidden")
}},onOk:function(){this.commitContent()
},contents:[{id:"general",label:B.lang.common.generalTab,elements:[{type:"html",id:"securityMsg",html:'<div style="white-space:normal;width:340px;">'+A.securityMsg+"</div>"},{type:"html",id:"pasteMsg",html:'<div style="white-space:normal;width:340px;">'+A.pasteMsg+"</div>"},{type:"html",id:"editing_area",style:"width: 100%; height: 100%;",html:"",focus:function(){var E=this.getInputElement().$.contentWindow;
setTimeout(function(){E.focus()
},500)
},setup:function(){var J=this.getDialog(),I='<html dir="'+B.config.contentsLangDirection+'" lang="'+(B.config.contentsLanguage||B.langCode)+'"><head><style>body { margin: 3px; height: 95%; } </style></head><body><script id="cke_actscrpt" type="text/javascript">window.parent.CKEDITOR.tools.callFunction( '+CKEDITOR.tools.addFunction(C,J)+", this );<\/script></body></html>",H=CKEDITOR.env.air?"javascript:void(0)":D?"javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())\"":"",G=CKEDITOR.dom.element.createFromHtml('<iframe class="cke_pasteframe" frameborder="0"  allowTransparency="true" src="'+H+'" role="region" aria-label="'+A.pasteArea+'" aria-describedby="'+J.getContentElement("general","pasteMsg").domId+'" aria-multiple="true"></iframe>');
G.on("load",function(L){L.removeListener();
var K=G.getFrameDocument();
K.write(I);
if(CKEDITOR.env.air){C.call(this,K.getWindow().$)
}},J);
G.setCustomData("dialog",J);
var F=this.getElement();
F.setHtml("");
F.append(G);
if(CKEDITOR.env.ie){var E=CKEDITOR.dom.element.createFromHtml('<span tabindex="-1" style="position:absolute;" role="presentation"></span>');
E.on("focus",function(){G.$.contentWindow.focus()
});
F.append(E);
this.focus=function(){E.focus();
this.fire("focus")
}
}this.getInputElement=function(){return G
};
if(CKEDITOR.env.ie){F.setStyle("display","block");
F.setStyle("height",G.$.offsetHeight+2+"px")
}},commit:function(J){var I=this.getElement(),H=this.getDialog().getParentEditor(),G=this.getInputElement().getFrameDocument().getBody(),F=G.getBogus(),E;
F&&F.remove();
E=G.getHtml();
setTimeout(function(){H.fire("paste",{html:E})
},0)
}}]}]}
});