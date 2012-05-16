;
CKEDITOR.dom.text=function(B,A){if(typeof B=="string"){B=(A?A.$:document).createTextNode(B)
}this.$=B
};
CKEDITOR.dom.text.prototype=new CKEDITOR.dom.node();
CKEDITOR.tools.extend(CKEDITOR.dom.text.prototype,{type:CKEDITOR.NODE_TEXT,getLength:function(){return this.$.nodeValue.length
},getText:function(){return this.$.nodeValue
},setText:function(A){this.$.nodeValue=A
},split:function(E){if(CKEDITOR.env.ie&&E==this.getLength()){var C=this.getDocument().createText("");
C.insertAfter(this);
return C
}var D=this.getDocument();
var B=new CKEDITOR.dom.text(this.$.splitText(E),D);
if(CKEDITOR.env.ie8){var A=new CKEDITOR.dom.text("",D);
A.insertAfter(B);
A.remove()
}return B
},substring:function(B,A){if(typeof A!="number"){return this.$.nodeValue.substr(B)
}else{return this.$.nodeValue.substring(B,A)
}}});