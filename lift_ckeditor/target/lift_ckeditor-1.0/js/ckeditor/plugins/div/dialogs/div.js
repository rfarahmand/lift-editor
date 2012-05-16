(function(){function B(F,E,D){if(!E.is||!E.getCustomData("block_processed")){E.is&&CKEDITOR.dom.element.setMarker(D,E,"block_processed",true);
F.push(E)
}}function A(H){var G=[],F=H.getChildren();
for(var E=0;
E<F.count();
E++){var D=F.getItem(E);
if(!(D.type===CKEDITOR.NODE_TEXT&&/^[ \t\n\r]+$/.test(D.getText()))){G.push(D)
}}return G
}function C(O,N){var M=(function(){var P=CKEDITOR.tools.extend({},CKEDITOR.dtd.$blockLimit);
delete P.div;
if(O.config.div_wrapTable){delete P.td;
delete P.th
}return P
})(),L=CKEDITOR.dtd.div;
function K(S){var R=new CKEDITOR.dom.elementPath(S).elements,Q;
for(var P=0;
P<R.length;
P++){if(R[P].getName() in M){Q=R[P];
break
}}return Q
}function J(){this.foreach(function(P){if(/^(?!vbox|hbox)/.test(P.type)){if(!P.setup){P.setup=function(Q){P.setValue(Q.getAttribute(P.id)||"")
}
}if(!P.commit){P.commit=function(R){var Q=this.getValue();
if("dir"==P.id&&R.getComputedStyle("direction")==Q){return 
}if(Q){R.setAttribute(P.id,Q)
}else{R.removeAttribute(P.id)
}}
}}})
}function I(h){var f=[],d={},a=[],Z,X=h.document.getSelection(),V=X.getRanges(),T=X.createBookmarks(),R,Q,P=h.config.enterMode==CKEDITOR.ENTER_DIV?"div":"p";
for(R=0;
R<V.length;
R++){Q=V[R].createIterator();
while(Z=Q.getNextParagraph()){if(Z.getName() in M){var g,e=Z.getChildren();
for(g=0;
g<e.count();
g++){B(a,e.getItem(g),d)
}}else{while(!L[Z.getName()]&&Z.getName()!="body"){Z=Z.getParent()
}B(a,Z,d)
}}}CKEDITOR.dom.element.clearAllMarkers(d);
var c=G(a),b,Y,W;
for(R=0;
R<c.length;
R++){var U=c[R][0];
b=U.getParent();
for(g=1;
g<c[R].length;
g++){b=b.getCommonAncestor(c[R][g])
}W=new CKEDITOR.dom.element("div",h.document);
for(g=0;
g<c[R].length;
g++){U=c[R][g];
while(!U.getParent().equals(b)){U=U.getParent()
}c[R][g]=U
}var S=null;
for(g=0;
g<c[R].length;
g++){U=c[R][g];
if(!(U.getCustomData&&U.getCustomData("block_processed"))){U.is&&CKEDITOR.dom.element.setMarker(d,U,"block_processed",true);
if(!g){W.insertBefore(U)
}W.append(U)
}}CKEDITOR.dom.element.clearAllMarkers(d);
f.push(W)
}X.selectBookmarks(T);
return f
}function H(S){var R=new CKEDITOR.dom.elementPath(S.getSelection().getStartElement()),Q=R.blockLimit,P=Q&&Q.getAscendant("div",true);
return P
}function G(V){var U=[],T=null,S,R;
for(var Q=0;
Q<V.length;
Q++){R=V[Q];
var P=K(R);
if(!P.equals(T)){T=P;
U.push([])
}U[U.length-1].push(R)
}return U
}function F(U){var T=this.getDialog(),S=T._element&&T._element.clone()||new CKEDITOR.dom.element("div",O.document);
this.commit(S,true);
U=[].concat(U);
var R=U.length,Q;
for(var P=0;
P<R;
P++){Q=T.getContentElement.apply(T,U[P].split(":"));
Q&&Q.setup&&Q.setup(S,true)
}}var E={},D=[];
return{title:O.lang.div.title,minWidth:400,minHeight:165,contents:[{id:"info",label:O.lang.common.generalTab,title:O.lang.common.generalTab,elements:[{type:"hbox",widths:["50%","50%"],children:[{id:"elementStyle",type:"select",style:"width: 100%;",label:O.lang.div.styleSelectLabel,"default":"",items:[[O.lang.common.notSet,""]],onChange:function(){F.call(this,["info:class","advanced:dir","advanced:style"])
},setup:function(Q){for(var P in E){E[P].checkElementRemovable(Q,true)&&this.setValue(P)
}},commit:function(S){var R;
if(R=this.getValue()){var Q=E[R],P=S.getCustomData("elementStyle")||"";
Q.applyToObject(S);
S.setCustomData("elementStyle",P+Q._.definition.attributes.style)
}}},{id:"class",type:"text",label:O.lang.common.cssClass,"default":""}]}]},{id:"advanced",label:O.lang.common.advancedTab,title:O.lang.common.advancedTab,elements:[{type:"vbox",padding:1,children:[{type:"hbox",widths:["50%","50%"],children:[{type:"text",id:"id",label:O.lang.common.id,"default":""},{type:"text",id:"lang",label:O.lang.link.langCode,"default":""}]},{type:"hbox",children:[{type:"text",id:"style",style:"width: 100%;",label:O.lang.common.cssStyle,"default":"",commit:function(Q){var P=this.getValue()+(Q.getCustomData("elementStyle")||"");
Q.setAttribute("style",P)
}}]},{type:"hbox",children:[{type:"text",id:"title",style:"width: 100%;",label:O.lang.common.advisoryTitle,"default":""}]},{type:"select",id:"dir",style:"width: 100%;",label:O.lang.common.langDir,"default":"",items:[[O.lang.common.notSet,""],[O.lang.common.langDirLtr,"ltr"],[O.lang.common.langDirRtl,"rtl"]]}]}]}],onLoad:function(){J.call(this);
var Q=this,P=this.getContentElement("info","elementStyle");
O.getStylesSet(function(U){var T;
if(U){for(var S=0;
S<U.length;
S++){var R=U[S];
if(R.element&&R.element=="div"){T=R.name;
E[T]=new CKEDITOR.style(R);
P.items.push([T,T]);
P.add(T,T)
}}}P[P.items.length>1?"enable":"disable"]();
setTimeout(function(){P.setup(Q._element)
},0)
})
},onShow:function(){if(N=="editdiv"){var P=H(O);
P&&this.setupContent(this._element=P)
}},onOk:function(){if(N=="editdiv"){D=[this._element]
}else{D=I(O,true)
}var Q=D.length;
for(var P=0;
P<Q;
P++){this.commitContent(D[P]);
!D[P].getAttribute("style")&&D[P].removeAttribute("style")
}this.hide()
},onHide:function(){if(N=="editdiv"){this._element.removeCustomData("elementStyle")
}delete this._element
}}
}CKEDITOR.dialog.add("creatediv",function(D){return C(D,"creatediv")
});
CKEDITOR.dialog.add("editdiv",function(D){return C(D,"editdiv")
})
})();