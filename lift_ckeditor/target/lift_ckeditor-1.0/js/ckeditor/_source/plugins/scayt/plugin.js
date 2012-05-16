(function(){var D="scaytcheck",C="";
function A(K,J){var I=0,H;
for(H in J){if(J[H]==K){I=1;
break
}}return I
}var B=function(){var K=this;
var H=function(){var P=K.config;
var M={};
M.srcNodeRef=K.document.getWindow().$.frameElement;
M.assocApp="CKEDITOR."+CKEDITOR.version+"@"+CKEDITOR.revision;
M.customerid=P.scayt_customerid||"1:WvF0D4-UtPqN1-43nkD4-NKvUm2-daQqk3-LmNiI-z7Ysb4-mwry24-T8YrS3-Q2tpq2";
M.customDictionaryIds=P.scayt_customDictionaryIds||"";
M.userDictionaryName=P.scayt_userDictionaryName||"";
M.sLang=P.scayt_sLang||"en_US";
M.onLoad=function(){if(!(CKEDITOR.env.ie&&CKEDITOR.env.version<8)){this.addStyle(this.selectorCss(),"padding-bottom: 2px !important;")
}if(K.focusManager.hasFocus&&!E.isControlRestored(K)){this.focus()
}};
M.onBeforeChange=function(){if(E.getScayt(K)&&!K.checkDirty()){setTimeout(function(){K.resetDirty()
},0)
}};
var Q=window.scayt_custom_params;
if(typeof Q=="object"){for(var O in Q){M[O]=Q[O]
}}if(E.getControlId(K)){M.id=E.getControlId(K)
}var S=new window.scayt(M);
S.afterMarkupRemove.push(function(T){(new CKEDITOR.dom.element(T,S.document)).mergeSiblings()
});
var N=E.instances[K.name];
if(N){S.sLang=N.sLang;
S.option(N.option());
S.paused=N.paused
}E.instances[K.name]=S;
try{S.setDisabled(E.isPaused(K)===false)
}catch(R){}K.fire("showScaytState")
};
K.on("contentDom",H);
K.on("contentDomUnload",function(){var M=CKEDITOR.document.getElementsByTag("script"),Q=/^dojoIoScript(\d+)$/i,O=/^https?:\/\/svc\.webspellchecker\.net\/spellcheck\/script\/ssrv\.cgi/i;
for(var P=0;
P<M.count();
P++){var N=M.getItem(P),S=N.getId(),R=N.getAttribute("src");
if(S&&R&&S.match(Q)&&R.match(O)){N.remove()
}}});
K.on("beforeCommandExec",function(N){if((N.data.name=="source"||N.data.name=="newpage")&&K.mode=="wysiwyg"){var M=E.getScayt(K);
if(M){E.setPaused(K,!M.disabled);
E.setControlId(K,M.id);
M.destroy(true);
delete E.instances[K.name]
}}else{if(N.data.name=="source"&&K.mode=="source"){E.markControlRestore(K)
}}});
K.on("afterCommandExec",function(M){if(!E.isScaytEnabled(K)){return 
}if(K.mode=="wysiwyg"&&(M.data.name=="undo"||M.data.name=="redo")){window.setTimeout(function(){E.getScayt(K).refresh()
},10)
}});
K.on("destroy",function(O){var N=O.editor,M=E.getScayt(N);
if(!M){return 
}delete E.instances[N.name];
E.setControlId(N,M.id);
M.destroy(true)
});
K.on("afterSetData",function(){if(E.isScaytEnabled(K)){window.setTimeout(function(){var M=E.getScayt(K);
M&&M.refresh()
},10)
}});
K.on("insertElement",function(){var M=E.getScayt(K);
if(E.isScaytEnabled(K)){if(CKEDITOR.env.ie){K.getSelection().unlock(true)
}window.setTimeout(function(){M.focus();
M.refresh()
},10)
}},this,null,50);
K.on("insertHtml",function(){var M=E.getScayt(K);
if(E.isScaytEnabled(K)){if(CKEDITOR.env.ie){K.getSelection().unlock(true)
}window.setTimeout(function(){M.focus();
M.refresh()
},10)
}},this,null,50);
K.on("scaytDialog",function(M){M.data.djConfig=window.djConfig;
M.data.scayt_control=E.getScayt(K);
M.data.tab=C;
M.data.scayt=window.scayt
});
var J=K.dataProcessor,L=J&&J.htmlFilter;
if(L){L.addRules({elements:{span:function(M){if(M.attributes["data-scayt_word"]&&M.attributes["data-scaytid"]){delete M.name;
return M
}}}})
}var I=CKEDITOR.plugins.undo.Image.prototype;
I.equals=CKEDITOR.tools.override(I.equals,function(M){return function(Q){var P=this.contents,R=Q.contents;
var O=E.getScayt(this.editor);
if(O&&E.isScaytReady(this.editor)){this.contents=O.reset(P)||"";
Q.contents=O.reset(R)||""
}var N=M.apply(this,arguments);
this.contents=P;
Q.contents=R;
return N
}
});
if(K.document){H()
}};
CKEDITOR.plugins.scayt={engineLoaded:false,instances:{},controlInfo:{},setControlInfo:function(I,J){if(I&&I.name&&typeof (this.controlInfo[I.name])!="object"){this.controlInfo[I.name]={}
}for(var H in J){this.controlInfo[I.name][H]=J[H]
}},isControlRestored:function(H){if(H&&H.name&&this.controlInfo[H.name]){return this.controlInfo[H.name].restored
}return false
},markControlRestore:function(H){this.setControlInfo(H,{restored:true})
},setControlId:function(H,I){this.setControlInfo(H,{id:I})
},getControlId:function(H){if(H&&H.name&&this.controlInfo[H.name]&&this.controlInfo[H.name].id){return this.controlInfo[H.name].id
}return null
},setPaused:function(I,H){this.setControlInfo(I,{paused:H})
},isPaused:function(H){if(H&&H.name&&this.controlInfo[H.name]){return this.controlInfo[H.name].paused
}return undefined
},getScayt:function(H){return this.instances[H.name]
},isScaytReady:function(H){return this.engineLoaded===true&&"undefined"!==typeof window.scayt&&this.getScayt(H)
},isScaytEnabled:function(I){var H=this.getScayt(I);
return(H)?H.disabled===false:false
},getUiTabs:function(J){var K=[];
var H=J.config.scayt_uiTabs||"1,1,1";
H=H.split(",");
H[3]="1";
for(var I=0;
I<4;
I++){K[I]=(typeof window.scayt!="undefined"&&typeof window.scayt.uiTags!="undefined")?(parseInt(H[I],10)&&window.scayt.uiTags[I]):parseInt(H[I],10)
}return K
},loadEngine:function(I){if(CKEDITOR.env.gecko&&CKEDITOR.env.version<10900||CKEDITOR.env.opera||CKEDITOR.env.air){return I.fire("showScaytState")
}if(this.engineLoaded===true){return B.apply(I)
}else{if(this.engineLoaded==-1){return CKEDITOR.on("scaytReady",function(){B.apply(I)
})
}}CKEDITOR.on("scaytReady",B,I);
CKEDITOR.on("scaytReady",function(){this.engineLoaded=true
},this,null,0);
this.engineLoaded=-1;
var L=document.location.protocol;
L=L.search(/https?:/)!=-1?L:"http:";
var J="svc.webspellchecker.net/scayt26/loader__base.js";
var H=I.config.scayt_srcUrl||(L+"//"+J);
var K=E.parseUrl(H).path+"/";
if(window.scayt==undefined){CKEDITOR._djScaytConfig={baseUrl:K,addOnLoad:[function(){CKEDITOR.fireOnce("scaytReady")
}],isDebug:false};
CKEDITOR.document.getHead().append(CKEDITOR.document.createElement("script",{attributes:{type:"text/javascript",async:"true",src:H}}))
}else{CKEDITOR.fireOnce("scaytReady")
}return null
},parseUrl:function(I){var H;
if(I.match&&(H=I.match(/(.*)[\/\\](.*?\.\w+)$/))){return{path:H[1],file:H[2]}
}else{return I
}}};
var E=CKEDITOR.plugins.scayt;
var F=function(L,H,M,K,N,J,I){L.addCommand(K,N);
L.addMenuItem(K,{label:M,command:K,group:J,order:I})
};
var G={preserveState:true,editorFocus:false,canUndo:false,exec:function(I){if(E.isScaytReady(I)){var H=E.isScaytEnabled(I);
this.setState(H?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_ON);
var J=E.getScayt(I);
J.focus();
J.setDisabled(H)
}else{if(!I.config.scayt_autoStartup&&E.engineLoaded>=0){this.setState(CKEDITOR.TRISTATE_DISABLED);
E.loadEngine(I)
}}}};
CKEDITOR.plugins.add("scayt",{requires:["menubutton"],beforeInit:function(J){var I=J.config.scayt_contextMenuItemsOrder||"suggest|moresuggest|control",H="";
I=I.split("|");
if(I&&I.length){for(var K=0;
K<I.length;
K++){H+="scayt_"+I[K]+(I.length!=parseInt(K,10)+1?",":"")
}}J.config.menu_groups=H+","+J.config.menu_groups
},init:function(L){var H=L.dataProcessor&&L.dataProcessor.dataFilter;
var R={elements:{span:function(T){var S=T.attributes;
if(S&&S["data-scaytid"]){delete T.name
}}}};
H&&H.addRules(R);
var M={},P={};
var K=L.addCommand(D,G);
CKEDITOR.dialog.add(D,CKEDITOR.getUrl(this.path+"dialogs/options.js"));
var Q=E.getUiTabs(L);
var J="scaytButton";
L.addMenuGroup(J);
var N={};
var I=L.lang.scayt;
N.scaytToggle={label:I.enable,command:D,group:J};
if(Q[0]==1){N.scaytOptions={label:I.options,group:J,onClick:function(){C="options";
L.openDialog(D)
}}
}if(Q[1]==1){N.scaytLangs={label:I.langs,group:J,onClick:function(){C="langs";
L.openDialog(D)
}}
}if(Q[2]==1){N.scaytDict={label:I.dictionariesTab,group:J,onClick:function(){C="dictionaries";
L.openDialog(D)
}}
}N.scaytAbout={label:L.lang.scayt.about,group:J,onClick:function(){C="about";
L.openDialog(D)
}};
L.addMenuItems(N);
L.ui.add("Scayt",CKEDITOR.UI_MENUBUTTON,{label:I.title,title:CKEDITOR.env.opera?I.opera_title:I.title,className:"cke_button_scayt",modes:{wysiwyg:1},onRender:function(){K.on("state",function(){this.setState(K.state)
},this)
},onMenu:function(){var S=E.isScaytEnabled(L);
L.getMenuItem("scaytToggle").label=I[S?"disable":"enable"];
var T=E.getUiTabs(L);
return{scaytToggle:CKEDITOR.TRISTATE_OFF,scaytOptions:S&&T[0]?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,scaytLangs:S&&T[1]?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,scaytDict:S&&T[2]?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,scaytAbout:S&&T[3]?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED}
}});
if(L.contextMenu&&L.addMenuItems){L.contextMenu.addListener(function(V,o){if(!E.isScaytEnabled(L)||o.getRanges()[0].checkReadOnly()){return null
}var Z=E.getScayt(L),c=Z.getScaytNode();
if(!c){return null
}var j=Z.getWord(c);
if(!j){return null
}var Y=Z.getLang(),k={},g=window.scayt.getSuggestion(j,Y);
if(!g||!g.length){return null
}for(var d in M){delete L._.menuItems[d];
delete L._.commands[d]
}for(d in P){delete L._.menuItems[d];
delete L._.commands[d]
}M={};
P={};
var U=L.config.scayt_moreSuggestions||"on";
var W=false;
var X=L.config.scayt_maxSuggestions;
(typeof X!="number")&&(X=5);
!X&&(X=g.length);
var T=L.config.scayt_contextCommands||"all";
T=T.split("|");
for(var h=0,e=g.length;
h<e;
h+=1){var S="scayt_suggestion_"+g[h].replace(" ","_");
var f=(function(l,i){return{exec:function(){Z.replace(l,i)
}}
})(c,g[h]);
if(h<X){F(L,"button_"+S,g[h],S,f,"scayt_suggest",h+1);
k[S]=CKEDITOR.TRISTATE_OFF;
P[S]=CKEDITOR.TRISTATE_OFF
}else{if(U=="on"){F(L,"button_"+S,g[h],S,f,"scayt_moresuggest",h+1);
M[S]=CKEDITOR.TRISTATE_OFF;
W=true
}}}if(W){L.addMenuItem("scayt_moresuggest",{label:I.moreSuggestions,group:"scayt_moresuggest",order:10,getItems:function(){return M
}});
P.scayt_moresuggest=CKEDITOR.TRISTATE_OFF
}if(A("all",T)||A("ignore",T)){var a={exec:function(){Z.ignore(c)
}};
F(L,"ignore",I.ignore,"scayt_ignore",a,"scayt_control",1);
P.scayt_ignore=CKEDITOR.TRISTATE_OFF
}if(A("all",T)||A("ignoreall",T)){var n={exec:function(){Z.ignoreAll(c)
}};
F(L,"ignore_all",I.ignoreAll,"scayt_ignore_all",n,"scayt_control",2);
P.scayt_ignore_all=CKEDITOR.TRISTATE_OFF
}if(A("all",T)||A("add",T)){var b={exec:function(){window.scayt.addWordToUserDictionary(c)
}};
F(L,"add_word",I.addWord,"scayt_add_word",b,"scayt_control",3);
P.scayt_add_word=CKEDITOR.TRISTATE_OFF
}if(Z.fireOnContextMenu){Z.fireOnContextMenu(L)
}return P
})
}var O=function(){L.removeListener("showScaytState",O);
if(!CKEDITOR.env.opera&&!CKEDITOR.env.air){K.setState(E.isScaytEnabled(L)?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF)
}else{K.setState(CKEDITOR.TRISTATE_DISABLED)
}};
L.on("showScaytState",O);
if(CKEDITOR.env.opera||CKEDITOR.env.air){L.on("instanceReady",function(){O()
})
}if(L.config.scayt_autoStartup){L.on("instanceReady",function(){E.loadEngine(L)
})
}},afterInit:function(J){var I,H=function(K){if(K.hasAttribute("data-scaytid")){return false
}};
if(J._.elementsPath&&(I=J._.elementsPath.filters)){I.push(H)
}J.addRemoveFormatFilter&&J.addRemoveFormatFilter(H)
}})
})();