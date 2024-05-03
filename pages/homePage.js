import peezaPizzaImg from  '../src/assets/peeza-pizza-image.jpeg';

const generateHomePage = () => {
    let content = document.getElementById('content');
    let homeDiv = document.createElement('div');
    homeDiv.classList.add('home');


    let description = document.createElement('div');
    description.classList.add('description');

    let descriptionImage = document.createElement('img');
    descriptionImage.src = peezaPizzaImg;
    descriptionImage.alt = 'Peeza Pizza Image';

    let descriptionText = document.createElement('p');
    descriptionText.innerText = 'Peeza Pizza is the best pizza out there. Lot of different flavors that make you want to eat lots of pizza. Check our menu and enjoy.';

    let hours = document.createElement('div');
    hours.classList.add('hours');

    let hoursTitle = document.createElement('h2');
    hoursTitle.innerText = 'Hours';

    let hoursList = document.createElement('li');
    let monday = document.createElement('ul');
    let tuesday = document.createElement('ul');
    let wednesday = document.createElement('ul');
    let thursday = document.createElement('ul');
    let friday = document.createElement('ul');
    let saturday = document.createElement('ul');
    let sunday = document.createElement('ul');
    monday.innerText = 'Monday: 6am to 8pm';
    tuesday.innerText = 'Tuesday: 6am to 8pm';
    wednesday.innerText = 'Wednesday: 6am to 8pm';
    thursday.innerText = 'Thursday: 6am to 10pm';
    friday.innerText = 'Friday: 6am to 10pm';
    saturday.innerText = 'Saturday: 6am to 6pm';
    sunday.innerText = 'Sunday: 6am to 3pm';


    hoursList.append(monday, tuesday, wednesday, thursday, friday, saturday, sunday);
    hours.append(hoursTitle, hoursList);
    description.append(descriptionImage, descriptionText);
    homeDiv.append(description, hours);
    content.appendChild(homeDiv);

    return content;
}

export default generateHomePage;
