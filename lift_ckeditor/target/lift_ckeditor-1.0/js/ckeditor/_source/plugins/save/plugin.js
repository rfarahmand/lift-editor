(function(){var B={modes:{wysiwyg:1,source:1},readOnly:1,exec:function(D){var C=D.element.$.form;
if(C){try{C.submit()
}catch(E){if(C.submit.click){C.submit.click()
}}}}};
var A="save";
CKEDITOR.plugins.add(A,{init:function(C){var D=C.addCommand(A,B);
D.modes={wysiwyg:!!(C.element.$.form)};
C.ui.addButton("Save",{label:C.lang.save,command:A})
}})
})();