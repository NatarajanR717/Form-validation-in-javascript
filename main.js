const slidePage = document.querySelector(".slidepage");
const loginForm = document.forms.loginforms;
const fromEl = document.forms.signupform;
const loginEmail = document.getElementById("emaillogin");
const loginPassword = document.getElementById("password");
const checkBox = document.getElementById("keeplogin");
const loginSubmitBtn = document.querySelector(".submit-btn");
const registerBtn = document.querySelector("#showsignup");
const signinBtn = document.querySelector("#showwrapper");
const firstNextBtn = document.querySelector(".nextBtn");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnsec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
const forms = document.querySelector(".forms");
const links = document.querySelectorAll(".link");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const mobileNumber = document.getElementById("mobilenumber");
const sslcPercent = document.getElementById("sslcpercent");
const hscPercent = document.getElementById('hscpercent');
const degreePercent = document.getElementById("degreepercent");
const streetAddress = document.getElementById("streetaddress");
const zipCode = document.getElementById("zipcode");
let max = 4;
let current = 1;




firstNextBtn.addEventListener("click",(e) =>{
   e.preventDefault();
   const firstNameValue = firstName.value.trim();
   const lastNameValue = lastName.value.trim();
   const emailValue = email.value.trim();
   const mobileNumberValue = mobileNumber.value.trim();


   // if(firstNameValue === "" || lastNameValue === "" || emailValue === "" || mobileNumberValue === ""){
   //    setError1(firstName,"Firstname can't be blank");
   //    setError1(lastName,"Lastname can't be blank");
   //    setError1(email,"Email can't be blank");
   //    setError1(mobileNumber,"Mobilenumber can't be blank");
   // }
   if(firstNameValue === "" || firstNameValue.length <3){
      setError1(firstName,"Firstname can't be blank");
   }
   else if(lastNameValue === ""){
      setError1(lastName,"Lastname can't be blank");
   }
   else if(emailValue === "" || !(isEmail(emailValue))){
      setError1(email,"Email can't be blank");
   }
   else if(mobileNumberValue === "" || !(isPhone(mobileNumberValue))){
      setError1(mobileNumber,"Mobilenumber can't be blank");
   }
   else{
   setSuccess1(firstName);
   setSuccess1(lastName);
   setSuccess1(email);
   setSuccess1(mobileNumber);
   slidePage.style.marginLeft = "-25%";
   bullet[current -1].classList.add("active");
   progressCheck[current -1].classList.add("active");
   current += 1;
   }

   function isEmail(email){
      return /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/.test(email);
   }
   function isPhone(mobileNumber){
      return /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(mobileNumber);
   }
   function setError1(input,message){
      const fieldControl = input.parentElement;
      const small = fieldControl.querySelector("small");
      fieldControl.className = "field error"
      small.innerText = message;
   } 
   
   function setSuccess1(input){
      const fieldControl = input.parentElement;
      fieldControl.className = 'field success';
   }
});
function setError1(input,message){
   const fieldControl = input.parentElement;
   const small = fieldControl.querySelector("small");
   fieldControl.className = "field error"
   small.innerText = message;
} 

function setSuccess1(input){
   const fieldControl = input.parentElement;
   fieldControl.className = 'field success';
}

firstName.addEventListener("input", () =>{
   const firstNameValue = firstName.value.trim();
   if(firstNameValue.length >=3){
      setSuccess1(firstName);
   }
   else if(firstNameValue === ""){
      setError1(firstName,"Firstname can't be blank")
   }
   else{
      setError1(firstName,"Firstname must be a 3 charecter");
   }
})

lastName.addEventListener("input", () =>{
   const lastNameValue = lastName.value.trim();
   if(lastNameValue.length >=1){
      setSuccess1(lastName);
   }
   else if(lastNameValue === ""){
      setError1(lastName,"Lastname can't be blank");
   }
})

email.addEventListener("input", () =>{
   const emailValue = email.value.trim();
   let pattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
   if(emailValue.match(pattern)){
      setSuccess1(email);
   }
   else if(emailValue === ""){
      setError1(email,"Email can't be blank");
   }
   else{
      setError1(email,"must be provide a valid email");
   }
})

mobileNumber.addEventListener("input", () =>{
   const mobileNumberValue = mobileNumber.value.trim();
   if(mobileNumberValue.length >10){
      setSuccess1(mobileNumber);
   }
   else if(mobileNumberValue === ""){
      setError1(mobileNumber,"Mobilenumber can't be blank");
   }
   else{
      setError1(mobileNumber,"Invalid number");
   }
})

nextBtnsec.addEventListener("click",(e) =>{
   e.preventDefault();
   const sslcPercentValue = sslcPercent.value.trim();
   const hscPercentValue = hscPercent.value.trim();
   const degreePercentValue = degreePercent.value.trim();

   // if(sslcPercentValue === "" || hscPercentValue === "" || degreePercentValue === ""){
   //    setError1(sslcPercent,"sslcPercent can't be blank");
   //    setError1(hscPercent,"hscPercent can't be blank");
   //    setError1(degreePercent,"Degreepercent can't be blank");
   // }
   if(sslcPercentValue === "" || !(sslcPercentValue>0 && sslcPercentValue<=100)){
      setError1(sslcPercent,"sslcPercent can't be blank");
   }
   else if(hscPercentValue === "" || !(hscPercentValue>0 && hscPercentValue<=100)){
      setError1(hscPercent,"HscPercent can't be blank");
   }
   else if(degreePercentValue === "" || !(degreePercentValue>0 && degreePercentValue<=100)){
      setError1(degreePercent,"Degreepercent can't be blank");
   }
   else{
   setSuccess1(sslcPercent);
   setSuccess1(hscPercent);
   setSuccess1(degreePercent);
   slidePage.style.marginLeft = "-50%"
   bullet[current -1].classList.add("active");
   progressCheck[current -1].classList.add("active");
   current += 1;
   }
   function setError1(input,message){
      fieldControl = input.parentElement;
      const small = fieldControl.querySelector("small");
      fieldControl.className = "field error"
      small.innerText = message;
   } 
   
   function setSuccess1(input){
      const fieldControl = input.parentElement;
      fieldControl.className = 'field success';
   } 
}); 
function setError1(input,message){
   fieldControl = input.parentElement;
   const small = fieldControl.querySelector("small");
   fieldControl.className = "field error"
   small.innerText = message;
} 

function setSuccess1(input){
   const fieldControl = input.parentElement;
   fieldControl.className = 'field success';
} 
sslcPercent.addEventListener("input", () =>{
   const sslcPercentValue = sslcPercent.value.trim();
   if(sslcPercentValue>0 && sslcPercentValue<=100){
      setSuccess1(sslcPercent);
   }
   else{
      setError1(sslcPercent,"Invalid");
   }
})

hscPercent.addEventListener("input", () =>{
   const hscPercentValue = hscPercent.value.trim();
   if(hscPercentValue>0 && hscPercentValue<=100){
      setSuccess1(hscPercent);
   }
   else{
      setError1(hscPercent,'Invalid');
   }
})

degreePercent.addEventListener("input", () =>{
   const degreePercentValue = degreePercent.value.trim();
   if(degreePercentValue>0 && degreePercentValue<=100){
      setSuccess1(degreePercent);
   }
   else{
      setError1(degreePercent,"Invalid");
   }
})
nextBtnThird.addEventListener("click",(e) =>{
   e.preventDefault(); 
   slidePage.style.marginLeft = "-75%"
   bullet[current -1].classList.add("active");
   progressCheck[current -1].classList.add("active");
   current += 1;
});
submitBtn.addEventListener("click",(e) =>{
   e.preventDefault();
   const streetAddressValue = streetAddress.value.trim();
   const zipCodeValue = zipCode.value.trim();

   // if(streetAddressValue === "" || zipCodeValue === ""){
   //    setError1(streetAddress,"street address can't be blank");
   //    setError1(zipCode,"zipcode can't be blank")
   // }
   if(streetAddressValue === ""){
      setError1(streetAddress,"street address can't be blank");
   }
   else if(zipCodeValue === "" || !(isZipcode(zipCodeValue))){
      setError1(zipCode,"street address can't be blank");
   }
   else{
      setSuccess1(streetAddress);
      setSuccess1(zipCode);
      bullet[current -1].classList.add("active");
      progressCheck[current -1].classList.add("active");
      current += 1;
      setTimeout(() =>{
         alert("You're Successfully Registerd!!!");
      },800);
      console.log([...new FormData(fromEl)]);
   } 
   function isZipcode(zipCode){
      return  /^\d{6}$/.test(zipCode);
   }
   function setError1(input,message){
      fieldControl = input.parentElement;
      const small = fieldControl.querySelector("small");
      fieldControl.className = "field error"
      small.innerText = message;
   }
   
   function setSuccess1(input){
      const fieldControl = input.parentElement;
      fieldControl.className = 'field success';
   } 
});
function setError1(input,message){
   fieldControl = input.parentElement;
   const small = fieldControl.querySelector("small");
   fieldControl.className = "field error"
   small.innerText = message;
}

function setSuccess1(input){
   const fieldControl = input.parentElement;
   fieldControl.className = 'field success';
} 

streetAddress.addEventListener("input", () =>{
   const streetAddressValue = streetAddress.value.trim();
   if(streetAddressValue.length >=6){
      setSuccess1(streetAddress);
   }
})

zipCode.addEventListener("input", () =>{
   const zipCodeValue = zipCode.value.trim();
   if(zipCodeValue.length === 6){
      setSuccess1(zipCode);
   }
   else{
      setError1(zipCode,"invalid zipcode");
   }
})


prevBtnSec.addEventListener("click",(e) =>{
   e.preventDefault();
   slidePage.style.marginLeft = "0%"
   bullet[current -2].classList.remove("active");
   progressCheck[current -2].classList.remove("active");
   current -= 1;
});
prevBtnThird.addEventListener("click",(e) =>{
   e.preventDefault();
   slidePage.style.marginLeft = "-25%"
   bullet[current -2].classList.remove("active");
   progressCheck[current -2].classList.remove("active");
   current -= 1;
});
prevBtnFourth.addEventListener("click",(e) =>{
   e.preventDefault();
   slidePage.style.marginLeft = "-50%"
   bullet[current -2].classList.remove("active");
   progressCheck[current -2].classList.remove("active");
   current -= 1;
});

links.forEach(link =>{
   link.addEventListener("click", e =>{
      e.preventDefault();
      forms.classList.toggle("show-signup")
   } )
})

registerBtn.addEventListener('click', e =>{
   e.preventDefault();
   forms.classList.toggle("show-signup")
})

loginForm.addEventListener('submit',(e) =>{
  e.preventDefault();
  loginValidation();
  console.log([...new FormData(loginForm)]);
})


const loginValidation = () =>{
   const loginEmailValue = loginEmail.value.trim();
   const loginPasswordValue = loginPassword.value.trim();

   if(loginEmailValue === ""){
      setError(loginEmail,"Email can't be blank");
   }
   else if(!(EmailValidate(loginEmailValue))){
      setError(loginEmail,"Must be a valid email address.");
   }
   else{
      setSuccess(loginEmail)
   }

   if(loginPasswordValue === ""){
      setError(loginPassword,"Password can't be blank")
   }
   else if(!(PasswordValidate(loginPasswordValue))){
      setError(loginPassword,"Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.");
   }
   else{
      setSuccess(loginPassword)
   }
   
function EmailValidate(loginEmail){
   return /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/.test(loginEmail)
}

function PasswordValidate(loginPassword){
   return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(loginPassword)
}
}


loginEmail.addEventListener("input",() =>{
   const loginEmailValue = loginEmail.value;
   const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;

   if(loginEmailValue.match(emailPattern)){
      setSuccess(loginEmail);
   }
   else{
      setError(loginEmail,"Must be a valid email address.")
   }
})


loginPassword.addEventListener("input",() =>{
   const loginPasswordValue = loginPassword.value;
   const passPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

   if(loginPasswordValue.match(passPattern)){
      setSuccess(loginPassword);
   }
   else{
      setError(loginPassword,"Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number." )
   }
})



function setError(input,message){
   const formControl = input.parentElement;
   const small = formControl.querySelector('small');
   formControl.className = "wrapper input-box error";
   small.innerText = message;
}

function setSuccess(input){
   const formControl = input.parentElement;
   formControl.className = 'wrapper input-box success';
}
