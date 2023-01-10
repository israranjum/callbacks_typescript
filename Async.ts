
function register(){
    return new Promise<boolean>((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Register End')
            resolve(true);
        },1000)
    })
  
}

function sendEmail(){
    setTimeout(()=>{
        console.log('Email Sent')
    
    },1000)
}

function login(){
    setTimeout(()=>{
        console.log('Login Successfull')       
    },1000)
}

function getUserData(){
    setTimeout(()=>{
        console.log('Got user Data')
    },1000)
}

function displayUserData(){
    setTimeout(()=>{
        console.log('User Data Displayed')
    },1000)
}


register().then(()=>{
    
})
    sendEmail()
            login()
            getUserData()
                displayUserData()

console.log('Other Application Work')