fetch("/employees")
    .then((response) => response.json())
    .then((data) => {
        // data = JSON.parse(data);
        data.quotesArray.forEeach((employee) => {
            const cardTemplate = document.querySelector('template');

            const card = cardTemplate.content.cloneNode(true);

            card.querySelector('h4').innerText = employee.name;
            card.querySelector('p').innerText = employee.title;

            document.body.appendChild(card);
        });       
    });