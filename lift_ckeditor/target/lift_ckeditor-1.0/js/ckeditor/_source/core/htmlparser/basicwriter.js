;
CKEDITOR.htmlParser.basicWriter=CKEDITOR.tools.createClass({$:function(){this._={output:[]}
},proto:{openTag:function(B,A){this._.output.push("<",B)
},openTagClose:function(A,B){if(B){this._.output.push(" />")
}else{this._.output.push(">")
}},attribute:function(B,A){if(typeof A=="string"){A=CKEDITOR.tools.htmlEncodeAttr(A)
}this._.output.push(" ",B,'="',A,'"')
},closeTag:function(A){this._.output.push("</",A,">")
},text:function(A){this._.output.push(A)
},comment:function(A){this._.output.push("<!--",A,"-->")
},write:function(A){this._.output.push(A)
},reset:function(){this._.output=[];
this._.indent=false
},getHtml:function(B){var A=this._.output.join("");
if(B){this.reset()
}return A
}}});