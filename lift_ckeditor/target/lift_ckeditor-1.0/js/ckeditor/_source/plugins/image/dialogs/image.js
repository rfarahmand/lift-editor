(function(){var A=function(E,H){var D=1,L=2,M=4,a=8,P=/^\s*(\d+)((px)|\%)?\s*$/i,Z=/(^\s*(\d+)((px)|\%)?\s*$)|^$/i,K=/^\d+px$/;
var X=function(){var d=this.getValue(),c=this.getDialog(),b=d.match(P);
if(b){if(b[2]=="%"){U(c,false)
}d=b[1]
}if(c.lockRatio){var e=c.originalElement;
if(e.getCustomData("isReady")=="true"){if(this.id=="txtHeight"){if(d&&d!="0"){d=Math.round(e.$.width*(d/e.$.height))
}if(!isNaN(d)){c.setValueOf("info","txtWidth",d)
}}else{if(d&&d!="0"){d=Math.round(e.$.height*(d/e.$.width))
}if(!isNaN(d)){c.setValueOf("info","txtHeight",d)
}}}}R(c)
};
var R=function(b){if(!b.originalElement||!b.preview){return 1
}b.commitContent(M,b.preview);
return 0
};
function T(){var c=arguments;
var b=this.getContentElement("advanced","txtdlgGenStyle");
b&&b.commit.apply(b,c);
this.foreach(function(d){if(d.commit&&d.id!="txtdlgGenStyle"){d.commit.apply(d,c)
}})
}var N;
function Y(b){if(N){return 
}N=1;
var e=this.getDialog(),d=e.imageElement;
if(d){this.commit(D,d);
b=[].concat(b);
var f=b.length,g;
for(var c=0;
c<f;
c++){g=e.getContentElement.apply(e,b[c].split(":"));
g&&g.setup(D,d)
}}N=0
}var U=function(g,i){if(!g.getContentElement("info","ratioLock")){return null
}var e=g.originalElement;
if(!e){return null
}if(i=="check"){if(!g.userlockRatio&&e.getCustomData("isReady")=="true"){var c=g.getValueOf("info","txtWidth"),j=g.getValueOf("info","txtHeight"),f=e.$.width*1000/e.$.height,b=c*1000/j;
g.lockRatio=false;
if(!c&&!j){g.lockRatio=true
}else{if(!isNaN(f)&&!isNaN(b)){if(Math.round(f)==Math.round(b)){g.lockRatio=true
}}}}}else{if(i!=undefined){g.lockRatio=i
}else{g.userlockRatio=1;
g.lockRatio=!g.lockRatio
}}var d=CKEDITOR.document.getById(J);
if(g.lockRatio){d.removeClass("cke_btn_unlocked")
}else{d.addClass("cke_btn_unlocked")
}d.setAttribute("aria-checked",g.lockRatio);
if(CKEDITOR.env.hc){var h=d.getChild(0);
h.setHtml(g.lockRatio?CKEDITOR.env.ie?"\u25A0":"\u25A3":CKEDITOR.env.ie?"\u25A1":"\u25A2")
}return g.lockRatio
};
var I=function(b){var e=b.originalElement;
if(e.getCustomData("isReady")=="true"){var d=b.getContentElement("info","txtWidth"),c=b.getContentElement("info","txtHeight");
d&&d.setValue(e.$.width);
c&&c.setValue(e.$.height)
}R(b)
};
var O=function(e,d){if(e!=D){return 
}function h(k,i){var j=k.match(P);
if(j){if(j[2]=="%"){j[1]+="%";
U(c,false)
}return j[1]
}return i
}var c=this.getDialog(),f="",g=this.id=="txtWidth"?"width":"height",b=d.getAttribute(g);
if(b){f=h(b,f)
}f=h(d.getStyle(g),f);
this.setValue(f)
};
var B;
var W=function(){var b=this.originalElement;
b.setCustomData("isReady","true");
b.removeListener("load",W);
b.removeListener("error",G);
b.removeListener("abort",G);
CKEDITOR.document.getById(S).setStyle("display","none");
if(!this.dontResetSize){I(this)
}if(this.firstLoad){CKEDITOR.tools.setTimeout(function(){U(this,"check")
},0,this)
}this.firstLoad=false;
this.dontResetSize=false
};
var G=function(){var c=this.originalElement;
c.removeListener("load",W);
c.removeListener("error",G);
c.removeListener("abort",G);
var b=CKEDITOR.getUrl(E.skinPath+"images/noimage.png");
if(this.preview){this.preview.setAttribute("src",b)
}CKEDITOR.document.getById(S).setStyle("display","none");
U(this,false)
};
var V=function(b){return CKEDITOR.tools.getNextId()+"_"+b
},J=V("btnLockSizes"),Q=V("btnResetSize"),S=V("ImagePreviewLoader"),C=V("previewLink"),F=V("previewImage");
return{title:E.lang.image[H=="image"?"title":"titleButton"],minWidth:420,minHeight:360,onShow:function(){this.imageElement=false;
this.linkElement=false;
this.imageEditMode=false;
this.linkEditMode=false;
this.lockRatio=true;
this.userlockRatio=0;
this.dontResetSize=false;
this.firstLoad=true;
this.addLink=false;
var e=this.getParentEditor(),g=e.getSelection(),d=g&&g.getSelectedElement(),f=d&&d.getAscendant("a");
CKEDITOR.document.getById(S).setStyle("display","none");
B=new CKEDITOR.dom.element("img",e.document);
this.preview=CKEDITOR.document.getById(F);
this.originalElement=e.document.createElement("img");
this.originalElement.setAttribute("alt","");
this.originalElement.setCustomData("isReady","false");
if(f){this.linkElement=f;
this.linkEditMode=true;
var c=f.getChildren();
if(c.count()==1){var b=c.getItem(0).getName();
if(b=="img"||b=="input"){this.imageElement=c.getItem(0);
if(this.imageElement.getName()=="img"){this.imageEditMode="img"
}else{if(this.imageElement.getName()=="input"){this.imageEditMode="input"
}}}}if(H=="image"){this.setupContent(L,f)
}}if(d&&d.getName()=="img"&&!d.data("cke-realelement")||d&&d.getName()=="input"&&d.getAttribute("type")=="image"){this.imageEditMode=d.getName();
this.imageElement=d
}if(this.imageEditMode){this.cleanImageElement=this.imageElement;
this.imageElement=this.cleanImageElement.clone(true,true);
this.setupContent(D,this.imageElement)
}else{this.imageElement=e.document.createElement("img")
}U(this,true);
if(!CKEDITOR.tools.trim(this.getValueOf("info","txtUrl"))){this.preview.removeAttribute("src");
this.preview.setStyle("display","none")
}},onOk:function(){if(this.imageEditMode){var b=this.imageEditMode;
if(H=="image"&&b=="input"&&confirm(E.lang.image.button2Img)){b="img";
this.imageElement=E.document.createElement("img");
this.imageElement.setAttribute("alt","");
E.insertElement(this.imageElement)
}else{if(H!="image"&&b=="img"&&confirm(E.lang.image.img2Button)){b="input";
this.imageElement=E.document.createElement("input");
this.imageElement.setAttributes({type:"image",alt:""});
E.insertElement(this.imageElement)
}else{this.imageElement=this.cleanImageElement;
delete this.cleanImageElement
}}}else{if(H=="image"){this.imageElement=E.document.createElement("img")
}else{this.imageElement=E.document.createElement("input");
this.imageElement.setAttribute("type","image")
}this.imageElement.setAttribute("alt","")
}if(!this.linkEditMode){this.linkElement=E.document.createElement("a")
}this.commitContent(D,this.imageElement);
this.commitContent(L,this.linkElement);
if(!this.imageElement.getAttribute("style")){this.imageElement.removeAttribute("style")
}if(!this.imageEditMode){if(this.addLink){if(!this.linkEditMode){E.insertElement(this.linkElement);
this.linkElement.append(this.imageElement,false)
}else{E.insertElement(this.imageElement)
}}else{E.insertElement(this.imageElement)
}}else{if(!this.linkEditMode&&this.addLink){E.insertElement(this.linkElement);
this.imageElement.appendTo(this.linkElement)
}else{if(this.linkEditMode&&!this.addLink){E.getSelection().selectElement(this.linkElement);
E.insertElement(this.imageElement)
}}}},onLoad:function(){if(H!="image"){this.hidePage("Link")
}var b=this._.element.getDocument();
if(this.getContentElement("info","ratioLock")){this.addFocusable(b.getById(Q),5);
this.addFocusable(b.getById(J),5)
}this.commitContent=T
},onHide:function(){if(this.preview){this.commitContent(a,this.preview)
}if(this.originalElement){this.originalElement.removeListener("load",W);
this.originalElement.removeListener("error",G);
this.originalElement.removeListener("abort",G);
this.originalElement.remove();
this.originalElement=false
}delete this.imageElement
},contents:[{id:"info",label:E.lang.image.infoTab,accessKey:"I",elements:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["280px","110px"],align:"right",children:[{id:"txtUrl",type:"text",label:E.lang.common.url,required:true,onChange:function(){var d=this.getDialog(),e=this.getValue();
if(e.length>0){d=this.getDialog();
var c=d.originalElement;
d.preview.removeStyle("display");
c.setCustomData("isReady","false");
var b=CKEDITOR.document.getById(S);
if(b){b.setStyle("display","")
}c.on("load",W,d);
c.on("error",G,d);
c.on("abort",G,d);
c.setAttribute("src",e);
B.setAttribute("src",e);
d.preview.setAttribute("src",B.$.src);
R(d)
}else{if(d.preview){d.preview.removeAttribute("src");
d.preview.setStyle("display","none")
}}},setup:function(d,c){if(d==D){var b=c.data("cke-saved-src")||c.getAttribute("src");
var e=this;
this.getDialog().dontResetSize=true;
e.setValue(b);
e.setInitValue()
}},commit:function(c,b){if(c==D&&(this.getValue()||this.isChanged())){b.data("cke-saved-src",this.getValue());
b.setAttribute("src",this.getValue())
}else{if(c==a){b.setAttribute("src","");
b.removeAttribute("src")
}}},validate:CKEDITOR.dialog.validate.notEmpty(E.lang.image.urlMissing)},{type:"button",id:"browse",style:"display:inline-block;margin-top:10px;",align:"center",label:E.lang.common.browseServer,hidden:true,filebrowser:"info:txtUrl"}]}]},{id:"txtAlt",type:"text",label:E.lang.image.alt,accessKey:"T","default":"",onChange:function(){R(this.getDialog())
},setup:function(c,b){if(c==D){this.setValue(b.getAttribute("alt"))
}},commit:function(c,b){if(c==D){if(this.getValue()||this.isChanged()){b.setAttribute("alt",this.getValue())
}}else{if(c==M){b.setAttribute("alt",this.getValue())
}else{if(c==a){b.removeAttribute("alt")
}}}}},{type:"hbox",children:[{id:"basic",type:"vbox",children:[{type:"hbox",widths:["50%","50%"],children:[{type:"vbox",padding:1,children:[{type:"text",width:"40px",id:"txtWidth",label:E.lang.common.width,onKeyUp:X,onChange:function(){Y.call(this,"advanced:txtdlgGenStyle")
},validate:function(){var b=this.getValue().match(Z),c=!!(b&&parseInt(b[1],10)!==0);
if(!c){alert(E.lang.common.invalidWidth)
}return c
},setup:O,commit:function(e,d,c){var f=this.getValue();
if(e==D){if(f){d.setStyle("width",CKEDITOR.tools.cssLength(f))
}else{d.removeStyle("width")
}!c&&d.removeAttribute("width")
}else{if(e==M){var b=f.match(P);
if(!b){var g=this.getDialog().originalElement;
if(g.getCustomData("isReady")=="true"){d.setStyle("width",g.$.width+"px")
}}else{d.setStyle("width",CKEDITOR.tools.cssLength(f))
}}else{if(e==a){d.removeAttribute("width");
d.removeStyle("width")
}}}}},{type:"text",id:"txtHeight",width:"40px",label:E.lang.common.height,onKeyUp:X,onChange:function(){Y.call(this,"advanced:txtdlgGenStyle")
},validate:function(){var b=this.getValue().match(Z),c=!!(b&&parseInt(b[1],10)!==0);
if(!c){alert(E.lang.common.invalidHeight)
}return c
},setup:O,commit:function(e,d,c){var f=this.getValue();
if(e==D){if(f){d.setStyle("height",CKEDITOR.tools.cssLength(f))
}else{d.removeStyle("height")
}!c&&d.removeAttribute("height")
}else{if(e==M){var b=f.match(P);
if(!b){var g=this.getDialog().originalElement;
if(g.getCustomData("isReady")=="true"){d.setStyle("height",g.$.height+"px")
}}else{d.setStyle("height",CKEDITOR.tools.cssLength(f))
}}else{if(e==a){d.removeAttribute("height");
d.removeStyle("height")
}}}}}]},{id:"ratioLock",type:"html",style:"margin-top:30px;width:40px;height:40px;",onLoad:function(){var b=CKEDITOR.document.getById(Q),c=CKEDITOR.document.getById(J);
if(b){b.on("click",function(d){I(this);
d.data&&d.data.preventDefault()
},this.getDialog());
b.on("mouseover",function(){this.addClass("cke_btn_over")
},b);
b.on("mouseout",function(){this.removeClass("cke_btn_over")
},b)
}if(c){c.on("click",function(e){var f=U(this),h=this.originalElement,g=this.getValueOf("info","txtWidth");
if(h.getCustomData("isReady")=="true"&&g){var d=h.$.height/h.$.width*g;
if(!isNaN(d)){this.setValueOf("info","txtHeight",Math.round(d));
R(this)
}}e.data&&e.data.preventDefault()
},this.getDialog());
c.on("mouseover",function(){this.addClass("cke_btn_over")
},c);
c.on("mouseout",function(){this.removeClass("cke_btn_over")
},c)
}},html:'<div><a href="javascript:void(0)" tabindex="-1" title="'+E.lang.image.lockRatio+'" class="cke_btn_locked" id="'+J+'" role="checkbox"><span class="cke_icon"></span><span class="cke_label">'+E.lang.image.lockRatio+'</span></a><a href="javascript:void(0)" tabindex="-1" title="'+E.lang.image.resetSize+'" class="cke_btn_reset" id="'+Q+'" role="button"><span class="cke_label">'+E.lang.image.resetSize+"</span></a></div>"}]},{type:"vbox",padding:1,children:[{type:"text",id:"txtBorder",width:"60px",label:E.lang.image.border,"default":"",onKeyUp:function(){R(this.getDialog())
},onChange:function(){Y.call(this,"advanced:txtdlgGenStyle")
},validate:CKEDITOR.dialog.validate.integer(E.lang.image.validateBorder),setup:function(d,c){if(d==D){var e,b=c.getStyle("border-width");
b=b&&b.match(/^(\d+px)(?: \1 \1 \1)?$/);
e=b&&parseInt(b[1],10);
isNaN(parseInt(e,10))&&(e=c.getAttribute("border"));
this.setValue(e)
}},commit:function(d,c,b){var e=parseInt(this.getValue(),10);
if(d==D||d==M){if(!isNaN(e)){c.setStyle("border-width",CKEDITOR.tools.cssLength(e));
c.setStyle("border-style","solid")
}else{if(!e&&this.isChanged()){c.removeStyle("border-width");
c.removeStyle("border-style");
c.removeStyle("border-color")
}}if(!b&&d==D){c.removeAttribute("border")
}}else{if(d==a){c.removeAttribute("border");
c.removeStyle("border-width");
c.removeStyle("border-style");
c.removeStyle("border-color")
}}}},{type:"text",id:"txtHSpace",width:"60px",label:E.lang.image.hSpace,"default":"",onKeyUp:function(){R(this.getDialog())
},onChange:function(){Y.call(this,"advanced:txtdlgGenStyle")
},validate:CKEDITOR.dialog.validate.integer(E.lang.image.validateHSpace),setup:function(d,c){if(d==D){var f,e,h,b=c.getStyle("margin-left"),g=c.getStyle("margin-right");
b=b&&b.match(K);
g=g&&g.match(K);
e=parseInt(b,10);
h=parseInt(g,10);
f=(e==h)&&e;
isNaN(parseInt(f,10))&&(f=c.getAttribute("hspace"));
this.setValue(f)
}},commit:function(d,c,b){var e=parseInt(this.getValue(),10);
if(d==D||d==M){if(!isNaN(e)){c.setStyle("margin-left",CKEDITOR.tools.cssLength(e));
c.setStyle("margin-right",CKEDITOR.tools.cssLength(e))
}else{if(!e&&this.isChanged()){c.removeStyle("margin-left");
c.removeStyle("margin-right")
}}if(!b&&d==D){c.removeAttribute("hspace")
}}else{if(d==a){c.removeAttribute("hspace");
c.removeStyle("margin-left");
c.removeStyle("margin-right")
}}}},{type:"text",id:"txtVSpace",width:"60px",label:E.lang.image.vSpace,"default":"",onKeyUp:function(){R(this.getDialog())
},onChange:function(){Y.call(this,"advanced:txtdlgGenStyle")
},validate:CKEDITOR.dialog.validate.integer(E.lang.image.validateVSpace),setup:function(g,f){if(g==D){var h,b,d,c=f.getStyle("margin-top"),e=f.getStyle("margin-bottom");
c=c&&c.match(K);
e=e&&e.match(K);
b=parseInt(c,10);
d=parseInt(e,10);
h=(b==d)&&b;
isNaN(parseInt(h,10))&&(h=f.getAttribute("vspace"));
this.setValue(h)
}},commit:function(d,c,b){var e=parseInt(this.getValue(),10);
if(d==D||d==M){if(!isNaN(e)){c.setStyle("margin-top",CKEDITOR.tools.cssLength(e));
c.setStyle("margin-bottom",CKEDITOR.tools.cssLength(e))
}else{if(!e&&this.isChanged()){c.removeStyle("margin-top");
c.removeStyle("margin-bottom")
}}if(!b&&d==D){c.removeAttribute("vspace")
}}else{if(d==a){c.removeAttribute("vspace");
c.removeStyle("margin-top");
c.removeStyle("margin-bottom")
}}}},{id:"cmbAlign",type:"select",widths:["35%","65%"],style:"width:90px",label:E.lang.common.align,"default":"",items:[[E.lang.common.notSet,""],[E.lang.common.alignLeft,"left"],[E.lang.common.alignRight,"right"]],onChange:function(){R(this.getDialog());
Y.call(this,"advanced:txtdlgGenStyle")
},setup:function(c,b){if(c==D){var d=b.getStyle("float");
switch(d){case"inherit":case"none":d=""
}!d&&(d=(b.getAttribute("align")||"").toLowerCase());
this.setValue(d)
}},commit:function(d,c,b){var e=this.getValue();
if(d==D||d==M){if(e){c.setStyle("float",e)
}else{c.removeStyle("float")
}if(!b&&d==D){e=(c.getAttribute("align")||"").toLowerCase();
switch(e){case"left":case"right":c.removeAttribute("align")
}}}else{if(d==a){c.removeStyle("float")
}}}}]}]},{type:"vbox",height:"250px",children:[{type:"html",id:"htmlPreview",style:"width:95%;",html:"<div>"+CKEDITOR.tools.htmlEncode(E.lang.common.preview)+'<br><div id="'+S+'" class="ImagePreviewLoader" style="display:none"><div class="loading">&nbsp;</div></div><div class="ImagePreviewBox"><table><tr><td><a href="javascript:void(0)" target="_blank" onclick="return false;" id="'+C+'"><img id="'+F+'" alt="" /></a>'+(E.config.image_previewText||"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas feugiat consequat diam. Maecenas metus. Vivamus diam purus, cursus a, commodo non, facilisis vitae, nulla. Aenean dictum lacinia tortor. Nunc iaculis, nibh non iaculis aliquam, orci felis euismod neque, sed ornare massa mauris sed velit. Nulla pretium mi et risus. Fusce mi pede, tempor id, cursus ac, ullamcorper nec, enim. Sed tortor. Curabitur molestie. Duis velit augue, condimentum at, ultrices a, luctus ut, orci. Donec pellentesque egestas eros. Integer cursus, augue in cursus faucibus, eros pede bibendum sem, in tempus tellus justo quis ligula. Etiam eget tortor. Vestibulum rutrum, est ut placerat elementum, lectus nisl aliquam velit, tempor aliquam eros nunc nonummy metus. In eros metus, gravida a, gravida sed, lobortis id, turpis. Ut ultrices, ipsum at venenatis fringilla, sem nulla lacinia tellus, eget aliquet turpis mauris non enim. Nam turpis. Suspendisse lacinia. Curabitur ac tortor ut ipsum egestas elementum. Nunc imperdiet gravida mauris.")+"</td></tr></table></div></div>"}]}]}]},{id:"Link",label:E.lang.link.title,padding:0,elements:[{id:"txtUrl",type:"text",label:E.lang.common.url,style:"width: 100%","default":"",setup:function(d,c){if(d==L){var b=c.data("cke-saved-href");
if(!b){b=c.getAttribute("href")
}this.setValue(b)
}},commit:function(d,c){if(d==L){if(this.getValue()||this.isChanged()){var b=decodeURI(this.getValue());
c.data("cke-saved-href",b);
c.setAttribute("href",b);
if(this.getValue()||!E.config.image_removeLinkByEmptyURL){this.getDialog().addLink=true
}}}}},{type:"button",id:"browse",filebrowser:{action:"Browse",target:"Link:txtUrl",url:E.config.filebrowserImageBrowseLinkUrl},style:"float:right",hidden:true,label:E.lang.common.browseServer},{id:"cmbTarget",type:"select",label:E.lang.common.target,"default":"",items:[[E.lang.common.notSet,""],[E.lang.common.targetNew,"_blank"],[E.lang.common.targetTop,"_top"],[E.lang.common.targetSelf,"_self"],[E.lang.common.targetParent,"_parent"]],setup:function(c,b){if(c==L){this.setValue(b.getAttribute("target")||"")
}},commit:function(c,b){if(c==L){if(this.getValue()||this.isChanged()){b.setAttribute("target",this.getValue())
}}}}]},{id:"Upload",hidden:true,filebrowser:"uploadButton",label:E.lang.image.upload,elements:[{type:"file",id:"upload",label:E.lang.image.btnUpload,style:"height:40px",size:38},{type:"fileButton",id:"uploadButton",filebrowser:"info:txtUrl",label:E.lang.image.btnUpload,"for":["Upload","upload"]}]},{id:"advanced",label:E.lang.common.advancedTab,elements:[{type:"hbox",widths:["50%","25%","25%"],children:[{type:"text",id:"linkId",label:E.lang.common.id,setup:function(c,b){if(c==D){this.setValue(b.getAttribute("id"))
}},commit:function(c,b){if(c==D){if(this.getValue()||this.isChanged()){b.setAttribute("id",this.getValue())
}}}},{id:"cmbLangDir",type:"select",style:"width : 100px;",label:E.lang.common.langDir,"default":"",items:[[E.lang.common.notSet,""],[E.lang.common.langDirLtr,"ltr"],[E.lang.common.langDirRtl,"rtl"]],setup:function(c,b){if(c==D){this.setValue(b.getAttribute("dir"))
}},commit:function(c,b){if(c==D){if(this.getValue()||this.isChanged()){b.setAttribute("dir",this.getValue())
}}}},{type:"text",id:"txtLangCode",label:E.lang.common.langCode,"default":"",setup:function(c,b){if(c==D){this.setValue(b.getAttribute("lang"))
}},commit:function(c,b){if(c==D){if(this.getValue()||this.isChanged()){b.setAttribute("lang",this.getValue())
}}}}]},{type:"text",id:"txtGenLongDescr",label:E.lang.common.longDescr,setup:function(c,b){if(c==D){this.setValue(b.getAttribute("longDesc"))
}},commit:function(c,b){if(c==D){if(this.getValue()||this.isChanged()){b.setAttribute("longDesc",this.getValue())
}}}},{type:"hbox",widths:["50%","50%"],children:[{type:"text",id:"txtGenClass",label:E.lang.common.cssClass,"default":"",setup:function(c,b){if(c==D){this.setValue(b.getAttribute("class"))
}},commit:function(c,b){if(c==D){if(this.getValue()||this.isChanged()){b.setAttribute("class",this.getValue())
}}}},{type:"text",id:"txtGenTitle",label:E.lang.common.advisoryTitle,"default":"",onChange:function(){R(this.getDialog())
},setup:function(c,b){if(c==D){this.setValue(b.getAttribute("title"))
}},commit:function(c,b){if(c==D){if(this.getValue()||this.isChanged()){b.setAttribute("title",this.getValue())
}}else{if(c==M){b.setAttribute("title",this.getValue())
}else{if(c==a){b.removeAttribute("title")
}}}}}]},{type:"text",id:"txtdlgGenStyle",label:E.lang.common.cssStyle,validate:CKEDITOR.dialog.validate.inlineStyle(E.lang.common.invalidInlineStyle),"default":"",setup:function(f,d){if(f==D){var g=d.getAttribute("style");
if(!g&&d.$.style.cssText){g=d.$.style.cssText
}this.setValue(g);
var b=d.$.style.height,e=d.$.style.width,h=(b?b:"").match(P),c=(e?e:"").match(P);
this.attributesInStyle={height:!!h,width:!!c}
}},onChange:function(){Y.call(this,["info:cmbFloat","info:cmbAlign","info:txtVSpace","info:txtHSpace","info:txtBorder","info:txtWidth","info:txtHeight"]);
R(this)
},commit:function(c,b){if(c==D&&(this.getValue()||this.isChanged())){b.setAttribute("style",this.getValue())
}}}]}]}
};
CKEDITOR.dialog.add("image",function(B){return A(B,"image")
});
CKEDITOR.dialog.add("imagebutton",function(B){return A(B,"imagebutton")
})
})();