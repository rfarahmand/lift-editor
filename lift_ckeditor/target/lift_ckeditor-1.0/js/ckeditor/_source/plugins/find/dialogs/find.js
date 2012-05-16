(function(){var H;
function E(I){return I.type==CKEDITOR.NODE_TEXT&&I.getLength()>0&&(!H||!I.isReadOnly())
}function D(I){return !(I.type==CKEDITOR.NODE_ELEMENT&&I.isBlockBoundary(CKEDITOR.tools.extend({},CKEDITOR.dtd.$empty,CKEDITOR.dtd.$nonEditable)))
}var F=function(){return{textNode:this.textNode,offset:this.offset,character:this.textNode?this.textNode.getText().charAt(this.offset):null,hitMatchBoundary:this._.matchBoundary}
};
var A=["find","replace"],C=[["txtFindFind","txtFindReplace"],["txtFindCaseChk","txtReplaceCaseChk"],["txtFindWordChk","txtReplaceWordChk"],["txtFindCyclic","txtReplaceCyclic"]];
function G(J){var I,L,N,O;
I=J==="find"?1:0;
L=1-I;
var M,K=C.length;
for(M=0;
M<K;
M++){N=this.getContentElement(A[I],C[M][I]);
O=this.getContentElement(A[L],C[M][L]);
O.setValue(N.getValue())
}}var B=function(T,N){var U=new CKEDITOR.style(CKEDITOR.tools.extend({attributes:{"data-cke-highlight":1},fullMatch:1,ignoreReadonly:1,childRule:function(){return 0
}},T.config.find_highlight,true));
var V=function(a,Y){var Z=this;
var b=new CKEDITOR.dom.walker(a);
b.guard=Y?D:function(c){!D(c)&&(Z._.matchBoundary=true)
};
b.evaluator=E;
b.breakOnFalse=1;
if(a.startContainer.type==CKEDITOR.NODE_TEXT){this.textNode=a.startContainer;
this.offset=a.startOffset-1
}this._={matchWord:Y,walker:b,matchBoundary:false}
};
V.prototype={next:function(){return this.move()
},back:function(){return this.move(true)
},move:function(Z){var Y=this.textNode;
if(Y===null){return F.call(this)
}this._.matchBoundary=false;
if(Y&&Z&&this.offset>0){this.offset--;
return F.call(this)
}else{if(Y&&this.offset<Y.getLength()-1){this.offset++;
return F.call(this)
}else{Y=null;
while(!Y){Y=this._.walker[Z?"previous":"next"].call(this._.walker);
if(this._.matchWord&&!Y||this._.walker._.end){break
}}this.textNode=Y;
if(Y){this.offset=Z?Y.getLength()-1:0
}else{this.offset=0
}}}return F.call(this)
}};
var R=function(Y,Z){this._={walker:Y,cursors:[],rangeLength:Z,highlightRange:null,isMatched:0}
};
R.prototype={toDomRange:function(){var Y=new CKEDITOR.dom.range(T.document);
var a=this._.cursors;
if(a.length<1){var c=this._.walker.textNode;
if(c){Y.setStartAfter(c)
}else{return null
}}else{var b=a[0],Z=a[a.length-1];
Y.setStart(b.textNode,b.offset);
Y.setEnd(Z.textNode,Z.offset+1)
}return Y
},updateFromDomRange:function(Y){var a,Z=new V(Y);
this._.cursors=[];
do{a=Z.next();
if(a.character){this._.cursors.push(a)
}}while(a.character);
this._.rangeLength=this._.cursors.length
},setMatched:function(){this._.isMatched=true
},clearMatched:function(){this._.isMatched=false
},isMatched:function(){return this._.isMatched
},highlight:function(){if(this._.cursors.length<1){return 
}if(this._.highlightRange){this.removeHighlight()
}var Y=this.toDomRange(),a=Y.createBookmark();
U.applyToRange(Y);
Y.moveToBookmark(a);
this._.highlightRange=Y;
var Z=Y.startContainer;
if(Z.type!=CKEDITOR.NODE_ELEMENT){Z=Z.getParent()
}Z.scrollIntoView();
this.updateFromDomRange(Y)
},removeHighlight:function(){if(!this._.highlightRange){return 
}var Y=this._.highlightRange.createBookmark();
U.removeFromRange(this._.highlightRange);
this._.highlightRange.moveToBookmark(Y);
this.updateFromDomRange(this._.highlightRange);
this._.highlightRange=null
},isReadOnly:function(){if(!this._.highlightRange){return 0
}return this._.highlightRange.startContainer.isReadOnly()
},moveBack:function(){var Y=this._.walker.back(),Z=this._.cursors;
if(Y.hitMatchBoundary){this._.cursors=Z=[]
}Z.unshift(Y);
if(Z.length>this._.rangeLength){Z.pop()
}return Y
},moveNext:function(){var Y=this._.walker.next(),Z=this._.cursors;
if(Y.hitMatchBoundary){this._.cursors=Z=[]
}Z.push(Y);
if(Z.length>this._.rangeLength){Z.shift()
}return Y
},getEndCharacter:function(){var Y=this._.cursors;
if(Y.length<1){return null
}return Y[Y.length-1].character
},getNextCharacterRange:function(Y){var Z,b,a=this._.cursors;
if((Z=a[a.length-1])&&Z.textNode){b=new V(X(Z))
}else{b=this._.walker
}return new R(b,Y)
},getCursors:function(){return this._.cursors
}};
function X(a,Y){var Z=new CKEDITOR.dom.range();
Z.setStart(a.textNode,(Y?a.offset:a.offset+1));
Z.setEndAt(T.document.getBody(),CKEDITOR.POSITION_BEFORE_END);
return Z
}function S(Z){var Y=new CKEDITOR.dom.range();
Y.setStartAt(T.document.getBody(),CKEDITOR.POSITION_AFTER_START);
Y.setEnd(Z.textNode,Z.offset);
return Y
}var Q=0,P=1,J=2;
var M=function(b,Z){var Y=[-1];
if(Z){b=b.toLowerCase()
}for(var a=0;
a<b.length;
a++){Y.push(Y[a]+1);
while(Y[a+1]>0&&b.charAt(a)!=b.charAt(Y[a+1]-1)){Y[a+1]=Y[Y[a+1]-1]+1
}}this._={overlap:Y,state:0,ignoreCase:!!Z,pattern:b}
};
M.prototype={feedCharacter:function(Y){if(this._.ignoreCase){Y=Y.toLowerCase()
}while(true){if(Y==this._.pattern.charAt(this._.state)){this._.state++;
if(this._.state==this._.pattern.length){this._.state=0;
return J
}return P
}else{if(!this._.state){return Q
}else{this._.state=this._.overlap[this._.state]
}}}return null
},reset:function(){this._.state=0
}};
var I=/[.,"'?!;: \u0085\u00a0\u1680\u280e\u2028\u2029\u202f\u205f\u3000]/;
var L=function(Z){if(!Z){return true
}var Y=Z.charCodeAt(0);
return(Y>=9&&Y<=13)||(Y>=8192&&Y<=8202)||I.test(Z)
};
var K={searchRange:null,matchRange:null,find:function(j,Z,e,l,a,d){if(!this.matchRange){this.matchRange=new R(new V(this.searchRange),j.length)
}else{this.matchRange.removeHighlight();
this.matchRange=this.matchRange.getNextCharacterRange(j.length)
}var g=new M(j,!Z),b=Q,h="%";
while(h!==null){this.matchRange.moveNext();
while((h=this.matchRange.getEndCharacter())){b=g.feedCharacter(h);
if(b==J){break
}if(this.matchRange.moveNext().hitMatchBoundary){g.reset()
}}if(b==J){if(e){var Y=this.matchRange.getCursors(),i=Y[Y.length-1],k=Y[0];
var c=new V(S(k),true),f=new V(X(i),true);
if(!(L(c.back().character)&&L(f.next().character))){continue
}}this.matchRange.setMatched();
if(a!==false){this.matchRange.highlight()
}return true
}}this.matchRange.clearMatched();
this.matchRange.removeHighlight();
if(l&&!d){this.searchRange=W(1);
this.matchRange=null;
return arguments.callee.apply(this,Array.prototype.slice.call(arguments).concat([true]))
}return false
},replaceCounter:0,replace:function(c,b,d,Y,a,h,Z){H=1;
var i=0;
if(this.matchRange&&this.matchRange.isMatched()&&!this.matchRange._.isReplaced&&!this.matchRange.isReadOnly()){this.matchRange.removeHighlight();
var g=this.matchRange.toDomRange();
var f=T.document.createText(d);
if(!Z){var e=T.getSelection();
e.selectRanges([g]);
T.fire("saveSnapshot")
}g.deleteContents();
g.insertNode(f);
if(!Z){e.selectRanges([g]);
T.fire("saveSnapshot")
}this.matchRange.updateFromDomRange(g);
if(!Z){this.matchRange.highlight()
}this.matchRange._.isReplaced=true;
this.replaceCounter++;
i=1
}else{i=this.find(b,Y,a,h,!Z)
}H=0;
return i
}};
function W(b){var Z,a=T.getSelection(),Y=T.document.getBody();
if(a&&!b){Z=a.getRanges()[0].clone();
Z.collapse(true)
}else{Z=new CKEDITOR.dom.range();
Z.setStartAt(Y,CKEDITOR.POSITION_AFTER_START)
}Z.setEndAt(Y,CKEDITOR.POSITION_BEFORE_END);
return Z
}var O=T.lang.findAndReplace;
return{title:O.title,resizable:CKEDITOR.DIALOG_RESIZE_NONE,minWidth:350,minHeight:170,buttons:[CKEDITOR.dialog.cancelButton],contents:[{id:"find",label:O.find,title:O.find,accessKey:"",elements:[{type:"hbox",widths:["230px","90px"],children:[{type:"text",id:"txtFindFind",label:O.findWhat,isChanged:false,labelLayout:"horizontal",accessKey:"F"},{type:"button",id:"btnFind",align:"left",style:"width:100%",label:O.find,onClick:function(){var Y=this.getDialog();
if(!K.find(Y.getValueOf("find","txtFindFind"),Y.getValueOf("find","txtFindCaseChk"),Y.getValueOf("find","txtFindWordChk"),Y.getValueOf("find","txtFindCyclic"))){alert(O.notFoundMsg)
}}}]},{type:"fieldset",label:CKEDITOR.tools.htmlEncode(O.findOptions),style:"margin-top:29px",children:[{type:"vbox",padding:0,children:[{type:"checkbox",id:"txtFindCaseChk",isChanged:false,label:O.matchCase},{type:"checkbox",id:"txtFindWordChk",isChanged:false,label:O.matchWord},{type:"checkbox",id:"txtFindCyclic",isChanged:false,"default":true,label:O.matchCyclic}]}]}]},{id:"replace",label:O.replace,accessKey:"M",elements:[{type:"hbox",widths:["230px","90px"],children:[{type:"text",id:"txtFindReplace",label:O.findWhat,isChanged:false,labelLayout:"horizontal",accessKey:"F"},{type:"button",id:"btnFindReplace",align:"left",style:"width:100%",label:O.replace,onClick:function(){var Y=this.getDialog();
if(!K.replace(Y,Y.getValueOf("replace","txtFindReplace"),Y.getValueOf("replace","txtReplace"),Y.getValueOf("replace","txtReplaceCaseChk"),Y.getValueOf("replace","txtReplaceWordChk"),Y.getValueOf("replace","txtReplaceCyclic"))){alert(O.notFoundMsg)
}}}]},{type:"hbox",widths:["230px","90px"],children:[{type:"text",id:"txtReplace",label:O.replaceWith,isChanged:false,labelLayout:"horizontal",accessKey:"R"},{type:"button",id:"btnReplaceAll",align:"left",style:"width:100%",label:O.replaceAll,isChanged:false,onClick:function(){var Z=this.getDialog();
var Y;
K.replaceCounter=0;
K.searchRange=W(1);
if(K.matchRange){K.matchRange.removeHighlight();
K.matchRange=null
}T.fire("saveSnapshot");
while(K.replace(Z,Z.getValueOf("replace","txtFindReplace"),Z.getValueOf("replace","txtReplace"),Z.getValueOf("replace","txtReplaceCaseChk"),Z.getValueOf("replace","txtReplaceWordChk"),false,true)){}if(K.replaceCounter){alert(O.replaceSuccessMsg.replace(/%1/,K.replaceCounter));
T.fire("saveSnapshot")
}else{alert(O.notFoundMsg)
}}}]},{type:"fieldset",label:CKEDITOR.tools.htmlEncode(O.findOptions),children:[{type:"vbox",padding:0,children:[{type:"checkbox",id:"txtReplaceCaseChk",isChanged:false,label:O.matchCase},{type:"checkbox",id:"txtReplaceWordChk",isChanged:false,label:O.matchWord},{type:"checkbox",id:"txtReplaceCyclic",isChanged:false,"default":true,label:O.matchCyclic}]}]}]}],onLoad:function(){var Y=this;
var b,Z;
var a=0;
this.on("hide",function(){a=0
});
this.on("show",function(){a=1
});
this.selectPage=CKEDITOR.tools.override(this.selectPage,function(c){return function(e){c.call(Y,e);
var d=Y._.tabs[e];
var h,g,f;
g=e==="find"?"txtFindFind":"txtFindReplace";
f=e==="find"?"txtFindWordChk":"txtReplaceWordChk";
b=Y.getContentElement(e,g);
Z=Y.getContentElement(e,f);
if(!d.initialized){h=CKEDITOR.document.getById(b._.inputId);
d.initialized=true
}if(a){G.call(this,e)
}}
})
},onShow:function(){K.searchRange=W();
var a=this.getParentEditor().getSelection().getSelectedText(),Y=(N=="find"?"txtFindFind":"txtFindReplace");
var Z=this.getContentElement(N,Y);
Z.setValue(a);
Z.select();
this.selectPage(N);
this[(N=="find"&&this._.editor.readOnly?"hide":"show")+"Page"]("replace")
},onHide:function(){var Y;
if(K.matchRange&&K.matchRange.isMatched()){K.matchRange.removeHighlight();
T.focus();
Y=K.matchRange.toDomRange();
if(Y){T.getSelection().selectRanges([Y])
}}delete K.matchRange
},onFocus:function(){if(N=="replace"){return this.getContentElement("replace","txtFindReplace")
}else{return this.getContentElement("find","txtFindFind")
}}}
};
CKEDITOR.dialog.add("find",function(I){return B(I,"find")
});
CKEDITOR.dialog.add("replace",function(I){return B(I,"replace")
})
})();