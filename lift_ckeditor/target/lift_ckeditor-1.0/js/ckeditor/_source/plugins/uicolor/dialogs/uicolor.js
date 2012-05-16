;
CKEDITOR.dialog.add("uicolor",function(D){var F,E,I,G=D.getUiColor(),C="cke_uicolor_picker"+CKEDITOR.tools.getNextNumber();
function A(J){if(/^#/.test(J)){J=window.YAHOO.util.Color.hex2rgb(J.substr(1))
}E.setValue(J,true);
E.refresh(C)
}function H(J,K){if(K||F._.contents.tab1.livePeview.getValue()){D.setUiColor(J)
}F._.contents.tab1.configBox.setValue('config.uiColor = "#'+E.get("hex")+'"')
}I={id:"yuiColorPicker",type:"html",html:"<div id='"+C+"' class='cke_uicolor_picker' style='width: 360px; height: 200px; position: relative;'></div>",onLoad:function(M){var K=CKEDITOR.getUrl("_source/plugins/uicolor/yui/");
E=new window.YAHOO.widget.ColorPicker(C,{showhsvcontrols:true,showhexcontrols:true,images:{PICKER_THUMB:K+"assets/picker_thumb.png",HUE_THUMB:K+"assets/hue_thumb.png"}});
if(G){A(G)
}E.on("rgbChange",function(){F._.contents.tab1.predefined.setValue("");
H("#"+E.get("hex"))
});
var J=new CKEDITOR.dom.nodeList(E.getElementsByTagName("input"));
for(var L=0;
L<J.count();
L++){J.getItem(L).addClass("cke_dialog_ui_input_text")
}}};
var B=true;
return{title:D.lang.uicolor.title,minWidth:360,minHeight:320,onLoad:function(){F=this;
this.setupContent();
if(CKEDITOR.env.ie7Compat){F.parts.contents.setStyle("overflow","hidden")
}},contents:[{id:"tab1",label:"",title:"",expand:true,padding:0,elements:[I,{id:"tab1",type:"vbox",children:[{id:"livePeview",type:"checkbox",label:D.lang.uicolor.preview,"default":1,onLoad:function(){B=true
},onChange:function(){if(B){return 
}var J=this.getValue(),K=J?"#"+E.get("hex"):G;
H(K,true)
}},{type:"hbox",children:[{id:"predefined",type:"select","default":"",label:D.lang.uicolor.predefined,items:[[""],["Light blue","#9AB8F3"],["Sand","#D2B48C"],["Metallic","#949AAA"],["Purple","#C2A3C7"],["Olive","#A2C980"],["Happy green","#9BD446"],["Jezebel Blue","#14B8C4"],["Burn","#FF893A"],["Easy red","#FF6969"],["Pisces 3","#48B4F2"],["Aquarius 5","#487ED4"],["Absinthe","#A8CF76"],["Scrambled Egg","#C7A622"],["Hello monday","#8E8D80"],["Lovely sunshine","#F1E8B1"],["Recycled air","#B3C593"],["Down","#BCBCA4"],["Mark Twain","#CFE91D"],["Specks of dust","#D1B596"],["Lollipop","#F6CE23"]],onChange:function(){var J=this.getValue();
if(J){A(J);
H(J);
CKEDITOR.document.getById("predefinedPreview").setStyle("background",J)
}else{CKEDITOR.document.getById("predefinedPreview").setStyle("background","")
}},onShow:function(){var J=D.getUiColor();
if(J){this.setValue(J)
}}},{id:"predefinedPreview",type:"html",html:'<div id="cke_uicolor_preview" style="border: 1px solid black; padding: 3px; width: 30px;"><div id="predefinedPreview" style="width: 30px; height: 30px;">&nbsp;</div></div>'}]},{id:"configBox",type:"text",label:D.lang.uicolor.config,onShow:function(){var J=D.getUiColor();
if(J){this.setValue('config.uiColor = "'+J+'"')
}}}]}]}],buttons:[CKEDITOR.dialog.okButton]}
});