(function(){var B=/\.swf(?:$|\?)/i;
function A(E){var D=E.attributes;
return(D.type=="application/x-shockwave-flash"||B.test(D.src||""))
}function C(E,D){return E.createFakeParserElement(D,"cke_flash","flash",true)
}CKEDITOR.plugins.add("flash",{init:function(D){D.addCommand("flash",new CKEDITOR.dialogCommand("flash"));
D.ui.addButton("Flash",{label:D.lang.common.flash,command:"flash"});
CKEDITOR.dialog.add("flash",this.path+"dialogs/flash.js");
D.addCss("img.cke_flash{background-image: url("+CKEDITOR.getUrl(this.path+"images/placeholder.png")+");background-position: center center;background-repeat: no-repeat;border: 1px solid #a9a9a9;width: 80px;height: 80px;}");
if(D.addMenuItems){D.addMenuItems({flash:{label:D.lang.flash.properties,command:"flash",group:"flash"}})
}D.on("doubleclick",function(E){var F=E.data.element;
if(F.is("img")&&F.data("cke-real-element-type")=="flash"){E.data.dialog="flash"
}});
if(D.contextMenu){D.contextMenu.addListener(function(E,F){if(E&&E.is("img")&&!E.isReadOnly()&&E.data("cke-real-element-type")=="flash"){return{flash:CKEDITOR.TRISTATE_OFF}
}})
}},afterInit:function(E){var D=E.dataProcessor,F=D&&D.dataFilter;
if(F){F.addRules({elements:{"cke:object":function(I){var G=I.attributes,J=G.classid&&String(G.classid).toLowerCase();
if(!J&&!A(I)){for(var H=0;
H<I.children.length;
H++){if(I.children[H].name=="cke:embed"){if(!A(I.children[H])){return null
}return C(E,I)
}}return null
}return C(E,I)
},"cke:embed":function(G){if(!A(G)){return null
}return C(E,G)
}}},5)
}},requires:["fakeobjects"]})
})();
CKEDITOR.tools.extend(CKEDITOR.config,{flashEmbedTagOnly:false,flashAddEmbedTag:true,flashConvertOnEdit:false});