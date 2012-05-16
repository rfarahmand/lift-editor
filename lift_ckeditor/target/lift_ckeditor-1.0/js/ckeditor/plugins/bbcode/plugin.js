(function(){CKEDITOR.on("dialogDefinition",function(U){var T,S=U.data.name,R=U.data.definition;
if(S=="link"){R.removeContents("target");
R.removeContents("upload");
R.removeContents("advanced");
T=R.getContents("info");
T.remove("emailSubject");
T.remove("emailBody")
}else{if(S=="image"){R.removeContents("advanced");
T=R.getContents("Link");
T.remove("cmbTarget");
T=R.getContents("info");
T.remove("txtAlt");
T.remove("basic")
}}});
var Q={b:"strong",u:"u",i:"em",color:"span",size:"span",quote:"blockquote",code:"code",url:"a",email:"span",img:"span","*":"li",list:"ol"},P={strong:"b",b:"b",u:"u",em:"i",i:"i",code:"code",li:"*"},O={strong:"b",em:"i",u:"u",li:"*",ul:"list",ol:"list",code:"code",a:"link",img:"img",blockquote:"quote"},N={color:"color",size:"font-size"},M={url:"href",email:"mailhref",quote:"cite",list:"listType"},L=CKEDITOR.dtd,K=CKEDITOR.tools.extend({table:1},L.$block,L.$listItem,L.$tableContent,L.$list),J=/\s*(?:;\s*|$)/;
function I(V){var U="";
for(var T in V){var S=V[T],R=(T+":"+S).replace(J,";");
U+=R
}return U
}function H(S){var R={};
(S||"").replace(/&quot;/g,'"').replace(/\s*([^ :;]+)\s*:\s*([^;]+)\s*(?=;|$)/g,function(V,U,T){R[U.toLowerCase()]=T
});
return R
}function G(R){return R.replace(/(?:rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\))/gi,function(X,W,V,U){W=parseInt(W,10).toString(16);
V=parseInt(V,10).toString(16);
U=parseInt(U,10).toString(16);
var T=[W,V,U];
for(var S=0;
S<T.length;
S++){T[S]=String("0"+T[S]).slice(-2)
}return"#"+T.join("")
})
}var F={smiley:":)",sad:":(",wink:";)",laugh:":D",cheeky:":P",blush:":*)",surprise:":-o",indecision:":|",angry:">:(",angel:"o:)",cool:"8-)",devil:">:-)",crying:";(",kiss:":-*"},E={},D=[];
for(var C in F){E[F[C]]=C;
D.push(F[C].replace(/\(|\)|\:|\/|\*|\-|\|/g,function(R){return"\\"+R
}))
}D=new RegExp(D.join("|"),"g");
var B=(function(){var T=[],S={nbsp:"\xa0",shy:"­",gt:">",lt:"<"};
for(var R in S){T.push(R)
}T=new RegExp("&("+T.join("|")+");","g");
return function(U){return U.replace(T,function(W,V){return S[V]
})
}
})();
CKEDITOR.BBCodeParser=function(){this._={bbcPartsRegex:/(?:\[([^\/\]=]*?)(?:=([^\]]*?))?\])|(?:\[\/([a-z]{1,16})\])/ig}
};
CKEDITOR.BBCodeParser.prototype={parse:function(R){var S=this;
var b,a,Z=0;
while(b=S._.bbcPartsRegex.exec(R)){var Y=b.index;
if(Y>Z){var X=R.substring(Z,Y);
S.onText(X,1)
}Z=S._.bbcPartsRegex.lastIndex;
a=(b[1]||b[3]||"").toLowerCase();
if(a&&!Q[a]){S.onText(b[0]);
continue
}if(b[1]){var W=Q[a],V={},U={},T=b[2];
if(T){if(a=="list"){if(!isNaN(T)){T="decimal"
}else{if(/^[a-z]+$/.test(T)){T="lower-alpha"
}else{if(/^[A-Z]+$/.test(T)){T="upper-alpha"
}}}}if(N[a]){if(a=="size"){T+="%"
}U[N[a]]=T;
V.style=I(U)
}else{if(M[a]){V[M[a]]=T
}}}if(a=="email"||a=="img"){V.bbcode=a
}S.onTagOpen(W,V,CKEDITOR.dtd.$empty[W])
}else{if(b[3]){S.onTagClose(Q[a])
}}}if(R.length>Z){S.onText(R.substring(Z,R.length),1)
}}};
CKEDITOR.htmlParser.fragment.fromBBCode=function(R){var c=new CKEDITOR.BBCodeParser(),b=new CKEDITOR.htmlParser.fragment(),a=[],Z=0,Y=b,X;
function W(i){if(a.length>0){for(var h=0;
h<a.length;
h++){var g=a[h],f=g.name,e=CKEDITOR.dtd[f],d=Y.name&&CKEDITOR.dtd[Y.name];
if((!d||d[f])&&(!i||!e||e[i]||!CKEDITOR.dtd[i])){g=g.clone();
g.parent=Y;
Y=g;
a.splice(h,1);
h--
}}}}function V(j,i){var h=Y.children.length,g=h>0&&Y.children[h-1],f=!g&&A.getRule(O[Y.name],"breakAfterOpen"),e=g&&g.type==CKEDITOR.NODE_ELEMENT&&A.getRule(O[g.name],"breakAfterClose"),d=j&&A.getRule(O[j],i?"breakBeforeClose":"breakBeforeOpen");
if(Z&&(f||e||d)){Z--
}if(Z&&j in K){Z++
}while(Z&&Z--){Y.children.push(g=new CKEDITOR.htmlParser.element("br"))
}}function U(g,f){V(g.name,1);
f=f||Y||b;
var e=f.children.length,d=e>0&&f.children[e-1]||null;
g.previous=d;
g.parent=f;
f.children.push(g);
if(g.returnPoint){Y=g.returnPoint;
delete g.returnPoint
}}c.onTagOpen=function(k,j,i){var h=new CKEDITOR.htmlParser.element(k,j);
if(CKEDITOR.dtd.$removeEmpty[k]){a.push(h);
return 
}var g=Y.name,f=g&&(CKEDITOR.dtd[g]||(Y._.isBlockLike?CKEDITOR.dtd.div:CKEDITOR.dtd.span));
if(f&&!f[k]){var e=false,d;
if(k==g){U(Y,Y.parent)
}else{if(k in CKEDITOR.dtd.$listItem){c.onTagOpen("ul",{});
d=Y;
e=true
}else{U(Y,Y.parent);
a.unshift(Y);
e=true
}}if(d){Y=d
}else{Y=Y.returnPoint||Y.parent
}if(e){c.onTagOpen.apply(this,arguments);
return 
}}W(k);
V(k);
h.parent=Y;
h.returnPoint=X;
X=0;
if(h.isEmpty){U(h)
}else{Y=h
}};
c.onTagClose=function(i){for(var h=a.length-1;
h>=0;
h--){if(i==a[h].name){a.splice(h,1);
return 
}}var g=[],f=[],e=Y;
while(e.type&&e.name!=i){if(!e._.isBlockLike){f.unshift(e)
}g.push(e);
e=e.parent
}if(e.type){for(h=0;
h<g.length;
h++){var d=g[h];
U(d,d.parent)
}Y=e;
U(e,e.parent);
if(e==Y){Y=Y.parent
}a=a.concat(f)
}};
c.onText=function(e){var d=CKEDITOR.dtd[Y.name];
if(!d||d["#"]){V();
W();
e.replace(/([\r\n])|[^\r\n]*/g,function(h,g){if(g!==undefined&&g.length){Z++
}else{if(h.length){var f=0;
h.replace(D,function(j,i){U(new CKEDITOR.htmlParser.text(h.substring(f,i)),Y);
U(new CKEDITOR.htmlParser.element("smiley",{desc:E[j]}),Y);
f=i+j.length
});
if(f!=h.length){U(new CKEDITOR.htmlParser.text(h.substring(f,h.length)),Y)
}}}})
}};
c.parse(CKEDITOR.tools.htmlEncode(R));
while(Y.type){var T=Y.parent,S=Y;
U(S,T);
Y=T
}return b
};
CKEDITOR.htmlParser.BBCodeWriter=CKEDITOR.tools.createClass({$:function(){var R=this;
R._={output:[],rules:[]};
R.setRules("list",{breakBeforeOpen:1,breakAfterOpen:1,breakBeforeClose:1,breakAfterClose:1});
R.setRules("*",{breakBeforeOpen:1,breakAfterOpen:0,breakBeforeClose:1,breakAfterClose:0});
R.setRules("quote",{breakBeforeOpen:1,breakAfterOpen:0,breakBeforeClose:0,breakAfterClose:1})
},proto:{setRules:function(T,S){var R=this._.rules[T];
if(R){CKEDITOR.tools.extend(R,S,true)
}else{this._.rules[T]=S
}},getRule:function(S,R){return this._.rules[S]&&this._.rules[S][R]
},openTag:function(U,T){var R=this;
if(U in Q){if(R.getRule(U,"breakBeforeOpen")){R.lineBreak(1)
}R.write("[",U);
var S=T.option;
S&&R.write("=",S);
R.write("]");
if(R.getRule(U,"breakAfterOpen")){R.lineBreak(1)
}}else{if(U=="br"){R._.output.push("\n")
}}},openTagClose:function(){},attribute:function(){},closeTag:function(S){var R=this;
if(S in Q){if(R.getRule(S,"breakBeforeClose")){R.lineBreak(1)
}S!="*"&&R.write("[/",S,"]");
if(R.getRule(S,"breakAfterClose")){R.lineBreak(1)
}}},text:function(R){this.write(R)
},comment:function(){},lineBreak:function(){var R=this;
if(!R._.hasLineBreak&&R._.output.length){R.write("\n");
R._.hasLineBreak=1
}},write:function(){this._.hasLineBreak=0;
var R=Array.prototype.join.call(arguments,"");
this._.output.push(R)
},reset:function(){this._.output=[];
this._.hasLineBreak=0
},getHtml:function(S){var R=this._.output.join("");
if(S){this.reset()
}return B(R)
}}});
var A=new CKEDITOR.htmlParser.BBCodeWriter();
CKEDITOR.plugins.add("bbcode",{requires:["htmldataprocessor","entities"],beforeInit:function(S){var R=S.config;
CKEDITOR.tools.extend(R,{enterMode:CKEDITOR.ENTER_BR,basicEntities:false,entities:false,fillEmptyBlocks:false},true)
},init:function(U){var T=U.config;
function S(X){var W=CKEDITOR.htmlParser.fragment.fromBBCode(X),V=new CKEDITOR.htmlParser.basicWriter();
W.writeHtml(V,R);
return V.getHtml(true)
}var R=new CKEDITOR.htmlParser.filter();
R.addRules({elements:{blockquote:function(X){var W=new CKEDITOR.htmlParser.element("div");
W.children=X.children;
X.children=[W];
var V=X.attributes.cite;
if(V){var Y=new CKEDITOR.htmlParser.element("cite");
Y.add(new CKEDITOR.htmlParser.text(V.replace(/^"|"$/g,"")));
delete X.attributes.cite;
X.children.unshift(Y)
}},span:function(W){var V;
if(V=W.attributes.bbcode){if(V=="img"){W.name="img";
W.attributes.src=W.children[0].value;
W.children=[]
}else{if(V=="email"){W.name="a";
W.attributes.href="mailto:"+W.children[0].value
}}delete W.attributes.bbcode
}},ol:function(V){if(V.attributes.listType){if(V.attributes.listType!="decimal"){V.attributes.style="list-style-type:"+V.attributes.listType
}}else{V.name="ul"
}delete V.attributes.listType
},a:function(V){if(!V.attributes.href){V.attributes.href=V.children[0].value
}},smiley:function(X){X.name="img";
var W=X.attributes.desc,V=T.smiley_images[CKEDITOR.tools.indexOf(T.smiley_descriptions,W)],Y=CKEDITOR.tools.htmlEncode(T.smiley_path+V);
X.attributes={src:Y,"data-cke-saved-src":Y,title:W,alt:W}
}}});
U.dataProcessor.htmlFilter.addRules({elements:{$:function(d){var c=d.attributes,b=H(c.style),a,Z=d.name;
if(Z in P){Z=P[Z]
}else{if(Z=="span"){if(a=b.color){Z="color";
a=G(a)
}else{if(a=b["font-size"]){var Y=a.match(/(\d+)%$/);
if(Y){a=Y[1];
Z="size"
}}}}else{if(Z=="ol"||Z=="ul"){if(a=b["list-style-type"]){switch(a){case"lower-alpha":a="a";
break;
case"upper-alpha":a="A";
break
}}else{if(Z=="ol"){a=1
}}Z="list"
}else{if(Z=="blockquote"){try{var X=d.children[0],W=d.children[1],V=X.name=="cite"&&X.children[0].value;
if(V){a='"'+V+'"';
d.children=W.children
}}catch(e){}Z="quote"
}else{if(Z=="a"){if(a=c.href){if(a.indexOf("mailto:")!==-1){Z="email";
d.children=[new CKEDITOR.htmlParser.text(a.replace("mailto:",""))];
a=""
}else{var g=d.children.length==1&&d.children[0];
if(g&&g.type==CKEDITOR.NODE_TEXT&&g.value==a){a=""
}Z="url"
}}}else{if(Z=="img"){d.isEmpty=0;
var f=c["data-cke-saved-src"];
if(f&&f.indexOf(U.config.smiley_path)!=-1){return new CKEDITOR.htmlParser.text(F[c.alt])
}else{d.children=[new CKEDITOR.htmlParser.text(f)]
}}}}}}}d.name=Z;
a&&(d.attributes.option=a);
return null
},br:function(W){var V=W.next;
if(V&&V.name in K){return false
}}}},1);
U.dataProcessor.writer=A;
U.on("beforeSetMode",function(W){W.removeListener();
var V=U._.modes.wysiwyg;
V.loadData=CKEDITOR.tools.override(V.loadData,function(X){return function(Y){return X.call(this,S(Y))
}
})
})
},afterInit:function(S){var R;
if(S._.elementsPath){if(R=S._.elementsPath.filters){R.push(function(W){var V=W.getName(),U=O[V]||false;
if(U=="link"&&W.getAttribute("href").indexOf("mailto:")===0){U="email"
}else{if(V=="span"){if(W.getStyle("font-size")){U="size"
}else{if(W.getStyle("color")){U="color"
}}}else{if(U=="img"){var T=W.data("cke-saved-src");
if(T&&T.indexOf(S.config.smiley_path)===0){U="smiley"
}}}}return U
})
}}}})
})();