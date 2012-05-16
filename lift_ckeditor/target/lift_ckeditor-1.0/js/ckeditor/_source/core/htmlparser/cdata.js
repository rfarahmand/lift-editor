(function(){CKEDITOR.htmlParser.cdata=function(A){this.value=A
};
CKEDITOR.htmlParser.cdata.prototype={type:CKEDITOR.NODE_TEXT,writeHtml:function(A){A.write(this.value)
}}
})();