;
CKEDITOR.dialog.add("link",function(L){var I=CKEDITOR.plugins.link;
var Y=function(){var g=this.getDialog(),f=g.getContentElement("target","popupFeatures"),h=g.getContentElement("target","linkTargetName"),i=this.getValue();
if(!f||!h){return 
}f=f.getElement();
f.hide();
h.setValue("");
switch(i){case"frame":h.setLabel(L.lang.link.targetFrameName);
h.getElement().show();
break;
case"popup":f.show();
h.setLabel(L.lang.link.targetPopupName);
h.getElement().show();
break;
default:h.setValue(i);
h.getElement().hide();
break
}};
var d=function(){var j=this.getDialog(),m=["urlOptions","anchorOptions","emailOptions"],l=this.getValue(),k=j.definition.getContents("upload"),f=k&&k.hidden;
if(l=="url"){if(L.config.linkShowTargetTab){j.showPage("target")
}if(!f){j.showPage("upload")
}}else{j.hidePage("target");
if(!f){j.hidePage("upload")
}}for(var h=0;
h<m.length;
h++){var g=j.getContentElement("info",m[h]);
if(!g){continue
}g=g.getElement().getParent().getParent();
if(m[h]==l+"Options"){g.show()
}else{g.hide()
}}j.layout()
};
var e=/^javascript:/,U=/^mailto:([^?]+)(?:\?(.+))?$/,J=/subject=([^;?:@&=$,\/]*)/,K=/body=([^;?:@&=$,\/]*)/,T=/^#(.*)$/,N=/^((?:http|https|ftp|news):\/\/)?(.*)$/,B=/^(_(?:self|top|parent|blank))$/,A=/^javascript:void\(location\.href='mailto:'\+String\.fromCharCode\(([^)]+)\)(?:\+'(.*)')?\)$/,W=/^javascript:([^(]+)\(([^)]+)\)$/;
var O=/\s*window.open\(\s*this\.href\s*,\s*(?:'([^']*)'|null)\s*,\s*'([^']*)'\s*\)\s*;\s*return\s*false;*\s*/;
var H=/(?:^|,)([^=]+)=(\d+|yes|no)/gi;
var R=function(h,g){var x=(g&&(g.data("cke-saved-href")||g.getAttribute("href")))||"",k,w,u,l,q={};
if((k=x.match(e))){if(P=="encode"){x=x.replace(A,function(i,AG,AF){return"mailto:"+String.fromCharCode.apply(String,AG.split(","))+(AF&&X(AF))
})
}else{if(P){x.replace(W,function(AL,AN,AI){if(AN==a.name){q.type="email";
var AM=q.email={};
var AG=/[^,\s]+/g,AH=/(^')|('$)/g,AF=AI.match(AG),AO=AF.length,AK,AP;
for(var AJ=0;
AJ<AO;
AJ++){AP=decodeURIComponent(X(AF[AJ].replace(AH,"")));
AK=a.params[AJ].toLowerCase();
AM[AK]=AP
}AM.address=[AM.name,AM.domain].join("@")
}})
}}}if(!q.type){if((u=x.match(T))){q.type="anchor";
q.anchor={};
q.anchor.name=q.anchor.id=u[1]
}else{if((w=x.match(U))){var p=x.match(J),r=x.match(K);
q.type="email";
var s=(q.email={});
s.address=w[1];
p&&(s.subject=decodeURIComponent(p[1]));
r&&(s.body=decodeURIComponent(r[1]))
}else{if(x&&(l=x.match(N))){q.type="url";
q.url={};
q.url.protocol=l[1];
q.url.url=l[2]
}else{q.type="url"
}}}}if(g){var AC=g.getAttribute("target");
q.target={};
q.adv={};
if(!AC){var AE=g.data("cke-pa-onclick")||g.getAttribute("onclick"),z=AE&&AE.match(O);
if(z){q.target.type="popup";
q.target.name=z[1];
var m;
while((m=H.exec(z[2]))){if((m[2]=="yes"||m[2]=="1")&&!(m[1] in {height:1,width:1,top:1,left:1})){q.target[m[1]]=true
}else{if(isFinite(m[2])){q.target[m[1]]=m[2]
}}}}}else{var AD=AC.match(B);
if(AD){q.target.type=q.target.name=AC
}else{q.target.type="frame";
q.target.name=AC
}}var AB=this;
var t=function(i,AF){var AG=g.getAttribute(AF);
if(AG!==null){q.adv[i]=AG||""
}};
t("advId","id");
t("advLangDir","dir");
t("advAccessKey","accessKey");
q.adv.advName=g.data("cke-saved-name")||g.getAttribute("name")||"";
t("advLangCode","lang");
t("advTabIndex","tabindex");
t("advTitle","title");
t("advContentType","type");
CKEDITOR.plugins.link.synAnchorSelector?q.adv.advCSSClasses=b(g):t("advCSSClasses","class");
t("advCharset","charset");
t("advStyles","style");
t("advRel","rel")
}var o=q.anchors=[],v,j,AA;
if(CKEDITOR.plugins.link.emptyAnchorFix){var f=h.document.getElementsByTag("a");
for(v=0,j=f.count();
v<j;
v++){AA=f.getItem(v);
if(AA.data("cke-saved-name")||AA.hasAttribute("name")){o.push({name:AA.data("cke-saved-name")||AA.getAttribute("name"),id:AA.getAttribute("id")})
}}}else{var y=new CKEDITOR.dom.nodeList(h.document.$.anchors);
for(v=0,j=y.count();
v<j;
v++){AA=y.getItem(v);
o[v]={name:AA.getAttribute("name"),id:AA.getAttribute("id")}
}}if(CKEDITOR.plugins.link.fakeAnchor){var n=h.document.getElementsByTag("img");
for(v=0,j=n.count();
v<j;
v++){if((AA=CKEDITOR.plugins.link.tryRestoreFakeAnchor(h,n.getItem(v)))){o.push({name:AA.getAttribute("name"),id:AA.getAttribute("id")})
}}}this._.selectedElement=g;
return q
};
var G=function(g,f){if(f[g]){this.setValue(f[g][this.id]||"")
}};
var M=function(f){return G.call(this,"target",f)
};
var F=function(f){return G.call(this,"adv",f)
};
var E=function(g,f){if(!f[g]){f[g]={}
}f[g][this.id]=this.getValue()||""
};
var c=function(f){return E.call(this,"target",f)
};
var D=function(f){return E.call(this,"adv",f)
};
function X(f){return f.replace(/\\'/g,"'")
}function Z(f){return f.replace(/'/g,"\\$&")
}var P=L.config.emailProtection||"";
if(P&&P!="encode"){var a={};
P.replace(/^([^(]+)\(([^)]+)\)$/,function(f,g,h){a.name=g;
a.params=[];
h.replace(/[^,\s]+/g,function(i){a.params.push(i)
})
})
}function C(h){var f,g=a.name,m=a.params,k,l;
f=[g,"("];
for(var j=0;
j<m.length;
j++){k=m[j].toLowerCase();
l=h[k];
j>0&&f.push(",");
f.push("'",l?Z(encodeURIComponent(h[k])):"","'")
}f.push(")");
return f.join("")
}function V(g){var f,k=g.length,h=[];
for(var j=0;
j<k;
j++){f=g.charCodeAt(j);
h.push(f)
}return"String.fromCharCode("+h.join(",")+")"
}function b(g){var f=g.getAttribute("class");
return f?f.replace(/\s*(?:cke_anchor_empty|cke_anchor)(?:\s*$)?/g,""):""
}var S=L.lang.common,Q=L.lang.link;
return{title:Q.title,minWidth:350,minHeight:230,contents:[{id:"info",label:Q.info,title:Q.info,elements:[{id:"linkType",type:"select",label:Q.type,"default":"url",items:[[Q.toUrl,"url"],[Q.toAnchor,"anchor"],[Q.toEmail,"email"]],onChange:d,setup:function(f){if(f.type){this.setValue(f.type)
}},commit:function(f){f.type=this.getValue()
}},{type:"vbox",id:"urlOptions",children:[{type:"hbox",widths:["25%","75%"],children:[{id:"protocol",type:"select",label:S.protocol,"default":"http://",items:[["http://\u200E","http://"],["https://\u200E","https://"],["ftp://\u200E","ftp://"],["news://\u200E","news://"],[Q.other,""]],setup:function(f){if(f.url){this.setValue(f.url.protocol||"")
}},commit:function(f){if(!f.url){f.url={}
}f.url.protocol=this.getValue()
}},{type:"text",id:"url",label:S.url,required:true,onLoad:function(){this.allowOnChange=true
},onKeyUp:function(){this.allowOnChange=false;
var h=this.getDialog().getContentElement("info","protocol"),f=this.getValue(),g=/^(http|https|ftp|news):\/\/(?=.)/i,j=/^((javascript:)|[#\/\.\?])/i;
var i=g.exec(f);
if(i){this.setValue(f.substr(i[0].length));
h.setValue(i[0].toLowerCase())
}else{if(j.test(f)){h.setValue("")
}}this.allowOnChange=true
},onChange:function(){if(this.allowOnChange){this.onKeyUp()
}},validate:function(){var f=this.getDialog();
if(f.getContentElement("info","linkType")&&f.getValueOf("info","linkType")!="url"){return true
}if(this.getDialog().fakeObj){return true
}var g=CKEDITOR.dialog.validate.notEmpty(Q.noUrl);
return g.apply(this)
},setup:function(f){this.allowOnChange=false;
if(f.url){this.setValue(f.url.url)
}this.allowOnChange=true
},commit:function(f){this.onChange();
if(!f.url){f.url={}
}f.url.url=this.getValue();
this.allowOnChange=false
}}],setup:function(f){if(!this.getDialog().getContentElement("info","linkType")){this.getElement().show()
}}},{type:"button",id:"browse",hidden:"true",filebrowser:"info:url",label:S.browseServer}]},{type:"vbox",id:"anchorOptions",width:260,align:"center",padding:0,children:[{type:"fieldset",id:"selectAnchorText",label:Q.selectAnchor,setup:function(f){if(f.anchors.length>0){this.getElement().show()
}else{this.getElement().hide()
}},children:[{type:"hbox",id:"selectAnchor",children:[{type:"select",id:"anchorName","default":"",label:Q.anchorName,style:"width: 100%;",items:[[""]],setup:function(h){this.clear();
this.add("");
for(var g=0;
g<h.anchors.length;
g++){if(h.anchors[g].name){this.add(h.anchors[g].name)
}}if(h.anchor){this.setValue(h.anchor.name)
}var f=this.getDialog().getContentElement("info","linkType");
if(f&&f.getValue()=="email"){this.focus()
}},commit:function(f){if(!f.anchor){f.anchor={}
}f.anchor.name=this.getValue()
}},{type:"select",id:"anchorId","default":"",label:Q.anchorId,style:"width: 100%;",items:[[""]],setup:function(g){this.clear();
this.add("");
for(var f=0;
f<g.anchors.length;
f++){if(g.anchors[f].id){this.add(g.anchors[f].id)
}}if(g.anchor){this.setValue(g.anchor.id)
}},commit:function(f){if(!f.anchor){f.anchor={}
}f.anchor.id=this.getValue()
}}],setup:function(f){if(f.anchors.length>0){this.getElement().show()
}else{this.getElement().hide()
}}}]},{type:"html",id:"noAnchors",style:"text-align: center;",html:'<div role="note" tabIndex="-1">'+CKEDITOR.tools.htmlEncode(Q.noAnchors)+"</div>",focus:true,setup:function(f){if(f.anchors.length<1){this.getElement().show()
}else{this.getElement().hide()
}}}],setup:function(f){if(!this.getDialog().getContentElement("info","linkType")){this.getElement().hide()
}}},{type:"vbox",id:"emailOptions",padding:1,children:[{type:"text",id:"emailAddress",label:Q.emailAddress,required:true,validate:function(){var f=this.getDialog();
if(!f.getContentElement("info","linkType")||f.getValueOf("info","linkType")!="email"){return true
}var g=CKEDITOR.dialog.validate.notEmpty(Q.noEmail);
return g.apply(this)
},setup:function(g){if(g.email){this.setValue(g.email.address)
}var f=this.getDialog().getContentElement("info","linkType");
if(f&&f.getValue()=="email"){this.select()
}},commit:function(f){if(!f.email){f.email={}
}f.email.address=this.getValue()
}},{type:"text",id:"emailSubject",label:Q.emailSubject,setup:function(f){if(f.email){this.setValue(f.email.subject)
}},commit:function(f){if(!f.email){f.email={}
}f.email.subject=this.getValue()
}},{type:"textarea",id:"emailBody",label:Q.emailBody,rows:3,"default":"",setup:function(f){if(f.email){this.setValue(f.email.body)
}},commit:function(f){if(!f.email){f.email={}
}f.email.body=this.getValue()
}}],setup:function(f){if(!this.getDialog().getContentElement("info","linkType")){this.getElement().hide()
}}}]},{id:"target",label:Q.target,title:Q.target,elements:[{type:"hbox",widths:["50%","50%"],children:[{type:"select",id:"linkTargetType",label:S.target,"default":"notSet",style:"width : 100%;",items:[[S.notSet,"notSet"],[Q.targetFrame,"frame"],[Q.targetPopup,"popup"],[S.targetNew,"_blank"],[S.targetTop,"_top"],[S.targetSelf,"_self"],[S.targetParent,"_parent"]],onChange:Y,setup:function(f){if(f.target){this.setValue(f.target.type||"notSet")
}Y.call(this)
},commit:function(f){if(!f.target){f.target={}
}f.target.type=this.getValue()
}},{type:"text",id:"linkTargetName",label:Q.targetFrameName,"default":"",setup:function(f){if(f.target){this.setValue(f.target.name)
}},commit:function(f){if(!f.target){f.target={}
}f.target.name=this.getValue().replace(/\W/gi,"")
}}]},{type:"vbox",width:"100%",align:"center",padding:2,id:"popupFeatures",children:[{type:"fieldset",label:Q.popupFeatures,children:[{type:"hbox",children:[{type:"checkbox",id:"resizable",label:Q.popupResizable,setup:M,commit:c},{type:"checkbox",id:"status",label:Q.popupStatusBar,setup:M,commit:c}]},{type:"hbox",children:[{type:"checkbox",id:"location",label:Q.popupLocationBar,setup:M,commit:c},{type:"checkbox",id:"toolbar",label:Q.popupToolbar,setup:M,commit:c}]},{type:"hbox",children:[{type:"checkbox",id:"menubar",label:Q.popupMenuBar,setup:M,commit:c},{type:"checkbox",id:"fullscreen",label:Q.popupFullScreen,setup:M,commit:c}]},{type:"hbox",children:[{type:"checkbox",id:"scrollbars",label:Q.popupScrollBars,setup:M,commit:c},{type:"checkbox",id:"dependent",label:Q.popupDependent,setup:M,commit:c}]},{type:"hbox",children:[{type:"text",widths:["50%","50%"],labelLayout:"horizontal",label:S.width,id:"width",setup:M,commit:c},{type:"text",labelLayout:"horizontal",widths:["50%","50%"],label:Q.popupLeft,id:"left",setup:M,commit:c}]},{type:"hbox",children:[{type:"text",labelLayout:"horizontal",widths:["50%","50%"],label:S.height,id:"height",setup:M,commit:c},{type:"text",labelLayout:"horizontal",label:Q.popupTop,widths:["50%","50%"],id:"top",setup:M,commit:c}]}]}]}]},{id:"upload",label:Q.upload,title:Q.upload,hidden:true,filebrowser:"uploadButton",elements:[{type:"file",id:"upload",label:S.upload,style:"height:40px",size:29},{type:"fileButton",id:"uploadButton",label:S.uploadSubmit,filebrowser:"info:url","for":["upload","upload"]}]},{id:"advanced",label:Q.advanced,title:Q.advanced,elements:[{type:"vbox",padding:1,children:[{type:"hbox",widths:["45%","35%","20%"],children:[{type:"text",id:"advId",label:Q.id,setup:F,commit:D},{type:"select",id:"advLangDir",label:Q.langDir,"default":"",style:"width:110px",items:[[S.notSet,""],[Q.langDirLTR,"ltr"],[Q.langDirRTL,"rtl"]],setup:F,commit:D},{type:"text",id:"advAccessKey",width:"80px",label:Q.acccessKey,maxLength:1,setup:F,commit:D}]},{type:"hbox",widths:["45%","35%","20%"],children:[{type:"text",label:Q.name,id:"advName",setup:F,commit:D},{type:"text",label:Q.langCode,id:"advLangCode",width:"110px","default":"",setup:F,commit:D},{type:"text",label:Q.tabIndex,id:"advTabIndex",width:"80px",maxLength:5,setup:F,commit:D}]}]},{type:"vbox",padding:1,children:[{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:Q.advisoryTitle,"default":"",id:"advTitle",setup:F,commit:D},{type:"text",label:Q.advisoryContentType,"default":"",id:"advContentType",setup:F,commit:D}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:Q.cssClasses,"default":"",id:"advCSSClasses",setup:F,commit:D},{type:"text",label:Q.charset,"default":"",id:"advCharset",setup:F,commit:D}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:Q.rel,"default":"",id:"advRel",setup:F,commit:D},{type:"text",label:Q.styles,"default":"",id:"advStyles",validate:CKEDITOR.dialog.validate.inlineStyle(L.lang.common.invalidInlineStyle),setup:F,commit:D}]}]}]}],onShow:function(){var h=this.getParentEditor(),g=h.getSelection(),f=null;
if((f=I.getSelectedLink(h))&&f.hasAttribute("href")){g.selectElement(f)
}else{f=null
}this.setupContent(R.apply(this,[h,f]))
},onOk:function(){var p={},j=[],AG={},AF=this,l=this.getParentEditor();
this.commitContent(AG);
switch(AG.type||"url"){case"url":var u=(AG.url&&AG.url.protocol!=undefined)?AG.url.protocol:"http://",m=(AG.url&&CKEDITOR.tools.trim(AG.url.url))||"";
p["data-cke-saved-href"]=(m.indexOf("/")===0)?m:u+m;
break;
case"anchor":var AI=(AG.anchor&&AG.anchor.name),v=(AG.anchor&&AG.anchor.id);
p["data-cke-saved-href"]="#"+(AI||v||"");
break;
case"email":var h,x=AG.email,k=x.address;
switch(P){case"":case"encode":var n=encodeURIComponent(x.subject||""),q=encodeURIComponent(x.body||"");
var o=[];
n&&o.push("subject="+n);
q&&o.push("body="+q);
o=o.length?"?"+o.join("&"):"";
if(P=="encode"){h=["javascript:void(location.href='mailto:'+",V(k)];
o&&h.push("+'",Z(o),"'");
h.push(")")
}else{h=["mailto:",k,o]
}break;
default:var w=k.split("@",2);
x.name=w[0];
x.domain=w[1];
h=["javascript:",C(x)]
}p["data-cke-saved-href"]=h.join("");
break
}if(AG.target){if(AG.target.type=="popup"){var z=["window.open(this.href, '",AG.target.name||"","', '"];
var AD=["resizable","status","location","toolbar","menubar","fullscreen","scrollbars","dependent"];
var AE=AD.length;
var t=function(i){if(AG.target[i]){AD.push(i+"="+AG.target[i])
}};
for(var AB=0;
AB<AE;
AB++){AD[AB]=AD[AB]+(AG.target[AD[AB]]?"=yes":"=no")
}t("width");
t("left");
t("height");
t("top");
z.push(AD.join(","),"'); return false;");
p["data-cke-pa-onclick"]=z.join("");
j.push("target")
}else{if(AG.target.type!="notSet"&&AG.target.name){p.target=AG.target.name
}else{j.push("target")
}j.push("data-cke-pa-onclick","onclick")
}}if(AG.adv){var y=function(i,AJ){var AK=AG.adv[i];
if(AK){p[AJ]=AK
}else{j.push(AJ)
}};
y("advId","id");
y("advLangDir","dir");
y("advAccessKey","accessKey");
if(AG.adv.advName){p.name=p["data-cke-saved-name"]=AG.adv.advName
}else{j=j.concat(["data-cke-saved-name","name"])
}y("advLangCode","lang");
y("advTabIndex","tabindex");
y("advTitle","title");
y("advContentType","type");
y("advCSSClasses","class");
y("advCharset","charset");
y("advStyles","style");
y("advRel","rel")
}var AH=l.getSelection();
p.href=p["data-cke-saved-href"];
if(!this._.selectedElement){var g=AH.getRanges(true);
if(g.length==1&&g[0].collapsed){var s=new CKEDITOR.dom.text(AG.type=="email"?AG.email.address:p["data-cke-saved-href"],l.document);
g[0].insertNode(s);
g[0].selectNodeContents(s);
AH.selectRanges(g)
}var AC=new CKEDITOR.style({element:"a",attributes:p});
AC.type=CKEDITOR.STYLE_INLINE;
AC.apply(l.document)
}else{var f=this._.selectedElement,AA=f.data("cke-saved-href"),r=f.getHtml();
f.setAttributes(p);
f.removeAttributes(j);
if(AG.adv&&AG.adv.advName&&CKEDITOR.plugins.link.synAnchorSelector){f.addClass(f.getChildCount()?"cke_anchor":"cke_anchor_empty")
}if(AA==r||AG.type=="email"&&r.indexOf("@")!=-1){f.setHtml(AG.type=="email"?AG.email.address:p["data-cke-saved-href"])
}AH.selectElement(f);
delete this._.selectedElement
}},onLoad:function(){if(!L.config.linkShowAdvancedTab){this.hidePage("advanced")
}if(!L.config.linkShowTargetTab){this.hidePage("target")
}},onFocus:function(){var f=this.getContentElement("info","linkType"),g;
if(f&&f.getValue()=="url"){g=this.getContentElement("info","url");
g.select()
}}}
});