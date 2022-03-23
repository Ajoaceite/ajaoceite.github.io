
function validateForm() {

    const form = document.forms["booking-form"];

    const name = form["grid-first-name"];
    if(!name.value.match(/^[a-zA-Z]+$/)){
        alert("El nombre solo debe contener letras");
        name.focus();
        return false;
    }

    const lastName = form["grid-last-name"];
    if(!lastName.value.match(/^[a-zA-Z]+$/)){
        alert("El apellido solo debe contener letras");
        lastName.focus();
        return false;
    }

    const hall = form["grid-hall"];
    const people = form["grid-people"];
    if(people.value < 1) {
        alert("Debe ingresar al menos una persona");
        people.focus();
        return false;
    }

    switch (hall.value) {
        case "1":
            if (people.value > 1) {
                alert("El salón 1 solo admite 1 persona.");
                people.focus();
                return false;
            }
            break;
        case "2":
            if (people.value > 4) {
                alert("El salón 2 solo admite como máximo 4 personas.");
                people.focus();
                return false;
            }
            break;
        case "3":
            if (people.value > 20) {
                alert("El salón 3 solo admite como máximo 20 personas.");
                people.focus();
                return false;
            }
            break;
    }

    const startDate = new Date(form["grid-start-date"].value);
    const endDate = new Date(form["grid-end-date"].value);
    if(startDate < new Date()){
        alert("La fecha de inicio debe ser posterior a la fecha actual");
        form["grid-start-date"].focus();

        return false;
    }

    if (startDate > endDate) {
        alert("La fecha de inicio no puede ser mayor que la fecha de fin");
        form["grid-end-date"].focus();
        return false;
    }

    return true;
}