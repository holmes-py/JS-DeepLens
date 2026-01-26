function validatePhoneNumber(phoneNumberInput) {
    // we need to replace all white space characters and new lines, because in webview it adds random newlines
    phoneNumberInput = phoneNumberInput.replace(/\s+/g, '');
    const phoneNumber = libphonenumber.parsePhoneNumberFromString(phoneNumberInput);
    if (phoneNumber === undefined) {
        return "EmptyPhoneNumberValue";
    }
    const valid = libphonenumber.isValidPhoneNumber(phoneNumber.number);
    if (!valid) {
        return "InvalidPhoneNumberPattern";
    }
    
    return 'ValidPhoneNumber';
}

function validateEmail(emailInput) {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!pattern.test(emailInput) && emailInput) {
        return 'InvalidEmailPattern'
    } else if (!emailInput) {
        return 'EmptyEmailValue'
    } else {
        return 'ValidEmail'
    }
}

function validatePassword(passwordInput) {
    if (!passwordInput) {
        return 'EmptyPasswordValue'
    } else {
        return 'ValidPassword'
    }
}

function togglePasswordVisibility(passwordFieldId) {
    const passwordInput = document.getElementById(passwordFieldId);
    if (!passwordInput) return;

    const isPasswordVisible = passwordInput.type === "password";
    passwordInput.type = isPasswordVisible ? "text" : "password";

    const iconsContainer = passwordInput.nextElementSibling;
    const eyeIconVisible = iconsContainer.querySelector('.eyeVisible');
    const eyeIconHidden = iconsContainer.querySelector('.eyeHidden');

    eyeIconVisible.style.display = isPasswordVisible ? "block" : "none";
    eyeIconHidden.style.display = isPasswordVisible ? "none" : "block";
}

function validatePasswordRequirements(passwordInput, requirements) {
    const value = passwordInput.value;
    let valid = true;

    // Requirement 1: Length at least 5
    if (value.length >= 5) {
        requirements[0].classList.remove('error');
    } else {
        requirements[0].classList.add('error');
        valid = false;
    }

    // Requirement 2: Contains a digit
    if (/\d/.test(value)) {
        requirements[1].classList.remove('error');
    } else {
        requirements[1].classList.add('error');
        valid = false;
    }

    // Requirement 3: Contains an uppercase letter
    if (/[A-Z]/.test(value)) {
        requirements[2].classList.remove('error');
    } else {
        requirements[2].classList.add('error');
        valid = false;
    }

    // Requirement 4: Contains a lowercase letter
    if (/[a-z]/.test(value)) {
        requirements[3].classList.remove('error');
    } else {
        requirements[3].classList.add('error');
        valid = false;
    }
    return valid;
}

  
