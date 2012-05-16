;
CKEDITOR.plugins.add("forms",{init:function(B){var D=B.lang;
B.addCss("form{border: 1px dotted #FF0000;padding: 2px;}\n");
B.addCss("img.cke_hidden{background-image: url("+CKEDITOR.getUrl(this.path+"images/hiddenfield.gif")+");background-position: center center;background-repeat: no-repeat;border: 1px solid #a9a9a9;width: 16px !important;height: 16px !important;}");
var C=function(E,F,G){B.addCommand(F,new CKEDITOR.dialogCommand(F));
B.ui.addButton(E,{label:D.common[E.charAt(0).toLowerCase()+E.slice(1)],command:F});
CKEDITOR.dialog.add(F,G)
};
var A=this.path+"dialogs/";
C("Form","form",A+"form.js");
C("Checkbox","checkbox",A+"checkbox.js");
C("Radio","radio",A+"radio.js");
C("TextField","textfield",A+"textfield.js");
C("Textarea","textarea",A+"textarea.js");
C("Select","select",A+"select.js");
C("Button","button",A+"button.js");
C("ImageButton","imagebutton",CKEDITOR.plugins.getPath("image")+"dialogs/image.js");
C("HiddenField","hiddenfield",A+"hiddenfield.js");
if(B.addMenuItems){B.addMenuItems({form:{label:D.form.menu,command:"form",group:"form"},checkbox:{label:D.checkboxAndRadio.checkboxTitle,command:"checkbox",group:"checkbox"},radio:{label:D.checkboxAndRadio.radioTitle,command:"radio",group:"radio"},textfield:{label:D.textfield.title,command:"textfield",group:"textfield"},hiddenfield:{label:D.hidden.title,command:"hiddenfield",group:"hiddenfield"},imagebutton:{label:D.image.titleButton,command:"imagebutton",group:"imagebutton"},button:{label:D.button.title,command:"button",group:"button"},select:{label:D.select.title,command:"select",group:"select"},textarea:{label:D.textarea.title,command:"textarea",group:"textarea"}})
}if(B.contextMenu){B.contextMenu.addListener(function(E){if(E&&E.hasAscendant("form",true)&&!E.isReadOnly()){return{form:CKEDITOR.TRISTATE_OFF}
}});
B.contextMenu.addListener(function(F){if(F&&!F.isReadOnly()){var E=F.getName();
if(E=="select"){return{select:CKEDITOR.TRISTATE_OFF}
}if(E=="textarea"){return{textarea:CKEDITOR.TRISTATE_OFF}
}if(E=="input"){switch(F.getAttribute("type")){case"button":case"submit":case"reset":return{button:CKEDITOR.TRISTATE_OFF};
case"checkbox":return{checkbox:CKEDITOR.TRISTATE_OFF};
case"radio":return{radio:CKEDITOR.TRISTATE_OFF};
case"image":return{imagebutton:CKEDITOR.TRISTATE_OFF};
default:return{textfield:CKEDITOR.TRISTATE_OFF}
}}if(E=="img"&&F.data("cke-real-element-type")=="hiddenfield"){return{hiddenfield:CKEDITOR.TRISTATE_OFF}
}}})
}B.on("doubleclick",function(E){var F=E.data.element;
if(F.is("form")){E.data.dialog="form"
}else{if(F.is("select")){E.data.dialog="select"
}else{if(F.is("textarea")){E.data.dialog="textarea"
}else{if(F.is("img")&&F.data("cke-real-element-type")=="hiddenfield"){E.data.dialog="hiddenfield"
}else{if(F.is("input")){switch(F.getAttribute("type")){case"button":case"submit":case"reset":E.data.dialog="button";
break;
case"checkbox":E.data.dialog="checkbox";
break;
case"radio":E.data.dialog="radio";
break;
case"image":E.data.dialog="imagebutton";
break;
default:E.data.dialog="textfield";
break
}}}}}}})
},afterInit:function(B){var A=B.dataProcessor,D=A&&A.htmlFilter,C=A&&A.dataFilter;
if(CKEDITOR.env.ie){D&&D.addRules({elements:{input:function(E){var F=E.attributes,G=F.type;
if(!G){F.type="text"
}if(G=="checkbox"||G=="radio"){F.value=="on"&&delete F.value
}}}})
}if(C){C.addRules({elements:{input:function(E){if(E.attributes.type=="hidden"){return B.createFakeParserElement(E,"cke_hidden","hiddenfield")
}}}})
}},requires:["image","fakeobjects"]});
if(CKEDITOR.env.ie){CKEDITOR.dom.element.prototype.hasAttribute=CKEDITOR.tools.override(CKEDITOR.dom.element.prototype.hasAttribute,function(A){return function(B){var D=this.$.attributes.getNamedItem(B);
if(this.getName()=="input"){switch(B){case"class":return this.$.className.length>0;
case"checked":return !!this.$.checked;
case"value":var C=this.getAttribute("type");
return C=="checkbox"||C=="radio"?this.$.value!="on":this.$.value
}}return A.apply(this,arguments)
}
})
};