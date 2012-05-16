;
CKEDITOR.plugins.add("floatpanel",{requires:["panel"]});
(function(){var B={};
var A=false;
function C(H,I,E,G,J){var F=CKEDITOR.tools.genKey(I.getUniqueId(),E.getUniqueId(),H.skinName,H.lang.dir,H.uiColor||"",G.css||"",J||"");
var D=B[F];
if(!D){D=B[F]=new CKEDITOR.ui.panel(I,G);
D.element=E.append(CKEDITOR.dom.element.createFromHtml(D.renderHtml(H),I));
D.element.setStyles({display:"none",position:"absolute"})
}return D
}CKEDITOR.ui.floatPanel=CKEDITOR.tools.createClass({$:function(I,E,G,K){G.forceIFrame=1;
var J=E.getDocument(),D=C(I,J,E,G,K||0),F=D.element,H=F.getFirst().getFirst();
F.disableContextMenu();
this.element=F;
this._={editor:I,panel:D,parentElement:E,definition:G,document:J,iframe:H,children:[],dir:I.lang.dir};
I.on("mode",function(){this.hide()
},this)
},proto:{addBlock:function(D,E){return this._.panel.addBlock(D,E)
},addListBlock:function(D,E){return this._.panel.addListBlock(D,E)
},getBlock:function(D){return this._.panel.getBlock(D)
},showBlock:function(F,E,R,N,K){var D=this._.panel,I=D.showBlock(F);
this.allowBlur(false);
A=1;
this._.returnFocus=this._.editor.focusManager.hasFocus?this._.editor:new CKEDITOR.dom.element(CKEDITOR.document.$.activeElement);
var L=this.element,J=this._.iframe,G=this._.definition,M=E.getDocumentPosition(L.getDocument()),Q=this._.dir=="rtl";
var H=M.x+(N||0),P=M.y+(K||0);
if(Q&&(R==1||R==4)){H+=E.$.offsetWidth
}else{if(!Q&&(R==2||R==3)){H+=E.$.offsetWidth-1
}}if(R==3||R==4){P+=E.$.offsetHeight-1
}this._.panel._.offsetParentId=E.getId();
L.setStyles({top:P+"px",left:0,display:""});
L.setOpacity(0);
L.getFirst().removeStyle("width");
if(!this._.blurSet){var O=CKEDITOR.env.ie?J:new CKEDITOR.dom.window(J.$.contentWindow);
CKEDITOR.event.useCapture=true;
O.on("blur",function(S){if(!this.allowBlur()){return 
}var T=S.data.getTarget();
if(T.getName&&T.getName()!="iframe"){return 
}if(this.visible&&!this._.activeChild&&!A){delete this._.returnFocus;
this.hide()
}},this);
O.on("focus",function(){this._.focused=true;
this.hideChild();
this.allowBlur(true)
},this);
CKEDITOR.event.useCapture=false;
this._.blurSet=1
}D.onEscape=CKEDITOR.tools.bind(function(S){if(this.onEscape&&this.onEscape(S)===false){return false
}},this);
CKEDITOR.tools.setTimeout(function(){var S=CKEDITOR.tools.bind(function(){var k=L.getFirst();
if(I.autoSize){var Z=I.element.$;
if(CKEDITOR.env.gecko||CKEDITOR.env.opera){Z=Z.parentNode
}if(CKEDITOR.env.ie){Z=Z.document.body
}var d=Z.scrollWidth;
if(CKEDITOR.env.ie&&CKEDITOR.env.quirks&&d>0){d+=(k.$.offsetWidth||0)-(k.$.clientWidth||0)+3
}d+=4;
k.setStyle("width",d+"px");
I.element.addClass("cke_frameLoaded");
var a=I.element.$.scrollHeight;
if(CKEDITOR.env.ie&&CKEDITOR.env.quirks&&a>0){a+=(k.$.offsetHeight||0)-(k.$.clientHeight||0)+3
}k.setStyle("height",a+"px");
D._.currentBlock.element.setStyle("display","none").removeStyle("display")
}else{k.removeStyle("height")
}if(Q){H-=L.$.offsetWidth
}L.setStyle("left",H+"px");
var b=D.element,h=b.getWindow(),W=L.$.getBoundingClientRect(),X=h.getViewPaneSize();
var U=W.width||W.right-W.left,f=W.height||W.bottom-W.top;
var e=Q?W.right:X.width-W.left,i=Q?X.width-W.right:W.left;
if(Q){if(e<U){if(i>U){H+=U
}else{if(X.width>U){H=H-W.left
}else{H=H-W.right+X.width
}}}}else{if(e<U){if(i>U){H-=U
}else{if(X.width>U){H=H-W.right+X.width
}else{H=H-W.left
}}}}var V=X.height-W.top,Y=W.top;
if(V<f){if(Y>f){P-=f
}else{if(X.height>f){P=P-W.bottom+X.height
}else{P=P-W.top
}}}if(CKEDITOR.env.ie){var T=new CKEDITOR.dom.element(L.$.offsetParent),c=T;
if(c.getName()=="html"){c=c.getDocument().getBody()
}if(c.getComputedStyle("direction")=="rtl"){if(CKEDITOR.env.ie8Compat){H-=L.getDocument().getDocumentElement().$.scrollLeft*2
}else{H-=(T.$.scrollWidth-T.$.clientWidth)
}}}var g=L.getFirst(),j;
if((j=g.getCustomData("activePanel"))){j.onHide&&j.onHide.call(this,1)
}g.setCustomData("activePanel",this);
L.setStyles({top:P+"px",left:H+"px"});
L.setOpacity(1)
},this);
D.isLoaded?S():D.onLoad=S;
CKEDITOR.tools.setTimeout(function(){J.$.contentWindow.focus();
this.allowBlur(true)
},0,this)
},CKEDITOR.env.air?200:0,this);
this.visible=1;
if(this.onShow){this.onShow.call(this)
}A=0
},hide:function(E){if(this.visible&&(!this.onHide||this.onHide.call(this)!==true)){this.hideChild();
CKEDITOR.env.gecko&&this._.iframe.getFrameDocument().$.activeElement.blur();
this.element.setStyle("display","none");
this.visible=0;
this.element.getFirst().removeCustomData("activePanel");
var D=E!==false&&this._.returnFocus;
if(D){if(CKEDITOR.env.webkit&&D.type){D.getWindow().$.focus()
}D.focus()
}}},allowBlur:function(E){var D=this._.panel;
if(E!=undefined){D.allowBlur=E
}return D.allowBlur
},showAsChild:function(E,F,H,G,D,I){if(this._.activeChild==E&&E._.panel._.offsetParentId==H.getId()){return 
}this.hideChild();
E.onHide=CKEDITOR.tools.bind(function(){CKEDITOR.tools.setTimeout(function(){if(!this._.focused){this.hide()
}},0,this)
},this);
this._.activeChild=E;
this._.focused=false;
E.showBlock(F,H,G,D,I);
if(CKEDITOR.env.ie7Compat||(CKEDITOR.env.ie8&&CKEDITOR.env.ie6Compat)){setTimeout(function(){E.element.getChild(0).$.style.cssText+=""
},100)
}},hideChild:function(){var D=this._.activeChild;
if(D){delete D.onHide;
delete D._.returnFocus;
delete this._.activeChild;
D.hide()
}}}});
CKEDITOR.on("instanceDestroyed",function(){var E=CKEDITOR.tools.isEmpty(CKEDITOR.instances);
for(var F in B){var D=B[F];
if(E){D.destroy()
}else{D.element.hide()
}}E&&(B={})
})
})();