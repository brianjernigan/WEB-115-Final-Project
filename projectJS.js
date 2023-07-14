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

class Week {
    constructor(dayOne, dayTwo, dayThree, dayFour, dayFive, daySix, daySeven) {
        this.dayOne = dayOne;
        this.dayTwo = dayTwo;
        this.dayThree = dayThree;
        this.dayFour = dayFour;
        this.dayFive = dayFive;
        this.daySix = daySix;
        this.daySeven = daySeven;
    }
}

// low-cal breakfast
const veggieOmelet = new Food("Veggie Omelette", 250, "breakfast");
const chiaPudding = new Food("Overnight Chia Pudding", 150, "breakfast");
const yogurtParfait = new Food("Greek Yogurt Parfait", 200, "breakfast");
const grainToast = new Food("Whole Grain Toast with Avocado and Egg", 250, "breakfast");
const smoothieBowl = new Food("Smoothie Bowl", 275, "breakfast");
const lowCalBreakfastItems = [veggieOmelet, chiaPudding, yogurtParfait, grainToast, smoothieBowl];
// normal breakfast 
const fruitPancakes = new Food("Whole Grain Pancakes with Fruit", 350, "breakfast");
const breakfastBurrito = new Food("Breakfast Burrito", 400, "breakfast");
const quinoaBowl = new Food("Breakfast Quinoa Bowl", 400, "breakfast");
const oatmeal = new Food("Oatmeal with Nut Butter and Seeds", 300, "breakfast");
const eggVeggieWrap = new Food("Egg and Veggie Wrap", 375, "breakfast");
const normalBreakfastItems = [fruitPancakes, breakfastBurrito, quinoaBowl, oatmeal, eggVeggieWrap];
// cheat breakfast
const avoToastWBacon = new Food("Avocado Toast with Eggs and Bacon", 550, "breakfast");
const frenchToast = new Food("Nutella and Banana Stuffed French Toast", 700, "breakfast");
const pbToast = new Food("Toast with Peanut Butter", 600, "breakfast");
const baconAndEggs = new Food("Eggs with Bacon and Hashbrowns", 900, "breakfast");
const chickenWaffles = new Food("Chicken and Waffles", 800, "breakfast");
const cheatBreakfastItems = [avoToastWBacon, frenchToast, pbToast, baconAndEggs, chickenWaffles];
// low-call am snacks
const hbEggs = new Food("Hard-Boiled Eggs", 140, "amSnack");
const appleButter = new Food("Apple Slices with Almond Butter", 150, "amSnack");
const yogurtChia = new Food("Greek Yogurt with Chia Seeds", 100, "amSnack");
const riceCakes = new Food("Rice Cakes with Sliced Banana", 100, "amSnack");
const cottageCheeseToast = new Food("Whole Grain Toast with Cottage Cheese and Berries", 125, "amSnack");
const lowCalAMSnacks = [hbEggs, appleButter, yogurtChia, riceCakes, cottageCheeseToast];
// normal am snacks
const proteinSmoothie = new Food("Smoothie with Protein Powder", 300, "amSnack");
const granolaBar = new Food("Whole Grain Granola Bar", 180, "amSnack");
const trailMix = new Food("Trail Mix", 200, "amSnack");
const veggieMuffin = new Food("Veggie Omelette Muffins", 300, "amSnack");
const toastButterFruit = new Food("Whole Grain Toast with Nut Butter and Sliced Fruit", 200, "amSnack");
const normalAMSnacks = [proteinSmoothie, granolaBar, trailMix, veggieMuffin, toastButterFruit];
// cheat am snacks
const butterBananaSmoothie = new Food("Nut Butter and Banana Smoothie", 300, "amSnack");
const breakfastSandwich = new Food("Breakfast Sandwich with Avocado and Bacon", 500, "amSnack");
const granolaParfait = new Food("Granola Parfait with Greek Yogurt and Berries", 350, "amSnack");
const bagel = new Food("Bagel with Cream Cheese and Smoked Salmon", 500, "amSnack");
const proteinPancakes = new Food("Protein Pancakes with Toppings", 500, "amSnack");
const cheatAMSnacks = [butterBananaSmoothie, breakfastSandwich, granolaParfait, bagel, proteinPancakes]
// low cal lunch
const grilledChickenSalad = new Food("Grilled Chicken Salad", 350, "lunch");
const veggieWrap = new Food("Veggie Wrap", 250, "lunch");
const zucchiniNoodles = new Food("Zucchini Noodles with Shrimp", 400, "lunch");
const lentilSoup = new Food("Lentil Soup with Mixed Vegetables", 325, "lunch");
const quinoaSalad = new Food("Quinoa Salad with Roasted Vegetables", 375, "lunch");
const lowCalLunch = [grilledChickenSalad, veggieWrap, zucchiniNoodles, lentilSoup, quinoaSalad];
// normal lunch
const grilledChickenWrap = new Food("Grilled Chicken Wrap", 425, "lunch");
const buddhaBowl = new Food("Quinoa Buddha Bowl", 450, "lunch");
const turkeyBurger = new Food("Turkey or Veggie Burger with Sweet Potato Fries", 550, "lunch");
const salmonSalad = new Food("Salmon Salad", 475, "lunch");
const pastaVeggies = new Food("Whole Wheat Pasta with Vegetables", 550, "lunch");
const normalLunchItems = [grilledChickenWrap, buddhaBowl, turkeyBurger, salmonSalad, pastaVeggies];
// cheat lunch
const steakSweetPotato = new Food("Steak and Sweet Potato", 700, "lunch");
const chickenAlfredo = new Food("Chicken Alfredo Pasta", 800, "lunch");
const beefStirFry = new Food("Beef Stir-Fry with Rice", 850, "lunch");
const salmonQuinoa = new Food("Salmon with Quinoa and Avocao", 650, "lunch");
const veggieSandwich = new Food("Loaded Veggie Sandwich", 600, "lunch");
const cheatLunchItems = [steakSweetPotato, chickenAlfredo, beefStirFry, salmonQuinoa, veggieSandwich]
// low cal pm snacks
const edamame = new Food("Edamame", 150, "pmSnack");
const yogurtAndBerries = new Food("Greek Yogurt with Berries", 125, "pmSnack");
const carrotHummus = new Food("Carrot Sticks and Hummus", 100, "pmSnack");
const popcorn = new Food("Air-Popped Popcorn", 100, "pmSnack");
const riceCakesNutButter = new Food("Rice Cakes with Nut Butter", 150, "pmSnack");
const lowCalPMSnacks = [edamame, yogurtAndBerries, carrotHummus, popcorn, riceCakesNutButter];
// normal pm snacks
const cottageCheese = new Food("Cottage Cheese with Fresh Fruit", 200, "pmSnack");
const crackers = new Food("Whole Grain Crackers with Cheese", 250, "pmSnack");
const normalPMSnacks = [cottageCheese, crackers, yogurtParfait, trailMix, appleButter];
// cheat pm snacks
const avoToastWEggs = new Food("Avocado Toast with Eggs", 350, "pmSnack");
const energyBalls = new Food("Energy Balls", 275, "pmSnack");
const pbBanana = new Food("Peanut Butter and Banana Sandwich", 450, "pmSnack");
const meatCheeseCrackers = new Food("Crackers with Meat and Cheese", 425, "pmSnack");
const smoothieWNuts = new Food("Protein Smoothie with Nuts", 400, "pmSnack");
const cheatPMSnacks = [avoToastWEggs, energyBalls, pbBanana, meatCheeseCrackers, smoothieWNuts];
// low cal dinner
const chickenVeggies = new Food("Grilled Chicken Breast with Steamed Vegetables", 400, "dinner");
const salmonAsparagus = new Food("Baked Salmon with Roasted Asparagus", 450, "dinner");
const vegStirFry = new Food("Vegetable Stir-Fry with Tofu", 300, "dinner");
const zuccNoodlesTomato = new Food("Zucchini Noodles with Tomato Sauce", 300, "dinner");
const turkeyChili = new Food("Turkey or Veggie Chili", 375, "dinner");
const lowCalDinnerItems = [chickenVeggies, salmonAsparagus, vegStirFry, zuccNoodlesTomato, turkeyChili];
// normal dinner
const shrimpTacos = new Food("Grilled Shrimp Tacos", 425, "dinner");
const yakiChicken = new Food("Teriyaki Chicken Stir-Fry", 500, "dinner");
const meatballs = new Food("Spaghetti with Turkey Meatballs", 475, "dinner");
const bakedChicken = new Food("Baked Chicken with Roasted Vegetables", 450, "dinner");
const vegQuinoa = new Food("Veggie Quinoa Bowl", 400, "dinner");
const normalDinnerItems = [shrimpTacos, yakiChicken, meatballs, bakedChicken, vegQuinoa];
// cheat dinner
const beefSteak = new Food("Beef Steak with Roasted Potatoes", 700, "dinner");
const pastaShrimp = new Food("Creamy Pasta with Shrimp", 800, "dinner");
const stuffedChicken = new Food("Stuffed Chicken Breast", 725, "dinner");
const cheeseburger = new Food("Cheeseburger with Sweet Potato Fries", 750, "dinner");
const salmonVegQuinoa = new Food("Salmon with Quinoa and Roasted Vegetables", 650, "dinner");
const cheatDinnerItems = [beefSteak, pastaShrimp, stuffedChicken, cheeseburger, salmonVegQuinoa];

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];


function generateRandomFood(foodArray) {
    randomIndex = Math.floor(foodArray.length * Math.random());
    return foodArray[randomIndex];
}


function generateDay(weekday) {
    userGoal = document.querySelector('#userGoals');
    if (userGoal.value == "loseWeight") {
        var breakfast = generateRandomFood(lowCalBreakfastItems);
        var amSnack = generateRandomFood(lowCalAMSnacks);
        var lunch = generateRandomFood(lowCalLunch);
        var pmSnack = generateRandomFood(lowCalPMSnacks);
        var dinner = generateRandomFood(lowCalDinnerItems);
        var loseDay = new Day(weekday, breakfast, amSnack, lunch, pmSnack, dinner);
        return loseDay;
    }
    else if (userGoal.value == "maintainWeight") {
        var breakfast = generateRandomFood(normalBreakfastItems);
        var amSnack = generateRandomFood(normalAMSnacks);
        var lunch = generateRandomFood(normalLunchItems);
        var pmSnack = generateRandomFood(normalPMSnacks);
        var dinner = generateRandomFood(normalDinnerItems);
        var maintainDay = new Day(weekday, breakfast, amSnack, lunch, pmSnack, dinner);
        return maintainDay;
    }
    else {
        var breakfast = generateRandomFood(cheatBreakfastItems);
        var amSnack = generateRandomFood(cheatAMSnacks);
        var lunch = generateRandomFood(cheatLunchItems);
        var pmSnack = generateRandomFood(cheatPMSnacks);
        var dinner = generateRandomFood(cheatDinnerItems);
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

function checkCalories() {
    var userCalories = document.getElementById("userCalories").value;
    if (isNaN(userCalories) || userCalories >= 10000) {
        return false;
    }
    else {
        return true;
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

    html = ("<html>\n<head>\n<title>Your Personalized Meal Plan</title>\n</head>\n<body>\n");
    html += ("<body>\n");
    html += (userWeek.dayOne.name + ": Breakfast: " + userWeek.dayOne.breakfast.name);
    html += ("</body>\n");
    html += ("</html>");
    flyWindow = window.open('about:blank', 'myPop', 'width=400, height=400, left=400, top=400');
    flyWindow.document.write(html);

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
myButton.addEventListener("click", createWeek);


