;
CKEDITOR.htmlParser.fragment=function(){this.children=[];
this.parent=null;
this._={isBlockLike:true,hasInlineStarted:false}
};
(function(){var D=CKEDITOR.tools.extend({table:1,ul:1,ol:1,dl:1},CKEDITOR.dtd.table,CKEDITOR.dtd.ul,CKEDITOR.dtd.ol,CKEDITOR.dtd.dl);
var A=CKEDITOR.env.ie&&CKEDITOR.env.version<8?{dd:1,dt:1}:{};
var E={ol:1,ul:1};
var B=CKEDITOR.tools.extend({},{html:1},CKEDITOR.dtd.html,CKEDITOR.dtd.body,CKEDITOR.dtd.head,{style:1,script:1});
function C(F){return F.name=="a"&&F.attributes.href||CKEDITOR.dtd.$removeEmpty[F.name]
}CKEDITOR.htmlParser.fragment.fromHtml=function(L,R,M){var F=new CKEDITOR.htmlParser(),O=M||new CKEDITOR.htmlParser.fragment(),P=[],Q=[],G=O,J=false,N=false;
function I(Y){var U;
if(P.length>0){for(var V=0;
V<P.length;
V++){var T=P[V],W=T.name,X=CKEDITOR.dtd[W],S=G.name&&CKEDITOR.dtd[G.name];
if((!S||S[W])&&(!Y||!X||X[Y]||!CKEDITOR.dtd[Y])){if(!U){K();
U=1
}T=T.clone();
T.parent=G;
G=T;
P.splice(V,1);
V--
}else{if(W==G.name){H(G,G.parent,1),V--
}}}}}function K(){while(Q.length){G.add(Q.shift())
}}function H(W,X,U){if(W.previous!==undefined){return 
}X=X||G||O;
var Z=G;
if(R&&(!X.type||X.name=="body")){var a,V;
if(W.attributes&&(V=W.attributes["data-cke-real-element-type"])){a=V
}else{a=W.name
}if(a&&!(a in CKEDITOR.dtd.$body||a=="body"||W.isOrphan)){G=X;
F.onTagOpen(R,{});
W.returnPoint=X=G
}}if(W._.isBlockLike&&W.name!="pre"&&W.name!="textarea"){var T=W.children.length,S=W.children[T-1],Y;
if(S&&S.type==CKEDITOR.NODE_TEXT){if(!(Y=CKEDITOR.tools.rtrim(S.value))){W.children.length=T-1
}else{S.value=Y
}}}X.add(W);
if(W.name=="pre"){N=false
}if(W.name=="textarea"){J=false
}if(W.returnPoint){G=W.returnPoint;
delete W.returnPoint
}else{G=U?X:Z
}}F.onTagOpen=function(U,V,X,Y){var W=new CKEDITOR.htmlParser.element(U,V);
if(W.isUnknown&&X){W.isEmpty=true
}W.isOptionalClose=U in A||Y;
if(C(W)){P.push(W);
return 
}else{if(U=="pre"){N=true
}else{if(U=="br"&&N){G.add(new CKEDITOR.htmlParser.text("\n"));
return 
}else{if(U=="textarea"){J=true
}}}}if(U=="br"){Q.push(W);
return 
}while(1){var a=G.name;
var Z=a?(CKEDITOR.dtd[a]||(G._.isBlockLike?CKEDITOR.dtd.div:CKEDITOR.dtd.span)):B;
if(!W.isUnknown&&!G.isUnknown&&!Z[U]){if(G.isOptionalClose){F.onTagClose(a)
}else{if(U in E&&a in E){var T=G.children,S=T[T.length-1];
if(!(S&&S.name=="li")){H((S=new CKEDITOR.htmlParser.element("li")),G)
}!W.returnPoint&&(W.returnPoint=G);
G=S
}else{if(U in CKEDITOR.dtd.$listItem&&a!=U){F.onTagOpen(U=="li"?"ul":"dl",{},0,1)
}else{if(a in D&&a!=U){!W.returnPoint&&(W.returnPoint=G);
G=G.parent
}else{if(a in CKEDITOR.dtd.$inline){P.unshift(G)
}if(G.parent){H(G,G.parent,1)
}else{W.isOrphan=1;
break
}}}}}}else{break
}}I(U);
K();
W.parent=G;
if(W.isEmpty){H(W)
}else{G=W
}};
F.onTagClose=function(U){for(var T=P.length-1;
T>=0;
T--){if(U==P[T].name){P.splice(T,1);
return 
}}var X=[],S=[],V=G;
while(V!=O&&V.name!=U){if(!V._.isBlockLike){S.unshift(V)
}X.push(V);
V=V.returnPoint||V.parent
}if(V!=O){for(T=0;
T<X.length;
T++){var W=X[T];
H(W,W.parent)
}G=V;
if(V._.isBlockLike){K()
}H(V,V.parent);
if(V==G){G=G.parent
}P=P.concat(S)
}if(U=="body"){R=false
}};
F.onText=function(U){if((!G._.hasInlineStarted||Q.length)&&!N&&!J){U=CKEDITOR.tools.ltrim(U);
if(U.length===0){return 
}}var T=G.name,S=T?(CKEDITOR.dtd[T]||(G._.isBlockLike?CKEDITOR.dtd.div:CKEDITOR.dtd.span)):B;
if(!J&&!S["#"]&&T in D){F.onTagOpen(T in E?"li":T=="dl"?"dd":T=="table"?"tr":T=="tr"?"td":"");
F.onText(U);
return 
}K();
I();
if(R&&(!G.type||G.name=="body")&&CKEDITOR.tools.trim(U)){this.onTagOpen(R,{},0,1)
}if(!N&&!J){U=U.replace(/[\t\r\n ]{2,}|[\t\r\n]/g," ")
}G.add(new CKEDITOR.htmlParser.text(U))
};
F.onCDATA=function(S){G.add(new CKEDITOR.htmlParser.cdata(S))
};
F.onComment=function(S){K();
I();
G.add(new CKEDITOR.htmlParser.comment(S))
};
F.parse(L);
K(!CKEDITOR.env.ie&&1);
while(G!=O){H(G,G.parent,1)
}return O
};
CKEDITOR.htmlParser.fragment.prototype={add:function(H,F){isNaN(F)&&(F=this.children.length);
var G=F>0?this.children[F-1]:null;
if(G){if(H._.isBlockLike&&G.type==CKEDITOR.NODE_TEXT){G.value=CKEDITOR.tools.rtrim(G.value);
if(G.value.length===0){this.children.pop();
this.add(H);
return 
}}G.next=H
}H.previous=G;
H.parent=this;
this.children.splice(F,0,H);
this._.hasInlineStarted=H.type==CKEDITOR.NODE_TEXT||(H.type==CKEDITOR.NODE_ELEMENT&&!H._.isBlockLike)
},writeHtml:function(H,F){var G;
this.filterChildren=function(){var J=new CKEDITOR.htmlParser.basicWriter();
this.writeChildrenHtml.call(this,J,F,true);
var I=J.getHtml();
this.children=new CKEDITOR.htmlParser.fragment.fromHtml(I).children;
G=1
};
!this.name&&F&&F.onFragment(this);
this.writeChildrenHtml(H,G?null:F)
},writeChildrenHtml:function(H,G){for(var F=0;
F<this.children.length;
F++){this.children[F].writeHtml(H,G)
}}}
})();