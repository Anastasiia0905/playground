/*function onFocus(e){
	if(e.value != " "){(e.value = " ")};
	if(e.id == "Password" || e.id == "Password2"){(e.type = "password")}
};*/
/*function onBlur(e){
	if(e.value == " "){(e.value = e.defaultValue)};
	if(e.id == "Password" || e.id == "Password2"){(e.type = "text")}
};*/
function openForm(evt, formId){
			var i, formcontent, formlink;
			formcontent = document.getElementsByClassName("formcontent");
			for(i=0; i < formcontent.length; i++){
				formcontent[i].style.display = "none";
			}
			formlink = document.getElementsByClassName("formlink");
			for(i = 0; i < formlink.length; i++){
				formlink[i].className = formlink[i].className.replace("active", "");
			}
			document.getElementById(formId).style.display = "flex";
			evt.currentTarget.className += " active";

			
		}
document.getElementById("defaultOpen").click();

// cd Documents/wtf/playground
// gulp watch

// к примеру 
// http://localhost:3000/katas/digitalRoot.html


// http://localhost:3000/layouts/form.html

// // basic flow
// git status
// git diff 
// git add --all
// git status
// git commit -m "some your comment"
// git status
// git push


// // brancher
// git checkout -b "new_branch"
// git branch