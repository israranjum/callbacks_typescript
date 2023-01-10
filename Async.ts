
function register(){
    return new Promise<boolean>((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Register End')
            resolve(true);
        },1000)
    })
  
}

function sendEmail(){
    return new Promise<boolean>((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Email Sent')
            resolve(true);
        },1000)
    })
}

function login(){
    return new Promise<boolean>((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Login Successfull')
            resolve(true);       
        },5000)
    })
    
}

function getUserData(){
    return new Promise<boolean>((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Got user Data')
            resolve(true);
            // reject(false);
        },1000)
    })
 
}

function displayUserData(){
    return new Promise<boolean>((resolve,reject)=>{
        setTimeout(()=>{
            console.log('User Data Displayed')
            resolve(true)
        },1000)
    })
}

async function authenticate() {
   await register()
   await sendEmail()
   await login()
   await getUserData()
   await displayUserData()
}

authenticate().then(()=>{
    setTimeout(()=>{
        console.log("All Done.")
    },2000)
}).catch(()=>{
    console.log("TryAgain")
})

console.log('Other Application Work')