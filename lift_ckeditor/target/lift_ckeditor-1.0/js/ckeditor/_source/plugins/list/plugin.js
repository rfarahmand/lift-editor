(function(){var U={ol:1,ul:1},D=/^[\n\r\t ]*$/;
var M=CKEDITOR.dom.walker.whitespaces(),E=CKEDITOR.dom.walker.bookmark(),G=function(Z){return !(M(Z)||E(Z))
},T=CKEDITOR.dom.walker.bogus();
function C(b){var a,c,Z;
if((a=b.getDirection())){c=b.getParent();
while(c&&!(Z=c.getDirection())){c=c.getParent()
}if(a==Z){b.removeAttribute("dir")
}}}CKEDITOR.plugins.list={listToArray:function(c,m,k,h,l){if(!U[c.getName()]){return[]
}if(!h){h=0
}if(!k){k=[]
}for(var e=0,f=c.getChildCount();
e<f;
e++){var Z=c.getChild(e);
if(Z.type==CKEDITOR.NODE_ELEMENT&&Z.getName() in CKEDITOR.dtd.$list){CKEDITOR.plugins.list.listToArray(Z,m,k,h+1)
}if(Z.$.nodeName.toLowerCase()!="li"){continue
}var g={parent:c,indent:h,element:Z,contents:[]};
if(!l){g.grandparent=c.getParent();
if(g.grandparent&&g.grandparent.$.nodeName.toLowerCase()=="li"){g.grandparent=g.grandparent.getParent()
}}else{g.grandparent=l
}if(m){CKEDITOR.dom.element.setMarker(m,Z,"listarray_index",k.length)
}k.push(g);
for(var d=0,a=Z.getChildCount(),b;
d<a;
d++){b=Z.getChild(d);
if(b.type==CKEDITOR.NODE_ELEMENT&&U[b.getName()]){CKEDITOR.plugins.list.listToArray(b,m,k,h+1,g.grandparent)
}else{g.contents.push(b)
}}}return k
},arrayToList:function(g,q,r,AC,u){if(!r){r=0
}if(!g||g.length<r+1){return null
}var x,AB=g[r].parent.getDocument(),t=new CKEDITOR.dom.documentFragment(AB),AA=null,a=r,v=Math.max(g[r].indent,0),Z=null,d,l,o=(AC==CKEDITOR.ENTER_P?"p":"div");
while(1){var z=g[a];
d=z.element.getDirection(1);
if(z.indent==v){if(!AA||g[a].parent.getName()!=AA.getName()){AA=g[a].parent.clone(false,1);
u&&AA.setAttribute("dir",u);
t.append(AA)
}Z=AA.append(z.element.clone(0,1));
if(d!=AA.getDirection(1)){Z.setAttribute("dir",d)
}for(x=0;
x<z.contents.length;
x++){Z.append(z.contents[x].clone(1,1))
}a++
}else{if(z.indent==Math.max(v,0)+1){var w=g[a-1].element.getDirection(1),s=CKEDITOR.plugins.list.arrayToList(g,null,a,AC,w!=d?d:null);
if(!Z.getChildCount()&&CKEDITOR.env.ie&&!(AB.$.documentMode>7)){Z.append(AB.createText("\xa0"))
}Z.append(s.listNode);
a=s.nextIndex
}else{if(z.indent==-1&&!r&&z.grandparent){if(U[z.grandparent.getName()]){Z=z.element.clone(false,true)
}else{Z=new CKEDITOR.dom.documentFragment(AB)
}var n=z.grandparent.getDirection(1)!=d,j=Z.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT&&AC!=CKEDITOR.ENTER_BR,p=z.element,b=p.getAttribute("class"),y=p.getAttribute("style");
var f,h=z.contents.length;
for(x=0;
x<h;
x++){f=z.contents[x];
if(f.type==CKEDITOR.NODE_ELEMENT&&f.isBlockBoundary()){if(n&&!f.getDirection()){f.setAttribute("dir",d)
}y&&f.setAttribute("style",y.replace(/([^;])$/,"$1;")+(f.getAttribute("style")||""));
b&&f.addClass(b)
}else{if(n||j||y||b){if(!l){l=AB.createElement(o);
n&&l.setAttribute("dir",d)
}y&&l.setAttribute("style",y);
b&&l.setAttribute("class",b);
l.append(f.clone(1,1))
}}Z.append(l||f.clone(1,1))
}if(Z.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT&&a!=g.length-1){var m=Z.getLast();
if(m&&m.type==CKEDITOR.NODE_ELEMENT&&m.getAttribute("type")=="_moz"){m.remove()
}if(!(m=Z.getLast(G)&&m.type==CKEDITOR.NODE_ELEMENT&&m.getName() in CKEDITOR.dtd.$block)){Z.append(AB.createElement("br"))
}}var k=Z.$.nodeName.toLowerCase();
if(!CKEDITOR.env.ie&&(k=="div"||k=="p")){Z.appendBogus()
}t.append(Z);
AA=null;
a++
}else{return null
}}}l=null;
if(g.length<=a||Math.max(g[a].indent,0)<v){break
}}if(q){var c=t.getFirst(),e=g[0].parent;
while(c){if(c.type==CKEDITOR.NODE_ELEMENT){CKEDITOR.dom.element.clearMarkers(q,c);
if(c.getName() in CKEDITOR.dtd.$listItem){C(c)
}}c=c.getNextSourceNode()
}}return{listNode:t,nextIndex:a}
}};
function I(Z){if(Z.editor.readOnly){return null
}var e=Z.data.path,a=e.blockLimit,d=e.elements,c,b;
for(b=0;
b<d.length&&(c=d[b])&&!c.equals(a);
b++){if(U[d[b].getName()]){return this.setState(this.type==d[b].getName()?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF)
}}return this.setState(CKEDITOR.TRISTATE_OFF)
}function H(j,h,m,n){var e=CKEDITOR.plugins.list.listToArray(h.root,m),l=[];
for(var g=0;
g<h.contents.length;
g++){var c=h.contents[g];
c=c.getAscendant("li",true);
if(!c||c.getCustomData("list_item_processed")){continue
}l.push(c);
CKEDITOR.dom.element.setMarker(m,c,"list_item_processed",true)
}var k=h.root,f=k.getDocument().createElement(this.type);
k.copyAttributes(f,{start:1,type:1});
f.removeStyle("list-style-type");
for(g=0;
g<l.length;
g++){var d=l[g].getCustomData("listarray_index");
e[d].parent=f
}var b=CKEDITOR.plugins.list.arrayToList(e,m,null,j.config.enterMode);
var a,Z=b.listNode.getChildCount();
for(g=0;
g<Z&&(a=b.listNode.getChild(g));
g++){if(a.getName()==this.type){n.push(a)
}}b.listNode.replace(h.root)
}var X=/^h[1-6]$/;
function B(a,f,e){var o=f.contents,s=f.root.getDocument(),q=[];
if(o.length==1&&o[0].equals(f.root)){var n=s.createElement("div");
o[0].moveChildren&&o[0].moveChildren(n);
o[0].append(n);
o[0]=n
}var k=f.contents[0].getParent();
for(var m=0;
m<o.length;
m++){k=k.getCommonAncestor(o[m].getParent())
}var p=a.config.useComputedState,l,Z;
p=p===undefined||p;
for(m=0;
m<o.length;
m++){var c=o[m],g;
while((g=c.getParent())){if(g.equals(k)){q.push(c);
if(!Z&&c.getDirection()){Z=1
}var j=c.getDirection(p);
if(l!==null){if(l&&l!=j){l=null
}else{l=j
}}break
}c=g
}}if(q.length<1){return 
}var r=q[q.length-1].getNext(),b=s.createElement(this.type);
e.push(b);
var d,h;
while(q.length){d=q.shift();
h=s.createElement("li");
if(d.is("pre")||X.test(d.getName())){d.appendTo(h)
}else{d.copyAttributes(h);
if(l&&d.getDirection()){h.removeStyle("direction");
h.removeAttribute("dir")
}d.moveChildren(h);
d.remove()
}h.appendTo(b)
}if(l&&Z){b.setAttribute("dir",l)
}if(r){b.insertBefore(r)
}else{b.appendTo(k)
}}function W(j,h,p){var e=CKEDITOR.plugins.list.listToArray(h.root,p),n=[];
for(var f=0;
f<h.contents.length;
f++){var b=h.contents[f];
b=b.getAscendant("li",true);
if(!b||b.getCustomData("list_item_processed")){continue
}n.push(b);
CKEDITOR.dom.element.setMarker(p,b,"list_item_processed",true)
}var k=null;
for(f=0;
f<n.length;
f++){var d=n[f].getCustomData("listarray_index");
e[d].indent=-1;
k=d
}for(f=k+1;
f<e.length;
f++){if(e[f].indent>e[f-1].indent+1){var m=e[f-1].indent+1-e[f].indent;
var c=e[f].indent;
while(e[f]&&e[f].indent>=c){e[f].indent+=m;
f++
}f--
}}var a=CKEDITOR.plugins.list.arrayToList(e,p,null,j.config.enterMode,h.root.getAttribute("dir"));
var l=a.listNode,Z,g;
function o(i){if((Z=l[i?"getFirst":"getLast"]())&&!(Z.is&&Z.isBlockBoundary())&&(g=h.root[i?"getPrevious":"getNext"](CKEDITOR.dom.walker.whitespaces(true)))&&!(g.is&&g.isBlockBoundary({br:1}))){j.document.createElement("br")[i?"insertBefore":"insertAfter"](Z)
}}o(true);
o();
l.replace(h.root)
}function P(Z,a){this.name=Z;
this.type=a
}var L=CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT);
function Y(e,b,Z,a){var d,c;
while((d=e.getFirst(L))){if((c=d.getDirection(1))!==b.getDirection(1)){d.setAttribute("dir",c)
}d.remove();
Z?d[a?"insertBefore":"insertAfter"](Z):b.append(d,a)
}}P.prototype={exec:function(b){var AE=b.document,AB=b.config,AD=b.getSelection(),a=AD&&AD.getRanges(true);
if(!a||a.length<1){return 
}if(this.state==CKEDITOR.TRISTATE_OFF){var m=AE.getBody();
if(!m.getFirst(G)){AB.enterMode==CKEDITOR.ENTER_BR?m.appendBogus():a[0].fixBlock(1,AB.enterMode==CKEDITOR.ENTER_P?"p":"div");
AD.selectRanges(a)
}else{var o=a.length==1&&a[0],y=o&&o.getEnclosedNode();
if(y&&y.is&&this.type==y.getName()){this.setState(CKEDITOR.TRISTATE_ON)
}}}var d=AD.createBookmarks(true);
var z=[],n={},l=a.createIterator(),f=0;
while((o=l.getNextRange())&&++f){var x=o.getBoundaryNodes(),AC=x.startNode,p=x.endNode;
if(AC.type==CKEDITOR.NODE_ELEMENT&&AC.getName()=="td"){o.setStartAt(x.startNode,CKEDITOR.POSITION_AFTER_START)
}if(p.type==CKEDITOR.NODE_ELEMENT&&p.getName()=="td"){o.setEndAt(x.endNode,CKEDITOR.POSITION_BEFORE_END)
}var r=o.createIterator(),k;
r.forceBrBreak=(this.state==CKEDITOR.TRISTATE_OFF);
while((k=r.getNextParagraph())){if(k.getCustomData("list_block")){continue
}else{CKEDITOR.dom.element.setMarker(n,k,"list_block",1)
}var q=new CKEDITOR.dom.elementPath(k),AA=q.elements,w=AA.length,c=null,j=0,e=q.blockLimit,Z;
for(var v=w-1;
v>=0&&(Z=AA[v]);
v--){if(U[Z.getName()]&&e.contains(Z)){e.removeCustomData("list_group_object_"+f);
var h=Z.getCustomData("list_group_object");
if(h){h.contents.push(k)
}else{h={root:Z,contents:[k]};
z.push(h);
CKEDITOR.dom.element.setMarker(n,Z,"list_group_object",h)
}j=1;
break
}}if(j){continue
}var u=e;
if(u.getCustomData("list_group_object_"+f)){u.getCustomData("list_group_object_"+f).contents.push(k)
}else{h={root:u,contents:[k]};
CKEDITOR.dom.element.setMarker(n,u,"list_group_object_"+f,h);
z.push(h)
}}}var g=[];
while(z.length>0){h=z.shift();
if(this.state==CKEDITOR.TRISTATE_OFF){if(U[h.root.getName()]){H.call(this,b,h,n,g)
}else{B.call(this,b,h,g)
}}else{if(this.state==CKEDITOR.TRISTATE_ON&&U[h.root.getName()]){W.call(this,b,h,n)
}}}for(v=0;
v<g.length;
v++){c=g[v];
var s,t=this;
(s=function(AF){var i=c[AF?"getPrevious":"getNext"](CKEDITOR.dom.walker.whitespaces(true));
if(i&&i.getName&&i.getName()==t.type){Y(c,i,null,!AF);
c.remove();
c=i
}})();
s(1)
}CKEDITOR.dom.element.clearAllMarkers(n);
AD.selectBookmarks(d);
b.focus()
}};
var N=CKEDITOR.dtd;
var V=/[\t\r\n ]*(?:&nbsp;|\xa0)$/;
function J(b,e){var d,a=b.children,c=a.length;
for(var Z=0;
Z<c;
Z++){d=a[Z];
if(d.name&&(d.name in e)){return Z
}}return c
}function A(Z){return function(f){var c=f.children,e=J(f,N.$list),b=c[e],a=b&&b.previous,g;
if(a&&(a.name&&a.name=="br"||a.value&&(g=a.value.match(V)))){var d=a;
if(!(g&&g.index)&&d==c[0]){c[0]=(Z||CKEDITOR.env.ie)?new CKEDITOR.htmlParser.text("\xa0"):new CKEDITOR.htmlParser.element("br",{})
}else{if(d.name=="br"){c.splice(e-1,1)
}else{d.value=d.value.replace(V,"")
}}}}
}var F={elements:{}};
for(var R in N.$listItem){F.elements[R]=A()
}var S={elements:{}};
for(R in N.$listItem){S.elements[R]=A(true)
}function O(Z){return Z.type==CKEDITOR.NODE_ELEMENT&&(Z.getName() in CKEDITOR.dtd.$block||Z.getName() in CKEDITOR.dtd.$listItem)&&CKEDITOR.dtd[Z.getName()]["#"]
}function K(h,l,e){h.fire("saveSnapshot");
e.enlarge(CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS);
var m=e.extractContents();
l.trim(false,true);
var j=new CKEDITOR.dom.elementPath(l.startContainer);
var f=j.lastElement.getAscendant("li",1);
var b=j.block.getBogus();
b&&b.remove();
var k=m.getLast();
if(k&&k.type==CKEDITOR.NODE_ELEMENT&&k.is("br")){k.remove()
}var d=l.startContainer.getChild(l.startOffset);
if(d){m.insertBefore(d)
}else{l.startContainer.append(m)
}var Z=new CKEDITOR.dom.elementPath(e.startContainer);
var i=e.startContainer.getAscendant("li",1);
if(i){var g=Q(i);
if(g){if(f.contains(i)){Y(g,i.getParent(),i);
g.remove()
}else{f.append(g)
}}}if(e.checkStartOfBlock()&&e.checkEndOfBlock()){var c=Z.block,a=c.getParent();
c.remove();
if(a&&!a.getFirst(G)&&!a.equals(Z.blockLimit)){a.remove()
}}l.select();
h.fire("saveSnapshot")
}function Q(Z){var a=Z.getLast(G);
return a&&a.type==CKEDITOR.NODE_ELEMENT&&a.getName() in U?a:null
}CKEDITOR.plugins.add("list",{init:function(a){var b=a.addCommand("numberedlist",new P("numberedlist","ol")),Z=a.addCommand("bulletedlist",new P("bulletedlist","ul"));
a.ui.addButton("NumberedList",{label:a.lang.numberedlist,command:"numberedlist"});
a.ui.addButton("BulletedList",{label:a.lang.bulletedlist,command:"bulletedlist"});
a.on("selectionChange",CKEDITOR.tools.bind(I,b));
a.on("selectionChange",CKEDITOR.tools.bind(I,Z));
if(CKEDITOR.env.ie8Compat){a.on("key",function(p){var o=p.data.keyCode;
if(a.mode=="wysiwyg"&&o in {8:1,46:1}){var e=a.getSelection(),h=e.getRanges()[0];
if(!h.collapsed){return 
}var k=o==8;
var j=a.document.getBody();
var c=new CKEDITOR.dom.walker(h.clone());
c.evaluator=function(r){return G(r)&&!T(r)
};
var q=h.clone();
if(k){c.range.setStartAt(j,CKEDITOR.POSITION_AFTER_START);
c.range.setEnd(h.startContainer,h.startOffset);
var i=c.previous();
if(i&&i.type==CKEDITOR.NODE_ELEMENT&&i.getName() in U){c.range.selectNodeContents(i);
c.reset();
c.evaluator=O;
q.moveToElementEditEnd(c.lastForward());
K(a,q,h);
p.cancel()
}}else{var n=h.startContainer.getAscendant("li",1);
if(n){c.range.setEndAt(j,CKEDITOR.POSITION_BEFORE_END);
var m=n.getLast(G);
var f=m&&O(m)?m:n;
var l=0;
var g=c.next();
if(g&&g.type==CKEDITOR.NODE_ELEMENT&&g.getName() in U&&g.equals(m)){l=1;
g=c.next()
}else{if(h.checkBoundaryOfElement(f,CKEDITOR.END)){l=1
}}if(l&&g){var d=h.clone();
d.moveToElementEditStart(g);
K(a,q,d);
p.cancel()
}}}}})
}},afterInit:function(a){var Z=a.dataProcessor;
if(Z){Z.dataFilter.addRules(F);
Z.htmlFilter.addRules(S)
}},requires:["domiterator"]})
})();