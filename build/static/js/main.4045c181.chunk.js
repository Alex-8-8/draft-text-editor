(this["webpackJsonpreact-text-editor"]=this["webpackJsonpreact-text-editor"]||[]).push([[0],{189:function(e,n,t){},190:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(45),l=t.n(o),i=t(47),c=t(17),u=t(18),s=t(19);function f(){var e=Object(u.a)(["\nwidth: 75px;\nheight: 25px;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nmargin-right: 10px;\nborder: 1px solid #34495e;\nbackground-color: #fff;\nfont-size: 16px;\nfont-family: Oxygen, sans-serif;\ntransition: all 0.3s ease-in-out;\ncursor: pointer;\n\n","\n    \n&:hover {\n  transform: translateY(1px);\n  background-color: #9bc1f7;\n  border: none;\n  box-shadow: 0 1px 11px 1px rgba(15, 15, 15, 0.2);\n}\n"]);return f=function(){return e},e}function d(){var e=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  padding: 7px;\n  margin-bottom: 8px;\n"]);return d=function(){return e},e}function p(){var e=Object(u.a)(["\n  min-height: 9em;\n  border-radius: 0 0 3px 3px;\n  background-color: #fff;\n  padding: 5px;\n  margin: 10px 0;\n  font-size: 17px;\n  font-weight: 300;\n  box-shadow: 0 0 3px 1px rgba(15, 15, 15, 0.17);\n"]);return p=function(){return e},e}function x(){var e=Object(u.a)(["\n  display: flex;\n  min-height: 9em;\n  border-radius: 0 0 3px 3px;\n  background-color: #fff;\n  padding: 5px;\n  margin: 10px 0;\n  font-size: 17px;\n  font-weight: 300;\n  box-shadow: 0 0 3px 1px rgba(15, 15, 15, 0.17);\n"]);return x=function(){return e},e}function b(){var e=Object(u.a)(["\n  width: 1000px;\n  display: flex;\n  height: fit-content;\n  flex-direction: column;\n  margin-top: 3em;\n"]);return b=function(){return e},e}var m=s.a.div(b()),g=s.a.div(x()),y=s.a.div(p()),h=s.a.div(d()),E=s.a.div(f(),(function(e){return e.isActive&&"transform: translateY(1px);\n    background-color: #9bc1f7;\n    box-shadow: none;\n    border: none;\n    box-shadow: 0 1px 11px 1px rgba(15, 15, 15, 0.2);"})),v=[{label:"bold",style:"BOLD"},{label:"italic",style:"ITALIC"},{label:"pink-bg",style:"PINK"},{label:"red-text",style:"DARK_RED"},{label:"big-fsize",style:"FONT_SIZE"}],S={PINK:{backgroundColor:"#f8bbd0"},DARK_RED:{color:"#880e4f"},FONT_SIZE:{fontSize:"32px"}};function k(e){var n=e.editorState,t=e.updateEditorState;return r.a.createElement(h,null,v.map((function(e,a){return r.a.createElement(E,{isActive:(o=e.style,n.getCurrentInlineStyle().has(o)),key:"".concat(e.label,"-").concat(a),onClick:function(){return function(e){t(c.RichUtils.toggleInlineStyle(n,e))}(e.style)}},e.label);var o})))}t(189);function O(){var e=Object(a.useState)(c.EditorState.createEmpty()),n=Object(i.a)(e,2),t=n[0],o=n[1],l=Object(a.useState)(null),u=Object(i.a)(l,2),s=u[0],f=u[1];return r.a.createElement(m,null,r.a.createElement(k,{editorState:t,updateEditorState:o}),r.a.createElement(g,null,r.a.createElement(c.Editor,{placeholder:"Enter you text...",editorState:t,onChange:o,customStyleMap:S})),r.a.createElement(E,{onClick:function(){return function(){var e=Object(c.convertToRaw)(t.getCurrentContent());f(e)}()}},"ToJSON"),r.a.createElement(y,null,s&&s.blocks.map((function(e){return r.a.createElement("div",{key:e.key},r.a.createElement("span",{className:"mainText"},"text:"," ",e.text,";"),e.inlineStyleRanges.map((function(n){return r.a.createElement("div",{key:"".concat(e.key,"-").concat(n.offset,"-").concat(n.style)},r.a.createElement("p",null,"Styled text:"," ",e.text.slice(n.offset,n.length+n.offset),";"),r.a.createElement("span",null,"Style:"," ",n.style,", "),r.a.createElement("span",null,"Styled length:"," ",n.length,", "),r.a.createElement("span",null,"Styled offset:"," ",n.offset,";"))})))}))))}l.a.render(r.a.createElement(O,null),document.getElementById("root"))},90:function(e,n,t){e.exports=t(190)}},[[90,1,2]]]);
//# sourceMappingURL=main.4045c181.chunk.js.map