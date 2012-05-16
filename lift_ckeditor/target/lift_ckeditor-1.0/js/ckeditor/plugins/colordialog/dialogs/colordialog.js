;
CKEDITOR.dialog.add("colordialog",function(V){var U=CKEDITOR.dom.element,T=CKEDITOR.document,S=V.lang.colordialog,R,Q={type:"html",html:"&nbsp;"},P;
function O(){T.getById(B).removeStyle("background-color");
R.getContentElement("picker","selectedColor").setValue("");
P&&P.removeAttribute("aria-selected");
P=null
}function N(X){var W=X.data.getTarget(),Y;
if(W.getName()=="td"&&(Y=W.getChild(0).getHtml())){P=W;
P.setAttribute("aria-selected",true);
R.getContentElement("picker","selectedColor").setValue(Y)
}}function M(X){X=X.replace(/^#/,"");
for(var W=0,Z=[];
W<=2;
W++){Z[W]=parseInt(X.substr(W*2,2),16)
}var Y=0.2126*Z[0]+0.7152*Z[1]+0.0722*Z[2];
return"#"+(Y>=165?"000":"fff")
}var L,K;
function J(X){!X.name&&(X=new CKEDITOR.event(X));
var W=!/mouse/.test(X.name),Z=X.data.getTarget(),Y;
if(Z.getName()=="td"&&(Y=Z.getChild(0).getHtml())){H(X);
W?L=Z:K=Z;
if(W){Z.setStyle("border-color",M(Y));
Z.setStyle("border-style","dotted")
}T.getById(D).setStyle("background-color",Y);
T.getById(C).setHtml(Y)
}}function I(){var W=L.getChild(0).getHtml();
L.setStyle("border-color",W);
L.setStyle("border-style","solid");
T.getById(D).removeStyle("background-color");
T.getById(C).setHtml("&nbsp;");
L=null
}function H(X){var W=!/mouse/.test(X.name),Z=W&&L;
if(Z){var Y=Z.getChild(0).getHtml();
Z.setStyle("border-color",Y);
Z.setStyle("border-style","solid")
}if(!(L||K)){T.getById(D).removeStyle("background-color");
T.getById(C).setHtml("&nbsp;")
}}function G(Y){var X=Y.data,c=X.getTarget(),a,W,b=X.getKeystroke(),Z=V.lang.dir=="rtl";
switch(b){case 38:if(a=c.getParent().getPrevious()){W=a.getChild([c.getIndex()]);
W.focus()
}X.preventDefault();
break;
case 40:if(a=c.getParent().getNext()){W=a.getChild([c.getIndex()]);
if(W&&W.type==1){W.focus()
}}X.preventDefault();
break;
case 32:case 13:N(Y);
X.preventDefault();
break;
case Z?37:39:if(W=c.getNext()){if(W.type==1){W.focus();
X.preventDefault(true)
}}else{if(a=c.getParent().getNext()){W=a.getChild([0]);
if(W&&W.type==1){W.focus();
X.preventDefault(true)
}}}break;
case Z?39:37:if(W=c.getPrevious()){W.focus();
X.preventDefault(true)
}else{if(a=c.getParent().getPrevious()){W=a.getLast();
W.focus();
X.preventDefault(true)
}}break;
default:return 
}}function F(){A=CKEDITOR.dom.element.createFromHtml('<table tabIndex="-1" aria-label="'+S.options+'" role="grid" style="border-collapse:separate;" cellspacing="0"><caption class="cke_voice_label">'+S.options+'</caption><tbody role="presentation"></tbody></table>');
A.on("mouseover",J);
A.on("mouseout",H);
var Y=["00","33","66","99","cc","ff"];
function X(h,g){for(var f=h;
f<h+3;
f++){var e=new U(A.$.insertRow(-1));
e.setAttribute("role","row");
for(var d=g;
d<g+3;
d++){for(var c=0;
c<6;
c++){b(e.$,"#"+Y[d]+Y[c]+Y[f])
}}}}function b(f,e){var d=new U(f.insertCell(-1));
d.setAttribute("class","ColorCell");
d.setAttribute("tabIndex",-1);
d.setAttribute("role","gridcell");
d.on("keydown",G);
d.on("click",N);
d.on("focus",J);
d.on("blur",H);
d.setStyle("background-color",e);
d.setStyle("border","1px solid "+e);
d.setStyle("width","14px");
d.setStyle("height","14px");
var c=E("color_table_cell");
d.setAttribute("aria-labelledby",c);
d.append(CKEDITOR.dom.element.createFromHtml('<span id="'+c+'" class="cke_voice_label">'+e+"</span>",CKEDITOR.document))
}X(0,0);
X(3,0);
X(0,3);
X(3,3);
var Z=new U(A.$.insertRow(-1));
Z.setAttribute("role","row");
for(var W=0;
W<6;
W++){b(Z.$,"#"+Y[W]+Y[W]+Y[W])
}for(var a=0;
a<12;
a++){b(Z.$,"#000000")
}}var E=function(W){return CKEDITOR.tools.getNextId()+"_"+W
},D=E("hicolor"),C=E("hicolortext"),B=E("selhicolor"),A;
F();
return{title:S.title,minWidth:360,minHeight:220,onLoad:function(){R=this
},onHide:function(){O();
I()
},contents:[{id:"picker",label:S.title,accessKey:"I",elements:[{type:"hbox",padding:0,widths:["70%","10%","30%"],children:[{type:"html",html:"<div></div>",onLoad:function(){CKEDITOR.document.getById(this.domId).append(A)
},focus:function(){(L||this.getElement().getElementsByTag("td").getItem(0)).focus()
}},Q,{type:"vbox",padding:0,widths:["70%","5%","25%"],children:[{type:"html",html:"<span>"+S.highlight+'</span>\t\t\t\t\t\t\t\t\t\t\t\t<div id="'+D+'" style="border: 1px solid; height: 74px; width: 74px;"></div>\t\t\t\t\t\t\t\t\t\t\t\t<div id="'+C+'">&nbsp;</div><span>'+S.selected+'</span>\t\t\t\t\t\t\t\t\t\t\t\t<div id="'+B+'" style="border: 1px solid; height: 20px; width: 74px;"></div>'},{type:"text",label:S.selected,labelStyle:"display:none",id:"selectedColor",style:"width: 74px",onChange:function(){try{T.getById(B).setStyle("background-color",this.getValue())
}catch(W){O()
}}},Q,{type:"button",id:"clear",style:"margin-top: 5px",label:S.clear,onClick:O}]}]}]}]}
});