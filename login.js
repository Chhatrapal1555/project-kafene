// Checking the login status using iffe function
(function() {
    let status = localStorage.getItem("login");
    if (status == 'true') {
        location.assign("./orders.html");
    }
})();
$(document).ready(function() {
    // handling the login form submission
    $('#login-form').submit(e => {
        e.preventDefault();
        let userName = $('#username').val();
        let passWord = $('#password').val();
        // form validation condition
        if (userName === 'qaifi' && passWord === 'qaifi') {
            // post call
            $.post("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/login", {
                    username: 'qaifi',
                    password: 'qaifi'
                },
                () => {
                    alert('Login Successful');
                    // setting the login key
                    localStorage.setItem("login", true);
                    location.assign("./orders.html");
                });
        } else {
            alert('Please Enter Valid Credentials');
        }
    })
})

