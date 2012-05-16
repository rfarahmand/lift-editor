(function(){function C(F,D,E){if(!D.is||!D.getCustomData("block_processed")){D.is&&CKEDITOR.dom.element.setMarker(E,D,"block_processed",true);
F.push(D)
}}function A(G){var D=[];
var F=G.getChildren();
for(var E=0;
E<F.count();
E++){var H=F.getItem(E);
if(!(H.type===CKEDITOR.NODE_TEXT&&(/^[ \t\n\r]+$/).test(H.getText()))){D.push(H)
}}return D
}function B(J,H){var I=(function(){var P=CKEDITOR.tools.extend({},CKEDITOR.dtd.$blockLimit);
delete P.div;
if(J.config.div_wrapTable){delete P.td;
delete P.th
}return P
})();
var D=CKEDITOR.dtd.div;
function K(R){var P=new CKEDITOR.dom.elementPath(R).elements;
var S;
for(var Q=0;
Q<P.length;
Q++){if(P[Q].getName() in I){S=P[Q];
break
}}return S
}function E(){this.foreach(function(P){if(/^(?!vbox|hbox)/.test(P.type)){if(!P.setup){P.setup=function(Q){P.setValue(Q.getAttribute(P.id)||"")
}
}if(!P.commit){P.commit=function(Q){var R=this.getValue();
if("dir"==P.id&&Q.getComputedStyle("direction")==R){return 
}if(R){Q.setAttribute(P.id,R)
}else{Q.removeAttribute(P.id)
}}
}}})
}function L(S){var a=[];
var Y={};
var d=[],V;
var h=S.document.getSelection(),Q=h.getRanges();
var T=h.createBookmarks();
var e,b;
var f=S.config.enterMode==CKEDITOR.ENTER_DIV?"div":"p";
for(e=0;
e<Q.length;
e++){b=Q[e].createIterator();
while((V=b.getNextParagraph())){if(V.getName() in I){var c,P=V.getChildren();
for(c=0;
c<P.count();
c++){C(d,P.getItem(c),Y)
}}else{while(!D[V.getName()]&&V.getName()!="body"){V=V.getParent()
}C(d,V,Y)
}}}CKEDITOR.dom.element.clearAllMarkers(Y);
var U=N(d);
var g,Z,X;
for(e=0;
e<U.length;
e++){var R=U[e][0];
g=R.getParent();
for(c=1;
c<U[e].length;
c++){g=g.getCommonAncestor(U[e][c])
}X=new CKEDITOR.dom.element("div",S.document);
for(c=0;
c<U[e].length;
c++){R=U[e][c];
while(!R.getParent().equals(g)){R=R.getParent()
}U[e][c]=R
}var W=null;
for(c=0;
c<U[e].length;
c++){R=U[e][c];
if(!(R.getCustomData&&R.getCustomData("block_processed"))){R.is&&CKEDITOR.dom.element.setMarker(Y,R,"block_processed",true);
if(!c){X.insertBefore(R)
}X.append(R)
}}CKEDITOR.dom.element.clearAllMarkers(Y);
a.push(X)
}h.selectBookmarks(T);
return a
}function M(Q){var R=new CKEDITOR.dom.elementPath(Q.getSelection().getStartElement()),P=R.blockLimit,S=P&&P.getAscendant("div",true);
return S
}function N(R){var P=[],V=null,T,U;
for(var S=0;
S<R.length;
S++){U=R[S];
var Q=K(U);
if(!Q.equals(V)){V=Q;
P.push([])
}P[P.length-1].push(U)
}return P
}function G(P){var S=this.getDialog(),R=S._element&&S._element.clone()||new CKEDITOR.dom.element("div",J.document);
this.commit(R,true);
P=[].concat(P);
var T=P.length,U;
for(var Q=0;
Q<T;
Q++){U=S.getContentElement.apply(S,P[Q].split(":"));
U&&U.setup&&U.setup(R,true)
}}var O={};
var F=[];
return{title:J.lang.div.title,minWidth:400,minHeight:165,contents:[{id:"info",label:J.lang.common.generalTab,title:J.lang.common.generalTab,elements:[{type:"hbox",widths:["50%","50%"],children:[{id:"elementStyle",type:"select",style:"width: 100%;",label:J.lang.div.styleSelectLabel,"default":"",items:[[J.lang.common.notSet,""]],onChange:function(){G.call(this,["info:class","advanced:dir","advanced:style"])
},setup:function(Q){for(var P in O){O[P].checkElementRemovable(Q,true)&&this.setValue(P)
}},commit:function(Q){var P;
if((P=this.getValue())){var R=O[P];
var S=Q.getCustomData("elementStyle")||"";
R.applyToObject(Q);
Q.setCustomData("elementStyle",S+R._.definition.attributes.style)
}}},{id:"class",type:"text",label:J.lang.common.cssClass,"default":""}]}]},{id:"advanced",label:J.lang.common.advancedTab,title:J.lang.common.advancedTab,elements:[{type:"vbox",padding:1,children:[{type:"hbox",widths:["50%","50%"],children:[{type:"text",id:"id",label:J.lang.common.id,"default":""},{type:"text",id:"lang",label:J.lang.link.langCode,"default":""}]},{type:"hbox",children:[{type:"text",id:"style",style:"width: 100%;",label:J.lang.common.cssStyle,"default":"",commit:function(Q){var P=this.getValue()+(Q.getCustomData("elementStyle")||"");
Q.setAttribute("style",P)
}}]},{type:"hbox",children:[{type:"text",id:"title",style:"width: 100%;",label:J.lang.common.advisoryTitle,"default":""}]},{type:"select",id:"dir",style:"width: 100%;",label:J.lang.common.langDir,"default":"",items:[[J.lang.common.notSet,""],[J.lang.common.langDirLtr,"ltr"],[J.lang.common.langDirRtl,"rtl"]]}]}]}],onLoad:function(){E.call(this);
var Q=this,P=this.getContentElement("info","elementStyle");
J.getStylesSet(function(U){var S;
if(U){for(var R=0;
R<U.length;
R++){var T=U[R];
if(T.element&&T.element=="div"){S=T.name;
O[S]=new CKEDITOR.style(T);
P.items.push([S,S]);
P.add(S,S)
}}}P[P.items.length>1?"enable":"disable"]();
setTimeout(function(){P.setup(Q._element)
},0)
})
},onShow:function(){if(H=="editdiv"){var P=M(J);
P&&this.setupContent(this._element=P)
}},onOk:function(){if(H=="editdiv"){F=[this._element]
}else{F=L(J,true)
}var Q=F.length;
for(var P=0;
P<Q;
P++){this.commitContent(F[P]);
!F[P].getAttribute("style")&&F[P].removeAttribute("style")
}this.hide()
},onHide:function(){if(H=="editdiv"){this._element.removeCustomData("elementStyle")
}delete this._element
}}
}CKEDITOR.dialog.add("creatediv",function(D){return B(D,"creatediv")
});
CKEDITOR.dialog.add("editdiv",function(D){return B(D,"editdiv")
})
})();