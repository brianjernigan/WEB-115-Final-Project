class Food {
    constructor(name, calories) {
        this.name = name;
        this.calories = calories;
    }
}

function checkEmail() {
    var userEmail = document.getElementById("userEmail").value;
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

function popWindow() {
    flyWindow = window.open('about:blank', 'myPop', 'width=400, height=400, left=400, top=400');
    htmlHead = "<html>\n<head>\n<title>Your Personalized Meal Plan</title>\n</head>\n<body>\n";
    htmlFoot = "</body>\n</html>";
    flyWindow.document.write("Hello World");
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
        popWindow();
    }
}

var myButton = document.getElementById("submitButton");
myButton.addEventListener("click", handleClick);


