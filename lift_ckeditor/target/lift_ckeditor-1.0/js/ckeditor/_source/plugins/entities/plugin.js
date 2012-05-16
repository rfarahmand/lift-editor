(function(){var A="nbsp,gt,lt,amp";
var D="quot,iexcl,cent,pound,curren,yen,brvbar,sect,uml,copy,ordf,laquo,not,shy,reg,macr,deg,plusmn,sup2,sup3,acute,micro,para,middot,cedil,sup1,ordm,raquo,frac14,frac12,frac34,iquest,times,divide,fnof,bull,hellip,prime,Prime,oline,frasl,weierp,image,real,trade,alefsym,larr,uarr,rarr,darr,harr,crarr,lArr,uArr,rArr,dArr,hArr,forall,part,exist,empty,nabla,isin,notin,ni,prod,sum,minus,lowast,radic,prop,infin,ang,and,or,cap,cup,int,there4,sim,cong,asymp,ne,equiv,le,ge,sub,sup,nsub,sube,supe,oplus,otimes,perp,sdot,lceil,rceil,lfloor,rfloor,lang,rang,loz,spades,clubs,hearts,diams,circ,tilde,ensp,emsp,thinsp,zwnj,zwj,lrm,rlm,ndash,mdash,lsquo,rsquo,sbquo,ldquo,rdquo,bdquo,dagger,Dagger,permil,lsaquo,rsaquo,euro";
var C="Agrave,Aacute,Acirc,Atilde,Auml,Aring,AElig,Ccedil,Egrave,Eacute,Ecirc,Euml,Igrave,Iacute,Icirc,Iuml,ETH,Ntilde,Ograve,Oacute,Ocirc,Otilde,Ouml,Oslash,Ugrave,Uacute,Ucirc,Uuml,Yacute,THORN,szlig,agrave,aacute,acirc,atilde,auml,aring,aelig,ccedil,egrave,eacute,ecirc,euml,igrave,iacute,icirc,iuml,eth,ntilde,ograve,oacute,ocirc,otilde,ouml,oslash,ugrave,uacute,ucirc,uuml,yacute,thorn,yuml,OElig,oelig,Scaron,scaron,Yuml";
var E="Alpha,Beta,Gamma,Delta,Epsilon,Zeta,Eta,Theta,Iota,Kappa,Lambda,Mu,Nu,Xi,Omicron,Pi,Rho,Sigma,Tau,Upsilon,Phi,Chi,Psi,Omega,alpha,beta,gamma,delta,epsilon,zeta,eta,theta,iota,kappa,lambda,mu,nu,xi,omicron,pi,rho,sigmaf,sigma,tau,upsilon,phi,chi,psi,omega,thetasym,upsih,piv";
function B(J,K){var N={},M=[];
var I={nbsp:"\u00A0",shy:"\u00AD",gt:"\u003E",lt:"\u003C",amp:"\u0026",apos:"\u0027",quot:"\u0022"};
J=J.replace(/\b(nbsp|shy|gt|lt|amp|apos|quot)(?:,|$)/g,function(Q,P){var R=K?"&"+P+";":I[P],O=K?I[P]:"&"+P+";";
N[R]=O;
M.push(R);
return""
});
if(!K&&J){J=J.split(",");
var F=document.createElement("div"),L;
F.innerHTML="&"+J.join(";&")+";";
L=F.innerHTML;
F=null;
for(var H=0;
H<L.length;
H++){var G=L.charAt(H);
N[G]="&"+J[H]+";";
M.push(G)
}}N.regex=M.join(K?"|":"");
return N
}CKEDITOR.plugins.add("entities",{afterInit:function(L){var J=L.config;
var O=L.dataProcessor,G=O&&O.htmlFilter;
if(G){var M=[];
if(J.basicEntities!==false){M.push(A)
}if(J.entities){if(M.length){M.push(D)
}if(J.entities_latin){M.push(C)
}if(J.entities_greek){M.push(E)
}if(J.entities_additional){M.push(J.entities_additional)
}}var H=B(M.join(","));
var N=H.regex?"["+H.regex+"]":"a^";
delete H.regex;
if(J.entities&&J.entities_processNumerical){N="[^ -~]|"+N
}N=new RegExp(N,"g");
function P(Q){return J.entities_processNumerical=="force"||!H[Q]?"&#"+Q.charCodeAt(0)+";":H[Q]
}var K=B([A,"shy"].join(","),true),I=new RegExp(K.regex,"g");
function F(Q){return K[Q]
}G.addRules({text:function(Q){return Q.replace(I,F).replace(N,P)
}})
}}})
})();
CKEDITOR.config.basicEntities=true;
CKEDITOR.config.entities=true;
CKEDITOR.config.entities_latin=true;
CKEDITOR.config.entities_greek=true;
CKEDITOR.config.entities_additional="#39";