(function(){var B={ol:1,ul:1},G=CKEDITOR.dom.walker.whitespaces(true),F=CKEDITOR.dom.walker.bookmark(false,true);
function E(I){if(I.editor.readOnly){return null
}var M=I.editor,L=I.data.path,O=L&&L.contains(B),N=L.block||L.blockLimit;
if(O){return this.setState(CKEDITOR.TRISTATE_OFF)
}if(!this.useIndentClasses&&this.name=="indent"){return this.setState(CKEDITOR.TRISTATE_OFF)
}if(!N){return this.setState(CKEDITOR.TRISTATE_DISABLED)
}if(this.useIndentClasses){var K=N.$.className.match(this.classNameRegex),J=0;
if(K){K=K[1];
J=this.indentClassMap[K]
}if((this.name=="outdent"&&!J)||(this.name=="indent"&&J==M.config.indentClasses.length)){return this.setState(CKEDITOR.TRISTATE_DISABLED)
}return this.setState(CKEDITOR.TRISTATE_OFF)
}else{var H=parseInt(N.getStyle(C(N)),10);
if(isNaN(H)){H=0
}if(H<=0){return this.setState(CKEDITOR.TRISTATE_DISABLED)
}return this.setState(CKEDITOR.TRISTATE_OFF)
}}function A(J,H){this.name=H;
this.useIndentClasses=J.config.indentClasses&&J.config.indentClasses.length>0;
if(this.useIndentClasses){this.classNameRegex=new RegExp("(?:^|\\s+)("+J.config.indentClasses.join("|")+")(?=$|\\s)");
this.indentClassMap={};
for(var I=0;
I<J.config.indentClasses.length;
I++){this.indentClassMap[J.config.indentClasses[I]]=I+1
}}this.startDisabled=H=="outdent"
}function C(I,H){return(H||I.getComputedStyle("direction"))=="ltr"?"margin-left":"margin-right"
}function D(H){return H.type==CKEDITOR.NODE_ELEMENT&&H.is("li")
}A.prototype={exec:function(K){var T=this,R={};
function Y(f){var v=S.startContainer,w=S.endContainer;
while(v&&!v.getParent().equals(f)){v=v.getParent()
}while(w&&!w.getParent().equals(f)){w=w.getParent()
}if(!v||!w){return 
}var o=v,n=[],s=false;
while(!s){if(o.equals(w)){s=true
}n.push(o);
o=o.getNext()
}if(n.length<1){return 
}var p=f.getParents(true);
for(var t=0;
t<p.length;
t++){if(p[t].getName&&B[p[t].getName()]){f=p[t];
break
}}var u=T.name=="indent"?1:-1,c=n[0],q=n[n.length-1];
var l=CKEDITOR.plugins.list.listToArray(f,R);
var a=l[q.getCustomData("listarray_index")].indent;
for(t=c.getCustomData("listarray_index");
t<=q.getCustomData("listarray_index");
t++){l[t].indent+=u;
var k=l[t].parent;
l[t].parent=new CKEDITOR.dom.element(k.getName(),k.getDocument())
}for(t=q.getCustomData("listarray_index")+1;
t<l.length&&l[t].indent>a;
t++){l[t].indent+=u
}var g=CKEDITOR.plugins.list.arrayToList(l,R,null,K.config.enterMode,f.getDirection());
if(T.name=="outdent"){var b;
if((b=f.getParent())&&b.is("li")){var e=g.listNode.getChildren(),j=[],m=e.count(),h;
for(t=m-1;
t>=0;
t--){if((h=e.getItem(t))&&h.is&&h.is("li")){j.push(h)
}}}}if(g){g.listNode.replace(f)
}if(j&&j.length){for(t=0;
t<j.length;
t++){var r=j[t],d=r;
while((d=d.getNext())&&d.is&&d.getName() in B){if(CKEDITOR.env.ie&&!r.getFirst(function(i){return G(i)&&F(i)
})){r.append(S.document.createText("\u00a0"))
}r.append(d)
}r.insertAfter(b)
}}}function H(){var b=S.createIterator(),a=K.config.enterMode;
b.enforceRealBlocks=true;
b.enlargeBr=a!=CKEDITOR.ENTER_BR;
var c;
while((c=b.getNextParagraph(a==CKEDITOR.ENTER_P?"p":"div"))){I(c)
}}function I(d,c){if(d.getCustomData("indent_processed")){return false
}if(T.useIndentClasses){var b=d.$.className.match(T.classNameRegex),a=0;
if(b){b=b[1];
a=T.indentClassMap[b]
}if(T.name=="outdent"){a--
}else{a++
}if(a<0){return false
}a=Math.min(a,K.config.indentClasses.length);
a=Math.max(a,0);
d.$.className=CKEDITOR.tools.ltrim(d.$.className.replace(T.classNameRegex,""));
if(a>0){d.addClass(K.config.indentClasses[a-1])
}}else{var g=C(d,c),f=parseInt(d.getStyle(g),10);
if(isNaN(f)){f=0
}var e=K.config.indentOffset||40;
f+=(T.name=="indent"?1:-1)*e;
if(f<0){return false
}f=Math.max(f,0);
f=Math.ceil(f/e)*e;
d.setStyle(g,f?f+(K.config.indentUnit||"px"):"");
if(d.getAttribute("style")===""){d.removeAttribute("style")
}}CKEDITOR.dom.element.setMarker(R,d,"indent_processed",1);
return true
}var Z=K.getSelection(),N=Z.createBookmarks(1),J=Z&&Z.getRanges(1),S;
var U=J.createIterator();
while((S=U.getNextRange())){var Q=S.getCommonAncestor(),O=Q;
while(O&&!(O.type==CKEDITOR.NODE_ELEMENT&&B[O.getName()])){O=O.getParent()
}if(!O){var W=S.getEnclosedNode();
if(W&&W.type==CKEDITOR.NODE_ELEMENT&&W.getName() in B){S.setStartAt(W,CKEDITOR.POSITION_AFTER_START);
S.setEndAt(W,CKEDITOR.POSITION_BEFORE_END);
O=W
}}if(O&&S.startContainer.type==CKEDITOR.NODE_ELEMENT&&S.startContainer.getName() in B){var V=new CKEDITOR.dom.walker(S);
V.evaluator=D;
S.startContainer=V.next()
}if(O&&S.endContainer.type==CKEDITOR.NODE_ELEMENT&&S.endContainer.getName() in B){V=new CKEDITOR.dom.walker(S);
V.evaluator=D;
S.endContainer=V.previous()
}if(O){var P=O.getFirst(D),L=!!P.getNext(D),X=S.startContainer,M=P.equals(X)||P.contains(X);
if(!(M&&(T.name=="indent"||T.useIndentClasses||parseInt(O.getStyle(C(O)),10))&&I(O,!L&&P.getDirection()))){Y(O)
}}else{H()
}}CKEDITOR.dom.element.clearAllMarkers(R);
K.forceNextSelectionCheck();
Z.selectBookmarks(N)
}};
CKEDITOR.plugins.add("indent",{init:function(I){var H=I.addCommand("indent",new A(I,"indent")),J=I.addCommand("outdent",new A(I,"outdent"));
I.ui.addButton("Indent",{label:I.lang.indent,command:"indent"});
I.ui.addButton("Outdent",{label:I.lang.outdent,command:"outdent"});
I.on("selectionChange",CKEDITOR.tools.bind(E,H));
I.on("selectionChange",CKEDITOR.tools.bind(E,J));
if(CKEDITOR.env.ie6Compat||CKEDITOR.env.ie7Compat){I.addCss("ul,ol{	margin-left: 0px;	padding-left: 40px;}")
}I.on("dirChanged",function(R){var P=new CKEDITOR.dom.range(I.document);
P.setStartBefore(R.data.node);
P.setEndAfter(R.data.node);
var K=new CKEDITOR.dom.walker(P),L;
while((L=K.next())){if(L.type==CKEDITOR.NODE_ELEMENT){if(!L.equals(R.data.node)&&L.getDirection()){P.setStartAfter(L);
K=new CKEDITOR.dom.walker(P);
continue
}var N=I.config.indentClasses;
if(N){var S=(R.data.dir=="ltr")?["_rtl",""]:["","_rtl"];
for(var O=0;
O<N.length;
O++){if(L.hasClass(N[O]+S[0])){L.removeClass(N[O]+S[0]);
L.addClass(N[O]+S[1])
}}}var M=L.getStyle("margin-right"),Q=L.getStyle("margin-left");
M?L.setStyle("margin-left",M):L.removeStyle("margin-left");
Q?L.setStyle("margin-right",Q):L.removeStyle("margin-right")
}}});
I.on("key",function(L){if(I.mode=="wysiwyg"&&L.data.keyCode==8){var N=I.getSelection(),M=N.getRanges()[0],K;
if(M.collapsed&&(K=M.startContainer.getAscendant("li",1))&&M.checkBoundaryOfElement(K,CKEDITOR.START)){I.execCommand("outdent");
L.cancel()
}}})
},requires:["domiterator","list"]})
})();