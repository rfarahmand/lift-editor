(function(){var A=CKEDITOR.tools.cssLength,D=CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks||CKEDITOR.env.version<7);
function F(K){return CKEDITOR.env.ie?K.$.clientWidth:parseInt(K.getComputedStyle("width"),10)
}function B(L,K){var M=L.getComputedStyle("border-"+K+"-width"),N={thin:"0px",medium:"1px",thick:"2px"};
if(M.indexOf("px")<0){if(M in N&&L.getComputedStyle("border-style")!="none"){M=N[M]
}else{M=0
}}return parseInt(M,10)
}function I(Q){var M=Q.$.rows,O=0,R,L,P;
for(var N=0,K=M.length;
N<K;
N++){P=M[N];
R=P.cells.length;
if(R>O){O=R;
L=P
}}return L
}function H(Y){var X=[],L=-1,U=(Y.getComputedStyle("direction")=="rtl");
var R=I(Y);
var P=new CKEDITOR.dom.element(Y.$.tBodies[0]),T=P.getDocumentPosition();
for(var O=0,S=R.cells.length;
O<S;
O++){var N=new CKEDITOR.dom.element(R.cells[O]),M=R.cells[O+1]&&new CKEDITOR.dom.element(R.cells[O+1]);
L+=N.$.colSpan||1;
var K,Q,W;
var V=N.getDocumentPosition().x;
U?Q=V+B(N,"left"):K=V+N.$.offsetWidth-B(N,"right");
if(M){V=M.getDocumentPosition().x;
U?K=V+M.$.offsetWidth-B(M,"right"):Q=V+B(M,"left")
}else{V=Y.getDocumentPosition().x;
U?K=V:Q=V+Y.$.offsetWidth
}W=Math.max(Q-K,3);
X.push({table:Y,index:L,x:K,y:T.y,width:W,height:P.$.offsetHeight,rtl:U})
}return X
}function C(O,M){for(var L=0,K=O.length;
L<K;
L++){var N=O[L];
if(M>=N.x&&M<=(N.x+N.width)){return N
}}return null
}function J(K){(K.data||K).preventDefault()
}function E(L){var b,V,Q,U,Y,S;
var Z,M,N,W;
function c(){b=null;
S=0;
U=0;
V.removeListener("mouseup",K);
Q.removeListener("mousedown",O);
Q.removeListener("mousemove",P);
V.getBody().setStyle("cursor","auto");
D?Q.remove():Q.hide()
}function a(){var j=b.index,d=CKEDITOR.tools.buildTableMap(b.table),k=[],l=[],e=Number.MAX_VALUE,m=e,o=b.rtl;
for(var g=0,h=d.length;
g<h;
g++){var p=d[g],n=p[j+(o?1:0)],f=p[j+(o?0:1)];
n=n&&new CKEDITOR.dom.element(n);
f=f&&new CKEDITOR.dom.element(f);
if(!n||!f||!n.equals(f)){n&&(e=Math.min(e,F(n)));
f&&(m=Math.min(m,F(f)));
k.push(n);
l.push(f)
}}Z=k;
M=l;
N=b.x-e;
W=b.x+m;
Q.setOpacity(0.5);
Y=parseInt(Q.getStyle("left"),10);
S=0;
U=1;
Q.on("mousemove",P);
V.on("dragstart",J)
}function T(){U=0;
Q.setOpacity(0);
S&&R();
var d=b.table;
setTimeout(function(){d.removeCustomData("_cke_table_pillars")
},0);
V.removeListener("dragstart",J)
}function R(){var h=b.rtl,j=h?M.length:Z.length;
for(var e=0;
e<j;
e++){var d=Z[e],g=M[e],f=b.table;
CKEDITOR.tools.setTimeout(function(k,n,m,o,i,l){k&&k.setStyle("width",A(Math.max(n+l,0)));
m&&m.setStyle("width",A(Math.max(o-l,0)));
if(i){f.setStyle("width",A(i+l*(h?-1:1)))
}},0,this,[d,d&&F(d),g,g&&F(g),(!d||!g)&&(F(f)+B(f,"left")+B(f,"right")),S])
}}function O(d){J(d);
a();
V.on("mouseup",K,this)
}function K(d){d.removeListener();
T()
}function P(d){X(d.data.$.clientX)
}V=L.document;
Q=CKEDITOR.dom.element.createFromHtml('<div data-cke-temp=1 contenteditable=false unselectable=on style="position:absolute;cursor:col-resize;filter:alpha(opacity=0);opacity:0;padding:0;background-color:#004;background-image:none;border:0px none;z-index:10"></div>',V);
if(!D){V.getDocumentElement().append(Q)
}this.attachTo=function(d){if(U){return 
}if(D){V.getBody().append(Q);
S=0
}b=d;
Q.setStyles({width:A(d.width),height:A(d.height),left:A(d.x),top:A(d.y)});
D&&Q.setOpacity(0.25);
Q.on("mousedown",O,this);
V.getBody().setStyle("cursor","col-resize");
Q.show()
};
var X=this.move=function(e){if(!b){return 0
}if(!U&&(e<b.x||e>(b.x+b.width))){c();
return 0
}var d=e-Math.round(Q.$.offsetWidth/2);
if(U){if(d==N||d==W){return 1
}d=Math.max(d,N);
d=Math.min(d,W);
S=d-Y
}Q.setStyle("left",A(d));
return 1
}
}function G(K){var M=K.data.getTarget();
if(K.name=="mouseout"){if(!M.is("table")){return 
}var L=new CKEDITOR.dom.element(K.data.$.relatedTarget||K.data.$.toElement);
while(L&&L.$&&!L.equals(M)&&!L.is("body")){L=L.getParent()
}if(!L||L.equals(M)){return 
}}M.getAscendant("table",1).removeCustomData("_cke_table_pillars");
K.removeListener()
}CKEDITOR.plugins.add("tableresize",{requires:["tabletools"],init:function(K){K.on("contentDom",function(){var L;
K.document.getBody().on("mousemove",function(M){M=M.data;
if(L&&L.move(M.$.clientX)){J(M);
return 
}var Q=M.getTarget(),N,P;
if(!Q.is("table")&&!Q.getAscendant("tbody",1)){return 
}N=Q.getAscendant("table",1);
if(!(P=N.getCustomData("_cke_table_pillars"))){N.setCustomData("_cke_table_pillars",(P=H(N)));
N.on("mouseout",G);
N.on("mousedown",G)
}var O=C(P,M.$.clientX);
if(O){!L&&(L=new E(K));
L.attachTo(O)
}})
})
}})
})();