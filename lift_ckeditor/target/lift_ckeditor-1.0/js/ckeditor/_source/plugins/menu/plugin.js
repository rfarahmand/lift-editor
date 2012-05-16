;
CKEDITOR.plugins.add("menu",{beforeInit:function(D){var A=D.config.menu_groups.split(","),E=D._.menuGroups={},C=D._.menuItems={};
for(var B=0;
B<A.length;
B++){E[A[B]]=B+1
}D.addMenuGroup=function(G,F){E[G]=F||100
};
D.addMenuItem=function(F,G){if(E[G.group]){C[F]=new CKEDITOR.menuItem(this,F,G)
}};
D.addMenuItems=function(F){for(var G in F){this.addMenuItem(G,F[G])
}};
D.getMenuItem=function(F){return C[F]
};
D.removeMenuItem=function(F){delete C[F]
}
},requires:["floatpanel"]});
(function(){CKEDITOR.menu=CKEDITOR.tools.createClass({$:function(D,C){C=this._.definition=C||{};
this.id=CKEDITOR.tools.getNextId();
this.editor=D;
this.items=[];
this._.listeners=[];
this._.level=C.level||1;
var E=CKEDITOR.tools.extend({},C.panel,{css:D.skin.editor.css,level:this._.level-1,block:{}});
var B=E.block.attributes=(E.attributes||{});
!B.role&&(B.role="menu");
this._.panelDefinition=E
},_:{onShow:function(){var G=this.editor.getSelection();
if(CKEDITOR.env.ie){G&&G.lock()
}var D=G&&G.getStartElement(),F=this._.listeners,E=[];
this.removeAll();
for(var C=0;
C<F.length;
C++){var B=F[C](D,G);
if(B){for(var I in B){var H=this.editor.getMenuItem(I);
if(H&&(!H.command||this.editor.getCommand(H.command).state)){H.state=B[I];
this.add(H)
}}}}},onClick:function(B){this.hide(false);
if(B.onClick){B.onClick()
}else{if(B.command){this.editor.execCommand(B.command)
}}},onEscape:function(C){var B=this.parent;
if(B){B._.panel.hideChild();
var D=B._.panel._.panel._.currentBlock,E=D._.focusIndex;
D._.markItem(E)
}else{if(C==27){this.hide()
}}return false
},onHide:function(){if(CKEDITOR.env.ie&&!this.parent){var B=this.editor.getSelection();
B&&B.unlock(true)
}this.onHide&&this.onHide()
},showSubMenu:function(C){var G=this._.subMenu,E=this.items[C],I=E.getItems&&E.getItems();
if(!I){this._.panel.hideChild();
return 
}var F=this._.panel.getBlock(this.id);
F._.focusIndex=C;
if(G){G.removeAll()
}else{G=this._.subMenu=new CKEDITOR.menu(this.editor,CKEDITOR.tools.extend({},this._.definition,{level:this._.level+1},true));
G.parent=this;
G._.onClick=CKEDITOR.tools.bind(this._.onClick,this)
}for(var B in I){var H=this.editor.getMenuItem(B);
if(H){H.state=I[B];
G.add(H)
}}var D=this._.panel.getBlock(this.id).element.getDocument().getById(this.id+String(C));
G.show(D,2)
}},proto:{add:function(B){if(!B.order){B.order=this.items.length
}this.items.push(B)
},removeAll:function(){this.items=[]
},show:function(B,F,P,O){if(!this.parent){this._.onShow();
if(!this.items.length){return 
}}F=F||(this.editor.lang.dir=="rtl"?2:1);
var M=this.items,E=this.editor,K=this._.panel,C=this._.element;
if(!K){K=this._.panel=new CKEDITOR.ui.floatPanel(this.editor,CKEDITOR.document.getBody(),this._.panelDefinition,this._.level);
K.onEscape=CKEDITOR.tools.bind(function(T){if(this._.onEscape(T)===false){return false
}},this);
K.onHide=CKEDITOR.tools.bind(function(){this._.onHide&&this._.onHide()
},this);
var G=K.addBlock(this.id,this._.panelDefinition.block);
G.autoSize=true;
var L=G.keys;
L[40]="next";
L[9]="next";
L[38]="prev";
L[CKEDITOR.SHIFT+9]="prev";
L[(E.lang.dir=="rtl"?37:39)]=CKEDITOR.env.ie?"mouseup":"click";
L[32]=CKEDITOR.env.ie?"mouseup":"click";
CKEDITOR.env.ie&&(L[13]="mouseup");
C=this._.element=G.element;
C.addClass(E.skinClass);
var I=C.getDocument();
I.getBody().setStyle("overflow","hidden");
I.getElementsByTag("html").getItem(0).setStyle("overflow","hidden");
this._.itemOverFn=CKEDITOR.tools.addFunction(function(T){clearTimeout(this._.showSubTimeout);
this._.showSubTimeout=CKEDITOR.tools.setTimeout(this._.showSubMenu,E.config.menu_subMenuDelay||400,this,[T])
},this);
this._.itemOutFn=CKEDITOR.tools.addFunction(function(T){clearTimeout(this._.showSubTimeout)
},this);
this._.itemClickFn=CKEDITOR.tools.addFunction(function(T){var U=this.items[T];
if(U.state==CKEDITOR.TRISTATE_DISABLED){this.hide();
return 
}if(U.getItems){this._.showSubMenu(T)
}else{this._.onClick(U)
}},this)
}A(M);
var S=E.container.getChild(1),J=S.hasClass("cke_mixed_dir_content")?" cke_mixed_dir_content":"";
var H=['<div class="cke_menu'+J+'" role="presentation">'];
var D=M.length,R=D&&M[0].group;
for(var N=0;
N<D;
N++){var Q=M[N];
if(R!=Q.group){H.push('<div class="cke_menuseparator" role="separator"></div>');
R=Q.group
}Q.render(this,N,H)
}H.push("</div>");
C.setHtml(H.join(""));
CKEDITOR.ui.fire("ready",this);
if(this.parent){this.parent._.panel.showAsChild(K,this.id,B,F,P,O)
}else{K.showBlock(this.id,B,F,P,O)
}E.fire("menuShow",[K])
},addListener:function(B){this._.listeners.push(B)
},hide:function(B){this._.onHide&&this._.onHide();
this._.panel&&this._.panel.hide(B)
}}});
function A(B){B.sort(function(D,C){if(D.group<C.group){return -1
}else{if(D.group>C.group){return 1
}}return D.order<C.order?-1:D.order>C.order?1:0
})
}CKEDITOR.menuItem=CKEDITOR.tools.createClass({$:function(D,B,C){CKEDITOR.tools.extend(this,C,{order:0,className:"cke_button_"+B});
this.group=D._.menuGroups[this.group];
this.editor=D;
this.name=B
},proto:{render:function(F,J,G){var E=F.id+String(J),D=(typeof this.state=="undefined")?CKEDITOR.TRISTATE_OFF:this.state;
var H=" cke_"+(D==CKEDITOR.TRISTATE_ON?"on":D==CKEDITOR.TRISTATE_DISABLED?"disabled":"off");
var B=this.label;
if(this.className){H+=" "+this.className
}var C=this.getItems;
G.push('<span class="cke_menuitem'+(this.icon&&this.icon.indexOf(".png")==-1?" cke_noalphafix":"")+'"><a id="',E,'" class="',H,'" href="javascript:void(\'',(this.label||"").replace("'",""),'\')" title="',this.label,'" tabindex="-1"_cke_focus=1 hidefocus="true" role="menuitem"'+(C?'aria-haspopup="true"':"")+(D==CKEDITOR.TRISTATE_DISABLED?'aria-disabled="true"':"")+(D==CKEDITOR.TRISTATE_ON?'aria-pressed="true"':""));
if(CKEDITOR.env.opera||(CKEDITOR.env.gecko&&CKEDITOR.env.mac)){G.push(' onkeypress="return false;"')
}if(CKEDITOR.env.gecko){G.push(' onblur="this.style.cssText = this.style.cssText;"')
}var I=(this.iconOffset||0)*-16;
G.push(' onmouseover="CKEDITOR.tools.callFunction(',F._.itemOverFn,",",J,');" onmouseout="CKEDITOR.tools.callFunction(',F._.itemOutFn,",",J,');" '+(CKEDITOR.env.ie?'onclick="return false;" onmouseup':"onclick")+'="CKEDITOR.tools.callFunction(',F._.itemClickFn,",",J,'); return false;"><span class="cke_icon_wrapper"><span class="cke_icon"'+(this.icon?' style="background-image:url('+CKEDITOR.getUrl(this.icon)+");background-position:0 "+I+'px;"':"")+'></span></span><span class="cke_label">');
if(C){G.push('<span class="cke_menuarrow">',"<span>&#",(this.editor.lang.dir=="rtl"?"9668":"9658"),";</span>","</span>")
}G.push(B,"</span></a></span>")
}}})
})();
CKEDITOR.config.menu_groups="clipboard,form,tablecell,tablecellproperties,tablerow,tablecolumn,table,anchor,link,image,flash,checkbox,radio,textfield,hiddenfield,imagebutton,button,select,textarea,div";