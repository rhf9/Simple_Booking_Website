function fn1(){
	     var results = "Your booking is done\n";
	     var rooms = document.getElementById("room");
	     results += "Number of rooms are "+rooms.options[rooms.selectedIndex].value+"\n";
	     var adult = document.getElementById("Adults");
	     results += "Number of adults are "+adult.options[adult.selectedIndex].value+"\n"
	     var children = document.getElementById("Children");
		 results += "Number of children are "+children.options[children.selectedIndex].value;
		alert(results);

}

function fn2(){
	var results1 = "Hello!\n";
	var email = document.getElementById("email");
	results1 += email.value+"\n";
	results1 += "You are logged in"
	alert(results1);
}

function fn3(){
    var results2 = "Hello!\n";
	var email1 = document.getElementById("email");
	results2 += email1.value+"\n";
	results2 += "You have signed up"
	alert(results2);
	}
