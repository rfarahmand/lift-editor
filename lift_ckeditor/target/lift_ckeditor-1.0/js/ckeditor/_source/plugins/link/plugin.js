;
CKEDITOR.plugins.add("link",{init:function(B){B.addCommand("link",new CKEDITOR.dialogCommand("link"));
B.addCommand("anchor",new CKEDITOR.dialogCommand("anchor"));
B.addCommand("unlink",new CKEDITOR.unlinkCommand());
B.addCommand("removeAnchor",new CKEDITOR.removeAnchorCommand());
B.ui.addButton("Link",{label:B.lang.link.toolbar,command:"link"});
B.ui.addButton("Unlink",{label:B.lang.unlink,command:"unlink"});
B.ui.addButton("Anchor",{label:B.lang.anchor.toolbar,command:"anchor"});
CKEDITOR.dialog.add("link",this.path+"dialogs/link.js");
CKEDITOR.dialog.add("anchor",this.path+"dialogs/anchor.js");
var A=(B.lang.dir=="rtl"?"right":"left");
var C="background:url("+CKEDITOR.getUrl(this.path+"images/anchor.gif")+") no-repeat "+A+" center;border:1px dotted #00f;";
B.addCss("a.cke_anchor,a.cke_anchor_empty"+((CKEDITOR.env.ie&&CKEDITOR.env.version<7)?"":",a[name],a[data-cke-saved-name]")+"{"+C+"padding-"+A+":18px;cursor:auto;}"+(CKEDITOR.env.ie?("a.cke_anchor_empty{display:inline-block;}"):"")+"img.cke_anchor{"+C+"width:16px;min-height:15px;height:1.15em;vertical-align:"+(CKEDITOR.env.opera?"middle":"text-bottom")+";}");
B.on("selectionChange",function(D){if(B.readOnly){return 
}var F=B.getCommand("unlink"),E=D.data.path.lastElement&&D.data.path.lastElement.getAscendant("a",true);
if(E&&E.getName()=="a"&&E.getAttribute("href")&&E.getChildCount()){F.setState(CKEDITOR.TRISTATE_OFF)
}else{F.setState(CKEDITOR.TRISTATE_DISABLED)
}});
B.on("doubleclick",function(D){var E=CKEDITOR.plugins.link.getSelectedLink(B)||D.data.element;
if(!E.isReadOnly()){if(E.is("a")){D.data.dialog=(E.getAttribute("name")&&(!E.getAttribute("href")||!E.getChildCount()))?"anchor":"link";
B.getSelection().selectElement(E)
}else{if(CKEDITOR.plugins.link.tryRestoreFakeAnchor(B,E)){D.data.dialog="anchor"
}}}});
if(B.addMenuItems){B.addMenuItems({anchor:{label:B.lang.anchor.menu,command:"anchor",group:"anchor",order:1},removeAnchor:{label:B.lang.anchor.remove,command:"removeAnchor",group:"anchor",order:5},link:{label:B.lang.link.menu,command:"link",group:"link",order:1},unlink:{label:B.lang.unlink,command:"unlink",group:"link",order:5}})
}if(B.contextMenu){B.contextMenu.addListener(function(E,F){if(!E||E.isReadOnly()){return null
}var D=CKEDITOR.plugins.link.tryRestoreFakeAnchor(B,E);
if(!D&&!(D=CKEDITOR.plugins.link.getSelectedLink(B))){return null
}var G={};
if(D.getAttribute("href")&&D.getChildCount()){G={link:CKEDITOR.TRISTATE_OFF,unlink:CKEDITOR.TRISTATE_OFF}
}if(D&&D.hasAttribute("name")){G.anchor=G.removeAnchor=CKEDITOR.TRISTATE_OFF
}return G
})
}},afterInit:function(B){var A=B.dataProcessor,D=A&&A.dataFilter,E=A&&A.htmlFilter,C=B._.elementsPath&&B._.elementsPath.filters;
if(D){D.addRules({elements:{a:function(I){var H=I.attributes;
if(!H.name){return null
}var J=!I.children.length;
if(CKEDITOR.plugins.link.synAnchorSelector){var G=J?"cke_anchor_empty":"cke_anchor";
var F=H["class"];
if(H.name&&(!F||F.indexOf(G)<0)){H["class"]=(F||"")+" "+G
}if(J&&CKEDITOR.plugins.link.emptyAnchorFix){H.contenteditable="false";
H["data-cke-editable"]=1
}}else{if(CKEDITOR.plugins.link.fakeAnchor&&J){return B.createFakeParserElement(I,"cke_anchor","anchor")
}}return null
}}})
}if(CKEDITOR.plugins.link.emptyAnchorFix&&E){E.addRules({elements:{a:function(F){delete F.attributes.contenteditable
}}})
}if(C){C.push(function(G,F){if(F=="a"){if(CKEDITOR.plugins.link.tryRestoreFakeAnchor(B,G)||(G.getAttribute("name")&&(!G.getAttribute("href")||!G.getChildCount()))){return"anchor"
}}})
}},requires:["fakeobjects"]});
CKEDITOR.plugins.link={getSelectedLink:function(D){try{var C=D.getSelection();
if(C.getType()==CKEDITOR.SELECTION_ELEMENT){var F=C.getSelectedElement();
if(F.is("a")){return F
}}var B=C.getRanges(true)[0];
B.shrink(CKEDITOR.SHRINK_TEXT);
var A=B.getCommonAncestor();
return A.getAscendant("a",true)
}catch(E){return null
}},fakeAnchor:CKEDITOR.env.opera||CKEDITOR.env.webkit,synAnchorSelector:CKEDITOR.env.ie,emptyAnchorFix:CKEDITOR.env.ie&&CKEDITOR.env.version<8,tryRestoreFakeAnchor:function(B,A){if(A&&A.data("cke-real-element-type")&&A.data("cke-real-element-type")=="anchor"){var C=B.restoreRealElement(A);
if(C.data("cke-saved-name")){return C
}}}};
CKEDITOR.unlinkCommand=function(){};
CKEDITOR.unlinkCommand.prototype={exec:function(F){var E=F.getSelection(),D=E.createBookmarks(),A=E.getRanges(),G,C;
for(var B=0;
B<A.length;
B++){G=A[B].getCommonAncestor(true);
C=G.getAscendant("a",true);
if(!C){continue
}A[B].selectNodeContents(C)
}E.selectRanges(A);
F.document.$.execCommand("unlink",false,null);
E.selectBookmarks(D)
},startDisabled:true};
CKEDITOR.removeAnchorCommand=function(){};
CKEDITOR.removeAnchorCommand.prototype={exec:function(B){var D=B.getSelection(),C=D.createBookmarks(),A;
if(D&&(A=D.getSelectedElement())&&(CKEDITOR.plugins.link.fakeAnchor&&!A.getChildCount()?CKEDITOR.plugins.link.tryRestoreFakeAnchor(B,A):A.is("a"))){A.remove(1)
}else{if((A=CKEDITOR.plugins.link.getSelectedLink(B))){if(A.hasAttribute("href")){A.removeAttributes({name:1,"data-cke-saved-name":1});
A.removeClass("cke_anchor")
}else{A.remove(1)
}}}D.selectBookmarks(C)
}};
CKEDITOR.tools.extend(CKEDITOR.config,{linkShowAdvancedTab:true,linkShowTargetTab:true});