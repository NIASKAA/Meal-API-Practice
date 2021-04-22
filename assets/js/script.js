const getMeal = document.getElementById("getMeal");
const mealContainer = document.getElementById("mealContainer");

getMeal = addEventListener('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(res => {
        createMeal(res.meal[0]);
    });
});

// Now we create createMeal func
const createMeal = (meal) => {
    const ingredients = [];
    // this loop will call for all ingredients from the object. For now we set it up to 20
    for(let i = 0; i <=20; i++) {
        if(meal[`strIngredients${i}`]) {
            ingredients.push(`${meal[`strIngredients$[i]`]} - ${meal[`strMeasures${i}`]}`)
        } else {
            break;
        }
    }

// newInnerHTML will make html elements whenever the api is called to get certains things
const newInnerHTML = `
    <div class = row>
        <div class = "columns five">
            <img src="${meal.strMealThumb}" alt = "Meal Image">
            ${meal.strCategory ? `<p>Category:${meal.strCategory}</p>` : ''}
            ${meal.strArea ? `<p>Area: ${meal.strArea}</p>` : ''}
            ${meal.strTags ? `<p>Tags: ${meal.strTags}</p>` : ''}
            <h5>Ingredients</h5>
            <ul>
                ${ingredients.map(ingredients => `<li>${ingredients}</li>`).join('')}
            </ul>
        </div>
        <div class = "columns seven">
            <h4>${meal.strMeal}</h4>
            <p>${meal.strInstructions}</p>
        </div>
    </div>
    ${meal.strYoutube ? `
    <div class="row">
        <h5>Video Recipe</h5>
        <div class ="videoWrapper">
            <iframe width="420" height="315"
            src="https://www.youtube.com/embed${meal.strYoutube.slice(-11)}">
            </iframe>
        </div>
    </div>` : ''}
    `;

// so newInnerHTML actually now goes into .innerHTML
mealContainer.innerHTML = newInnerHTML;

}

//Making social buttons
const floatBtn = document.querySelector(".floatBtn");
const closeBtn = document.querySelector(".closeBtn");
const socialButtons = document.querySelector(".socialButons");

floatBtn.addEventListener('click', () => {
    socialButtons.classList.toggle("visible")
});

closeBtn.addEventListener('click', () => {
    socialButtons.classList.toggle("visible")
});