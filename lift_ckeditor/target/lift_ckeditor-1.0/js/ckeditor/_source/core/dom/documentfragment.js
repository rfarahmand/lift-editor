﻿;
CKEDITOR.dom.documentFragment=function(A){A=A||CKEDITOR.document;
this.$=A.$.createDocumentFragment()
};
CKEDITOR.tools.extend(CKEDITOR.dom.documentFragment.prototype,CKEDITOR.dom.element.prototype,{type:CKEDITOR.NODE_DOCUMENT_FRAGMENT,insertAfterNode:function(A){A=A.$;
A.parentNode.insertBefore(this.$,A.nextSibling)
}},true,{append:1,appendBogus:1,getFirst:1,getLast:1,appendTo:1,moveChildren:1,insertBefore:1,insertAfterNode:1,replace:1,trim:1,type:1,ltrim:1,rtrim:1,getDocument:1,getChildCount:1,getChild:1,getChildren:1});