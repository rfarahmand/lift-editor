(function(){var J=CKEDITOR.htmlParser.fragment.prototype,E=CKEDITOR.htmlParser.element.prototype;
J.onlyChild=E.onlyChild=function(){var U=this.children,V=U.length,W=(V==1)&&U[0];
return W||null
};
E.removeAnyChildWithName=function(W){var V=this.children,X=[],Y;
for(var U=0;
U<V.length;
U++){Y=V[U];
if(!Y.name){continue
}if(Y.name==W){X.push(Y);
V.splice(U--,1)
}X=X.concat(Y.removeAnyChildWithName(W))
}return X
};
E.getAncestor=function(U){var V=this.parent;
while(V&&!(V.name&&V.name.match(U))){V=V.parent
}return V
};
J.firstChild=E.firstChild=function(W){var V;
for(var U=0;
U<this.children.length;
U++){V=this.children[U];
if(W(V)){return V
}else{if(V.name){V=V.firstChild(W);
if(V){return V
}}}}return null
};
E.addStyle=function(U,Y,X){var Z,V="";
if(typeof Y=="string"){V+=U+":"+Y+";"
}else{if(typeof U=="object"){for(var W in U){if(U.hasOwnProperty(W)){V+=W+":"+U[W]+";"
}}}else{V+=U
}X=Y
}if(!this.attributes){this.attributes={}
}Z=this.attributes.style||"";
Z=(X?[V,Z]:[Z,V]).join(";");
this.attributes.style=Z.replace(/^;|;(?=;)/,"")
};
CKEDITOR.dtd.parentOf=function(W){var V={};
for(var U in this){if(U.indexOf("$")==-1&&this[U][W]){V[U]=1
}}return V
};
function D(a){var V=a.children,U,c,Z=a.children.length,Y,b,d=/list-style-type:(.*?)(?:;|$)/,X=CKEDITOR.plugins.pastefromword.filters.stylesFilter;
c=a.attributes;
if(d.exec(c.style)){return 
}for(var W=0;
W<Z;
W++){U=V[W];
if(U.attributes.value&&Number(U.attributes.value)==W+1){delete U.attributes.value
}Y=d.exec(U.attributes.style);
if(Y){if(Y[1]==b||!b){b=Y[1]
}else{b=null;
break
}}}if(b){for(W=0;
W<Z;
W++){c=V[W].attributes;
c.style&&(c.style=X([["list-style-type"]])(c.style)||"")
}a.addStyle("list-style-type",b)
}}var P=/^([.\d]*)+(em|ex|px|gd|rem|vw|vh|vm|ch|mm|cm|in|pt|pc|deg|rad|ms|s|hz|khz){1}?/i;
var S=/^(?:\b0[^\s]*\s*){1,4}$/;
var I="^m{0,4}(cm|cd|d?c{0,3})(xc|xl|l?x{0,3})(ix|iv|v?i{0,3})$",K=new RegExp(I),A=new RegExp(I.toUpperCase());
var M={decimal:/\d+/,"lower-roman":K,"upper-roman":A,"lower-alpha":/^[a-z]+$/,"upper-alpha":/^[A-Z]+$/},L={disc:/[l\u00B7\u2002]/,circle:/[\u006F\u00D8]/,square:/[\u006E\u25C6]/},T={ol:M,ul:L},F=[[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]],G="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Q(Z){Z=Z.toUpperCase();
var U=F.length,Y=0;
for(var X=0;
X<U;
++X){for(var W=F[X],V=W[1].length;
Z.substr(0,V)==W[1];
Z=Z.substr(V)){Y+=W[0]
}}return Y
}function N(X){X=X.toUpperCase();
var V=G.length,W=1;
for(var U=1;
X.length>0;
U*=V){W+=G.indexOf(X.charAt(X.length-1))*U;
X=X.substr(0,X.length-1)
}return W
}var O=0,H=null,C;
var B=(CKEDITOR.plugins.pastefromword={utils:{createListBulletMarker:function(V,W){var U=new CKEDITOR.htmlParser.element("cke:listbullet");
U.attributes={"cke:listsymbol":V[0]};
U.add(new CKEDITOR.htmlParser.text(W));
return U
},isListBulletIndicator:function(U){var V=U.attributes&&U.attributes.style;
if(/mso-list\s*:\s*Ignore/i.test(V)){return true
}},isContainingOnlySpaces:function(U){var V;
return((V=U.onlyChild())&&(/^(:?\s|&nbsp;)+$/).test(V.value))
},resolveList:function(W){var U=W.attributes,V;
if((V=W.removeAnyChildWithName("cke:listbullet"))&&V.length&&(V=V[0])){W.name="cke:li";
if(U.style){U.style=B.filters.stylesFilter([["text-indent"],["line-height"],[(/^margin(:?-left)?$/),null,function(Y){var X=Y.split(" ");
Y=CKEDITOR.tools.convertToPx(X[3]||X[1]||X[0]);
if(!O&&H!==null&&Y>H){O=Y-H
}H=Y;
U["cke:indent"]=O&&(Math.ceil(Y/O)+1)||1
}],[(/^mso-list$/),null,function(Z){Z=Z.split(" ");
var Y=Number(Z[0].match(/\d+/)),X=Number(Z[1].match(/\d+/));
if(X==1){Y!==C&&(U["cke:reset"]=1);
C=Y
}U["cke:indent"]=X
}]])(U.style,W)||""
}if(!U["cke:indent"]){H=0;
U["cke:indent"]=1
}CKEDITOR.tools.extend(U,V.attributes);
return true
}else{C=H=O=null
}return false
},getStyleComponents:(function(){var U=CKEDITOR.dom.element.createFromHtml('<div style="position:absolute;left:-9999px;top:-9999px;"></div>',CKEDITOR.document);
CKEDITOR.document.getBody().append(U);
return function(X,V,W){U.setStyle(X,V);
var a={},Z=W.length;
for(var Y=0;
Y<Z;
Y++){a[W[Y]]=U.getStyle(W[Y])
}return a
}
})(),listDtdParents:CKEDITOR.dtd.parentOf("ol")},filters:{flattenList:function(a,U){U=typeof U=="number"?U:1;
var g=a.attributes,b;
switch(g.type){case"a":b="lower-alpha";
break;
case"1":b="decimal";
break
}var X=a.children,W;
for(var c=0;
c<X.length;
c++){W=X[c];
if(W.name in CKEDITOR.dtd.$listItem){var Z=W.attributes,V=W.children,e=V.length,f=V[e-1];
if(f.name in CKEDITOR.dtd.$list){a.add(f,c+1);
if(!--V.length){X.splice(c--,1)
}}W.name="cke:li";
g.start&&!c&&(Z.value=g.start);
B.filters.stylesFilter([["tab-stops",null,function(i){var h=i.split(" ")[1].match(P);
h&&(H=CKEDITOR.tools.convertToPx(h[0]))
}],(U==1?["mso-list",null,function(i){i=i.split(" ");
var h=Number(i[0].match(/\d+/));
h!==C&&(Z["cke:reset"]=1);
C=h
}]:null)])(Z.style);
Z["cke:indent"]=U;
Z["cke:listtype"]=a.name;
Z["cke:list-style-type"]=b
}else{if(W.name in CKEDITOR.dtd.$list){arguments.callee.apply(this,[W,U+1]);
X=X.slice(0,c).concat(W.children).concat(X.slice(c+1));
a.children=[];
for(var Y=0,d=X.length;
Y<d;
Y++){a.add(X[Y])
}}}}delete a.name;
g["cke:list"]=1
},assembleList:function(V){var Z=V.children,a,d,e,Y,g,W,n,q=[],o,m;
var p,l,h,U;
for(var j=0;
j<Z.length;
j++){a=Z[j];
if("cke:li"==a.name){a.name="li";
d=a;
e=d.attributes;
p=e["cke:listsymbol"];
p=p&&p.match(/^(?:[(]?)([^\s]+?)([.)]?)$/);
l=h=U=null;
if(e["cke:ignored"]){Z.splice(j--,1);
continue
}e["cke:reset"]&&(n=g=W=null);
Y=Number(e["cke:indent"]);
if(Y!=g){m=o=null
}if(!p){l=e["cke:listtype"]||"ol";
h=e["cke:list-style-type"]
}else{if(m&&T[m][o].test(p[1])){l=m;
h=o
}else{for(var X in T){for(var k in T[X]){if(T[X][k].test(p[1])){if(X=="ol"&&(/alpha|roman/).test(k)){var b=/roman/.test(k)?Q(p[1]):N(p[1]);
if(!U||b<U){U=b;
l=X;
h=k
}}else{l=X;
h=k;
break
}}}}}!l&&(l=p[2]?"ol":"ul")
}m=l;
o=h||(l=="ol"?"decimal":"disc");
if(h&&h!=(l=="ol"?"decimal":"disc")){d.addStyle("list-style-type",h)
}if(l=="ol"&&p){switch(h){case"decimal":U=Number(p[1]);
break;
case"lower-roman":case"upper-roman":U=Q(p[1]);
break;
case"lower-alpha":case"upper-alpha":U=N(p[1]);
break
}d.attributes.value=U
}if(!n){q.push(n=new CKEDITOR.htmlParser.element(l));
n.add(d);
Z[j]=n
}else{if(Y>g){q.push(n=new CKEDITOR.htmlParser.element(l));
n.add(d);
W.add(n)
}else{if(Y<g){var f=g-Y,c;
while(f--&&(c=n.parent)){n=c.parent
}n.add(d)
}else{n.add(d)
}}Z.splice(j--,1)
}W=d;
g=Y
}else{if(n){n=g=W=null
}}}for(j=0;
j<q.length;
j++){D(q[j])
}n=g=W=C=H=O=null
},falsyFilter:function(U){return false
},stylesFilter:function(V,U){return function(Z,X){var Y=[];
(Z||"").replace(/&quot;/g,'"').replace(/\s*([^ :;]+)\s*:\s*([^;]+)\s*(?=;|$)/g,function(d,c,g){c=c.toLowerCase();
c=="font-family"&&(g=g.replace(/["']/g,""));
var f,b,h,a;
for(var e=0;
e<V.length;
e++){if(V[e]){f=V[e][0];
b=V[e][1];
h=V[e][2];
a=V[e][3];
if(c.match(f)&&(!b||g.match(b))){c=a||c;
U&&(h=h||g);
if(typeof h=="function"){h=h(g,X,c)
}if(h&&h.push){c=h[0],h=h[1]
}if(typeof h=="string"){Y.push([c,h])
}return 
}}}!U&&Y.push([c,g])
});
for(var W=0;
W<Y.length;
W++){Y[W]=Y[W].join(":")
}return Y.length?(Y.join(";")+";"):false
}
},elementMigrateFilter:function(U,V){return function(W){var X=V?new CKEDITOR.style(U,V)._.definition:U;
W.name=X.element;
CKEDITOR.tools.extend(W.attributes,CKEDITOR.tools.clone(X.attributes));
W.addStyle(CKEDITOR.style.getStyleText(X))
}
},styleMigrateFilter:function(V,W){var U=this.elementMigrateFilter;
return function(Z,Y){var X=new CKEDITOR.htmlParser.element(null),a={};
a[W]=Z;
U(V,a)(X);
X.children=Y.children;
Y.children=[X]
}
},bogusAttrFilter:function(V,U){if(U.name.indexOf("cke:")==-1){return false
}},applyStyleFilter:null},getRules:function(X){var j=CKEDITOR.dtd,V=CKEDITOR.tools.extend({},j.$block,j.$listItem,j.$tableContent),n=X.config,f=this.filters,m=f.falsyFilter,a=f.stylesFilter,b=f.elementMigrateFilter,W=CKEDITOR.tools.bind(this.filters.styleMigrateFilter,this.filters),U=this.utils.createListBulletMarker,Z=f.flattenList,h=f.assembleList,e=this.utils.isListBulletIndicator,c=this.utils.isContainingOnlySpaces,d=this.utils.resolveList,g=function(o){o=CKEDITOR.tools.convertToPx(o);
return isNaN(o)?o:o+"px"
},k=this.utils.getStyleComponents,l=this.utils.listDtdParents,i=n.pasteFromWordRemoveFontStyles!==false,Y=n.pasteFromWordRemoveStyles!==false;
return{elementNames:[[(/meta|link|script/),""]],root:function(o){o.filterChildren();
h(o)
},elements:{"^":function(o){var p;
if(CKEDITOR.env.gecko&&(p=f.applyStyleFilter)){p(o)
}},$:function(r){var q=r.name||"",p=r.attributes;
if(q in V&&p.style){p.style=a([[(/^(:?width|height)$/),null,g]])(p.style)||""
}if(q.match(/h\d/)){r.filterChildren();
if(d(r)){return 
}b(n["format_"+q])(r)
}else{if(q in j.$inline){r.filterChildren();
if(c(r)){delete r.name
}}else{if(q.indexOf(":")!=-1&&q.indexOf("cke")==-1){r.filterChildren();
if(q=="v:imagedata"){var o=r.attributes["o:href"];
if(o){r.attributes.src=o
}r.name="img";
return 
}delete r.name
}}}if(q in l){r.filterChildren();
h(r)
}},style:function(p){if(CKEDITOR.env.gecko){var o=p.onlyChild().value.match(/\/\* Style Definitions \*\/([\s\S]*?)\/\*/),q=o&&o[1],r={};
if(q){q.replace(/[\n\r]/g,"").replace(/(.+?)\{(.+?)\}/g,function(x,v,u){v=v.split(",");
var w=v.length,s;
for(var t=0;
t<w;
t++){CKEDITOR.tools.trim(v[t]).replace(/^(\w+)(\.[\w-]+)?$/g,function(y,z,AA){z=z||"*";
AA=AA.substring(1,AA.length);
if(AA.match(/MsoNormal/)){return 
}if(!r[z]){r[z]={}
}if(AA){r[z][AA]=u
}else{r[z]=u
}})
}});
f.applyStyleFilter=function(t){var s=r["*"]?"*":t.name,v=t.attributes&&t.attributes["class"],u;
if(s in r){u=r[s];
if(typeof u=="object"){u=u[v]
}u&&t.addStyle(u,true)
}}
}}return false
},p:function(q){if(/MsoListParagraph/.exec(q.attributes["class"])){var r=q.firstChild(function(s){return s.type==CKEDITOR.NODE_TEXT&&!c(s.parent)
});
var o=r&&r.parent,p=o&&o.attributes;
p&&!p.style&&(p.style="mso-list: Ignore;")
}q.filterChildren();
if(d(q)){return 
}if(n.enterMode==CKEDITOR.ENTER_BR){delete q.name;
q.add(new CKEDITOR.htmlParser.element("br"))
}else{b(n["format_"+(n.enterMode==CKEDITOR.ENTER_P?"p":"div")])(q)
}},div:function(p){var q=p.onlyChild();
if(q&&q.name=="table"){var o=p.attributes;
q.attributes=CKEDITOR.tools.extend(q.attributes,o);
o.style&&q.addStyle(o.style);
var r=new CKEDITOR.htmlParser.element("div");
r.addStyle("clear","both");
p.add(r);
delete p.name
}},td:function(o){if(o.getAncestor("thead")){o.name="th"
}},ol:Z,ul:Z,dl:Z,font:function(p){if(e(p.parent)){delete p.name;
return 
}p.filterChildren();
var o=p.attributes,r=o.style,q=p.parent;
if("font"==q.name){CKEDITOR.tools.extend(q.attributes,p.attributes);
r&&q.addStyle(r);
delete p.name
}else{r=r||"";
if(o.color){o.color!="#000000"&&(r+="color:"+o.color+";");
delete o.color
}if(o.face){r+="font-family:"+o.face+";";
delete o.face
}if(o.size){r+="font-size:"+(o.size>3?"large":(o.size<3?"small":"medium"))+";";
delete o.size
}p.name="span";
p.addStyle(r)
}},span:function(r){if(e(r.parent)){return false
}r.filterChildren();
if(c(r)){delete r.name;
return null
}if(e(r)){var q=r.firstChild(function(y){return y.value||y.name=="img"
});
var u=q&&(q.value||"l."),w=u&&u.match(/^(?:[(]?)([^\s]+?)([.)]?)$/);
if(w){var s=U(w,u);
var t=r.getAncestor("span");
if(t&&(/ mso-hide:\s*all|display:\s*none /).test(t.attributes.style)){s.attributes["cke:ignored"]=1
}return s
}}var p=r.children,x=r.attributes,o=x&&x.style,v=p&&p[0];
if(o){x.style=a([["line-height"],[(/^font-family$/),null,!i?W(n.font_style,"family"):null],[(/^font-size$/),null,!i?W(n.fontSize_style,"size"):null],[(/^color$/),null,!i?W(n.colorButton_foreStyle,"color"):null],[(/^background-color$/),null,!i?W(n.colorButton_backStyle,"color"):null]])(o,r)||""
}return null
},b:b(n.coreStyles_bold),i:b(n.coreStyles_italic),u:b(n.coreStyles_underline),s:b(n.coreStyles_strike),sup:b(n.coreStyles_superscript),sub:b(n.coreStyles_subscript),a:function(p){var o=p.attributes;
if(o&&!o.href&&o.name){delete p.name
}else{if(CKEDITOR.env.webkit&&o.href&&o.href.match(/file:\/\/\/[\S]+#/i)){o.href=o.href.replace(/file:\/\/\/[^#]+/i,"")
}}},"cke:listbullet":function(o){if(o.getAncestor(/h\d/)&&!n.pasteFromWordNumberedHeadingToList){delete o.name
}}},attributeNames:[[(/^onmouse(:?out|over)/),""],[(/^onload$/),""],[(/(?:v|o):\w+/),""],[(/^lang/),""]],attributes:{style:a(Y?[[(/^list-style-type$/),null],[(/^margin$|^margin-(?!bottom|top)/),null,function(r,q,p){if(q.name in {p:1,div:1}){var o=n.contentsLangDirection=="ltr"?"margin-left":"margin-right";
if(p=="margin"){r=k(p,r,[o])[o]
}else{if(p!=o){return null
}}if(r&&!S.test(r)){return[o,r]
}}return null
}],[(/^clear$/)],[(/^border.*|margin.*|vertical-align|float$/),null,function(p,o){if(o.name=="img"){return p
}}],[(/^width|height$/),null,function(p,o){if(o.name in {table:1,td:1,th:1,img:1}){return p
}}]]:[[(/^mso-/)],[(/-color$/),null,function(o){if(o=="transparent"){return false
}if(CKEDITOR.env.gecko){return o.replace(/-moz-use-text-color/g,"transparent")
}}],[(/^margin$/),S],["text-indent","0cm"],["page-break-before"],["tab-stops"],["display","none"],i?[(/font-?/)]:null],Y),width:function(p,o){if(o.name in j.$tableContent){return false
}},border:function(p,o){if(o.name in j.$tableContent){return false
}},"class":m,bgcolor:m,valign:Y?m:function(p,o){o.addStyle("vertical-align",p);
return false
}},comment:!CKEDITOR.env.ie?function(u,o){var v=u.match(/<img.*?>/),p=u.match(/^\[if !supportLists\]([\s\S]*?)\[endif\]$/);
if(p){var r=p[1]||(v&&"l."),t=r&&r.match(/>(?:[(]?)([^\s]+?)([.)]?)</);
return U(t,r)
}if(CKEDITOR.env.gecko&&v){var q=CKEDITOR.htmlParser.fragment.fromHtml(v[0]).children[0],s=o.previous,w=s&&s.value.match(/<v:imagedata[^>]*o:href=['"](.*?)['"]/),x=w&&w[1];
x&&(q.attributes.src=x);
return q
}return false
}:m}
}});
var R=function(){this.dataFilter=new CKEDITOR.htmlParser.filter()
};
R.prototype={toHtml:function(W){var U=CKEDITOR.htmlParser.fragment.fromHtml(W,false),V=new CKEDITOR.htmlParser.basicWriter();
U.writeHtml(V,this.dataFilter);
return V.getHtml(true)
}};
CKEDITOR.cleanWord=function(X,V){if(CKEDITOR.env.gecko){X=X.replace(/(<!--\[if[^<]*?\])-->([\S\s]*?)<!--(\[endif\]-->)/gi,"$1$2$3")
}var U=new R(),W=U.dataFilter;
W.addRules(CKEDITOR.plugins.pastefromword.getRules(V));
V.fire("beforeCleanWord",{filter:W});
try{X=U.toHtml(X,false)
}catch(Y){alert(V.lang.pastefromword.error)
}X=X.replace(/cke:.*?".*?"/g,"");
X=X.replace(/style=""/g,"");
X=X.replace(/<span>/g,"");
return X
}
})();