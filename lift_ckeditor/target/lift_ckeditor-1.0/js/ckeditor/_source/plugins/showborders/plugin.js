(function(){var A="cke_show_border",B,D=(CKEDITOR.env.ie6Compat?[".%1 table.%2,",".%1 table.%2 td, .%1 table.%2 th","{","border : #d3d3d3 1px dotted","}"]:[".%1 table.%2,",".%1 table.%2 > tr > td, .%1 table.%2 > tr > th,",".%1 table.%2 > tbody > tr > td, .%1 table.%2 > tbody > tr > th,",".%1 table.%2 > thead > tr > td, .%1 table.%2 > thead > tr > th,",".%1 table.%2 > tfoot > tr > td, .%1 table.%2 > tfoot > tr > th","{","border : #d3d3d3 1px dotted","}"]).join("");
B=D.replace(/%2/g,A).replace(/%1/g,"cke_show_borders ");
var C={preserveState:true,editorFocus:false,readOnly:1,exec:function(E){this.toggleState();
this.refresh(E)
},refresh:function(E){if(E.document){var F=(this.state==CKEDITOR.TRISTATE_ON)?"addClass":"removeClass";
E.document.getBody()[F]("cke_show_borders")
}}};
CKEDITOR.plugins.add("showborders",{requires:["wysiwygarea"],modes:{wysiwyg:1},init:function(E){var F=E.addCommand("showborders",C);
F.canUndo=false;
if(E.config.startupShowBorders!==false){F.setState(CKEDITOR.TRISTATE_ON)
}E.addCss(B);
E.on("mode",function(){if(F.state!=CKEDITOR.TRISTATE_DISABLED){F.refresh(E)
}},null,null,100);
E.on("contentDom",function(){if(F.state!=CKEDITOR.TRISTATE_DISABLED){F.refresh(E)
}});
E.on("removeFormatCleanup",function(G){var H=G.data;
if(E.getCommand("showborders").state==CKEDITOR.TRISTATE_ON&&H.is("table")&&(!H.hasAttribute("border")||parseInt(H.getAttribute("border"),10)<=0)){H.addClass(A)
}})
},afterInit:function(F){var E=F.dataProcessor,G=E&&E.dataFilter,H=E&&E.htmlFilter;
if(G){G.addRules({elements:{table:function(L){var J=L.attributes,I=J["class"],K=parseInt(J.border,10);
if((!K||K<=0)&&(!I||I.indexOf(A)==-1)){J["class"]=(I||"")+" "+A
}}}})
}if(H){H.addRules({elements:{table:function(K){var J=K.attributes,I=J["class"];
I&&(J["class"]=I.replace(A,"").replace(/\s{2}/," ").replace(/^\s+|\s+$/,""))
}}})
}}});
CKEDITOR.on("dialogDefinition",function(H){var I=H.data.name;
if(I=="table"||I=="tableProperties"){var L=H.data.definition,G=L.getContents("info"),F=G.get("txtBorder"),E=F.commit;
F.commit=CKEDITOR.tools.override(E,function(M){return function(P,N){M.apply(this,arguments);
var O=parseInt(this.getValue(),10);
N[(!O||O<=0)?"addClass":"removeClass"](A)
}
});
var K=L.getContents("advanced"),J=K&&K.get("advCSSClasses");
if(J){J.setup=CKEDITOR.tools.override(J.setup,function(M){return function(){M.apply(this,arguments);
this.setValue(this.getValue().replace(/cke_show_border/,""))
}
});
J.commit=CKEDITOR.tools.override(J.commit,function(M){return function(O,N){M.apply(this,arguments);
if(!parseInt(N.getAttribute("border"),10)){N.addClass("cke_show_border")
}}
})
}}})
})();