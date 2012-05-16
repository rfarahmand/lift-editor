(function(){var A=function(a,Z){var Y=1,X=2,W=4,V=8,U=/^\s*(\d+)((px)|\%)?\s*$/i,T=/(^\s*(\d+)((px)|\%)?\s*$)|^$/i,S=/^\d+px$/,R=function(){var e=this.getValue(),d=this.getDialog(),c=e.match(U);
if(c){if(c[2]=="%"){M(d,false)
}e=c[1]
}if(d.lockRatio){var b=d.originalElement;
if(b.getCustomData("isReady")=="true"){if(this.id=="txtHeight"){if(e&&e!="0"){e=Math.round(b.$.width*(e/b.$.height))
}if(!isNaN(e)){d.setValueOf("info","txtWidth",e)
}}else{if(e&&e!="0"){e=Math.round(b.$.height*(e/b.$.width))
}if(!isNaN(e)){d.setValueOf("info","txtHeight",e)
}}}}Q(d)
},Q=function(b){if(!b.originalElement||!b.preview){return 1
}b.commitContent(W,b.preview);
return 0
};
function P(){var c=arguments,b=this.getContentElement("advanced","txtdlgGenStyle");
b&&b.commit.apply(b,c);
this.foreach(function(d){if(d.commit&&d.id!="txtdlgGenStyle"){d.commit.apply(d,c)
}})
}var O;
function N(g){if(O){return 
}O=1;
var f=this.getDialog(),e=f.imageElement;
if(e){this.commit(Y,e);
g=[].concat(g);
var d=g.length,c;
for(var b=0;
b<d;
b++){c=f.getContentElement.apply(f,g[b].split(":"));
c&&c.setup(Y,e)
}}O=0
}var M=function(d,c){if(!d.getContentElement("info","ratioLock")){return null
}var b=d.originalElement;
if(!b){return null
}if(c=="check"){if(!d.userlockRatio&&b.getCustomData("isReady")=="true"){var j=d.getValueOf("info","txtWidth"),i=d.getValueOf("info","txtHeight"),h=b.$.width*1000/b.$.height,g=j*1000/i;
d.lockRatio=false;
if(!j&&!i){d.lockRatio=true
}else{if(!isNaN(h)&&!isNaN(g)){if(Math.round(h)==Math.round(g)){d.lockRatio=true
}}}}}else{if(c!=undefined){d.lockRatio=c
}else{d.userlockRatio=1;
d.lockRatio=!d.lockRatio
}}var f=CKEDITOR.document.getById(E);
if(d.lockRatio){f.removeClass("cke_btn_unlocked")
}else{f.addClass("cke_btn_unlocked")
}f.setAttribute("aria-checked",d.lockRatio);
if(CKEDITOR.env.hc){var e=f.getChild(0);
e.setHtml(d.lockRatio?CKEDITOR.env.ie?"■":"▣":CKEDITOR.env.ie?"□":"▢")
}return d.lockRatio
},K=function(e){var d=e.originalElement;
if(d.getCustomData("isReady")=="true"){var c=e.getContentElement("info","txtWidth"),b=e.getContentElement("info","txtHeight");
c&&c.setValue(d.$.width);
b&&b.setValue(d.$.height)
}Q(e)
},J=function(h,g){if(h!=Y){return 
}function f(k,j){var i=k.match(U);
if(i){if(i[2]=="%"){i[1]+="%";
M(e,false)
}return i[1]
}return j
}var e=this.getDialog(),d="",c=this.id=="txtWidth"?"width":"height",b=g.getAttribute(c);
if(b){d=f(b,d)
}d=f(g.getStyle(c),d);
this.setValue(d)
},I,H=function(){var b=this.originalElement;
b.setCustomData("isReady","true");
b.removeListener("load",H);
b.removeListener("error",G);
b.removeListener("abort",G);
CKEDITOR.document.getById(C).setStyle("display","none");
if(!this.dontResetSize){K(this)
}if(this.firstLoad){CKEDITOR.tools.setTimeout(function(){M(this,"check")
},0,this)
}this.firstLoad=false;
this.dontResetSize=false
},G=function(){var b=this;
var d=b.originalElement;
d.removeListener("load",H);
d.removeListener("error",G);
d.removeListener("abort",G);
var c=CKEDITOR.getUrl(a.skinPath+"images/noimage.png");
if(b.preview){b.preview.setAttribute("src",c)
}CKEDITOR.document.getById(C).setStyle("display","none");
M(b,false)
},F=function(b){return CKEDITOR.tools.getNextId()+"_"+b
},E=F("btnLockSizes"),D=F("btnResetSize"),C=F("ImagePreviewLoader"),B=F("previewLink"),L=F("previewImage");
return{title:a.lang.image[Z=="image"?"title":"titleButton"],minWidth:420,minHeight:360,onShow:function(){var b=this;
b.imageElement=false;
b.linkElement=false;
b.imageEditMode=false;
b.linkEditMode=false;
b.lockRatio=true;
b.userlockRatio=0;
b.dontResetSize=false;
b.firstLoad=true;
b.addLink=false;
var h=b.getParentEditor(),g=h.getSelection(),f=g&&g.getSelectedElement(),e=f&&f.getAscendant("a");
CKEDITOR.document.getById(C).setStyle("display","none");
I=new CKEDITOR.dom.element("img",h.document);
b.preview=CKEDITOR.document.getById(L);
b.originalElement=h.document.createElement("img");
b.originalElement.setAttribute("alt","");
b.originalElement.setCustomData("isReady","false");
if(e){b.linkElement=e;
b.linkEditMode=true;
var d=e.getChildren();
if(d.count()==1){var c=d.getItem(0).getName();
if(c=="img"||c=="input"){b.imageElement=d.getItem(0);
if(b.imageElement.getName()=="img"){b.imageEditMode="img"
}else{if(b.imageElement.getName()=="input"){b.imageEditMode="input"
}}}}if(Z=="image"){b.setupContent(X,e)
}}if(f&&f.getName()=="img"&&!f.data("cke-realelement")||f&&f.getName()=="input"&&f.getAttribute("type")=="image"){b.imageEditMode=f.getName();
b.imageElement=f
}if(b.imageEditMode){b.cleanImageElement=b.imageElement;
b.imageElement=b.cleanImageElement.clone(true,true);
b.setupContent(Y,b.imageElement)
}else{b.imageElement=h.document.createElement("img")
}M(b,true);
if(!CKEDITOR.tools.trim(b.getValueOf("info","txtUrl"))){b.preview.removeAttribute("src");
b.preview.setStyle("display","none")
}},onOk:function(){var b=this;
if(b.imageEditMode){var c=b.imageEditMode;
if(Z=="image"&&c=="input"&&confirm(a.lang.image.button2Img)){c="img";
b.imageElement=a.document.createElement("img");
b.imageElement.setAttribute("alt","");
a.insertElement(b.imageElement)
}else{if(Z!="image"&&c=="img"&&confirm(a.lang.image.img2Button)){c="input";
b.imageElement=a.document.createElement("input");
b.imageElement.setAttributes({type:"image",alt:""});
a.insertElement(b.imageElement)
}else{b.imageElement=b.cleanImageElement;
delete b.cleanImageElement
}}}else{if(Z=="image"){b.imageElement=a.document.createElement("img")
}else{b.imageElement=a.document.createElement("input");
b.imageElement.setAttribute("type","image")
}b.imageElement.setAttribute("alt","")
}if(!b.linkEditMode){b.linkElement=a.document.createElement("a")
}b.commitContent(Y,b.imageElement);
b.commitContent(X,b.linkElement);
if(!b.imageElement.getAttribute("style")){b.imageElement.removeAttribute("style")
}if(!b.imageEditMode){if(b.addLink){if(!b.linkEditMode){a.insertElement(b.linkElement);
b.linkElement.append(b.imageElement,false)
}else{a.insertElement(b.imageElement)
}}else{a.insertElement(b.imageElement)
}}else{if(!b.linkEditMode&&b.addLink){a.insertElement(b.linkElement);
b.imageElement.appendTo(b.linkElement)
}else{if(b.linkEditMode&&!b.addLink){a.getSelection().selectElement(b.linkElement);
a.insertElement(b.imageElement)
}}}},onLoad:function(){var b=this;
if(Z!="image"){b.hidePage("Link")
}var c=b._.element.getDocument();
if(b.getContentElement("info","ratioLock")){b.addFocusable(c.getById(D),5);
b.addFocusable(c.getById(E),5)
}b.commitContent=P
},onHide:function(){var b=this;
if(b.preview){b.commitContent(V,b.preview)
}if(b.originalElement){b.originalElement.removeListener("load",H);
b.originalElement.removeListener("error",G);
b.originalElement.removeListener("abort",G);
b.originalElement.remove();
b.originalElement=false
}delete b.imageElement
},contents:[{id:"info",label:a.lang.image.infoTab,accessKey:"I",elements:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["280px","110px"],align:"right",children:[{id:"txtUrl",type:"text",label:a.lang.common.url,required:true,onChange:function(){var e=this.getDialog(),d=this.getValue();
if(d.length>0){e=this.getDialog();
var c=e.originalElement;
e.preview.removeStyle("display");
c.setCustomData("isReady","false");
var b=CKEDITOR.document.getById(C);
if(b){b.setStyle("display","")
}c.on("load",H,e);
c.on("error",G,e);
c.on("abort",G,e);
c.setAttribute("src",d);
I.setAttribute("src",d);
e.preview.setAttribute("src",I.$.src);
Q(e)
}else{if(e.preview){e.preview.removeAttribute("src");
e.preview.setStyle("display","none")
}}},setup:function(e,d){if(e==Y){var c=d.data("cke-saved-src")||d.getAttribute("src"),b=this;
this.getDialog().dontResetSize=true;
b.setValue(c);
b.setInitValue()
}},commit:function(d,c){var b=this;
if(d==Y&&(b.getValue()||b.isChanged())){c.data("cke-saved-src",b.getValue());
c.setAttribute("src",b.getValue())
}else{if(d==V){c.setAttribute("src","");
c.removeAttribute("src")
}}},validate:CKEDITOR.dialog.validate.notEmpty(a.lang.image.urlMissing)},{type:"button",id:"browse",style:"display:inline-block;margin-top:10px;",align:"center",label:a.lang.common.browseServer,hidden:true,filebrowser:"info:txtUrl"}]}]},{id:"txtAlt",type:"text",label:a.lang.image.alt,accessKey:"T","default":"",onChange:function(){Q(this.getDialog())
},setup:function(c,b){if(c==Y){this.setValue(b.getAttribute("alt"))
}},commit:function(d,c){var b=this;
if(d==Y){if(b.getValue()||b.isChanged()){c.setAttribute("alt",b.getValue())
}}else{if(d==W){c.setAttribute("alt",b.getValue())
}else{if(d==V){c.removeAttribute("alt")
}}}}},{type:"hbox",children:[{id:"basic",type:"vbox",children:[{type:"hbox",widths:["50%","50%"],children:[{type:"vbox",padding:1,children:[{type:"text",width:"40px",id:"txtWidth",label:a.lang.common.width,onKeyUp:R,onChange:function(){N.call(this,"advanced:txtdlgGenStyle")
},validate:function(){var c=this.getValue().match(T),b=!!(c&&parseInt(c[1],10)!==0);
if(!b){alert(a.lang.common.invalidWidth)
}return b
},setup:J,commit:function(g,f,e){var d=this.getValue();
if(g==Y){if(d){f.setStyle("width",CKEDITOR.tools.cssLength(d))
}else{f.removeStyle("width")
}!e&&f.removeAttribute("width")
}else{if(g==W){var c=d.match(U);
if(!c){var b=this.getDialog().originalElement;
if(b.getCustomData("isReady")=="true"){f.setStyle("width",b.$.width+"px")
}}else{f.setStyle("width",CKEDITOR.tools.cssLength(d))
}}else{if(g==V){f.removeAttribute("width");
f.removeStyle("width")
}}}}},{type:"text",id:"txtHeight",width:"40px",label:a.lang.common.height,onKeyUp:R,onChange:function(){N.call(this,"advanced:txtdlgGenStyle")
},validate:function(){var c=this.getValue().match(T),b=!!(c&&parseInt(c[1],10)!==0);
if(!b){alert(a.lang.common.invalidHeight)
}return b
},setup:J,commit:function(g,f,e){var d=this.getValue();
if(g==Y){if(d){f.setStyle("height",CKEDITOR.tools.cssLength(d))
}else{f.removeStyle("height")
}!e&&f.removeAttribute("height")
}else{if(g==W){var c=d.match(U);
if(!c){var b=this.getDialog().originalElement;
if(b.getCustomData("isReady")=="true"){f.setStyle("height",b.$.height+"px")
}}else{f.setStyle("height",CKEDITOR.tools.cssLength(d))
}}else{if(g==V){f.removeAttribute("height");
f.removeStyle("height")
}}}}}]},{id:"ratioLock",type:"html",style:"margin-top:30px;width:40px;height:40px;",onLoad:function(){var c=CKEDITOR.document.getById(D),b=CKEDITOR.document.getById(E);
if(c){c.on("click",function(d){K(this);
d.data&&d.data.preventDefault()
},this.getDialog());
c.on("mouseover",function(){this.addClass("cke_btn_over")
},c);
c.on("mouseout",function(){this.removeClass("cke_btn_over")
},c)
}if(b){b.on("click",function(i){var d=this;
var h=M(d),g=d.originalElement,f=d.getValueOf("info","txtWidth");
if(g.getCustomData("isReady")=="true"&&f){var e=g.$.height/g.$.width*f;
if(!isNaN(e)){d.setValueOf("info","txtHeight",Math.round(e));
Q(d)
}}i.data&&i.data.preventDefault()
},this.getDialog());
b.on("mouseover",function(){this.addClass("cke_btn_over")
},b);
b.on("mouseout",function(){this.removeClass("cke_btn_over")
},b)
}},html:'<div><a href="javascript:void(0)" tabindex="-1" title="'+a.lang.image.lockRatio+'" class="cke_btn_locked" id="'+E+'" role="checkbox"><span class="cke_icon"></span><span class="cke_label">'+a.lang.image.lockRatio+'</span></a><a href="javascript:void(0)" tabindex="-1" title="'+a.lang.image.resetSize+'" class="cke_btn_reset" id="'+D+'" role="button"><span class="cke_label">'+a.lang.image.resetSize+"</span></a></div>"}]},{type:"vbox",padding:1,children:[{type:"text",id:"txtBorder",width:"60px",label:a.lang.image.border,"default":"",onKeyUp:function(){Q(this.getDialog())
},onChange:function(){N.call(this,"advanced:txtdlgGenStyle")
},validate:CKEDITOR.dialog.validate.integer(a.lang.image.validateBorder),setup:function(e,d){if(e==Y){var c,b=d.getStyle("border-width");
b=b&&b.match(/^(\d+px)(?: \1 \1 \1)?$/);
c=b&&parseInt(b[1],10);
isNaN(parseInt(c,10))&&(c=d.getAttribute("border"));
this.setValue(c)
}},commit:function(e,d,c){var b=parseInt(this.getValue(),10);
if(e==Y||e==W){if(!isNaN(b)){d.setStyle("border-width",CKEDITOR.tools.cssLength(b));
d.setStyle("border-style","solid")
}else{if(!b&&this.isChanged()){d.removeStyle("border-width");
d.removeStyle("border-style");
d.removeStyle("border-color")
}}if(!c&&e==Y){d.removeAttribute("border")
}}else{if(e==V){d.removeAttribute("border");
d.removeStyle("border-width");
d.removeStyle("border-style");
d.removeStyle("border-color")
}}}},{type:"text",id:"txtHSpace",width:"60px",label:a.lang.image.hSpace,"default":"",onKeyUp:function(){Q(this.getDialog())
},onChange:function(){N.call(this,"advanced:txtdlgGenStyle")
},validate:CKEDITOR.dialog.validate.integer(a.lang.image.validateHSpace),setup:function(h,g){if(h==Y){var f,e,d,c=g.getStyle("margin-left"),b=g.getStyle("margin-right");
c=c&&c.match(S);
b=b&&b.match(S);
e=parseInt(c,10);
d=parseInt(b,10);
f=e==d&&e;
isNaN(parseInt(f,10))&&(f=g.getAttribute("hspace"));
this.setValue(f)
}},commit:function(e,d,c){var b=parseInt(this.getValue(),10);
if(e==Y||e==W){if(!isNaN(b)){d.setStyle("margin-left",CKEDITOR.tools.cssLength(b));
d.setStyle("margin-right",CKEDITOR.tools.cssLength(b))
}else{if(!b&&this.isChanged()){d.removeStyle("margin-left");
d.removeStyle("margin-right")
}}if(!c&&e==Y){d.removeAttribute("hspace")
}}else{if(e==V){d.removeAttribute("hspace");
d.removeStyle("margin-left");
d.removeStyle("margin-right")
}}}},{type:"text",id:"txtVSpace",width:"60px",label:a.lang.image.vSpace,"default":"",onKeyUp:function(){Q(this.getDialog())
},onChange:function(){N.call(this,"advanced:txtdlgGenStyle")
},validate:CKEDITOR.dialog.validate.integer(a.lang.image.validateVSpace),setup:function(h,g){if(h==Y){var f,e,d,c=g.getStyle("margin-top"),b=g.getStyle("margin-bottom");
c=c&&c.match(S);
b=b&&b.match(S);
e=parseInt(c,10);
d=parseInt(b,10);
f=e==d&&e;
isNaN(parseInt(f,10))&&(f=g.getAttribute("vspace"));
this.setValue(f)
}},commit:function(e,d,c){var b=parseInt(this.getValue(),10);
if(e==Y||e==W){if(!isNaN(b)){d.setStyle("margin-top",CKEDITOR.tools.cssLength(b));
d.setStyle("margin-bottom",CKEDITOR.tools.cssLength(b))
}else{if(!b&&this.isChanged()){d.removeStyle("margin-top");
d.removeStyle("margin-bottom")
}}if(!c&&e==Y){d.removeAttribute("vspace")
}}else{if(e==V){d.removeAttribute("vspace");
d.removeStyle("margin-top");
d.removeStyle("margin-bottom")
}}}},{id:"cmbAlign",type:"select",widths:["35%","65%"],style:"width:90px",label:a.lang.common.align,"default":"",items:[[a.lang.common.notSet,""],[a.lang.common.alignLeft,"left"],[a.lang.common.alignRight,"right"]],onChange:function(){Q(this.getDialog());
N.call(this,"advanced:txtdlgGenStyle")
},setup:function(d,c){if(d==Y){var b=c.getStyle("float");
switch(b){case"inherit":case"none":b=""
}!b&&(b=(c.getAttribute("align")||"").toLowerCase());
this.setValue(b)
}},commit:function(e,d,c){var b=this.getValue();
if(e==Y||e==W){if(b){d.setStyle("float",b)
}else{d.removeStyle("float")
}if(!c&&e==Y){b=(d.getAttribute("align")||"").toLowerCase();
switch(b){case"left":case"right":d.removeAttribute("align")
}}}else{if(e==V){d.removeStyle("float")
}}}}]}]},{type:"vbox",height:"250px",children:[{type:"html",id:"htmlPreview",style:"width:95%;",html:"<div>"+CKEDITOR.tools.htmlEncode(a.lang.common.preview)+'<br><div id="'+C+'" class="ImagePreviewLoader" style="display:none"><div class="loading">&nbsp;</div></div><div class="ImagePreviewBox"><table><tr><td><a href="javascript:void(0)" target="_blank" onclick="return false;" id="'+B+'"><img id="'+L+'" alt="" /></a>'+(a.config.image_previewText||"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas feugiat consequat diam. Maecenas metus. Vivamus diam purus, cursus a, commodo non, facilisis vitae, nulla. Aenean dictum lacinia tortor. Nunc iaculis, nibh non iaculis aliquam, orci felis euismod neque, sed ornare massa mauris sed velit. Nulla pretium mi et risus. Fusce mi pede, tempor id, cursus ac, ullamcorper nec, enim. Sed tortor. Curabitur molestie. Duis velit augue, condimentum at, ultrices a, luctus ut, orci. Donec pellentesque egestas eros. Integer cursus, augue in cursus faucibus, eros pede bibendum sem, in tempus tellus justo quis ligula. Etiam eget tortor. Vestibulum rutrum, est ut placerat elementum, lectus nisl aliquam velit, tempor aliquam eros nunc nonummy metus. In eros metus, gravida a, gravida sed, lobortis id, turpis. Ut ultrices, ipsum at venenatis fringilla, sem nulla lacinia tellus, eget aliquet turpis mauris non enim. Nam turpis. Suspendisse lacinia. Curabitur ac tortor ut ipsum egestas elementum. Nunc imperdiet gravida mauris.")+"</td></tr></table></div></div>"}]}]}]},{id:"Link",label:a.lang.link.title,padding:0,elements:[{id:"txtUrl",type:"text",label:a.lang.common.url,style:"width: 100%","default":"",setup:function(d,c){if(d==X){var b=c.data("cke-saved-href");
if(!b){b=c.getAttribute("href")
}this.setValue(b)
}},commit:function(e,d){var b=this;
if(e==X){if(b.getValue()||b.isChanged()){var c=decodeURI(b.getValue());
d.data("cke-saved-href",c);
d.setAttribute("href",c);
if(b.getValue()||!a.config.image_removeLinkByEmptyURL){b.getDialog().addLink=true
}}}}},{type:"button",id:"browse",filebrowser:{action:"Browse",target:"Link:txtUrl",url:a.config.filebrowserImageBrowseLinkUrl},style:"float:right",hidden:true,label:a.lang.common.browseServer},{id:"cmbTarget",type:"select",label:a.lang.common.target,"default":"",items:[[a.lang.common.notSet,""],[a.lang.common.targetNew,"_blank"],[a.lang.common.targetTop,"_top"],[a.lang.common.targetSelf,"_self"],[a.lang.common.targetParent,"_parent"]],setup:function(c,b){if(c==X){this.setValue(b.getAttribute("target")||"")
}},commit:function(c,b){if(c==X){if(this.getValue()||this.isChanged()){b.setAttribute("target",this.getValue())
}}}}]},{id:"Upload",hidden:true,filebrowser:"uploadButton",label:a.lang.image.upload,elements:[{type:"file",id:"upload",label:a.lang.image.btnUpload,style:"height:40px",size:38},{type:"fileButton",id:"uploadButton",filebrowser:"info:txtUrl",label:a.lang.image.btnUpload,"for":["Upload","upload"]}]},{id:"advanced",label:a.lang.common.advancedTab,elements:[{type:"hbox",widths:["50%","25%","25%"],children:[{type:"text",id:"linkId",label:a.lang.common.id,setup:function(c,b){if(c==Y){this.setValue(b.getAttribute("id"))
}},commit:function(c,b){if(c==Y){if(this.getValue()||this.isChanged()){b.setAttribute("id",this.getValue())
}}}},{id:"cmbLangDir",type:"select",style:"width : 100px;",label:a.lang.common.langDir,"default":"",items:[[a.lang.common.notSet,""],[a.lang.common.langDirLtr,"ltr"],[a.lang.common.langDirRtl,"rtl"]],setup:function(c,b){if(c==Y){this.setValue(b.getAttribute("dir"))
}},commit:function(c,b){if(c==Y){if(this.getValue()||this.isChanged()){b.setAttribute("dir",this.getValue())
}}}},{type:"text",id:"txtLangCode",label:a.lang.common.langCode,"default":"",setup:function(c,b){if(c==Y){this.setValue(b.getAttribute("lang"))
}},commit:function(c,b){if(c==Y){if(this.getValue()||this.isChanged()){b.setAttribute("lang",this.getValue())
}}}}]},{type:"text",id:"txtGenLongDescr",label:a.lang.common.longDescr,setup:function(c,b){if(c==Y){this.setValue(b.getAttribute("longDesc"))
}},commit:function(c,b){if(c==Y){if(this.getValue()||this.isChanged()){b.setAttribute("longDesc",this.getValue())
}}}},{type:"hbox",widths:["50%","50%"],children:[{type:"text",id:"txtGenClass",label:a.lang.common.cssClass,"default":"",setup:function(c,b){if(c==Y){this.setValue(b.getAttribute("class"))
}},commit:function(c,b){if(c==Y){if(this.getValue()||this.isChanged()){b.setAttribute("class",this.getValue())
}}}},{type:"text",id:"txtGenTitle",label:a.lang.common.advisoryTitle,"default":"",onChange:function(){Q(this.getDialog())
},setup:function(c,b){if(c==Y){this.setValue(b.getAttribute("title"))
}},commit:function(d,c){var b=this;
if(d==Y){if(b.getValue()||b.isChanged()){c.setAttribute("title",b.getValue())
}}else{if(d==W){c.setAttribute("title",b.getValue())
}else{if(d==V){c.removeAttribute("title")
}}}}}]},{type:"text",id:"txtdlgGenStyle",label:a.lang.common.cssStyle,validate:CKEDITOR.dialog.validate.inlineStyle(a.lang.common.invalidInlineStyle),"default":"",setup:function(h,g){if(h==Y){var f=g.getAttribute("style");
if(!f&&g.$.style.cssText){f=g.$.style.cssText
}this.setValue(f);
var e=g.$.style.height,d=g.$.style.width,c=(e?e:"").match(U),b=(d?d:"").match(U);
this.attributesInStyle={height:!!c,width:!!b}
}},onChange:function(){N.call(this,["info:cmbFloat","info:cmbAlign","info:txtVSpace","info:txtHSpace","info:txtBorder","info:txtWidth","info:txtHeight"]);
Q(this)
},commit:function(c,b){if(c==Y&&(this.getValue()||this.isChanged())){b.setAttribute("style",this.getValue())
}}}]}]}
};
CKEDITOR.dialog.add("image",function(B){return A(B,"image")
});
CKEDITOR.dialog.add("imagebutton",function(B){return A(B,"imagebutton")
})
})();