;
CKEDITOR.dialog.add("link",function(AJ){var AI=CKEDITOR.plugins.link,AH=function(){var D=this.getDialog(),C=D.getContentElement("target","popupFeatures"),B=D.getContentElement("target","linkTargetName"),A=this.getValue();
if(!C||!B){return 
}C=C.getElement();
C.hide();
B.setValue("");
switch(A){case"frame":B.setLabel(AJ.lang.link.targetFrameName);
B.getElement().show();
break;
case"popup":C.show();
B.setLabel(AJ.lang.link.targetPopupName);
B.getElement().show();
break;
default:B.setValue(A);
B.getElement().hide();
break
}},AG=function(){var b=this.getDialog(),a=["urlOptions","anchorOptions","emailOptions"],E=this.getValue(),D=b.definition.getContents("upload"),C=D&&D.hidden;
if(E=="url"){if(AJ.config.linkShowTargetTab){b.showPage("target")
}if(!C){b.showPage("upload")
}}else{b.hidePage("target");
if(!C){b.hidePage("upload")
}}for(var B=0;
B<a.length;
B++){var A=b.getContentElement("info",a[B]);
if(!A){continue
}A=A.getElement().getParent().getParent();
if(a[B]==E+"Options"){A.show()
}else{A.hide()
}}b.layout()
},AF=/^javascript:/,AE=/^mailto:([^?]+)(?:\?(.+))?$/,AD=/subject=([^;?:@&=$,\/]*)/,AC=/body=([^;?:@&=$,\/]*)/,AB=/^#(.*)$/,AA=/^((?:http|https|ftp|news):\/\/)?(.*)$/,Z=/^(_(?:self|top|parent|blank))$/,Y=/^javascript:void\(location\.href='mailto:'\+String\.fromCharCode\(([^)]+)\)(?:\+'(.*)')?\)$/,X=/^javascript:([^(]+)\(([^)]+)\)$/,W=/\s*window.open\(\s*this\.href\s*,\s*(?:'([^']*)'|null)\s*,\s*'([^']*)'\s*\)\s*;\s*return\s*false;*\s*/,V=/(?:^|,)([^=]+)=(\d+|yes|no)/gi,U=function(p,o){var n=o&&(o.data("cke-saved-href")||o.getAttribute("href"))||"",m,l,k,j,i={};
if(m=n.match(AF)){if(G=="encode"){n=n.replace(Y,function(w,v,u){return"mailto:"+String.fromCharCode.apply(String,v.split(","))+(u&&I(u))
})
}else{if(G){n.replace(X,function(AO,AN,AM){if(AN==F.name){i.type="email";
var AL=i.email={},AK=/[^,\s]+/g,z=/(^')|('$)/g,y=AM.match(AK),x=y.length,w,v;
for(var u=0;
u<x;
u++){v=decodeURIComponent(I(y[u].replace(z,"")));
w=F.params[u].toLowerCase();
AL[w]=v
}AL.address=[AL.name,AL.domain].join("@")
}})
}}}if(!i.type){if(k=n.match(AB)){i.type="anchor";
i.anchor={};
i.anchor.name=i.anchor.id=k[1]
}else{if(l=n.match(AE)){var h=n.match(AD),g=n.match(AC);
i.type="email";
var f=i.email={};
f.address=l[1];
h&&(f.subject=decodeURIComponent(h[1]));
g&&(f.body=decodeURIComponent(g[1]))
}else{if(n&&(j=n.match(AA))){i.type="url";
i.url={};
i.url.protocol=j[1];
i.url.url=j[2]
}else{i.type="url"
}}}}if(o){var e=o.getAttribute("target");
i.target={};
i.adv={};
if(!e){var d=o.data("cke-pa-onclick")||o.getAttribute("onclick"),c=d&&d.match(W);
if(c){i.target.type="popup";
i.target.name=c[1];
var b;
while(b=V.exec(c[2])){if((b[2]=="yes"||b[2]=="1")&&!(b[1] in {height:1,width:1,top:1,left:1})){i.target[b[1]]=true
}else{if(isFinite(b[2])){i.target[b[1]]=b[2]
}}}}}else{var a=e.match(Z);
if(a){i.target.type=i.target.name=e
}else{i.target.type="frame";
i.target.name=e
}}var E=this,D=function(w,v){var u=o.getAttribute(v);
if(u!==null){i.adv[w]=u||""
}};
D("advId","id");
D("advLangDir","dir");
D("advAccessKey","accessKey");
i.adv.advName=o.data("cke-saved-name")||o.getAttribute("name")||"";
D("advLangCode","lang");
D("advTabIndex","tabindex");
D("advTitle","title");
D("advContentType","type");
CKEDITOR.plugins.link.synAnchorSelector?i.adv.advCSSClasses=P(o):D("advCSSClasses","class");
D("advCharset","charset");
D("advStyles","style");
D("advRel","rel")
}var C=i.anchors=[],B,A,t;
if(CKEDITOR.plugins.link.emptyAnchorFix){var s=p.document.getElementsByTag("a");
for(B=0,A=s.count();
B<A;
B++){t=s.getItem(B);
if(t.data("cke-saved-name")||t.hasAttribute("name")){C.push({name:t.data("cke-saved-name")||t.getAttribute("name"),id:t.getAttribute("id")})
}}}else{var r=new CKEDITOR.dom.nodeList(p.document.$.anchors);
for(B=0,A=r.count();
B<A;
B++){t=r.getItem(B);
C[B]={name:t.getAttribute("name"),id:t.getAttribute("id")}
}}if(CKEDITOR.plugins.link.fakeAnchor){var q=p.document.getElementsByTag("img");
for(B=0,A=q.count();
B<A;
B++){if(t=CKEDITOR.plugins.link.tryRestoreFakeAnchor(p,q.getItem(B))){C.push({name:t.getAttribute("name"),id:t.getAttribute("id")})
}}}this._.selectedElement=o;
return i
},S=function(B,A){if(A[B]){this.setValue(A[B][this.id]||"")
}},Q=function(A){return S.call(this,"target",A)
},O=function(A){return S.call(this,"adv",A)
},M=function(B,A){if(!A[B]){A[B]={}
}A[B][this.id]=this.getValue()||""
},K=function(A){return M.call(this,"target",A)
},J=function(A){return M.call(this,"adv",A)
};
function I(A){return A.replace(/\\'/g,"'")
}function H(A){return A.replace(/'/g,"\\$&")
}var G=AJ.config.emailProtection||"";
if(G&&G!="encode"){var F={};
G.replace(/^([^(]+)\(([^)]+)\)$/,function(C,B,A){F.name=B;
F.params=[];
A.replace(/[^,\s]+/g,function(D){F.params.push(D)
})
})
}function T(b){var a,E=F.name,D=F.params,C,B;
a=[E,"("];
for(var A=0;
A<D.length;
A++){C=D[A].toLowerCase();
B=b[C];
A>0&&a.push(",");
a.push("'",B?H(encodeURIComponent(b[C])):"","'")
}a.push(")");
return a.join("")
}function R(E){var D,C=E.length,B=[];
for(var A=0;
A<C;
A++){D=E.charCodeAt(A);
B.push(D)
}return"String.fromCharCode("+B.join(",")+")"
}function P(B){var A=B.getAttribute("class");
return A?A.replace(/\s*(?:cke_anchor_empty|cke_anchor)(?:\s*$)?/g,""):""
}var N=AJ.lang.common,L=AJ.lang.link;
return{title:L.title,minWidth:350,minHeight:230,contents:[{id:"info",label:L.info,title:L.info,elements:[{id:"linkType",type:"select",label:L.type,"default":"url",items:[[L.toUrl,"url"],[L.toAnchor,"anchor"],[L.toEmail,"email"]],onChange:AG,setup:function(A){if(A.type){this.setValue(A.type)
}},commit:function(A){A.type=this.getValue()
}},{type:"vbox",id:"urlOptions",children:[{type:"hbox",widths:["25%","75%"],children:[{id:"protocol",type:"select",label:N.protocol,"default":"http://",items:[["http://‎","http://"],["https://‎","https://"],["ftp://‎","ftp://"],["news://‎","news://"],[L.other,""]],setup:function(A){if(A.url){this.setValue(A.url.protocol||"")
}},commit:function(A){if(!A.url){A.url={}
}A.url.protocol=this.getValue()
}},{type:"text",id:"url",label:N.url,required:true,onLoad:function(){this.allowOnChange=true
},onKeyUp:function(){var A=this;
A.allowOnChange=false;
var a=A.getDialog().getContentElement("info","protocol"),E=A.getValue(),D=/^(http|https|ftp|news):\/\/(?=.)/i,C=/^((javascript:)|[#\/\.\?])/i,B=D.exec(E);
if(B){A.setValue(E.substr(B[0].length));
a.setValue(B[0].toLowerCase())
}else{if(C.test(E)){a.setValue("")
}}A.allowOnChange=true
},onChange:function(){if(this.allowOnChange){this.onKeyUp()
}},validate:function(){var B=this.getDialog();
if(B.getContentElement("info","linkType")&&B.getValueOf("info","linkType")!="url"){return true
}if(this.getDialog().fakeObj){return true
}var A=CKEDITOR.dialog.validate.notEmpty(L.noUrl);
return A.apply(this)
},setup:function(A){this.allowOnChange=false;
if(A.url){this.setValue(A.url.url)
}this.allowOnChange=true
},commit:function(A){this.onChange();
if(!A.url){A.url={}
}A.url.url=this.getValue();
this.allowOnChange=false
}}],setup:function(A){if(!this.getDialog().getContentElement("info","linkType")){this.getElement().show()
}}},{type:"button",id:"browse",hidden:"true",filebrowser:"info:url",label:N.browseServer}]},{type:"vbox",id:"anchorOptions",width:260,align:"center",padding:0,children:[{type:"fieldset",id:"selectAnchorText",label:L.selectAnchor,setup:function(A){if(A.anchors.length>0){this.getElement().show()
}else{this.getElement().hide()
}},children:[{type:"hbox",id:"selectAnchor",children:[{type:"select",id:"anchorName","default":"",label:L.anchorName,style:"width: 100%;",items:[[""]],setup:function(D){var A=this;
A.clear();
A.add("");
for(var C=0;
C<D.anchors.length;
C++){if(D.anchors[C].name){A.add(D.anchors[C].name)
}}if(D.anchor){A.setValue(D.anchor.name)
}var B=A.getDialog().getContentElement("info","linkType");
if(B&&B.getValue()=="email"){A.focus()
}},commit:function(A){if(!A.anchor){A.anchor={}
}A.anchor.name=this.getValue()
}},{type:"select",id:"anchorId","default":"",label:L.anchorId,style:"width: 100%;",items:[[""]],setup:function(C){var A=this;
A.clear();
A.add("");
for(var B=0;
B<C.anchors.length;
B++){if(C.anchors[B].id){A.add(C.anchors[B].id)
}}if(C.anchor){A.setValue(C.anchor.id)
}},commit:function(A){if(!A.anchor){A.anchor={}
}A.anchor.id=this.getValue()
}}],setup:function(A){if(A.anchors.length>0){this.getElement().show()
}else{this.getElement().hide()
}}}]},{type:"html",id:"noAnchors",style:"text-align: center;",html:'<div role="note" tabIndex="-1">'+CKEDITOR.tools.htmlEncode(L.noAnchors)+"</div>",focus:true,setup:function(A){if(A.anchors.length<1){this.getElement().show()
}else{this.getElement().hide()
}}}],setup:function(A){if(!this.getDialog().getContentElement("info","linkType")){this.getElement().hide()
}}},{type:"vbox",id:"emailOptions",padding:1,children:[{type:"text",id:"emailAddress",label:L.emailAddress,required:true,validate:function(){var B=this.getDialog();
if(!B.getContentElement("info","linkType")||B.getValueOf("info","linkType")!="email"){return true
}var A=CKEDITOR.dialog.validate.notEmpty(L.noEmail);
return A.apply(this)
},setup:function(B){if(B.email){this.setValue(B.email.address)
}var A=this.getDialog().getContentElement("info","linkType");
if(A&&A.getValue()=="email"){this.select()
}},commit:function(A){if(!A.email){A.email={}
}A.email.address=this.getValue()
}},{type:"text",id:"emailSubject",label:L.emailSubject,setup:function(A){if(A.email){this.setValue(A.email.subject)
}},commit:function(A){if(!A.email){A.email={}
}A.email.subject=this.getValue()
}},{type:"textarea",id:"emailBody",label:L.emailBody,rows:3,"default":"",setup:function(A){if(A.email){this.setValue(A.email.body)
}},commit:function(A){if(!A.email){A.email={}
}A.email.body=this.getValue()
}}],setup:function(A){if(!this.getDialog().getContentElement("info","linkType")){this.getElement().hide()
}}}]},{id:"target",label:L.target,title:L.target,elements:[{type:"hbox",widths:["50%","50%"],children:[{type:"select",id:"linkTargetType",label:N.target,"default":"notSet",style:"width : 100%;",items:[[N.notSet,"notSet"],[L.targetFrame,"frame"],[L.targetPopup,"popup"],[N.targetNew,"_blank"],[N.targetTop,"_top"],[N.targetSelf,"_self"],[N.targetParent,"_parent"]],onChange:AH,setup:function(A){if(A.target){this.setValue(A.target.type||"notSet")
}AH.call(this)
},commit:function(A){if(!A.target){A.target={}
}A.target.type=this.getValue()
}},{type:"text",id:"linkTargetName",label:L.targetFrameName,"default":"",setup:function(A){if(A.target){this.setValue(A.target.name)
}},commit:function(A){if(!A.target){A.target={}
}A.target.name=this.getValue().replace(/\W/gi,"")
}}]},{type:"vbox",width:"100%",align:"center",padding:2,id:"popupFeatures",children:[{type:"fieldset",label:L.popupFeatures,children:[{type:"hbox",children:[{type:"checkbox",id:"resizable",label:L.popupResizable,setup:Q,commit:K},{type:"checkbox",id:"status",label:L.popupStatusBar,setup:Q,commit:K}]},{type:"hbox",children:[{type:"checkbox",id:"location",label:L.popupLocationBar,setup:Q,commit:K},{type:"checkbox",id:"toolbar",label:L.popupToolbar,setup:Q,commit:K}]},{type:"hbox",children:[{type:"checkbox",id:"menubar",label:L.popupMenuBar,setup:Q,commit:K},{type:"checkbox",id:"fullscreen",label:L.popupFullScreen,setup:Q,commit:K}]},{type:"hbox",children:[{type:"checkbox",id:"scrollbars",label:L.popupScrollBars,setup:Q,commit:K},{type:"checkbox",id:"dependent",label:L.popupDependent,setup:Q,commit:K}]},{type:"hbox",children:[{type:"text",widths:["50%","50%"],labelLayout:"horizontal",label:N.width,id:"width",setup:Q,commit:K},{type:"text",labelLayout:"horizontal",widths:["50%","50%"],label:L.popupLeft,id:"left",setup:Q,commit:K}]},{type:"hbox",children:[{type:"text",labelLayout:"horizontal",widths:["50%","50%"],label:N.height,id:"height",setup:Q,commit:K},{type:"text",labelLayout:"horizontal",label:L.popupTop,widths:["50%","50%"],id:"top",setup:Q,commit:K}]}]}]}]},{id:"upload",label:L.upload,title:L.upload,hidden:true,filebrowser:"uploadButton",elements:[{type:"file",id:"upload",label:N.upload,style:"height:40px",size:29},{type:"fileButton",id:"uploadButton",label:N.uploadSubmit,filebrowser:"info:url","for":["upload","upload"]}]},{id:"advanced",label:L.advanced,title:L.advanced,elements:[{type:"vbox",padding:1,children:[{type:"hbox",widths:["45%","35%","20%"],children:[{type:"text",id:"advId",label:L.id,setup:O,commit:J},{type:"select",id:"advLangDir",label:L.langDir,"default":"",style:"width:110px",items:[[N.notSet,""],[L.langDirLTR,"ltr"],[L.langDirRTL,"rtl"]],setup:O,commit:J},{type:"text",id:"advAccessKey",width:"80px",label:L.acccessKey,maxLength:1,setup:O,commit:J}]},{type:"hbox",widths:["45%","35%","20%"],children:[{type:"text",label:L.name,id:"advName",setup:O,commit:J},{type:"text",label:L.langCode,id:"advLangCode",width:"110px","default":"",setup:O,commit:J},{type:"text",label:L.tabIndex,id:"advTabIndex",width:"80px",maxLength:5,setup:O,commit:J}]}]},{type:"vbox",padding:1,children:[{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:L.advisoryTitle,"default":"",id:"advTitle",setup:O,commit:J},{type:"text",label:L.advisoryContentType,"default":"",id:"advContentType",setup:O,commit:J}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:L.cssClasses,"default":"",id:"advCSSClasses",setup:O,commit:J},{type:"text",label:L.charset,"default":"",id:"advCharset",setup:O,commit:J}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:L.rel,"default":"",id:"advRel",setup:O,commit:J},{type:"text",label:L.styles,"default":"",id:"advStyles",validate:CKEDITOR.dialog.validate.inlineStyle(AJ.lang.common.invalidInlineStyle),setup:O,commit:J}]}]}]}],onShow:function(){var C=this.getParentEditor(),B=C.getSelection(),A=null;
if((A=AI.getSelectedLink(C))&&A.hasAttribute("href")){B.selectElement(A)
}else{A=null
}this.setupContent(U.apply(this,[C,A]))
},onOk:function(){var p={},o=[],n={},m=this,l=this.getParentEditor();
this.commitContent(n);
switch(n.type||"url"){case"url":var k=n.url&&n.url.protocol!=undefined?n.url.protocol:"http://",j=n.url&&CKEDITOR.tools.trim(n.url.url)||"";
p["data-cke-saved-href"]=j.indexOf("/")===0?j:k+j;
break;
case"anchor":var i=n.anchor&&n.anchor.name,h=n.anchor&&n.anchor.id;
p["data-cke-saved-href"]="#"+(i||h||"");
break;
case"email":var g,f=n.email,e=f.address;
switch(G){case"":case"encode":var d=encodeURIComponent(f.subject||""),c=encodeURIComponent(f.body||""),b=[];
d&&b.push("subject="+d);
c&&b.push("body="+c);
b=b.length?"?"+b.join("&"):"";
if(G=="encode"){g=["javascript:void(location.href='mailto:'+",R(e)];
b&&g.push("+'",H(b),"'");
g.push(")")
}else{g=["mailto:",e,b]
}break;
default:var a=e.split("@",2);
f.name=a[0];
f.domain=a[1];
g=["javascript:",T(f)]
}p["data-cke-saved-href"]=g.join("");
break
}if(n.target){if(n.target.type=="popup"){var E=["window.open(this.href, '",n.target.name||"","', '"],D=["resizable","status","location","toolbar","menubar","fullscreen","scrollbars","dependent"],C=D.length,B=function(y){if(n.target[y]){D.push(y+"="+n.target[y])
}};
for(var A=0;
A<C;
A++){D[A]=D[A]+(n.target[D[A]]?"=yes":"=no")
}B("width");
B("left");
B("height");
B("top");
E.push(D.join(","),"'); return false;");
p["data-cke-pa-onclick"]=E.join("");
o.push("target")
}else{if(n.target.type!="notSet"&&n.target.name){p.target=n.target.name
}else{o.push("target")
}o.push("data-cke-pa-onclick","onclick")
}}if(n.adv){var x=function(y,AK){var z=n.adv[y];
if(z){p[AK]=z
}else{o.push(AK)
}};
x("advId","id");
x("advLangDir","dir");
x("advAccessKey","accessKey");
if(n.adv.advName){p.name=p["data-cke-saved-name"]=n.adv.advName
}else{o=o.concat(["data-cke-saved-name","name"])
}x("advLangCode","lang");
x("advTabIndex","tabindex");
x("advTitle","title");
x("advContentType","type");
x("advCSSClasses","class");
x("advCharset","charset");
x("advStyles","style");
x("advRel","rel")
}var w=l.getSelection();
p.href=p["data-cke-saved-href"];
if(!this._.selectedElement){var v=w.getRanges(true);
if(v.length==1&&v[0].collapsed){var u=new CKEDITOR.dom.text(n.type=="email"?n.email.address:p["data-cke-saved-href"],l.document);
v[0].insertNode(u);
v[0].selectNodeContents(u);
w.selectRanges(v)
}var t=new CKEDITOR.style({element:"a",attributes:p});
t.type=CKEDITOR.STYLE_INLINE;
t.apply(l.document)
}else{var s=this._.selectedElement,r=s.data("cke-saved-href"),q=s.getHtml();
s.setAttributes(p);
s.removeAttributes(o);
if(n.adv&&n.adv.advName&&CKEDITOR.plugins.link.synAnchorSelector){s.addClass(s.getChildCount()?"cke_anchor":"cke_anchor_empty")
}if(r==q||n.type=="email"&&q.indexOf("@")!=-1){s.setHtml(n.type=="email"?n.email.address:p["data-cke-saved-href"])
}w.selectElement(s);
delete this._.selectedElement
}},onLoad:function(){if(!AJ.config.linkShowAdvancedTab){this.hidePage("advanced")
}if(!AJ.config.linkShowTargetTab){this.hidePage("target")
}},onFocus:function(){var B=this.getContentElement("info","linkType"),A;
if(B&&B.getValue()=="url"){A=this.getContentElement("info","url");
A.select()
}}}
});