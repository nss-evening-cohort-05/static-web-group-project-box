


var employeeListElement = document.getElementById("employeeList");
var listString = employeeListElement.innerHTML;
var empPicture = 
listString += addEmployee("bryan.jpg", "Bryan Miller", " President & CEO", "<a href='#'>Bryan.Miller@BoxProduct.com</a>");
listString += addEmployee("katherine.jpg", "Katherine Tuter", "VP Systems Development", "<a href='#'>Katherine.Tuter@BoxProduct.com</a>");
listString += addEmployee("simmon.jpg", "Latasha Simmons", "Chief Financial Officer", "<a href='#'>Latasha.Simmons@BoxProduct.com</a>");
listString += addEmployee("bao.jpg", "Bao Nguyen", "VP IT Services", "<a href='#'>Bao.Nguyen@BoxProduct.com</a>");
listString += addEmployee("Kevin.jpg", "Kevin Hayman", "Distribution Specialist", "<a href='#'>Kevin.Hayman@BoxProduct.com</a>");
listString += addEmployee("Lonnie.jpg", "Lonnie Robinson", "Sr. Account Executive", "<a href='#'>Lonnie.Robinson@BoxProduct.com</a>");
listString += addEmployee("molly.jpg", "Molly Bradfield", "Supervisor Operations", "<a href='#'>Molly.Bradfield@BoxProduct.com</a>");



employeeListElement.innerHTML = listString;

function addEmployee (empPicture, name, title, email)
{
	return "<li><img src='../js/picture/"+ empPicture + "'>" + "<span>" + name + "</span><br>" + title + "<br>" + email + "</li>";
}

