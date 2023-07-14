class Food {
    constructor(name, calories, meal) {
        this.name = name;
        this.calories = calories;
        this.meal = meal;
    }
}

class Day {
    constructor(name, breakfast, amSnack, lunch, pmSnack, dinner) {
        this.name = name;
        this.breakfast = breakfast;
        this.amSnack = amSnack;
        this.lunch = lunch;
        this.pmSnack = pmSnack;
        this.dinner = dinner;
    }
}

function checkEmail() {
    var userEmail = document.getElementById("userEmail").value;
    // email validation regex
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)) {
        return true;
    } else {
        return false;
    }
}

function checkCalories() {
    var userCalories = document.getElementById("userCalories").value;
    if (isNaN(userCalories) || userCalories >= 10000) {
        return false;
    }
    else {
        return true;
    }
}

// function popWindow() {
    
// }

function createDay() {
    const oatmeal = new Food("Oatmeal", 100, "breakfast");
    const granolaBar = new Food("Granola Bar", 180, "amSnack");
    const turkeySandwich = new Food("Turkey Sandwich", 400, "lunch");
    const beefJerky = new Food("Beef Jerky", 200, "pmSnack");
    const steakPotatoes = new Food("Steak and Potatoes", 800, "dinner");

    const monday = new Day("Monday", oatmeal, granolaBar, turkeySandwich, beefJerky, steakPotatoes);

    htmlHead = ("<html>\n<head>\n<title>Your Personalized Meal Plan</title>\n</head>\n<body>\n");
    htmlHead += ("<body>\n");
    htmlHead += (monday.breakfast.name + monday.amSnack.name);
    htmlHead += ("</body>\n");
    htmlHead += ("</html>");
    flyWindow = window.open('about:blank', 'myPop', 'width=400, height=400, left=400, top=400');
    flyWindow.document.write(htmlHead);

}

function handleClick() {
    if (!checkCalories() && !checkEmail()) {
        alert("You have entered an invalid email address and calorie count. Please try again.");
    }
    else if (!checkEmail() && checkCalories()) {
        alert("You have entered an invalid email address. Please try again.");
    }
    else if (!checkCalories() && checkEmail()) {
        alert("You have entered an incorrect calorie count. Please enter a number less than 10,000.");
    } 
    else {
        createDay();
    }
}

var myButton = document.getElementById("submitButton");
myButton.addEventListener("click", handleClick);


