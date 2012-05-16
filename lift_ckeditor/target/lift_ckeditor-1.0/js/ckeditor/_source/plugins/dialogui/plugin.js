;
CKEDITOR.plugins.add("dialogui");
(function(){var G=function(K){this._||(this._={});
this._["default"]=this._.initValue=K["default"]||"";
this._.required=K.required||false;
var I=[this._];
for(var J=1;
J<arguments.length;
J++){I.push(arguments[J])
}I.push(true);
CKEDITOR.tools.extend.apply(CKEDITOR.tools,I);
return this._
},A={build:function(J,K,I){return new CKEDITOR.ui.dialog.textInput(J,K,I)
}},D={build:function(J,K,I){return new CKEDITOR.ui.dialog[K.type](J,K,I)
}},F={build:function(O,I,L){var K=I.children,J,Q=[],P=[];
for(var N=0;
(N<K.length&&(J=K[N]));
N++){var M=[];
Q.push(M);
P.push(CKEDITOR.dialog._.uiElementBuilders[J.type].build(O,J,M))
}return new CKEDITOR.ui.dialog[I.type](O,P,Q,L,I)
}},C={isChanged:function(){return this.getValue()!=this.getInitValue()
},reset:function(I){this.setValue(this.getInitValue(),I)
},setInitValue:function(){this._.initValue=this.getValue()
},resetInitValue:function(){this._.initValue=this._["default"]
},getInitValue:function(){return this._.initValue
}},B=CKEDITOR.tools.extend({},CKEDITOR.ui.dialog.uiElement.prototype.eventProcessors,{onChange:function(I,J){if(!this._.domOnChangeRegistered){I.on("load",function(){this.getInputElement().on("change",function(){if(!I.parts.dialog.isVisible()){return 
}this.fire("change",{value:this.getValue()})
},this)
},this);
this._.domOnChangeRegistered=true
}this.on("change",J)
}},true),H=/^on([A-Z]\w+)/,E=function(J){for(var I in J){if(H.test(I)||I=="title"||I=="type"){delete J[I]
}}return J
};
CKEDITOR.tools.extend(CKEDITOR.ui.dialog,{labeledElement:function(K,O,L,M){if(arguments.length<4){return 
}var I=G.call(this,O);
I.labelId=CKEDITOR.tools.getNextId()+"_label";
var J=this._.children=[];
var N=function(){var R=[],P=O.required?" cke_required":"";
if(O.labelLayout!="horizontal"){R.push('<label class="cke_dialog_ui_labeled_label'+P+'" ',' id="'+I.labelId+'"',' for="'+I.inputId+'"',(O.labelStyle?' style="'+O.labelStyle+'"':"")+">",O.label,"</label>",'<div class="cke_dialog_ui_labeled_content"'+(O.controlStyle?' style="'+O.controlStyle+'"':"")+' role="presentation">',M.call(this,K,O),"</div>")
}else{var Q={type:"hbox",widths:O.widths,padding:0,children:[{type:"html",html:'<label class="cke_dialog_ui_labeled_label'+P+'" id="'+I.labelId+'" for="'+I.inputId+'"'+(O.labelStyle?' style="'+O.labelStyle+'"':"")+">"+CKEDITOR.tools.htmlEncode(O.label)+"</span>"},{type:"html",html:'<span class="cke_dialog_ui_labeled_content"'+(O.controlStyle?' style="'+O.controlStyle+'"':"")+">"+M.call(this,K,O)+"</span>"}]};
CKEDITOR.dialog._.uiElementBuilders.hbox.build(K,Q,R)
}return R.join("")
};
CKEDITOR.ui.dialog.uiElement.call(this,K,O,L,"div",null,{role:"presentation"},N)
},textInput:function(N,I,J){if(arguments.length<3){return 
}G.call(this,I);
var K=this._.inputId=CKEDITOR.tools.getNextId()+"_textInput",L={"class":"cke_dialog_ui_input_"+I.type,id:K,type:I.type},M;
if(I.validate){this.validate=I.validate
}if(I.maxLength){L.maxlength=I.maxLength
}if(I.size){L.size=I.size
}if(I.inputStyle){L.style=I.inputStyle
}var O=this,Q=false;
N.on("load",function(){O.getInputElement().on("keydown",function(R){if(R.data.getKeystroke()==13){Q=true
}});
O.getInputElement().on("keyup",function(R){if(R.data.getKeystroke()==13&&Q){N.getButton("ok")&&setTimeout(function(){N.getButton("ok").click()
},0);
Q=false
}},null,null,1000)
});
var P=function(){var S=['<div class="cke_dialog_ui_input_',I.type,'" role="presentation"'];
if(I.width){S.push('style="width:'+I.width+'" ')
}S.push("><input ");
L["aria-labelledby"]=this._.labelId;
this._.required&&(L["aria-required"]=this._.required);
for(var R in L){S.push(R+'="'+L[R]+'" ')
}S.push(" /></div>");
return S.join("")
};
CKEDITOR.ui.dialog.labeledElement.call(this,N,I,J,P)
},textarea:function(J,O,M){if(arguments.length<3){return 
}G.call(this,O);
var K=this,L=this._.inputId=CKEDITOR.tools.getNextId()+"_textarea",I={};
if(O.validate){this.validate=O.validate
}I.rows=O.rows||5;
I.cols=O.cols||20;
if(typeof O.inputStyle!="undefined"){I.style=O.inputStyle
}var N=function(){I["aria-labelledby"]=this._.labelId;
this._.required&&(I["aria-required"]=this._.required);
var Q=['<div class="cke_dialog_ui_input_textarea" role="presentation"><textarea class="cke_dialog_ui_input_textarea" id="',L,'" '];
for(var P in I){Q.push(P+'="'+CKEDITOR.tools.htmlEncode(I[P])+'" ')
}Q.push(">",CKEDITOR.tools.htmlEncode(K._["default"]),"</textarea></div>");
return Q.join("")
};
CKEDITOR.ui.dialog.labeledElement.call(this,J,O,M,N)
},checkbox:function(J,M,K){if(arguments.length<3){return 
}var I=G.call(this,M,{"default":!!M["default"]});
if(M.validate){this.validate=M.validate
}var L=function(){var P=CKEDITOR.tools.extend({},M,{id:M.id?M.id+"_checkbox":CKEDITOR.tools.getNextId()+"_checkbox"},true),O=[];
var Q=CKEDITOR.tools.getNextId()+"_label";
var N={"class":"cke_dialog_ui_checkbox_input",type:"checkbox","aria-labelledby":Q};
E(P);
if(M["default"]){N.checked="checked"
}if(typeof P.inputStyle!="undefined"){P.style=P.inputStyle
}I.checkbox=new CKEDITOR.ui.dialog.uiElement(J,P,O,"input",null,N);
O.push(' <label id="',Q,'" for="',N.id,'"'+(M.labelStyle?' style="'+M.labelStyle+'"':"")+">",CKEDITOR.tools.htmlEncode(M.label),"</label>");
return O.join("")
};
CKEDITOR.ui.dialog.uiElement.call(this,J,M,K,"span",null,null,L)
},radio:function(J,N,L){if(arguments.length<3){return 
}G.call(this,N);
if(!this._["default"]){this._["default"]=this._.initValue=N.items[0][1]
}if(N.validate){this.validate=N.valdiate
}var I=[],K=this;
var M=function(){var Z=[],S=[],Y={"class":"cke_dialog_ui_radio_item","aria-labelledby":this._.labelId},Q=N.id?N.id+"_radio":CKEDITOR.tools.getNextId()+"_radio";
for(var R=0;
R<N.items.length;
R++){var a=N.items[R],V=a[2]!==undefined?a[2]:a[0],X=a[1]!==undefined?a[1]:a[0],W=CKEDITOR.tools.getNextId()+"_radio_input",P=W+"_label",T=CKEDITOR.tools.extend({},N,{id:W,title:null,type:null},true),O=CKEDITOR.tools.extend({},T,{title:V},true),U={type:"radio","class":"cke_dialog_ui_radio_input",name:Q,value:X,"aria-labelledby":P},b=[];
if(K._["default"]==X){U.checked="checked"
}E(T);
E(O);
if(typeof T.inputStyle!="undefined"){T.style=T.inputStyle
}I.push(new CKEDITOR.ui.dialog.uiElement(J,T,b,"input",null,U));
b.push(" ");
new CKEDITOR.ui.dialog.uiElement(J,O,b,"label",null,{id:P,"for":U.id},a[0]);
Z.push(b.join(""))
}new CKEDITOR.ui.dialog.hbox(J,I,Z,S);
return S.join("")
};
CKEDITOR.ui.dialog.labeledElement.call(this,J,N,L,M);
this._.children=I
},button:function(I,N,L){if(!arguments.length){return 
}if(typeof N=="function"){N=N(I.getParentEditor())
}G.call(this,N,{disabled:N.disabled||false});
CKEDITOR.event.implementOn(this);
var J=this;
I.on("load",function(P){var O=this.getElement();
(function(){O.on("click",function(Q){J.fire("click",{dialog:J.getDialog()});
Q.data.preventDefault()
});
O.on("keydown",function(Q){if(Q.data.getKeystroke() in {32:1}){J.click();
Q.data.preventDefault()
}})
})();
O.unselectable()
},this);
var M=CKEDITOR.tools.extend({},N);
delete M.style;
var K=CKEDITOR.tools.getNextId()+"_label";
CKEDITOR.ui.dialog.uiElement.call(this,I,M,L,"a",null,{style:N.style,href:"javascript:void(0)",title:N.label,hidefocus:"true","class":N["class"],role:"button","aria-labelledby":K},'<span id="'+K+'" class="cke_dialog_ui_button">'+CKEDITOR.tools.htmlEncode(N.label)+"</span>")
},select:function(J,M,K){if(arguments.length<3){return 
}var I=G.call(this,M);
if(M.validate){this.validate=M.validate
}I.inputId=CKEDITOR.tools.getNextId()+"_select";
var L=function(){var Q=CKEDITOR.tools.extend({},M,{id:M.id?M.id+"_select":CKEDITOR.tools.getNextId()+"_select"},true),P=[],S=[],N={id:I.inputId,"class":"cke_dialog_ui_input_select","aria-labelledby":this._.labelId};
if(M.size!=undefined){N.size=M.size
}if(M.multiple!=undefined){N.multiple=M.multiple
}E(Q);
for(var O=0,R;
O<M.items.length&&(R=M.items[O]);
O++){S.push('<option value="',CKEDITOR.tools.htmlEncode(R[1]!==undefined?R[1]:R[0]).replace(/"/g,"&quot;"),'" /> ',CKEDITOR.tools.htmlEncode(R[0]))
}if(typeof Q.inputStyle!="undefined"){Q.style=Q.inputStyle
}I.select=new CKEDITOR.ui.dialog.uiElement(J,Q,P,"select",null,N,S.join(""));
return P.join("")
};
CKEDITOR.ui.dialog.labeledElement.call(this,J,M,K,L)
},file:function(J,M,K){if(arguments.length<3){return 
}if(M["default"]===undefined){M["default"]=""
}var I=CKEDITOR.tools.extend(G.call(this,M),{definition:M,buttons:[]});
if(M.validate){this.validate=M.validate
}var L=function(){I.frameId=CKEDITOR.tools.getNextId()+"_fileInput";
var N=CKEDITOR.env.isCustomDomain();
var O=['<iframe frameborder="0" allowtransparency="0" class="cke_dialog_ui_input_file" id="',I.frameId,'" title="',M.label,'" src="javascript:void('];
O.push(N?"(function(){document.open();document.domain='"+document.domain+"';document.close();})()":"0");
O.push(')"></iframe>');
return O.join("")
};
J.on("load",function(){var O=CKEDITOR.document.getById(I.frameId),N=O.getParent();
N.addClass("cke_dialog_ui_input_file")
});
CKEDITOR.ui.dialog.labeledElement.call(this,J,M,K,L)
},fileButton:function(K,O,M){if(arguments.length<3){return 
}var I=G.call(this,O),L=this;
if(O.validate){this.validate=O.validate
}var J=CKEDITOR.tools.extend({},O);
var N=J.onClick;
J.className=(J.className?J.className+" ":"")+"cke_dialog_ui_button";
J.onClick=function(P){var Q=O["for"];
if(!N||N.call(this,P)!==false){K.getContentElement(Q[0],Q[1]).submit();
this.disable()
}};
K.on("load",function(){K.getContentElement(O["for"][0],O["for"][1])._.buttons.push(L)
});
CKEDITOR.ui.dialog.button.call(this,K,J,M)
},html:(function(){var K=/^\s*<[\w:]+\s+([^>]*)?>/,J=/^(\s*<[\w:]+(?:\s+[^>]*)?)((?:.|\r|\n)+)$/,I=/\/$/;
return function(S,L,M){if(arguments.length<3){return 
}var O=[],U,P=L.html,Q,T;
if(P.charAt(0)!="<"){P="<span>"+P+"</span>"
}var V=L.focus;
if(V){var N=this.focus;
this.focus=function(){N.call(this);
typeof V=="function"&&V.call(this);
this.fire("focus")
};
if(L.isFocusable){var R=this.isFocusable;
this.isFocusable=R
}this.keyboardFocusable=true
}CKEDITOR.ui.dialog.uiElement.call(this,S,L,O,"span",null,null,"");
U=O.join("");
Q=U.match(K);
T=P.match(J)||["","",""];
if(I.test(T[1])){T[1]=T[1].slice(0,-1);
T[2]="/"+T[2]
}M.push([T[1]," ",Q[1]||"",T[2]].join(""))
}
})(),fieldset:function(I,O,N,K,M){var J=M.label;
var L=function(){var Q=[];
J&&Q.push("<legend"+(M.labelStyle?' style="'+M.labelStyle+'"':"")+">"+J+"</legend>");
for(var P=0;
P<N.length;
P++){Q.push(N[P])
}return Q.join("")
};
this._={children:O};
CKEDITOR.ui.dialog.uiElement.call(this,I,M,K,"fieldset",null,null,L)
}},true);
CKEDITOR.ui.dialog.html.prototype=new CKEDITOR.ui.dialog.uiElement;
CKEDITOR.ui.dialog.labeledElement.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{setLabel:function(I){var J=CKEDITOR.document.getById(this._.labelId);
if(J.getChildCount()<1){(new CKEDITOR.dom.text(I,CKEDITOR.document)).appendTo(J)
}else{J.getChild(0).$.nodeValue=I
}return this
},getLabel:function(){var I=CKEDITOR.document.getById(this._.labelId);
if(!I||I.getChildCount()<1){return""
}else{return I.getChild(0).getText()
}},eventProcessors:B},true);
CKEDITOR.ui.dialog.button.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{click:function(){if(!this._.disabled){return this.fire("click",{dialog:this._.dialog})
}this.getElement().$.blur();
return false
},enable:function(){this._.disabled=false;
var I=this.getElement();
I&&I.removeClass("cke_disabled")
},disable:function(){this._.disabled=true;
this.getElement().addClass("cke_disabled")
},isVisible:function(){return this.getElement().getFirst().isVisible()
},isEnabled:function(){return !this._.disabled
},eventProcessors:CKEDITOR.tools.extend({},CKEDITOR.ui.dialog.uiElement.prototype.eventProcessors,{onClick:function(I,J){this.on("click",function(){this.getElement().focus();
J.apply(this,arguments)
})
}},true),accessKeyUp:function(){this.click()
},accessKeyDown:function(){this.focus()
},keyboardFocusable:true},true);
CKEDITOR.ui.dialog.textInput.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement,{getInputElement:function(){return CKEDITOR.document.getById(this._.inputId)
},focus:function(){var I=this.selectParentTab();
setTimeout(function(){var J=I.getInputElement();
J&&J.$.focus()
},0)
},select:function(){var I=this.selectParentTab();
setTimeout(function(){var J=I.getInputElement();
if(J){J.$.focus();
J.$.select()
}},0)
},accessKeyUp:function(){this.select()
},setValue:function(I){!I&&(I="");
return CKEDITOR.ui.dialog.uiElement.prototype.setValue.apply(this,arguments)
},keyboardFocusable:true},C,true);
CKEDITOR.ui.dialog.textarea.prototype=new CKEDITOR.ui.dialog.textInput();
CKEDITOR.ui.dialog.select.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement,{getInputElement:function(){return this._.select.getElement()
},add:function(K,M,J){var L=new CKEDITOR.dom.element("option",this.getDialog().getParentEditor().document),I=this.getInputElement().$;
L.$.text=K;
L.$.value=(M===undefined||M===null)?K:M;
if(J===undefined||J===null){if(CKEDITOR.env.ie){I.add(L.$)
}else{I.add(L.$,null)
}}else{I.add(L.$,J)
}return this
},remove:function(J){var I=this.getInputElement().$;
I.remove(J);
return this
},clear:function(){var I=this.getInputElement().$;
while(I.length>0){I.remove(0)
}return this
},keyboardFocusable:true},C,true);
CKEDITOR.ui.dialog.checkbox.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{getInputElement:function(){return this._.checkbox.getElement()
},setValue:function(J,I){this.getInputElement().$.checked=J;
!I&&this.fire("change",{value:J})
},getValue:function(){return this.getInputElement().$.checked
},accessKeyUp:function(){this.setValue(!this.getValue())
},eventProcessors:{onChange:function(I,J){if(!CKEDITOR.env.ie){return B.onChange.apply(this,arguments)
}else{I.on("load",function(){var K=this._.checkbox.getElement();
K.on("propertychange",function(L){L=L.data.$;
if(L.propertyName=="checked"){this.fire("change",{value:K.$.checked})
}},this)
},this);
this.on("change",J)
}return null
}},keyboardFocusable:true},C,true);
CKEDITOR.ui.dialog.radio.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{setValue:function(M,L){var J=this._.children,K;
for(var I=0;
(I<J.length)&&(K=J[I]);
I++){K.getElement().$.checked=(K.getValue()==M)
}!L&&this.fire("change",{value:M})
},getValue:function(){var J=this._.children;
for(var I=0;
I<J.length;
I++){if(J[I].getElement().$.checked){return J[I].getValue()
}}return null
},accessKeyUp:function(){var J=this._.children,I;
for(I=0;
I<J.length;
I++){if(J[I].getElement().$.checked){J[I].getElement().focus();
return 
}}J[0].getElement().focus()
},eventProcessors:{onChange:function(I,J){if(!CKEDITOR.env.ie){return B.onChange.apply(this,arguments)
}else{I.on("load",function(){var M=this._.children,N=this;
for(var L=0;
L<M.length;
L++){var K=M[L].getElement();
K.on("propertychange",function(O){O=O.data.$;
if(O.propertyName=="checked"&&this.$.checked){N.fire("change",{value:this.getAttribute("value")})
}})
}},this);
this.on("change",J)
}return null
}},keyboardFocusable:true},C,true);
CKEDITOR.ui.dialog.file.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement,C,{getInputElement:function(){var I=CKEDITOR.document.getById(this._.frameId).getFrameDocument();
return I.$.forms.length>0?new CKEDITOR.dom.element(I.$.forms[0].elements[0]):this.getElement()
},submit:function(){this.getInputElement().getParent().$.submit();
return this
},getAction:function(){return this.getInputElement().getParent().$.action
},registerEvents:function(K){var L=/^on([A-Z]\w+)/,I;
var M=function(O,P,N,Q){O.on("formLoaded",function(){O.getInputElement().on(N,Q,O)
})
};
for(var J in K){if(!(I=J.match(L))){continue
}if(this.eventProcessors[J]){this.eventProcessors[J].call(this,this._.dialog,K[J])
}else{M(this,this._.dialog,I[1].toLowerCase(),K[J])
}}return this
},reset:function(){var R=this._,N=CKEDITOR.document.getById(R.frameId),P=N.getFrameDocument(),I=R.definition,Q=R.buttons,L=this.formLoadedNumber,M=this.formUnloadNumber,J=R.dialog._.editor.lang.dir,O=R.dialog._.editor.langCode;
if(!L){L=this.formLoadedNumber=CKEDITOR.tools.addFunction(function(){this.fire("formLoaded")
},this);
M=this.formUnloadNumber=CKEDITOR.tools.addFunction(function(){this.getInputElement().clearCustomData()
},this);
this.getDialog()._.editor.on("destroy",function(){CKEDITOR.tools.removeFunction(L);
CKEDITOR.tools.removeFunction(M)
})
}function K(){P.$.open();
if(CKEDITOR.env.isCustomDomain()){P.$.domain=document.domain
}var T="";
if(I.size){T=I.size-(CKEDITOR.env.ie?7:0)
}P.$.write(['<html dir="'+J+'" lang="'+O+'"><head><title></title></head><body style="margin: 0; overflow: hidden; background: transparent;">','<form enctype="multipart/form-data" method="POST" dir="'+J+'" lang="'+O+'" action="',CKEDITOR.tools.htmlEncode(I.action),'">','<input type="file" name="',CKEDITOR.tools.htmlEncode(I.id||"cke_upload"),'" size="',CKEDITOR.tools.htmlEncode(T>0?T:""),'" />',"</form>","</body></html>","<script>window.parent.CKEDITOR.tools.callFunction("+L+");","window.onbeforeunload = function() {window.parent.CKEDITOR.tools.callFunction("+M+")}<\/script>"].join(""));
P.$.close();
for(var S=0;
S<Q.length;
S++){Q[S].enable()
}}if(CKEDITOR.env.gecko){setTimeout(K,500)
}else{K()
}},getValue:function(){return this.getInputElement().$.value||""
},setInitValue:function(){this._.initValue=""
},eventProcessors:{onChange:function(I,J){if(!this._.domOnChangeRegistered){this.on("formLoaded",function(){this.getInputElement().on("change",function(){this.fire("change",{value:this.getValue()})
},this)
},this);
this._.domOnChangeRegistered=true
}this.on("change",J)
}},keyboardFocusable:true},true);
CKEDITOR.ui.dialog.fileButton.prototype=new CKEDITOR.ui.dialog.button;
CKEDITOR.ui.dialog.fieldset.prototype=CKEDITOR.tools.clone(CKEDITOR.ui.dialog.hbox.prototype);
CKEDITOR.dialog.addUIElement("text",A);
CKEDITOR.dialog.addUIElement("password",A);
CKEDITOR.dialog.addUIElement("textarea",D);
CKEDITOR.dialog.addUIElement("checkbox",D);
CKEDITOR.dialog.addUIElement("radio",D);
CKEDITOR.dialog.addUIElement("button",D);
CKEDITOR.dialog.addUIElement("select",D);
CKEDITOR.dialog.addUIElement("file",D);
CKEDITOR.dialog.addUIElement("fileButton",D);
CKEDITOR.dialog.addUIElement("html",D);
CKEDITOR.dialog.addUIElement("fieldset",F)
})();