(function(){var K=0;
var J=function(){var M="editor"+(++K);
return(CKEDITOR.instances&&CKEDITOR.instances[M])?J():M
};
var E={};
var I=function(O){var M=O.config.customConfig;
if(!M){return false
}M=CKEDITOR.getUrl(M);
var N=E[M]||(E[M]={});
if(N.fn){N.fn.call(O,O.config);
if(CKEDITOR.getUrl(O.config.customConfig)==M||!I(O)){O.fireOnce("customConfigLoaded")
}}else{CKEDITOR.scriptLoader.load(M,function(){if(CKEDITOR.editorConfig){N.fn=CKEDITOR.editorConfig
}else{N.fn=function(){}
}I(O)
})
}return true
};
var A=function(M,N){M.on("customConfigLoaded",function(){if(N){if(N.on){for(var O in N.on){M.on(O,N.on[O])
}}CKEDITOR.tools.extend(M.config,N,true);
delete M.config.on
}L(M)
});
if(N&&N.customConfig!=undefined){M.config.customConfig=N.customConfig
}if(!I(M)){M.fireOnce("customConfigLoaded")
}};
var L=function(N){var P=N.config.skin.split(","),M=P[0],O=CKEDITOR.getUrl(P[1]||("_source/skins/"+M+"/"));
N.skinName=M;
N.skinPath=O;
N.skinClass="cke_skin_"+M;
N.tabIndex=N.config.tabIndex||N.element.getAttribute("tabindex")||0;
N.readOnly=!!(N.config.readOnly||N.element.getAttribute("disabled"));
N.fireOnce("configLoaded");
B(N)
};
var D=function(M){CKEDITOR.lang.load(M.config.language,M.config.defaultLanguage,function(O,P){M.langCode=O;
M.lang=CKEDITOR.tools.prototypedCopy(P);
if(CKEDITOR.env.gecko&&CKEDITOR.env.version<10900&&M.lang.dir=="rtl"){M.lang.dir="ltr"
}M.fire("langLoaded");
var N=M.config;
N.contentsLangDirection=="ui"&&(N.contentsLangDirection=M.lang.dir);
F(M)
})
};
var F=function(P){var O=P.config,M=O.plugins,N=O.extraPlugins,R=O.removePlugins;
if(N){var Q=new RegExp("(?:^|,)(?:"+N.replace(/\s*,\s*/g,"|")+")(?=,|$)","g");
M=M.replace(Q,"");
M+=","+N
}if(R){Q=new RegExp("(?:^|,)(?:"+R.replace(/\s*,\s*/g,"|")+")(?=,|$)","g");
M=M.replace(Q,"")
}CKEDITOR.env.air&&(M+=",adobeair");
CKEDITOR.plugins.load(M.split(","),function(W){var T=[];
var a=[];
var S=[];
P.plugins=W;
for(var Z in W){var X=W[Z],U=X.lang,Y=CKEDITOR.plugins.getPath(Z),V=null;
X.path=Y;
if(U){V=(CKEDITOR.tools.indexOf(U,P.langCode)>=0?P.langCode:U[0]);
if(!X.langEntries||!X.langEntries[V]){S.push(CKEDITOR.getUrl(Y+"lang/"+V+".js"))
}else{CKEDITOR.tools.extend(P.lang,X.langEntries[V]);
V=null
}}a.push(V);
T.push(X)
}CKEDITOR.scriptLoader.load(S,function(){var c=["beforeInit","init","afterInit"];
for(var b=0;
b<c.length;
b++){for(var d=0;
d<T.length;
d++){var e=T[d];
if(b===0&&a[d]&&e.lang){CKEDITOR.tools.extend(P.lang,e.langEntries[a[d]])
}if(e[c[b]]){e[c[b]](P)
}}}P.fire("pluginsLoaded");
C(P)
})
})
};
var B=function(M){CKEDITOR.skins.load(M,"editor",function(){D(M)
})
};
var C=function(M){var N=M.config.theme;
CKEDITOR.themes.load(N,function(){var O=M.theme=CKEDITOR.themes.get(N);
O.path=CKEDITOR.themes.getPath(N);
O.build(M);
if(M.config.autoUpdateElement){G(M)
}})
};
var G=function(N){var M=N.element;
if(N.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE&&M.is("textarea")){var O=M.$.form&&new CKEDITOR.dom.element(M.$.form);
if(O){function P(){N.updateElement()
}O.on("submit",P);
if(!O.$.submit.nodeName&&!O.$.submit.length){O.$.submit=CKEDITOR.tools.override(O.$.submit,function(Q){return function(){N.updateElement();
if(Q.apply){Q.apply(this,arguments)
}else{Q()
}}
})
}N.on("destroy",function(){O.removeListener("submit",P)
})
}}};
function H(){var P,M=this._.commands,O=this.mode;
if(!O){return 
}for(var N in M){P=M[N];
P[P.startDisabled?"disable":this.readOnly&&!P.readOnly?"disable":P.modes[O]?"enable":"disable"]()
}}CKEDITOR.editor.prototype._init=function(){var M=CKEDITOR.dom.element.get(this._.element),N=this._.instanceConfig;
delete this._.element;
delete this._.instanceConfig;
this._.commands={};
this._.styles=[];
this.element=M;
this.name=(M&&(this.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE)&&(M.getId()||M.getNameAtt()))||J();
if(this.name in CKEDITOR.instances){throw'[CKEDITOR.editor] The instance "'+this.name+'" already exists.'
}this.id=CKEDITOR.tools.getNextId();
this.config=CKEDITOR.tools.prototypedCopy(CKEDITOR.config);
this.ui=new CKEDITOR.ui(this);
this.focusManager=new CKEDITOR.focusManager(this);
CKEDITOR.fire("instanceCreated",null,this);
this.on("mode",H,null,null,1);
this.on("readOnly",H,null,null,1);
A(this,N)
}
})();
CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{addCommand:function(A,B){return this._.commands[A]=new CKEDITOR.command(this,B)
},addCss:function(A){this._.styles.push(A)
},destroy:function(A){if(!A){this.updateElement()
}this.fire("destroy");
this.theme&&this.theme.destroy(this);
CKEDITOR.remove(this);
CKEDITOR.fire("instanceDestroyed",null,this)
},execCommand:function(A,C){var D=this.getCommand(A);
var B={name:A,commandData:C,command:D};
if(D&&D.state!=CKEDITOR.TRISTATE_DISABLED){if(this.fire("beforeCommandExec",B)!==true){B.returnValue=D.exec(B.commandData);
if(!D.async&&this.fire("afterCommandExec",B)!==true){return B.returnValue
}}}return false
},getCommand:function(A){return this._.commands[A]
},getData:function(){this.fire("beforeGetData");
var B=this._.data;
if(typeof B!="string"){var A=this.element;
if(A&&this.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE){B=A.is("textarea")?A.getValue():A.getHtml()
}else{B=""
}}B={dataValue:B};
this.fire("getData",B);
return B.dataValue
},getSnapshot:function(){var B=this.fire("getSnapshot");
if(typeof B!="string"){var A=this.element;
if(A&&this.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE){B=A.is("textarea")?A.getValue():A.getHtml()
}}return B
},loadSnapshot:function(A){this.fire("loadSnapshot",A)
},setData:function(C,D,A){if(D){this.on("dataReady",function(E){E.removeListener();
D.call(E.editor)
})
}var B={dataValue:C};
!A&&this.fire("setData",B);
this._.data=B.dataValue;
!A&&this.fire("afterSetData",B)
},setReadOnly:function(A){A=(A==undefined)||A;
if(this.readOnly!=A){this.readOnly=A;
this.fire("readOnly")
}},insertHtml:function(A){this.fire("insertHtml",A)
},insertText:function(A){this.fire("insertText",A)
},insertElement:function(A){this.fire("insertElement",A)
},checkDirty:function(){return(this.mayBeDirty&&this._.previousValue!==this.getSnapshot())
},resetDirty:function(){if(this.mayBeDirty){this._.previousValue=this.getSnapshot()
}},updateElement:function(){var A=this.element;
if(A&&this.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE){var B=this.getData();
if(this.config.htmlEncodeOutput){B=CKEDITOR.tools.htmlEncode(B)
}if(A.is("textarea")){A.setValue(B)
}else{A.setHtml(B)
}}}});
CKEDITOR.on("loaded",function(){var B=CKEDITOR.editor._pending;
if(B){delete CKEDITOR.editor._pending;
for(var A=0;
A<B.length;
A++){B[A]._init()
}}});