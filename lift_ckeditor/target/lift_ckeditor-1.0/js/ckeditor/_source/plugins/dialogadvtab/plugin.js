(function(){function B(D){var C=this.att;
var E=D&&D.hasAttribute(C)&&D.getAttribute(C)||"";
if(E!==undefined){this.setValue(E)
}}function A(){var E;
for(var D=0;
D<arguments.length;
D++){if(arguments[D] instanceof CKEDITOR.dom.element){E=arguments[D];
break
}}if(E){var C=this.att,F=this.getValue();
if(F){E.setAttribute(C,F)
}else{E.removeAttribute(C,F)
}}}CKEDITOR.plugins.add("dialogadvtab",{createAdvancedTab:function(D,F){if(!F){F={id:1,dir:1,classes:1,styles:1}
}var G=D.lang.common;
var C={id:"advanced",label:G.advancedTab,title:G.advancedTab,elements:[{type:"vbox",padding:1,children:[]}]};
var E=[];
if(F.id||F.dir){if(F.id){E.push({id:"advId",att:"id",type:"text",label:G.id,setup:B,commit:A})
}if(F.dir){E.push({id:"advLangDir",att:"dir",type:"select",label:G.langDir,"default":"",style:"width:100%",items:[[G.notSet,""],[G.langDirLTR,"ltr"],[G.langDirRTL,"rtl"]],setup:B,commit:A})
}C.elements[0].children.push({type:"hbox",widths:["50%","50%"],children:[].concat(E)})
}if(F.styles||F.classes){E=[];
if(F.styles){E.push({id:"advStyles",att:"style",type:"text",label:G.styles,"default":"",validate:CKEDITOR.dialog.validate.inlineStyle(G.invalidInlineStyle),onChange:function(){},getStyle:function(J,H){var I=this.getValue().match(new RegExp(J+"\\s*:\\s*([^;]*)","i"));
return I?I[1]:H
},updateStyle:function(H,J){var I=this.getValue();
if(I){I=I.replace(new RegExp("\\s*"+H+"s*:[^;]*(?:$|;s*)","i"),"").replace(/^[;\s]+/,"").replace(/\s+$/,"")
}if(J){I&&!(/;\s*$/).test(I)&&(I+="; ");
I+=H+": "+J
}this.setValue(I,1)
},setup:B,commit:A})
}if(F.classes){E.push({type:"hbox",widths:["45%","55%"],children:[{id:"advCSSClasses",att:"class",type:"text",label:G.cssClasses,"default":"",setup:B,commit:A}]})
}C.elements[0].children.push({type:"hbox",widths:["50%","50%"],children:[].concat(E)})
}return C
}})
})();