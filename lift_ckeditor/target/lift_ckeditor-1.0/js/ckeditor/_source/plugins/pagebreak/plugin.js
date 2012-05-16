;
CKEDITOR.plugins.add("pagebreak",{init:function(A){A.addCommand("pagebreak",CKEDITOR.plugins.pagebreakCmd);
A.ui.addButton("PageBreak",{label:A.lang.pagebreak,command:"pagebreak"});
var B=["{","background: url("+CKEDITOR.getUrl(this.path+"images/pagebreak.gif")+") no-repeat center center;","clear: both;","width:100%; _width:99.9%;","border-top: #999999 1px dotted;","border-bottom: #999999 1px dotted;","padding:0;","height: 5px;","cursor: default;","}"].join("").replace(/;/g," !important;");
A.addCss("div.cke_pagebreak"+B);
CKEDITOR.env.opera&&A.on("contentDom",function(){A.document.on("click",function(C){var D=C.data.getTarget();
if(D.is("div")&&D.hasClass("cke_pagebreak")){A.getSelection().selectElement(D)
}})
})
},afterInit:function(C){var B=C.lang.pagebreakAlt;
var A=C.dataProcessor,D=A&&A.dataFilter,E=A&&A.htmlFilter;
if(E){E.addRules({attributes:{"class":function(J,G){var I=J.replace("cke_pagebreak","");
if(I!=J){var H=CKEDITOR.htmlParser.fragment.fromHtml('<span style="display: none;">&nbsp;</span>');
G.children.length=0;
G.add(H);
var F=G.attributes;
delete F["aria-label"];
delete F.contenteditable;
delete F.title
}return I
}}},5)
}if(D){D.addRules({elements:{div:function(H){var G=H.attributes,I=G&&G.style,J=I&&H.children.length==1&&H.children[0],F=J&&(J.name=="span")&&J.attributes.style;
if(F&&(/page-break-after\s*:\s*always/i).test(I)&&(/display\s*:\s*none/i).test(F)){G.contenteditable="false";
G["class"]="cke_pagebreak";
G["data-cke-display-name"]="pagebreak";
G["aria-label"]=B;
G.title=B;
H.children.length=0
}}}})
}},requires:["fakeobjects"]});
CKEDITOR.plugins.pagebreakCmd={exec:function(F){var C=F.lang.pagebreakAlt;
var G=CKEDITOR.dom.element.createFromHtml('<div style="page-break-after: always;"contenteditable="false" title="'+C+'" aria-label="'+C+'" data-cke-display-name="pagebreak" class="cke_pagebreak"></div>',F.document);
var A=F.getSelection().getRanges(true);
F.fire("saveSnapshot");
for(var B,D=A.length-1;
D>=0;
D--){B=A[D];
if(D<A.length-1){G=G.clone(true)
}B.splitBlock("p");
B.insertNode(G);
if(D==A.length-1){var E=G.getNext();
B.moveToPosition(G,CKEDITOR.POSITION_AFTER_END);
if(!E||E.type==CKEDITOR.NODE_ELEMENT&&!E.isEditable()){B.fixBlock(true,F.config.enterMode==CKEDITOR.ENTER_DIV?"div":"p")
}B.select()
}}F.fire("saveSnapshot")
}};