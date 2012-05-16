;
delete CKEDITOR.loadFullCore;
CKEDITOR.instances={};
CKEDITOR.document=new CKEDITOR.dom.document(document);
CKEDITOR.add=function(A){CKEDITOR.instances[A.name]=A;
A.on("focus",function(){if(CKEDITOR.currentInstance!=A){CKEDITOR.currentInstance=A;
CKEDITOR.fire("currentInstance")
}});
A.on("blur",function(){if(CKEDITOR.currentInstance==A){CKEDITOR.currentInstance=null;
CKEDITOR.fire("currentInstance")
}})
};
CKEDITOR.remove=function(A){delete CKEDITOR.instances[A.name]
};
CKEDITOR.on("instanceDestroyed",function(){if(CKEDITOR.tools.isEmpty(this.instances)){CKEDITOR.fire("reset")
}});
CKEDITOR.loader.load("core/_bootstrap");
CKEDITOR.TRISTATE_ON=1;
CKEDITOR.TRISTATE_OFF=2;
CKEDITOR.TRISTATE_DISABLED=0;