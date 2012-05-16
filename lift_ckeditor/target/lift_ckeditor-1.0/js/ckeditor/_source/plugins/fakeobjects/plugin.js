(function(){var E=CKEDITOR.htmlParser.cssStyle,C=CKEDITOR.tools.cssLength;
var D=/^((?:\d*(?:\.\d+))|(?:\d+))(.*)?$/i;
function A(I,G){var F=D.exec(I),H=D.exec(G);
if(F){if(!F[2]&&H[2]=="px"){return H[1]
}if(F[2]=="px"&&!H[2]){return H[1]+"px"
}}return G
}var B={elements:{$:function(J){var I=J.attributes,K=I&&I["data-cke-realelement"],H=K&&new CKEDITOR.htmlParser.fragment.fromHtml(decodeURIComponent(K)),G=H&&H.children[0];
if(G&&J.attributes["data-cke-resizable"]){var N=new E(J).rules,L=G.attributes,F=N.width,M=N.height;
F&&(L.width=A(L.width,F));
M&&(L.height=A(L.height,M))
}return G
}}};
CKEDITOR.plugins.add("fakeobjects",{requires:["htmlwriter"],afterInit:function(G){var F=G.dataProcessor,H=F&&F.htmlFilter;
if(H){H.addRules(B)
}}});
CKEDITOR.editor.prototype.createFakeElement=function(I,L,O,G){var H=this.lang.fakeobjects,M=H[O]||H.unknown;
var J={"class":L,src:CKEDITOR.getUrl("images/spacer.gif"),"data-cke-realelement":encodeURIComponent(I.getOuterHtml()),"data-cke-real-node-type":I.type,alt:M,title:M,align:I.getAttribute("align")||""};
if(O){J["data-cke-real-element-type"]=O
}if(G){J["data-cke-resizable"]=G;
var K=new E();
var F=I.getAttribute("width"),N=I.getAttribute("height");
F&&(K.rules.width=C(F));
N&&(K.rules.height=C(N));
K.populate(J)
}return this.document.createElement("img",{attributes:J})
};
CKEDITOR.editor.prototype.createFakeParserElement=function(I,O,R,G){var H=this.lang.fakeobjects,P=H[R]||H.unknown,L;
var J=new CKEDITOR.htmlParser.basicWriter();
I.writeHtml(J);
L=J.getHtml();
var K={"class":O,src:CKEDITOR.getUrl("images/spacer.gif"),"data-cke-realelement":encodeURIComponent(L),"data-cke-real-node-type":I.type,alt:P,title:P,align:I.attributes.align||""};
if(R){K["data-cke-real-element-type"]=R
}if(G){K["data-cke-resizable"]=G;
var M=I.attributes,N=new E();
var F=M.width,Q=M.height;
F!=undefined&&(N.rules.width=C(F));
Q!=undefined&&(N.rules.height=C(Q));
N.populate(K)
}return new CKEDITOR.htmlParser.element("img",K)
};
CKEDITOR.editor.prototype.restoreRealElement=function(G){if(G.data("cke-real-node-type")!=CKEDITOR.NODE_ELEMENT){return null
}var H=CKEDITOR.dom.element.createFromHtml(decodeURIComponent(G.data("cke-realelement")),this.document);
if(G.data("cke-resizable")){var I=G.getStyle("width"),F=G.getStyle("height");
I&&H.setAttribute("width",A(H.getAttribute("width"),I));
F&&H.setAttribute("height",A(H.getAttribute("height"),F))
}return H
}
})();