export const validateform = (form) => {
    let isValidForm = true;
    let emojiRegexp = /([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g;
    let urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    let strongPassword = /^(?!.*[\s])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    let noSpecialChar = /^[a-zA-Z0-9- ]*$/;
    let emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //email
    let numberRegex = /^\d+$/; // number

    for (let val in form.validators) {
        form.validators[val].error = '';
        for (let i in form.validators[val]) {
            let message = '';
            if (form.validators[val].error != '') break;

            let valData = form.validators[val][i];
            let label = (val.charAt(0).toUpperCase() + val.slice(1)).split('_').join(' ');
            let enteredValue = form[val];

            if (i == 'required' && !enteredValue) {
                message = `Please enter ${label}`;

            } else if (i == 'noSpace' && !enteredValue.replace(/\s/g, '').length) {
                message = `Please enter valid ${label}`;

            }
            else if (i == "betweenChar") {
                let min = valData.split('-')[0];
                let max = valData.split('-')[1];
                if (enteredValue.length < min || enteredValue.length > max) {
                    message = `${label} length should be ${min}-${max} characters`
                }
            } else if (i == "betweenDigit") {
                let min = valData.split('-')[0];
                let max = valData.split('-')[1];
                if (enteredValue.length < min || enteredValue.length > max) {
                    message = `${label} length should be ${min}-${max} digits`
                }
            }
            else if (i == 'noSpecial' && noSpecialChar.test(enteredValue) == false) {
                message = `Special character is not allowed in ${label}`;

            } else if ((i == 'minLength' || i == 'minLengthDigit') && enteredValue.length < valData) {
                let cStr = i == 'minLengthDigit' ? 'digits' : 'characters';
                message = `${label} must be at least ${valData} ${cStr}`;

            } else if ((i == 'maxLength' || i == 'maxLengthDigit') && enteredValue.length > valData) {
                let cStr = i == 'minLengthDigit' ? 'digits' : 'characters';
                message = `${label} should be smaller than ${valData} ${cStr}`;

            } else if (i == 'matchWith' && enteredValue != form[valData]) {
                let label2 = (valData.charAt(0).toUpperCase() + valData.slice(1)).split('_').join(' ');
                message = `${label2} does't match`;

            } else if (i == 'email' && emailReg.test(enteredValue) == false) {
                message = 'Please enter valid email id';
            } else if (i == 'numeric' && numberRegex.test(enteredValue) == false) {
                message = `${label} should be a number only`;

            } else if (i == 'emoji' && emojiRegexp.test(enteredValue) == true) {
                message = `Emoji is not allowed in ${label}`;
            }
            else if (i == 'phone_number' && (enteredValue.length > 15 || enteredValue.length < 7)) {
                message = `${label} should be between 7-15 characters`;

            } else if (i == 'link' && urlRegex.test(enteredValue) == false) {
                message = `Please enter valid url`;

            } else if (i == 'password' && (enteredValue.length > 15 || enteredValue.length < 8)) {
                message = `${label} must be between 8-15 characters`;

            } else if (i == 'password' && strongPassword.test(enteredValue) == false) {
                message = `${label} must contain uppercase,lowercase,special character and number`;
            }
            if (message) {
                isValidForm = false;
                form.validators[val].error = message;
            } else {
                form.validators[val].error = '';
            }
        }
    }
    return {
        value: form,
        status: isValidForm
    };
};
