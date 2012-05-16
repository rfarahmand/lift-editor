;
CKEDITOR.dialog.add("specialchar",function(I){var H,G=I.lang.specialChar,F=function(M){var L,K;
if(M.data){L=M.data.getTarget()
}else{L=new CKEDITOR.dom.element(M)
}if(L.getName()=="a"&&(K=L.getChild(0).getHtml())){L.removeClass("cke_light_background");
H.hide();
var J=I.document.createElement("span");
J.setHtml(K);
I.insertText(J.getText())
}},E=CKEDITOR.tools.addFunction(F),D,C=function(M,L){var K;
L=L||M.data.getTarget();
if(L.getName()=="span"){L=L.getParent()
}if(L.getName()=="a"&&(K=L.getChild(0).getHtml())){if(D){B(null,D)
}var J=H.getContentElement("info","htmlPreview").getElement();
H.getContentElement("info","charPreview").getElement().setHtml(K);
J.setHtml(CKEDITOR.tools.htmlEncode(K));
L.getParent().addClass("cke_light_background");
D=L
}},B=function(K,J){J=J||K.data.getTarget();
if(J.getName()=="span"){J=J.getParent()
}if(J.getName()=="a"){H.getContentElement("info","charPreview").getElement().setHtml("&nbsp;");
H.getContentElement("info","htmlPreview").getElement().setHtml("&nbsp;");
J.getParent().removeClass("cke_light_background");
D=undefined
}},A=CKEDITOR.tools.addFunction(function(M){M=new CKEDITOR.dom.event(M);
var L=M.getTarget(),K,J,O=M.getKeystroke(),N=I.lang.dir=="rtl";
switch(O){case 38:if(K=L.getParent().getParent().getPrevious()){J=K.getChild([L.getParent().getIndex(),0]);
J.focus();
B(null,L);
C(null,J)
}M.preventDefault();
break;
case 40:if(K=L.getParent().getParent().getNext()){J=K.getChild([L.getParent().getIndex(),0]);
if(J&&J.type==1){J.focus();
B(null,L);
C(null,J)
}}M.preventDefault();
break;
case 32:F({data:M});
M.preventDefault();
break;
case N?37:39:case 9:if(K=L.getParent().getNext()){J=K.getChild(0);
if(J.type==1){J.focus();
B(null,L);
C(null,J);
M.preventDefault(true)
}else{B(null,L)
}}else{if(K=L.getParent().getParent().getNext()){J=K.getChild([0,0]);
if(J&&J.type==1){J.focus();
B(null,L);
C(null,J);
M.preventDefault(true)
}else{B(null,L)
}}}break;
case N?39:37:case CKEDITOR.SHIFT+9:if(K=L.getParent().getPrevious()){J=K.getChild(0);
J.focus();
B(null,L);
C(null,J);
M.preventDefault(true)
}else{if(K=L.getParent().getParent().getPrevious()){J=K.getLast().getChild(0);
J.focus();
B(null,L);
C(null,J);
M.preventDefault(true)
}else{B(null,L)
}}break;
default:return 
}});
return{title:G.title,minWidth:430,minHeight:280,buttons:[CKEDITOR.dialog.cancelButton],charColumns:17,onLoad:function(){var R=this.definition.charColumns,Q=I.config.extraSpecialChars,P=I.config.specialChars,O=CKEDITOR.tools.getNextId()+"_specialchar_table_label",N=['<table role="listbox" aria-labelledby="'+O+'" style="width: 320px; height: 100%; border-collapse: separate;" align="center" cellspacing="2" cellpadding="2" border="0">'],M=0,L=P.length,K,J;
while(M<L){N.push("<tr>");
for(var U=0;
U<R;
U++,M++){if(K=P[M]){J="";
if(K instanceof Array){J=K[1];
K=K[0]
}else{var T=K.replace("&","").replace(";","").replace("#","");
J=G[T]||K
}var S="cke_specialchar_label_"+M+"_"+CKEDITOR.tools.getNextNumber();
N.push('<td class="cke_dark_background" style="cursor: default" role="presentation"><a href="javascript: void(0);" role="option" aria-posinset="'+(M+1)+'"',' aria-setsize="'+L+'"',' aria-labelledby="'+S+'"',' style="cursor: inherit; display: block; height: 1.25em; margin-top: 0.25em; text-align: center;" title="',CKEDITOR.tools.htmlEncode(J),'" onkeydown="CKEDITOR.tools.callFunction( '+A+', event, this )" onclick="CKEDITOR.tools.callFunction('+E+', this); return false;" tabindex="-1"><span style="margin: 0 auto;cursor: inherit">'+K+'</span><span class="cke_voice_label" id="'+S+'">'+J+"</span></a>")
}else{N.push('<td class="cke_dark_background">&nbsp;')
}N.push("</td>")
}N.push("</tr>")
}N.push("</tbody></table>",'<span id="'+O+'" class="cke_voice_label">'+G.options+"</span>");
this.getContentElement("info","charContainer").getElement().setHtml(N.join(""))
},contents:[{id:"info",label:I.lang.common.generalTab,title:I.lang.common.generalTab,padding:0,align:"top",elements:[{type:"hbox",align:"top",widths:["320px","90px"],children:[{type:"html",id:"charContainer",html:"",onMouseover:C,onMouseout:B,focus:function(){var J=this.getElement().getElementsByTag("a").getItem(0);
setTimeout(function(){J.focus();
C(null,J)
},0)
},onShow:function(){var J=this.getElement().getChild([0,0,0,0,0]);
setTimeout(function(){J.focus();
C(null,J)
},0)
},onLoad:function(J){H=J.sender
}},{type:"hbox",align:"top",widths:["100%"],children:[{type:"vbox",align:"top",children:[{type:"html",html:"<div></div>"},{type:"html",id:"charPreview",className:"cke_dark_background",style:"border:1px solid #eeeeee;font-size:28px;height:40px;width:70px;padding-top:9px;font-family:'Microsoft Sans Serif',Arial,Helvetica,Verdana;text-align:center;",html:"<div>&nbsp;</div>"},{type:"html",id:"htmlPreview",className:"cke_dark_background",style:"border:1px solid #eeeeee;font-size:14px;height:20px;width:70px;padding-top:2px;font-family:'Microsoft Sans Serif',Arial,Helvetica,Verdana;text-align:center;",html:"<div>&nbsp;</div>"}]}]}]}]}]}
});