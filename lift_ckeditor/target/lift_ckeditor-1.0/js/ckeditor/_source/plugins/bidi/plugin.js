(function(){var O={table:1,ul:1,ol:1,blockquote:1,div:1},D={},M={};
CKEDITOR.tools.extend(D,O,{tr:1,p:1,div:1,li:1});
CKEDITOR.tools.extend(M,D,{td:1});
function K(P){G(P);
L(P)
}function G(Q){var S=Q.editor,T=Q.data.path;
if(S.readOnly){return 
}var P=S.config.useComputedState,U;
P=P===undefined||P;
if(!P){U=J(T.lastElement)
}U=U||T.block||T.blockLimit;
if(U.is("body")){var R=S.getSelection().getRanges()[0].getEnclosedNode();
R&&R.type==CKEDITOR.NODE_ELEMENT&&(U=R)
}if(!U){return 
}var V=P?U.getComputedStyle("direction"):U.getStyle("direction")||U.getAttribute("dir");
S.getCommand("bidirtl").setState(V=="rtl"?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF);
S.getCommand("bidiltr").setState(V=="ltr"?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF)
}function L(P){var Q=P.editor,R=P.data.path.block||P.data.path.blockLimit;
Q.fire("contentDirChanged",R?R.getComputedStyle("direction"):Q.lang.dir)
}function J(Q){while(Q&&!(Q.getName() in M||Q.is("body"))){var P=Q.getParent();
if(!P){break
}Q=P
}return Q
}function I(R,Q,T,V){if(R.isReadOnly()){return 
}CKEDITOR.dom.element.setMarker(V,R,"bidi_processed",1);
var S=R;
while((S=S.getParent())&&!S.is("body")){if(S.getCustomData("bidi_processed")){R.removeStyle("direction");
R.removeAttribute("dir");
return 
}}var P=("useComputedState" in T.config)?T.config.useComputedState:1;
var U=P?R.getComputedStyle("direction"):R.getStyle("direction")||R.hasAttribute("dir");
if(U==Q){return 
}R.removeStyle("direction");
if(P){R.removeAttribute("dir");
if(Q!=R.getComputedStyle("direction")){R.setAttribute("dir",Q)
}}else{R.setAttribute("dir",Q)
}T.forceNextSelectionCheck();
return 
}function A(P,T,S){var Q=P.getCommonAncestor(false,true);
P=P.clone();
P.enlarge(S==CKEDITOR.ENTER_BR?CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS:CKEDITOR.ENLARGE_BLOCK_CONTENTS);
if(P.checkBoundaryOfElement(Q,CKEDITOR.START)&&P.checkBoundaryOfElement(Q,CKEDITOR.END)){var R;
while(Q&&Q.type==CKEDITOR.NODE_ELEMENT&&(R=Q.getParent())&&R.getChildCount()==1&&!(Q.getName() in T)){Q=R
}return Q.type==CKEDITOR.NODE_ELEMENT&&(Q.getName() in T)&&Q
}}function N(P){return function(a){var c=a.getSelection(),b=a.config.enterMode,R=c.getRanges();
if(R&&R.length){var e={};
var T=c.createBookmarks();
var d=R.createIterator(),Z,W=0;
while((Z=d.getNextRange(1))){var Y=Z.getEnclosedNode();
if(!Y||Y&&!(Y.type==CKEDITOR.NODE_ELEMENT&&Y.getName() in D)){Y=A(Z,O,b)
}Y&&I(Y,P,a,e);
var X,V;
var Q=new CKEDITOR.dom.walker(Z);
var S=T[W].startNode,U=T[W++].endNode;
Q.evaluator=function(f){return !!(f.type==CKEDITOR.NODE_ELEMENT&&f.getName() in O&&!(f.getName()==(b==CKEDITOR.ENTER_P?"p":"div")&&f.getParent().type==CKEDITOR.NODE_ELEMENT&&f.getParent().getName()=="blockquote")&&f.getPosition(S)&CKEDITOR.POSITION_FOLLOWING&&((f.getPosition(U)&CKEDITOR.POSITION_PRECEDING+CKEDITOR.POSITION_CONTAINS)==CKEDITOR.POSITION_PRECEDING))
};
while((V=Q.next())){I(V,P,a,e)
}X=Z.createIterator();
X.enlargeBr=b!=CKEDITOR.ENTER_BR;
while((V=X.getNextParagraph(b==CKEDITOR.ENTER_P?"p":"div"))){I(V,P,a,e)
}}CKEDITOR.dom.element.clearAllMarkers(e);
a.forceNextSelectionCheck();
c.selectBookmarks(T);
a.focus()
}}
}CKEDITOR.plugins.add("bidi",{requires:["styles","button"],init:function(P){var Q=function(S,V,U,T){P.addCommand(U,new CKEDITOR.command(P,{exec:T}));
P.ui.addButton(S,{label:V,command:U})
};
var R=P.lang.bidi;
Q("BidiLtr",R.ltr,"bidiltr",N("ltr"));
Q("BidiRtl",R.rtl,"bidirtl",N("rtl"));
P.on("selectionChange",K);
P.on("contentDom",function(){P.document.on("dirChanged",function(S){P.fire("dirChanged",{node:S.data,dir:S.data.getDirection(1)})
})
})
}});
function C(Q){var P=Q.getDocument().getBody().getParent();
while(Q){if(Q.equals(P)){return false
}Q=Q.getParent()
}return true
}function F(S){var R=S==B.setAttribute,Q=S==B.removeAttribute,P=/\bdirection\s*:\s*(.*?)\s*(:?$|;)/;
return function(V,W){if(!this.getDocument().equals(CKEDITOR.document)){var U;
if((V==(R||Q?"dir":"direction")||V=="style"&&(Q||P.test(W)))&&!C(this)){U=this.getDirection(1);
var T=S.apply(this,arguments);
if(U!=this.getDirection(1)){this.getDocument().fire("dirChanged",this);
return T
}}}return S.apply(this,arguments)
}
}var B=CKEDITOR.dom.element.prototype,E=["setStyle","removeStyle","setAttribute","removeAttribute"];
for(var H=0;
H<E.length;
H++){B[E[H]]=CKEDITOR.tools.override(B[E[H]],F)
}})();