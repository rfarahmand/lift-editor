﻿;
if(typeof deconcept=="undefined"){var deconcept=new Object()
}if(typeof deconcept.util=="undefined"){deconcept.util=new Object()
}if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object()
}deconcept.SWFObject=function(K,B,L,D,H,I,F,E,C,J){if(!document.getElementById){return 
}this.DETECT_KEY=J?J:"detectflash";
this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);
this.params=new Object();
this.variables=new Object();
this.attributes=new Array();
if(K){this.setAttribute("swf",K)
}if(B){this.setAttribute("id",B)
}if(L){this.setAttribute("width",L)
}if(D){this.setAttribute("height",D)
}if(H){this.setAttribute("version",new deconcept.PlayerVersion(H.toString().split(".")))
}this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();
if(!window.opera&&document.all&&this.installedVer.major>7){deconcept.SWFObject.doPrepUnload=true
}if(I){this.addParam("bgcolor",I)
}var A=F?F:"high";
this.addParam("quality",A);
this.setAttribute("useExpressInstall",false);
this.setAttribute("doExpressInstall",false);
var G=(E)?E:window.location;
this.setAttribute("xiRedirectUrl",G);
this.setAttribute("redirectUrl","");
if(C){this.setAttribute("redirectUrl",C)
}};
deconcept.SWFObject.prototype={useExpressInstall:function(A){this.xiSWFPath=!A?"expressinstall.swf":A;
this.setAttribute("useExpressInstall",true)
},setAttribute:function(A,B){this.attributes[A]=B
},getAttribute:function(A){return this.attributes[A]
},addParam:function(B,A){this.params[B]=A
},getParams:function(){return this.params
},addVariable:function(B,A){this.variables[B]=A
},getVariable:function(A){return this.variables[A]
},getVariables:function(){return this.variables
},getVariablePairs:function(){var C=new Array();
var B;
var A=this.getVariables();
for(B in A){C[C.length]=B+"="+A[B]
}return C
},getSWFHTML:function(){var B="";
if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");
this.setAttribute("swf",this.xiSWFPath)
}B='<embed type="application/x-shockwave-flash" src="'+this.getAttribute("swf")+'" width="'+this.getAttribute("width")+'" height="'+this.getAttribute("height")+'" style="'+this.getAttribute("style")+'"';
B+=' id="'+this.getAttribute("id")+'" name="'+this.getAttribute("id")+'" ';
var F=this.getParams();
for(var E in F){B+=[E]+'="'+F[E]+'" '
}var D=this.getVariablePairs().join("&");
if(D.length>0){B+='flashvars="'+D+'"'
}B+="/>"
}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");
this.setAttribute("swf",this.xiSWFPath)
}B='<object id="'+this.getAttribute("id")+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+this.getAttribute("width")+'" height="'+this.getAttribute("height")+'" style="'+this.getAttribute("style")+'">';
B+='<param name="movie" value="'+this.getAttribute("swf")+'" />';
var C=this.getParams();
for(var E in C){B+='<param name="'+E+'" value="'+C[E]+'" />'
}var A=this.getVariablePairs().join("&");
if(A.length>0){B+='<param name="flashvars" value="'+A+'" />'
}B+="</object>"
}return B
},write:function(B){if(this.getAttribute("useExpressInstall")){var A=new deconcept.PlayerVersion([6,0,65]);
if(this.installedVer.versionIsValid(A)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);
this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));
document.title=document.title.slice(0,47)+" - Flash Player Installation";
this.addVariable("MMdoctitle",document.title)
}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var C=(typeof B=="string")?document.getElementById(B):B;
C.innerHTML=this.getSWFHTML();
return true
}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"))
}}return false
}};
deconcept.SWFObjectUtil.getPlayerVersion=function(){var E=new deconcept.PlayerVersion([0,0,0]);
if(navigator.plugins&&navigator.mimeTypes.length){var A=navigator.plugins["Shockwave Flash"];
if(A&&A.description){E=new deconcept.PlayerVersion(A.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."))
}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var B=1;
var C=3;
while(B){try{C++;
B=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+C);
E=new deconcept.PlayerVersion([C,0,0])
}catch(D){B=null
}}}else{try{var B=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
}catch(D){try{var B=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
E=new deconcept.PlayerVersion([6,0,21]);
B.AllowScriptAccess="always"
}catch(D){if(E.major==6){return E
}}try{B=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
}catch(D){}}if(B!=null){E=new deconcept.PlayerVersion(B.GetVariable("$version").split(" ")[1].split(","))
}}}return E
};
deconcept.PlayerVersion=function(A){this.major=A[0]!=null?parseInt(A[0]):0;
this.minor=A[1]!=null?parseInt(A[1]):0;
this.rev=A[2]!=null?parseInt(A[2]):0
};
deconcept.PlayerVersion.prototype.versionIsValid=function(A){if(this.major<A.major){return false
}if(this.major>A.major){return true
}if(this.minor<A.minor){return false
}if(this.minor>A.minor){return true
}if(this.rev<A.rev){return false
}return true
};
deconcept.util={getRequestParameter:function(C){var D=document.location.search||document.location.hash;
if(C==null){return D
}if(D){var B=D.substring(1).split("&");
for(var A=0;
A<B.length;
A++){if(B[A].substring(0,B[A].indexOf("="))==C){return B[A].substring((B[A].indexOf("=")+1))
}}}return""
}};
deconcept.SWFObjectUtil.cleanupSWFs=function(){var B=document.getElementsByTagName("OBJECT");
for(var C=B.length-1;
C>=0;
C--){B[C].style.display="none";
for(var A in B[C]){if(typeof B[C][A]=="function"){B[C][A]=function(){}
}}}};
if(deconcept.SWFObject.doPrepUnload){if(!deconcept.unloadSet){deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};
__flash_savedUnloadHandler=function(){};
window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs)
};
window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload);
deconcept.unloadSet=true
}}if(!document.getElementById&&document.all){document.getElementById=function(A){return document.all[A]
}
}var getQueryParamValue=deconcept.util.getRequestParameter;
var FlashObject=deconcept.SWFObject;
var SWFObject=deconcept.SWFObject;