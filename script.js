//your code here

document.getElementById("addTodoBtn").addEventListener("click",(e)=>{
	e.preventDefault;
	let input = document.getElementById('newTodoInput').value.trim();
	if(input == ""){
		alert("Please enter a To-Do Event");
		return;
	}
	const li = document.createElement("li");
	li.innerText = input;
	document.getElementById("todoList").appendChild(li);
	document.getElementById('newTodoInput').value = "";
})