document.addEventListener('DOMContentLoaded', function () {
    function sendmail() {
        var params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        const serviceID = 'service_v9mxwvp';
        const templateID = 'template_8ue43xq';

        emailjs
            .send(serviceID, templateID, params)
            .then((res) => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert('Your message was sent successfully');
            })
            .catch((err) => console.log(err));
    }

    // Attach the function to the button click event
    document.querySelector("button[type='submit']").addEventListener("click", function (e) {
        e.preventDefault(); // Prevent form from submitting
        sendmail();
    });
});

