
const submitBtn = document.getElementById("submitform");
const name = document.getElementById('inputName4');
const email = document.getElementById('inputEmail4');
const number = document.getElementById('inputNumber4');
const DOB = document.getElementById('inputDONB4')
const city = document.getElementById('inputCity4');
const state = document.getElementById('inputState');
const condition = document.getElementById('gridCheck');
function validateData(){
    // input field name validation start
        if(name.value == ''){
            alert("Please enter your name.");
            name.focus();
            return false;
        }
        if(name.value.length < 3){
            alert("Name contain atleast 3 characters.");
            name.focus();
            return false;
        }
        const regexOfName = new RegExp(/^([\w]{3,})+\s+([\w\s]{3,})+$/i);
        if(regexOfName.test(name.value) == false){
            alert("Invalid Name !!!");
            name.focus();
            return false;
        }
        // input field name validation end

        // input field email validation start
       if(email.value==""){
        alert("Please enter your Email id.");
            email.focus();
            return false;
       }
       const regexEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
       if(regexEmail.test(email.value) == false){
         alert("Invalid Email id.");
        email.focus();
        return false;
       }
        
       // input field email validation end
       // input field number validation start
       
       if(number.value == ""){
            alert("Please enter your Phone Number.");
            number.focus();
            return false;
       }
       // input field number validation end
       // input field DOB validation start

       if(DOB.value ==""){
        alert("Please enter your Date Of Birth.");
        DOB.focus();
        return false;
       }
       const DOBPatten = new RegExp(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/);
       if(DOBPatten.test(DOB.value) == false){
        alert("invalid Date Of Birth.");
        DOB.focus();
        return false;
       }
       // input field DOB validation end
       // input field city Name validation start
       
       if(city.value ==""){
        alert("Please enter your city name.");
        city.focus();
        return false;
       }
       const cityRexgex = new RegExp(/^(\w){3,20}$/);
       if(cityRexgex.test(city.value) == false){
        alert("Please enter a valid city name.");
        city.focus();
        return false;
       }
        // input field city Name validation end
         // input field State Name validation start
       console.log(state.value);
       if(state.value == ""){
        
        alert("Please select your stare name.");
        state.focus();
        return false;
       }
       // input field State Name validation end
       // input checkbox validation start
       console.log(condition.checked );
       if(condition.checked == false){
        alert("checkbox is blank.");
        condition.focus();
        return false;
       }
         // input checkbox validation end
       
}
function updatePno(e){
    const ac = e.keyCode;
    if(!(ac == 8 || ac == 127) && (ac < 48 || ac > 57)){
		return false;	
    }
    else{
		return true;	
	}
}
