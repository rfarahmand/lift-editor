;
CKEDITOR.plugins.add("styles",{requires:["selection"],init:function(A){A.on("contentDom",function(){A.document.setCustomData("cke_includeReadonly",!A.config.disableReadonlyStyling)
})
}});
CKEDITOR.editor.prototype.attachStyleStateChange=function(A,C){var B=this._.styleStateChangeCallbacks;
if(!B){B=this._.styleStateChangeCallbacks=[];
this.on("selectionChange",function(F){for(var D=0;
D<B.length;
D++){var G=B[D];
var E=G.style.checkActive(F.data.path)?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF;
G.fn.call(this,E)
}})
}B.push({style:A,fn:C})
};
CKEDITOR.STYLE_BLOCK=1;
CKEDITOR.STYLE_INLINE=2;
CKEDITOR.STYLE_OBJECT=3;
(function(){var I={address:1,div:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,p:1,pre:1,section:1,header:1,footer:1,nav:1,article:1,aside:1,figure:1,dialog:1,hgroup:1,time:1,meter:1,menu:1,command:1,keygen:1,output:1,progress:1,details:1,datagrid:1,datalist:1},X={a:1,embed:1,hr:1,img:1,li:1,object:1,ol:1,table:1,td:1,tr:1,th:1,ul:1,dl:1,dt:1,dd:1,form:1,audio:1,video:1};
var f=/\s*(?:;\s*|$)/,C=/#\((.+?)\)/g;
var F=CKEDITOR.dom.walker.bookmark(0,1),T=CKEDITOR.dom.walker.whitespaces(1);
CKEDITOR.style=function(j,i){if(i){j=CKEDITOR.tools.clone(j);
K(j.attributes,i);
K(j.styles,i)
}var h=this.element=j.element?(typeof j.element=="string"?j.element.toLowerCase():j.element):"*";
this.type=I[h]?CKEDITOR.STYLE_BLOCK:X[h]?CKEDITOR.STYLE_OBJECT:CKEDITOR.STYLE_INLINE;
if(typeof this.element=="object"){this.type=CKEDITOR.STYLE_OBJECT
}this._={definition:j}
};
CKEDITOR.style.prototype={apply:function(h){d.call(this,h,false)
},remove:function(h){d.call(this,h,true)
},applyToRange:function(h){return(this.applyToRange=this.type==CKEDITOR.STYLE_INLINE?N:this.type==CKEDITOR.STYLE_BLOCK?U:this.type==CKEDITOR.STYLE_OBJECT?D:null).call(this,h)
},removeFromRange:function(h){return(this.removeFromRange=this.type==CKEDITOR.STYLE_INLINE?Y:this.type==CKEDITOR.STYLE_BLOCK?S:this.type==CKEDITOR.STYLE_OBJECT?R:null).call(this,h)
},applyToObject:function(h){g(h,this)
},checkActive:function(l){switch(this.type){case CKEDITOR.STYLE_BLOCK:return this.checkElementRemovable(l.block||l.blockLimit,true);
case CKEDITOR.STYLE_OBJECT:case CKEDITOR.STYLE_INLINE:var m=l.elements;
for(var k=0,j;
k<m.length;
k++){j=m[k];
if(this.type==CKEDITOR.STYLE_INLINE&&(j==l.block||j==l.blockLimit)){continue
}if(this.type==CKEDITOR.STYLE_OBJECT){var h=j.getName();
if(!(typeof this.element=="string"?h==this.element:h in this.element)){continue
}}if(this.checkElementRemovable(j,true)){return true
}}}return false
},checkApplicable:function(h){switch(this.type){case CKEDITOR.STYLE_INLINE:case CKEDITOR.STYLE_BLOCK:break;
case CKEDITOR.STYLE_OBJECT:return h.lastElement.getAscendant(this.element,true)
}return true
},checkElementRemovable:function(o,l){var m=this._.definition;
if(!o||!m.ignoreReadonly&&o.isReadOnly()){return false
}var h,j=o.getName();
if(typeof this.element=="string"?j==this.element:j in this.element){if(!l&&!o.hasAttributes()){return true
}h=M(m);
if(h._length){for(var p in h){if(p=="_length"){continue
}var q=o.getAttribute(p)||"";
if(p=="style"?V(h[p],L(q,false)):h[p]==q){if(!l){return true
}}else{if(l){return false
}}}if(l){return true
}}else{return true
}}var k=Z(this)[o.getName()];
if(k){if(!(h=k.attributes)){return true
}for(var n=0;
n<h.length;
n++){p=h[n][0];
var r=o.getAttribute(p);
if(r){var s=h[n][1];
if(s===null||(typeof s=="string"&&r==s)||s.test(r)){return true
}}}}return false
},buildPreview:function(j){var l=this._.definition,k=[],h=l.element;
if(h=="bdo"){h="span"
}k=["<",h];
var m=l.attributes;
if(m){for(var i in m){k.push(" ",i,'="',m[i],'"')
}}var n=CKEDITOR.style.getStyleText(l);
if(n){k.push(' style="',n,'"')
}k.push(">",(j||l.name),"</",h,">");
return k.join("")
}};
CKEDITOR.style.getStyleText=function(k){var i=k._ST;
if(i){return i
}i=k.styles;
var h=(k.attributes&&k.attributes.style)||"",l="";
if(h.length){h=h.replace(f,";")
}for(var j in i){var n=i[j],m=(j+":"+n).replace(f,";");
if(n=="inherit"){l+=m
}else{h+=m
}}if(h.length){h=L(h)
}h+=l;
return(k._ST=h)
};
function J(j){var h,i;
while((j=j.getParent())){if(j.getName()=="body"){break
}if(j.getAttribute("data-nostyle")){h=j
}else{if(!i){var k=j.getAttribute("contentEditable");
if(k=="false"){h=j
}else{if(k=="true"){i=1
}}}}}return h
}function N(z){var AA=z.document;
if(z.collapsed){var i=O(this,AA);
z.insertNode(i);
z.moveToPosition(i,CKEDITOR.POSITION_BEFORE_END);
return 
}var v=this.element;
var x=this._.definition;
var AD;
var t=x.ignoreReadonly,q=t||x.includeReadonly;
if(q==undefined){q=AA.getCustomData("cke_includeReadonly")
}var AC=CKEDITOR.dtd[v]||(AD=true,CKEDITOR.dtd.span);
z.enlarge(CKEDITOR.ENLARGE_ELEMENT,1);
z.trim();
var AH=z.createBookmark(),AE=AH.startNode,n=AH.endNode;
var j=AE;
var w;
if(!t){var m=J(AE),AF=J(n);
if(m){j=m.getNextSourceNode(true)
}if(AF){n=AF
}}if(j.getPosition(n)==CKEDITOR.POSITION_FOLLOWING){j=0
}while(j){var AK=false;
if(j.equals(n)){j=null;
AK=true
}else{var l=j.type;
var h=l==CKEDITOR.NODE_ELEMENT?j.getName():null;
var o=h&&(j.getAttribute("contentEditable")=="false");
var p=h&&j.getAttribute("data-nostyle");
if(h&&j.data("cke-bookmark")){j=j.getNextSourceNode(true);
continue
}if(!h||(AC[h]&&!p&&(!o||q)&&(j.getPosition(n)|CKEDITOR.POSITION_PRECEDING|CKEDITOR.POSITION_IDENTICAL|CKEDITOR.POSITION_IS_CONTAINED)==(CKEDITOR.POSITION_PRECEDING+CKEDITOR.POSITION_IDENTICAL+CKEDITOR.POSITION_IS_CONTAINED)&&(!x.childRule||x.childRule(j)))){var AL=j.getParent();
if(AL&&((AL.getDtd()||CKEDITOR.dtd.span)[v]||AD)&&(!x.parentRule||x.parentRule(AL))){if(!w&&(!h||!CKEDITOR.dtd.$removeEmpty[h]||(j.getPosition(n)|CKEDITOR.POSITION_PRECEDING|CKEDITOR.POSITION_IDENTICAL|CKEDITOR.POSITION_IS_CONTAINED)==(CKEDITOR.POSITION_PRECEDING+CKEDITOR.POSITION_IDENTICAL+CKEDITOR.POSITION_IS_CONTAINED))){w=new CKEDITOR.dom.range(AA);
w.setStartBefore(j)
}if(l==CKEDITOR.NODE_TEXT||o||(l==CKEDITOR.NODE_ELEMENT&&!j.getChildCount())){var y=j;
var s;
while((AK=!y.getNext(F))&&(s=y.getParent(),AC[s.getName()])&&(s.getPosition(AE)|CKEDITOR.POSITION_FOLLOWING|CKEDITOR.POSITION_IDENTICAL|CKEDITOR.POSITION_IS_CONTAINED)==(CKEDITOR.POSITION_FOLLOWING+CKEDITOR.POSITION_IDENTICAL+CKEDITOR.POSITION_IS_CONTAINED)&&(!x.childRule||x.childRule(s))){y=s
}w.setEndAfter(y)
}}else{AK=true
}}else{AK=true
}j=j.getNextSourceNode(p||o)
}if(AK&&w&&!w.collapsed){var AJ=O(this,AA),r=AJ.hasAttributes();
var u=w.getCommonAncestor();
var AI={styles:{},attrs:{},blockedStyles:{},blockedAttrs:{}};
var AG,k,AB;
while(AJ&&u){if(u.getName()==v){for(AG in x.attributes){if(AI.blockedAttrs[AG]||!(AB=u.getAttribute(k))){continue
}if(AJ.getAttribute(AG)==AB){AI.attrs[AG]=1
}else{AI.blockedAttrs[AG]=1
}}for(k in x.styles){if(AI.blockedStyles[k]||!(AB=u.getStyle(k))){continue
}if(AJ.getStyle(k)==AB){AI.styles[k]=1
}else{AI.blockedStyles[k]=1
}}}u=u.getParent()
}for(AG in AI.attrs){AJ.removeAttribute(AG)
}for(k in AI.styles){AJ.removeStyle(k)
}if(r&&!AJ.hasAttributes()){AJ=null
}if(AJ){w.extractContents().appendTo(AJ);
H(this,AJ);
w.insertNode(AJ);
AJ.mergeSiblings();
if(!CKEDITOR.env.ie){AJ.$.normalize()
}}else{AJ=new CKEDITOR.dom.element("span");
w.extractContents().appendTo(AJ);
w.insertNode(AJ);
H(this,AJ);
AJ.remove(true)
}w=null
}}z.moveToBookmark(AH);
z.shrink(CKEDITOR.SHRINK_TEXT)
}function Y(q){q.enlarge(CKEDITOR.ENLARGE_ELEMENT,1);
var t=q.createBookmark(),k=t.startNode;
if(q.collapsed){var w=new CKEDITOR.dom.elementPath(k.getParent()),m;
for(var o=0,p;
o<w.elements.length&&(p=w.elements[o]);
o++){if(p==w.block||p==w.blockLimit){break
}if(this.checkElementRemovable(p)){var h;
if(q.collapsed&&(q.checkBoundaryOfElement(p,CKEDITOR.END)||(h=q.checkBoundaryOfElement(p,CKEDITOR.START)))){m=p;
m.match=h?"start":"end"
}else{p.mergeSiblings();
if(p.getName()==this.element){B(this,p)
}else{a(p,Z(this)[p.getName()])
}}}}if(m){var n=k;
for(o=0;
;
o++){var s=w.elements[o];
if(s.equals(m)){break
}else{if(s.match){continue
}else{s=s.clone()
}}s.append(n);
n=s
}n[m.match=="start"?"insertBefore":"insertAfter"](m)
}}else{var r=t.endNode,u=this;
function v(){var AB=new CKEDITOR.dom.elementPath(k.getParent()),x=new CKEDITOR.dom.elementPath(r.getParent()),AC=null,AA=null;
for(var z=0;
z<AB.elements.length;
z++){var y=AB.elements[z];
if(y==AB.block||y==AB.blockLimit){break
}if(u.checkElementRemovable(y)){AC=y
}}for(z=0;
z<x.elements.length;
z++){y=x.elements[z];
if(y==x.block||y==x.blockLimit){break
}if(u.checkElementRemovable(y)){AA=y
}}if(AA){r.breakParent(AA)
}if(AC){k.breakParent(AC)
}}v();
var j=k;
while(!j.equals(r)){var l=j.getNextSourceNode();
if(j.type==CKEDITOR.NODE_ELEMENT&&this.checkElementRemovable(j)){if(j.getName()==this.element){B(this,j)
}else{a(j,Z(this)[j.getName()])
}if(l.type==CKEDITOR.NODE_ELEMENT&&l.contains(k)){v();
l=k.getNext()
}}j=l
}}q.moveToBookmark(t)
}function D(i){var h=i.getCommonAncestor(true,true),j=h.getAscendant(this.element,true);
j&&!j.isReadOnly()&&g(j,this)
}function R(l){var h=l.getCommonAncestor(true,true),n=h.getAscendant(this.element,true);
if(!n){return 
}var o=this,p=o._.definition,k=p.attributes;
if(k){for(var j in k){n.removeAttribute(j,k[j])
}}if(p.styles){for(var m in p.styles){if(!p.styles.hasOwnProperty(m)){continue
}n.removeStyle(m)
}}}function U(h){var j=h.createBookmark(true);
var i=h.createIterator();
i.enforceRealBlocks=true;
if(this._.enterMode){i.enlargeBr=(this._.enterMode!=CKEDITOR.ENTER_BR)
}var m;
var k=h.document;
var l;
while((m=i.getNextParagraph())){if(!m.isReadOnly()){var n=O(this,k,m);
b(m,n)
}}h.moveToBookmark(j)
}function S(h){var j=h.createBookmark(1);
var i=h.createIterator();
i.enforceRealBlocks=true;
i.enlargeBr=this._.enterMode!=CKEDITOR.ENTER_BR;
var k;
while((k=i.getNextParagraph())){if(this.checkElementRemovable(k)){if(k.is("pre")){var l=this._.enterMode==CKEDITOR.ENTER_BR?null:h.document.createElement(this._.enterMode==CKEDITOR.ENTER_P?"p":"div");
l&&k.copyAttributes(l);
b(k,l)
}else{B(this,k,1)
}}}h.moveToBookmark(j)
}function b(m,n){var h=!n;
if(h){n=m.getDocument().createElement("div");
m.copyAttributes(n)
}var i=n&&n.is("pre");
var j=m.is("pre");
var l=i&&!j;
var k=!i&&j;
if(l){n=A(m,n)
}else{if(k){n=P(h?[m.getHtml()]:E(m),n)
}else{m.moveChildren(n)
}}n.replace(m);
if(i){e(n)
}else{if(h){W(n)
}}}function e(j){var i;
if(!((i=j.getPrevious(T))&&i.is&&i.is("pre"))){return 
}var h=c(i.getHtml(),/\n$/,"")+"\n\n"+c(j.getHtml(),/^\n/,"");
if(CKEDITOR.env.ie){j.$.outerHTML="<pre>"+h+"</pre>"
}else{j.setHtml(h)
}i.remove()
}function E(l){var j=/(\S\s*)\n(?:\s|(<span[^>]+data-cke-bookmark.*?\/span>))*\n(?!$)/gi,i=l.getName(),h=c(l.getOuterHtml(),j,function(m,n,o){return n+"</pre>"+o+"<pre>"
});
var k=[];
h.replace(/<pre\b.*?>([\s\S]*?)<\/pre>/gi,function(n,m){k.push(m)
});
return k
}function c(l,k,i){var h="",j="";
l=l.replace(/(^<span[^>]+data-cke-bookmark.*?\/span>)|(<span[^>]+data-cke-bookmark.*?\/span>$)/gi,function(o,n,m){n&&(h=n);
m&&(j=m);
return""
});
return h+l.replace(k,i)+j
}function P(l,n){var k;
if(l.length>1){k=new CKEDITOR.dom.documentFragment(n.getDocument())
}for(var j=0;
j<l.length;
j++){var h=l[j];
h=h.replace(/(\r\n|\r)/g,"\n");
h=c(h,/^[ \t]*\n/,"");
h=c(h,/\n$/,"");
h=c(h,/^[ \t]+|[ \t]+$/g,function(i,p,o){if(i.length==1){return"&nbsp;"
}else{if(!p){return CKEDITOR.tools.repeat("&nbsp;",i.length-1)+" "
}else{return" "+CKEDITOR.tools.repeat("&nbsp;",i.length-1)
}}});
h=h.replace(/\n/g,"<br>");
h=h.replace(/[ \t]{2,}/g,function(i){return CKEDITOR.tools.repeat("&nbsp;",i.length-1)+" "
});
if(k){var m=n.clone();
m.setHtml(h);
k.append(m)
}else{n.setHtml(h)
}}return k||n
}function A(k,l){var i=k.getBogus();
i&&i.remove();
var j=k.getHtml();
j=c(j,/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g,"");
j=j.replace(/[ \t\r\n]*(<br[^>]*>)[ \t\r\n]*/gi,"$1");
j=j.replace(/([ \t\n\r]+|&nbsp;)/g," ");
j=j.replace(/<br\b[^>]*>/gi,"\n");
if(CKEDITOR.env.ie){var h=k.getDocument().createElement("div");
h.append(l);
l.$.outerHTML="<pre>"+j+"</pre>";
l.copyAttributes(h.getFirst());
l=h.getFirst().remove()
}else{l.setHtml(j)
}return l
}function B(i,m){var j=i._.definition,l=j.attributes,p=j.styles,o=Z(i)[m.getName()],h=CKEDITOR.tools.isEmpty(l)&&CKEDITOR.tools.isEmpty(p);
for(var n in l){if((n=="class"||i._.definition.fullMatch)&&m.getAttribute(n)!=Q(n,l[n])){continue
}h=m.hasAttribute(n);
m.removeAttribute(n)
}for(var k in p){if(i._.definition.fullMatch&&m.getStyle(k)!=Q(k,p[k],true)){continue
}h=h||!!m.getStyle(k);
m.removeStyle(k)
}a(m,o,I[m.getName()]);
if(h){!CKEDITOR.dtd.$block[m.getName()]||i._.enterMode==CKEDITOR.ENTER_BR&&!m.hasAttributes()?W(m):m.renameNode(i._.enterMode==CKEDITOR.ENTER_P?"p":"div")
}}function H(j,l){var k=j._.definition,h=k.attributes,r=k.styles,p=Z(j),q=l.getElementsByTag(j.element);
for(var m=q.count();
--m>=0;
){B(j,q.getItem(m))
}for(var o in p){if(o!=j.element){q=l.getElementsByTag(o);
for(m=q.count()-1;
m>=0;
m--){var n=q.getItem(m);
a(n,p[o])
}}}}function a(m,o,l){var h=o&&o.attributes;
if(h){for(var k=0;
k<h.length;
k++){var n=h[k][0],p;
if((p=m.getAttribute(n))){var j=h[k][1];
if(j===null||(j.test&&j.test(p))||(typeof j=="string"&&p==j)){m.removeAttribute(n)
}}}}if(!l){W(m)
}}function W(h){if(!h.hasAttributes()){if(CKEDITOR.dtd.$block[h.getName()]){var k=h.getPrevious(T),i=h.getNext(T);
if(k&&(k.type==CKEDITOR.NODE_TEXT||!k.isBlockBoundary({br:1}))){h.append("br",1)
}if(i&&(i.type==CKEDITOR.NODE_TEXT||!i.isBlockBoundary({br:1}))){h.append("br")
}h.remove(true)
}else{var l=h.getFirst();
var j=h.getLast();
h.remove(true);
if(l){l.type==CKEDITOR.NODE_ELEMENT&&l.mergeSiblings();
if(j&&!l.equals(j)&&j.type==CKEDITOR.NODE_ELEMENT){j.mergeSiblings()
}}}}}function O(k,l,i){var j,m=k._.definition,h=k.element;
if(h=="*"){h="span"
}j=new CKEDITOR.dom.element(h,l);
if(i){i.copyAttributes(j)
}j=g(j,k);
if(l.getCustomData("doc_processing_style")&&j.hasAttribute("id")){j.removeAttribute("id")
}else{l.setCustomData("doc_processing_style",1)
}return j
}function g(k,j){var m=j._.definition,i=m.attributes,l=CKEDITOR.style.getStyleText(m);
if(i){for(var h in i){k.setAttribute(h,i[h])
}}if(l){k.setAttribute("style",l)
}return k
}function K(j,h){for(var i in j){j[i]=j[i].replace(C,function(k,l){return h[l]
})
}}function M(i){var l=i._AC;
if(l){return l
}l={};
var j=0;
var k=i.attributes;
if(k){for(var h in k){j++;
l[h]=k[h]
}}var m=CKEDITOR.style.getStyleText(i);
if(m){if(!l.style){j++
}l.style=m
}l._length=j;
return(i._AC=l)
}function Z(h){if(h._.overrides){return h._.overrides
}var p=(h._.overrides={}),l=h._.definition.overrides;
if(l){if(!CKEDITOR.tools.isArray(l)){l=[l]
}for(var m=0;
m<l.length;
m++){var j=l[m];
var r;
var n;
var q;
if(typeof j=="string"){r=j.toLowerCase()
}else{r=j.element?j.element.toLowerCase():h.element;
q=j.attributes
}n=p[r]||(p[r]={});
if(q){var k=(n.attributes=n.attributes||new Array());
for(var o in q){k.push([o.toLowerCase(),q[o]])
}}}}return p
}function Q(i,k,j){var h=new CKEDITOR.dom.element("span");
h[j?"setStyle":"setAttribute"](i,k);
return h[j?"getStyle":"getAttribute"](i)
}function L(j,i){var k;
if(i!==false){var h=new CKEDITOR.dom.element("span");
h.setAttribute("style",j);
k=h.getAttribute("style")||""
}else{k=j
}k=k.replace(/(font-family:)(.*?)(?=;|$)/,function(l,p,o){var n=o.split(",");
for(var m=0;
m<n.length;
m++){n[m]=CKEDITOR.tools.trim(n[m].replace(/["']/g,""))
}return p+n.join(",")
});
return k.replace(/\s*([;:])\s*/,"$1").replace(/([^\s;])$/,"$1;").replace(/,\s+/g,",").replace(/\"/g,"").toLowerCase()
}function G(i){var h={};
i.replace(/&quot;/g,'"').replace(/\s*([^ :;]+)\s*:\s*([^;]+)\s*(?=;|$)/g,function(k,j,l){h[j]=l
});
return h
}function V(i,j){typeof i=="string"&&(i=G(i));
typeof j=="string"&&(j=G(j));
for(var h in i){if(!(h in j&&(j[h]==i[h]||i[h]=="inherit"||j[h]=="inherit"))){return false
}}return true
}function d(i,h){var n=i.getSelection(),m=n.createBookmarks(1),j=n.getRanges(),o=h?this.removeFromRange:this.applyToRange,k;
var l=j.createIterator();
while((k=l.getNextRange())){o.call(this,k)
}if(m.length==1&&m[0].collapsed){n.selectRanges(j);
i.getById(m[0].startNode).remove()
}else{n.selectBookmarks(m)
}i.removeCustomData("doc_processing_style")
}})();
CKEDITOR.styleCommand=function(A){this.style=A
};
CKEDITOR.styleCommand.prototype.exec=function(A){A.focus();
var B=A.document;
if(B){if(this.state==CKEDITOR.TRISTATE_OFF){this.style.apply(B)
}else{if(this.state==CKEDITOR.TRISTATE_ON){this.style.remove(B)
}}}return !!B
};
CKEDITOR.stylesSet=new CKEDITOR.resourceManager("","stylesSet");
CKEDITOR.addStylesSet=CKEDITOR.tools.bind(CKEDITOR.stylesSet.add,CKEDITOR.stylesSet);
CKEDITOR.loadStylesSet=function(B,A,C){CKEDITOR.stylesSet.addExternal(B,A,"");
CKEDITOR.stylesSet.load(B,C)
};
CKEDITOR.editor.prototype.getStylesSet=function(G){if(!this._.stylesDefinitions){var D=this,B=D.config.stylesCombo_stylesSet||D.config.stylesSet||"default";
if(B instanceof Array){D._.stylesDefinitions=B;
G(B);
return 
}var C=B.split(":"),F=C[0],E=C[1],A=CKEDITOR.plugins.registered.styles.path;
CKEDITOR.stylesSet.addExternal(F,E?C.slice(1).join(":"):A+"styles/"+F+".js","");
CKEDITOR.stylesSet.load(F,function(H){D._.stylesDefinitions=H[F];
G(D._.stylesDefinitions)
})
}else{G(this._.stylesDefinitions)
}};