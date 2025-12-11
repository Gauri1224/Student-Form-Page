function checkStrength() {
    let password = document.getElementById("password").value;

    let hasNumber = /\d/.test(password);                     
    let hasSpecial = /[!@#$%^&*]/.test(password);            
    let isLong = password.length >= 8;                     

    let result = "";

    if (isLong && hasNumber && hasSpecial) {
        result = "Strong Password";
    } else if (isLong && (hasNumber || hasSpecial)) {
        result = "Medium Password";
    } else {
        result = "Weak Password";
    }

    document.getElementById("result").textContent = result;
}
