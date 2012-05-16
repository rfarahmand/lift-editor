(function(){var d=/^[\t\r\n ]*(?:&nbsp;|\xa0)$/;
var e="{cke_protected}";
function H(i){var j=i.children.length,h=i.children[j-1];
while(h&&h.type==CKEDITOR.NODE_TEXT&&!CKEDITOR.tools.trim(h.value)){h=i.children[--j]
}return h
}function P(k,h){var i=k.children,j=H(k);
if(j){if((h||!CKEDITOR.env.ie)&&j.type==CKEDITOR.NODE_ELEMENT&&j.name=="br"){i.pop()
}if(j.type==CKEDITOR.NODE_TEXT&&d.test(j.value)){i.pop()
}}}function c(k,h,i){if(!h&&(!i||typeof i=="function"&&(i(k)===false))){return false
}if(h&&CKEDITOR.env.ie&&(document.documentMode>7||k.name in CKEDITOR.dtd.tr||k.name in CKEDITOR.dtd.$listItem)){return false
}var j=H(k);
return !j||j&&(j.type==CKEDITOR.NODE_ELEMENT&&j.name=="br"||k.name=="form"&&j.name=="input")
}function L(i,h){return function(j){P(j,!i);
if(c(j,!i,h)){if(i||CKEDITOR.env.ie){j.add(new CKEDITOR.htmlParser.text("\xa0"))
}else{j.add(new CKEDITOR.htmlParser.element("br",{}))
}}}
}var T=CKEDITOR.dtd;
var f=["caption","colgroup","col","thead","tfoot","tbody"];
var D=CKEDITOR.tools.extend({},T.$block,T.$listItem,T.$tableContent);
for(var Z in D){if(!("br" in T[Z])){delete D[Z]
}}delete D.pre;
var V={elements:{},attributeNames:[[(/^on/),"data-cke-pa-on"]]};
var F={elements:{}};
for(Z in D){F.elements[Z]=L()
}var C={elementNames:[[(/^cke:/),""],[(/^\?xml:namespace$/),""]],attributeNames:[[(/^data-cke-(saved|pa)-/),""],[(/^data-cke-.*/),""],["hidefocus",""]],elements:{$:function(k){var m=k.attributes;
if(m){if(m["data-cke-temp"]){return false
}var l=["name","href","src"],j;
for(var h=0;
h<l.length;
h++){j="data-cke-saved-"+l[h];
j in m&&(delete m[l[h]])
}}return k
},table:function(i){var h=i.children;
h.sort(function(k,j){return k.type==CKEDITOR.NODE_ELEMENT&&j.type==k.type?CKEDITOR.tools.indexOf(f,k.name)>CKEDITOR.tools.indexOf(f,j.name)?1:-1:0
})
},embed:function(i){var k=i.parent;
if(k&&k.name=="object"){var j=k.attributes.width,h=k.attributes.height;
j&&(i.attributes.width=j);
h&&(i.attributes.height=h)
}},param:function(h){h.children=[];
h.isEmpty=true;
return h
},a:function(h){if(!(h.children.length||h.attributes.name||h.attributes["data-cke-saved-name"])){return false
}},span:function(h){if(h.attributes["class"]=="Apple-style-span"){delete h.name
}},pre:function(h){CKEDITOR.env.ie&&P(h)
},html:function(h){delete h.attributes.contenteditable;
delete h.attributes["class"]
},body:function(h){delete h.attributes.spellcheck;
delete h.attributes.contenteditable
},style:function(h){var i=h.children[0];
i&&i.value&&(i.value=CKEDITOR.tools.trim(i.value));
if(!h.attributes.type){h.attributes.type="text/css"
}},title:function(i){var h=i.children[0];
h&&(h.value=i.attributes["data-cke-title"]||"")
}},attributes:{"class":function(i,h){return CKEDITOR.tools.ltrim(i.replace(/(?:^|\s+)cke_[^\s]*/g,""))||false
}}};
if(CKEDITOR.env.ie){C.attributes.style=function(i,h){return i.replace(/(^|;)([^\:]+)/g,function(j){return j.toLowerCase()
})
}
}function M(i){var h=i.attributes;
if(h.contenteditable!="false"){h["data-cke-editable"]=h.contenteditable?"true":1
}h.contenteditable="false"
}function A(i){var h=i.attributes;
switch(h["data-cke-editable"]){case"true":h.contenteditable="true";
break;
case"1":delete h.contenteditable;
break
}}for(Z in {input:1,textarea:1}){V.elements[Z]=M;
C.elements[Z]=A
}var S=/<(a|area|img|input)\b([^>]*)>/gi,Q=/\b(on\w+|href|src|name)\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|(?:[^ "'>]+))/gi;
var K=/(?:<style(?=[ >])[^>]*>[\s\S]*<\/style>)|(?:<(:?link|meta|base)[^>]*>)/gi,g=/<cke:encoded>([^<]*)<\/cke:encoded>/gi;
var J=/(<\/?)((?:object|embed|param|html|body|head|title)[^>]*>)/gi,N=/(<\/?)cke:((?:html|body|head|title)[^>]*>)/gi;
var G=/<cke:(param|embed)([^>]*?)\/?>(?!\s*<\/cke:\1)/gi;
function R(h){return h.replace(S,function(k,i,j){return"<"+i+j.replace(Q,function(m,l){if(!(/^on/).test(l)&&j.indexOf("data-cke-saved-"+l)==-1){return" data-cke-saved-"+m+" data-cke-"+CKEDITOR.rnd+"-"+m
}return m
})+">"
})
}function E(h){return h.replace(K,function(i){return"<cke:encoded>"+encodeURIComponent(i)+"</cke:encoded>"
})
}function B(h){return h.replace(g,function(i,j){return decodeURIComponent(j)
})
}function U(h){return h.replace(J,"$1cke:$2")
}function X(h){return h.replace(N,"$1$2")
}function b(h){return h.replace(G,"<cke:$1$2></cke:$1>")
}function Y(h){return h.replace(/(<pre\b[^>]*>)(\r\n|\n)/g,"$1$2$2")
}function W(h){return h.replace(/<!--(?!{cke_protected})[\s\S]+?-->/g,function(i){return"<!--"+e+"{C}"+encodeURIComponent(i).replace(/--/g,"%2D%2D")+"-->"
})
}function O(h){return h.replace(/<!--\{cke_protected\}\{C\}([\s\S]+?)-->/g,function(i,j){return decodeURIComponent(j)
})
}function I(i,j){var h=j._.dataStore;
return i.replace(/<!--\{cke_protected\}([\s\S]+?)-->/g,function(k,l){return decodeURIComponent(l)
}).replace(/\{cke_protected_(\d+)\}/g,function(k,l){return h&&h[l]||""
})
}function a(o,n){var j=[],p=n.config.protectedSource,k=n._.dataStore||(n._.dataStore={id:1}),m=/<\!--\{cke_temp(comment)?\}(\d*?)-->/g;
var h=[(/<script[\s\S]*?<\/script>/gi),/<noscript[\s\S]*?<\/noscript>/gi].concat(p);
o=o.replace((/<!--[\s\S]*?-->/g),function(i){return"<!--{cke_tempcomment}"+(j.push(i)-1)+"-->"
});
for(var l=0;
l<h.length;
l++){o=o.replace(h[l],function(i){i=i.replace(m,function(r,q,s){return j[s]
});
return(/cke_temp(comment)?/).test(i)?i:"<!--{cke_temp}"+(j.push(i)-1)+"-->"
})
}o=o.replace(m,function(q,i,r){return"<!--"+e+(i?"{C}":"")+encodeURIComponent(j[r]).replace(/--/g,"%2D%2D")+"-->"
});
return o.replace(/(['"]).*?\1/g,function(i){return i.replace(/<!--\{cke_protected\}([\s\S]+?)-->/g,function(q,r){k[k.id]=decodeURIComponent(r);
return"{cke_protected_"+(k.id++)+"}"
})
})
}CKEDITOR.plugins.add("htmldataprocessor",{requires:["htmlwriter"],init:function(j){var h=j.dataProcessor=new CKEDITOR.htmlDataProcessor(j);
h.writer.forceSimpleAmpersand=j.config.forceSimpleAmpersand;
h.dataFilter.addRules(V);
h.dataFilter.addRules(F);
h.htmlFilter.addRules(C);
var i={elements:{}};
for(Z in D){i.elements[Z]=L(true,j.config.fillEmptyBlocks)
}h.htmlFilter.addRules(i)
},onLoad:function(){!("fillEmptyBlocks" in CKEDITOR.config)&&(CKEDITOR.config.fillEmptyBlocks=1)
}});
CKEDITOR.htmlDataProcessor=function(h){this.editor=h;
this.writer=new CKEDITOR.htmlWriter();
this.dataFilter=new CKEDITOR.htmlParser.filter();
this.htmlFilter=new CKEDITOR.htmlParser.filter()
};
CKEDITOR.htmlDataProcessor.prototype={toHtml:function(k,h){k=a(k,this.editor);
k=R(k);
k=E(k);
k=U(k);
k=b(k);
k=Y(k);
var l=new CKEDITOR.dom.element("div");
l.setHtml("a"+k);
k=l.getHtml().substr(1);
k=k.replace(new RegExp(" data-cke-"+CKEDITOR.rnd+"-","ig")," ");
k=X(k);
k=B(k);
k=O(k);
var i=CKEDITOR.htmlParser.fragment.fromHtml(k,h),j=new CKEDITOR.htmlParser.basicWriter();
i.writeHtml(j,this.dataFilter);
k=j.getHtml(true);
k=W(k);
return k
},toDataFormat:function(j,h){var l=this.writer,i=CKEDITOR.htmlParser.fragment.fromHtml(j,h);
l.reset();
i.writeHtml(l,this.htmlFilter);
var k=l.getHtml(true);
k=O(k);
k=I(k,this.editor);
return k
}}
})();