const vitaminsMinerals = ['a', 'c', 'b', 'magnesium', 'manganese', 'selenium'];

const vitaminA = ['Vitamin A protects your eyes from age-related decline', 'Vitamin A may lower your risk of certain cancers', 'Vitamin A reduces your risk of acne', 'Vitamin A supports bone health', 'Vitamin A promotes healthy growth and reproduction']

const vitaminC = ['Vitamin C may help manage high blood pressure', 'Vitamin C may lower your risk of heart disease', 'Vitamin C helps prevent iron deficiency', 'Vitamin C boosts immunity', 'Vitamin C protects your memory and thinking as you age'];

const complexB = ['Complex B maintains cell health', 'Complex B essential for the growth of red blood cells', 'Complex B boosts energy levels', 'Complex B helps eyesight health', 'Complex B is important for hormones and cholesterol production'];

const magnesium = ['Magnesium boosts exercise performance', 'Magnesium fights depression', 'Magnesium fights type 2 diabetes', 'Magnesium helps prevent migraines', 'Magnesium reduces insulin resistance'];

const manganese = ['Manganese improves bone health', 'Manganese plays a role in blood sugar regulation', 'Manganese improves brain function', 'Manganese contributes to good thyroid health', 'Manganese may aid wound healing by playing a role in collagen production'];

const selenium = ['Selenium acts as a powerful antioxidant', 'Selenium helps prevent mental decline', 'Selenium may reduce your risk of certain cancers', 'Selenium boosts immune system', 'Selenium may help reduce asthma symptoms'];


const randomMessage = () => {
    const randomVitMin = Math.floor(Math.random() * 6);
    const randomRecommendation = Math.floor(Math.random() * 5);
    
    if (randomVitMin === 0) {
        return `${vitaminA[randomRecommendation]}. Some Vitamin A Sources: beef, lamb and sausage liver; cod liver oil; salmon.` 
    } else if (randomVitMin === 1){
        return `${vitaminC[randomRecommendation]}. Some Vitamin C Sources: chilli pepper; yellow pepper; blackcurrants; kale; broccoli. `
    } else if (randomVitMin === 2) {
        return `${complexB[randomRecommendation]}. Some Complex B Sources: salmon; leafy greens; eggs; milk; beef. `
    } else if (randomVitMin === 3) {
        return `${magnesium[randomRecommendation]}. Some Magnesium Sources: dark chocolate; avocados; nuts; legumes; tofu; bananas.`
    } else if (randomVitMin === 4) {
        return `${manganese[randomRecommendation]}. Some Manganese Sources: almonds; beans; oatmeal; brown rice; spinach; pineapple.`
    } else (randomVitMin === 5) 
    {
        return `${selenium[randomRecommendation]}. Some Selenium Sources: brazil nuts; fish; pork; beef; turkey; chicken; mushrooms.`
    };

};

console.log(randomMessage())