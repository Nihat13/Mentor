const text = document.querySelector(".banner")

const product = [
    {
        img:"https://assets.nicepagecdn.com/11a8ddce/2057428/images/1.jpg",
        title:"General Dentist",
        content:"Dr. Bob Brown"
    },
    {
        img:"https://assets.nicepagecdn.com/11a8ddce/2057428/images/1.jpg",
        title:"General Dentist",
        content:"Dr. Bob Brown"
    },
    {
        img:"https://assets.nicepagecdn.com/11a8ddce/2057428/images/1.jpg",
        title:"General Dentist",
        content:"Dr. Bob Brown"
    },
    {
        img:"https://assets.nicepagecdn.com/11a8ddce/2057428/images/1.jpg",
        title:"General Dentist",
        content:"Dr. Bob Brown"
    },
    {
        img:"https://assets.nicepagecdn.com/11a8ddce/2057428/images/1.jpg",
        title:"General Dentist",
        content:"Dr. Bob Brown"
    }
]

let cart = "";

product.forEach((item) => {
    cart += `
    <div class="col-sm-2 col-md-6 col-lg-4">
                        <div class="cart">
                            <div class="cart_img">
                                <img src=${item.img} alt="">
                            </div>
                            <div class="img-text">
                                <h5>${item.title}</h5>
                                <h4>${item.content}</h4>
                            </div>
                        </div>
                    </div>
    `
})

text.innerHTML = cart;