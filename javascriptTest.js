class Employee {
  constructor(firstName, LastName, Salary) {
    this.firstName = firstName;
    this.LastName = LastName;
	this.Salary = Salary;
  }
  
   viewEmployee(){
	   console.log('First Name: ' + this.firstName + ' Last Name: ' + this.LastName + ' Salary: ' + this.Salary)
   }
   
   changeSalary(value) {
    return this.Salary + value ;
  }
}

MultiplyBy(value){
	if (value == 0 || value == 1)	return value;

	let f = 1;
	for (i=value; i<=n; i++) {
		f = f * value;
	}
	
	return f; 
}

longestCountryName(arr){
	let longest = [];
    let length = 0;
	
    for(var i =0; i < arr.length; i++){
      if(length < arr[i].length)
		  length = arr[i].length;      
    }
	
    for(var j =0; j < arr.length; j++){
      if(arr[j].length == length)
         longest.push(arr[j]);      
    }
	
   if(longest.length == 1)
     return longest[0]   
   else 
	 return longest  
}

removecolor(){
	var colors = document.getElementById('colorSelect');
	colors.options[shipList.selectedIndex].remove();
}

insert_Row(){
	var table = document.getElementById('sampleTable');
	var row = document.createElement('TR');
	table.tBodies[0].appendChild(row)
}