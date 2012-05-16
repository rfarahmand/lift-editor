;
CKEDITOR.dom.nodeList=function(A){this.$=A
};
CKEDITOR.dom.nodeList.prototype={count:function(){return this.$.length
},getItem:function(B){var A=this.$[B];
return A?new CKEDITOR.dom.node(A):null
}};