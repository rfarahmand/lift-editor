(function(){CKEDITOR.plugins.add("xml",{});
CKEDITOR.xml=function(B){var A=null;
if(typeof B=="object"){A=B
}else{var D=(B||"").replace(/&nbsp;/g,"\xa0");
if(window.DOMParser){A=new DOMParser().parseFromString(D,"text/xml")
}else{if(window.ActiveXObject){try{A=new ActiveXObject("MSXML2.DOMDocument")
}catch(C){try{A=new ActiveXObject("Microsoft.XmlDom")
}catch(C){}}if(A){A.async=false;
A.resolveExternals=false;
A.validateOnParse=false;
A.loadXML(D)
}}}}this.baseXml=A
};
CKEDITOR.xml.prototype={selectSingleNode:function(B,A){var D=this.baseXml;
if(A||(A=D)){if(CKEDITOR.env.ie||A.selectSingleNode){return A.selectSingleNode(B)
}else{if(D.evaluate){var C=D.evaluate(B,A,null,9,null);
return C&&C.singleNodeValue||null
}}}return null
},selectNodes:function(B,A){var F=this.baseXml,E=[];
if(A||(A=F)){if(CKEDITOR.env.ie||A.selectNodes){return A.selectNodes(B)
}else{if(F.evaluate){var D=F.evaluate(B,A,null,5,null);
if(D){var C;
while(C=D.iterateNext()){E.push(C)
}}}}}return E
},getInnerXml:function(B,A){var D=this.selectSingleNode(B,A),C=[];
if(D){D=D.firstChild;
while(D){if(D.xml){C.push(D.xml)
}else{if(window.XMLSerializer){C.push(new XMLSerializer().serializeToString(D))
}}D=D.nextSibling
}}return C.length?C.join(""):null
}}
})();