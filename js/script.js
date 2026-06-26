const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (event) {

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            event.preventDefault();
        }
    });
}
function calculateBMI() {

    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    if (!weight || !height) {
        document.getElementById("result").innerHTML =
            "Please enter both values.";
        return;
    }

    let bmi = weight / (height * height);

    document.getElementById("result").innerHTML =
        "Your BMI is " + bmi.toFixed(1);
}