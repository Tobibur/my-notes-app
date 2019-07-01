(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,n){e.exports=n(39)},32:function(e,t,n){},33:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(20),c=n.n(r),l=n(6),s=(n(32),n(7)),i=n(8),u=n(10),m=n(9),p=n(11),h=n(5),d=(n(33),n(21)),f=n.n(d),v=n(22),E=n.n(v),N=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={query:""},n.updateQuery=function(e){n.setState({query:e.trim()})},n.clearQuery=function(){n.setState({query:""})},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=this,n=this.props,a=n.noteList,r=n.onDeleteNote,c=this.state.query;if(c){var s=new RegExp(f()(c),"i");e=a.filter(function(e){return s.test(e.title)})}else e=a;return e.sort(E()("name")),o.a.createElement("div",{className:"list-notes"},o.a.createElement("div",{className:"list-notes-top"},o.a.createElement("input",{className:"search-notes",type:"text",placeholder:"Search Notes",value:c,onChange:function(e){return t.updateQuery(e.target.value)}}),o.a.createElement(l.b,{to:"/create",className:"add-note"},"Add Note")),e.length!==a.length&&o.a.createElement("div",{className:"showing-notes"},o.a.createElement("span",null,"Now showing ",e.length," of ",a.length),o.a.createElement("button",{onClick:this.clearQuery},"Show all")),o.a.createElement("ol",{className:"note-list"},e.map(function(e){return o.a.createElement("li",{key:e.id,className:"note-list-item"},o.a.createElement("div",{className:"note-details"},o.a.createElement("h3",null,e.title),o.a.createElement("p",null,e.content)),o.a.createElement("button",{onClick:function(){return r(e)},className:"note-remove"},"Remove"))})))}}]),t}(a.Component),b=n(25),y=n.n(b),w=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).handleSubmit=function(e){e.preventDefault();var t=y()(e.target,{hash:!0});console.log(t),n.props.onCreateNote&&n.props.onCreateNote(t)},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(l.b,{to:"/",className:"close-create-note"},"Close"),o.a.createElement("div",{align:"center"},o.a.createElement("div",{className:"wrap-contact100"},o.a.createElement("form",{onSubmit:this.handleSubmit,className:"contact100-form validate-form"},o.a.createElement("span",{className:"contact100-form-title"},"Create New Note"),o.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Please enter your name"},o.a.createElement("input",{className:"input100",type:"text",name:"title",placeholder:"Note Title"}),o.a.createElement("span",{className:"focus-input100"})),o.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Please enter your message"},o.a.createElement("textarea",{className:"input100",name:"content",placeholder:"Write something.."}),o.a.createElement("span",{className:"focus-input100"})),o.a.createElement("div",{className:"container-contact100-form-btn"},o.a.createElement("button",{className:"contact100-form-btn"},"Add Note"))))))}}]),t}(a.Component),g=n(26),O=Object({NODE_ENV:"production",PUBLIC_URL:"/my-notes-app"}).REACT_APP_NOTES_API_URL||"https://tobis-notes.herokuapp.com",j={Accept:"application/json","Access-Control-Allow-Origin":"http://localhost:8080","Access-Control-Allow-Credentials":"true"},C=function(e){return fetch("".concat(O,"/api/notes/").concat(e.id),{method:"DELETE",headers:j}).then(function(e){return e})},A=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={notes:[]},n.removeNote=function(e){n.setState(function(t){return{notes:t.notes.filter(function(t){return t.id!==e.id})}}),C(e)},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(O,"/api/notes/"),{headers:j}).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({notes:t})})}},{key:"createNote",value:function(e){var t,n=this;(t=e,fetch("".concat(O,"/api/notes/"),{method:"POST",headers:Object(g.a)({},j,{"Content-Type":"application/json"}),body:JSON.stringify(t)}).then(function(e){return e.json()})).then(function(e){n.setState(function(t){return{notes:t.notes.concat([e])}})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement(h.a,{exact:!0,path:"/",render:function(){return o.a.createElement(N,{noteList:e.state.notes,onDeleteNote:e.removeNote})}}),o.a.createElement(h.a,{path:"/create",render:function(t){var n=t.history;return o.a.createElement(w,{onCreateNote:function(t){e.createNote(t),n.push("/")}})}}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(l.a,{basename:"/my-notes-app"},o.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.869d09ce.chunk.js.map