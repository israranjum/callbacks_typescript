function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Register End');
            resolve(true);
        }, 1000);
    });
}
function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Email Sent');
            resolve(true);
        }, 1000);
    });
}
function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Login Successfull');
            resolve(true);
        }, 5000);
    });
}
function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Got user Data');
            resolve(true);
        }, 1000);
    });
}
function displayUserData() {
    setTimeout(() => {
        console.log('User Data Displayed');
    }, 1000);
}
register().then(() => {
    sendEmail().then(() => {
        login().then(() => {
            getUserData().then(() => {
                displayUserData();
            });
        });
    });
});
console.log('Other Application Work');
export {};
