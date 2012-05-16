;
CKEDITOR.dom.comment=function(B,A){if(typeof B=="string"){B=(A?A.$:document).createComment(B)
}CKEDITOR.dom.domObject.call(this,B)
};
CKEDITOR.dom.comment.prototype=new CKEDITOR.dom.node();
CKEDITOR.tools.extend(CKEDITOR.dom.comment.prototype,{type:CKEDITOR.NODE_COMMENT,getOuterHtml:function(){return"<!--"+this.$.nodeValue+"-->"
}});