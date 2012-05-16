(function(){function A(C,D){var E=C.lang.placeholder,B=C.lang.common.generalTab;
return{title:E.title,minWidth:300,minHeight:80,contents:[{id:"info",label:B,title:B,elements:[{id:"text",type:"text",style:"width: 100%;",label:E.text,"default":"",required:true,validate:CKEDITOR.dialog.validate.notEmpty(E.textMissing),setup:function(F){if(D){this.setValue(F.getText().slice(2,-2))
}},commit:function(F){var G="[["+this.getValue()+"]]";
CKEDITOR.plugins.placeholder.createPlaceholder(C,F,G)
}}]}],onShow:function(){if(D){this._element=CKEDITOR.plugins.placeholder.getSelectedPlaceHoder(C)
}this.setupContent(this._element)
},onOk:function(){this.commitContent(this._element);
delete this._element
}}
}CKEDITOR.dialog.add("createplaceholder",function(B){return A(B)
});
CKEDITOR.dialog.add("editplaceholder",function(B){return A(B,1)
})
})();