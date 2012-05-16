(function(){var T=CKEDITOR.htmlParser.fragment.prototype,S=CKEDITOR.htmlParser.element.prototype;
T.onlyChild=S.onlyChild=function(){var W=this.children,V=W.length,U=V==1&&W[0];
return U||null
};
S.removeAnyChildWithName=function(X){var W=this.children,V=[],U;
for(var Y=0;
Y<W.length;
Y++){U=W[Y];
if(!U.name){continue
}if(U.name==X){V.push(U);
W.splice(Y--,1)
}V=V.concat(U.removeAnyChildWithName(X))
}return V
};
S.getAncestor=function(V){var U=this.parent;
while(U&&!(U.name&&U.name.match(V))){U=U.parent
}return U
};
T.firstChild=S.firstChild=function(W){var V;
for(var U=0;
U<this.children.length;
U++){V=this.children[U];
if(W(V)){return V
}else{if(V.name){V=V.firstChild(W);
if(V){return V
}}}}return null
};
S.addStyle=function(Y,X,W){var V=this;
var U,a="";
if(typeof X=="string"){a+=Y+":"+X+";"
}else{if(typeof Y=="object"){for(var Z in Y){if(Y.hasOwnProperty(Z)){a+=Z+":"+Y[Z]+";"
}}}else{a+=Y
}W=X
}if(!V.attributes){V.attributes={}
}U=V.attributes.style||"";
U=(W?[a,U]:[U,a]).join(";");
V.attributes.style=U.replace(/^;|;(?=;)/,"")
};
CKEDITOR.dtd.parentOf=function(W){var V={};
for(var U in this){if(U.indexOf("$")==-1&&this[U][W]){V[U]=1
}}return V
};
function R(d){var c=d.children,b,a,Z=d.children.length,Y,X,W=/list-style-type:(.*?)(?:;|$)/,V=CKEDITOR.plugins.pastefromword.filters.stylesFilter;
a=d.attributes;
if(W.exec(a.style)){return 
}for(var U=0;
U<Z;
U++){b=c[U];
if(b.attributes.value&&Number(b.attributes.value)==U+1){delete b.attributes.value
}Y=W.exec(b.attributes.style);
if(Y){if(Y[1]==X||!X){X=Y[1]
}else{X=null;
break
}}}if(X){for(U=0;
U<Z;
U++){a=c[U].attributes;
a.style&&(a.style=V([["list-style-type"]])(a.style)||"")
}d.addStyle("list-style-type",X)
}}var Q=/^([.\d]*)+(em|ex|px|gd|rem|vw|vh|vm|ch|mm|cm|in|pt|pc|deg|rad|ms|s|hz|khz){1}?/i,P=/^(?:\b0[^\s]*\s*){1,4}$/,O="^m{0,4}(cm|cd|d?c{0,3})(xc|xl|l?x{0,3})(ix|iv|v?i{0,3})$",N=new RegExp(O),M=new RegExp(O.toUpperCase()),L={decimal:/\d+/,"lower-roman":N,"upper-roman":M,"lower-alpha":/^[a-z]+$/,"upper-alpha":/^[A-Z]+$/},K={disc:/[l\u00B7\u2002]/,circle:/[\u006F\u00D8]/,square:/[\u006E\u25C6]/},J={ol:L,ul:K},I=[[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]],H="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function G(X){X=X.toUpperCase();
var W=I.length,V=0;
for(var U=0;
U<W;
++U){for(var Z=I[U],Y=Z[1].length;
X.substr(0,Y)==Z[1];
X=X.substr(Y)){V+=Z[0]
}}return V
}function F(X){X=X.toUpperCase();
var W=H.length,V=1;
for(var U=1;
X.length>0;
U*=W){V+=H.indexOf(X.charAt(X.length-1))*U;
X=X.substr(0,X.length-1)
}return V
}var E=0,D=null,C,B=CKEDITOR.plugins.pastefromword={utils:{createListBulletMarker:function(W,V){var U=new CKEDITOR.htmlParser.element("cke:listbullet");
U.attributes={"cke:listsymbol":W[0]};
U.add(new CKEDITOR.htmlParser.text(V));
return U
},isListBulletIndicator:function(V){var U=V.attributes&&V.attributes.style;
if(/mso-list\s*:\s*Ignore/i.test(U)){return true
}},isContainingOnlySpaces:function(V){var U;
return(U=V.onlyChild())&&/^(:?\s|&nbsp;)+$/.test(U.value)
},resolveList:function(W){var V=W.attributes,U;
if((U=W.removeAnyChildWithName("cke:listbullet"))&&U.length&&(U=U[0])){W.name="cke:li";
if(V.style){V.style=B.filters.stylesFilter([["text-indent"],["line-height"],[/^margin(:?-left)?$/,null,function(X){var Y=X.split(" ");
X=CKEDITOR.tools.convertToPx(Y[3]||Y[1]||Y[0]);
if(!E&&D!==null&&X>D){E=X-D
}D=X;
V["cke:indent"]=E&&Math.ceil(X/E)+1||1
}],[/^mso-list$/,null,function(X){X=X.split(" ");
var Z=Number(X[0].match(/\d+/)),Y=Number(X[1].match(/\d+/));
if(Y==1){Z!==C&&(V["cke:reset"]=1);
C=Z
}V["cke:indent"]=Y
}]])(V.style,W)||""
}if(!V["cke:indent"]){D=0;
V["cke:indent"]=1
}CKEDITOR.tools.extend(V,U.attributes);
return true
}else{C=D=E=null
}return false
},getStyleComponents:(function(){var U=CKEDITOR.dom.element.createFromHtml('<div style="position:absolute;left:-9999px;top:-9999px;"></div>',CKEDITOR.document);
CKEDITOR.document.getBody().append(U);
return function(Y,X,W){U.setStyle(Y,X);
var a={},Z=W.length;
for(var V=0;
V<Z;
V++){a[W[V]]=U.getStyle(W[V])
}return a
}
})(),listDtdParents:CKEDITOR.dtd.parentOf("ol")},filters:{flattenList:function(e,c){c=typeof c=="number"?c:1;
var b=e.attributes,a;
switch(b.type){case"a":a="lower-alpha";
break;
case"1":a="decimal";
break
}var Z=e.children,Y;
for(var X=0;
X<Z.length;
X++){Y=Z[X];
if(Y.name in CKEDITOR.dtd.$listItem){var W=Y.attributes,V=Y.children,U=V.length,g=V[U-1];
if(g.name in CKEDITOR.dtd.$list){e.add(g,X+1);
if(!--V.length){Z.splice(X--,1)
}}Y.name="cke:li";
b.start&&!X&&(W.value=b.start);
B.filters.stylesFilter([["tab-stops",null,function(i){var h=i.split(" ")[1].match(Q);
h&&(D=CKEDITOR.tools.convertToPx(h[0]))
}],c==1?["mso-list",null,function(i){i=i.split(" ");
var h=Number(i[0].match(/\d+/));
h!==C&&(W["cke:reset"]=1);
C=h
}]:null])(W.style);
W["cke:indent"]=c;
W["cke:listtype"]=e.name;
W["cke:list-style-type"]=a
}else{if(Y.name in CKEDITOR.dtd.$list){arguments.callee.apply(this,[Y,c+1]);
Z=Z.slice(0,X).concat(Y.children).concat(Z.slice(X+1));
e.children=[];
for(var f=0,d=Z.length;
f<d;
f++){e.add(Z[f])
}}}}delete e.name;
b["cke:list"]=1
},assembleList:function(k){var i=k.children,g,e,c,a,p,o,n,m=[],l,j,h,f,d,b;
for(var Z=0;
Z<i.length;
Z++){g=i[Z];
if("cke:li"==g.name){g.name="li";
e=g;
c=e.attributes;
h=c["cke:listsymbol"];
h=h&&h.match(/^(?:[(]?)([^\s]+?)([.)]?)$/);
f=d=b=null;
if(c["cke:ignored"]){i.splice(Z--,1);
continue
}c["cke:reset"]&&(n=p=o=null);
a=Number(c["cke:indent"]);
if(a!=p){j=l=null
}if(!h){f=c["cke:listtype"]||"ol";
d=c["cke:list-style-type"]
}else{if(j&&J[j][l].test(h[1])){f=j;
d=l
}else{for(var Y in J){for(var X in J[Y]){if(J[Y][X].test(h[1])){if(Y=="ol"&&/alpha|roman/.test(X)){var W=/roman/.test(X)?G(h[1]):F(h[1]);
if(!b||W<b){b=W;
f=Y;
d=X
}}else{f=Y;
d=X;
break
}}}}}!f&&(f=h[2]?"ol":"ul")
}j=f;
l=d||(f=="ol"?"decimal":"disc");
if(d&&d!=(f=="ol"?"decimal":"disc")){e.addStyle("list-style-type",d)
}if(f=="ol"&&h){switch(d){case"decimal":b=Number(h[1]);
break;
case"lower-roman":case"upper-roman":b=G(h[1]);
break;
case"lower-alpha":case"upper-alpha":b=F(h[1]);
break
}e.attributes.value=b
}if(!n){m.push(n=new CKEDITOR.htmlParser.element(f));
n.add(e);
i[Z]=n
}else{if(a>p){m.push(n=new CKEDITOR.htmlParser.element(f));
n.add(e);
o.add(n)
}else{if(a<p){var V=p-a,U;
while(V--&&(U=n.parent)){n=U.parent
}n.add(e)
}else{n.add(e)
}}i.splice(Z--,1)
}o=e;
p=a
}else{if(n){n=p=o=null
}}}for(Z=0;
Z<m.length;
Z++){R(m[Z])
}n=p=o=C=D=E=null
},falsyFilter:function(U){return false
},stylesFilter:function(V,U){return function(X,W){var Z=[];
(X||"").replace(/&quot;/g,'"').replace(/\s*([^ :;]+)\s*:\s*([^;]+)\s*(?=;|$)/g,function(a,h,g){h=h.toLowerCase();
h=="font-family"&&(g=g.replace(/["']/g,""));
var f,e,d,c;
for(var b=0;
b<V.length;
b++){if(V[b]){f=V[b][0];
e=V[b][1];
d=V[b][2];
c=V[b][3];
if(h.match(f)&&(!e||g.match(e))){h=c||h;
U&&(d=d||g);
if(typeof d=="function"){d=d(g,W,h)
}if(d&&d.push){h=d[0],d=d[1]
}if(typeof d=="string"){Z.push([h,d])
}return 
}}}!U&&Z.push([h,g])
});
for(var Y=0;
Y<Z.length;
Y++){Z[Y]=Z[Y].join(":")
}return Z.length?Z.join(";")+";":false
}
},elementMigrateFilter:function(V,U){return function(X){var W=U?new CKEDITOR.style(V,U)._.definition:V;
X.name=W.element;
CKEDITOR.tools.extend(X.attributes,CKEDITOR.tools.clone(W.attributes));
X.addStyle(CKEDITOR.style.getStyleText(W))
}
},styleMigrateFilter:function(W,V){var U=this.elementMigrateFilter;
return function(Y,a){var Z=new CKEDITOR.htmlParser.element(null),X={};
X[V]=Y;
U(W,X)(Z);
Z.children=a.children;
a.children=[Z]
}
},bogusAttrFilter:function(V,U){if(U.name.indexOf("cke:")==-1){return false
}},applyStyleFilter:null},getRules:function(i){var g=CKEDITOR.dtd,e=CKEDITOR.tools.extend({},g.$block,g.$listItem,g.$tableContent),c=i.config,a=this.filters,Y=a.falsyFilter,n=a.stylesFilter,m=a.elementMigrateFilter,l=CKEDITOR.tools.bind(this.filters.styleMigrateFilter,this.filters),k=this.utils.createListBulletMarker,j=a.flattenList,h=a.assembleList,f=this.utils.isListBulletIndicator,d=this.utils.isContainingOnlySpaces,b=this.utils.resolveList,Z=function(o){o=CKEDITOR.tools.convertToPx(o);
return isNaN(o)?o:o+"px"
},X=this.utils.getStyleComponents,W=this.utils.listDtdParents,V=c.pasteFromWordRemoveFontStyles!==false,U=c.pasteFromWordRemoveStyles!==false;
return{elementNames:[[/meta|link|script/,""]],root:function(o){o.filterChildren();
h(o)
},elements:{"^":function(p){var o;
if(CKEDITOR.env.gecko&&(o=a.applyStyleFilter)){o(p)
}},$:function(r){var q=r.name||"",p=r.attributes;
if(q in e&&p.style){p.style=n([[/^(:?width|height)$/,null,Z]])(p.style)||""
}if(q.match(/h\d/)){r.filterChildren();
if(b(r)){return 
}m(c["format_"+q])(r)
}else{if(q in g.$inline){r.filterChildren();
if(d(r)){delete r.name
}}else{if(q.indexOf(":")!=-1&&q.indexOf("cke")==-1){r.filterChildren();
if(q=="v:imagedata"){var o=r.attributes["o:href"];
if(o){r.attributes.src=o
}r.name="img";
return 
}delete r.name
}}}if(q in W){r.filterChildren();
h(r)
}},style:function(r){if(CKEDITOR.env.gecko){var q=r.onlyChild().value.match(/\/\* Style Definitions \*\/([\s\S]*?)\/\*/),p=q&&q[1],o={};
if(p){p.replace(/[\n\r]/g,"").replace(/(.+?)\{(.+?)\}/g,function(w,v,u){v=v.split(",");
var t=v.length,s;
for(var x=0;
x<t;
x++){CKEDITOR.tools.trim(v[x]).replace(/^(\w+)(\.[\w-]+)?$/g,function(AA,z,y){z=z||"*";
y=y.substring(1,y.length);
if(y.match(/MsoNormal/)){return 
}if(!o[z]){o[z]={}
}if(y){o[z][y]=u
}else{o[z]=u
}})
}});
a.applyStyleFilter=function(v){var u=o["*"]?"*":v.name,t=v.attributes&&v.attributes["class"],s;
if(u in o){s=o[u];
if(typeof s=="object"){s=s[t]
}s&&v.addStyle(s,true)
}}
}}return false
},p:function(r){if(/MsoListParagraph/.exec(r.attributes["class"])){var q=r.firstChild(function(s){return s.type==CKEDITOR.NODE_TEXT&&!d(s.parent)
}),p=q&&q.parent,o=p&&p.attributes;
o&&!o.style&&(o.style="mso-list: Ignore;")
}r.filterChildren();
if(b(r)){return 
}if(c.enterMode==CKEDITOR.ENTER_BR){delete r.name;
r.add(new CKEDITOR.htmlParser.element("br"))
}else{m(c["format_"+(c.enterMode==CKEDITOR.ENTER_P?"p":"div")])(r)
}},div:function(r){var q=r.onlyChild();
if(q&&q.name=="table"){var p=r.attributes;
q.attributes=CKEDITOR.tools.extend(q.attributes,p);
p.style&&q.addStyle(p.style);
var o=new CKEDITOR.htmlParser.element("div");
o.addStyle("clear","both");
r.add(o);
delete r.name
}},td:function(o){if(o.getAncestor("thead")){o.name="th"
}},ol:j,ul:j,dl:j,font:function(r){if(f(r.parent)){delete r.name;
return 
}r.filterChildren();
var q=r.attributes,p=q.style,o=r.parent;
if("font"==o.name){CKEDITOR.tools.extend(o.attributes,r.attributes);
p&&o.addStyle(p);
delete r.name
}else{p=p||"";
if(q.color){q.color!="#000000"&&(p+="color:"+q.color+";");
delete q.color
}if(q.face){p+="font-family:"+q.face+";";
delete q.face
}if(q.size){p+="font-size:"+(q.size>3?"large":q.size<3?"small":"medium")+";";
delete q.size
}r.name="span";
r.addStyle(p)
}},span:function(x){if(f(x.parent)){return false
}x.filterChildren();
if(d(x)){delete x.name;
return null
}if(f(x)){var w=x.firstChild(function(y){return y.value||y.name=="img"
}),v=w&&(w.value||"l."),u=v&&v.match(/^(?:[(]?)([^\s]+?)([.)]?)$/);
if(u){var t=k(u,v),s=x.getAncestor("span");
if(s&&/ mso-hide:\s*all|display:\s*none /.test(s.attributes.style)){t.attributes["cke:ignored"]=1
}return t
}}var r=x.children,q=x.attributes,p=q&&q.style,o=r&&r[0];
if(p){q.style=n([["line-height"],[/^font-family$/,null,!V?l(c.font_style,"family"):null],[/^font-size$/,null,!V?l(c.fontSize_style,"size"):null],[/^color$/,null,!V?l(c.colorButton_foreStyle,"color"):null],[/^background-color$/,null,!V?l(c.colorButton_backStyle,"color"):null]])(p,x)||""
}return null
},b:m(c.coreStyles_bold),i:m(c.coreStyles_italic),u:m(c.coreStyles_underline),s:m(c.coreStyles_strike),sup:m(c.coreStyles_superscript),sub:m(c.coreStyles_subscript),a:function(p){var o=p.attributes;
if(o&&!o.href&&o.name){delete p.name
}else{if(CKEDITOR.env.webkit&&o.href&&o.href.match(/file:\/\/\/[\S]+#/i)){o.href=o.href.replace(/file:\/\/\/[^#]+/i,"")
}}},"cke:listbullet":function(o){if(o.getAncestor(/h\d/)&&!c.pasteFromWordNumberedHeadingToList){delete o.name
}}},attributeNames:[[/^onmouse(:?out|over)/,""],[/^onload$/,""],[/(?:v|o):\w+/,""],[/^lang/,""]],attributes:{style:n(U?[[/^list-style-type$/,null],[/^margin$|^margin-(?!bottom|top)/,null,function(r,q,p){if(q.name in {p:1,div:1}){var o=c.contentsLangDirection=="ltr"?"margin-left":"margin-right";
if(p=="margin"){r=X(p,r,[o])[o]
}else{if(p!=o){return null
}}if(r&&!P.test(r)){return[o,r]
}}return null
}],[/^clear$/],[/^border.*|margin.*|vertical-align|float$/,null,function(p,o){if(o.name=="img"){return p
}}],[/^width|height$/,null,function(p,o){if(o.name in {table:1,td:1,th:1,img:1}){return p
}}]]:[[/^mso-/],[/-color$/,null,function(o){if(o=="transparent"){return false
}if(CKEDITOR.env.gecko){return o.replace(/-moz-use-text-color/g,"transparent")
}}],[/^margin$/,P],["text-indent","0cm"],["page-break-before"],["tab-stops"],["display","none"],V?[/font-?/]:null],U),width:function(p,o){if(o.name in g.$tableContent){return false
}},border:function(p,o){if(o.name in g.$tableContent){return false
}},"class":Y,bgcolor:Y,valign:U?Y:function(p,o){o.addStyle("vertical-align",p);
return false
}},comment:!CKEDITOR.env.ie?function(x,w){var v=x.match(/<img.*?>/),u=x.match(/^\[if !supportLists\]([\s\S]*?)\[endif\]$/);
if(u){var t=u[1]||v&&"l.",s=t&&t.match(/>(?:[(]?)([^\s]+?)([.)]?)</);
return k(s,t)
}if(CKEDITOR.env.gecko&&v){var r=CKEDITOR.htmlParser.fragment.fromHtml(v[0]).children[0],q=w.previous,p=q&&q.value.match(/<v:imagedata[^>]*o:href=['"](.*?)['"]/),o=p&&p[1];
o&&(r.attributes.src=o);
return r
}return false
}:Y}
}},A=function(){this.dataFilter=new CKEDITOR.htmlParser.filter()
};
A.prototype={toHtml:function(W){var V=CKEDITOR.htmlParser.fragment.fromHtml(W,false),U=new CKEDITOR.htmlParser.basicWriter();
V.writeHtml(U,this.dataFilter);
return U.getHtml(true)
}};
CKEDITOR.cleanWord=function(X,W){if(CKEDITOR.env.gecko){X=X.replace(/(<!--\[if[^<]*?\])-->([\S\s]*?)<!--(\[endif\]-->)/gi,"$1$2$3")
}var V=new A(),U=V.dataFilter;
U.addRules(CKEDITOR.plugins.pastefromword.getRules(W));
W.fire("beforeCleanWord",{filter:U});
try{X=V.toHtml(X,false)
}catch(Y){alert(W.lang.pastefromword.error)
}X=X.replace(/cke:.*?".*?"/g,"");
X=X.replace(/style=""/g,"");
X=X.replace(/<span>/g,"");
return X
}
})();