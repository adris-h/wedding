const ceremonyInput = document.getElementById("ceremony") as HTMLInputElement;
const celebrationInput = document.getElementById("celebration") as HTMLInputElement;
const notAttendingInput = document.getElementById("no-attendance") as HTMLInputElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const telInput = document.getElementById("tel") as HTMLInputElement;
const submitButton = document.getElementById("submit") as HTMLButtonElement;




let errorCode: string = "";

notAttendingInput?.addEventListener("change", () => {
    if (notAttendingInput.checked) {
        ceremonyInput.checked = false;
        celebrationInput.checked = false;
    }
});

ceremonyInput?.addEventListener("change", () => {
    if (ceremonyInput.checked) {
        notAttendingInput.checked = false;
    }
});

celebrationInput?.addEventListener("change", () => {
    if (celebrationInput.checked) {
        notAttendingInput.checked = false;
    }
});

nameInput?.addEventListener("input", () => {
    nameInput.classList.remove("is-invalid");
    nameInput.placeholder = "";
});

telInput?.addEventListener("input", () => {
    telInput.classList.remove("is-invalid");
    telInput.placeholder = "";
});


function validateForm(): boolean {
    let isValid = true;

    nameInput.classList.remove("is-invalid");
    telInput.classList.remove("is-invalid");

    const nameValue = nameInput.value.trim();
    if (!nameValue) {
        nameInput.classList.add("is-invalid");
        nameInput.placeholder = "Zadej jméno a příjmení";

        errorCode = "001"

        isValid = false;
    } else if (!isValidName(nameValue)) {
        nameInput.classList.add("is-invalid");
        nameInput.placeholder = "Zadej JMÉNO a PŘÍJMENÍ";

        errorCode = "002"

        isValid = false;
    }

    const phoneValue = telInput.value.trim();
    if (!phoneValue) {
        telInput.classList.add("is-invalid");
        telInput.placeholder = "Zadej telefonní číslo";

        errorCode = "003"

        isValid = false;
    } else if (!isValidPhoneNumber(phoneValue)) {
        telInput.classList.add("is-invalid");
        telInput.placeholder = "Neplatné telefonní číslo";

        errorCode = "004"

        isValid = false;
    }

    return isValid;
}

function isValidPhoneNumber(phone: string): boolean {
    const cleaned = phone.replace(/[\s\-]/g, '');
    const pattern = /^[1-9][0-9]{8}$/;
    return pattern.test(cleaned);
}

function isValidName(name: string): boolean {
    const trimmed = name.trim();

    if (!trimmed.includes(' ')) {
        return false;
    }
    return true;
}


import {getFormData} from "./firebase";

async function submit() {
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
        await getFormData(formData);

        nameInput.value = "";
        telInput.value = "";

        alert("Děkujeme za potvrzení!");
        console.log("✅ Form submitted successfully!");
    } catch (error) {
        console.error("❌ Error submitting:", error);
        alert("Chyba při odesílání. Zkuste to prosím znovu.");
    }
}

submitButton?.addEventListener("click", (e) => {
    e.preventDefault();

    if (validateForm()) {
        submit();
    } else{
        console.log("Error: ", validateForm());
    }
});

function getError(code: string): void{
    switch (code) {
        case "001":
            console.log(`Error: ${code} - nezadané jméno a příjmení` );
            break;
        case "002":
            console.log(`Error: ${code} - špatně zadané jméno a příjmení`);
            break;
    }
}

/*
function displayErrors(): void {

}*/
