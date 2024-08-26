const cardContainer = document.querySelector(".container");

const cards = [
    {id: 1, title: "perfected strategies for you", discraption: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti voluptates, voluptatum, fugit obcaecati dignissimos maiores neque", image1: "resources/assets/images/Screenshot 2024-08-25 221858.png", image2: "resources/assets/images/images.png"},
    
    {id: 1, title: "perfected strategies for you", discraption: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti voluptates, voluptatum, fugit obcaecati dignissimos maiores neque", image1: "resources/assets/images/Screenshot 2024-08-25 221858.png", image2: "resources/assets/images/images.png"},
    
    {id: 1, title: "perfected strategies for you", discraption: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti voluptates, voluptatum, fugit obcaecati dignissimos maiores neque", image1: "resources/assets/images/Screenshot 2024-08-25 221858.png", image2: "resources/assets/images/images.png"}
];

cards.forEach(card => {
    cardContainer.innerHTML += `
        <div class="card">
            <div class="image-card">
                <div class="image-card1">
                    <img src="${card.image1}" alt="">
                </div>
                <div class="image-card2">
                    <img src="${card.image2}" alt="">
                </div>
            </div>
            <div class="card-content">
                <h4>${card.title}</h4>
                <p>${card.discraption}</p>
            </div>
        </div>
    `;
});

