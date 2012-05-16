;
CKEDITOR.dom.window=function(A){CKEDITOR.dom.domObject.call(this,A)
};
CKEDITOR.dom.window.prototype=new CKEDITOR.dom.domObject();
CKEDITOR.tools.extend(CKEDITOR.dom.window.prototype,{focus:function(){if(CKEDITOR.env.webkit&&this.$.parent){this.$.parent.focus()
}this.$.focus()
},getViewPaneSize:function(){var B=this.$.document,A=B.compatMode=="CSS1Compat";
return{width:(A?B.documentElement.clientWidth:B.body.clientWidth)||0,height:(A?B.documentElement.clientHeight:B.body.clientHeight)||0}
},getScrollPosition:function(){var A=this.$;
if("pageXOffset" in A){return{x:A.pageXOffset||0,y:A.pageYOffset||0}
}else{var B=A.document;
return{x:B.documentElement.scrollLeft||B.body.scrollLeft||0,y:B.documentElement.scrollTop||B.body.scrollTop||0}
}}});