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
        this.plan = [breakfast, amSnack, lunch, pmSnack, dinner];
    }

    dailyCalories() {
        var sum = 0
        sum += this.breakfast.calories;
        sum += this.amSnack.calories;
        sum += this.lunch.calories;
        sum += this.pmSnack.calories;
        sum += this.dinner.calories;
        return sum;
    }
}

class Week {
    constructor(dayOne, dayTwo, dayThree, dayFour, dayFive, daySix, daySeven) {
        this.dayOne = dayOne;
        this.dayTwo = dayTwo;
        this.dayThree = dayThree;
        this.dayFour = dayFour;
        this.dayFive = dayFive;
        this.daySix = daySix;
        this.daySeven = daySeven;
        this.calendar = [dayOne, dayTwo, dayThree, dayFour, dayFive, daySix, daySeven];
    }

    weeklyCalories() {
        var sum = 0
        sum += this.dayOne.dailyCalories();
        sum += this.dayTwo.dailyCalories();
        sum += this.dayThree.dailyCalories();
        sum += this.dayFour.dailyCalories();
        sum += this.dayFive.dailyCalories();
        sum += this.daySix.dailyCalories();
        sum += this.daySeven.dailyCalories();
        return sum;
    }

    getGoal() {
        userGoal = document.querySelector('#userGoals');
        if (userGoal.value == "loseWeight") {
            return "Lose Weight";
        } else if (userGoal.value == "maintainWeight") {
            return "Maintain Weight";
        } else {
            return "Gain Weight";
        }
    }
}

// low-cal breakfast
const veggieOmelet = new Food("Veggie Omelette", 250, "Breakfast");
const chiaPudding = new Food("Overnight Chia Pudding", 150, "Breakfast");
const yogurtParfait = new Food("Greek Yogurt Parfait", 200, "Breakfast");
const grainToast = new Food("Whole Grain Toast with Avocado and Egg", 250, "Breakfast");
const smoothieBowl = new Food("Smoothie Bowl", 275, "Breakfast");
const lowCalBreakfastItems = [veggieOmelet, chiaPudding, yogurtParfait, grainToast, smoothieBowl];
// normal breakfast 
const fruitPancakes = new Food("Whole Grain Pancakes with Fruit", 350, "Breakfast");
const breakfastBurrito = new Food("Breakfast Burrito", 400, "Breakfast");
const quinoaBowl = new Food("Breakfast Quinoa Bowl", 400, "Breakfast");
const oatmeal = new Food("Oatmeal with Nut Butter and Seeds", 300, "Breakfast");
const eggVeggieWrap = new Food("Egg and Veggie Wrap", 375, "Breakfast");
const normalBreakfastItems = [fruitPancakes, breakfastBurrito, quinoaBowl, oatmeal, eggVeggieWrap];
// cheat breakfast
const avoToastWBacon = new Food("Avocado Toast with Eggs and Bacon", 550, "Breakfast");
const frenchToast = new Food("Nutella and Banana Stuffed French Toast", 700, "Breakfast");
const pbToast = new Food("Toast with Peanut Butter", 600, "Breakfast");
const baconAndEggs = new Food("Eggs with Bacon and Hashbrowns", 900, "Breakfast");
const chickenWaffles = new Food("Chicken and Waffles", 800, "Breakfast");
const cheatBreakfastItems = [avoToastWBacon, frenchToast, pbToast, baconAndEggs, chickenWaffles];
// low-call am snacks
const hbEggs = new Food("Hard-Boiled Eggs", 140, "Morning Snack");
const appleButter = new Food("Apple Slices with Almond Butter", 150, "Morning Snack");
const yogurtChia = new Food("Greek Yogurt with Chia Seeds", 100, "Morning Snack");
const riceCakes = new Food("Rice Cakes with Sliced Banana", 100, "Morning Snack");
const cottageCheeseToast = new Food("Whole Grain Toast with Cottage Cheese and Berries", 125, "Morning Snack");
const lowCalAMSnacks = [hbEggs, appleButter, yogurtChia, riceCakes, cottageCheeseToast];
// normal am snacks
const proteinSmoothie = new Food("Smoothie with Protein Powder", 300, "Morning Snack");
const granolaBar = new Food("Whole Grain Granola Bar", 180, "Morning Snack");
const trailMix = new Food("Trail Mix", 200, "Morning Snack");
const veggieMuffin = new Food("Veggie Omelette Muffins", 300, "Morning Snack");
const toastButterFruit = new Food("Whole Grain Toast with Nut Butter and Sliced Fruit", 200, "Morning Snack");
const normalAMSnacks = [proteinSmoothie, granolaBar, trailMix, veggieMuffin, toastButterFruit];
// cheat am snacks
const butterBananaSmoothie = new Food("Nut Butter and Banana Smoothie", 300, "Morning Snack");
const breakfastSandwich = new Food("Breakfast Sandwich with Avocado and Bacon", 500, "Morning Snack");
const granolaParfait = new Food("Granola Parfait with Greek Yogurt and Berries", 350, "Morning Snack");
const bagel = new Food("Bagel with Cream Cheese and Smoked Salmon", 500, "Morning Snack");
const proteinPancakes = new Food("Protein Pancakes with Toppings", 500, "Morning Snack");
const cheatAMSnacks = [butterBananaSmoothie, breakfastSandwich, granolaParfait, bagel, proteinPancakes]
// low cal lunch
const grilledChickenSalad = new Food("Grilled Chicken Salad", 350, "Lunch");
const veggieWrap = new Food("Veggie Wrap", 250, "Lunch");
const zucchiniNoodles = new Food("Zucchini Noodles with Shrimp", 400, "Lunch");
const lentilSoup = new Food("Lentil Soup with Mixed Vegetables", 325, "Lunch");
const quinoaSalad = new Food("Quinoa Salad with Roasted Vegetables", 375, "Lunch");
const lowCalLunch = [grilledChickenSalad, veggieWrap, zucchiniNoodles, lentilSoup, quinoaSalad];
// normal lunch
const grilledChickenWrap = new Food("Grilled Chicken Wrap", 425, "Lunch");
const buddhaBowl = new Food("Quinoa Buddha Bowl", 450, "Lunch");
const turkeyBurger = new Food("Turkey or Veggie Burger with Sweet Potato Fries", 550, "Lunch");
const salmonSalad = new Food("Salmon Salad", 475, "Lunch");
const pastaVeggies = new Food("Whole Wheat Pasta with Vegetables", 550, "Lunch");
const normalLunchItems = [grilledChickenWrap, buddhaBowl, turkeyBurger, salmonSalad, pastaVeggies];
// cheat lunch
const steakSweetPotato = new Food("Steak and Sweet Potato", 700, "Lunch");
const chickenAlfredo = new Food("Chicken Alfredo Pasta", 800, "Lunch");
const beefStirFry = new Food("Beef Stir-Fry with Rice", 850, "Lunch");
const salmonQuinoa = new Food("Salmon with Quinoa and Avocao", 650, "Lunch");
const veggieSandwich = new Food("Loaded Veggie Sandwich", 600, "Lunch");
const cheatLunchItems = [steakSweetPotato, chickenAlfredo, beefStirFry, salmonQuinoa, veggieSandwich]
// low cal pm snacks
const edamame = new Food("Edamame", 150, "Afternoon Snack");
const yogurtAndBerries = new Food("Greek Yogurt with Berries", 125, "Afternoon Snack");
const carrotHummus = new Food("Carrot Sticks and Hummus", 100, "Afternoon Snack");
const popcorn = new Food("Air-Popped Popcorn", 100, "Afternoon Snack");
const riceCakesNutButter = new Food("Rice Cakes with Nut Butter", 150, "Afternoon Snack");
const lowCalPMSnacks = [edamame, yogurtAndBerries, carrotHummus, popcorn, riceCakesNutButter];
// normal pm snacks
const cottageCheese = new Food("Cottage Cheese with Fresh Fruit", 200, "Afternoon Snack");
const crackers = new Food("Whole Grain Crackers with Cheese", 300, "Afternoon Snack");
const roastChick = new Food("Roasted Chickpeas", 280, "Afternoon Snack");
const almondsFruit = new Food("Almonds with Dried Fruit", 250, "Afternoon Snack");
const beefJerky = new Food("Beef Jerky", 200, "Afternoon Snack");
const normalPMSnacks = [cottageCheese, crackers, roastChick, almondsFruit, beefJerky];
// cheat pm snacks
const avoToastWEggs = new Food("Avocado Toast with Eggs", 350, "Afternoon Snack");
const energyBalls = new Food("Energy Balls", 275, "Afternoon Snack");
const pbBanana = new Food("Peanut Butter and Banana Sandwich", 450, "Afternoon Snack");
const meatCheeseCrackers = new Food("Crackers with Meat and Cheese", 425, "Afternoon Snack");
const smoothieWNuts = new Food("Protein Smoothie with Nuts", 400, "Afternoon Snack");
const cheatPMSnacks = [avoToastWEggs, energyBalls, pbBanana, meatCheeseCrackers, smoothieWNuts];
// low cal dinner
const chickenVeggies = new Food("Grilled Chicken Breast with Steamed Vegetables", 400, "Dinner");
const salmonAsparagus = new Food("Baked Salmon with Roasted Asparagus", 450, "Dinner");
const vegStirFry = new Food("Vegetable Stir-Fry with Tofu", 300, "Dinner");
const zuccNoodlesTomato = new Food("Zucchini Noodles with Tomato Sauce", 300, "Dinner");
const turkeyChili = new Food("Turkey or Veggie Chili", 375, "Dinner");
const lowCalDinnerItems = [chickenVeggies, salmonAsparagus, vegStirFry, zuccNoodlesTomato, turkeyChili];
// normal dinner
const shrimpTacos = new Food("Grilled Shrimp Tacos", 425, "Dinner");
const yakiChicken = new Food("Teriyaki Chicken Stir-Fry", 500, "Dinner");
const meatballs = new Food("Spaghetti with Turkey Meatballs", 475, "Dinner");
const bakedChicken = new Food("Baked Chicken with Roasted Vegetables", 450, "Dinner");
const vegQuinoa = new Food("Veggie Quinoa Bowl", 400, "Dinner");
const normalDinnerItems = [shrimpTacos, yakiChicken, meatballs, bakedChicken, vegQuinoa];
// cheat dinner
const beefSteak = new Food("Beef Steak with Roasted Potatoes", 700, "Dinner");
const pastaShrimp = new Food("Creamy Pasta with Shrimp", 800, "Dinner");
const stuffedChicken = new Food("Stuffed Chicken Breast", 725, "Dinner");
const cheeseburger = new Food("Cheeseburger with Sweet Potato Fries", 750, "Dinner");
const salmonVegQuinoa = new Food("Salmon with Quinoa and Roasted Vegetables", 650, "Dinner");
const cheatDinnerItems = [beefSteak, pastaShrimp, stuffedChicken, cheeseburger, salmonVegQuinoa];

function generateRandomIndex(foodArray) {
    randomIndex = Math.floor(foodArray.length * Math.random());
    return foodArray[randomIndex];
}

function generateDay(weekday) {
    userGoal = document.querySelector('#userGoals');
    if (userGoal.value == "loseWeight") {
        var breakfast = generateRandomIndex(lowCalBreakfastItems);
        var amSnack = generateRandomIndex(lowCalAMSnacks);
        var lunch = generateRandomIndex(lowCalLunch);
        var pmSnack = generateRandomIndex(lowCalPMSnacks);
        var dinner = generateRandomIndex(lowCalDinnerItems);
        var loseDay = new Day(weekday, breakfast, amSnack, lunch, pmSnack, dinner);
        return loseDay;
    }
    else if (userGoal.value == "maintainWeight") {
        var breakfast = generateRandomIndex(normalBreakfastItems);
        var amSnack = generateRandomIndex(normalAMSnacks);
        var lunch = generateRandomIndex(normalLunchItems);
        var pmSnack = generateRandomIndex(normalPMSnacks);
        var dinner = generateRandomIndex(normalDinnerItems);
        var maintainDay = new Day(weekday, breakfast, amSnack, lunch, pmSnack, dinner);
        return maintainDay;
    }
    else {
        var breakfast = generateRandomIndex(cheatBreakfastItems);
        var amSnack = generateRandomIndex(cheatAMSnacks);
        var lunch = generateRandomIndex(cheatLunchItems);
        var pmSnack = generateRandomIndex(cheatPMSnacks);
        var dinner = generateRandomIndex(cheatDinnerItems);
        var gainDay = new Day(weekday, breakfast, amSnack, lunch, pmSnack, dinner);
        return gainDay;
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

function createWeek() {
    const dayOne = generateDay("Monday");
    const dayTwo = generateDay("Tuesday");
    const dayThree = generateDay("Wednesday");
    const dayFour = generateDay("Thursday");
    const dayFive = generateDay("Friday");
    const daySix = generateDay("Saturday");
    const daySeven = generateDay("Sunday");
    const userWeek = new Week(dayOne, dayTwo, dayThree, dayFour, dayFive, daySix, daySeven);
    return userWeek;
}

function writeWeek() {
    var userWeek = createWeek();
    var userName = document.getElementById("userName").value
    var html = ("<html>\n<head>\n<title>");
    html += (userName + "'s Personalized Meal Plan</title>\n</head>\n<body style=\"background-color: lightblue; margin-top : -10px;\">\n");
    html += ("<div style=\"text-align : center; margin-bottom : -20px;\"><img src=\"PPFitness.png\" style=\"height : 200px; width : 200px;\"></div>");
    html += ("<script>function printWindow() { window.print(); }</script>");
    html += ("<h2 style=\"text-align : center; margin : 0; font-weight : bold; font-family: 'Quicksand', sans-serif;\">This Week's Goal: " + userWeek.getGoal() + "</h2>");
    for (let i = 0; i < userWeek.calendar.length; i++) {
        html += ("<h1 style=\"text-align : center; font-weight : bold; font-family: 'Quicksand', sans-serif;\"><u>" + userWeek.calendar[i].name + "</u></h1>");
        for (let j = 0; j < userWeek.calendar[i].plan.length; j++) {
            html += ("<h3 style=\"text-align : center; font-family: 'Quicksand', sans-serif;\">" + userWeek.calendar[i].plan[j].meal + ": " + userWeek.calendar[i].plan[j].name + "</h3>");
            html += ("<h5 style=\"text-align : center; margin-top : -20px; font-family: 'Quicksand', sans-serif;\">" + userWeek.calendar[i].plan[j].calories + " calories</h5>");
        }
        html += ("<h4 style=\"text-align : center; font-weight : bold; font-family: 'Quicksand', sans-serif;\"><strong>Daily Calories: " + userWeek.calendar[i].dailyCalories() + "</strong></h4>");
    }
    html += ("<h2 style=\"text-align : center; font-weight : bold; font-family: 'Quicksand', sans-serif;\"><strong>Total Calories for the Week: " + userWeek.weeklyCalories() + "</strong></h2>");
    html += ("<div style=\"text-align : center\"><button type=\"button\" style=\"background : #FFF8DC; border-color : #FFF8DC;\" onclick=\"printWindow()\">Print Plan</button></div>");
    html += ("</body>\n</html>");
    flyWindow = window.open('about:blank', 'myPop', 'width=600, height=800, left=450, top=100');
    flyWindow.document.write(html);
    return flyWindow;
}

function handleClick() {
    if (!checkEmail()) {
        alert("You have entered an invalid email address. Please try again.");
    }
    else {
        writeWeek();
    }
}

var myButton = document.getElementById("submitButton");
myButton.addEventListener("click", handleClick);


