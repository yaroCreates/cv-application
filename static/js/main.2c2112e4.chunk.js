(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(11),i=a.n(l),s=a(6),d=a(7),r=a(3),o=a(9),h=a(8),j=a(4),u=a(2),b=a(0);var m=function(e){var t=e.personal,a=e.handleChange;return Object(b.jsxs)("section",{children:[Object(b.jsx)("p",{className:"pp",children:"Provide your personal information"}),Object(b.jsxs)("div",{className:"field-field",children:[Object(b.jsxs)("div",{className:"field-row",children:[Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"First Name"}),Object(b.jsx)("input",{type:"text",name:"firstName",className:"text-input",placeholder:"First name",autoComplete:"off",value:t.firstName,onChange:a})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"Middle Name"}),Object(b.jsx)("input",{type:"text",name:"middleName",className:"text-input",placeholder:"Middle name",autoComplete:"off",value:t.middleName,onChange:a})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"Last Name"}),Object(b.jsx)("input",{type:"text",name:"lastName",className:"text-input",placeholder:"Last name",autoComplete:"off",value:t.lastName,onChange:a})]})]}),Object(b.jsxs)("div",{className:"field-row",children:[Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"Address"}),Object(b.jsx)("textarea",{name:"address",rows:"5",cols:"20",placeholder:"Enter address",autoComplete:"off",value:t.address,onChange:a})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"Phone Number"}),Object(b.jsx)("input",{type:"text",name:"phone",className:"text-input",placeholder:"Phone Number",autoComplete:"off",value:t.phone,onChange:a})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"Email"}),Object(b.jsx)("input",{type:"text",name:"email",className:"text-input",placeholder:"Email",autoComplete:"off",value:t.email,onChange:a})]})]})]})]})};var p=function(e){var t=e.id,a=e.education,n=e.handleChange,c=e.handleAdd,l=e.handleDelete,i=e.isLast;return Object(b.jsxs)("div",{className:"field-field",children:[Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"Institution Name"}),Object(b.jsx)("input",{type:"text",name:"schoolName",className:"text-input",placeholder:"Institution Name",autoComplete:"off",value:a.schoolName,onChange:function(e){return n(e,t)}})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"Location"}),Object(b.jsx)("input",{type:"text",name:"schoolCity",className:"text-input",placeholder:"Location",autoComplete:"off",value:a.schoolCity,onChange:function(e){return n(e,t)}})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"Degree"}),Object(b.jsx)("input",{type:"text",name:"titleOfStudy",className:"text-input",placeholder:"Degree",autoComplete:"off",value:a.titleOfStudy,onChange:function(e){return n(e,t)}})]}),Object(b.jsxs)("div",{className:"double-field",children:[Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"From"}),Object(b.jsx)("input",{type:"text",name:"from",className:"text-input",placeholder:"From",autoComplete:"off",value:a.from,onChange:function(e){return n(e,t)}})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"To"}),Object(b.jsx)("input",{type:"text",name:"to",className:"text-input",placeholder:"To",autoComplete:"off",value:a.to,onChange:function(e){return n(e,t)}})]})]}),Object(b.jsxs)("div",{className:"buttons",children:[i?Object(b.jsx)("button",{className:"add-btn",onClick:c,children:"+ Add Education"}):null,Object(b.jsx)("button",{className:"delete-btn",onClick:function(){return l(t)},children:"Delete"})]})]})};var x=function(e){var t=e.education,a=e.handleChange,n=e.handleAdd,c=e.handleDelete,l=t.map((function(e,l){return Object(b.jsx)(p,{id:e.id,education:e,handleChange:a,handleAdd:n,handleDelete:c,isLast:l===t.length-1},e.id)}));return Object(b.jsxs)("section",{className:"education",children:[Object(b.jsx)("p",{className:"pp2",children:"Provide education history"}),0===t.length?Object(b.jsx)("div",{className:"buttons",children:Object(b.jsx)("button",{className:"add-btn",onClick:n,children:"+ Add Education"})}):null,l]})};var O=function(e){var t=e.experience,a=e.id,n=e.handleChange,c=e.handleAdd,l=e.handleDelete,i=e.isLast;return Object(b.jsxs)("div",{className:"field-field",children:[Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"Company"}),Object(b.jsx)("input",{type:"text",name:"companyName",className:"text-input",placeholder:"Company name",autoComplete:"off",value:t.companyName,onChange:function(e){return n(e,a)}})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"Position"}),Object(b.jsx)("input",{type:"text",name:"positionTitle",className:"text-input",placeholder:"Position",autoComplete:"off",value:t.positionTitle,onChange:function(e){return n(e,a)}})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"Location"}),Object(b.jsx)("input",{type:"text",name:"location",className:"text-input",placeholder:"Location",autoComplete:"off",value:t.location,onChange:function(e){return n(e,a)}})]}),Object(b.jsxs)("div",{className:"double-field",children:[Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"From"}),Object(b.jsx)("input",{type:"text",name:"from",className:"text-input",placeholder:"From",autoComplete:"off",value:t.from,onChange:function(e){return n(e,a)}})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"To"}),Object(b.jsx)("input",{type:"text",name:"to",className:"text-input",placeholder:"To",autoComplete:"off",value:t.to,onChange:function(e){return n(e,a)}})]})]}),Object(b.jsxs)("div",{className:"buttons",children:[i?Object(b.jsx)("button",{className:"add-btn",onClick:c,children:"+ Add Experience"}):null,Object(b.jsx)("button",{className:"delete-btn",onClick:function(){return l(a)},children:"Delete"})]})]})};var f=function(e){var t=e.experience,a=e.handleChange,n=e.handleAdd,c=e.handleDelete;console.log(t,e);var l=t.map((function(e,l){return Object(b.jsx)(O,{id:e.id,experience:e,handleChange:a,handleAdd:n,handleDelete:c,isLast:l===t.length-1},e.id)}));return Object(b.jsxs)("section",{className:"experience",children:[Object(b.jsx)("p",{className:"pp2",children:"Provide experience history"}),0===t.length?Object(b.jsx)("div",{className:"buttons",children:Object(b.jsx)("button",{className:"btn add-btn",onClick:n,children:"Add"})}):null,l]})};var v=function(e){var t=e.personal,a=e.handleChangePersonal,n=e.education,c=e.handleChangeEducation,l=e.handleAddEducation,i=e.handleDeleteEducation,s=e.experience,d=e.handleChangeExperience,r=e.handleAddExperience,o=e.handleDeleteExperience;return Object(b.jsxs)("div",{className:"cv-form",children:[Object(b.jsx)(m,{personal:t,handleChange:a}),Object(b.jsx)(x,{education:n,handleChange:c,handleAdd:l,handleDelete:i}),Object(b.jsx)(f,{experience:s,handleChange:d,handleAdd:r,handleDelete:o})]})},N=a(5),C=a.n(N);var g=function(){return Object(b.jsxs)("div",{className:"heading",children:[Object(b.jsx)("h1",{children:"CV Application"}),Object(b.jsx)("h4",{children:"The Odion Project: React.JS"})]})};var E=function(e){var t=e.education;return Object(b.jsxs)("div",{className:"block",children:[Object(b.jsxs)("div",{className:"time-interval",children:[t.from.trim(),"-",t.to.trim()]}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("p",{children:t.schoolName.trim()}),Object(b.jsx)("p",{children:t.schoolCity.trim()}),Object(b.jsx)("p",{children:t.titleOfStudy.trim()})]})]})};var y=function(e){var t=e.experience;return Object(b.jsxs)("div",{className:"block",children:[Object(b.jsxs)("div",{className:"time-interval",children:[t.from.trim(),"-",t.to.trim()]}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("p",{children:t.positionTitle.trim()}),Object(b.jsx)("p",{children:t.companyName.trim()}),Object(b.jsx)("p",{children:t.location.trim()})]})]})};var A=function(e){var t=e.personal;return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsxs)("h2",{children:[t.firstName.trim()," ",t.middleName.trim()," ",t.lastName.trim()]}),Object(b.jsx)("p",{children:t.address.trim()}),Object(b.jsx)("p",{children:t.phone.trim()}),Object(b.jsx)("p",{children:t.email.trim()})]})};var D=function(e){var t=e.personal,a=e.education,n=e.experience,c=a.map((function(e){return Object(b.jsx)(E,{education:e},e.id)})),l=n.map((function(e){return Object(b.jsx)(y,{experience:e},e.id)}));return Object(b.jsxs)("div",{className:"preview",children:[Object(b.jsx)(A,{personal:t}),Object(b.jsxs)("div",{className:"preview-main",children:[Object(b.jsxs)("section",{className:"preview-section",children:[Object(b.jsx)("h3",{className:"title",children:"Education"}),c]}),Object(b.jsxs)("section",{className:"preview-section",children:[Object(b.jsx)("h3",{className:"title",children:"Experience"}),l]})]})]})},k={firstName:"",middleName:"",lastName:"",address:"",phone:"",email:""},P={schoolName:"",schoolCity:"",titleOfStudy:"",from:"",to:""},S={companyName:"",positionTitle:"",location:"",from:"",to:""},L=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={personal:Object(u.a)({},k),edu:[Object(u.a)(Object(u.a)({},P),{},{id:C()()})],exp:[Object(u.a)(Object(u.a)({},S),{},{id:C()()})],flip:!1},e.handleChangePersonal=e.handleChangePersonal.bind(Object(r.a)(e)),e.handleChangeEducation=e.handleChangeEducation.bind(Object(r.a)(e)),e.handleAddEducation=e.handleAddEducation.bind(Object(r.a)(e)),e.handleDeleteEducation=e.handleDeleteEducation.bind(Object(r.a)(e)),e.handleChangeExperience=e.handleChangeExperience.bind(Object(r.a)(e)),e.handleAddExperience=e.handleAddExperience.bind(Object(r.a)(e)),e.handleDeleteExperience=e.handleDeleteExperience.bind(Object(r.a)(e)),e}return Object(d.a)(a,[{key:"handleChangePersonal",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState({personal:Object(u.a)(Object(u.a)({},this.state.personal),{},Object(j.a)({},a,n))})}},{key:"handleChangeEducation",value:function(e,t){var a=e.target,n=a.name,c=a.value,l=this.state.edu.map((function(e){return e.id===t?Object(u.a)(Object(u.a)({},e),{},Object(j.a)({},n,c)):e}));this.setState({edu:l})}},{key:"handleAddEducation",value:function(){var e=Object(u.a)(Object(u.a)({},P),{},{id:C()()});this.setState({edu:this.state.edu.concat(e)})}},{key:"handleDeleteEducation",value:function(e){var t=this.state.edu.filter((function(t){return t.id!==e}));this.setState({edu:t})}},{key:"handleChangeExperience",value:function(e,t){var a=e.target,n=a.name,c=a.value,l=this.state.exp.map((function(e){return e.id===t?Object(u.a)(Object(u.a)({},e),{},Object(j.a)({},n,c)):e}));this.setState({exp:l})}},{key:"handleAddExperience",value:function(){var e=Object(u.a)(Object(u.a)({},S),{},{id:C()()});this.setState({exp:this.state.exp.concat(e)})}},{key:"handleDeleteExperience",value:function(e){var t=this.state.exp.filter((function(t){return t.id!==e}));this.setState({exp:t})}},{key:"render",value:function(){return Object(b.jsx)("main",{children:Object(b.jsxs)("div",{className:"the-space",children:[Object(b.jsxs)("div",{className:"left",children:[Object(b.jsx)(g,{}),Object(b.jsx)(v,{personal:this.state.personal,handleChangePersonal:this.handleChangePersonal,education:this.state.edu,handleChangeEducation:this.handleChangeEducation,handleAddEducation:this.handleAddEducation,handleDeleteEducation:this.handleDeleteEducation,experience:this.state.exp,handleChangeExperience:this.handleChangeExperience,handleAddExperience:this.handleAddExperience,handleDeleteExperience:this.handleDeleteExperience})]}),Object(b.jsx)("div",{className:"right",children:Object(b.jsx)(D,{personal:this.state.personal,education:this.state.edu,experience:this.state.exp})})]})})}}]),a}(c.a.Component),w=(a(18),function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={flip:!1},e.handleFlip=e.handleFlip.bind(Object(r.a)(e)),e}return Object(d.a)(a,[{key:"handleFlip",value:function(){this.setState({flip:!this.state.flip})}},{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)(L,{flip:this.state.flip})})}}]),a}(c.a.Component));i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.2c2112e4.chunk.js.map