;
CKEDITOR.dom.element=function(B,A){if(typeof B=="string"){B=(A?A.$:document).createElement(B)
}CKEDITOR.dom.domObject.call(this,B)
};
CKEDITOR.dom.element.get=function(A){return A&&(A.$?A:new CKEDITOR.dom.element(A))
};
CKEDITOR.dom.element.prototype=new CKEDITOR.dom.node();
CKEDITOR.dom.element.createFromHtml=function(C,B){var A=new CKEDITOR.dom.element("div",B);
A.setHtml(C);
return A.getFirst().remove()
};
CKEDITOR.dom.element.setMarker=function(E,B,A,D){var F=B.getCustomData("list_marker_id")||(B.setCustomData("list_marker_id",CKEDITOR.tools.getNextNumber()).getCustomData("list_marker_id")),C=B.getCustomData("list_marker_names")||(B.setCustomData("list_marker_names",{}).getCustomData("list_marker_names"));
E[F]=B;
C[A]=1;
return B.setCustomData(A,D)
};
CKEDITOR.dom.element.clearAllMarkers=function(B){for(var A in B){CKEDITOR.dom.element.clearMarkers(B,B[A],1)
}};
CKEDITOR.dom.element.clearMarkers=function(C,B,E){var D=B.getCustomData("list_marker_names"),F=B.getCustomData("list_marker_id");
for(var A in D){B.removeCustomData(A)
}B.removeCustomData("list_marker_names");
if(E){B.removeCustomData("list_marker_id");
delete C[F]
}};
CKEDITOR.tools.extend(CKEDITOR.dom.element.prototype,{type:CKEDITOR.NODE_ELEMENT,addClass:function(A){var C=this.$.className;
if(C){var B=new RegExp("(?:^|\\s)"+A+"(?:\\s|$)","");
if(!B.test(C)){C+=" "+A
}}this.$.className=C||A
},removeClass:function(A){var C=this.getAttribute("class");
if(C){var B=new RegExp("(?:^|\\s+)"+A+"(?=\\s|$)","i");
if(B.test(C)){C=C.replace(B,"").replace(/^\s+/,"");
if(C){this.setAttribute("class",C)
}else{this.removeAttribute("class")
}}}},hasClass:function(A){var B=new RegExp("(?:^|\\s+)"+A+"(?=\\s|$)","");
return B.test(this.getAttribute("class"))
},append:function(B,A){if(typeof B=="string"){B=this.getDocument().createElement(B)
}if(A){this.$.insertBefore(B.$,this.$.firstChild)
}else{this.$.appendChild(B.$)
}return B
},appendHtml:function(B){if(!this.$.childNodes.length){this.setHtml(B)
}else{var A=new CKEDITOR.dom.element("div",this.getDocument());
A.setHtml(B);
A.moveChildren(this)
}},appendText:function(A){if(this.$.text!=undefined){this.$.text+=A
}else{this.append(new CKEDITOR.dom.text(A))
}},appendBogus:function(){var B=this.getLast();
while(B&&B.type==CKEDITOR.NODE_TEXT&&!CKEDITOR.tools.rtrim(B.getText())){B=B.getPrevious()
}if(!B||!B.is||!B.is("br")){var A=CKEDITOR.env.opera?this.getDocument().createText(""):this.getDocument().createElement("br");
CKEDITOR.env.gecko&&A.setAttribute("type","_moz");
this.append(A)
}},breakParent:function(C){var A=new CKEDITOR.dom.range(this.getDocument());
A.setStartAfter(this);
A.setEndAfter(C);
var B=A.extractContents();
A.insertNode(this.remove());
B.insertAfterNode(this)
},contains:CKEDITOR.env.ie||CKEDITOR.env.webkit?function(A){var B=this.$;
return A.type!=CKEDITOR.NODE_ELEMENT?B.contains(A.getParent().$):B!=A.$&&B.contains(A.$)
}:function(A){return !!(this.$.compareDocumentPosition(A.$)&16)
},focus:(function(){function A(){try{this.$.focus()
}catch(B){}}return function(B){if(B){CKEDITOR.tools.setTimeout(A,100,this)
}else{A.call(this)
}}
})(),getHtml:function(){var A=this.$.innerHTML;
return CKEDITOR.env.ie?A.replace(/<\?[^>]*>/g,""):A
},getOuterHtml:function(){if(this.$.outerHTML){return this.$.outerHTML.replace(/<\?[^>]*>/,"")
}var A=this.$.ownerDocument.createElement("div");
A.appendChild(this.$.cloneNode(true));
return A.innerHTML
},setHtml:function(A){return(this.$.innerHTML=A)
},setText:function(A){CKEDITOR.dom.element.prototype.setText=(this.$.innerText!=undefined)?function(B){return this.$.innerText=B
}:function(B){return this.$.textContent=B
};
return this.setText(A)
},getAttribute:(function(){var A=function(B){return this.$.getAttribute(B,2)
};
if(CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.ie6Compat)){return function(D){switch(D){case"class":D="className";
break;
case"http-equiv":D="httpEquiv";
break;
case"name":return this.$.name;
case"tabindex":var C=A.call(this,D);
if(C!==0&&this.$.tabIndex===0){C=null
}return C;
break;
case"checked":var B=this.$.attributes.getNamedItem(D),E=B.specified?B.nodeValue:this.$.checked;
return E?"checked":null;
case"hspace":case"value":return this.$[D];
case"style":return this.$.style.cssText
}return A.call(this,D)
}
}else{return A
}})(),getChildren:function(){return new CKEDITOR.dom.nodeList(this.$.childNodes)
},getComputedStyle:CKEDITOR.env.ie?function(A){return this.$.currentStyle[CKEDITOR.tools.cssStyleToDomStyle(A)]
}:function(A){return this.getWindow().$.getComputedStyle(this.$,"").getPropertyValue(A)
},getDtd:function(){var A=CKEDITOR.dtd[this.getName()];
this.getDtd=function(){return A
};
return A
},getElementsByTag:CKEDITOR.dom.document.prototype.getElementsByTag,getTabIndex:CKEDITOR.env.ie?function(){var A=this.$.tabIndex;
if(A===0&&!CKEDITOR.dtd.$tabIndex[this.getName()]&&parseInt(this.getAttribute("tabindex"),10)!==0){A=-1
}return A
}:CKEDITOR.env.webkit?function(){var A=this.$.tabIndex;
if(A==undefined){A=parseInt(this.getAttribute("tabindex"),10);
if(isNaN(A)){A=-1
}}return A
}:function(){return this.$.tabIndex
},getText:function(){return this.$.textContent||this.$.innerText||""
},getWindow:function(){return this.getDocument().getWindow()
},getId:function(){return this.$.id||null
},getNameAtt:function(){return this.$.name||null
},getName:function(){var B=this.$.nodeName.toLowerCase();
if(CKEDITOR.env.ie&&!(document.documentMode>8)){var A=this.$.scopeName;
if(A!="HTML"){B=A.toLowerCase()+":"+B
}}return(this.getName=function(){return B
})()
},getValue:function(){return this.$.value
},getFirst:function(C){var B=this.$.firstChild,A=B&&new CKEDITOR.dom.node(B);
if(A&&C&&!C(A)){A=A.getNext(C)
}return A
},getLast:function(C){var B=this.$.lastChild,A=B&&new CKEDITOR.dom.node(B);
if(A&&C&&!C(A)){A=A.getPrevious(C)
}return A
},getStyle:function(A){return this.$.style[CKEDITOR.tools.cssStyleToDomStyle(A)]
},is:function(){var A=this.getName();
for(var B=0;
B<arguments.length;
B++){if(arguments[B]==A){return true
}}return false
},isEditable:function(C){var A=this.getName();
if(this.isReadOnly()||this.getComputedStyle("display")=="none"||this.getComputedStyle("visibility")=="hidden"||this.is("a")&&this.data("cke-saved-name")&&!this.getChildCount()||CKEDITOR.dtd.$nonEditable[A]){return false
}if(C!==false){var B=CKEDITOR.dtd[A]||CKEDITOR.dtd.span;
return(B&&B["#"])
}return true
},isIdentical:function(B){if(this.getName()!=B.getName()){return false
}var G=this.$.attributes,F=B.$.attributes;
var D=G.length,A=F.length;
for(var C=0;
C<D;
C++){var E=G[C];
if(E.nodeName=="_moz_dirty"){continue
}if((!CKEDITOR.env.ie||(E.specified&&E.nodeName!="data-cke-expando"))&&E.nodeValue!=B.getAttribute(E.nodeName)){return false
}}if(CKEDITOR.env.ie){for(C=0;
C<A;
C++){E=F[C];
if(E.specified&&E.nodeName!="data-cke-expando"&&E.nodeValue!=this.getAttribute(E.nodeName)){return false
}}}return true
},isVisible:function(){var B=(this.$.offsetHeight||this.$.offsetWidth)&&this.getComputedStyle("visibility")!="hidden",A,C;
if(B&&(CKEDITOR.env.webkit||CKEDITOR.env.opera)){A=this.getWindow();
if(!A.equals(CKEDITOR.document.getWindow())&&(C=A.$.frameElement)){B=new CKEDITOR.dom.element(C).isVisible()
}}return !!B
},isEmptyInlineRemoveable:function(){if(!CKEDITOR.dtd.$removeEmpty[this.getName()]){return false
}var B=this.getChildren();
for(var A=0,C=B.count();
A<C;
A++){var D=B.getItem(A);
if(D.type==CKEDITOR.NODE_ELEMENT&&D.data("cke-bookmark")){continue
}if(D.type==CKEDITOR.NODE_ELEMENT&&!D.isEmptyInlineRemoveable()||D.type==CKEDITOR.NODE_TEXT&&CKEDITOR.tools.trim(D.getText())){return false
}}return true
},hasAttributes:CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.ie6Compat)?function(){var A=this.$.attributes;
for(var B=0;
B<A.length;
B++){var C=A[B];
switch(C.nodeName){case"class":if(this.getAttribute("class")){return true
}case"data-cke-expando":continue;
default:if(C.specified){return true
}}}return false
}:function(){var A=this.$.attributes,C=A.length;
var B={"data-cke-expando":1,_moz_dirty:1};
return C>0&&(C>2||!B[A[0].nodeName]||(C==2&&!B[A[1].nodeName]))
},hasAttribute:(function(){function A(B){var C=this.$.attributes.getNamedItem(B);
return !!(C&&C.specified)
}return(CKEDITOR.env.ie&&CKEDITOR.env.version<8)?function(B){if(B=="name"){return !!this.$.name
}return A.call(this,B)
}:A
})(),hide:function(){this.setStyle("display","none")
},moveChildren:function(C,A){var B=this.$;
C=C.$;
if(B==C){return 
}var D;
if(A){while((D=B.lastChild)){C.insertBefore(B.removeChild(D),C.firstChild)
}}else{while((D=B.firstChild)){C.appendChild(B.removeChild(D))
}}},mergeSiblings:(function(){function A(B,C,D){if(C&&C.type==CKEDITOR.NODE_ELEMENT){var E=[];
while(C.data("cke-bookmark")||C.isEmptyInlineRemoveable()){E.push(C);
C=D?C.getNext():C.getPrevious();
if(!C||C.type!=CKEDITOR.NODE_ELEMENT){return 
}}if(B.isIdentical(C)){var F=D?B.getLast():B.getFirst();
while(E.length){E.shift().move(B,!D)
}C.moveChildren(B,!D);
C.remove();
if(F&&F.type==CKEDITOR.NODE_ELEMENT){F.mergeSiblings()
}}}}return function(B){if(!(B===false||CKEDITOR.dtd.$removeEmpty[this.getName()]||this.is("a"))){return 
}A(this,this.getNext(),true);
A(this,this.getPrevious())
}
})(),show:function(){this.setStyles({display:"",visibility:""})
},setAttribute:(function(){var A=function(B,C){this.$.setAttribute(B,C);
return this
};
if(CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.ie6Compat)){return function(B,C){if(B=="class"){this.$.className=C
}else{if(B=="style"){this.$.style.cssText=C
}else{if(B=="tabindex"){this.$.tabIndex=C
}else{if(B=="checked"){this.$.checked=C
}else{A.apply(this,arguments)
}}}}return this
}
}else{if(CKEDITOR.env.ie8Compat&&CKEDITOR.env.secure){return function(B,C){if(B=="src"&&C.match(/^http:\/\//)){try{A.apply(this,arguments)
}catch(D){}}else{A.apply(this,arguments)
}return this
}
}else{return A
}}})(),setAttributes:function(B){for(var A in B){this.setAttribute(A,B[A])
}return this
},setValue:function(A){this.$.value=A;
return this
},removeAttribute:(function(){var A=function(B){this.$.removeAttribute(B)
};
if(CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.ie6Compat)){return function(B){if(B=="class"){B="className"
}else{if(B=="tabindex"){B="tabIndex"
}}A.call(this,B)
}
}else{return A
}})(),removeAttributes:function(B){if(CKEDITOR.tools.isArray(B)){for(var C=0;
C<B.length;
C++){this.removeAttribute(B[C])
}}else{for(var A in B){B.hasOwnProperty(A)&&this.removeAttribute(A)
}}},removeStyle:function(A){this.setStyle(A,"");
if(this.$.style.removeAttribute){this.$.style.removeAttribute(CKEDITOR.tools.cssStyleToDomStyle(A))
}if(!this.$.style.cssText){this.removeAttribute("style")
}},setStyle:function(A,B){this.$.style[CKEDITOR.tools.cssStyleToDomStyle(A)]=B;
return this
},setStyles:function(A){for(var B in A){this.setStyle(B,A[B])
}return this
},setOpacity:function(A){if(CKEDITOR.env.ie){A=Math.round(A*100);
this.setStyle("filter",A>=100?"":"progid:DXImageTransform.Microsoft.Alpha(opacity="+A+")")
}else{this.setStyle("opacity",A)
}},unselectable:CKEDITOR.env.gecko?function(){this.$.style.MozUserSelect="none";
this.on("dragstart",function(A){A.data.preventDefault()
})
}:CKEDITOR.env.webkit?function(){this.$.style.KhtmlUserSelect="none";
this.on("dragstart",function(A){A.data.preventDefault()
})
}:function(){if(CKEDITOR.env.ie||CKEDITOR.env.opera){var B=this.$,C=B.getElementsByTagName("*"),D,A=0;
B.unselectable="on";
while((D=C[A++])){switch(D.tagName.toLowerCase()){case"iframe":case"textarea":case"input":case"select":break;
default:D.unselectable="on"
}}}},getPositionedAncestor:function(){var A=this;
while(A.getName()!="html"){if(A.getComputedStyle("position")!="static"){return A
}A=A.getParent()
}return null
},getDocumentPosition:function(F){var I=0,G=0,U=this.getDocument(),K=U.getBody(),P=U.$.compatMode=="BackCompat";
if(document.documentElement.getBoundingClientRect){var J=this.$.getBoundingClientRect(),D=U.$,R=D.documentElement;
var M=R.clientTop||K.$.clientTop||0,T=R.clientLeft||K.$.clientLeft||0,Q=true;
if(CKEDITOR.env.ie){var S=U.getDocumentElement().contains(this),H=U.getBody().contains(this);
Q=(P&&H)||(!P&&S)
}if(Q){I=J.left+(!P&&R.scrollLeft||K.$.scrollLeft);
I-=T;
G=J.top+(!P&&R.scrollTop||K.$.scrollTop);
G-=M
}}else{var N=this,B=null,A;
while(N&&!(N.getName()=="body"||N.getName()=="html")){I+=N.$.offsetLeft-N.$.scrollLeft;
G+=N.$.offsetTop-N.$.scrollTop;
if(!N.equals(this)){I+=(N.$.clientLeft||0);
G+=(N.$.clientTop||0)
}var C=B;
while(C&&!C.equals(N)){I-=C.$.scrollLeft;
G-=C.$.scrollTop;
C=C.getParent()
}B=N;
N=(A=N.$.offsetParent)?new CKEDITOR.dom.element(A):null
}}if(F){var E=this.getWindow(),L=F.getWindow();
if(!E.equals(L)&&E.$.frameElement){var O=(new CKEDITOR.dom.element(E.$.frameElement)).getDocumentPosition(F);
I+=O.x;
G+=O.y
}}if(!document.documentElement.getBoundingClientRect){if(CKEDITOR.env.gecko&&!P){I+=this.$.clientLeft?1:0;
G+=this.$.clientTop?1:0
}}return{x:I,y:G}
},scrollIntoView:function(D){var C=this.getParent();
if(!C){return 
}do{var A=C.$.clientWidth&&C.$.clientWidth<C.$.scrollWidth||C.$.clientHeight&&C.$.clientHeight<C.$.scrollHeight;
if(A){this.scrollIntoParent(C,D,1)
}if(C.is("html")){var E=C.getWindow();
try{var B=E.$.frameElement;
B&&(C=new CKEDITOR.dom.element(B))
}catch(F){}}}while((C=C.getParent()))
},scrollIntoParent:function(O,P,B){!O&&(O=this.getWindow());
var N=O.getDocument();
var D=N.$.compatMode=="BackCompat";
if(O instanceof CKEDITOR.dom.window){O=D?N.getBody():N.getDocumentElement()
}function I(R,S){if(/body|html/.test(O.getName())){O.getWindow().$.scrollBy(R,S)
}else{O.$.scrollLeft+=R;
O.$.scrollTop+=S
}}function C(R,S){var W={x:0,y:0};
if(!(R.is(D?"body":"html"))){var U=R.$.getBoundingClientRect();
W.x=U.left,W.y=U.top
}var V=R.getWindow();
if(!V.equals(S)){var T=C(CKEDITOR.dom.element.get(V.$.frameElement),S);
W.x+=T.x,W.y+=T.y
}return W
}function F(S,R){return parseInt(S.getComputedStyle("margin-"+R)||0,10)||0
}var K=O.getWindow();
var J=C(this,K),M=C(O,K),E=this.$.offsetHeight,L=this.$.offsetWidth,A=O.$.clientHeight,H=O.$.clientWidth,G,Q;
G={x:J.x-F(this,"left")-M.x||0,y:J.y-F(this,"top")-M.y||0};
Q={x:J.x+L+F(this,"right")-((M.x)+H)||0,y:J.y+E+F(this,"bottom")-((M.y)+A)||0};
if(G.y<0||Q.y>0){I(0,P===true?G.y:P===false?Q.y:G.y<0?G.y:Q.y)
}if(B&&(G.x<0||Q.x>0)){I(G.x<0?G.x:Q.x,0)
}},setState:function(A){switch(A){case CKEDITOR.TRISTATE_ON:this.addClass("cke_on");
this.removeClass("cke_off");
this.removeClass("cke_disabled");
break;
case CKEDITOR.TRISTATE_DISABLED:this.addClass("cke_disabled");
this.removeClass("cke_off");
this.removeClass("cke_on");
break;
default:this.addClass("cke_off");
this.removeClass("cke_on");
this.removeClass("cke_disabled");
break
}},getFrameDocument:function(){var A=this.$;
try{A.contentWindow.document
}catch(B){A.src=A.src;
if(CKEDITOR.env.ie&&CKEDITOR.env.version<7){window.showModalDialog('javascript:document.write("<script>window.setTimeout(function(){window.close();},50);<\/script>")')
}}return A&&new CKEDITOR.dom.document(A.contentWindow.document)
},copyAttributes:function(B,E){var A=this.$.attributes;
E=E||{};
for(var G=0;
G<A.length;
G++){var D=A[G];
var C=D.nodeName.toLowerCase(),F;
if(C in E){continue
}if(C=="checked"&&(F=this.getAttribute(C))){B.setAttribute(C,F)
}else{if(D.specified||(CKEDITOR.env.ie&&D.nodeValue&&C=="value")){F=this.getAttribute(C);
if(F===null){F=D.nodeValue
}B.setAttribute(C,F)
}}}if(this.$.style.cssText!==""){B.$.style.cssText=this.$.style.cssText
}},renameNode:function(B){if(this.getName()==B){return 
}var C=this.getDocument();
var A=new CKEDITOR.dom.element(B,C);
this.copyAttributes(A);
this.moveChildren(A);
this.getParent()&&this.$.parentNode.replaceChild(A.$,this.$);
A.$["data-cke-expando"]=this.$["data-cke-expando"];
this.$=A.$
},getChild:function(B){var A=this.$;
if(!B.slice){A=A.childNodes[B]
}else{while(B.length>0&&A){A=A.childNodes[B.shift()]
}}return A?new CKEDITOR.dom.node(A):null
},getChildCount:function(){return this.$.childNodes.length
},disableContextMenu:function(){this.on("contextmenu",function(A){if(!A.data.getTarget().hasClass("cke_enable_context_menu")){A.data.preventDefault()
}})
},getDirection:function(A){return A?this.getComputedStyle("direction")||this.getDirection()||this.getDocument().$.dir||this.getDocument().getBody().getDirection(1):this.getStyle("direction")||this.getAttribute("dir")
},data:function(A,B){A="data-"+A;
if(B===undefined){return this.getAttribute(A)
}else{if(B===false){this.removeAttribute(A)
}else{this.setAttribute(A,B)
}}return null
}});
(function(){var B={width:["border-left-width","border-right-width","padding-left","padding-right"],height:["border-top-width","border-bottom-width","padding-top","padding-bottom"]};
function A(F){var D=0;
for(var E=0,C=B[F].length;
E<C;
E++){D+=parseInt(this.getComputedStyle(B[F][E])||0,10)||0
}return D
}CKEDITOR.dom.element.prototype.setSize=function(D,C,E){if(typeof C=="number"){if(E&&!(CKEDITOR.env.ie&&CKEDITOR.env.quirks)){C-=A.call(this,D)
}this.setStyle(D,C+"px")
}};
CKEDITOR.dom.element.prototype.getSize=function(D,E){var C=Math.max(this.$["offset"+CKEDITOR.tools.capitalize(D)],this.$["client"+CKEDITOR.tools.capitalize(D)])||0;
if(E){C-=A.call(this,D)
}return C
}
})();