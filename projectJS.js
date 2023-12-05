function generateMealPlan() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var goal = document.getElementById("goal").value;

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    var breakfast = document.getElementById("breakfast").value;
    var snack1 = document.getElementById("snack1").value;
    var lunch = document.getElementById("lunch").value;
    var snack2 = document.getElementById("snack2").value;
    var dinner = document.getElementById("dinner").value;

    var mealPlanHTML = `
        <h2>Weekly Meal Plan for ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Goal for the Week:</strong> ${goal}</p>

        <h3>Monday</h3>
        <ul>
            <li>Breakfast: ${breakfast}</li>
            <li>Snack: ${snack1}</li>
            <li>Lunch: ${lunch}</li>
            <li>Snack: ${snack2}</li>
            <li>Dinner: ${dinner}</li>
        </ul>

        <!-- Repeat the structure for other days of the week -->

    `;

    var mealPlanWindow = window.open();
    mealPlanWindow.document.write(mealPlanHTML);
}

function clearMealPlan() {
    document.getElementById("mealPlanForm").reset();
}

function printOrDownload() {

}

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
