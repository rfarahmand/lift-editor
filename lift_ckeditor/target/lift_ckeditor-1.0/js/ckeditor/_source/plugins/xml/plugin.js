(function(){CKEDITOR.plugins.add("xml",{});
CKEDITOR.xml=function(D){var A=null;
if(typeof D=="object"){A=D
}else{var B=(D||"").replace(/&nbsp;/g,"\xA0");
if(window.DOMParser){A=(new DOMParser()).parseFromString(B,"text/xml")
}else{if(window.ActiveXObject){try{A=new ActiveXObject("MSXML2.DOMDocument")
}catch(C){try{A=new ActiveXObject("Microsoft.XmlDom")
}catch(C){}}if(A){A.async=false;
A.resolveExternals=false;
A.validateOnParse=false;
A.loadXML(B)
}}}}this.baseXml=A
};
CKEDITOR.xml.prototype={selectSingleNode:function(C,B){var D=this.baseXml;
if(B||(B=D)){if(CKEDITOR.env.ie||B.selectSingleNode){return B.selectSingleNode(C)
}else{if(D.evaluate){var A=D.evaluate(C,B,null,9,null);
return(A&&A.singleNodeValue)||null
}}}return null
},selectNodes:function(D,B){var F=this.baseXml,C=[];
if(B||(B=F)){if(CKEDITOR.env.ie||B.selectNodes){return B.selectNodes(D)
}else{if(F.evaluate){var A=F.evaluate(D,B,null,5,null);
if(A){var E;
while((E=A.iterateNext())){C.push(E)
}}}}}return C
},getInnerXml:function(B,A){var D=this.selectSingleNode(B,A),C=[];
if(D){D=D.firstChild;
while(D){if(D.xml){C.push(D.xml)
}else{if(window.XMLSerializer){C.push((new XMLSerializer()).serializeToString(D))
}}D=D.nextSibling
}}return C.length?C.join(""):null
}}
})();