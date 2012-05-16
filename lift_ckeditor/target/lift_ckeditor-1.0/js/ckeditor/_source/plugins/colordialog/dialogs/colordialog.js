;
CKEDITOR.dialog.add("colordialog",function(A){var U=CKEDITOR.dom.element,E=CKEDITOR.document,V=A.lang.colordialog;
var Q;
var F={type:"html",html:"&nbsp;"};
var L;
function N(){E.getById(M).removeStyle("background-color");
Q.getContentElement("picker","selectedColor").setValue("");
L&&L.removeAttribute("aria-selected");
L=null
}function O(W){var Y=W.data.getTarget(),X;
if(Y.getName()=="td"&&(X=Y.getChild(0).getHtml())){L=Y;
L.setAttribute("aria-selected",true);
Q.getContentElement("picker","selectedColor").setValue(X)
}}function C(W){W=W.replace(/^#/,"");
for(var Y=0,X=[];
Y<=2;
Y++){X[Y]=parseInt(W.substr(Y*2,2),16)
}var Z=(0.2126*X[0])+(0.7152*X[1])+(0.0722*X[2]);
return"#"+(Z>=165?"000":"fff")
}var H,J;
function D(Y){!Y.name&&(Y=new CKEDITOR.event(Y));
var X=!(/mouse/).test(Y.name),Z=Y.data.getTarget(),W;
if(Z.getName()=="td"&&(W=Z.getChild(0).getHtml())){I(Y);
X?H=Z:J=Z;
if(X){Z.setStyle("border-color",C(W));
Z.setStyle("border-style","dotted")
}E.getById(K).setStyle("background-color",W);
E.getById(B).setHtml(W)
}}function G(){var W=H.getChild(0).getHtml();
H.setStyle("border-color",W);
H.setStyle("border-style","solid");
E.getById(K).removeStyle("background-color");
E.getById(B).setHtml("&nbsp;");
H=null
}function I(Y){var X=!(/mouse/).test(Y.name),Z=X&&H;
if(Z){var W=Z.getChild(0).getHtml();
Z.setStyle("border-color",W);
Z.setStyle("border-style","solid")
}if(!(H||J)){E.getById(K).removeStyle("background-color");
E.getById(B).setHtml("&nbsp;")
}}function P(W){var a=W.data;
var X=a.getTarget();
var Z,Y;
var c=a.getKeystroke(),b=A.lang.dir=="rtl";
switch(c){case 38:if((Z=X.getParent().getPrevious())){Y=Z.getChild([X.getIndex()]);
Y.focus()
}a.preventDefault();
break;
case 40:if((Z=X.getParent().getNext())){Y=Z.getChild([X.getIndex()]);
if(Y&&Y.type==1){Y.focus()
}}a.preventDefault();
break;
case 32:case 13:O(W);
a.preventDefault();
break;
case b?37:39:if((Y=X.getNext())){if(Y.type==1){Y.focus();
a.preventDefault(true)
}}else{if((Z=X.getParent().getNext())){Y=Z.getChild([0]);
if(Y&&Y.type==1){Y.focus();
a.preventDefault(true)
}}}break;
case b?39:37:if((Y=X.getPrevious())){Y.focus();
a.preventDefault(true)
}else{if((Z=X.getParent().getPrevious())){Y=Z.getLast();
Y.focus();
a.preventDefault(true)
}}break;
default:return 
}}function R(){S=CKEDITOR.dom.element.createFromHtml('<table tabIndex="-1" aria-label="'+V.options+'" role="grid" style="border-collapse:separate;" cellspacing="0"><caption class="cke_voice_label">'+V.options+'</caption><tbody role="presentation"></tbody></table>');
S.on("mouseover",D);
S.on("mouseout",I);
var b=["00","33","66","99","cc","ff"];
function X(f,e){for(var d=f;
d<f+3;
d++){var g=new U(S.$.insertRow(-1));
g.setAttribute("role","row");
for(var c=e;
c<e+3;
c++){for(var h=0;
h<6;
h++){Z(g.$,"#"+b[c]+b[h]+b[d])
}}}}function Z(e,d){var c=new U(e.insertCell(-1));
c.setAttribute("class","ColorCell");
c.setAttribute("tabIndex",-1);
c.setAttribute("role","gridcell");
c.on("keydown",P);
c.on("click",O);
c.on("focus",D);
c.on("blur",I);
c.setStyle("background-color",d);
c.setStyle("border","1px solid "+d);
c.setStyle("width","14px");
c.setStyle("height","14px");
var f=T("color_table_cell");
c.setAttribute("aria-labelledby",f);
c.append(CKEDITOR.dom.element.createFromHtml('<span id="'+f+'" class="cke_voice_label">'+d+"</span>",CKEDITOR.document))
}X(0,0);
X(3,0);
X(0,3);
X(3,3);
var W=new U(S.$.insertRow(-1));
W.setAttribute("role","row");
for(var a=0;
a<6;
a++){Z(W.$,"#"+b[a]+b[a]+b[a])
}for(var Y=0;
Y<12;
Y++){Z(W.$,"#000000")
}}var T=function(W){return CKEDITOR.tools.getNextId()+"_"+W
},K=T("hicolor"),B=T("hicolortext"),M=T("selhicolor"),S;
R();
return{title:V.title,minWidth:360,minHeight:220,onLoad:function(){Q=this
},onHide:function(){N();
G()
},contents:[{id:"picker",label:V.title,accessKey:"I",elements:[{type:"hbox",padding:0,widths:["70%","10%","30%"],children:[{type:"html",html:"<div></div>",onLoad:function(){CKEDITOR.document.getById(this.domId).append(S)
},focus:function(){(H||this.getElement().getElementsByTag("td").getItem(0)).focus()
}},F,{type:"vbox",padding:0,widths:["70%","5%","25%"],children:[{type:"html",html:"<span>"+V.highlight+'</span>												<div id="'+K+'" style="border: 1px solid; height: 74px; width: 74px;"></div>												<div id="'+B+'">&nbsp;</div><span>'+V.selected+'</span>												<div id="'+M+'" style="border: 1px solid; height: 20px; width: 74px;"></div>'},{type:"text",label:V.selected,labelStyle:"display:none",id:"selectedColor",style:"width: 74px",onChange:function(){try{E.getById(M).setStyle("background-color",this.getValue())
}catch(W){N()
}}},F,{type:"button",id:"clear",style:"margin-top: 5px",label:V.clear,onClick:N}]}]}]}]}
});