


let LogIn=()=>{
  let userType=prompt("Please input the User Name : ","Admin");


  if(userType.toLowerCase()=="admin"){

    let tryTimes=2;
    let correctPassword=false;

    let passWord=generatePassword();
    alert(`Your Password is : ${passWord}`);

    do{

      let password=prompt("Please input the Password : ");
      password=password.toLowerCase();


      if(password==passWord){
        correctPassword=true;
        alert("Welcome Administrator");
      }else{
        alert("Password is incorrect, Please try again");
      }


    }while(--tryTimes>0 && correctPassword==false);

    if(!correctPassword){
      alert("You have tried 2 times, Access Denied");
     }else{
      let age=prompt("Please input the Age :");
      age=parseInt(age);

      let yearOfAdmission=prompt("Please input the Year of Admission in NWP :");
      yearOfAdmission=parseInt(yearOfAdmission);

      let graduationYear=2025+(4-(2025-yearOfAdmission));
      let graduationAge=age+(4-(2025-yearOfAdmission));

      alert(`You will receive the Bachlor's Degree in ${graduationYear} at the age of ${graduationAge}`);
     }
   

  }else if(userType.toLowerCase()=="designer"){

    let tryTimes=3;
    let correctPassword=false;

    do{

      let password=prompt("Please input the Password : ");
      password=password.toLowerCase();


      if(password=="111"){
        correctPassword=true;
        alert("Welcome Designer");
      }else{
        alert("Password is incorrect, Please try again");
      }


    }while(--tryTimes>0 && correctPassword==false);

    if(!correctPassword){
      alert("You have tried 3 times, Access Denied");
    }else{
      let availablePortfolio=prompt("Please input the available number of Portfolio :");
      availablePortfolio=parseInt(availablePortfolio);

      let birthYear=prompt("Please input the Birth Year :");
      birthYear=parseInt(birthYear);
      let age=2025-birthYear;

      if((age>=14&&age<=18)&&(availablePortfolio>=5&&availablePortfolio<=10)){
        alert("You are given a 10% discount on an optional course on Adobe XD");
      }else if((age>18)&&(availablePortfolio>=10&&availablePortfolio<=20)){
        alert("You are given a 7% discount on an optional course on Adobe XD");
      }
    }


  }else if(userType.toLowerCase()=="tester"){
    
    let tryTimes=3;
    let correctPassword=false;

    do{

      let password=prompt("Please input the Password : ");
      password=password.toLowerCase();


      if(password=="222"){
        correctPassword=true;
        alert("Welcome Tester");
      }else{
        alert("Password is incorrect, Please try again");
      }


    }while(--tryTimes>0 && correctPassword==false);

    if(!correctPassword){
      alert("You have tried 3 times, Access Denied");
    }else{
      let availablePortfolio=prompt("Please input the available number of Portfolio :");
      availablePortfolio=parseInt(availablePortfolio);

      let birthYear=prompt("Please input the Birth Year :");
      birthYear=parseInt(birthYear);
      let age=2025-birthYear;

      if((age>=14&&age<=18)&&(availablePortfolio>=5&&availablePortfolio<=10)){
        alert("You are given a 10% discount on QA Pro course");
      }else if((age>18)&&(availablePortfolio>=10&&availablePortfolio<=20)){
        alert("You are given a 7% discount on QA Pro course");
      }
    }


  }else{
  alert("There's no such a user");}
}


let generatePassword=()=>{  
  let result = '';  
  for (let i = 0; i < 6; i++) {  
      const digit = Math.floor(Math.random() * 10);  
      result += digit.toString();  
  }  
  return result;  
}  