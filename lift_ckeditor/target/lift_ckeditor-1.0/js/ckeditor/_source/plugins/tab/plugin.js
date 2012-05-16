(function(){var D={editorFocus:false,modes:{wysiwyg:1,source:1}};
var A={exec:function(E){E.container.focusNext(true,E.tabIndex)
}};
var B={exec:function(E){E.container.focusPrevious(true,E.tabIndex)
}};
function C(E){return{editorFocus:false,canUndo:false,modes:{wysiwyg:1},exec:function(L){if(L.focusManager.hasFocus){var F=L.getSelection(),J=F.getCommonAncestor(),N;
if((N=(J.getAscendant("td",true)||J.getAscendant("th",true)))){var M=new CKEDITOR.dom.range(L.document),I=CKEDITOR.tools.tryThese(function(){var S=N.getParent(),R=S.$.cells[N.$.cellIndex+(E?-1:1)];
R.parentNode.parentNode;
return R
},function(){var T=N.getParent(),S=T.getAscendant("table"),R=S.$.rows[T.$.rowIndex+(E?-1:1)];
return R.cells[E?R.cells.length-1:0]
});
if(!(I||E)){var P=N.getAscendant("table").$,Q=N.getParent().$.cells;
var O=new CKEDITOR.dom.element(P.insertRow(-1),L.document);
for(var H=0,K=Q.length;
H<K;
H++){var G=O.append(new CKEDITOR.dom.element(Q[H],L.document).clone(false,false));
!CKEDITOR.env.ie&&G.appendBogus()
}M.moveToElementEditStart(O)
}else{if(I){I=new CKEDITOR.dom.element(I);
M.moveToElementEditStart(I);
if(!(M.checkStartOfBlock()&&M.checkEndOfBlock())){M.selectNodeContents(I)
}}else{return true
}}M.select(true);
return true
}}return false
}}
}CKEDITOR.plugins.add("tab",{requires:["keystrokes"],init:function(G){var F=G.config.enableTabKeyTools!==false,H=G.config.tabSpaces||0,E="";
while(H--){E+="\xa0"
}if(E){G.on("key",function(I){if(I.data.keyCode==9){G.insertHtml(E);
I.cancel()
}})
}if(F){G.on("key",function(I){if(I.data.keyCode==9&&G.execCommand("selectNextCell")||I.data.keyCode==(CKEDITOR.SHIFT+9)&&G.execCommand("selectPreviousCell")){I.cancel()
}})
}if(CKEDITOR.env.webkit||CKEDITOR.env.gecko){G.on("key",function(I){var J=I.data.keyCode;
if(J==9&&!E){I.cancel();
G.execCommand("blur")
}if(J==(CKEDITOR.SHIFT+9)){G.execCommand("blurBack");
I.cancel()
}})
}G.addCommand("blur",CKEDITOR.tools.extend(A,D));
G.addCommand("blurBack",CKEDITOR.tools.extend(B,D));
G.addCommand("selectNextCell",C());
G.addCommand("selectPreviousCell",C(true))
}})
})();
CKEDITOR.dom.element.prototype.focusNext=function(B,C){var E=this.$,F=(C===undefined?this.getTabIndex():C),I,H,A,G,D,J;
if(F<=0){D=this.getNextSourceNode(B,CKEDITOR.NODE_ELEMENT);
while(D){if(D.isVisible()&&D.getTabIndex()===0){A=D;
break
}D=D.getNextSourceNode(false,CKEDITOR.NODE_ELEMENT)
}}else{D=this.getDocument().getBody().getFirst();
while((D=D.getNextSourceNode(false,CKEDITOR.NODE_ELEMENT))){if(!I){if(!H&&D.equals(this)){H=true;
if(B){if(!(D=D.getNextSourceNode(true,CKEDITOR.NODE_ELEMENT))){break
}I=1
}}else{if(H&&!this.contains(D)){I=1
}}}if(!D.isVisible()||(J=D.getTabIndex())<0){continue
}if(I&&J==F){A=D;
break
}if(J>F&&(!A||!G||J<G)){A=D;
G=J
}else{if(!A&&J===0){A=D;
G=J
}}}}if(A){A.focus()
}};
CKEDITOR.dom.element.prototype.focusPrevious=function(B,C){var E=this.$,F=(C===undefined?this.getTabIndex():C),I,H,A,G=0,J;
var D=this.getDocument().getBody().getLast();
while((D=D.getPreviousSourceNode(false,CKEDITOR.NODE_ELEMENT))){if(!I){if(!H&&D.equals(this)){H=true;
if(B){if(!(D=D.getPreviousSourceNode(true,CKEDITOR.NODE_ELEMENT))){break
}I=1
}}else{if(H&&!this.contains(D)){I=1
}}}if(!D.isVisible()||(J=D.getTabIndex())<0){continue
}if(F<=0){if(I&&J===0){A=D;
break
}if(J>G){A=D;
G=J
}}else{if(I&&J==F){A=D;
break
}if(J<F&&(!A||J>G)){A=D;
G=J
}}}if(A){A.focus()
}};