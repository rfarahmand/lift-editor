;
CKEDITOR.plugins.add("removeformat",{requires:["selection"],init:function(A){A.addCommand("removeFormat",CKEDITOR.plugins.removeformat.commands.removeformat);
A.ui.addButton("RemoveFormat",{label:A.lang.removeFormat,command:"removeFormat"});
A._.removeFormat={filters:[]}
}});
CKEDITOR.plugins.removeformat={commands:{removeformat:{exec:function(K){var J=K._.removeFormatRegex||(K._.removeFormatRegex=new RegExp("^(?:"+K.config.removeFormatTags.replace(/,/g,"|")+")$","i"));
var M=K._.removeAttributes||(K._.removeAttributes=K.config.removeFormatAttributes.split(","));
var C=CKEDITOR.plugins.removeformat.filter;
var A=K.getSelection().getRanges(1),G=A.createIterator(),H;
while((H=G.getNextRange())){if(!H.collapsed){H.enlarge(CKEDITOR.ENLARGE_ELEMENT)
}var L=H.createBookmark(),D=L.startNode,I=L.endNode,B;
var F=function(Q){var R=new CKEDITOR.dom.elementPath(Q),N=R.elements;
for(var O=1,P;
P=N[O];
O++){if(P.equals(R.block)||P.equals(R.blockLimit)){break
}if(J.test(P.getName())&&C(K,P)){Q.breakParent(P)
}}};
F(D);
if(I){F(I);
B=D.getNextSourceNode(true,CKEDITOR.NODE_ELEMENT);
while(B){if(B.equals(I)){break
}var E=B.getNextSourceNode(false,CKEDITOR.NODE_ELEMENT);
if(!(B.getName()=="img"&&B.data("cke-realelement"))&&C(K,B)){if(J.test(B.getName())){B.remove(1)
}else{B.removeAttributes(M);
K.fire("removeFormatCleanup",B)
}}B=E
}}H.moveToBookmark(L)
}K.getSelection().selectRanges(A)
}}},filter:function(C,B){var D=C._.removeFormat.filters;
for(var A=0;
A<D.length;
A++){if(D[A](B)===false){return false
}}return true
}};
CKEDITOR.editor.prototype.addRemoveFormatFilter=function(A){this._.removeFormat.filters.push(A)
};
CKEDITOR.config.removeFormatTags="b,big,code,del,dfn,em,font,i,ins,kbd,q,samp,small,span,strike,strong,sub,sup,tt,u,var";
CKEDITOR.config.removeFormatAttributes="class,style,lang,width,height,align,hspace,valign";