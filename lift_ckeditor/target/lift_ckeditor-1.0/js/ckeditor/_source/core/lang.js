(function(){var A={};
CKEDITOR.lang={languages:{af:1,ar:1,bg:1,bn:1,bs:1,ca:1,cs:1,cy:1,da:1,de:1,el:1,"en-au":1,"en-ca":1,"en-gb":1,en:1,eo:1,es:1,et:1,eu:1,fa:1,fi:1,fo:1,"fr-ca":1,fr:1,gl:1,gu:1,he:1,hi:1,hr:1,hu:1,is:1,it:1,ja:1,ka:1,km:1,ko:1,lt:1,lv:1,mn:1,ms:1,nb:1,nl:1,no:1,pl:1,"pt-br":1,pt:1,ro:1,ru:1,sk:1,sl:1,"sr-latn":1,sr:1,sv:1,th:1,tr:1,uk:1,vi:1,"zh-cn":1,zh:1},load:function(B,D,C){if(!B||!CKEDITOR.lang.languages[B]){B=this.detect(D,B)
}if(!this[B]){CKEDITOR.scriptLoader.load(CKEDITOR.getUrl("_source/lang/"+B+".js"),function(){C(B,this[B])
},this)
}else{C(B,this[B])
}},detect:function(G,C){var E=this.languages;
C=C||navigator.userLanguage||navigator.language||G;
var D=C.toLowerCase().match(/([a-z]+)(?:-([a-z]+))?/),F=D[1],B=D[2];
if(E[F+"-"+B]){F=F+"-"+B
}else{if(!E[F]){F=null
}}CKEDITOR.lang.detect=F?function(){return F
}:function(H){return H
};
return F||G
}}
})();