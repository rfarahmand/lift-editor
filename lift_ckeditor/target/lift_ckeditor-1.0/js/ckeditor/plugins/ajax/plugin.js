(function(){CKEDITOR.plugins.add("ajax",{requires:["xml"]});
CKEDITOR.ajax=(function(){var B=function(){if(!CKEDITOR.env.ie||location.protocol!="file:"){try{return new XMLHttpRequest()
}catch(H){}}try{return new ActiveXObject("Msxml2.XMLHTTP")
}catch(G){}try{return new ActiveXObject("Microsoft.XMLHTTP")
}catch(F){}return null
},A=function(F){return F.readyState==4&&(F.status>=200&&F.status<300||F.status==304||F.status===0||F.status==1223)
},E=function(F){if(A(F)){return F.responseText
}return null
},D=function(G){if(A(G)){var F=G.responseXML;
return new CKEDITOR.xml(F&&F.firstChild?F:G.responseText)
}return null
},C=function(J,I,H){var G=!!I,F=B();
if(!F){return null
}F.open("GET",J,G);
if(G){F.onreadystatechange=function(){if(F.readyState==4){I(H(F));
F=null
}}
}F.send(null);
return G?"":H(F)
};
return{load:function(G,F){return C(G,F,E)
},loadXml:function(G,F){return C(G,F,D)
}}
})()
})();