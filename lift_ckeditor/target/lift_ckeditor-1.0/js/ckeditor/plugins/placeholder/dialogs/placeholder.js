(function(){function A(B,E){var D=B.lang.placeholder,C=B.lang.common.generalTab;
return{title:D.title,minWidth:300,minHeight:80,contents:[{id:"info",label:C,title:C,elements:[{id:"text",type:"text",style:"width: 100%;",label:D.text,"default":"",required:true,validate:CKEDITOR.dialog.validate.notEmpty(D.textMissing),setup:function(F){if(E){this.setValue(F.getText().slice(2,-2))
}},commit:function(G){var F="[["+this.getValue()+"]]";
CKEDITOR.plugins.placeholder.createPlaceholder(B,G,F)
}}]}],onShow:function(){if(E){this._element=CKEDITOR.plugins.placeholder.getSelectedPlaceHoder(B)
}this.setupContent(this._element)
},onOk:function(){this.commitContent(this._element);
delete this._element
}}
}CKEDITOR.dialog.add("createplaceholder",function(B){return A(B)
});
CKEDITOR.dialog.add("editplaceholder",function(B){return A(B,1)
})
})();