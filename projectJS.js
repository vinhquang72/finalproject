function generateMealPlan() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }


    var mealPlanHTML = "<h2>Weekly Meal Plan for " + name + "</h2>";

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
