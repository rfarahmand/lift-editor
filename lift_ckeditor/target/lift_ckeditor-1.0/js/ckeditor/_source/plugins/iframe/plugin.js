(function(){CKEDITOR.plugins.add("iframe",{requires:["dialog","fakeobjects"],init:function(A){var B="iframe",C=A.lang.iframe;
CKEDITOR.dialog.add(B,this.path+"dialogs/iframe.js");
A.addCommand(B,new CKEDITOR.dialogCommand(B));
A.addCss("img.cke_iframe{background-image: url("+CKEDITOR.getUrl(this.path+"images/placeholder.png")+");background-position: center center;background-repeat: no-repeat;border: 1px solid #a9a9a9;width: 80px;height: 80px;}");
A.ui.addButton("Iframe",{label:C.toolbar,command:B});
A.on("doubleclick",function(D){var E=D.data.element;
if(E.is("img")&&E.data("cke-real-element-type")=="iframe"){D.data.dialog="iframe"
}});
if(A.addMenuItems){A.addMenuItems({iframe:{label:C.title,command:"iframe",group:"image"}})
}if(A.contextMenu){A.contextMenu.addListener(function(D,E){if(D&&D.is("img")&&D.data("cke-real-element-type")=="iframe"){return{iframe:CKEDITOR.TRISTATE_OFF}
}})
}},afterInit:function(B){var A=B.dataProcessor,C=A&&A.dataFilter;
if(C){C.addRules({elements:{iframe:function(D){return B.createFakeParserElement(D,"cke_iframe","iframe",true)
}}})
}}})
})();