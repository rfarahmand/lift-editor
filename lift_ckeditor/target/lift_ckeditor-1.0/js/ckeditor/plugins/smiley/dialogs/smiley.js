;
CKEDITOR.dialog.add("smiley",function(N){var M=N.config,L=N.lang.smiley,K=M.smiley_images,J=M.smiley_columns||8,I,H,G=function(T){var S=T.data.getTarget(),R=S.getName();
if(R=="a"){S=S.getChild(0)
}else{if(R!="img"){return 
}}var Q=S.getAttribute("cke_src"),P=S.getAttribute("title"),O=N.document.createElement("img",{attributes:{src:Q,"data-cke-saved-src":Q,title:P,alt:P,width:S.$.width,height:S.$.height}});
N.insertElement(O);
H.hide();
T.data.preventDefault()
},F=CKEDITOR.tools.addFunction(function(T,S){T=new CKEDITOR.dom.event(T);
S=new CKEDITOR.dom.element(S);
var R,Q,P=T.getKeystroke(),O=N.lang.dir=="rtl";
switch(P){case 38:if(R=S.getParent().getParent().getPrevious()){Q=R.getChild([S.getParent().getIndex(),0]);
Q.focus()
}T.preventDefault();
break;
case 40:if(R=S.getParent().getParent().getNext()){Q=R.getChild([S.getParent().getIndex(),0]);
if(Q){Q.focus()
}}T.preventDefault();
break;
case 32:G({data:T});
T.preventDefault();
break;
case O?37:39:case 9:if(R=S.getParent().getNext()){Q=R.getChild(0);
Q.focus();
T.preventDefault(true)
}else{if(R=S.getParent().getParent().getNext()){Q=R.getChild([0,0]);
if(Q){Q.focus()
}T.preventDefault(true)
}}break;
case O?39:37:case CKEDITOR.SHIFT+9:if(R=S.getParent().getPrevious()){Q=R.getChild(0);
Q.focus();
T.preventDefault(true)
}else{if(R=S.getParent().getParent().getPrevious()){Q=R.getLast().getChild(0);
Q.focus();
T.preventDefault(true)
}}break;
default:return 
}}),E=CKEDITOR.tools.getNextId()+"_smiley_emtions_label",D=['<div><span id="'+E+'" class="cke_voice_label">'+L.options+"</span>",'<table role="listbox" aria-labelledby="'+E+'" style="width:100%;height:100%" cellspacing="2" cellpadding="2"',CKEDITOR.env.ie&&CKEDITOR.env.quirks?' style="position:absolute;"':"","><tbody>"],C=K.length;
for(I=0;
I<C;
I++){if(I%J===0){D.push("<tr>")
}var B="cke_smile_label_"+I+"_"+CKEDITOR.tools.getNextNumber();
D.push('<td class="cke_dark_background cke_centered" style="vertical-align: middle;"><a href="javascript:void(0)" role="option"',' aria-posinset="'+(I+1)+'"',' aria-setsize="'+C+'"',' aria-labelledby="'+B+'"',' class="cke_smile cke_hand" tabindex="-1" onkeydown="CKEDITOR.tools.callFunction( ',F,', event, this );">','<img class="cke_hand" title="',M.smiley_descriptions[I],'" cke_src="',CKEDITOR.tools.htmlEncode(M.smiley_path+K[I]),'" alt="',M.smiley_descriptions[I],'"',' src="',CKEDITOR.tools.htmlEncode(M.smiley_path+K[I]),'"',CKEDITOR.env.ie?" onload=\"this.setAttribute('width', 2); this.removeAttribute('width');\" ":"",'><span id="'+B+'" class="cke_voice_label">'+M.smiley_descriptions[I]+"</span></a>","</td>");
if(I%J==J-1){D.push("</tr>")
}}if(I<J-1){for(;
I<J-1;
I++){D.push("<td></td>")
}D.push("</tr>")
}D.push("</tbody></table></div>");
var A={type:"html",id:"smileySelector",html:D.join(""),onLoad:function(O){H=O.sender
},focus:function(){var O=this;
setTimeout(function(){var P=O.getElement().getElementsByTag("a").getItem(0);
P.focus()
},0)
},onClick:G,style:"width: 100%; border-collapse: separate;"};
return{title:N.lang.smiley.title,minWidth:270,minHeight:120,contents:[{id:"tab1",label:"",title:"",expand:true,padding:0,elements:[A]}],buttons:[CKEDITOR.dialog.cancelButton]}
});