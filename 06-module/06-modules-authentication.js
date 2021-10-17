export function validateLoginData(email, password) {
    const emailValidator = new RegExp("^[A-Za-z0-9]+([.-]?[A-Za-z0-9]+)?@[A-Za-z0-9]+([.-]?[A-Za-z0-9]+)*(\.[A-Za-z0-9]{2,3})+$");
    const regexPassword = /[A-Za-z\d-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]{8,}/;
    const regexCapital = /[A-Z]/
    const regexSmall = /[a-z]/
    const regexNumber = /[0-9]/
    const regexSymbol = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/

    if (!elInputEmail.value.match(emailValidator)) {
        let message = "tolong masukan email yang valid"
        window.alert(message);
    } else if (elInputPassword.value.match(regexPassword) &&
        elInputPassword.value.match(regexCapital) &&
        elInputPassword.value.match(regexSmall) &&
        elInputPassword.value.match(regexNumber) &&
        elInputPassword.value.match(regexSymbol)) {
        let message = "Welcome to The Jungle"
        window.alert(message);
    } else {
        let message = "tolong masukan password sesuai ketentuan"
        window.alert(message);
    }

    return message;
}