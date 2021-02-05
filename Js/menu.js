function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function search_books() { 
	let input = document.getElementById('searchbar').value 
	input=input.toLowerCase(); 
	let x = document.getElementsByClassName('books'); 
	
	for (i = 0; i < x.length; i++) { 
		if (!x[i].innerHTML.toLowerCase().includes(input)) { 
			x[i].style.display="none"; 
		} 
		else { 
			x[i].style.display="list-item";				 
		} 
	} 
} 


function openNav2() {
  document.getElementById("mySidenav2").style.width = "250px";
  document.getElementById("main2").style.marginLeft = "250px";
}

function closeNav2() {
  document.getElementById("mySidenav2").style.width = "0";
  document.getElementById("main2").style.marginLeft = "0";
}

function search_books2() { 
	let input = document.getElementById('searchbar2').value 
	input=input.toLowerCase(); 
	let x = document.getElementsByClassName('books2'); 
	
	for (i = 0; i < x.length; i++) { 
		if (!x[i].innerHTML.toLowerCase().includes(input)) { 
			x[i].style.display="none"; 
		} 
		else { 
			x[i].style.display="list-item";				 
		} 
	} 
} 