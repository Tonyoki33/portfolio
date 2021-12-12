$(()=>{
    class Posts {
        constructor(id,photo,description){
            this.id = id;
            this.photo = photo;
            this.description = description;
        }
    }
    
    let posts = [];

    const pageThree = document.getElementById("page_three");

    // Buttons
    
    const portfBtn = document.querySelector("#portfolio_btn")


    const spanishBtn = document.querySelector("#spanish_btn");
    
    posts.push(new Posts(1,
                        "data/media/images/coffee_shop.png",
                        "In this work I worked on the principal features of an ecommerce store"));

                        posts.push(new Posts(2,
                            "data/media/images/coffee_shop.png",
                            "In this work I worked on the principal features of an ecommerce store"));

                        posts.push(new Posts(3,
                                "data/media/images/coffee_shop.png",
                                "In this work I worked on the principal features of an ecommerce store"));
    
    
    
    
    
    // functions
    // const addImg = () => {
    // $(".card_one").css({
    //     "background-image":`url(${posts[0].photo})`,
    //     "grid-column":"1/2",
    // })}
    // addImg();
    // events
    
    //// Animations

    
    
    //// Language settings
    
    spanishBtn.onclick = (e) => {
        e.preventDefault();
        $("#static_txt--en").toggleClass("hide");
        $("#static_txt--es").toggleClass("active");
    }
    
})

