;
CKEDITOR.plugins.add("colorbutton",{requires:["panelbutton","floatpanel","styles"],init:function(D){var B=D.config,G=D.lang.colorButton;
var F;
if(!CKEDITOR.env.hc){C("TextColor","fore",G.textColorTitle);
C("BGColor","back",G.bgColorTitle)
}function C(I,J,K){var H=CKEDITOR.tools.getNextId()+"_colorBox";
D.ui.add(I,CKEDITOR.UI_PANELBUTTON,{label:K,title:K,className:"cke_button_"+I.toLowerCase(),modes:{wysiwyg:1},panel:{css:D.skin.editor.css,attributes:{role:"listbox","aria-label":G.panelTitle}},onBlock:function(L,O){O.autoSize=true;
O.element.addClass("cke_colorblock");
O.element.setHtml(A(L,J,H));
O.element.getDocument().getBody().setStyle("overflow","hidden");
CKEDITOR.ui.fire("ready",this);
var M=O.keys;
var N=D.lang.dir=="rtl";
M[N?37:39]="next";
M[40]="next";
M[9]="next";
M[N?39:37]="prev";
M[38]="prev";
M[CKEDITOR.SHIFT+9]="prev";
M[32]="click"
},onOpen:function(){var M=D.getSelection(),O=M&&M.getStartElement(),N=new CKEDITOR.dom.elementPath(O),L;
O=N.block||N.blockLimit||D.document.getBody();
do{L=O&&O.getComputedStyle(J=="back"?"background-color":"color")||"transparent"
}while(J=="back"&&L=="transparent"&&O&&(O=O.getParent()));
if(!L||L=="transparent"){L="#ffffff"
}this._.panel._.iframe.getFrameDocument().getById(H).setStyle("background-color",L)
}})
}function A(J,P,L){var M=[],K=B.colorButton_colors.split(",");
var I=CKEDITOR.tools.addFunction(function(T,V){if(T=="?"){var W=arguments.callee;
function U(X){this.removeListener("ok",U);
this.removeListener("cancel",U);
X.name=="ok"&&W(this.getContentElement("picker","selectedColor").getValue(),V)
}D.openDialog("colordialog",function(){this.on("ok",U);
this.on("cancel",U)
});
return 
}D.focus();
J.hide(false);
D.fire("saveSnapshot");
new CKEDITOR.style(B["colorButton_"+V+"Style"],{color:"inherit"}).remove(D.document);
if(T){var S=B["colorButton_"+V+"Style"];
S.childRule=V=="back"?function(X){return E(X)
}:function(X){return !(X.is("a")||X.getElementsByTag("a").count())||E(X)
};
new CKEDITOR.style(S,{color:T}).apply(D.document)
}D.fire("saveSnapshot")
});
M.push('<a class="cke_colorauto" _cke_focus=1 hidefocus=true title="',G.auto,'" onclick="CKEDITOR.tools.callFunction(',I,",null,'",P,"');return false;\" href=\"javascript:void('",G.auto,'\')" role="option"><table role="presentation" cellspacing=0 cellpadding=0 width="100%"><tr><td><span class="cke_colorbox" id="',L,'"></span></td><td colspan=7 align=center>',G.auto,'</td></tr></table></a><table role="presentation" cellspacing=0 cellpadding=0 width="100%">');
for(var O=0;
O<K.length;
O++){if((O%8)===0){M.push("</tr><tr>")
}var N=K[O].split("/"),Q=N[0],R=N[1]||Q;
if(!N[1]){Q="#"+Q.replace(/^(.)(.)(.)$/,"$1$1$2$2$3$3")
}var H=D.lang.colors[R]||R;
M.push('<td><a class="cke_colorbox" _cke_focus=1 hidefocus=true title="',H,'" onclick="CKEDITOR.tools.callFunction(',I,",'",Q,"','",P,"'); return false;\" href=\"javascript:void('",H,'\')" role="option"><span class="cke_colorbox" style="background-color:#',R,'"></span></a></td>')
}if(B.colorButton_enableMore===undefined||B.colorButton_enableMore){M.push('</tr><tr><td colspan=8 align=center><a class="cke_colormore" _cke_focus=1 hidefocus=true title="',G.more,'" onclick="CKEDITOR.tools.callFunction(',I,",'?','",P,"');return false;\" href=\"javascript:void('",G.more,"')\"",' role="option">',G.more,"</a></td>")
}M.push("</tr></table>");
return M.join("")
}function E(H){return(H.getAttribute("contentEditable")=="false")||H.getAttribute("data-nostyle")
}}});
CKEDITOR.config.colorButton_colors="000,800000,8B4513,2F4F4F,008080,000080,4B0082,696969,B22222,A52A2A,DAA520,006400,40E0D0,0000CD,800080,808080,F00,FF8C00,FFD700,008000,0FF,00F,EE82EE,A9A9A9,FFA07A,FFA500,FFFF00,00FF00,AFEEEE,ADD8E6,DDA0DD,D3D3D3,FFF0F5,FAEBD7,FFFFE0,F0FFF0,F0FFFF,F0F8FF,E6E6FA,FFF";
CKEDITOR.config.colorButton_foreStyle={element:"span",styles:{color:"#(color)"},overrides:[{element:"font",attributes:{color:null}}]};
CKEDITOR.config.colorButton_backStyle={element:"span",styles:{"background-color":"#(color)"}};