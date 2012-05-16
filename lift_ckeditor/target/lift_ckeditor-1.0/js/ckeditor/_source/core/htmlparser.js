;
CKEDITOR.htmlParser=function(){this._={htmlPartsRegex:new RegExp("<(?:(?:\\/([^>]+)>)|(?:!--([\\S|\\s]*?)-->)|(?:([^\\s>]+)\\s*((?:(?:\"[^\"]*\")|(?:'[^']*')|[^\"'>])*)\\/?>))","g")}
};
(function(){var B=/([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g,A={checked:1,compact:1,declare:1,defer:1,disabled:1,ismap:1,multiple:1,nohref:1,noresize:1,noshade:1,nowrap:1,readonly:1,selected:1};
CKEDITOR.htmlParser.prototype={onTagOpen:function(){},onTagClose:function(){},onText:function(){},onCDATA:function(){},onComment:function(){},parse:function(H){var F,E,I=0,N;
while((F=this._.htmlPartsRegex.exec(H))){var L=F.index;
if(L>I){var O=H.substring(I,L);
if(N){N.push(O)
}else{this.onText(O)
}}I=this._.htmlPartsRegex.lastIndex;
if((E=F[1])){E=E.toLowerCase();
if(N&&CKEDITOR.dtd.$cdata[E]){this.onCDATA(N.join(""));
N=null
}if(!N){this.onTagClose(E);
continue
}}if(N){N.push(F[0]);
continue
}if((E=F[3])){E=E.toLowerCase();
if(/="/.test(E)){continue
}var C={},D,G=F[4],K=!!(G&&G.charAt(G.length-1)=="/");
if(G){while((D=B.exec(G))){var J=D[1].toLowerCase(),M=D[2]||D[3]||D[4]||"";
if(!M&&A[J]){C[J]=J
}else{C[J]=M
}}}this.onTagOpen(E,C,K);
if(!N&&CKEDITOR.dtd.$cdata[E]){N=[]
}continue
}if((E=F[2])){this.onComment(E)
}}if(H.length>I){this.onText(H.substring(I,H.length))
}}}
})();