const text = document.querySelector(".banner")

const product = [
    {
        img:"https://vault.uicore.co/digital-ads-software/wp-content/uploads/sites/26/2022/07/digital-ads-software-features-1.webp",
        title:"Pick a template",
        content:"Open the banner maker, <br> choose a template and start <br> customizing."
    },
    {
        img:"https://vault.uicore.co/digital-ads-software/wp-content/uploads/sites/26/2022/07/digital-ads-software-features-1.webp",
        title:"Pick a template",
        content:"Open the banner maker, <br> choose a template and start <br> customizing."
    },
    {
        img:"https://vault.uicore.co/digital-ads-software/wp-content/uploads/sites/26/2022/07/digital-ads-software-features-1.webp",
        title:"Pick a template",
        content:"Open the banner maker, <br> choose a template and start <br> customizing."
    },
    {
        img:"https://vault.uicore.co/digital-ads-software/wp-content/uploads/sites/26/2022/07/digital-ads-software-features-1.webp",
        title:"Pick a template",
        content:"Open the banner maker, <br> choose a template and start <br> customizing."
    },
]

let cart = "";

product.forEach((item) => {
    cart += `
    <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="cart">
        <div class="cart_img">
            <img src=${item.img} alt="">
        </div>
        <div class="cart_text">
            <h4>${item.title}</h4>
            <p>${item.content}</p>
        </div>
    </div>
   </div>
    
    
    
    `
})

text.innerHTML = cart;





const burger = document.querySelector(".click");
const menu = document.querySelector(".mobile");


burger.addEventListener("click", () => {
    menu.classList.toggle("open");
})