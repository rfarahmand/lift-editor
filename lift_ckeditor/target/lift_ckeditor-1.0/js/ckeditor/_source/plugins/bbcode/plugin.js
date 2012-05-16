(function(){CKEDITOR.on("dialogDefinition",function(U){var T,R=U.data.name,S=U.data.definition;
if(R=="link"){S.removeContents("target");
S.removeContents("upload");
S.removeContents("advanced");
T=S.getContents("info");
T.remove("emailSubject");
T.remove("emailBody")
}else{if(R=="image"){S.removeContents("advanced");
T=S.getContents("Link");
T.remove("cmbTarget");
T=S.getContents("info");
T.remove("txtAlt");
T.remove("basic")
}}});
var K={b:"strong",u:"u",i:"em",color:"span",size:"span",quote:"blockquote",code:"code",url:"a",email:"span",img:"span","*":"li",list:"ol"},L={strong:"b",b:"b",u:"u",em:"i",i:"i",code:"code",li:"*"},Q={strong:"b",em:"i",u:"u",li:"*",ul:"list",ol:"list",code:"code",a:"link",img:"img",blockquote:"quote"},P={color:"color",size:"font-size"},G={url:"href",email:"mailhref",quote:"cite",list:"listType"};
var B=CKEDITOR.dtd,J=CKEDITOR.tools.extend({table:1},B.$block,B.$listItem,B.$tableContent,B.$list);
var F=/\s*(?:;\s*|$)/;
function D(S){var V="";
for(var R in S){var U=S[R],T=(R+":"+U).replace(F,";");
V+=T
}return V
}function E(S){var R={};
(S||"").replace(/&quot;/g,'"').replace(/\s*([^ :;]+)\s*:\s*([^;]+)\s*(?=;|$)/g,function(U,T,V){R[T.toLowerCase()]=V
});
return R
}function O(R){return R.replace(/(?:rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\))/gi,function(U,X,W,S){X=parseInt(X,10).toString(16);
W=parseInt(W,10).toString(16);
S=parseInt(S,10).toString(16);
var T=[X,W,S];
for(var V=0;
V<T.length;
V++){T[V]=String("0"+T[V]).slice(-2)
}return"#"+T.join("")
})
}var A={smiley:":)",sad:":(",wink:";)",laugh:":D",cheeky:":P",blush:":*)",surprise:":-o",indecision:":|",angry:">:(",angel:"o:)",cool:"8-)",devil:">:-)",crying:";(",kiss:":-*"},M={},I=[];
for(var H in A){M[A[H]]=H;
I.push(A[H].replace(/\(|\)|\:|\/|\*|\-|\|/g,function(R){return"\\"+R
}))
}I=new RegExp(I.join("|"),"g");
var N=(function(){var S=[],T={nbsp:"\u00A0",shy:"\u00AD",gt:"\u003E",lt:"\u003C"};
for(var R in T){S.push(R)
}S=new RegExp("&("+S.join("|")+");","g");
return function(U){return U.replace(S,function(W,V){return T[V]
})
}
})();
CKEDITOR.BBCodeParser=function(){this._={bbcPartsRegex:/(?:\[([^\/\]=]*?)(?:=([^\]]*?))?\])|(?:\[\/([a-z]{1,16})\])/ig}
};
CKEDITOR.BBCodeParser.prototype={parse:function(Y){var V,T,W=0;
while((V=this._.bbcPartsRegex.exec(Y))){var X=V.index;
if(X>W){var Z=Y.substring(W,X);
this.onText(Z,1)
}W=this._.bbcPartsRegex.lastIndex;
T=(V[1]||V[3]||"").toLowerCase();
if(T&&!K[T]){this.onText(V[0]);
continue
}if(V[1]){var U=K[T],R={},a={},S=V[2];
if(S){if(T=="list"){if(!isNaN(S)){S="decimal"
}else{if(/^[a-z]+$/.test(S)){S="lower-alpha"
}else{if(/^[A-Z]+$/.test(S)){S="upper-alpha"
}}}}if(P[T]){if(T=="size"){S+="%"
}a[P[T]]=S;
R.style=D(a)
}else{if(G[T]){R[G[T]]=S
}}}if(T=="email"||T=="img"){R.bbcode=T
}this.onTagOpen(U,R,CKEDITOR.dtd.$empty[U])
}else{if(V[3]){this.onTagClose(K[T])
}}}if(Y.length>W){this.onText(Y.substring(W,Y.length),1)
}}};
CKEDITOR.htmlParser.fragment.fromBBCode=function(R){var S=new CKEDITOR.BBCodeParser(),a=new CKEDITOR.htmlParser.fragment(),b=[],Z=0,U=a,T;
function Y(j){if(b.length>0){for(var f=0;
f<b.length;
f++){var e=b[f],g=e.name,h=CKEDITOR.dtd[g],d=U.name&&CKEDITOR.dtd[U.name];
if((!d||d[g])&&(!j||!h||h[j]||!CKEDITOR.dtd[j])){e=e.clone();
e.parent=U;
U=e;
b.splice(f,1);
f--
}}}}function X(g,f){var d=U.children.length,h=d>0&&U.children[d-1],j=!h&&C.getRule(Q[U.name],"breakAfterOpen"),e=h&&h.type==CKEDITOR.NODE_ELEMENT&&C.getRule(Q[h.name],"breakAfterClose"),i=g&&C.getRule(Q[g],f?"breakBeforeClose":"breakBeforeOpen");
if(Z&&(j||e||i)){Z--
}if(Z&&g in J){Z++
}while(Z&&Z--){U.children.push(h=new CKEDITOR.htmlParser.element("br"))
}}function W(f,g){X(f.name,1);
g=g||U||a;
var d=g.children.length,e=d>0&&g.children[d-1]||null;
f.previous=e;
f.parent=g;
g.children.push(f);
if(f.returnPoint){U=f.returnPoint;
delete f.returnPoint
}}S.onTagOpen=function(k,i,h){var j=new CKEDITOR.htmlParser.element(k,i);
if(CKEDITOR.dtd.$removeEmpty[k]){b.push(j);
return 
}var g=U.name;
var f=g&&(CKEDITOR.dtd[g]||(U._.isBlockLike?CKEDITOR.dtd.div:CKEDITOR.dtd.span));
if(f&&!f[k]){var e=false,d;
if(k==g){W(U,U.parent)
}else{if(k in CKEDITOR.dtd.$listItem){S.onTagOpen("ul",{});
d=U;
e=true
}else{W(U,U.parent);
b.unshift(U);
e=true
}}if(d){U=d
}else{U=U.returnPoint||U.parent
}if(e){S.onTagOpen.apply(this,arguments);
return 
}}Y(k);
X(k);
j.parent=U;
j.returnPoint=T;
T=0;
if(j.isEmpty){W(j)
}else{U=j
}};
S.onTagClose=function(f){for(var e=b.length-1;
e>=0;
e--){if(f==b[e].name){b.splice(e,1);
return 
}}var j=[],d=[],g=U;
while(g.type&&g.name!=f){if(!g._.isBlockLike){d.unshift(g)
}j.push(g);
g=g.parent
}if(g.type){for(e=0;
e<j.length;
e++){var h=j[e];
W(h,h.parent)
}U=g;
W(g,g.parent);
if(g==U){U=U.parent
}b=b.concat(d)
}};
S.onText=function(e){var d=CKEDITOR.dtd[U.name];
if(!d||d["#"]){X();
Y();
e.replace(/([\r\n])|[^\r\n]*/g,function(g,f){if(f!==undefined&&f.length){Z++
}else{if(g.length){var h=0;
g.replace(I,function(j,i){W(new CKEDITOR.htmlParser.text(g.substring(h,i)),U);
W(new CKEDITOR.htmlParser.element("smiley",{desc:M[j]}),U);
h=i+j.length
});
if(h!=g.length){W(new CKEDITOR.htmlParser.text(g.substring(h,g.length)),U)
}}}})
}};
S.parse(CKEDITOR.tools.htmlEncode(R));
while(U.type){var c=U.parent,V=U;
W(V,c);
U=c
}return a
};
CKEDITOR.htmlParser.BBCodeWriter=CKEDITOR.tools.createClass({$:function(){this._={output:[],rules:[]};
this.setRules("list",{breakBeforeOpen:1,breakAfterOpen:1,breakBeforeClose:1,breakAfterClose:1});
this.setRules("*",{breakBeforeOpen:1,breakAfterOpen:0,breakBeforeClose:1,breakAfterClose:0});
this.setRules("quote",{breakBeforeOpen:1,breakAfterOpen:0,breakBeforeClose:0,breakAfterClose:1})
},proto:{setRules:function(R,T){var S=this._.rules[R];
if(S){CKEDITOR.tools.extend(S,T,true)
}else{this._.rules[R]=T
}},getRule:function(R,S){return this._.rules[R]&&this._.rules[R][S]
},openTag:function(R,S){if(R in K){if(this.getRule(R,"breakBeforeOpen")){this.lineBreak(1)
}this.write("[",R);
var T=S.option;
T&&this.write("=",T);
this.write("]");
if(this.getRule(R,"breakAfterOpen")){this.lineBreak(1)
}}else{if(R=="br"){this._.output.push("\n")
}}},openTagClose:function(){},attribute:function(){},closeTag:function(R){if(R in K){if(this.getRule(R,"breakBeforeClose")){this.lineBreak(1)
}R!="*"&&this.write("[/",R,"]");
if(this.getRule(R,"breakAfterClose")){this.lineBreak(1)
}}},text:function(R){this.write(R)
},comment:function(){},lineBreak:function(){if(!this._.hasLineBreak&&this._.output.length){this.write("\n");
this._.hasLineBreak=1
}},write:function(){this._.hasLineBreak=0;
var R=Array.prototype.join.call(arguments,"");
this._.output.push(R)
},reset:function(){this._.output=[];
this._.hasLineBreak=0
},getHtml:function(S){var R=this._.output.join("");
if(S){this.reset()
}return N(R)
}}});
var C=new CKEDITOR.htmlParser.BBCodeWriter();
CKEDITOR.plugins.add("bbcode",{requires:["htmldataprocessor","entities"],beforeInit:function(S){var R=S.config;
CKEDITOR.tools.extend(R,{enterMode:CKEDITOR.ENTER_BR,basicEntities:false,entities:false,fillEmptyBlocks:false},true)
},init:function(T){var R=T.config;
function S(W){var V=CKEDITOR.htmlParser.fragment.fromBBCode(W),X=new CKEDITOR.htmlParser.basicWriter();
V.writeHtml(X,U);
return X.getHtml(true)
}var U=new CKEDITOR.htmlParser.filter();
U.addRules({elements:{blockquote:function(V){var W=new CKEDITOR.htmlParser.element("div");
W.children=V.children;
V.children=[W];
var Y=V.attributes.cite;
if(Y){var X=new CKEDITOR.htmlParser.element("cite");
X.add(new CKEDITOR.htmlParser.text(Y.replace(/^"|"$/g,"")));
delete V.attributes.cite;
V.children.unshift(X)
}},span:function(W){var V;
if((V=W.attributes.bbcode)){if(V=="img"){W.name="img";
W.attributes.src=W.children[0].value;
W.children=[]
}else{if(V=="email"){W.name="a";
W.attributes.href="mailto:"+W.children[0].value
}}delete W.attributes.bbcode
}},ol:function(V){if(V.attributes.listType){if(V.attributes.listType!="decimal"){V.attributes.style="list-style-type:"+V.attributes.listType
}}else{V.name="ul"
}delete V.attributes.listType
},a:function(V){if(!V.attributes.href){V.attributes.href=V.children[0].value
}},smiley:function(V){V.name="img";
var W=V.attributes.desc,X=R.smiley_images[CKEDITOR.tools.indexOf(R.smiley_descriptions,W)],Y=CKEDITOR.tools.htmlEncode(R.smiley_path+X);
V.attributes={src:Y,"data-cke-saved-src":Y,title:W,alt:W}
}}});
T.dataProcessor.htmlFilter.addRules({elements:{$:function(e){var d=e.attributes,W=E(d.style),f;
var Y=e.name;
if(Y in L){Y=L[Y]
}else{if(Y=="span"){if((f=W.color)){Y="color";
f=O(f)
}else{if((f=W["font-size"])){var X=f.match(/(\d+)%$/);
if(X){f=X[1];
Y="size"
}}}}else{if(Y=="ol"||Y=="ul"){if((f=W["list-style-type"])){switch(f){case"lower-alpha":f="a";
break;
case"upper-alpha":f="A";
break
}}else{if(Y=="ol"){f=1
}}Y="list"
}else{if(Y=="blockquote"){try{var Z=e.children[0],a=e.children[1],c=Z.name=="cite"&&Z.children[0].value;
if(c){f='"'+c+'"';
e.children=a.children
}}catch(g){}Y="quote"
}else{if(Y=="a"){if((f=d.href)){if(f.indexOf("mailto:")!==-1){Y="email";
e.children=[new CKEDITOR.htmlParser.text(f.replace("mailto:",""))];
f=""
}else{var b=e.children.length==1&&e.children[0];
if(b&&b.type==CKEDITOR.NODE_TEXT&&b.value==f){f=""
}Y="url"
}}}else{if(Y=="img"){e.isEmpty=0;
var V=d["data-cke-saved-src"];
if(V&&V.indexOf(T.config.smiley_path)!=-1){return new CKEDITOR.htmlParser.text(A[d.alt])
}else{e.children=[new CKEDITOR.htmlParser.text(V)]
}}}}}}}e.name=Y;
f&&(e.attributes.option=f);
return null
},br:function(V){var W=V.next;
if(W&&W.name in J){return false
}}}},1);
T.dataProcessor.writer=C;
T.on("beforeSetMode",function(W){W.removeListener();
var V=T._.modes.wysiwyg;
V.loadData=CKEDITOR.tools.override(V.loadData,function(X){return function(Y){return(X.call(this,S(Y)))
}
})
})
},afterInit:function(R){var S;
if(R._.elementsPath){if((S=R._.elementsPath.filters)){S.push(function(V){var U=V.getName(),T=Q[U]||false;
if(T=="link"&&V.getAttribute("href").indexOf("mailto:")===0){T="email"
}else{if(U=="span"){if(V.getStyle("font-size")){T="size"
}else{if(V.getStyle("color")){T="color"
}}}else{if(T=="img"){var W=V.data("cke-saved-src");
if(W&&W.indexOf(R.config.smiley_path)===0){T="smiley"
}}}}return T
})
}}}})
})();