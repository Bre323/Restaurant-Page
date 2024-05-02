import cheesePizzaImg from '../src/assets/cheese-pizza.jpeg';
import chickenPizzaImg from '../src/assets/chicken-pizza.jpeg';
import margueritaPizzaImg from '../src/assets/marguerita-pizza.jpeg';
import pepperoniPizzaImg from '../src/assets/pepperoni-pizza.jpeg';

const generateMenuPage = () => {
    let pizzas = [
        {
            name: 'Pepperoni',
            price: '$29.99',
            imgSource: pepperoniPizzaImg
        },
        {
            name: 'Chicken',
            price: '$27.99',
            imgSource: chickenPizzaImg
        },
        {
            name: 'Marguerita',
            price: '$24.99',
            imgSource: margueritaPizzaImg
        },
        {
            name: 'Cheese',
            price: '$19.99',
            imgSource: cheesePizzaImg
        }
    ];

    let content = document.getElementById('content');
    let menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');
    
    for(let i = 0; i < pizzas.length; i++) {
        
        let menuOption = document.createElement('div');
        menuOption.classList.add('menu-option');

        let pizzaImage = document.createElement('img');
        pizzaImage.src = pizzas[i].imgSource;
        pizzaImage.alt = `${pizzas[i].name} Pizza`;

        let pizzaDescription = document.createElement('div');
        pizzaDescription.classList.add('pizza-description');

        let title = document.createElement('h2');
        title.innerText = pizzas[i].name;
        let price = document.createElement('p');
        price.innerText = pizzas[i].price;

        pizzaDescription.append(title, price);
        menuOption.append(pizzaImage, pizzaDescription);
        menuDiv.appendChild(menuOption);
    }
    

    content.appendChild(menuDiv);
    return content;
}

export default generateMenuPage;
