;
CKEDITOR.plugins.add("panel",{beforeInit:function(A){A.ui.addHandler(CKEDITOR.UI_PANEL,CKEDITOR.ui.panel.handler)
}});
CKEDITOR.UI_PANEL="panel";
CKEDITOR.ui.panel=function(A,B){if(B){CKEDITOR.tools.extend(this,B)
}CKEDITOR.tools.extend(this,{className:"",css:[]});
this.id=CKEDITOR.tools.getNextId();
this.document=A;
this._={blocks:{}}
};
CKEDITOR.ui.panel.handler={create:function(A){return new CKEDITOR.ui.panel(A)
}};
CKEDITOR.ui.panel.prototype={renderHtml:function(B){var A=[];
this.render(B,A);
return A.join("")
},render:function(B,A){var C=this.id;
A.push('<div class="',B.skinClass,'" lang="',B.langCode,'" role="presentation" style="display:none;z-index:'+(B.config.baseFloatZIndex+1)+'"><div id=',C," dir=",B.lang.dir,' role="presentation" class="cke_panel cke_',B.lang.dir);
if(this.className){A.push(" ",this.className)
}A.push('">');
if(this.forceIFrame||this.css.length){A.push('<iframe id="',C,'_frame" frameborder="0" role="application" src="javascript:void(');
A.push(CKEDITOR.env.isCustomDomain()?"(function(){document.open();document.domain='"+document.domain+"';document.close();})()":"0");
A.push(')"></iframe>')
}A.push("</div></div>");
return C
},getHolderElement:function(){var I=this._.holder;
if(!I){if(this.forceIFrame||this.css.length){var C=this.document.getById(this.id+"_frame"),A=C.getParent(),B=A.getAttribute("dir"),G=A.getParent().getAttribute("class"),F=A.getParent().getAttribute("lang"),J=C.getFrameDocument();
CKEDITOR.env.iOS&&A.setStyles({overflow:"scroll","-webkit-overflow-scrolling":"touch"});
var H=CKEDITOR.tools.addFunction(CKEDITOR.tools.bind(function(K){this.isLoaded=true;
if(this.onLoad){this.onLoad()
}},this));
var D='<!DOCTYPE html><html dir="'+B+'" class="'+G+'_container" lang="'+F+'"><head><style>.'+G+"_container{visibility:hidden}</style>"+CKEDITOR.tools.buildStyleHtml(this.css)+'</head><body class="cke_'+B+" cke_panel_frame "+CKEDITOR.env.cssClass+'" style="margin:0;padding:0" onload="( window.CKEDITOR || window.parent.CKEDITOR ).tools.callFunction('+H+');"></body></html>';
J.write(D);
var E=J.getWindow();
E.$.CKEDITOR=CKEDITOR;
J.on("key"+(CKEDITOR.env.opera?"press":"down"),function(K){var M=K.data.getKeystroke(),L=this.document.getById(this.id).getAttribute("dir");
if(this._.onKeyDown&&this._.onKeyDown(M)===false){K.data.preventDefault();
return 
}if(M==27||M==(L=="rtl"?39:37)){if(this.onEscape&&this.onEscape(M)===false){K.data.preventDefault()
}}},this);
I=J.getBody();
I.unselectable();
CKEDITOR.env.air&&CKEDITOR.tools.callFunction(H)
}else{I=this.document.getById(this.id)
}this._.holder=I
}return I
},addBlock:function(A,B){B=this._.blocks[A]=B instanceof CKEDITOR.ui.panel.block?B:new CKEDITOR.ui.panel.block(this.getHolderElement(),B);
if(!this._.currentBlock){this.showBlock(A)
}return B
},getBlock:function(A){return this._.blocks[A]
},showBlock:function(A){var E=this._.blocks,D=E[A],C=this._.currentBlock;
var B=!this.forceIFrame||CKEDITOR.env.ie?this._.holder:this.document.getById(this.id+"_frame");
if(C){B.removeAttributes(C.attributes);
C.hide()
}this._.currentBlock=D;
B.setAttributes(D.attributes);
CKEDITOR.fire("ariaWidget",B);
D._.focusIndex=-1;
this._.onKeyDown=D.onKeyDown&&CKEDITOR.tools.bind(D.onKeyDown,D);
D.show();
return D
},destroy:function(){this.element&&this.element.remove()
}};
CKEDITOR.ui.panel.block=CKEDITOR.tools.createClass({$:function(A,B){this.element=A.append(A.getDocument().createElement("div",{attributes:{tabIndex:-1,"class":"cke_panel_block",role:"presentation"},styles:{display:"none"}}));
if(B){CKEDITOR.tools.extend(this,B)
}if(!this.attributes.title){this.attributes.title=this.attributes["aria-label"]
}this.keys={};
this._.focusIndex=-1;
this.element.disableContextMenu()
},_:{markItem:function(B){if(B==-1){return 
}var A=this.element.getElementsByTag("a");
var C=A.getItem(this._.focusIndex=B);
if(CKEDITOR.env.webkit||CKEDITOR.env.opera){C.getDocument().getWindow().focus()
}C.focus();
this.onMark&&this.onMark(C)
}},proto:{show:function(){this.element.setStyle("display","")
},hide:function(){if(!this.onHide||this.onHide.call(this)!==true){this.element.setStyle("display","none")
}},onKeyDown:function(E){var C=this.keys[E];
switch(C){case"next":var B=this._.focusIndex,A=this.element.getElementsByTag("a"),D;
while((D=A.getItem(++B))){if(D.getAttribute("_cke_focus")&&D.$.offsetWidth){this._.focusIndex=B;
D.focus();
break
}}return false;
case"prev":B=this._.focusIndex;
A=this.element.getElementsByTag("a");
while(B>0&&(D=A.getItem(--B))){if(D.getAttribute("_cke_focus")&&D.$.offsetWidth){this._.focusIndex=B;
D.focus();
break
}}return false;
case"click":case"mouseup":B=this._.focusIndex;
D=B>=0&&this.element.getElementsByTag("a").getItem(B);
if(D){D.$[C]?D.$[C]():D.$["on"+C]()
}return false
}return true
}}});