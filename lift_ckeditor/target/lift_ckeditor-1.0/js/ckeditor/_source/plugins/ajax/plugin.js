(function(){CKEDITOR.plugins.add("ajax",{requires:["xml"]});
CKEDITOR.ajax=(function(){var A=function(){if(!CKEDITOR.env.ie||location.protocol!="file:"){try{return new XMLHttpRequest()
}catch(F){}}try{return new ActiveXObject("Msxml2.XMLHTTP")
}catch(F){}try{return new ActiveXObject("Microsoft.XMLHTTP")
}catch(F){}return null
};
var B=function(F){return(F.readyState==4&&((F.status>=200&&F.status<300)||F.status==304||F.status===0||F.status==1223))
};
var D=function(F){if(B(F)){return F.responseText
}return null
};
var E=function(G){if(B(G)){var F=G.responseXML;
return new CKEDITOR.xml(F&&F.firstChild?F:G.responseText)
}return null
};
var C=function(G,J,F){var H=!!J;
var I=A();
if(!I){return null
}I.open("GET",G,H);
if(H){I.onreadystatechange=function(){if(I.readyState==4){J(F(I));
I=null
}}
}I.send(null);
return H?"":F(I)
};
return{load:function(F,G){return C(F,G,D)
},loadXml:function(F,G){return C(F,G,E)
}}
})()
})();