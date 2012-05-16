;
if(!CKEDITOR.editor){CKEDITOR.ELEMENT_MODE_NONE=0;
CKEDITOR.ELEMENT_MODE_REPLACE=1;
CKEDITOR.ELEMENT_MODE_APPENDTO=2;
CKEDITOR.editor=function(D,A,C,B){this._={instanceConfig:D,element:A,data:B};
this.elementMode=C||CKEDITOR.ELEMENT_MODE_NONE;
CKEDITOR.event.call(this);
this._init()
};
CKEDITOR.editor.replace=function(A,B){var E=A;
if(typeof E!="object"){E=document.getElementById(A);
if(E&&E.tagName.toLowerCase() in {style:1,script:1,base:1,link:1,meta:1,title:1}){E=null
}if(!E){var D=0,C=document.getElementsByName(A);
while((E=C[D++])&&E.tagName.toLowerCase()!="textarea"){}}if(!E){throw'[CKEDITOR.editor.replace] The element with id or name "'+A+'" was not found.'
}}E.style.visibility="hidden";
return new CKEDITOR.editor(B,E,CKEDITOR.ELEMENT_MODE_REPLACE)
};
CKEDITOR.editor.appendTo=function(A,B,D){var C=A;
if(typeof C!="object"){C=document.getElementById(A);
if(!C){throw'[CKEDITOR.editor.appendTo] The element with id "'+A+'" was not found.'
}}return new CKEDITOR.editor(B,C,CKEDITOR.ELEMENT_MODE_APPENDTO,D)
};
CKEDITOR.editor.prototype={_init:function(){var A=CKEDITOR.editor._pending||(CKEDITOR.editor._pending=[]);
A.push(this)
},fire:function(A,B){return CKEDITOR.event.prototype.fire.call(this,A,B,this)
},fireOnce:function(A,B){return CKEDITOR.event.prototype.fireOnce.call(this,A,B,this)
}};
CKEDITOR.event.implementOn(CKEDITOR.editor.prototype,true)
};