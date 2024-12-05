function sendMail (){
    let parms = {
        name :document.getElementById("name").value,
        email :document.getElementById("email").value,
        phone :document.getAnimations ("phone").value,
        message :document.getElementById("message").value,
        

    }
    emailjs.send("service_4ni1t2i","template_y1jwhwy",parms).then(alert("Email sent"))
}