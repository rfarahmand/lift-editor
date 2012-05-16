(function(){function C(K){if(!K||K.type!=CKEDITOR.NODE_ELEMENT||K.getName()!="form"){return[]
}var M=[],L=["style","className"];
for(var J=0;
J<L.length;
J++){var I=L[J];
var G=K.$.elements.namedItem(I);
if(G){var H=new CKEDITOR.dom.element(G);
M.push([H,H.nextSibling]);
H.remove()
}}return M
}function E(I,K){if(!I||I.type!=CKEDITOR.NODE_ELEMENT||I.getName()!="form"){return 
}if(K.length>0){for(var G=K.length-1;
G>=0;
G--){var J=K[G][0];
var H=K[G][1];
if(H){J.insertBefore(H)
}else{J.appendTo(I)
}}}}function D(J,I){var K=C(J);
var H={};
var G=J.$;
if(!I){H["class"]=G.className||"";
G.className=""
}H.inline=G.style.cssText||"";
if(!I){G.style.cssText="position: static; overflow: visible"
}E(K);
return H
}function A(I,H){var J=C(I);
var G=I.$;
if("class" in H){G.className=H["class"]
}if("inline" in H){G.style.cssText=H.inline
}E(J)
}function F(K){var J=CKEDITOR.instances;
for(var I in J){var H=J[I];
if(H.mode=="wysiwyg"&&!H.readOnly){var G=H.document.getBody();
G.setAttribute("contentEditable",false);
G.setAttribute("contentEditable",true)
}}if(K.focusManager.hasFocus){K.toolbox.focus();
K.focus()
}}function B(G){if(!CKEDITOR.env.ie||CKEDITOR.env.version>6){return null
}var H=CKEDITOR.dom.element.createFromHtml('<iframe frameborder="0" tabindex="-1" src="javascript:void((function(){document.open();'+(CKEDITOR.env.isCustomDomain()?"document.domain='"+this.getDocument().$.domain+"';":"")+'document.close();})())" style="display:block;position:absolute;z-index:-1;progid:DXImageTransform.Microsoft.Alpha(opacity=0);"></iframe>');
return G.append(H,true)
}CKEDITOR.plugins.add("maximize",{init:function(M){var G=M.lang;
var I=CKEDITOR.document,L=I.getWindow();
var N,O;
var P;
var K;
function H(){var Q=L.getViewPaneSize();
K&&K.setStyles({width:Q.width+"px",height:Q.height+"px"});
M.resize(Q.width,Q.height,null,true)
}var J=CKEDITOR.TRISTATE_OFF;
M.addCommand("maximize",{modes:{wysiwyg:!CKEDITOR.env.iOS,source:!CKEDITOR.env.iOS},readOnly:1,editorFocus:false,exec:function(){var Q=M.container.getChild(1);
var T=M.getThemeSpace("contents");
if(M.mode=="wysiwyg"){var b=M.getSelection();
N=b&&b.getRanges();
O=L.getScrollPosition()
}else{var Y=M.textarea.$;
N=!CKEDITOR.env.ie&&[Y.selectionStart,Y.selectionEnd];
O=[Y.scrollLeft,Y.scrollTop]
}if(this.state==CKEDITOR.TRISTATE_OFF){L.on("resize",H);
P=L.getScrollPosition();
var R=M.container;
while((R=R.getParent())){R.setCustomData("maximize_saved_styles",D(R));
R.setStyle("z-index",M.config.baseFloatZIndex-1)
}T.setCustomData("maximize_saved_styles",D(T,true));
Q.setCustomData("maximize_saved_styles",D(Q,true));
var c={overflow:CKEDITOR.env.webkit?"":"hidden",width:0,height:0};
I.getDocumentElement().setStyles(c);
!CKEDITOR.env.gecko&&I.getDocumentElement().setStyle("position","fixed");
!(CKEDITOR.env.gecko&&CKEDITOR.env.quirks)&&I.getBody().setStyles(c);
CKEDITOR.env.ie?setTimeout(function(){L.$.scrollTo(0,0)
},0):L.$.scrollTo(0,0);
Q.setStyle("position",CKEDITOR.env.gecko&&CKEDITOR.env.quirks?"fixed":"absolute");
Q.$.offsetLeft;
Q.setStyles({"z-index":M.config.baseFloatZIndex-1,left:"0px",top:"0px"});
K=B(Q);
Q.addClass("cke_maximized");
H();
var U=Q.getDocumentPosition();
Q.setStyles({left:(-1*U.x)+"px",top:(-1*U.y)+"px"});
CKEDITOR.env.gecko&&F(M)
}else{if(this.state==CKEDITOR.TRISTATE_ON){L.removeListener("resize",H);
var Z=[T,Q];
for(var W=0;
W<Z.length;
W++){A(Z[W],Z[W].getCustomData("maximize_saved_styles"));
Z[W].removeCustomData("maximize_saved_styles")
}R=M.container;
while((R=R.getParent())){A(R,R.getCustomData("maximize_saved_styles"));
R.removeCustomData("maximize_saved_styles")
}CKEDITOR.env.ie?setTimeout(function(){L.$.scrollTo(P.x,P.y)
},0):L.$.scrollTo(P.x,P.y);
Q.removeClass("cke_maximized");
if(CKEDITOR.env.webkit){Q.setStyle("display","inline");
setTimeout(function(){Q.setStyle("display","block")
},0)
}if(K){K.remove();
K=null
}M.fire("resize")
}}this.toggleState();
var X=this.uiItems[0];
if(X){var a=(this.state==CKEDITOR.TRISTATE_OFF)?G.maximize:G.minimize;
var S=M.element.getDocument().getById(X._.id);
S.getChild(1).setHtml(a);
S.setAttribute("title",a);
S.setAttribute("href",'javascript:void("'+a+'");')
}if(M.mode=="wysiwyg"){if(N){CKEDITOR.env.gecko&&F(M);
M.getSelection().selectRanges(N);
var V=M.getSelection().getStartElement();
V&&V.scrollIntoView(true)
}else{L.$.scrollTo(O.x,O.y)
}}else{if(N){Y.selectionStart=N[0];
Y.selectionEnd=N[1]
}Y.scrollLeft=O[0];
Y.scrollTop=O[1]
}N=O=null;
J=this.state
},canUndo:false});
M.ui.addButton("Maximize",{label:G.maximize,command:"maximize"});
M.on("mode",function(){var Q=M.getCommand("maximize");
Q.setState(Q.state==CKEDITOR.TRISTATE_DISABLED?CKEDITOR.TRISTATE_DISABLED:J)
},null,null,100)
}})
})();