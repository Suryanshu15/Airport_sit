const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});

let submit=document.getElementById('submit')

submit.addEventListener('click',function(){
    let email=document.getElementById('email').value
    let password=document.getElementById('pass').value
    let con=document.getElementById('conpass').value

    if(password!=con){
        alert("Password doesn't match!!")
    }
    else{
        localStorage.setItem('email',email)
        localStorage.setItem('password',password)
        localStorage.setItem('confirm password',con)
        alert('Sign up successfully')
    }
})

let submit1=document.getElementById('submit1')

function myfunction(){
    let email1=document.getElementById('email1').value
    let password1=document.getElementById('pass1').value
    let Email=localStorage.getItem('email')
    let Password=localStorage.getItem('confirm password')
    if(email1==Email && password1==Password) {
      alert("Login successfully");
      window.open("index.html")

    }
    else{
        alert('invalid crediential')
        return
    }

}
