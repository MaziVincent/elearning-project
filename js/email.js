// public key
(function () {
    emailjs.init('t0tOdISWqR7t3sxuZ'); 
})();


function sendEmail(formData) {
    return emailjs.send("service_tpi5ku8", "template_fcq0ecn", {
        to_email: "schoolruns.intl@gmail.com",  
        from_name: formData.name,  
        name: formData.name,  
        phone: formData.phone,  
        subject: formData.subject,  
        message: formData.message,  
        reply_to: formData.email  
    });
}
