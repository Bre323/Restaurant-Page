const generateContactPage = () => {
    let content = document.getElementById('content');
    let contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    let title = document.createElement('h2');
    title.innerText = 'Contact Us';
    let email = document.createElement('p');
    email.innerText = 'Email: peezapizza@mail.com';
    let phone = document.createElement('p');
    phone.innerText = 'Phone: 91234-0000';

    contactDiv.append(title, email, phone);
    content.appendChild(contactDiv);

    return content;
}

export default generateContactPage;
