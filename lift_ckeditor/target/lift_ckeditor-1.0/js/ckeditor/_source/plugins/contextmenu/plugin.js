;
CKEDITOR.plugins.add("contextmenu",{requires:["menu"],onLoad:function(){CKEDITOR.plugins.contextMenu=CKEDITOR.tools.createClass({base:CKEDITOR.menu,$:function(A){this.base.call(this,A,{panel:{className:A.skinClass+" cke_contextmenu",attributes:{"aria-label":A.lang.contextmenu.options}}})
},proto:{addTarget:function(D,E){if(CKEDITOR.env.opera&&!("oncontextmenu" in document.body)){var A;
D.on("mousedown",function(G){G=G.data;
if(G.$.button!=2){if(G.getKeystroke()==CKEDITOR.CTRL+1){D.fire("contextmenu",G)
}return 
}if(E&&(CKEDITOR.env.mac?G.$.metaKey:G.$.ctrlKey)){return 
}var I=G.getTarget();
if(!A){var H=I.getDocument();
A=H.createElement("input");
A.$.type="button";
H.getBody().append(A)
}A.setAttribute("style","position:absolute;top:"+(G.$.clientY-2)+"px;left:"+(G.$.clientX-2)+"px;width:5px;height:5px;opacity:0.01")
});
D.on("mouseup",function(G){if(A){A.remove();
A=undefined;
D.fire("contextmenu",G.data)
}})
}D.on("contextmenu",function(J){var H=J.data;
if(E&&(CKEDITOR.env.webkit?B:(CKEDITOR.env.mac?H.$.metaKey:H.$.ctrlKey))){return 
}H.preventDefault();
var I=H.getTarget().getDocument().getDocumentElement(),G=H.$.clientX,K=H.$.clientY;
CKEDITOR.tools.setTimeout(function(){this.open(I,null,G,K)
},CKEDITOR.env.ie?200:0,this)
},this);
if(CKEDITOR.env.opera){D.on("keypress",function(G){var H=G.data;
if(H.$.keyCode===0){H.preventDefault()
}})
}if(CKEDITOR.env.webkit){var B,C=function(G){B=CKEDITOR.env.mac?G.data.$.metaKey:G.data.$.ctrlKey
},F=function(){B=0
};
D.on("keydown",C);
D.on("keyup",F);
D.on("contextmenu",F)
}},open:function(C,B,A,D){this.editor.focus();
C=C||CKEDITOR.document.getDocumentElement();
this.show(C,B,A,D)
}}})
},beforeInit:function(A){A.contextMenu=new CKEDITOR.plugins.contextMenu(A);
A.addCommand("contextMenu",{exec:function(){A.contextMenu.open(A.document.getBody())
}})
}});