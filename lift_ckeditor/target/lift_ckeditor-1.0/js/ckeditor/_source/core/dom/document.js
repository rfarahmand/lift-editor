;
CKEDITOR.dom.document=function(A){CKEDITOR.dom.domObject.call(this,A)
};
CKEDITOR.dom.document.prototype=new CKEDITOR.dom.domObject();
CKEDITOR.tools.extend(CKEDITOR.dom.document.prototype,{appendStyleSheet:function(A){if(this.$.createStyleSheet){this.$.createStyleSheet(A)
}else{var B=new CKEDITOR.dom.element("link");
B.setAttributes({rel:"stylesheet",type:"text/css",href:A});
this.getHead().append(B)
}},appendStyleText:function(A){if(this.$.createStyleSheet){var C=this.$.createStyleSheet("");
C.cssText=A
}else{var B=new CKEDITOR.dom.element("style",this);
B.append(new CKEDITOR.dom.text(A,this));
this.getHead().append(B)
}},createElement:function(A,C){var B=new CKEDITOR.dom.element(A,this);
if(C){if(C.attributes){B.setAttributes(C.attributes)
}if(C.styles){B.setStyles(C.styles)
}}return B
},createText:function(A){return new CKEDITOR.dom.text(A,this)
},focus:function(){this.getWindow().focus()
},getById:function(A){var B=this.$.getElementById(A);
return B?new CKEDITOR.dom.element(B):null
},getByAddress:function(B,H){var F=this.$.documentElement;
for(var D=0;
F&&D<B.length;
D++){var G=B[D];
if(!H){F=F.childNodes[G];
continue
}var A=-1;
for(var C=0;
C<F.childNodes.length;
C++){var E=F.childNodes[C];
if(H===true&&E.nodeType==3&&E.previousSibling&&E.previousSibling.nodeType==3){continue
}A++;
if(A==G){F=E;
break
}}}return F?new CKEDITOR.dom.node(F):null
},getElementsByTag:function(A,B){if(!(CKEDITOR.env.ie&&!(document.documentMode>8))&&B){A=B+":"+A
}return new CKEDITOR.dom.nodeList(this.$.getElementsByTagName(A))
},getHead:function(){var A=this.$.getElementsByTagName("head")[0];
if(!A){A=this.getDocumentElement().append(new CKEDITOR.dom.element("head"),true)
}else{A=new CKEDITOR.dom.element(A)
}return(this.getHead=function(){return A
})()
},getBody:function(){var A=new CKEDITOR.dom.element(this.$.body);
return(this.getBody=function(){return A
})()
},getDocumentElement:function(){var A=new CKEDITOR.dom.element(this.$.documentElement);
return(this.getDocumentElement=function(){return A
})()
},getWindow:function(){var A=new CKEDITOR.dom.window(this.$.parentWindow||this.$.defaultView);
return(this.getWindow=function(){return A
})()
},write:function(A){this.$.open("text/html","replace");
CKEDITOR.env.isCustomDomain()&&(this.$.domain=document.domain);
this.$.write(A);
this.$.close()
}});