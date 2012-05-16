(function(){var J=CKEDITOR.tools.cssLength,I=CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks||CKEDITOR.env.version<7);
function H(K){return CKEDITOR.env.ie?K.$.clientWidth:parseInt(K.getComputedStyle("width"),10)
}function G(M,L){var K=M.getComputedStyle("border-"+L+"-width"),N={thin:"0px",medium:"1px",thick:"2px"};
if(K.indexOf("px")<0){if(K in N&&M.getComputedStyle("border-style")!="none"){K=N[K]
}else{K=0
}}return parseInt(K,10)
}function F(M){var L=M.$.rows,K=0,R,Q,P;
for(var O=0,N=L.length;
O<N;
O++){P=L[O];
R=P.cells.length;
if(R>K){K=R;
Q=P
}}return Q
}function E(R){var Q=[],P=-1,O=R.getComputedStyle("direction")=="rtl",N=F(R),M=new CKEDITOR.dom.element(R.$.tBodies[0]),L=M.getDocumentPosition();
for(var K=0,Y=N.cells.length;
K<Y;
K++){var X=new CKEDITOR.dom.element(N.cells[K]),W=N.cells[K+1]&&new CKEDITOR.dom.element(N.cells[K+1]);
P+=X.$.colSpan||1;
var V,U,T,S=X.getDocumentPosition().x;
O?U=S+G(X,"left"):V=S+X.$.offsetWidth-G(X,"right");
if(W){S=W.getDocumentPosition().x;
O?V=S+W.$.offsetWidth-G(W,"right"):U=S+G(W,"left")
}else{S=R.getDocumentPosition().x;
O?V=S:U=S+R.$.offsetWidth
}T=Math.max(U-V,3);
Q.push({table:R,index:P,x:V,y:L.y,width:T,height:M.$.offsetHeight,rtl:O})
}return Q
}function D(M,L){for(var K=0,O=M.length;
K<O;
K++){var N=M[K];
if(L>=N.x&&L<=N.x+N.width){return N
}}return null
}function C(K){(K.data||K).preventDefault()
}function B(c){var b,a,Z,Y,X,V,T,R,Q,P;
function O(){b=null;
V=0;
Y=0;
a.removeListener("mouseup",W);
Z.removeListener("mousedown",K);
Z.removeListener("mousemove",U);
a.getBody().setStyle("cursor","auto");
I?Z.remove():Z.hide()
}function N(){var d=b.index,o=CKEDITOR.tools.buildTableMap(b.table),n=[],m=[],l=Number.MAX_VALUE,k=l,j=b.rtl;
for(var i=0,h=o.length;
i<h;
i++){var g=o[i],f=g[d+(j?1:0)],e=g[d+(j?0:1)];
f=f&&new CKEDITOR.dom.element(f);
e=e&&new CKEDITOR.dom.element(e);
if(!f||!e||!f.equals(e)){f&&(l=Math.min(l,H(f)));
e&&(k=Math.min(k,H(e)));
n.push(f);
m.push(e)
}}T=n;
R=m;
Q=b.x-l;
P=b.x+k;
Z.setOpacity(0.5);
X=parseInt(Z.getStyle("left"),10);
V=0;
Y=1;
Z.on("mousemove",U);
a.on("dragstart",C)
}function M(){Y=0;
Z.setOpacity(0);
V&&L();
var d=b.table;
setTimeout(function(){d.removeCustomData("_cke_table_pillars")
},0);
a.removeListener("dragstart",C)
}function L(){var i=b.rtl,h=i?R.length:T.length;
for(var g=0;
g<h;
g++){var f=T[g],e=R[g],d=b.table;
CKEDITOR.tools.setTimeout(function(l,k,j,o,n,m){l&&l.setStyle("width",J(Math.max(k+m,0)));
j&&j.setStyle("width",J(Math.max(o-m,0)));
if(n){d.setStyle("width",J(n+m*(i?-1:1)))
}},0,this,[f,f&&H(f),e,e&&H(e),(!f||!e)&&H(d)+G(d,"left")+G(d,"right"),V])
}}function K(d){C(d);
N();
a.on("mouseup",W,this)
}function W(d){d.removeListener();
M()
}function U(d){S(d.data.$.clientX)
}a=c.document;
Z=CKEDITOR.dom.element.createFromHtml('<div data-cke-temp=1 contenteditable=false unselectable=on style="position:absolute;cursor:col-resize;filter:alpha(opacity=0);opacity:0;padding:0;background-color:#004;background-image:none;border:0px none;z-index:10"></div>',a);
if(!I){a.getDocumentElement().append(Z)
}this.attachTo=function(d){if(Y){return 
}if(I){a.getBody().append(Z);
V=0
}b=d;
Z.setStyles({width:J(d.width),height:J(d.height),left:J(d.x),top:J(d.y)});
I&&Z.setOpacity(0.25);
Z.on("mousedown",K,this);
a.getBody().setStyle("cursor","col-resize");
Z.show()
};
var S=this.move=function(e){if(!b){return 0
}if(!Y&&(e<b.x||e>b.x+b.width)){O();
return 0
}var d=e-Math.round(Z.$.offsetWidth/2);
if(Y){if(d==Q||d==P){return 1
}d=Math.max(d,Q);
d=Math.min(d,P);
V=d-X
}Z.setStyle("left",J(d));
return 1
}
}function A(M){var L=M.data.getTarget();
if(M.name=="mouseout"){if(!L.is("table")){return 
}var K=new CKEDITOR.dom.element(M.data.$.relatedTarget||M.data.$.toElement);
while(K&&K.$&&!K.equals(L)&&!K.is("body")){K=K.getParent()
}if(!K||K.equals(L)){return 
}}L.getAscendant("table",1).removeCustomData("_cke_table_pillars");
M.removeListener()
}CKEDITOR.plugins.add("tableresize",{requires:["tabletools"],init:function(K){K.on("contentDom",function(){var L;
K.document.getBody().on("mousemove",function(M){M=M.data;
if(L&&L.move(M.$.clientX)){C(M);
return 
}var Q=M.getTarget(),P,O;
if(!Q.is("table")&&!Q.getAscendant("tbody",1)){return 
}P=Q.getAscendant("table",1);
if(!(O=P.getCustomData("_cke_table_pillars"))){P.setCustomData("_cke_table_pillars",O=E(P));
P.on("mouseout",A);
P.on("mousedown",A)
}var N=D(O,M.$.clientX);
if(N){!L&&(L=new B(K));
L.attachTo(N)
}})
})
}})
})();