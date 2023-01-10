// case scenario
function register(callback) {
    setTimeout(() => {
        console.log('Register End');
        callback();
    }, 1000);
}
function sendEmail(callback) {
    setTimeout(() => {
        console.log('Email Sent');
        callback();
    }, 1000);
}
function login(callback) {
    setTimeout(() => {
        console.log('Login Successfull');
        callback();
    }, 1000);
}
function getUserData(callback) {
    setTimeout(() => {
        console.log('Got user Data');
        callback();
    }, 1000);
}
function displayUserData() {
    setTimeout(() => {
        console.log('User Data Displayed');
        // callback()
    }, 1000);
}
register(() => {
    sendEmail(() => {
        login(() => {
            getUserData(() => {
                displayUserData();
            });
        });
    });
});
console.log('Other Application Work');
export {};
