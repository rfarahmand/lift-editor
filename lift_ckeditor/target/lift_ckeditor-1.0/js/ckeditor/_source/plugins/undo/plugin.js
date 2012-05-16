(function(){CKEDITOR.plugins.add("undo",{requires:["selection","wysiwygarea"],init:function(H){var K=new F(H);
var G=H.addCommand("undo",{exec:function(){if(K.undo()){H.selectionChange();
this.fire("afterUndo")
}},state:CKEDITOR.TRISTATE_DISABLED,canUndo:false});
var I=H.addCommand("redo",{exec:function(){if(K.redo()){H.selectionChange();
this.fire("afterRedo")
}},state:CKEDITOR.TRISTATE_DISABLED,canUndo:false});
K.onChange=function(){G.setState(K.undoable()?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED);
I.setState(K.redoable()?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED)
};
function J(L){if(K.enabled&&L.data.command.canUndo!==false){K.save()
}}H.on("beforeCommandExec",J);
H.on("afterCommandExec",J);
H.on("saveSnapshot",function(L){K.save(L.data&&L.data.contentOnly)
});
H.on("contentDom",function(){H.document.on("keydown",function(L){if(!L.data.$.ctrlKey&&!L.data.$.metaKey){K.type(L)
}})
});
H.on("beforeModeUnload",function(){H.mode=="wysiwyg"&&K.save(true)
});
H.on("mode",function(){K.enabled=H.readOnly?false:H.mode=="wysiwyg";
K.onChange()
});
H.ui.addButton("Undo",{label:H.lang.undo,command:"undo"});
H.ui.addButton("Redo",{label:H.lang.redo,command:"redo"});
H.resetUndo=function(){K.reset();
H.fire("saveSnapshot")
};
H.on("updateSnapshot",function(){if(K.currentImage){K.update()
}})
}});
CKEDITOR.plugins.undo={};
var C=CKEDITOR.plugins.undo.Image=function(H){this.editor=H;
H.fire("beforeUndoImage");
var I=H.getSnapshot(),G=I&&H.getSelection();
CKEDITOR.env.ie&&I&&(I=I.replace(/\s+data-cke-expando=".*?"/g,""));
this.contents=I;
this.bookmarks=G&&G.createBookmarks2(true);
H.fire("afterUndoImage")
};
var E=/\b(?:href|src|name)="[^"]*?"/gi;
C.prototype={equals:function(O,J){var M=this.contents,N=O.contents;
if(CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.ie6Compat)){M=M.replace(E,"");
N=N.replace(E,"")
}if(M!=N){return false
}if(J){return true
}var H=this.bookmarks,G=O.bookmarks;
if(H||G){if(!H||!G||H.length!=G.length){return false
}for(var L=0;
L<H.length;
L++){var K=H[L],I=G[L];
if(K.startOffset!=I.startOffset||K.endOffset!=I.endOffset||!CKEDITOR.tools.arrayCompare(K.start,I.start)||!CKEDITOR.tools.arrayCompare(K.end,I.end)){return false
}}}return true
}};
function F(G){this.editor=G;
this.reset()
}var B={8:1,46:1},D={16:1,17:1,18:1},A={37:1,38:1,39:1,40:1};
F.prototype={type:function(J){var P=J&&J.data.getKey(),G=P in D,K=P in B,Q=this.lastKeystroke in B,R=K&&P==this.lastKeystroke,N=P in A,S=this.lastKeystroke in A,I=(!K&&!N),H=(K&&!R),M=!(G||this.typing)||(I&&(Q||S));
if(M||H){var L=new C(this.editor),O=this.snapshots.length;
CKEDITOR.tools.setTimeout(function(){var T=this.editor.getSnapshot();
if(CKEDITOR.env.ie){T=T.replace(/\s+data-cke-expando=".*?"/g,"")
}if(L.contents!=T&&O==this.snapshots.length){this.typing=true;
if(!this.save(false,L,false)){this.snapshots.splice(this.index+1,this.snapshots.length-this.index-1)
}this.hasUndo=true;
this.hasRedo=false;
this.typesCount=1;
this.modifiersCount=1;
this.onChange()
}},0,this)
}this.lastKeystroke=P;
if(K){this.typesCount=0;
this.modifiersCount++;
if(this.modifiersCount>25){this.save(false,null,false);
this.modifiersCount=1
}}else{if(!N){this.modifiersCount=0;
this.typesCount++;
if(this.typesCount>25){this.save(false,null,false);
this.typesCount=1
}}}},reset:function(){this.lastKeystroke=0;
this.snapshots=[];
this.index=-1;
this.limit=this.editor.config.undoStackSize||20;
this.currentImage=null;
this.hasUndo=false;
this.hasRedo=false;
this.resetType()
},resetType:function(){this.typing=false;
delete this.lastKeystroke;
this.typesCount=0;
this.modifiersCount=0
},fireChange:function(){this.hasUndo=!!this.getNextImage(true);
this.hasRedo=!!this.getNextImage(false);
this.resetType();
this.onChange()
},save:function(G,I,J){var H=this.snapshots;
if(!I){I=new C(this.editor)
}if(I.contents===false){return false
}if(this.currentImage&&I.equals(this.currentImage,G)){return false
}H.splice(this.index+1,H.length-this.index-1);
if(H.length==this.limit){H.shift()
}this.index=H.push(I)-1;
this.currentImage=I;
if(J!==false){this.fireChange()
}return true
},restoreImage:function(I){var G=this.editor,H;
if(I.bookmarks){G.focus();
H=G.getSelection()
}this.editor.loadSnapshot(I.contents);
if(I.bookmarks){H.selectBookmarks(I.bookmarks)
}else{if(CKEDITOR.env.ie){var J=this.editor.document.getBody().$.createTextRange();
J.collapse(true);
J.select()
}}this.index=I.index;
this.update();
this.fireChange()
},getNextImage:function(G){var J=this.snapshots,I=this.currentImage,K,H;
if(I){if(G){for(H=this.index-1;
H>=0;
H--){K=J[H];
if(!I.equals(K,true)){K.index=H;
return K
}}}else{for(H=this.index+1;
H<J.length;
H++){K=J[H];
if(!I.equals(K,true)){K.index=H;
return K
}}}}return null
},redoable:function(){return this.enabled&&this.hasRedo
},undoable:function(){return this.enabled&&this.hasUndo
},undo:function(){if(this.undoable()){this.save(true);
var G=this.getNextImage(true);
if(G){return this.restoreImage(G),true
}}return false
},redo:function(){if(this.redoable()){this.save(true);
if(this.redoable()){var G=this.getNextImage(false);
if(G){return this.restoreImage(G),true
}}}return false
},update:function(){this.snapshots.splice(this.index,1,(this.currentImage=new C(this.editor)))
}}
})();