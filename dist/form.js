var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const ceremonyInput = document.getElementById("ceremony");
const celebrationInput = document.getElementById("celebration");
const notAttendingInput = document.getElementById("no-attendance");
const nameInput = document.getElementById("name");
const telInput = document.getElementById("tel");
const submitButton = document.getElementById("submit");
let errorCode = "";
notAttendingInput === null || notAttendingInput === void 0 ? void 0 : notAttendingInput.addEventListener("change", () => {
    if (notAttendingInput.checked) {
        ceremonyInput.checked = false;
        celebrationInput.checked = false;
    }
});
ceremonyInput === null || ceremonyInput === void 0 ? void 0 : ceremonyInput.addEventListener("change", () => {
    if (ceremonyInput.checked) {
        notAttendingInput.checked = false;
    }
});
celebrationInput === null || celebrationInput === void 0 ? void 0 : celebrationInput.addEventListener("change", () => {
    if (celebrationInput.checked) {
        notAttendingInput.checked = false;
    }
});
nameInput === null || nameInput === void 0 ? void 0 : nameInput.addEventListener("input", () => {
    nameInput.classList.remove("is-invalid");
    nameInput.placeholder = "";
});
telInput === null || telInput === void 0 ? void 0 : telInput.addEventListener("input", () => {
    telInput.classList.remove("is-invalid");
    telInput.placeholder = "";
});
function validateForm() {
    let isValid = true;
    nameInput.classList.remove("is-invalid");
    telInput.classList.remove("is-invalid");
    const nameValue = nameInput.value.trim();
    if (!nameValue) {
        nameInput.classList.add("is-invalid");
        nameInput.placeholder = "Zadej jméno a příjmení";
        errorCode = "001";
        isValid = false;
    }
    else if (!isValidName(nameValue)) {
        nameInput.classList.add("is-invalid");
        nameInput.placeholder = "Zadej JMÉNO a PŘÍJMENÍ";
        errorCode = "002";
        isValid = false;
    }
    const phoneValue = telInput.value.trim();
    if (!phoneValue) {
        telInput.classList.add("is-invalid");
        telInput.placeholder = "Zadej telefonní číslo";
        errorCode = "003";
        isValid = false;
    }
    else if (!isValidPhoneNumber(phoneValue)) {
        telInput.classList.add("is-invalid");
        telInput.placeholder = "Neplatné telefonní číslo";
        errorCode = "004";
        isValid = false;
    }
    return isValid;
}
function isValidPhoneNumber(phone) {
    const cleaned = phone.replace(/[\s\-]/g, '');
    const pattern = /^[1-9][0-9]{8}$/;
    return pattern.test(cleaned);
}
function isValidName(name) {
    const trimmed = name.trim();
    if (!trimmed.includes(' ')) {
        return false;
    }
    return true;
}
import { getFormData } from "./firebase";
function submit() {
    return __awaiter(this, void 0, void 0, function* () {
        const formData = {
            name: nameInput.value.trim(),
            phone: telInput.value.trim(),
            attendingCeremony: ceremonyInput.checked,
            attendingCelebration: ceremonyInput.checked,
            notAttending: notAttendingInput.checked
        };
        console.log("Submitting:", formData);
        // TODO: Send to Firebase here
        try {
            console.log("before");
            yield getFormData(formData);
            nameInput.value = "";
            telInput.value = "";
            alert("Děkujeme za potvrzení!");
            console.log("✅ Form submitted successfully!");
        }
        catch (error) {
            console.error("❌ Error submitting:", error);
            alert("Chyba při odesílání. Zkuste to prosím znovu.");
        }
    });
}
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (validateForm()) {
        submit();
    }
    else {
        console.log("Error: ", validateForm());
    }
});
function getError(code) {
    switch (code) {
        case "001":
            console.log(`Error: ${code} - nezadané jméno a příjmení`);
            break;
        case "002":
            console.log(`Error: ${code} - špatně zadané jméno a příjmení`);
            break;
    }
}
/*
function displayErrors(): void {

}*/
