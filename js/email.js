// public key
(function () {
    emailjs.init('fHrt0X3pkTdPAhT5u'); 
})();


function sendEmail(formData) {
    return emailjs.send("service_htxpf2m", "template_dyzx0v9", {
        to_email: "cyberspacetechhub@gmail.com",  
        from_name: formData.name,  
        name: formData.name,  
        phone: formData.phone,  
        subject: formData.subject,  
        message: formData.message,  
        reply_to: formData.email  
    });
}
