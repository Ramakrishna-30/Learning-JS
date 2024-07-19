//functions
 

function getcube(number){  
    alert(number*number*number); 

}
// functions expression

var add=new Function("num1","num2","return num1+num2");
document.writeln(add(2,5)+"<br>");
 

var pow=new Function("num1","num2","return Math.pow(num1,num2)");
document.writeln(pow(2,6)+"<br>"); 

function getInfo(){    //function with return value
    return "hello javatpoint! How r u?";
}
    document.write(getInfo());  




//DOM manipulations

const a=document.getElementById("company")
a.innerText = "Industry"

// const a=document.getElementById("company")
// a.innerHTML="New tittle"

// var myInfosys=document.getElementsByClassName("infosys")
// myInfosys.textcontent="Tech mahendhra"


var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
document.getElementById('txt').innerHTML=h+":"+m+":"+s;

function printvalue(){  
    var name=document.form1.name.value;  
    alert("Welcome: "+name);  
    }  



    function totalelements()  
    {  
    var allgenders=document.getElementsByName("gender");  
    alert("Total Genders:"+allgenders.length);  
    }  


    function countpara(){  
        var totalpara=document.getElementsByTagName("p");  
        alert("total p tags are: "+totalpara.length);  
          
        }  

        function showcommentform() {  
            var data="Name:<br><input type='text' name='name'><br>Comment:<br><textarea rows='5' cols='50'></textarea><br><input type='submit' value='comment'>";  
              
            document.getElementById('mylocation').innerHTML=data;  
             }  