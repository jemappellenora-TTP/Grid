(this.webpackJsonpdom=this.webpackJsonpdom||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(6),r=n.n(l),c=(n(12),n(1)),s=n(2),i=n(4),u=n(3);var m=function(e){return o.a.createElement("td",{onClick:e.onClickChange})},h=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).createCells=function(){for(var t=[],n=0;n<e.props.cells;n++)t.push(o.a.createElement(m,{onClickChange:e.props.onClickChange}));return t},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("tr",null,this.createCells())}}]),n}(a.Component),d=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).addRows=function(){e.setState({rows:e.state.rows+1})},e.addCollumns=function(){e.setState({cells:e.state.cells+1})},e.removeRows=function(){e.state.rows>0?e.setState({rows:e.state.rows-1}):e.setState({rows:0,cells:1})},e.removeCollumns=function(){e.state.cells>0?e.setState({cells:e.state.cells-1}):e.setState({cells:1,rows:0})},e.selectacolor=function(t){e.setState({selectedColor:t.target.value})},e.onClickChange=function(t){t.target.style.backgroundColor=e.state.selectedColor},e.createRows=function(){for(var t=[],n=0;n<e.state.rows;n++)t.push(o.a.createElement(h,{cells:e.state.cells,onClickChange:e.onClickChange}));return t},e.state={rows:0,cells:1,defaultColor:"white",selectedColor:null},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"buttons"},o.a.createElement("button",{onClick:this.addRows},"Add a row"),o.a.createElement("button",{onClick:this.addCollumns},"Add a cells"),o.a.createElement("button",{onClick:this.removeRows},"Remove a row"),o.a.createElement("button",{onClick:this.removeCollumns},"Remove a cells")),o.a.createElement("span",null,"Select A color:"),o.a.createElement("select",{onChange:this.selectacolor},o.a.createElement("option",{value:this.state.defaultColor},"Please select a Color"),o.a.createElement("option",{value:"Blue"},"Blue"),o.a.createElement("option",{value:"green"},"Green"),o.a.createElement("option",{value:"orange"},"Orange"),o.a.createElement("option",{value:"yellow"},"Yellow")),o.a.createElement("table",null,this.createRows()))}}]),n}(a.Component),C=(n(13),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement(d,null)}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.de0f07b2.chunk.js.map