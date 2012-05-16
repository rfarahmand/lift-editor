;
CKEDITOR.dom.event=function(A){this.$=A
};
CKEDITOR.dom.event.prototype={getKey:function(){return this.$.keyCode||this.$.which
},getKeystroke:function(){var A=this.getKey();
if(this.$.ctrlKey||this.$.metaKey){A+=CKEDITOR.CTRL
}if(this.$.shiftKey){A+=CKEDITOR.SHIFT
}if(this.$.altKey){A+=CKEDITOR.ALT
}return A
},preventDefault:function(A){var B=this.$;
if(B.preventDefault){B.preventDefault()
}else{B.returnValue=false
}if(A){this.stopPropagation()
}},stopPropagation:function(){var A=this.$;
if(A.stopPropagation){A.stopPropagation()
}else{A.cancelBubble=true
}},getTarget:function(){var A=this.$.target||this.$.srcElement;
return A?new CKEDITOR.dom.node(A):null
}};
CKEDITOR.CTRL=1114112;
CKEDITOR.SHIFT=2228224;
CKEDITOR.ALT=4456448;