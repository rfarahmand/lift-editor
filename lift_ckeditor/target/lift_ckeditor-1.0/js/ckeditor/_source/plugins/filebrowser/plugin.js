(function(){function C(J,L){var M=[];
if(!L){return J
}else{for(var K in L){M.push(K+"="+encodeURIComponent(L[K]))
}}return J+((J.indexOf("?")!=-1)?"&":"?")+M.join("&")
}function A(K){K+="";
var J=K.charAt(0).toUpperCase();
return J+K.substr(1)
}function F(K){var M=this.getDialog();
var O=M.getParentEditor();
O._.filebrowserSe=this;
var N=O.config["filebrowser"+A(M.getName())+"WindowWidth"]||O.config.filebrowserWindowWidth||"80%";
var J=O.config["filebrowser"+A(M.getName())+"WindowHeight"]||O.config.filebrowserWindowHeight||"70%";
var P=this.filebrowser.params||{};
P.CKEditor=O.name;
P.CKEditorFuncNum=O._.filebrowserFn;
if(!P.langCode){P.langCode=O.langCode
}var L=C(this.filebrowser.url,P);
O.popup(L,N,J,O.config.filebrowserWindowFeatures||O.config.fileBrowserWindowFeatures)
}function I(J){var K=this.getDialog();
var L=K.getParentEditor();
L._.filebrowserSe=this;
if(!K.getContentElement(this["for"][0],this["for"][1]).getInputElement().$.value){return false
}if(!K.getContentElement(this["for"][0],this["for"][1]).getAction()){return false
}return true
}function G(J,K,L){var M=L.params||{};
M.CKEditor=J.name;
M.CKEditorFuncNum=J._.filebrowserFn;
if(!M.langCode){M.langCode=J.langCode
}K.action=C(L.url,M);
K.filebrowser=L
}function D(R,M,L,J){var P,O;
for(var Q in J){P=J[Q];
if(P.type=="hbox"||P.type=="vbox"||P.type=="fieldset"){D(R,M,L,P.children)
}if(!P.filebrowser){continue
}if(typeof P.filebrowser=="string"){var N={action:(P.type=="fileButton")?"QuickUpload":"Browse",target:P.filebrowser};
P.filebrowser=N
}if(P.filebrowser.action=="Browse"){var K=P.filebrowser.url;
if(K===undefined){K=R.config["filebrowser"+A(M)+"BrowseUrl"];
if(K===undefined){K=R.config.filebrowserBrowseUrl
}}if(K){P.onClick=F;
P.filebrowser.url=K;
P.hidden=false
}}else{if(P.filebrowser.action=="QuickUpload"&&P["for"]){K=P.filebrowser.url;
if(K===undefined){K=R.config["filebrowser"+A(M)+"UploadUrl"];
if(K===undefined){K=R.config.filebrowserUploadUrl
}}if(K){var S=P.onClick;
P.onClick=function(T){var U=T.sender;
if(S&&S.call(U,T)===false){return false
}return I.call(U,T)
};
P.filebrowser.url=K;
P.hidden=false;
G(R,L.getContents(P["for"][0]).get(P["for"][1]),P.filebrowser)
}}}}}function H(L,K){var N=K.getDialog();
var J=K.filebrowser.target||null;
if(J){var O=J.split(":");
var M=N.getContentElement(O[0],O[1]);
if(M){M.setValue(L);
N.selectPage(O[0])
}}}function B(M,K,J){if(J.indexOf(";")!==-1){var N=J.split(";");
for(var L=0;
L<N.length;
L++){if(B(M,K,N[L])){return true
}}return false
}var O=M.getContents(K).get(J).filebrowser;
return(O&&O.url)
}function E(K,N){var M=this._.filebrowserSe.getDialog(),J=this._.filebrowserSe["for"],L=this._.filebrowserSe.filebrowser.onSelect;
if(J){M.getContentElement(J[0],J[1]).reset()
}if(typeof N=="function"&&N.call(this._.filebrowserSe)===false){return 
}if(L&&L.call(this._.filebrowserSe,K,N)===false){return 
}if(typeof N=="string"&&N){alert(N)
}if(K){H(K,this._.filebrowserSe)
}}CKEDITOR.plugins.add("filebrowser",{init:function(K,J){K._.filebrowserFn=CKEDITOR.tools.addFunction(E,K);
K.on("destroy",function(){CKEDITOR.tools.removeFunction(this._.filebrowserFn)
})
}});
CKEDITOR.on("dialogDefinition",function(J){var M=J.data.definition,L;
for(var K in M.contents){if((L=M.contents[K])){D(J.editor,J.data.name,M,L.elements);
if(L.hidden&&L.filebrowser){L.hidden=!B(M,L.id,L.filebrowser)
}}}})
})();