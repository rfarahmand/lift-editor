(function(){CKEDITOR.dialog.add("pastetext",function(A){return{title:A.lang.pasteText.title,minWidth:CKEDITOR.env.ie&&CKEDITOR.env.quirks?368:350,minHeight:240,onShow:function(){this.setupContent()
},onOk:function(){this.commitContent()
},contents:[{label:A.lang.common.generalTab,id:"general",elements:[{type:"html",id:"pasteMsg",html:'<div style="white-space:normal;width:340px;">'+A.lang.clipboard.pasteMsg+"</div>"},{type:"textarea",id:"content",className:"cke_pastetext",onLoad:function(){var B=this.getDialog().getContentElement("general","pasteMsg").getElement(),C=this.getElement().getElementsByTag("textarea").getItem(0);
C.setAttribute("aria-labelledby",B.$.id);
C.setStyle("direction",A.config.contentsLangDirection)
},focus:function(){this.getElement().focus()
},setup:function(){this.setValue("")
},commit:function(){var B=this.getValue();
setTimeout(function(){A.fire("paste",{text:B})
},0)
}}]}]}
})
})();