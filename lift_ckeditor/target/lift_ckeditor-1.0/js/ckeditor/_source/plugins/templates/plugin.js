(function(){CKEDITOR.plugins.add("templates",{requires:["dialog"],init:function(C){CKEDITOR.dialog.add("templates",CKEDITOR.getUrl(this.path+"dialogs/templates.js"));
C.addCommand("templates",new CKEDITOR.dialogCommand("templates"));
C.ui.addButton("Templates",{label:C.lang.templates.button,command:"templates"})
}});
var B={},A={};
CKEDITOR.addTemplates=function(C,D){B[C]=D
};
CKEDITOR.getTemplates=function(C){return B[C]
};
CKEDITOR.loadTemplates=function(F,G){var E=[];
for(var C=0,D=F.length;
C<D;
C++){if(!A[F[C]]){E.push(F[C]);
A[F[C]]=1
}}if(E.length){CKEDITOR.scriptLoader.load(E,G)
}else{setTimeout(G,0)
}}
})();
CKEDITOR.config.templates_files=[CKEDITOR.getUrl("_source/plugins/templates/templates/default.js")];
CKEDITOR.config.templates_replaceContent=true;