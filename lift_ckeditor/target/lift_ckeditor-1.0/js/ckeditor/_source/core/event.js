;
if(!CKEDITOR.event){CKEDITOR.event=function(){};
CKEDITOR.event.implementOn=function(A){var B=CKEDITOR.event.prototype;
for(var C in B){if(A[C]==undefined){A[C]=B[C]
}}};
CKEDITOR.event.prototype=(function(){var A=function(D){var C=(D.getPrivate&&D.getPrivate())||D._||(D._={});
return C.events||(C.events={})
};
var B=function(C){this.name=C;
this.listeners=[]
};
B.prototype={getListenerIndex:function(E){for(var C=0,D=this.listeners;
C<D.length;
C++){if(D[C].fn==E){return C
}}return -1
}};
return{on:function(G,J,F,M,K){var L=A(this),C=L[G]||(L[G]=new B(G));
if(C.getListenerIndex(J)<0){var I=C.listeners;
if(!F){F=this
}if(isNaN(K)){K=10
}var H=this;
var D=function(O,R,Q,N){var P={name:G,sender:this,editor:O,data:R,listenerData:M,stop:Q,cancel:N,removeListener:function(){H.removeListener(G,J)
}};
J.call(F,P);
return P.data
};
D.fn=J;
D.priority=K;
for(var E=I.length-1;
E>=0;
E--){if(I[E].priority<=K){I.splice(E+1,0,D);
return 
}}I.unshift(D)
}},fire:(function(){var F=false;
var E=function(){F=true
};
var C=false;
var D=function(){C=true
};
return function(L,H,M){var G=A(this)[L];
var P=F,J=C;
F=C=false;
if(G){var O=G.listeners;
if(O.length){O=O.slice(0);
for(var I=0;
I<O.length;
I++){var K=O[I].call(this,M,H,E,D);
if(typeof K!="undefined"){H=K
}if(F||C){break
}}}}var N=C||(typeof H=="undefined"?false:H);
F=P;
C=J;
return N
}
})(),fireOnce:function(C,F,E){var D=this.fire(C,F,E);
delete A(this)[C];
return D
},removeListener:function(C,F){var E=A(this)[C];
if(E){var D=E.getListenerIndex(F);
if(D>=0){E.listeners.splice(D,1)
}}},hasListeners:function(C){var D=A(this)[C];
return(D&&D.listeners.length>0)
}}
})()
};