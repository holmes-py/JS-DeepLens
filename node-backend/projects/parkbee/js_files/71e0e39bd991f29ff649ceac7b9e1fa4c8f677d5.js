const emailInput = document.getElementById("UserName");
const emailFieldSet = document.getElementById("EmailFieldSet");
const emailRequiredError = document.getElementById("EmailRequiredError");
const emailPatternError = document.getElementById("EmailPatternError");

const selectedCountryCodeInput = document.getElementById("SelectedCountryCode");
const phoneNumberInput = document.getElementById("UserName");
const phoneNumberFieldSet = document.getElementById("PhoneNumberFieldSet");
const phoneNumberRequiredError = document.getElementById(
    "phoneNumberRequiredError"
);
const phoneNumberPatternErrorMessage = document.getElementById(
    "phoneNumberPatternError"
);

const continueButton = document.getElementById("ContinueButton");
continueButton.disabled = true;

function updateValidationState(
    isInvalid,
    errorElementToShow,
    errorElementToHide,
    fieldSet
) {
    errorElementToShow.style.display = isInvalid ? "inline" : "none";
    errorElementToHide.style.display = "none";
    if (isInvalid) {
        fieldSet.classList.add("is-invalid");
    } else {
        fieldSet.classList.remove("is-invalid");
    }
    continueButton.disabled = isInvalid;
}

function checkEmailValidity() {
    const email = validateEmail(emailInput.value);
    if (email === "InvalidEmailPattern") {
        updateValidationState(
            true,
            emailPatternError,
            emailRequiredError,
            emailFieldSet
        );
    } else if (email === "EmptyEmailValue") {
        updateValidationState(
            true,
            emailRequiredError,
            emailPatternError,
            emailFieldSet
        );
    } else {
        updateValidationState(
            false,
            emailPatternError,
            emailRequiredError,
            emailFieldSet
        );
    }
}

function checkPhoneNumberValidity() {
    const phoneNumber = validatePhoneNumber(phoneNumberFieldSet.innerText + phoneNumberInput.value);
    if (phoneNumber === "InvalidPhoneNumberPattern") {
        updateValidationState(
            true,
            phoneNumberPatternErrorMessage,
            phoneNumberRequiredError,
            phoneNumberFieldSet
        );
    } else if (phoneNumber === "EmptyPhoneNumberValue") {
        updateValidationState(
            true,
            phoneNumberRequiredError,
            phoneNumberPatternErrorMessage,
            phoneNumberFieldSet
        );
    } else {
        updateValidationState(
            false,
            phoneNumberPatternErrorMessage,
            phoneNumberRequiredError,
            phoneNumberFieldSet
        );
    }
}

function checkForLeadingZero() {
    const leading0Regex = "^0+(?=[1-9]){1}";
    const match = phoneNumberInput.value.match(leading0Regex);
    if (match) {
        phoneNumberInput.value = phoneNumberInput.value.slice(match[0].length);
        phoneNumberInput.dispatchEvent(new Event('input', {'bubbles': true}));
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (emailFieldSet) {
        emailInput.addEventListener("input", checkEmailValidity);
    }
    if (phoneNumberFieldSet) {
        phoneNumberInput.onblur = checkForLeadingZero;
        phoneNumberInput.addEventListener("input", checkPhoneNumberValidity);
    }
});
