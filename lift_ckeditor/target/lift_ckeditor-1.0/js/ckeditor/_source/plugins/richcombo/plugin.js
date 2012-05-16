;
CKEDITOR.plugins.add("richcombo",{requires:["floatpanel","listblock","button"],beforeInit:function(A){A.ui.addHandler(CKEDITOR.UI_RICHCOMBO,CKEDITOR.ui.richCombo.handler)
}});
CKEDITOR.UI_RICHCOMBO="richcombo";
CKEDITOR.ui.richCombo=CKEDITOR.tools.createClass({$:function(A){CKEDITOR.tools.extend(this,A,{title:A.label,modes:{wysiwyg:1}});
var B=this.panel||{};
delete this.panel;
this.id=CKEDITOR.tools.getNextNumber();
this.document=(B&&B.parent&&B.parent.getDocument())||CKEDITOR.document;
B.className=(B.className||"")+" cke_rcombopanel";
B.block={multiSelect:B.multiSelect,attributes:B.attributes};
this._={panelDefinition:B,items:{},state:CKEDITOR.TRISTATE_OFF}
},statics:{handler:{create:function(A){return new CKEDITOR.ui.richCombo(A)
}}},proto:{renderHtml:function(B){var A=[];
this.render(B,A);
return A.join("")
},render:function(E,D){var F=CKEDITOR.env;
var C="cke_"+this.id;
var A=CKEDITOR.tools.addFunction(function(J){var K=this._;
if(K.state==CKEDITOR.TRISTATE_DISABLED){return 
}this.createPanel(E);
if(K.on){K.panel.hide();
return 
}this.commit();
var L=this.getValue();
if(L){K.list.mark(L)
}else{K.list.unmarkAll()
}K.panel.showBlock(this.id,new CKEDITOR.dom.element(J),4)
},this);
var H={id:C,combo:this,focus:function(){var J=CKEDITOR.document.getById(C).getChild(1);
J.focus()
},clickFn:A};
function I(){var J=this.modes[E.mode]?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED;
this.setState(E.readOnly&&!this.readOnly?CKEDITOR.TRISTATE_DISABLED:J);
this.setValue("")
}E.on("mode",I,this);
!this.readOnly&&E.on("readOnly",I,this);
var G=CKEDITOR.tools.addFunction(function(K,J){K=new CKEDITOR.dom.event(K);
var L=K.getKeystroke();
switch(L){case 13:case 32:case 40:CKEDITOR.tools.callFunction(A,J);
break;
default:H.onkey(H,L)
}K.preventDefault()
});
var B=CKEDITOR.tools.addFunction(function(){H.onfocus&&H.onfocus()
});
H.keyDownFn=G;
D.push('<span class="cke_rcombo" role="presentation">',"<span id=",C);
if(this.className){D.push(' class="',this.className,' cke_off"')
}D.push(' role="presentation">','<span id="'+C+'_label" class=cke_label>',this.label,"</span>",'<a hidefocus=true title="',this.title,'" tabindex="-1"',F.gecko&&F.version>=10900&&!F.hc?"":" href=\"javascript:void('"+this.label+"')\"",' role="button" aria-labelledby="',C,'_label" aria-describedby="',C,'_text" aria-haspopup="true"');
if(CKEDITOR.env.opera||(CKEDITOR.env.gecko&&CKEDITOR.env.mac)){D.push(' onkeypress="return false;"')
}if(CKEDITOR.env.gecko){D.push(' onblur="this.style.cssText = this.style.cssText;"')
}D.push(' onkeydown="CKEDITOR.tools.callFunction( ',G,', event, this );" onfocus="return CKEDITOR.tools.callFunction(',B,', event);" '+(CKEDITOR.env.ie?'onclick="return false;" onmouseup':"onclick")+'="CKEDITOR.tools.callFunction(',A,', this); return false;"><span><span id="'+C+'_text" class="cke_text cke_inline_label">'+this.label+"</span></span><span class=cke_openbutton><span class=cke_icon>"+(CKEDITOR.env.hc?"&#9660;":CKEDITOR.env.air?"&nbsp;":"")+"</span></span></a></span></span>");
if(this.onRender){this.onRender()
}return H
},createPanel:function(B){if(this._.panel){return 
}var G=this._.panelDefinition,F=this._.panelDefinition.block,E=G.parent||CKEDITOR.document.getBody(),A=new CKEDITOR.ui.floatPanel(B,E,G),D=A.addListBlock(this.id,F),C=this;
A.onShow=function(){if(C.className){this.element.getFirst().addClass(C.className+"_panel")
}C.setState(CKEDITOR.TRISTATE_ON);
D.focus(!C.multiSelect&&C.getValue());
C._.on=1;
if(C.onOpen){C.onOpen()
}};
A.onHide=function(H){if(C.className){this.element.getFirst().removeClass(C.className+"_panel")
}C.setState(C.modes&&C.modes[B.mode]?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED);
C._.on=0;
if(!H&&C.onClose){C.onClose()
}};
A.onEscape=function(){A.hide()
};
D.onClick=function(I,H){C.document.getWindow().focus();
if(C.onClick){C.onClick.call(C,I,H)
}if(H){C.setValue(I,C._.items[I])
}else{C.setValue("")
}A.hide(false)
};
this._.panel=A;
this._.list=D;
A.getBlock(this.id).onHide=function(){C._.on=0;
C.setState(CKEDITOR.TRISTATE_OFF)
};
if(this.init){this.init()
}},setValue:function(B,C){this._.value=B;
var A=this.document.getById("cke_"+this.id+"_text");
if(A){if(!(B||C)){C=this.label;
A.addClass("cke_inline_label")
}else{A.removeClass("cke_inline_label")
}A.setHtml(typeof C!="undefined"?C:B)
}},getValue:function(){return this._.value||""
},unmarkAll:function(){this._.list.unmarkAll()
},mark:function(A){this._.list.mark(A)
},hideItem:function(A){this._.list.hideItem(A)
},hideGroup:function(A){this._.list.hideGroup(A)
},showAll:function(){this._.list.showAll()
},add:function(B,A,C){this._.items[B]=C||B;
this._.list.add(B,A,C)
},startGroup:function(A){this._.list.startGroup(A)
},commit:function(){if(!this._.committed){this._.list.commit();
this._.committed=1;
CKEDITOR.ui.fire("ready",this)
}this._.committed=1
},setState:function(A){if(this._.state==A){return 
}this.document.getById("cke_"+this.id).setState(A);
this._.state=A
}}});
CKEDITOR.ui.prototype.addRichCombo=function(A,B){this.add(A,CKEDITOR.UI_RICHCOMBO,B)
};