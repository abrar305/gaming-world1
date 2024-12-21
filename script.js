document.addEventListener("DOMContentLoaded", () => {
    const searchIcon = document.getElementById("searchIcon");
    const searchInput = document.getElementById("searchInput");
    const gameImages = document.querySelectorAll(".imgs-container img");


    searchIcon.addEventListener("click", () => {
        if (searchInput.style.display === "none") {
            searchInput.style.display = "inline-block"
            searchInput.focus();
        } else {
            searchInput.style.display = "none"; 
        }
    });

    // وظيفة البحث في الألعاب
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLowerCase(); 
        let found = false;

        gameImages.forEach((image) => {
            const gameName = image.getAttribute("data-name").toLowerCase(); 

            if (gameName.includes(query)) {
                found = true;
                image.style.border = "3px solid red"; 
                image.scrollIntoView({ behavior: "smooth", block: "center" });
            } else {
                image.style.border = "none"; 
            }
        });

        if (!found && query) {
            console.log("No game found with that name.");
        }
    });
});

document.getElementById("moreButton").addEventListener("click", () => {
    
    const newGames = [
        { src: "images/screenshot-1734355956561.png", name: "subway-surfers", link: "https://poki.com/ar/g/subway-surfers" },
        { src: "images/photo_5978629244248507761_y.jpg", name: "ball_fall_3d", link: "https://ar.y8.com/games/ball_fall_3d" },
        { src: "images/photo_5978629244248507765_y.jpg", name: "mr_bean_coloring_book", link: "https://ar.y8.com/games/mr_bean_coloring_book" },
        { src: "images/photo_5978629244248507766_y.jpg", name: "roxie_s_kitchen_thanksgiving_cupcake", link: "https://ar.y8.com/games/roxie_s_kitchen_thanksgiving_cupcake" },
        { src: "images/photo_5978629244248507768_y.jpg", name: "soccer-skills-euro-cup", link: "https://poki.com/ar/g/soccer-skills-euro-cup" },
        { src: "images/screenshot-1734359201912.png", name: "moto-x3m", link: "https://poki.com/ar/g/moto-x3m" },
        { src: "images/photo_5978629244248507779_y.jpg", name: "nuts-and-bolts-screwing-puzzle", link: "https://poki.com/ar/g/nuts-and-bolts-screwing-puzzle" },
        { src: "images/photo_5978629244248507781_y.jpg", name: "sushi-party-io", link: "https://poki.com/ar/g/sushi-party-io" },

        { src: "images/photo_5980881044062193445_y.jpg", name: "master-chess", link: "https://poki.com/ar/g/master-chess" },
        { src: "images/photo_5980881044062193442_y.jpg", name: "ludo-hero", link: "https://poki.com/ar/g/ludo-hero" },
        { src: "images/photo_5980881044062193444_y.jpg", name: "monkey-mart", link: "https://poki.com/ar/g/monkey-mart" },
        { src: "images/photo_5980881044062193443_y.jpg", name: "blockpost", link: "https://poki.com/ar/g/blockpost" },

    ];

    
    const imgsContainer = document.querySelector(".imgs-container");

    
    newGames.forEach((game) => {
        const box = document.createElement("div");
        box.classList.add("box");

        const anchor = document.createElement("a");
        anchor.href = game.link;
        anchor.target = "_blank";

        


       
        const img = document.createElement("img");
        img.src = game.src;
        img.setAttribute("data-name", game.name);
        img.alt = game.name;

       
        const caption = document.createElement("div");
        caption.classList.add("caption");
        const captionText = document.createElement("h4");
        captionText.textContent = game.name;
        caption.appendChild(captionText);

    
        anchor.appendChild(img);
        anchor.appendChild(caption);

    
        box.appendChild(anchor);

        
        imgsContainer.appendChild(box);
    });

    
    document.getElementById("moreButton").disabled = true;
    document.getElementById("moreButton").innerText = "No More Games";
});
