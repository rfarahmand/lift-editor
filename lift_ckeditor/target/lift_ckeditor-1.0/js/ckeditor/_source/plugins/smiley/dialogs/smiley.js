;
CKEDITOR.dialog.add("smiley",function(I){var D=I.config,B=I.lang.smiley,K=D.smiley_images,E=D.smiley_columns||8,G;
var J;
var L=function(O){var R=O.data.getTarget(),Q=R.getName();
if(Q=="a"){R=R.getChild(0)
}else{if(Q!="img"){return 
}}var T=R.getAttribute("cke_src"),S=R.getAttribute("title");
var P=I.document.createElement("img",{attributes:{src:T,"data-cke-saved-src":T,title:S,alt:S,width:R.$.width,height:R.$.height}});
I.insertElement(P);
J.hide();
O.data.preventDefault()
};
var F=CKEDITOR.tools.addFunction(function(P,O){P=new CKEDITOR.dom.event(P);
O=new CKEDITOR.dom.element(O);
var R,Q;
var T=P.getKeystroke(),S=I.lang.dir=="rtl";
switch(T){case 38:if((R=O.getParent().getParent().getPrevious())){Q=R.getChild([O.getParent().getIndex(),0]);
Q.focus()
}P.preventDefault();
break;
case 40:if((R=O.getParent().getParent().getNext())){Q=R.getChild([O.getParent().getIndex(),0]);
if(Q){Q.focus()
}}P.preventDefault();
break;
case 32:L({data:P});
P.preventDefault();
break;
case S?37:39:case 9:if((R=O.getParent().getNext())){Q=R.getChild(0);
Q.focus();
P.preventDefault(true)
}else{if((R=O.getParent().getParent().getNext())){Q=R.getChild([0,0]);
if(Q){Q.focus()
}P.preventDefault(true)
}}break;
case S?39:37:case CKEDITOR.SHIFT+9:if((R=O.getParent().getPrevious())){Q=R.getChild(0);
Q.focus();
P.preventDefault(true)
}else{if((R=O.getParent().getParent().getPrevious())){Q=R.getLast().getChild(0);
Q.focus();
P.preventDefault(true)
}}break;
default:return 
}});
var A=CKEDITOR.tools.getNextId()+"_smiley_emtions_label";
var H=['<div><span id="'+A+'" class="cke_voice_label">'+B.options+"</span>",'<table role="listbox" aria-labelledby="'+A+'" style="width:100%;height:100%" cellspacing="2" cellpadding="2"',CKEDITOR.env.ie&&CKEDITOR.env.quirks?' style="position:absolute;"':"","><tbody>"];
var N=K.length;
for(G=0;
G<N;
G++){if(G%E===0){H.push("<tr>")
}var C="cke_smile_label_"+G+"_"+CKEDITOR.tools.getNextNumber();
H.push('<td class="cke_dark_background cke_centered" style="vertical-align: middle;"><a href="javascript:void(0)" role="option"',' aria-posinset="'+(G+1)+'"',' aria-setsize="'+N+'"',' aria-labelledby="'+C+'"',' class="cke_smile cke_hand" tabindex="-1" onkeydown="CKEDITOR.tools.callFunction( ',F,', event, this );">','<img class="cke_hand" title="',D.smiley_descriptions[G],'" cke_src="',CKEDITOR.tools.htmlEncode(D.smiley_path+K[G]),'" alt="',D.smiley_descriptions[G],'"',' src="',CKEDITOR.tools.htmlEncode(D.smiley_path+K[G]),'"',(CKEDITOR.env.ie?" onload=\"this.setAttribute('width', 2); this.removeAttribute('width');\" ":""),'><span id="'+C+'" class="cke_voice_label">'+D.smiley_descriptions[G]+"</span></a>","</td>");
if(G%E==E-1){H.push("</tr>")
}}if(G<E-1){for(;
G<E-1;
G++){H.push("<td></td>")
}H.push("</tr>")
}H.push("</tbody></table></div>");
var M={type:"html",id:"smileySelector",html:H.join(""),onLoad:function(O){J=O.sender
},focus:function(){var O=this;
setTimeout(function(){var P=O.getElement().getElementsByTag("a").getItem(0);
P.focus()
},0)
},onClick:L,style:"width: 100%; border-collapse: separate;"};
return{title:I.lang.smiley.title,minWidth:270,minHeight:120,contents:[{id:"tab1",label:"",title:"",expand:true,padding:0,elements:[M]}],buttons:[CKEDITOR.dialog.cancelButton]}
});