const register = function (event) {
    // Receive user input
    let r_name = document.querySelector("#name").value;
    let r_email = document.querySelector("#email").value;
    let r_website = document.querySelector("#website").value;
    let r_num = document.querySelector("#num").value;
    // Output on page
    display_name.innerHTML = "Name: " + r_name;
    display_email.innerHTML = "Email: " + r_email;
    display_num.innerHTML = "Phone no. : " + r_num;
    display_webiste.innerHTML = "Website URL: " + r_website;
    event.preventDefault();
    };