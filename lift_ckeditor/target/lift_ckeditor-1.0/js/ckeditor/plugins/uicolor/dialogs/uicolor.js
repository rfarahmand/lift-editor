;
CKEDITOR.dialog.add("uicolor",function(I){var H,G,F,E=I.getUiColor(),D="cke_uicolor_picker"+CKEDITOR.tools.getNextNumber();
function C(J){if(/^#/.test(J)){J=window.YAHOO.util.Color.hex2rgb(J.substr(1))
}G.setValue(J,true);
G.refresh(D)
}function B(K,J){if(J||H._.contents.tab1.livePeview.getValue()){I.setUiColor(K)
}H._.contents.tab1.configBox.setValue('config.uiColor = "#'+G.get("hex")+'"')
}F={id:"yuiColorPicker",type:"html",html:"<div id='"+D+"' class='cke_uicolor_picker' style='width: 360px; height: 200px; position: relative;'></div>",onLoad:function(M){var L=CKEDITOR.getUrl("plugins/uicolor/yui/");
G=new window.YAHOO.widget.ColorPicker(D,{showhsvcontrols:true,showhexcontrols:true,images:{PICKER_THUMB:L+"assets/picker_thumb.png",HUE_THUMB:L+"assets/hue_thumb.png"}});
if(E){C(E)
}G.on("rgbChange",function(){H._.contents.tab1.predefined.setValue("");
B("#"+G.get("hex"))
});
var K=new CKEDITOR.dom.nodeList(G.getElementsByTagName("input"));
for(var J=0;
J<K.count();
J++){K.getItem(J).addClass("cke_dialog_ui_input_text")
}}};
var A=true;
return{title:I.lang.uicolor.title,minWidth:360,minHeight:320,onLoad:function(){H=this;
this.setupContent();
if(CKEDITOR.env.ie7Compat){H.parts.contents.setStyle("overflow","hidden")
}},contents:[{id:"tab1",label:"",title:"",expand:true,padding:0,elements:[F,{id:"tab1",type:"vbox",children:[{id:"livePeview",type:"checkbox",label:I.lang.uicolor.preview,"default":1,onLoad:function(){A=true
},onChange:function(){if(A){return 
}var K=this.getValue(),J=K?"#"+G.get("hex"):E;
B(J,true)
}},{type:"hbox",children:[{id:"predefined",type:"select","default":"",label:I.lang.uicolor.predefined,items:[[""],["Light blue","#9AB8F3"],["Sand","#D2B48C"],["Metallic","#949AAA"],["Purple","#C2A3C7"],["Olive","#A2C980"],["Happy green","#9BD446"],["Jezebel Blue","#14B8C4"],["Burn","#FF893A"],["Easy red","#FF6969"],["Pisces 3","#48B4F2"],["Aquarius 5","#487ED4"],["Absinthe","#A8CF76"],["Scrambled Egg","#C7A622"],["Hello monday","#8E8D80"],["Lovely sunshine","#F1E8B1"],["Recycled air","#B3C593"],["Down","#BCBCA4"],["Mark Twain","#CFE91D"],["Specks of dust","#D1B596"],["Lollipop","#F6CE23"]],onChange:function(){var J=this.getValue();
if(J){C(J);
B(J);
CKEDITOR.document.getById("predefinedPreview").setStyle("background",J)
}else{CKEDITOR.document.getById("predefinedPreview").setStyle("background","")
}},onShow:function(){var J=I.getUiColor();
if(J){this.setValue(J)
}}},{id:"predefinedPreview",type:"html",html:'<div id="cke_uicolor_preview" style="border: 1px solid black; padding: 3px; width: 30px;"><div id="predefinedPreview" style="width: 30px; height: 30px;">&nbsp;</div></div>'}]},{id:"configBox",type:"text",label:I.lang.uicolor.config,onShow:function(){var J=I.getUiColor();
if(J){this.setValue('config.uiColor = "'+J+'"')
}}}]}]}],buttons:[CKEDITOR.dialog.okButton]}
});