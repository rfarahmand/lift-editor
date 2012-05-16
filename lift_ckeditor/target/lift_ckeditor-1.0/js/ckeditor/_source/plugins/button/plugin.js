;
CKEDITOR.plugins.add("button",{beforeInit:function(A){A.ui.addHandler(CKEDITOR.UI_BUTTON,CKEDITOR.ui.button.handler)
}});
CKEDITOR.UI_BUTTON="button";
CKEDITOR.ui.button=function(A){CKEDITOR.tools.extend(this,A,{title:A.label,className:A.className||(A.command&&"cke_button_"+A.command)||"",click:A.click||function(B){B.execCommand(A.command)
}});
this._={}
};
CKEDITOR.ui.button.handler={create:function(A){return new CKEDITOR.ui.button(A)
}};
(function(){CKEDITOR.ui.button.prototype={render:function(H,D){var I=CKEDITOR.env,C=this._.id=CKEDITOR.tools.getNextId(),E="",F=this.command,A;
this._.editor=H;
var L={id:C,button:this,editor:H,focus:function(){var N=CKEDITOR.document.getById(C);
N.focus()
},execute:function(){if(CKEDITOR.env.ie&&CKEDITOR.env.version<7){CKEDITOR.tools.setTimeout(function(){this.button.click(H)
},0,this)
}else{this.button.click(H)
}}};
var J=CKEDITOR.tools.addFunction(function(N){if(L.onkey){N=new CKEDITOR.dom.event(N);
return(L.onkey(L,N.getKeystroke())!==false)
}});
var B=CKEDITOR.tools.addFunction(function(N){var O;
if(L.onfocus){O=(L.onfocus(L,new CKEDITOR.dom.event(N))!==false)
}if(CKEDITOR.env.gecko&&CKEDITOR.env.version<10900){N.preventBubble()
}return O
});
L.clickFn=A=CKEDITOR.tools.addFunction(L.execute,L);
if(this.modes){var K={};
function M(){var O=H.mode;
if(O){var N=this.modes[O]?K[O]!=undefined?K[O]:CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED;
this.setState(H.readOnly&&!this.readOnly?CKEDITOR.TRISTATE_DISABLED:N)
}}H.on("beforeModeUnload",function(){if(H.mode&&this._.state!=CKEDITOR.TRISTATE_DISABLED){K[H.mode]=this._.state
}},this);
H.on("mode",M,this);
!this.readOnly&&H.on("readOnly",M,this)
}else{if(F){F=H.getCommand(F);
if(F){F.on("state",function(){this.setState(F.state)
},this);
E+="cke_"+(F.state==CKEDITOR.TRISTATE_ON?"on":F.state==CKEDITOR.TRISTATE_DISABLED?"disabled":"off")
}}}if(!F){E+="cke_off"
}if(this.className){E+=" "+this.className
}D.push('<span class="cke_button'+(this.icon&&this.icon.indexOf(".png")==-1?" cke_noalphafix":"")+'">','<a id="',C,'" class="',E,'"',I.gecko&&I.version>=10900&&!I.hc?"":'" href="javascript:void(\''+(this.title||"").replace("'","")+"')\"",' title="',this.title,'" tabindex="-1" hidefocus="true" role="button" aria-labelledby="'+C+'_label"'+(this.hasArrow?' aria-haspopup="true"':""));
if(I.opera||(I.gecko&&I.mac)){D.push(' onkeypress="return false;"')
}if(I.gecko){D.push(' onblur="this.style.cssText = this.style.cssText;"')
}D.push(' onkeydown="return CKEDITOR.tools.callFunction(',J,', event);" onfocus="return CKEDITOR.tools.callFunction(',B,', event);" '+(CKEDITOR.env.ie?'onclick="return false;" onmouseup':"onclick")+'="CKEDITOR.tools.callFunction(',A,', this); return false;"><span class="cke_icon"');
if(this.icon){var G=(this.iconOffset||0)*-16;
D.push(' style="background-image:url(',CKEDITOR.getUrl(this.icon),");background-position:0 "+G+'px;"')
}D.push('>&nbsp;</span><span id="',C,'_label" class="cke_label">',this.label,"</span>");
if(this.hasArrow){D.push('<span class="cke_buttonarrow">'+(CKEDITOR.env.hc?"&#9660;":"&nbsp;")+"</span>")
}D.push("</a>","</span>");
if(this.onRender){this.onRender()
}return L
},setState:function(B){if(this._.state==B){return false
}this._.state=B;
var A=CKEDITOR.document.getById(this._.id);
if(A){A.setState(B);
B==CKEDITOR.TRISTATE_DISABLED?A.setAttribute("aria-disabled",true):A.removeAttribute("aria-disabled");
B==CKEDITOR.TRISTATE_ON?A.setAttribute("aria-pressed",true):A.removeAttribute("aria-pressed");
return true
}else{return false
}}}
})();
CKEDITOR.ui.prototype.addButton=function(A,B){this.add(A,CKEDITOR.UI_BUTTON,B)
};