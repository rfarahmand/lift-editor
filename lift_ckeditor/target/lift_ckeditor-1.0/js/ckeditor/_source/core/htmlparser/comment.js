;
CKEDITOR.htmlParser.comment=function(A){this.value=A;
this._={isBlockLike:false}
};
CKEDITOR.htmlParser.comment.prototype={type:CKEDITOR.NODE_COMMENT,writeHtml:function(B,A){var C=this.value;
if(A){if(!(C=A.onComment(C,this))){return 
}if(typeof C!="string"){C.parent=this.parent;
C.writeHtml(B,A);
return 
}}B.comment(C)
}};