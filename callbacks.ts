// case scenario

/*
    1: Register User
    2: Send Welcome Email
    3: Login 
    4: Get User Data
    5: Display User Data
*/
interface Callbacks{
    (callback?: string):void
}

function register(callback:Callbacks){
    setTimeout(()=>{
        console.log('Register End')
        callback();
    },1000)
}

function sendEmail(callback:Callbacks){
    setTimeout(()=>{
        console.log('Email Sent')
        callback()
    },1000)

}

function login(callback:Callbacks){
    setTimeout(()=>{
        console.log('Login Successfull')
        callback();
    },1000)
}

function getUserData(callback:Callbacks){
    setTimeout(()=>{
        console.log('Got user Data')
        callback();
    },1000)
}

function displayUserData(){
    
    setTimeout(()=>{
        console.log('User Data Displayed')
        // callback()
    },1000)
}


register(()=>{
    sendEmail(()=>{
        login(()=>{
            getUserData(()=>{
                displayUserData()
            })
        })
    })
})

console.log('Other Application Work')