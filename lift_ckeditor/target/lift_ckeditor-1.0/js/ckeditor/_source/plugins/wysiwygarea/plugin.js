(function(){var M=/(^|<body\b[^>]*>)\s*<(p|div|address|h\d|center|pre)[^>]*>\s*(?:<br[^>]*>|&nbsp;|\u00A0|&#160;)?\s*(:?<\/\2>)?\s*(?=$|<\/body>)/gi;
var F=CKEDITOR.dom.walker.whitespaces(true);
function G(Q){return Q.isBlockBoundary()&&CKEDITOR.dtd.$empty[Q.getName()]
}function N(Q){return function(R){if(this.mode=="wysiwyg"){this.focus();
var S=this.getSelection(),T=S.isLocked;
T&&S.unlock();
this.fire("saveSnapshot");
Q.call(this,R.data);
T&&this.getSelection().lock();
CKEDITOR.tools.setTimeout(function(){this.fire("saveSnapshot")
},0,this)
}}
}function O(R){if(this.dataProcessor){R=this.dataProcessor.toHtml(R)
}if(!R){return 
}var W=this.getSelection(),T=W.getRanges()[0];
if(T.checkReadOnly()){return 
}if(CKEDITOR.env.opera){var Y=new CKEDITOR.dom.elementPath(T.startContainer);
if(Y.block){var Q=CKEDITOR.htmlParser.fragment.fromHtml(R,false).children;
for(var S=0,U=Q.length;
S<U;
S++){if(Q[S]._.isBlockLike){T.splitBlock(this.enterMode==CKEDITOR.ENTER_DIV?"div":"p");
T.insertNode(T.document.createText(""));
T.select();
break
}}}}if(CKEDITOR.env.ie){var V=W.getNative();
if(V.type=="Control"){V.clear()
}else{if(W.getType()==CKEDITOR.SELECTION_TEXT){T=W.getRanges()[0];
var X=T&&T.endContainer;
if(X&&X.type==CKEDITOR.NODE_ELEMENT&&X.getAttribute("contenteditable")=="false"&&T.checkBoundaryOfElement(X,CKEDITOR.END)){T.setEndAfter(T.endContainer);
T.deleteContents()
}}}V.createRange().pasteHTML(R)
}else{this.document.$.execCommand("inserthtml",false,R)
}if(CKEDITOR.env.webkit){W=this.getSelection();
W.scrollIntoView()
}}function I(X){var V=this.getSelection(),T=V.getStartElement().hasAscendant("pre",true)?CKEDITOR.ENTER_BR:this.config.enterMode,U=T==CKEDITOR.ENTER_BR;
var S=CKEDITOR.tools.htmlEncode(X.replace(/\r\n|\r/g,"\n"));
S=S.replace(/^[ \t]+|[ \t]+$/g,function(a,c,b){if(a.length==1){return"&nbsp;"
}else{if(!c){return CKEDITOR.tools.repeat("&nbsp;",a.length-1)+" "
}else{return" "+CKEDITOR.tools.repeat("&nbsp;",a.length-1)
}}});
S=S.replace(/[ \t]{2,}/g,function(a){return CKEDITOR.tools.repeat("&nbsp;",a.length-1)+" "
});
var W=T==CKEDITOR.ENTER_P?"p":"div";
if(!U){S=S.replace(/(\n{2})([\s\S]*?)(?:$|\1)/g,function(b,a,c){return"<"+W+">"+c+"</"+W+">"
})
}S=S.replace(/\n/g,"<br>");
if(!(U||CKEDITOR.env.ie)){S=S.replace(new RegExp("<br>(?=</"+W+">)"),function(a){return CKEDITOR.tools.repeat(a,2)
})
}if(CKEDITOR.env.gecko||CKEDITOR.env.webkit){var Z=new CKEDITOR.dom.elementPath(V.getStartElement()),Q=[];
for(var R=0;
R<Z.elements.length;
R++){var Y=Z.elements[R].getName();
if(Y in CKEDITOR.dtd.$inline){Q.unshift(Z.elements[R].getOuterHtml().match(/^<.*?>/))
}else{if(Y in CKEDITOR.dtd.$block){break
}}}S=Q.join("")+S
}O.call(this,S)
}function H(V){var c=this.getSelection(),R=c.getRanges(),e=V.getName(),T=CKEDITOR.dtd.$block[e];
var d=c.isLocked;
if(d){c.unlock()
}var X,b,a,Z;
for(var U=R.length-1;
U>=0;
U--){X=R[U];
if(!X.checkReadOnly()){X.deleteContents(1);
b=!U&&V||V.clone(1);
var Y,Q;
if(T){while((Y=X.getCommonAncestor(0,1))&&(Q=CKEDITOR.dtd[Y.getName()])&&!(Q&&Q[e])){if(Y.getName() in CKEDITOR.dtd.span){X.splitElement(Y)
}else{if(X.checkStartOfBlock()&&X.checkEndOfBlock()){X.setStartBefore(Y);
X.collapse(true);
Y.remove()
}else{X.splitBlock()
}}}}X.insertNode(b);
if(!a){a=b
}}}if(a){X.moveToPosition(a,CKEDITOR.POSITION_AFTER_END);
if(T){var W=a.getNext(F),S=W&&W.type==CKEDITOR.NODE_ELEMENT&&W.getName();
if(S&&CKEDITOR.dtd.$block[S]&&CKEDITOR.dtd[S]["#"]){X.moveToElementEditStart(W)
}}}c.selectRanges([X]);
if(d){this.getSelection().lock()
}}function K(Q){if(!Q.checkDirty()){setTimeout(function(){Q.resetDirty()
},0)
}}var L=CKEDITOR.dom.walker.whitespaces(true),D=CKEDITOR.dom.walker.bookmark(false,true);
function B(Q){return L(Q)&&D(Q)
}function E(Q){return Q.type==CKEDITOR.NODE_TEXT&&CKEDITOR.tools.trim(Q.getText()).match(/^(?:&nbsp;|\xa0)$/)
}function C(Q){if(Q.isLocked){Q.unlock();
setTimeout(function(){Q.lock()
},0)
}}function J(Q){return Q.getOuterHtml().match(M)
}L=CKEDITOR.dom.walker.whitespaces(true);
function A(Z){var Y=Z.window,b=Z.document,W=Z.document.getBody(),U=W.getFirst(),V=W.getChildren().count();
if(!V||V==1&&U.type==CKEDITOR.NODE_ELEMENT&&U.hasAttribute("_moz_editor_bogus_node")){K(Z);
var a=Z.element.getDocument();
var T=a.getDocumentElement();
var R=T.$.scrollTop;
var S=T.$.scrollLeft;
var Q=b.$.createEvent("KeyEvents");
Q.initKeyEvent("keypress",true,true,Y.$,false,false,false,false,0,32);
b.$.dispatchEvent(Q);
if(R!=T.$.scrollTop||S!=T.$.scrollLeft){a.getWindow().$.scrollTo(S,R)
}V&&W.getFirst().remove();
b.getBody().appendBogus();
var X=new CKEDITOR.dom.range(b);
X.setStartAt(W,CKEDITOR.POSITION_AFTER_START);
X.select()
}}function P(d){var Y=d.editor,f=d.data.path,a=f.blockLimit,c=d.data.selection,V=c.getRanges()[0],X=Y.document.getBody(),b=Y.config.enterMode;
if(CKEDITOR.env.gecko){A(Y);
var e=f.block||f.blockLimit,Q=e&&e.getLast(B);
if(e&&e.isBlockBoundary()&&!(Q&&Q.type==CKEDITOR.NODE_ELEMENT&&Q.isBlockBoundary())&&!e.is("pre")&&!e.getBogus()){e.appendBogus()
}}if(Y.config.autoParagraph!==false&&b!=CKEDITOR.ENTER_BR&&V.collapsed&&a.getName()=="body"&&!f.block){var S=V.fixBlock(true,Y.config.enterMode==CKEDITOR.ENTER_DIV?"div":"p");
if(CKEDITOR.env.ie){var U=S.getFirst(B);
U&&E(U)&&U.remove()
}if(J(S)){var T=S.getNext(L);
if(T&&T.type==CKEDITOR.NODE_ELEMENT&&!G(T)){V.moveToElementEditStart(T);
S.remove()
}else{T=S.getPrevious(L);
if(T&&T.type==CKEDITOR.NODE_ELEMENT&&!G(T)){V.moveToElementEditEnd(T);
S.remove()
}}}V.select();
d.cancel()
}var R=new CKEDITOR.dom.range(Y.document);
R.moveToElementEditEnd(Y.document.getBody());
var W=new CKEDITOR.dom.elementPath(R.startContainer);
if(!W.blockLimit.is("body")){var Z;
if(b!=CKEDITOR.ENTER_BR){Z=X.append(Y.document.createElement(b==CKEDITOR.ENTER_P?"p":"div"))
}else{Z=X
}if(!CKEDITOR.env.ie){Z.appendBogus()
}}}CKEDITOR.plugins.add("wysiwygarea",{requires:["editingblock"],init:function(U){var X=(U.config.enterMode!=CKEDITOR.ENTER_BR&&U.config.autoParagraph!==false)?U.config.enterMode==CKEDITOR.ENTER_DIV?"div":"p":false;
var R=U.lang.editorTitle.replace("%1",U.name);
var T=CKEDITOR.document.getWindow();
var V;
U.on("editingBlockReady",function(){var i,a,d,e,h,f,Z;
var b=CKEDITOR.env.isCustomDomain();
var c=function(k){if(a){a.remove()
}var l="document.open();"+(b?('document.domain="'+document.domain+'";'):"")+"document.close();";
l=CKEDITOR.env.air?"javascript:void(0)":CKEDITOR.env.ie?"javascript:void(function(){"+encodeURIComponent(l)+"}())":"";
a=CKEDITOR.dom.element.createFromHtml('<iframe style="width:100%;height:100%" frameBorder="0" title="'+R+'" src="'+l+'" tabIndex="'+(CKEDITOR.env.webkit?-1:U.tabIndex)+'" allowTransparency="true"></iframe>');
if(document.location.protocol=="chrome:"){CKEDITOR.event.useCapture=true
}a.on("load",function(m){h=1;
m.removeListener();
var n=a.getFrameDocument();
n.write(k);
CKEDITOR.env.air&&g(n.getWindow().$)
});
if(document.location.protocol=="chrome:"){CKEDITOR.event.useCapture=false
}i.append(a);
if(CKEDITOR.env.webkit){Z=function(){a.hide();
a.setSize("width",i.getSize("width"));
a.show()
};
T.on("resize",Z)
}};
V=CKEDITOR.tools.addFunction(g);
var j='<script id="cke_actscrpt" type="text/javascript" data-cke-temp="1">'+(b?('document.domain="'+document.domain+'";'):"")+"window.parent.CKEDITOR.tools.callFunction( "+V+", window );<\/script>";
function g(m){if(!h){return 
}h=0;
U.fire("ariaWidget",a);
var s=m.document,n=s.body;
var q=s.getElementById("cke_actscrpt");
q&&q.parentNode.removeChild(q);
n.spellcheck=!U.config.disableNativeSpellChecker;
var l=!U.readOnly;
if(CKEDITOR.env.ie){n.hideFocus=true;
n.disabled=true;
n.contentEditable=l;
n.removeAttribute("disabled")
}else{setTimeout(function(){if(CKEDITOR.env.gecko&&CKEDITOR.env.version>=10900||CKEDITOR.env.opera){s.$.body.contentEditable=l
}else{if(CKEDITOR.env.webkit){s.$.body.parentNode.contentEditable=l
}else{s.$.designMode=l?"off":"on"
}}},0)
}l&&CKEDITOR.env.gecko&&CKEDITOR.tools.setTimeout(A,0,null,U);
m=U.window=new CKEDITOR.dom.window(m);
s=U.document=new CKEDITOR.dom.document(s);
l&&s.on("dblclick",function(t){var u=t.data.getTarget(),v={element:u,dialog:""};
U.fire("doubleclick",v);
v.dialog&&U.openDialog(v.dialog)
});
CKEDITOR.env.ie&&s.on("click",function(t){var u=t.data.getTarget();
if(u.is("input")){var v=u.getAttribute("type");
if(v=="submit"||v=="reset"){t.data.preventDefault()
}}});
if(!(CKEDITOR.env.ie||CKEDITOR.env.opera)){s.on("mousedown",function(t){var u=t.data.getTarget();
if(u.is("img","hr","input","textarea","select")){U.getSelection().selectElement(u)
}})
}if(CKEDITOR.env.gecko){s.on("mouseup",function(u){if(u.data.$.button==2){var v=u.data.getTarget();
if(!v.getOuterHtml().replace(M,"")){var t=new CKEDITOR.dom.range(s);
t.moveToElementEditStart(v);
t.select(true)
}}})
}s.on("click",function(t){t=t.data;
if(t.getTarget().is("a")&&t.$.button!=2){t.preventDefault()
}});
if(CKEDITOR.env.webkit){s.on("mousedown",function(){p=1
});
s.on("click",function(t){if(t.data.getTarget().is("input","select")){t.data.preventDefault()
}});
s.on("mouseup",function(t){if(t.data.getTarget().is("input","textarea")){t.data.preventDefault()
}})
}var r=CKEDITOR.env.ie?a:m;
r.on("blur",function(){U.focusManager.blur()
});
var p;
r.on("focus",function(){var t=U.document;
if(l&&CKEDITOR.env.gecko&&CKEDITOR.env.version>=10900){S()
}else{if(CKEDITOR.env.opera){t.getBody().focus()
}else{if(CKEDITOR.env.webkit){if(!p){U.document.getDocumentElement().focus();
p=1
}}}}U.focusManager.focus()
});
var o=U.keystrokeHandler;
o.blockedKeystrokes[8]=!l;
o.attach(s);
s.getDocumentElement().addClass(s.$.compatMode);
l&&s.on("keydown",function(u){var y=u.data.getKeystroke();
if(y in {8:1,46:1}){var x=U.getSelection(),w=x.getSelectedElement(),v=x.getRanges()[0];
if(w){U.fire("saveSnapshot");
v.moveToPosition(w,CKEDITOR.POSITION_BEFORE_START);
w.remove();
v.select();
U.fire("saveSnapshot");
u.data.preventDefault();
return 
}}if(y==33||y==34){if(CKEDITOR.env.gecko){var t=s.getBody();
if(m.$.innerHeight>t.$.offsetHeight){v=new CKEDITOR.dom.range(s);
v[y==33?"moveToElementEditStart":"moveToElementEditEnd"](t);
v.select();
u.data.preventDefault()
}}}});
if(CKEDITOR.env.ie&&s.$.compatMode=="CSS1Compat"){var k={33:1,34:1};
s.on("keydown",function(t){if(t.data.getKeystroke() in k){setTimeout(function(){U.getSelection().scrollIntoView()
},0)
}})
}if(CKEDITOR.env.ie&&U.config.enterMode!=CKEDITOR.ENTER_P){s.on("selectionchange",function(){var t=s.getBody(),v=U.getSelection(),u=v&&v.getRanges()[0];
if(u&&t.getHtml().match(/^<p>&nbsp;<\/p>$/i)&&u.startContainer.equals(t)){setTimeout(function(){u=U.getSelection().getRanges()[0];
if(!u.startContainer.equals("body")){t.getFirst().remove(1);
u.moveToElementEditEnd(t);
u.select(1)
}},0)
}})
}if(U.contextMenu){U.contextMenu.addTarget(s,U.config.browserContextMenuOnCtrl!==false)
}setTimeout(function(){U.fire("contentDom");
if(f){U.mode="wysiwyg";
U.fire("mode",{previousMode:U._.previousMode});
f=false
}d=false;
if(e){U.focus();
e=false
}setTimeout(function(){U.fire("dataReady")
},0);
try{U.document.$.execCommand("enableInlineTableEditing",false,!U.config.disableNativeTableHandles)
}catch(t){}if(U.config.disableObjectResizing){try{U.document.$.execCommand("enableObjectResizing",false,false)
}catch(t){U.document.getBody().on(CKEDITOR.env.ie?"resizestart":"resize",function(u){u.data.preventDefault()
})
}}if(CKEDITOR.env.ie){setTimeout(function(){if(U.document){var u=U.document.$.body;
u.runtimeStyle.marginBottom="0px";
u.runtimeStyle.marginBottom=""
}},1000)
}},0)
}U.addMode("wysiwyg",{load:function(k,l,m){i=k;
if(CKEDITOR.env.ie&&CKEDITOR.env.quirks){k.setStyle("position","relative")
}U.mayBeDirty=true;
f=true;
if(m){this.loadSnapshotData(l)
}else{this.loadData(l)
}},loadData:function(o){d=true;
U._.dataStore={id:1};
var m=U.config,k=m.fullPage,p=m.docType;
var n='<style type="text/css" data-cke-temp="1">'+U._.styles.join("\n")+"</style>";
!k&&(n=CKEDITOR.tools.buildStyleHtml(U.config.contentsCss)+n);
var l=m.baseHref?'<base href="'+m.baseHref+'" data-cke-temp="1" />':"";
if(k){o=o.replace(/<!DOCTYPE[^>]*>/i,function(q){U.docType=p=q;
return""
}).replace(/<\?xml\s[^\?]*\?>/i,function(q){U.xmlDeclaration=q;
return""
})
}if(U.dataProcessor){o=U.dataProcessor.toHtml(o,X)
}if(k){if(!(/<body[\s|>]/).test(o)){o="<body>"+o
}if(!(/<html[\s|>]/).test(o)){o="<html>"+o+"</html>"
}if(!(/<head[\s|>]/).test(o)){o=o.replace(/<html[^>]*>/,"$&<head><title></title></head>")
}else{if(!(/<title[\s|>]/).test(o)){o=o.replace(/<head[^>]*>/,"$&<title></title>")
}}l&&(o=o.replace(/<head>/,"$&"+l));
o=o.replace(/<\/head\s*>/,n+"$&");
o=p+o
}else{o=m.docType+'<html dir="'+m.contentsLangDirection+'" lang="'+(m.contentsLanguage||U.langCode)+'"><head><title>'+R+"</title>"+l+n+"</head><body"+(m.bodyId?' id="'+m.bodyId+'"':"")+(m.bodyClass?' class="'+m.bodyClass+'"':"")+">"+o+"</html>"
}if(CKEDITOR.env.gecko){o=o.replace(/<br \/>(?=\s*<\/(:?html|body)>)/,'$&<br type="_moz" />')
}o+=j;
this.onDispose();
c(o)
},getData:function(){var m=U.config,l=m.fullPage,p=l&&U.docType,k=l&&U.xmlDeclaration,o=a.getFrameDocument();
var n=l?o.getDocumentElement().getOuterHtml():o.getBody().getHtml();
if(CKEDITOR.env.gecko){n=n.replace(/<br>(?=\s*(:?$|<\/body>))/,"")
}if(U.dataProcessor){n=U.dataProcessor.toDataFormat(n,X)
}if(m.ignoreEmptyParagraph){n=n.replace(M,function(q,r){return r
})
}if(k){n=k+"\n"+n
}if(p){n=p+"\n"+n
}return n
},getSnapshotData:function(){return a.getFrameDocument().getBody().getHtml()
},loadSnapshotData:function(k){a.getFrameDocument().getBody().setHtml(k)
},onDispose:function(){if(!U.document){return 
}U.document.getDocumentElement().clearCustomData();
U.document.getBody().clearCustomData();
U.window.clearCustomData();
U.document.clearCustomData();
a.clearCustomData();
a.remove()
},unload:function(k){this.onDispose();
if(Z){T.removeListener("resize",Z)
}U.window=U.document=a=i=e=null;
U.fire("contentDomUnload")
},focus:function(){var k=U.window;
if(d){e=true
}else{if(k){CKEDITOR.env.air?setTimeout(function(){k.focus()
},0):k.focus();
U.selectionChange()
}}}});
U.on("insertHtml",N(O),null,null,20);
U.on("insertElement",N(H),null,null,20);
U.on("insertText",N(I),null,null,20);
U.on("selectionChange",function(k){if(U.readOnly){return 
}var m=U.getSelection();
if(m&&!m.isLocked){var l=U.checkDirty();
U.fire("saveSnapshot",{contentOnly:1});
P.call(this,k);
U.fire("updateSnapshot");
!l&&U.resetDirty()
}},null,null,1)
});
var Q;
U.on("contentDom",function(){var Z=U.document.getElementsByTag("title").getItem(0);
Z.data("cke-title",U.document.$.title);
U.document.$.title=R
});
U.on("readOnly",function(){if(U.mode=="wysiwyg"){var Z=U.getMode();
Z.loadData(Z.getData())
}});
if(CKEDITOR.document.$.documentMode>=8){U.addCss("html.CSS1Compat [contenteditable=false]{ min-height:0 !important;}");
var W=[];
for(var Y in CKEDITOR.dtd.$removeEmpty){W.push("html.CSS1Compat "+Y+"[contenteditable=false]")
}U.addCss(W.join(",")+"{ display:inline-block;}")
}else{if(CKEDITOR.env.gecko){U.addCss("html { height: 100% !important; }");
U.addCss("img:-moz-broken { -moz-force-broken-image-icon : 1;	width : 24px; height : 24px; }")
}else{if(CKEDITOR.env.ie&&CKEDITOR.env.version<8&&U.config.contentsLangDirection=="ltr"){U.addCss("body{margin-right:0;}")
}}}U.addCss("html {	_overflow-y: scroll; cursor: text;	*cursor:auto;}");
U.addCss("img, input, textarea { cursor: default;}");
function S(Z){if(U.readOnly){return 
}CKEDITOR.tools.tryThese(function(){U.document.$.designMode="on";
setTimeout(function(){U.document.$.designMode="off";
if(CKEDITOR.currentInstance==U){U.document.getBody().focus()
}},50)
},function(){U.document.$.designMode="off";
var a=U.document.getBody();
a.setAttribute("contentEditable",false);
a.setAttribute("contentEditable",true);
!Z&&S(1)
})
}U.on("insertElement",function(Z){var b=Z.data;
if(b.type==CKEDITOR.NODE_ELEMENT&&(b.is("input")||b.is("textarea"))){var a=b.getAttribute("contenteditable")=="false";
if(!a){b.data("cke-editable",b.hasAttribute("contenteditable")?"true":"1");
b.setAttribute("contenteditable",false)
}}})
}});
if(CKEDITOR.env.gecko){(function(){var Q=document.body;
if(!Q){window.addEventListener("load",arguments.callee,false)
}else{var R=Q.getAttribute("onpageshow");
Q.setAttribute("onpageshow",(R?R+";":"")+'event.persisted && (function(){var allInstances = CKEDITOR.instances, editor, doc;for ( var i in allInstances ){	editor = allInstances[ i ];	doc = editor.document;	if ( doc )	{		doc.$.designMode = "off";		doc.$.designMode = "on";	}}})();')
}})()
}})();
CKEDITOR.config.disableObjectResizing=false;
CKEDITOR.config.disableNativeTableHandles=true;
CKEDITOR.config.disableNativeSpellChecker=true;
CKEDITOR.config.ignoreEmptyParagraph=true;