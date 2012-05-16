(function(){var B=/^(?:td|th)$/;
function S(e){var V=e.getRanges();
var W=[];
var f={};
function c(g){if(W.length>0){return 
}if(g.type==CKEDITOR.NODE_ELEMENT&&B.test(g.getName())&&!g.getCustomData("selected_cell")){CKEDITOR.dom.element.setMarker(f,g,"selected_cell",true);
W.push(g)
}}for(var a=0;
a<V.length;
a++){var b=V[a];
if(b.collapsed){var X=b.getCommonAncestor();
var Z=X.getAscendant("td",true)||X.getAscendant("th",true);
if(Z){W.push(Z)
}}else{var U=new CKEDITOR.dom.walker(b);
var Y;
U.guard=c;
while((Y=U.next())){var d=Y.getAscendant("td")||Y.getAscendant("th");
if(d&&!d.getCustomData("selected_cell")){CKEDITOR.dom.element.setMarker(f,d,"selected_cell",true);
W.push(d)
}}}}CKEDITOR.dom.element.clearAllMarkers(f);
return W
}function T(V){var W=0,X=V.length-1,Z={},U,a,Y;
while((U=V[W++])){CKEDITOR.dom.element.setMarker(Z,U,"delete_cell",true)
}W=0;
while((U=V[W++])){if((a=U.getPrevious())&&!a.getCustomData("delete_cell")||(a=U.getNext())&&!a.getCustomData("delete_cell")){CKEDITOR.dom.element.clearAllMarkers(Z);
return a
}}CKEDITOR.dom.element.clearAllMarkers(Z);
Y=V[0].getParent();
if((Y=Y.getPrevious())){return Y.getLast()
}Y=V[X].getParent();
if((Y=Y.getNext())){return Y.getChild(0)
}return null
}function A(n,Z){var a=S(n),X=a[0],k=X.getAscendant("table"),o=X.getDocument(),U=a[0].getParent(),l=U.$.rowIndex,f=a[a.length-1],V=f.getParent().$.rowIndex+f.$.rowSpan-1,h=new CKEDITOR.dom.element(k.$.rows[V]),c=Z?l:V,b=Z?U:h;
var m=CKEDITOR.tools.buildTableMap(k),d=m[c],g=Z?m[c-1]:m[c+1],e=m[0].length;
var Y=o.createElement("tr");
for(var j=0;
d[j]&&j<e;
j++){var W;
if(d[j].rowSpan>1&&g&&d[j]==g[j]){W=d[j];
W.rowSpan+=1
}else{W=new CKEDITOR.dom.element(d[j]).clone();
W.removeAttribute("rowSpan");
!CKEDITOR.env.ie&&W.appendBogus();
Y.append(W);
W=W.$
}j+=W.colSpan-1
}Z?Y.insertBefore(b):Y.insertAfter(b)
}function C(d){if(d instanceof CKEDITOR.dom.selection){var Z=S(d),X=Z[0],k=X.getAscendant("table"),n=CKEDITOR.tools.buildTableMap(k),U=Z[0].getParent(),m=U.$.rowIndex,e=Z[Z.length-1],V=e.getParent().$.rowIndex+e.$.rowSpan-1,l=[];
for(var h=m;
h<=V;
h++){var c=n[h],a=new CKEDITOR.dom.element(k.$.rows[h]);
for(var f=0;
f<c.length;
f++){var W=new CKEDITOR.dom.element(c[f]),Y=W.getParent().$.rowIndex;
if(W.$.rowSpan==1){W.remove()
}else{W.$.rowSpan-=1;
if(Y==h){var o=n[h+1];
o[f-1]?W.insertAfter(new CKEDITOR.dom.element(o[f-1])):new CKEDITOR.dom.element(k.$.rows[h+1]).append(W,1)
}}f+=W.$.colSpan-1
}l.push(a)
}var b=k.$.rows;
var g=new CKEDITOR.dom.element(b[V+1]||(m>0?b[m-1]:null)||k.$.parentNode);
for(h=l.length;
h>=0;
h--){C(l[h])
}return g
}else{if(d instanceof CKEDITOR.dom.element){k=d.getAscendant("table");
if(k.$.rows.length==1){k.remove()
}else{d.remove()
}}}return null
}function K(U,V){var Z=U.getParent(),a=Z.$.cells;
var X=0;
for(var Y=0;
Y<a.length;
Y++){var W=a[Y];
X+=V?1:W.colSpan;
if(W==U.$){break
}}return X-1
}function H(X,V){var U=V?Infinity:0;
for(var Y=0;
Y<X.length;
Y++){var W=K(X[Y],V);
if(V?W<U:W>U){U=W
}}return U
}function N(c,a){var j=S(c),b=j[0],h=b.getAscendant("table"),V=H(j,1),Y=H(j),e=a?V:Y;
var U=CKEDITOR.tools.buildTableMap(h),X=[],W=[],f=U.length;
for(var Z=0;
Z<f;
Z++){X.push(U[Z][e]);
var g=a?U[Z][e-1]:U[Z][e+1];
g&&W.push(g)
}for(Z=0;
Z<f;
Z++){var d;
if(X[Z].colSpan>1&&W.length&&W[Z]==X[Z]){d=X[Z];
d.colSpan+=1
}else{d=new CKEDITOR.dom.element(X[Z]).clone();
d.removeAttribute("colSpan");
!CKEDITOR.env.ie&&d.appendBogus();
d[a?"insertBefore":"insertAfter"].call(d,new CKEDITOR.dom.element(X[Z]));
d=d.$
}Z+=d.rowSpan-1
}}function G(U){var Y=S(U),X=Y[0],e=Y[Y.length-1],l=X.getAscendant("table"),n=CKEDITOR.tools.buildTableMap(l),V,Z,m=[];
for(var k=0,b=n.length;
k<b;
k++){for(var g=0,c=n[k].length;
g<c;
g++){if(n[k][g]==X.$){V=g
}if(n[k][g]==e.$){Z=g
}}}for(k=V;
k<=Z;
k++){for(g=0;
g<n.length;
g++){var d=n[g],a=new CKEDITOR.dom.element(l.$.rows[g]),W=new CKEDITOR.dom.element(d[k]);
if(W.$){if(W.$.colSpan==1){W.remove()
}else{W.$.colSpan-=1
}g+=W.$.rowSpan-1;
if(!a.$.cells.length){m.push(a)
}}}}var f=l.$.rows[0]&&l.$.rows[0].cells;
var h=new CKEDITOR.dom.element(f[V]||(V?f[V-1]:l.$.parentNode));
if(m.length==b){l.remove()
}return h
}function R(X){var W=[],a=X[0]&&X[0].getAscendant("table"),Y,Z,V,U;
for(Y=0,Z=X.length;
Y<Z;
Y++){W.push(X[Y].$.cellIndex)
}W.sort();
for(Y=1,Z=W.length;
Y<Z;
Y++){if(W[Y]-W[Y-1]>1){V=W[Y-1]+1;
break
}}if(!V){V=W[0]>0?(W[0]-1):(W[W.length-1]+1)
}var b=a.$.rows;
for(Y=0,Z=b.length;
Y<Z;
Y++){U=b[Y].cells[V];
if(U){break
}}return U?new CKEDITOR.dom.element(U):a.getPrevious()
}function J(X,V){var W=X.getStartElement();
var U=W.getAscendant("td",1)||W.getAscendant("th",1);
if(!U){return 
}var Y=U.clone();
if(!CKEDITOR.env.ie){Y.appendBogus()
}if(V){Y.insertBefore(U)
}else{Y.insertAfter(U)
}}function M(X){if(X instanceof CKEDITOR.dom.selection){var U=S(X);
var Y=U[0]&&U[0].getAscendant("table");
var V=T(U);
for(var W=U.length-1;
W>=0;
W--){M(U[W])
}if(V){E(V,true)
}else{if(Y){Y.remove()
}}}else{if(X instanceof CKEDITOR.dom.element){var Z=X.getParent();
if(Z.getChildCount()==1){Z.remove()
}else{X.remove()
}}}}function F(U){var V=U.getBogus();
V&&V.remove();
U.trim()
}function E(U,W){var V=new CKEDITOR.dom.range(U.getDocument());
if(!V["moveToElementEdit"+(W?"End":"Start")](U)){V.selectNodeContents(U);
V.collapse(W?false:true)
}V.select(true)
}function Q(Y,X,U){var V=Y[X];
if(typeof U=="undefined"){return V
}for(var W=0;
V&&W<V.length;
W++){if(U.is&&V[W]==U.$){return W
}else{if(W==U){return new CKEDITOR.dom.element(V[W])
}}}return U.is?-1:null
}function O(Y,U){var W=[];
for(var V=0;
V<Y.length;
V++){var X=Y[V];
W.push(X[U]);
if(X[U].rowSpan>1){V+=X[U].rowSpan-1
}}return W
}function L(AC,h,l){var d=S(AC);
var f;
if((h?d.length!=1:d.length<2)||(f=AC.getCommonAncestor())&&f.type==CKEDITOR.NODE_ELEMENT&&f.is("table")){return false
}var Y,Z=d[0],v=Z.getAscendant("table"),x=CKEDITOR.tools.buildTableMap(v),s=x.length,u=x[0].length,U=Z.getParent().$.rowIndex,e=Q(x,U,Z);
if(h){var q;
try{var z=parseInt(Z.getAttribute("rowspan"),10)||1;
var a=parseInt(Z.getAttribute("colspan"),10)||1;
q=x[h=="up"?(U-z):h=="down"?(U+z):U][h=="left"?(e-a):h=="right"?(e+a):e]
}catch(y){return false
}if(!q||Z.$==q){return false
}d[(h=="up"||h=="left")?"unshift":"push"](new CKEDITOR.dom.element(q))
}var AB=Z.getDocument(),X=U,AA=0,b=0,W=!l&&new CKEDITOR.dom.documentFragment(AB),w=0;
for(var t=0;
t<d.length;
t++){Y=d[t];
var V=Y.getParent(),k=Y.getFirst(),j=Y.$.colSpan,c=Y.$.rowSpan,n=V.$.rowIndex,p=Q(x,n,Y);
w+=j*c;
b=Math.max(b,p-e+j);
AA=Math.max(AA,n-U+c);
if(!l){if(F(Y),Y.getChildren().count()){if(n!=X&&k&&!(k.isBlockBoundary&&k.isBlockBoundary({br:1}))){var m=W.getLast(CKEDITOR.dom.walker.whitespaces(true));
if(m&&!(m.is&&m.is("br"))){W.append("br")
}}Y.moveChildren(W)
}t?Y.remove():Y.setHtml("")
}X=n
}if(!l){W.moveChildren(Z);
if(!CKEDITOR.env.ie){Z.appendBogus()
}if(b>=u){Z.removeAttribute("rowSpan")
}else{Z.$.rowSpan=AA
}if(AA>=s){Z.removeAttribute("colSpan")
}else{Z.$.colSpan=b
}var o=new CKEDITOR.dom.nodeList(v.$.rows),g=o.count();
for(t=g-1;
t>=0;
t--){var r=o.getItem(t);
if(!r.$.cells.length){r.remove();
g++;
continue
}}return Z
}else{return(AA*b)==w
}}function D(p,b){var W=S(p);
if(W.length>1){return false
}else{if(b){return true
}}var V=W[0],U=V.getParent(),l=U.getAscendant("table"),o=CKEDITOR.tools.buildTableMap(l),e=U.$.rowIndex,h=Q(o,e,V),X=V.$.rowSpan,g,Z,Y,j;
if(X>1){Z=Math.ceil(X/2);
Y=Math.floor(X/2);
j=e+Z;
var f=new CKEDITOR.dom.element(l.$.rows[j]),m=Q(o,j),a;
g=V.clone();
for(var n=0;
n<m.length;
n++){a=m[n];
if(a.parentNode==f.$&&n>h){g.insertBefore(new CKEDITOR.dom.element(a));
break
}else{a=null
}}if(!a){f.append(g,true)
}}else{Y=Z=1;
f=U.clone();
f.insertAfter(U);
f.append(g=V.clone());
var d=Q(o,e);
for(var k=0;
k<d.length;
k++){d[k].rowSpan++
}}if(!CKEDITOR.env.ie){g.appendBogus()
}V.$.rowSpan=Z;
g.$.rowSpan=Y;
if(Z==1){V.removeAttribute("rowSpan")
}if(Y==1){g.removeAttribute("rowSpan")
}return g
}function P(d,b){var j=S(d);
if(j.length>1){return false
}else{if(b){return true
}}var f=j[0],a=f.getParent(),h=a.getAscendant("table"),U=CKEDITOR.tools.buildTableMap(h),c=a.$.rowIndex,e=Q(U,c,f),X=f.$.colSpan,W,Z,g;
if(X>1){Z=Math.ceil(X/2);
g=Math.floor(X/2)
}else{g=Z=1;
var Y=O(U,e);
for(var V=0;
V<Y.length;
V++){Y[V].colSpan++
}}W=f.clone();
W.insertAfter(f);
if(!CKEDITOR.env.ie){W.appendBogus()
}f.$.colSpan=Z;
W.$.colSpan=g;
if(Z==1){f.removeAttribute("colSpan")
}if(g==1){W.removeAttribute("colSpan")
}return W
}var I={thead:1,tbody:1,tfoot:1,td:1,tr:1,th:1};
CKEDITOR.plugins.tabletools={init:function(U){var V=U.lang.table;
U.addCommand("cellProperties",new CKEDITOR.dialogCommand("cellProperties"));
CKEDITOR.dialog.add("cellProperties",this.path+"dialogs/tableCell.js");
U.addCommand("tableDelete",{exec:function(a){var Z=a.getSelection(),Y=Z&&Z.getStartElement(),b=Y&&Y.getAscendant("table",1);
if(!b){return 
}var X=b.getParent();
if(X.getChildCount()==1&&!X.is("body","td","th")){b=X
}var W=new CKEDITOR.dom.range(a.document);
W.moveToPosition(b,CKEDITOR.POSITION_BEFORE_START);
b.remove();
W.select()
}});
U.addCommand("rowDelete",{exec:function(X){var W=X.getSelection();
E(C(W))
}});
U.addCommand("rowInsertBefore",{exec:function(X){var W=X.getSelection();
A(W,true)
}});
U.addCommand("rowInsertAfter",{exec:function(X){var W=X.getSelection();
A(W)
}});
U.addCommand("columnDelete",{exec:function(Y){var X=Y.getSelection();
var W=G(X);
W&&E(W,true)
}});
U.addCommand("columnInsertBefore",{exec:function(X){var W=X.getSelection();
N(W,true)
}});
U.addCommand("columnInsertAfter",{exec:function(X){var W=X.getSelection();
N(W)
}});
U.addCommand("cellDelete",{exec:function(X){var W=X.getSelection();
M(W)
}});
U.addCommand("cellMerge",{exec:function(W){E(L(W.getSelection()),true)
}});
U.addCommand("cellMergeRight",{exec:function(W){E(L(W.getSelection(),"right"),true)
}});
U.addCommand("cellMergeDown",{exec:function(W){E(L(W.getSelection(),"down"),true)
}});
U.addCommand("cellVerticalSplit",{exec:function(W){E(D(W.getSelection()))
}});
U.addCommand("cellHorizontalSplit",{exec:function(W){E(P(W.getSelection()))
}});
U.addCommand("cellInsertBefore",{exec:function(X){var W=X.getSelection();
J(W,true)
}});
U.addCommand("cellInsertAfter",{exec:function(X){var W=X.getSelection();
J(W)
}});
if(U.addMenuItems){U.addMenuItems({tablecell:{label:V.cell.menu,group:"tablecell",order:1,getItems:function(){var X=U.getSelection(),W=S(X);
return{tablecell_insertBefore:CKEDITOR.TRISTATE_OFF,tablecell_insertAfter:CKEDITOR.TRISTATE_OFF,tablecell_delete:CKEDITOR.TRISTATE_OFF,tablecell_merge:L(X,null,true)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,tablecell_merge_right:L(X,"right",true)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,tablecell_merge_down:L(X,"down",true)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,tablecell_split_vertical:D(X,true)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,tablecell_split_horizontal:P(X,true)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,tablecell_properties:W.length>0?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED}
}},tablecell_insertBefore:{label:V.cell.insertBefore,group:"tablecell",command:"cellInsertBefore",order:5},tablecell_insertAfter:{label:V.cell.insertAfter,group:"tablecell",command:"cellInsertAfter",order:10},tablecell_delete:{label:V.cell.deleteCell,group:"tablecell",command:"cellDelete",order:15},tablecell_merge:{label:V.cell.merge,group:"tablecell",command:"cellMerge",order:16},tablecell_merge_right:{label:V.cell.mergeRight,group:"tablecell",command:"cellMergeRight",order:17},tablecell_merge_down:{label:V.cell.mergeDown,group:"tablecell",command:"cellMergeDown",order:18},tablecell_split_horizontal:{label:V.cell.splitHorizontal,group:"tablecell",command:"cellHorizontalSplit",order:19},tablecell_split_vertical:{label:V.cell.splitVertical,group:"tablecell",command:"cellVerticalSplit",order:20},tablecell_properties:{label:V.cell.title,group:"tablecellproperties",command:"cellProperties",order:21},tablerow:{label:V.row.menu,group:"tablerow",order:1,getItems:function(){return{tablerow_insertBefore:CKEDITOR.TRISTATE_OFF,tablerow_insertAfter:CKEDITOR.TRISTATE_OFF,tablerow_delete:CKEDITOR.TRISTATE_OFF}
}},tablerow_insertBefore:{label:V.row.insertBefore,group:"tablerow",command:"rowInsertBefore",order:5},tablerow_insertAfter:{label:V.row.insertAfter,group:"tablerow",command:"rowInsertAfter",order:10},tablerow_delete:{label:V.row.deleteRow,group:"tablerow",command:"rowDelete",order:15},tablecolumn:{label:V.column.menu,group:"tablecolumn",order:1,getItems:function(){return{tablecolumn_insertBefore:CKEDITOR.TRISTATE_OFF,tablecolumn_insertAfter:CKEDITOR.TRISTATE_OFF,tablecolumn_delete:CKEDITOR.TRISTATE_OFF}
}},tablecolumn_insertBefore:{label:V.column.insertBefore,group:"tablecolumn",command:"columnInsertBefore",order:5},tablecolumn_insertAfter:{label:V.column.insertAfter,group:"tablecolumn",command:"columnInsertAfter",order:10},tablecolumn_delete:{label:V.column.deleteColumn,group:"tablecolumn",command:"columnDelete",order:15}})
}if(U.contextMenu){U.contextMenu.addListener(function(W,X){if(!W||W.isReadOnly()){return null
}while(W){if(W.getName() in I){return{tablecell:CKEDITOR.TRISTATE_OFF,tablerow:CKEDITOR.TRISTATE_OFF,tablecolumn:CKEDITOR.TRISTATE_OFF}
}W=W.getParent()
}return null
})
}},getSelectedCells:S};
CKEDITOR.plugins.add("tabletools",CKEDITOR.plugins.tabletools)
})();
CKEDITOR.tools.buildTableMap=function(L){var K=L.$.rows;
var A=-1;
var J=[];
for(var E=0;
E<K.length;
E++){A++;
!J[A]&&(J[A]=[]);
var I=-1;
for(var D=0;
D<K[E].cells.length;
D++){var H=K[E].cells[D];
I++;
while(J[A][I]){I++
}var C=isNaN(H.colSpan)?1:H.colSpan;
var F=isNaN(H.rowSpan)?1:H.rowSpan;
for(var B=0;
B<F;
B++){if(!J[A+B]){J[A+B]=[]
}for(var G=0;
G<C;
G++){J[A+B][I+G]=K[E].cells[D]
}}I+=C-1
}}return J
};