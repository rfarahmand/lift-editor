;
CKEDITOR.plugins.add("newpage",{init:function(A){A.addCommand("newpage",{modes:{wysiwyg:1,source:1},exec:function(B){var C=this;
B.setData(B.config.newpage_html||"",function(){setTimeout(function(){B.fire("afterCommandExec",{name:C.name,command:C});
B.selectionChange()
},200)
});
B.focus()
},async:true});
A.ui.addButton("NewPage",{label:A.lang.newPage,command:"newpage"})
}});