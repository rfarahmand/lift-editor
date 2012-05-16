;
CKEDITOR.dialog.add("paste",function(C){var D=C.lang.clipboard;
var B=CKEDITOR.env.isCustomDomain();
function A(H){var G=new CKEDITOR.dom.document(H.document),F=G.$;
var E=G.getById("cke_actscrpt");
E&&E.remove();
CKEDITOR.env.ie?F.body.contentEditable="true":F.designMode="on";
if(CKEDITOR.env.ie&&CKEDITOR.env.version<8){G.getWindow().on("blur",function(){F.selection.empty()
})
}G.on("keydown",function(K){var J=K.data,I=J.getKeystroke(),L;
switch(I){case 27:this.hide();
L=1;
break;
case 9:case CKEDITOR.SHIFT+9:this.changeFocus(1);
L=1
}L&&J.preventDefault()
},this);
C.fire("ariaWidget",new CKEDITOR.dom.element(H.frameElement))
}return{title:D.title,minWidth:CKEDITOR.env.ie&&CKEDITOR.env.quirks?370:350,minHeight:CKEDITOR.env.quirks?250:245,onShow:function(){this.parts.dialog.$.offsetHeight;
this.setupContent()
},onHide:function(){if(CKEDITOR.env.ie){this.getParentEditor().document.getBody().$.contentEditable="true"
}},onLoad:function(){if((CKEDITOR.env.ie7Compat||CKEDITOR.env.ie6Compat)&&C.lang.dir=="rtl"){this.parts.contents.setStyle("overflow","hidden")
}},onOk:function(){this.commitContent()
},contents:[{id:"general",label:C.lang.common.generalTab,elements:[{type:"html",id:"securityMsg",html:'<div style="white-space:normal;width:340px;">'+D.securityMsg+"</div>"},{type:"html",id:"pasteMsg",html:'<div style="white-space:normal;width:340px;">'+D.pasteMsg+"</div>"},{type:"html",id:"editing_area",style:"width: 100%; height: 100%;",html:"",focus:function(){var E=this.getInputElement().$.contentWindow;
setTimeout(function(){E.focus()
},500)
},setup:function(){var H=this.getDialog();
var E='<html dir="'+C.config.contentsLangDirection+'" lang="'+(C.config.contentsLanguage||C.langCode)+'"><head><style>body { margin: 3px; height: 95%; } </style></head><body><script id="cke_actscrpt" type="text/javascript">window.parent.CKEDITOR.tools.callFunction( '+CKEDITOR.tools.addFunction(A,H)+", this );<\/script></body></html>";
var J=CKEDITOR.env.air?"javascript:void(0)":B?"javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())\"":"";
var I=CKEDITOR.dom.element.createFromHtml('<iframe class="cke_pasteframe" frameborder="0"  allowTransparency="true" src="'+J+'" role="region" aria-label="'+D.pasteArea+'" aria-describedby="'+H.getContentElement("general","pasteMsg").domId+'" aria-multiple="true"></iframe>');
I.on("load",function(L){L.removeListener();
var K=I.getFrameDocument();
K.write(E);
if(CKEDITOR.env.air){A.call(this,K.getWindow().$)
}},H);
I.setCustomData("dialog",H);
var F=this.getElement();
F.setHtml("");
F.append(I);
if(CKEDITOR.env.ie){var G=CKEDITOR.dom.element.createFromHtml('<span tabindex="-1" style="position:absolute;" role="presentation"></span>');
G.on("focus",function(){I.$.contentWindow.focus()
});
F.append(G);
this.focus=function(){G.focus();
this.fire("focus")
}
}this.getInputElement=function(){return I
};
if(CKEDITOR.env.ie){F.setStyle("display","block");
F.setStyle("height",(I.$.offsetHeight+2)+"px")
}},commit:function(J){var F=this.getElement(),I=this.getDialog().getParentEditor(),E=this.getInputElement().getFrameDocument().getBody(),H=E.getBogus(),G;
H&&H.remove();
G=E.getHtml();
setTimeout(function(){I.fire("paste",{html:G})
},0)
}}]}]}
});