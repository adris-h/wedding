const ceremonyInput = document.getElementById("ceremony") as HTMLInputElement;
const feastInput = document.getElementById("feast") as HTMLInputElement;
const partyInput = document.getElementById("party") as HTMLInputElement;
const notAttendingInput = document.getElementById("no-attendance") as HTMLInputElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const surnameInput = document.getElementById("surname") as HTMLInputElement;
const submitButton = document.getElementById("submit") as HTMLButtonElement;
const adultsAmount = document.getElementById("adults") as HTMLInputElement;
const kidsAmount = document.getElementById("kids") as HTMLInputElement;

let errorCode: string = "";

console.log("connected")

notAttendingInput?.addEventListener("change", () => {
    if (notAttendingInput.checked) {
        ceremonyInput.checked = false;
        partyInput.checked = false;
        feastInput.checked = false;
    }
});

ceremonyInput?.addEventListener("change", () => {
    if (ceremonyInput.checked) {
        notAttendingInput.checked = false;
    }
});

partyInput?.addEventListener("change", () => {
    if (partyInput.checked) {
        notAttendingInput.checked = false;
    }
});

feastInput?.addEventListener("change", () => {
    if (feastInput.checked) {
        notAttendingInput.checked = false;
    }
})

nameInput?.addEventListener("input", () => {
    nameInput.classList.remove("is-invalid");
    nameInput.placeholder = "";
});

surnameInput?.addEventListener("input", () => {
    surnameInput.classList.remove("is-invalid");
    surnameInput.placeholder = "";
});

kidsAmount?.addEventListener("input", () => {
    kidsAmount.classList.remove("is-invalid");
})

adultsAmount?.addEventListener("input", () => {
    adultsAmount.classList.remove("is-invalid");
})

function validateForm(): boolean {
    let isValid = true;

    nameInput.classList.remove("is-invalid");
    surnameInput.classList.remove("is-invalid");

    const nameValue = nameInput.value;
    const surnameValue = surnameInput.value;
    const kidsValue = kidsAmount.value;
    const adultsValue = adultsAmount.value;

    if (!nameValue) {
        nameInput.classList.add("is-invalid");
        nameInput.placeholder = "Zadej jméno";

        errorCode = "001"

        isValid = false;
    } else if(!surnameValue){
        surnameInput.classList.add("is-invalid");
        surnameInput.placeholder = "Zadej příjmení";
        isValid = false;
    } else if(!kidsValue){
        kidsAmount.classList.add("is-invalid");
        isValid = false;
    } else if(!adultsValue){
        adultsAmount.classList.add("is-invalid");
        isValid = false;
    }

    return isValid;
}


// function isValidName(name: string): boolean {
//     const trimmed = name.trim();
//
//     if (!trimmed.includes(' ')) {
//         return false;
//     }
//     return true;
// }




import {getFormData} from "./firebase";

async function submit() {
    const formData = {
        name: nameInput.value.trim(),
        surname: surnameInput.value.trim(),

        attendingCeremony: ceremonyInput.checked,
        attendingFeast: feastInput.checked,
        attentingParty: partyInput.checked,
        notAttending: notAttendingInput.checked,

        kidsAmount: kidsAmount.value,
        adultsAmount: adultsAmount.checked,
    };

    try {
        await getFormData(formData);
        nameInput.value = "";
        surnameInput.value = "";
        kidsAmount.value = "";
        adultsAmount.value = "";
        ceremonyInput.checked = false;
        feastInput.checked = false;
        partyInput.checked = false;
        notAttendingInput.checked = false;

    } catch (error) {
        console.error("Error :", error);
    }
}

submitButton?.addEventListener("click", (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
        submit();
    } else{
        console.log("Error");
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
