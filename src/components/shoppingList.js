import React from "react"

import "./shoppingList.css"

const ShoppingList = ({ingredients}) => {


// console.log(ingredients);

let ingreArr = []
for (let keys in ingredients) {
ingreArr[keys] = ingredients[keys]
}



// console.log(count);

    return (
        <div>
    {ingreArr.map(el => {
        // console.log(el.id);
        return (
            <li key={el.id}class="shopping__item" >
            <div class="shopping__count">
            <input type="number" value={el.ingredient[0]} step={el.ingredient[0]} class="shopping__count-value"/>
            <p></p>
        </div>
        <p class="shopping__description">{el.ingredient}</p>
        <button class="shopping__delete btn-tiny">
            <div>
                <h2>x</h2>
            </div>
        </button>
        </li>
        )
    })}

        </div>
    )
}


export default ShoppingList
