(function(){var C={address:1,blockquote:1,dl:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,p:1,pre:1,li:1,dt:1,dd:1,legend:1,caption:1};
var B={body:1,div:1,table:1,tbody:1,tr:1,td:1,th:1,form:1,fieldset:1};
var A=function(E){var G=E.getChildren();
for(var D=0,F=G.count();
D<F;
D++){var H=G.getItem(D);
if(H.type==CKEDITOR.NODE_ELEMENT&&CKEDITOR.dtd.$block[H.getName()]){return true
}}return false
};
CKEDITOR.dom.elementPath=function(F){var I=null;
var E=null;
var G=[];
var H=F;
while(H){if(H.type==CKEDITOR.NODE_ELEMENT){if(!this.lastElement){this.lastElement=H
}var D=H.getName();
if(!E){if(!I&&C[D]){I=H
}if(B[D]){if(!I&&D=="div"&&!A(H)){I=H
}else{E=H
}}}G.push(H);
if(D=="body"){break
}}H=H.getParent()
}this.block=I;
this.blockLimit=E;
this.elements=G
}
})();
CKEDITOR.dom.elementPath.prototype={compare:function(D){var C=this.elements;
var A=D&&D.elements;
if(!A||C.length!=A.length){return false
}for(var B=0;
B<C.length;
B++){if(!C[B].equals(A[B])){return false
}}return true
},contains:function(A){var C=this.elements;
for(var B=0;
B<C.length;
B++){if(C[B].getName() in A){return C[B]
}}return null
}};