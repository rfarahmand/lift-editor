(function(){var B;
function A(I){return I.type==CKEDITOR.NODE_TEXT&&I.getLength()>0&&(!B||!I.isReadOnly())
}function H(I){return !(I.type==CKEDITOR.NODE_ELEMENT&&I.isBlockBoundary(CKEDITOR.tools.extend({},CKEDITOR.dtd.$empty,CKEDITOR.dtd.$nonEditable)))
}var G=function(){var I=this;
return{textNode:I.textNode,offset:I.offset,character:I.textNode?I.textNode.getText().charAt(I.offset):null,hitMatchBoundary:I._.matchBoundary}
},F=["find","replace"],E=[["txtFindFind","txtFindReplace"],["txtFindCaseChk","txtReplaceCaseChk"],["txtFindWordChk","txtReplaceWordChk"],["txtFindCyclic","txtReplaceCyclic"]];
function D(M){var L,K,J,I;
L=M==="find"?1:0;
K=1-L;
var O,N=E.length;
for(O=0;
O<N;
O++){J=this.getContentElement(F[L],E[O][L]);
I=this.getContentElement(F[K],E[O][K]);
I.setValue(J.getValue())
}}var C=function(R,Q){var P=new CKEDITOR.style(CKEDITOR.tools.extend({attributes:{"data-cke-highlight":1},fullMatch:1,ignoreReadonly:1,childRule:function(){return 0
}},R.config.find_highlight,true)),O=function(b,Z){var Y=this,a=new CKEDITOR.dom.walker(b);
a.guard=Z?H:function(c){!H(c)&&(Y._.matchBoundary=true)
};
a.evaluator=A;
a.breakOnFalse=1;
if(b.startContainer.type==CKEDITOR.NODE_TEXT){this.textNode=b.startContainer;
this.offset=b.startOffset-1
}this._={matchWord:Z,walker:a,matchBoundary:false}
};
O.prototype={next:function(){return this.move()
},back:function(){return this.move(true)
},move:function(a){var Y=this;
var Z=Y.textNode;
if(Z===null){return G.call(Y)
}Y._.matchBoundary=false;
if(Z&&a&&Y.offset>0){Y.offset--;
return G.call(Y)
}else{if(Z&&Y.offset<Z.getLength()-1){Y.offset++;
return G.call(Y)
}else{Z=null;
while(!Z){Z=Y._.walker[a?"previous":"next"].call(Y._.walker);
if(Y._.matchWord&&!Z||Y._.walker._.end){break
}}Y.textNode=Z;
if(Z){Y.offset=a?Z.getLength()-1:0
}else{Y.offset=0
}}}return G.call(Y)
}};
var N=function(Z,Y){this._={walker:Z,cursors:[],rangeLength:Y,highlightRange:null,isMatched:0}
};
N.prototype={toDomRange:function(){var c=new CKEDITOR.dom.range(R.document),a=this._.cursors;
if(a.length<1){var Y=this._.walker.textNode;
if(Y){c.setStartAfter(Y)
}else{return null
}}else{var b=a[0],Z=a[a.length-1];
c.setStart(b.textNode,b.offset);
c.setEnd(Z.textNode,Z.offset+1)
}return c
},updateFromDomRange:function(b){var a=this;
var Z,Y=new O(b);
a._.cursors=[];
do{Z=Y.next();
if(Z.character){a._.cursors.push(Z)
}}while(Z.character);
a._.rangeLength=a._.cursors.length
},setMatched:function(){this._.isMatched=true
},clearMatched:function(){this._.isMatched=false
},isMatched:function(){return this._.isMatched
},highlight:function(){var b=this;
if(b._.cursors.length<1){return 
}if(b._.highlightRange){b.removeHighlight()
}var a=b.toDomRange(),Z=a.createBookmark();
P.applyToRange(a);
a.moveToBookmark(Z);
b._.highlightRange=a;
var Y=a.startContainer;
if(Y.type!=CKEDITOR.NODE_ELEMENT){Y=Y.getParent()
}Y.scrollIntoView();
b.updateFromDomRange(a)
},removeHighlight:function(){var Y=this;
if(!Y._.highlightRange){return 
}var Z=Y._.highlightRange.createBookmark();
P.removeFromRange(Y._.highlightRange);
Y._.highlightRange.moveToBookmark(Z);
Y.updateFromDomRange(Y._.highlightRange);
Y._.highlightRange=null
},isReadOnly:function(){if(!this._.highlightRange){return 0
}return this._.highlightRange.startContainer.isReadOnly()
},moveBack:function(){var Y=this;
var a=Y._.walker.back(),Z=Y._.cursors;
if(a.hitMatchBoundary){Y._.cursors=Z=[]
}Z.unshift(a);
if(Z.length>Y._.rangeLength){Z.pop()
}return a
},moveNext:function(){var Y=this;
var a=Y._.walker.next(),Z=Y._.cursors;
if(a.hitMatchBoundary){Y._.cursors=Z=[]
}Z.push(a);
if(Z.length>Y._.rangeLength){Z.shift()
}return a
},getEndCharacter:function(){var Y=this._.cursors;
if(Y.length<1){return null
}return Y[Y.length-1].character
},getNextCharacterRange:function(b){var Z,Y,a=this._.cursors;
if((Z=a[a.length-1])&&Z.textNode){Y=new O(M(Z))
}else{Y=this._.walker
}return new N(Y,b)
},getCursors:function(){return this._.cursors
}};
function M(a,Z){var Y=new CKEDITOR.dom.range();
Y.setStart(a.textNode,Z?a.offset:a.offset+1);
Y.setEndAt(R.document.getBody(),CKEDITOR.POSITION_BEFORE_END);
return Y
}function L(Z){var Y=new CKEDITOR.dom.range();
Y.setStartAt(R.document.getBody(),CKEDITOR.POSITION_AFTER_START);
Y.setEnd(Z.textNode,Z.offset);
return Y
}var K=0,J=1,I=2,X=function(b,Z){var Y=[-1];
if(Z){b=b.toLowerCase()
}for(var a=0;
a<b.length;
a++){Y.push(Y[a]+1);
while(Y[a+1]>0&&b.charAt(a)!=b.charAt(Y[a+1]-1)){Y[a+1]=Y[Y[a+1]-1]+1
}}this._={overlap:Y,state:0,ignoreCase:!!Z,pattern:b}
};
X.prototype={feedCharacter:function(Z){var Y=this;
if(Y._.ignoreCase){Z=Z.toLowerCase()
}for(;
;
){if(Z==Y._.pattern.charAt(Y._.state)){Y._.state++;
if(Y._.state==Y._.pattern.length){Y._.state=0;
return I
}return J
}else{if(!Y._.state){return K
}else{Y._.state=Y._.overlap[Y._.state]
}}}return null
},reset:function(){this._.state=0
}};
var W=/[.,"'?!;: \u0085\u00a0\u1680\u280e\u2028\u2029\u202f\u205f\u3000]/,V=function(Z){if(!Z){return true
}var Y=Z.charCodeAt(0);
return Y>=9&&Y<=13||Y>=8192&&Y<=8202||W.test(Z)
},U={searchRange:null,matchRange:null,find:function(g,e,b,a,Z,Y){var c=this;
if(!c.matchRange){c.matchRange=new N(new O(c.searchRange),g.length)
}else{c.matchRange.removeHighlight();
c.matchRange=c.matchRange.getNextCharacterRange(g.length)
}var m=new X(g,!e),l=K,k="%";
while(k!==null){c.matchRange.moveNext();
while(k=c.matchRange.getEndCharacter()){l=m.feedCharacter(k);
if(l==I){break
}if(c.matchRange.moveNext().hitMatchBoundary){m.reset()
}}if(l==I){if(b){var j=c.matchRange.getCursors(),i=j[j.length-1],h=j[0],f=new O(L(h),true),d=new O(M(i),true);
if(!(V(f.back().character)&&V(d.next().character))){continue
}}c.matchRange.setMatched();
if(Z!==false){c.matchRange.highlight()
}return true
}}c.matchRange.clearMatched();
c.matchRange.removeHighlight();
if(a&&!Y){c.searchRange=T(1);
c.matchRange=null;
return arguments.callee.apply(c,Array.prototype.slice.call(arguments).concat([true]))
}return false
},replaceCounter:0,replace:function(d,c,b,a,Z,Y,j){var e=this;
B=1;
var i=0;
if(e.matchRange&&e.matchRange.isMatched()&&!e.matchRange._.isReplaced&&!e.matchRange.isReadOnly()){e.matchRange.removeHighlight();
var h=e.matchRange.toDomRange(),g=R.document.createText(b);
if(!j){var f=R.getSelection();
f.selectRanges([h]);
R.fire("saveSnapshot")
}h.deleteContents();
h.insertNode(g);
if(!j){f.selectRanges([h]);
R.fire("saveSnapshot")
}e.matchRange.updateFromDomRange(h);
if(!j){e.matchRange.highlight()
}e.matchRange._.isReplaced=true;
e.replaceCounter++;
i=1
}else{i=e.find(c,a,Z,Y,!j)
}B=0;
return i
}};
function T(b){var Z,Y=R.getSelection(),a=R.document.getBody();
if(Y&&!b){Z=Y.getRanges()[0].clone();
Z.collapse(true)
}else{Z=new CKEDITOR.dom.range();
Z.setStartAt(a,CKEDITOR.POSITION_AFTER_START)
}Z.setEndAt(a,CKEDITOR.POSITION_BEFORE_END);
return Z
}var S=R.lang.findAndReplace;
return{title:S.title,resizable:CKEDITOR.DIALOG_RESIZE_NONE,minWidth:350,minHeight:170,buttons:[CKEDITOR.dialog.cancelButton],contents:[{id:"find",label:S.find,title:S.find,accessKey:"",elements:[{type:"hbox",widths:["230px","90px"],children:[{type:"text",id:"txtFindFind",label:S.findWhat,isChanged:false,labelLayout:"horizontal",accessKey:"F"},{type:"button",id:"btnFind",align:"left",style:"width:100%",label:S.find,onClick:function(){var Y=this.getDialog();
if(!U.find(Y.getValueOf("find","txtFindFind"),Y.getValueOf("find","txtFindCaseChk"),Y.getValueOf("find","txtFindWordChk"),Y.getValueOf("find","txtFindCyclic"))){alert(S.notFoundMsg)
}}}]},{type:"fieldset",label:CKEDITOR.tools.htmlEncode(S.findOptions),style:"margin-top:29px",children:[{type:"vbox",padding:0,children:[{type:"checkbox",id:"txtFindCaseChk",isChanged:false,label:S.matchCase},{type:"checkbox",id:"txtFindWordChk",isChanged:false,label:S.matchWord},{type:"checkbox",id:"txtFindCyclic",isChanged:false,"default":true,label:S.matchCyclic}]}]}]},{id:"replace",label:S.replace,accessKey:"M",elements:[{type:"hbox",widths:["230px","90px"],children:[{type:"text",id:"txtFindReplace",label:S.findWhat,isChanged:false,labelLayout:"horizontal",accessKey:"F"},{type:"button",id:"btnFindReplace",align:"left",style:"width:100%",label:S.replace,onClick:function(){var Y=this.getDialog();
if(!U.replace(Y,Y.getValueOf("replace","txtFindReplace"),Y.getValueOf("replace","txtReplace"),Y.getValueOf("replace","txtReplaceCaseChk"),Y.getValueOf("replace","txtReplaceWordChk"),Y.getValueOf("replace","txtReplaceCyclic"))){alert(S.notFoundMsg)
}}}]},{type:"hbox",widths:["230px","90px"],children:[{type:"text",id:"txtReplace",label:S.replaceWith,isChanged:false,labelLayout:"horizontal",accessKey:"R"},{type:"button",id:"btnReplaceAll",align:"left",style:"width:100%",label:S.replaceAll,isChanged:false,onClick:function(){var Z=this.getDialog(),Y;
U.replaceCounter=0;
U.searchRange=T(1);
if(U.matchRange){U.matchRange.removeHighlight();
U.matchRange=null
}R.fire("saveSnapshot");
while(U.replace(Z,Z.getValueOf("replace","txtFindReplace"),Z.getValueOf("replace","txtReplace"),Z.getValueOf("replace","txtReplaceCaseChk"),Z.getValueOf("replace","txtReplaceWordChk"),false,true)){}if(U.replaceCounter){alert(S.replaceSuccessMsg.replace(/%1/,U.replaceCounter));
R.fire("saveSnapshot")
}else{alert(S.notFoundMsg)
}}}]},{type:"fieldset",label:CKEDITOR.tools.htmlEncode(S.findOptions),children:[{type:"vbox",padding:0,children:[{type:"checkbox",id:"txtReplaceCaseChk",isChanged:false,label:S.matchCase},{type:"checkbox",id:"txtReplaceWordChk",isChanged:false,label:S.matchWord},{type:"checkbox",id:"txtReplaceCyclic",isChanged:false,"default":true,label:S.matchCyclic}]}]}]}],onLoad:function(){var b=this,Z,Y,a=0;
this.on("hide",function(){a=0
});
this.on("show",function(){a=1
});
this.selectPage=CKEDITOR.tools.override(this.selectPage,function(c){return function(h){c.call(b,h);
var g=b._.tabs[h],f,e,d;
e=h==="find"?"txtFindFind":"txtFindReplace";
d=h==="find"?"txtFindWordChk":"txtReplaceWordChk";
Z=b.getContentElement(h,e);
Y=b.getContentElement(h,d);
if(!g.initialized){f=CKEDITOR.document.getById(Z._.inputId);
g.initialized=true
}if(a){D.call(this,h)
}}
})
},onShow:function(){var b=this;
U.searchRange=T();
var a=b.getParentEditor().getSelection().getSelectedText(),Z=Q=="find"?"txtFindFind":"txtFindReplace",Y=b.getContentElement(Q,Z);
Y.setValue(a);
Y.select();
b.selectPage(Q);
b[(Q=="find"&&b._.editor.readOnly?"hide":"show")+"Page"]("replace")
},onHide:function(){var Y;
if(U.matchRange&&U.matchRange.isMatched()){U.matchRange.removeHighlight();
R.focus();
Y=U.matchRange.toDomRange();
if(Y){R.getSelection().selectRanges([Y])
}}delete U.matchRange
},onFocus:function(){if(Q=="replace"){return this.getContentElement("replace","txtFindReplace")
}else{return this.getContentElement("find","txtFindFind")
}}}
};
CKEDITOR.dialog.add("find",function(I){return C(I,"find")
});
CKEDITOR.dialog.add("replace",function(I){return C(I,"replace")
})
})();