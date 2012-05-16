;
CKEDITOR.plugins.add("menubutton",{requires:["button","menu"],beforeInit:function(A){A.ui.addHandler(CKEDITOR.UI_MENUBUTTON,CKEDITOR.ui.menuButton.handler)
}});
CKEDITOR.UI_MENUBUTTON="menubutton";
(function(){var A=function(C){var B=this._;
if(B.state===CKEDITOR.TRISTATE_DISABLED){return 
}B.previousState=B.state;
var D=B.menu;
if(!D){D=B.menu=new CKEDITOR.menu(C,{panel:{className:C.skinClass+" cke_contextmenu",attributes:{"aria-label":C.lang.common.options}}});
D.onHide=CKEDITOR.tools.bind(function(){this.setState(this.modes&&this.modes[C.mode]?B.previousState:CKEDITOR.TRISTATE_DISABLED)
},this);
if(this.onMenu){D.addListener(this.onMenu)
}}if(B.on){D.hide();
return 
}this.setState(CKEDITOR.TRISTATE_ON);
D.show(CKEDITOR.document.getById(this._.id),4)
};
CKEDITOR.ui.menuButton=CKEDITOR.tools.createClass({base:CKEDITOR.ui.button,$:function(B){var C=B.panel;
delete B.panel;
this.base(B);
this.hasArrow=true;
this.click=A
},statics:{handler:{create:function(B){return new CKEDITOR.ui.menuButton(B)
}}}})
})();