(function(){CKEDITOR.htmlParser.text=function(A){this.value=A;
this._={isBlockLike:false}
};
CKEDITOR.htmlParser.text.prototype={type:CKEDITOR.NODE_TEXT,writeHtml:function(B,A){var C=this.value;
if(A&&!(C=A.onText(C,this))){return 
}B.text(C)
}}
})();