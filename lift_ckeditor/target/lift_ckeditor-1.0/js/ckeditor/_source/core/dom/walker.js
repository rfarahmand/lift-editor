(function(){function C(R,L){var M=this.range;
if(this._.end){return null
}if(!this._.start){this._.start=1;
if(M.collapsed){this.end();
return null
}M.optimize()
}var I,T=M.startContainer,X=M.endContainer,O=M.startOffset,Q=M.endOffset,N,H=this.guard,P=this.type,V=(R?"getPreviousSourceNode":"getNextSourceNode");
if(!R&&!this._.guardLTR){var K=X.type==CKEDITOR.NODE_ELEMENT?X:X.getParent();
var S=X.type==CKEDITOR.NODE_ELEMENT?X.getChild(Q):X.getNext();
this._.guardLTR=function(Z,Y){return((!Y||!K.equals(Z))&&(!S||!Z.equals(S))&&(Z.type!=CKEDITOR.NODE_ELEMENT||!Y||Z.getName()!="body"))
}
}if(R&&!this._.guardRTL){var W=T.type==CKEDITOR.NODE_ELEMENT?T:T.getParent();
var J=T.type==CKEDITOR.NODE_ELEMENT?O?T.getChild(O-1):null:T.getPrevious();
this._.guardRTL=function(Z,Y){return((!Y||!W.equals(Z))&&(!J||!Z.equals(J))&&(Z.type!=CKEDITOR.NODE_ELEMENT||!Y||Z.getName()!="body"))
}
}var U=R?this._.guardRTL:this._.guardLTR;
if(H){N=function(Z,Y){if(U(Z,Y)===false){return false
}return H(Z,Y)
}
}else{N=U
}if(this.current){I=this.current[V](false,P,N)
}else{if(R){I=X;
if(I.type==CKEDITOR.NODE_ELEMENT){if(Q>0){I=I.getChild(Q-1)
}else{I=(N(I,true)===false)?null:I.getPreviousSourceNode(true,P,N)
}}}else{I=T;
if(I.type==CKEDITOR.NODE_ELEMENT){if(!(I=I.getChild(O))){I=(N(T,true)===false)?null:T.getNextSourceNode(true,P,N)
}}}if(I&&N(I)===false){I=null
}}while(I&&!this._.end){this.current=I;
if(!this.evaluator||this.evaluator(I)!==false){if(!L){return I
}}else{if(L&&this.evaluator){return false
}}I=I[V](false,P,N)
}this.end();
return this.current=null
}function B(J){var I,H=null;
while((I=C.call(this,J))){H=I
}return H
}CKEDITOR.dom.walker=CKEDITOR.tools.createClass({$:function(H){this.range=H;
this._={}
},proto:{end:function(){this._.end=1
},next:function(){return C.call(this)
},previous:function(){return C.call(this,1)
},checkForward:function(){return C.call(this,0,1)!==false
},checkBackward:function(){return C.call(this,1,1)!==false
},lastForward:function(){return B.call(this)
},lastBackward:function(){return B.call(this,1)
},reset:function(){delete this.current;
this._={}
}}});
var E={block:1,"list-item":1,table:1,"table-row-group":1,"table-header-group":1,"table-footer-group":1,"table-row":1,"table-column-group":1,"table-column":1,"table-cell":1,"table-caption":1};
CKEDITOR.dom.element.prototype.isBlockBoundary=function(I){var H=I?CKEDITOR.tools.extend({},CKEDITOR.dtd.$block,I||{}):CKEDITOR.dtd.$block;
return this.getComputedStyle("float")=="none"&&E[this.getComputedStyle("display")]||H[this.getName()]
};
CKEDITOR.dom.walker.blockBoundary=function(H){return function(J,I){return !(J.type==CKEDITOR.NODE_ELEMENT&&J.isBlockBoundary(H))
}
};
CKEDITOR.dom.walker.listItemBoundary=function(){return this.blockBoundary({br:1})
};
CKEDITOR.dom.walker.bookmark=function(J,I){function H(K){return(K&&K.getName&&K.getName()=="span"&&K.data("cke-bookmark"))
}return function(M){var K,L;
K=(M&&!M.getName&&(L=M.getParent())&&H(L));
K=J?K:K||H(M);
return !!(I^K)
}
};
CKEDITOR.dom.walker.whitespaces=function(H){return function(J){var I=J&&(J.type==CKEDITOR.NODE_TEXT)&&!CKEDITOR.tools.trim(J.getText());
return !!(H^I)
}
};
CKEDITOR.dom.walker.invisible=function(I){var H=CKEDITOR.dom.walker.whitespaces();
return function(J){var K=H(J)||J.is&&!J.$.offsetHeight;
return !!(I^K)
}
};
CKEDITOR.dom.walker.nodeType=function(I,H){return function(J){return !!(H^(J.type==I))
}
};
CKEDITOR.dom.walker.bogus=function(J,I){function H(K){return !A(K)&&!D(K)
}return function(L){var K=L.getParent(),M=!CKEDITOR.env.ie?L.is&&L.is("br"):L.getText&&G.test(L.getText());
M=M&&K.isBlockBoundary()&&!!K.getLast(H);
return !!(I^M)
}
};
var G=/^[\t\r\n ]*(?:&nbsp;|\xa0)$/,A=CKEDITOR.dom.walker.whitespaces(),D=CKEDITOR.dom.walker.bookmark(),F=function(H){return D(H)||A(H)||H.type==CKEDITOR.NODE_ELEMENT&&H.getName() in CKEDITOR.dtd.$inline&&!(H.getName() in CKEDITOR.dtd.$empty)
};
CKEDITOR.dom.element.prototype.getBogus=function(){var H=this;
do{H=H.getPreviousSourceNode()
}while(F(H));
if(H&&(!CKEDITOR.env.ie?H.is&&H.is("br"):H.getText&&G.test(H.getText()))){return H
}return false
}
})();