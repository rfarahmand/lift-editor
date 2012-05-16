;
CKEDITOR.dialog.add("specialchar",function(F){var G,C=F.lang.specialChar;
var D=function(J){var M,L;
if(J.data){M=J.data.getTarget()
}else{M=new CKEDITOR.dom.element(J)
}if(M.getName()=="a"&&(L=M.getChild(0).getHtml())){M.removeClass("cke_light_background");
G.hide();
var K=F.document.createElement("span");
K.setHtml(L);
F.insertText(K.getText())
}};
var H=CKEDITOR.tools.addFunction(D);
var B;
var I=function(K,M){var L;
M=M||K.data.getTarget();
if(M.getName()=="span"){M=M.getParent()
}if(M.getName()=="a"&&(L=M.getChild(0).getHtml())){if(B){A(null,B)
}var J=G.getContentElement("info","htmlPreview").getElement();
G.getContentElement("info","charPreview").getElement().setHtml(L);
J.setHtml(CKEDITOR.tools.htmlEncode(L));
M.getParent().addClass("cke_light_background");
B=M
}};
var A=function(J,K){K=K||J.data.getTarget();
if(K.getName()=="span"){K=K.getParent()
}if(K.getName()=="a"){G.getContentElement("info","charPreview").getElement().setHtml("&nbsp;");
G.getContentElement("info","htmlPreview").getElement().setHtml("&nbsp;");
K.getParent().removeClass("cke_light_background");
B=undefined
}};
var E=CKEDITOR.tools.addFunction(function(K){K=new CKEDITOR.dom.event(K);
var J=K.getTarget();
var M,L;
var O=K.getKeystroke(),N=F.lang.dir=="rtl";
switch(O){case 38:if((M=J.getParent().getParent().getPrevious())){L=M.getChild([J.getParent().getIndex(),0]);
L.focus();
A(null,J);
I(null,L)
}K.preventDefault();
break;
case 40:if((M=J.getParent().getParent().getNext())){L=M.getChild([J.getParent().getIndex(),0]);
if(L&&L.type==1){L.focus();
A(null,J);
I(null,L)
}}K.preventDefault();
break;
case 32:D({data:K});
K.preventDefault();
break;
case N?37:39:case 9:if((M=J.getParent().getNext())){L=M.getChild(0);
if(L.type==1){L.focus();
A(null,J);
I(null,L);
K.preventDefault(true)
}else{A(null,J)
}}else{if((M=J.getParent().getParent().getNext())){L=M.getChild([0,0]);
if(L&&L.type==1){L.focus();
A(null,J);
I(null,L);
K.preventDefault(true)
}else{A(null,J)
}}}break;
case N?39:37:case CKEDITOR.SHIFT+9:if((M=J.getParent().getPrevious())){L=M.getChild(0);
L.focus();
A(null,J);
I(null,L);
K.preventDefault(true)
}else{if((M=J.getParent().getParent().getPrevious())){L=M.getLast().getChild(0);
L.focus();
A(null,J);
I(null,L);
K.preventDefault(true)
}else{A(null,J)
}}break;
default:return 
}});
return{title:C.title,minWidth:430,minHeight:280,buttons:[CKEDITOR.dialog.cancelButton],charColumns:17,onLoad:function(){var L=this.definition.charColumns,R=F.config.extraSpecialChars,S=F.config.specialChars;
var J=CKEDITOR.tools.getNextId()+"_specialchar_table_label";
var P=['<table role="listbox" aria-labelledby="'+J+'" style="width: 320px; height: 100%; border-collapse: separate;" align="center" cellspacing="2" cellpadding="2" border="0">'];
var O=0,U=S.length,Q,M;
while(O<U){P.push("<tr>");
for(var N=0;
N<L;
N++,O++){if((Q=S[O])){M="";
if(Q instanceof Array){M=Q[1];
Q=Q[0]
}else{var T=Q.replace("&","").replace(";","").replace("#","");
M=C[T]||Q
}var K="cke_specialchar_label_"+O+"_"+CKEDITOR.tools.getNextNumber();
P.push('<td class="cke_dark_background" style="cursor: default" role="presentation"><a href="javascript: void(0);" role="option" aria-posinset="'+(O+1)+'"',' aria-setsize="'+U+'"',' aria-labelledby="'+K+'"',' style="cursor: inherit; display: block; height: 1.25em; margin-top: 0.25em; text-align: center;" title="',CKEDITOR.tools.htmlEncode(M),'" onkeydown="CKEDITOR.tools.callFunction( '+E+', event, this )" onclick="CKEDITOR.tools.callFunction('+H+', this); return false;" tabindex="-1"><span style="margin: 0 auto;cursor: inherit">'+Q+'</span><span class="cke_voice_label" id="'+K+'">'+M+"</span></a>")
}else{P.push('<td class="cke_dark_background">&nbsp;')
}P.push("</td>")
}P.push("</tr>")
}P.push("</tbody></table>",'<span id="'+J+'" class="cke_voice_label">'+C.options+"</span>");
this.getContentElement("info","charContainer").getElement().setHtml(P.join(""))
},contents:[{id:"info",label:F.lang.common.generalTab,title:F.lang.common.generalTab,padding:0,align:"top",elements:[{type:"hbox",align:"top",widths:["320px","90px"],children:[{type:"html",id:"charContainer",html:"",onMouseover:I,onMouseout:A,focus:function(){var J=this.getElement().getElementsByTag("a").getItem(0);
setTimeout(function(){J.focus();
I(null,J)
},0)
},onShow:function(){var J=this.getElement().getChild([0,0,0,0,0]);
setTimeout(function(){J.focus();
I(null,J)
},0)
},onLoad:function(J){G=J.sender
}},{type:"hbox",align:"top",widths:["100%"],children:[{type:"vbox",align:"top",children:[{type:"html",html:"<div></div>"},{type:"html",id:"charPreview",className:"cke_dark_background",style:"border:1px solid #eeeeee;font-size:28px;height:40px;width:70px;padding-top:9px;font-family:'Microsoft Sans Serif',Arial,Helvetica,Verdana;text-align:center;",html:"<div>&nbsp;</div>"},{type:"html",id:"htmlPreview",className:"cke_dark_background",style:"border:1px solid #eeeeee;font-size:14px;height:20px;width:70px;padding-top:2px;font-family:'Microsoft Sans Serif',Arial,Helvetica,Verdana;text-align:center;",html:"<div>&nbsp;</div>"}]}]}]}]}]}
});