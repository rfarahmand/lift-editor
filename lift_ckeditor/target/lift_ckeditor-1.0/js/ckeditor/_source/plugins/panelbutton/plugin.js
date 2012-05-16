;
CKEDITOR.plugins.add("panelbutton",{requires:["button"],onLoad:function(){function A(C){var B=this._;
if(B.state==CKEDITOR.TRISTATE_DISABLED){return 
}this.createPanel(C);
if(B.on){B.panel.hide();
return 
}B.panel.showBlock(this._.id,this.document.getById(this._.id),4)
}CKEDITOR.ui.panelButton=CKEDITOR.tools.createClass({base:CKEDITOR.ui.button,$:function(B){var C=B.panel;
delete B.panel;
this.base(B);
this.document=(C&&C.parent&&C.parent.getDocument())||CKEDITOR.document;
C.block={attributes:C.attributes};
this.hasArrow=true;
this.click=A;
this._={panelDefinition:C}
},statics:{handler:{create:function(B){return new CKEDITOR.ui.panelButton(B)
}}},proto:{createPanel:function(D){var C=this._;
if(C.panel){return 
}var I=this._.panelDefinition||{},G=this._.panelDefinition.block,F=I.parent||CKEDITOR.document.getBody(),B=this._.panel=new CKEDITOR.ui.floatPanel(D,F,I),H=B.addBlock(C.id,G),E=this;
B.onShow=function(){if(E.className){this.element.getFirst().addClass(E.className+"_panel")
}E.setState(CKEDITOR.TRISTATE_ON);
C.on=1;
if(E.onOpen){E.onOpen()
}};
B.onHide=function(J){if(E.className){this.element.getFirst().removeClass(E.className+"_panel")
}E.setState(E.modes&&E.modes[D.mode]?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED);
C.on=0;
if(!J&&E.onClose){E.onClose()
}};
B.onEscape=function(){B.hide();
E.document.getById(C.id).focus()
};
if(this.onBlock){this.onBlock(B,H)
}H.onHide=function(){C.on=0;
E.setState(CKEDITOR.TRISTATE_OFF)
}
}}})
},beforeInit:function(A){A.ui.addHandler(CKEDITOR.UI_PANELBUTTON,CKEDITOR.ui.panelButton.handler)
}});
CKEDITOR.UI_PANELBUTTON="panelbutton";