const e=document.querySelector(".feedback-form");e.addEventListener("input",(function(e){t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))})),e.addEventListener("submit",(function(e){e.preventDefault(),void 0!==t.email&&(console.log("you click"),console.log(t.email),void 0!==t.message&&console.log(t.message),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset())}));let t={};if(localStorage.getItem("feedback-form-state")){const e=localStorage.getItem("feedback-form-state");t=JSON.parse(e)}localStorage.getItem("feedback-form-state")&&(void 0!==t.email&&(e[0].value=t.email),void 0!==t.message&&(e[1].value=t.message));
//# sourceMappingURL=03-feedback.eb637680.js.map
