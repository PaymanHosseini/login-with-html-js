function submit() {
    const username = 'payman';
    const password = 'pym31';

    const inputUsername = document.getElementById("inputUsername").value;
    const inputPassword = document.getElementById("inputPassword").value;

    const resultElement = document.getElementById('result');

    if (inputUsername === username && inputPassword === password) {
        resultElement.style.color = "green";
        resultElement.textContent = "welcome😍";
    } 
        else if (inputUsername !== username && inputPassword !== password) {
            resultElement.style.color = "red";
            resultElement.textContent = "Your password & username is wrong! Please try again😊"
        
    }
        else if (inputUsername !== username) {
            resultElement.style.color = "orange";
            resultElement.textContent = "Your username is wrong,please try again!";
        
    }
        else if (inputPassword !== password) {
            resultElement.style.color = "orange";
            resultElement.textContent = "Your password is wrong,please try again⛔"
            document.getElementById('result').textContent = "Your password is wrong, please try again";
        
    }
}