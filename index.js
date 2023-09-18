
const inputSlider = document.querySelector("[data-lengthSlider]");
console.log(inputSlider);
const lengthDisplay = document.getElementById("data-lengthNumber");
console.log(lengthDisplay);
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = "!@#$%^&*()_+-=[]{}|;':,.<>?";



let password= "";
let passwordLength = 10;
let checkCount = 0;



//set strength circle to grey

//set password kenght
function handleSlider() {

        inputSlider.value = passwordLength;
        lengthDisplay.innerText = passwordLength;
}

handleSlider();

function setIndicator(color) {
       
        indicator.style.backgroundColor = color;
        indicator.style.boxshadow = "5px 5px 10px color";
}

function getRndInteger (min, max){
      return Math.floor( Math.random()*(max-min)) + min;
       //0+min   max-min+min = min  to   max range.
}

function generateRndNumber() {
        return getRndInteger(0,9);
}

function generateLowercase() {
        return String.fromCharCode(getRndInteger(97,123)) ;
        //string.fromcharcode changes integer to alpahabets
}

function generateUpercase() {
        return String.fromCharCode(getRndInteger(65,91)) ;
        //string.fromcharcode changes integer to alpahabets
}

function generateSymbol() {
        const randNum = getRndInteger(0,symbols.length);
        return symbols.charAt(randNum);
}

function calcStrength() {
        let hasUpper = false;
        let hasLower = false; 
        let hasNum = false;
        let hasSym = false;
        if (uppercaseCheck.checked) hasUpper = true;
        //.checked property to check box is ticked or not 
        if (lowercaseCheck.checked) hasLower = true;
        if (numbersCheck.checked) hasNum = true;
        if (symbolsCheck.checked) hasSym = true;

        if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength >=8) {
                setIndicator("#0f0");
        } else if (
                (hasLower || hasUpper) &&
                (hasNum || hasSym) &&
                passwordLength >= 6
        ) {
                setIndicator("#ff0");
        } else {
                setIndicator ("#f00");
        }

}

async function copyContent() {
        try{
                await navigator.clipboard.writeText(passwordDisplay.value);
                copyMsg.innerText = "copied";
        }
        catch(e){
                copyMsg.innerText = "failed";
        }

        copyMsg.classList.add("active");

        setTimeout ( () => {
                copyMsg.classList.remove("active");
        }, 2000);
      
}

function shufflePassword(array) {
        // fisher yate method
        for (let i=array.length-1; i>0; i--){
                const j = Math.floor(Math.random() * (i + 1));
                const temp = array[i];
                array[i] = array [j];
                array[j] = temp;
        }

        let str = "";
        array.forEach((el) => (str += el));
        return str;


}

function handleCheckBoxChange(){
        checkCount = 0;
        allCheckBox.forEach((checkbox) => {
                if(checkbox.checked)
                        checkCount++;
        });

        if(passwordLength < checkCount)
                passwordLength = checkCount;
                handleSlider();
}

allCheckBox.forEach((checkbox) => {
        checkbox.addEventListener('change', handleCheckBoxChange);
})


inputSlider.addEventListener('input', (e) => {
        passwordLength = e.target.value;
        handleSlider();
})

copyBtn.addEventListener('click', () =>{
        if(passwordDisplay.value)
                copyContent();


})

generateBtn.addEventListener("click" , () =>{
        //none of the checkbox are selected

        if(checkCount ==0) return;

        if(passwordLength < checkCount){
                passwordLength = checkCount;
                handleSlider();
        }

        //newpassword geenratiom 
        //remove old password

        password="";

        //lets put the stuff mentioned by checkboxes

        // if(uppercaseCheck.checked){
        //         password += generateUpercase();
        // }

        // if(lowercaseCheck.checked){
        //         password += generateLowercase();
        // }

        // if(numbersCheck.checked){
        //         password += generateRndNumber();
        // }

        // if(symbolsCheck.checked){
        //         password += generateSymbol();
        // }

        let funcArr = [];

        if(uppercaseCheck.checked)
                funcArr.push(generateUpercase);

         if(lowercaseCheck.checked)
                funcArr.push(generateLowercase);

         if(numbersCheck.checked)
                funcArr.push(generateRndNumber);

        if(symbolsCheck.checked)
                funcArr.push(generateSymbol);

        //complussory addition 

        for(let i=0; i<funcArr.length; i++) {
                password += funcArr[i]();
        }

        //remaining addition 

        for(let i=0; i<passwordLength-funcArr.length; i++){
                let randIndex = getRndInteger(0,funcArr.length);
                password += funcArr[randIndex]();
        }

        //suffle the password 

        password = shufflePassword(Array.from(password));

        //show in ui

        passwordDisplay.value = password;

        //calculate strngth

        calcStrength();

})