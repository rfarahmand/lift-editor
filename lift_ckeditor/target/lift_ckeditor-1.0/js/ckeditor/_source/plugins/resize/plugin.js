;
CKEDITOR.plugins.add("resize",{init:function(E){var C=E.config;
var K=E.element.getDirection(1);
!C.resize_dir&&(C.resize_dir="both");
(C.resize_maxWidth==undefined)&&(C.resize_maxWidth=3000);
(C.resize_maxHeight==undefined)&&(C.resize_maxHeight=3000);
(C.resize_minWidth==undefined)&&(C.resize_minWidth=750);
(C.resize_minHeight==undefined)&&(C.resize_minHeight=250);
if(C.resize_enabled!==false){var B=null,H,J,F=(C.resize_dir=="both"||C.resize_dir=="horizontal")&&(C.resize_minWidth!=C.resize_maxWidth),A=(C.resize_dir=="both"||C.resize_dir=="vertical")&&(C.resize_minHeight!=C.resize_maxHeight);
function D(N){var O=N.data.$.screenX-H.x,M=N.data.$.screenY-H.y,Q=J.width,L=J.height,P=Q+O*(K=="rtl"?-1:1),R=L+M;
if(F){Q=Math.max(C.resize_minWidth,Math.min(P,C.resize_maxWidth))
}if(A){L=Math.max(C.resize_minHeight,Math.min(R,C.resize_maxHeight))
}E.resize(F?Q:null,L)
}function I(L){CKEDITOR.document.removeListener("mousemove",D);
CKEDITOR.document.removeListener("mouseup",I);
if(E.document){E.document.removeListener("mousemove",D);
E.document.removeListener("mouseup",I)
}}var G=CKEDITOR.tools.addFunction(function(L){if(!B){B=E.getResizable()
}J={width:B.$.offsetWidth||0,height:B.$.offsetHeight||0};
H={x:L.screenX,y:L.screenY};
C.resize_minWidth>J.width&&(C.resize_minWidth=J.width);
C.resize_minHeight>J.height&&(C.resize_minHeight=J.height);
CKEDITOR.document.on("mousemove",D);
CKEDITOR.document.on("mouseup",I);
if(E.document){E.document.on("mousemove",D);
E.document.on("mouseup",I)
}});
E.on("destroy",function(){CKEDITOR.tools.removeFunction(G)
});
E.on("themeSpace",function(L){if(L.data.space=="bottom"){var M="";
if(F&&!A){M=" cke_resizer_horizontal"
}if(!F&&A){M=" cke_resizer_vertical"
}var N='<div class="cke_resizer'+M+" cke_resizer_"+K+'" title="'+CKEDITOR.tools.htmlEncode(E.lang.resize)+'" onmousedown="CKEDITOR.tools.callFunction('+G+', event)"></div>';
K=="ltr"&&M=="ltr"?L.data.html+=N:L.data.html=N+L.data.html
}},E,null,100)
}}});