const text = document.querySelector(".banner")

const product = [
    {
        img:"data:image/png;base64,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",
        title:"Salam"
    },
    {
        img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAEflJREFUeF7tXXnUdlMV//0qFZaUlFKUqRKfKPIRGTJkLFGGrCYsZCasREVllblFkooGZA6NUhlSlHwRDSKLQqFBmkj5tX6fcx/nfd77vM8dzr3P+z7v3X993/vce84+e//uOfvsvc8+RAskaQcAJwN4AMD2JG9toduuiwISYIFnaj8i6UEAi4eGLiD5ttqNdg0kkUBbAFDE7VUkN0jCfddIbQl0AKgtwpndQAeAma2/2ty3BYBfAlgxcHsqyb1qc941kEQCbQFgZQBHAPgTgMNJ/jUJ910jtSUwJQAkPQPAIQBeAuBEkr+o3WONBiRtBWA7AFeQPKtGU92rQQLDAOCv9qjw7N8AbELyJ6OQnqQ9AJwKION5XZLXjoKXcepzGAA+B2CXaMAjAUGO8s3SziTPHidljGIswwCwEoAfAlg0Yu6PAJYl+e82GJa0BoDrATwl6u/nAOa2xUMb4xxVH0ONQEmvBfCdPhAsR/LONpiWtCuAz0Z93QLgDSTtXeyopgSGAsDtBxBcBmAJABfbECMZe/dqsjH4dUl2IV8HYHkAtj+27JSfTtyFABBAsBCAFwK4s6jyJS0GYHUALwOwMIBHAPwBwO8A3EDyf0WGIunpYSfivgu9U6Td7pknLepkspBkUO0IwFb72gCeOqDxPwP4OoDTSHqN72gEEig8AxTlTdLHABxW9HmvMGFZOaQtu6IEb2P/aBMA8K7BX35ZeijkCtjg7KglCTQBAPv5nfzhtr3eXwTg5vDvpwF4EYDXA9gMwLP6xvlfALuS/GJL45/13SQHQDAY7T9YEMA8ko/nSVmSjcIDgqt5keiZ/wDYiOQPZr12WhBAIwAow7ckRwkvBbBC9J73+CuStKHYUYMSqAwASfbMnQJgi2DEHVh0e9g/Hkn2L3iPv3T020kkPUN01KAE6gDg7QDiiNwGJK+qyqukVwP4MQDbCaZH7T8gaZ9BRw1JoA4ArgGwbsTXOiS9A6hMkk4HsFvUwMEkj6vcYPfiUAlUAkDw8DnFO3Py2Npfqq6XTpI9hrdFXF9LMgbZ0AF1D5STQFUAbALg8qirU0juU67r/KclOenkleFXu30XJPlYira7NiZLgNGhjSxv3085h2/gAQ5Je4e9ftbi7iQ9fdcmSV92rD9qyDPLPXkNV+G9NoNj1oAB4Kn8eTnjOp/k9gMEb1evXb4ZOUL3jRSykXQMgIOjttYclIVUhfcUPI5TGwZAnLEbj21g9q6k/Z0jGD28DclLUghG0icB7Bu1tSpJexInURXeU/A4Tm0YAFnGrkO3Gf1mquxdST7adV70/F4kna9XmyRdEBI/s7aWIOlZKg8ApXmvzeCYNVDVCFwzpGll4jiXpEPAtSg4l+4F8ILQ0D8BLFLVwVSLmVnyclUA2Fnj3MDnBjk9DGBJklZYZZLkINHVUQOXkNymcoPdi0MlUAkAblXSFwC8M+rhCJIfHdrjFA9I+q7z/aJH3tVFButIdPi7dQAwF8CPojz9vwOwxf6r4d3mrufvABCHgb3uL0/S7XbUkAQqAyDMAhcC2Dbi7Xa7h0neX4ZfSa8D4K//mdF7e5P8VJl2umfLS6AuAJYFcCOAZ0ddO3jjbeG8IuxI8pf/mT7l/9RZRZ0HsIgE6z1TCwBhFrBb2E6gLIrnPzuz50wAx5H0lnICBWt/HQAfBtBfLMJxhTVIejfQUcMSqA2AAAIbg3YFO327n+xo8mzgZcEgWTJEEbOtXvy8lW+vYqHZo2HZzIrmkwAggMBRO+f/5bmViwjT0/6buy+/iKjSPZMMAAEE9ib6OPl+fWv6VBw77etYAM4AchJIRy1KICkAMr4lLeVoIoA3AVgr53DIv0I42bmAF3dbvRY13tdVYQCEU7qvAmDvnCt9FCJJXved8/diAD5RfH+FbaLzA7xVvLxLESsk9sIPFQJAOJ/vPbkTQe8AsBJJp283TpKsfBuFrlbiwyObjqpIReODHUEHQwEwoDjDCiQNhMZJknME42STkRSpaHygI+pgWIGIrT3lR+5es+n0bTtpWjmlK8mp4s4HiJ1NngnmDMoUGpEsZ2S3wwBg37w9dRmNpDjDgCIV7ybpgFRHNSQwDADOzXOOnsllWXxkaySVOQIInIjqmcDG5CptLUM15DvtXy1iA9jB42n4qyS9fRsZSfJOYiPXLSLpwFNHNSUwFAA125//elcuPoUUm2mjLQB05eKb0V/tVtsCQFcuvraqmmlgxgEg2AH2LD5E8rfNiKV8q6HegY+4ux7C7dOlhmGo2eQKay7GcR9JR1x7NGMAIGlLAM45tDs6I9cqPJrk58urLM0bkhze/gSAtwZvpRv2LsVVTA8b4a7JunW1FgfnHJvJyH4c8/U9/6EtANQqFy/JJ5Gs/EH8utLYnmlUWryVcKbCW1ODII/udjmctuMXkhYA8CUAvqspjzxL7enjfG0BoHK5eEkfBHBkAbW0mkEclP/9AvkP3rI6+6kVCsr/Sl+uZl7fztpavRUAVB25pLhaedaM9/9OQbN/4jVR27eRfEXVvsq8N0D5Do6dE7Ke/OXFKXLrk4zPO5TprvCzUyjflVZdfMNnLFz6P6Ozpy0ABijf5eE3d/5ACDM7IXWVaEA+nDLByCksvYIPDlC+HWROZbvSzUhyQsxJUZNHknT+Y2M0hfJd8d2ntx8PpXico5lVZ7tvWgJgCuVvRvIfmRRzKoqs3OSlFlMof4u4PI4kl8e9IdL2ySTjA69JgVBE+ZHM/NG4HI/pkWkHgBLK97E0xycyA8yGzeJNXUdTVPlhBnCdRNdQyMhVUJ32lpxKKt+Kd1leG4mmO6YVAEoq3wdJVo0keg3J9ZJL+Ikp3UZsv8HnaX/Clx+UfziAj0R8GJiemSqdmJpqPCWV7zF46/f8qM0Tpg0AairfFq2rlCW/Qqam8i3rM0m+JzUwEyjfaX1zpgUAairfbmbXJ/h0A0Ku8+WbHVdN8z1LSaOoJZXvnZF3IPGXb35sTF89cgAkUP6+JF2wMikl+PKtfButSQ+3llF+WJLsqPLprYys/K1IeklrxxM4SDOd8sthtqzyAwC8NV0/9DRB+SMFQKf85pUfAODYiZNq7Zjar99OGskSIOlQAB/vE8GkKVOS07+uCNfOZI97zfdAvNVKSpK8XvqLic8tTvpqgmAdZHEQKCbXS3hjA9O+C3I6Na+/DM8Zrqw6qCJ7EeG0DoAZ+OX3PHw9BEr9W73M4Bvpmh9uerVf5O6ioGgVAJ3yi3yTTz5TZs2X5DsavhnyN78dXNNDU/dbA0Cn/MaVb6s+3uqtRvKmYb22AoBO+cPUMPH3Cl9+v/J9cMa3uw69pb1xAEjKM5Y6g28AJiQVNviC0Wrl+z7HjGy0bp1l/AyDXqMA6JQ/TPyTvvxWld+oH6BT/vRXfmMA6JQ/M5TfCAA65c8c5ScHQKf8maX8pADolD/zlJ8MAJ3yZ6bykwCghPKfA8AXQzthsudW7wI7PVlMCuyk2OcPg2YtP0BND59526flZI6igZ2monpOxsw7tNFL3e59GU/49vs9fD5y5jHMT+ZIQZUBkED55n8Bks7nS0ZF8vYjIedF9fxzsitwor7qKt9N3URytWTCqpoRVHPaj/lPCoAE8fyMt6QASODezfgaPQASKj/pDJBQ+UlngITKH/0MIGl3AKf1TUFOxe4/seNDG/15+87kcYJkdiwpGQASTPuuPbhoNK4kM0DJqF5e3r4DO146soMco50BJDmKt3YkqDLK99Eo1w52kaeMai8BCZTvMfluAxtiyZaARMrfKlRgz2okjhwAzuNzPp+plPJt7Utyfl8yACRS/maewVLeg5hK+bb2JTmmP20A4FrBvjTSd/ucE9cLljRo2u/l7acEQCrlh5PGyS7CTKl8f2XTCgCDth+SCjl5UgEggcE3YZ+f6ibUCgZfXgbyhGSOkQFA0nYAXNnCt4L6RGkuFfnyo71w7SUg5Zcf8VV7Bkj95Ue8tb8E9Dl5bIkuR9I3hU6gMsoP01ktADSh/MBXLQA0pfyRLAEDPHyTrnAvq/y6AGhK+XUB0KTyWwfAAOV7nXKRaJ9zn09VlF8HAE0qvw4AmlZ+qwCo6eErdFyrihGY2uDLM2SqGIFNGHwDeGveBpD0vnBzV8xDryBT3S+/qhEoyRUubbHHV9FNKMgUtV35uFZZAITqm64I1l+HLy+qN8jD1zuiPcjAbmUGkLRmELL3+BklV37ZJSDcLuqqlnEpuOTKr7IEhGt0+gtSJFd+WwC4AIC3fBnlHdoY6uSZCsVVZgBJG4cEkuz1RpRfEQAuUbtMNOZGlN8WAHyla3amzOuNr2z/S6ppPwZGGRtAkkvDfiB6fw+SvmS6R0p0SrfMEhDuMHIJ2Ix846l3SbGRXGva7xtjszaApEeiIsfzSPam3KrW/qDZoCQA+kut+UJpC3s+pVJ+2RlA0pxQni5j5XSSjpJmfCVTflszgCtHusy5ydk5G7voYaiC7ZKscSk2W/uVa/KUBMDBAI6JwOQLona17gF8CIBrCMdUuSZPyRnAbm9X2MpsJs+gc0neJckfj49o9xdkKmTw5X04jbuCJbmAoXcBGflMuUHhmrILRX+vpfyA5sKeQEkvB+Aq47Fxel+ox++7g5Iov+wMEJ6P6+74T55FbReYZ5/vyyi3ukieogf9rQ0AGK2uuOlLGAbyERI4fXtoZSozAwRBO/mkN70O6Ljyl5+1V2YGCHzNBXBNlKiRx1pt5Ye+mrUBQidO1f5aX22cbFCugv3eFJcyVACAr4t1Fq2rXOfRt3xJdd2aPGUBEGRmH4ATSRwa7ycvEduSNEhqUeMzQPQVeKt3gGvIhRsmXGTA6cfHpypzWhYAQdDOXPZtHLuEyuD+/60AbBM4J6FnfVeVdBUABN5sOx0UklwWA3BvsAEssweq8hO/1xoAUjA7rI0qABjWZorfqwIgRd/D2ugAMExCCX7vAJBAiEWa6GaAIlKa+Ew3A5SXWek3uhmgtMiqvdDNAOXl1s0A5WVW+o1uBigtsmovdDNAebmNxQwQEihcstxVq53kkdHOo76WPkT3nEyyW8TXeY5EjvJq2lD317elnhU5m3wjmm8fuYLk0DKwReBW+Xh4kcaDs8Tlyh0vjwtDxK97UAeRtMevNZJkD56rffvG0ezsXdy/BWxP34F1PY1lByXJzjhHQ+M7/uJm7AhzlfCB6fpF+2wUACGp41IACxZgqPG79TIeJC0SytA7G2oY3QJgQ5J27zZOkvYHcEKBo/t20e9I8uI6TDUGAEnOmLkZgIVdlHZqYyaQdBGAtxRlKrjEnRntiGhjJMlnFB2CL6qXRwE4T8IgrURFOyrdeI6QfQT7/QDOB+BIma94OxFAfN2rY+vLNHn1uqRNAbicekznAjjK9+gBeGk4AOu1NpbPDiRtGzRCIcvYYfhlow7uCvEZh9F944dB6xyJxaNnriS5YVWmGgGAJBcvvieK5RupTpvyjNAjSQsDcJZPDIKdSfrq9UZIkpekraPGTyDpgM4Eysk4uppkdvdOct4kbR6+/qzt3zsZJ07P8w+SlgPws76ZdUWSv67CVFMA8NUmTpvO6FiSrho+iYLBc1n0wxkkHflrhCQ9HAnPEbulSRqg/QBwYoe/wCz55DEXtyDp5I/klJOY4zC3Z8s8mfkeYmdFZeRwfaVr8yYBQNJSwfrMi3MXHbizjONEDjPsxI08cmWOC6MfPCN4qWiCbIzGYHPaeZx42t+nhRxf/e5tq5epJshjjqfynQA8OKCjNQAcHf3mj807lqnIwL2LpGfmHvUAENZGF4CIcwCbGGjX5mgl4OXjUJK2K54wciR5L+zLF+P8u9Gy2fXepAScROM6SKdRkm+U9lQYJzM22XnX9vSQgDPA1zAA7IGLz7g5u/USADZ6OhofCdjb6dzK+ETTOQaAXbHZRYneq69AcpDxMT7imIUjkeRDtvZ1ZKX6/mAADDwZNAtlNPZDlnQjAC/7pkcNACPCzgWTp/31SF439pKYhQOU5BqPV0XBr9sNAAcenA6ekUEwL1T1nIViGtshOybjLz+OfB5vAHj9dzAh9i+PrRS6gfUkYDtvTuYHWCt4yDoQzA6EWPmuR3h97An02UD7652M4IhYXpLE7BDPeI7SS7tjG3aFOzYz36X9f10SHlvJiAmVAAAAAElFTkSuQmCC",
        title:"Salam"
    },
    {
        img:"data:image/png;base64,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",
        title:"Salam"
    },
    {
        img:"data:image/png;base64,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",
        title:"Salam"
    },
    {
        img:"data:image/png;base64,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",
        title:"Salam"
    },
    {
        img:"data:image/png;base64,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",
        title:"Salam"
    },
    
]
console.log(product);


let cart = "";

product.forEach((item) => {
    cart += `

    <div class="cart">
                <div class="cart_img">
                    <img src=${item.img} alt="">
                </div>
                <div class="cart_text">
                    <h4>${item.title}</h4>
                </div>
            </div>
    
    
    
    `
})

text.innerHTML = cart;


let a = "5";
let b = "8";

console.log(a+b);

//! string tekrar olacaq + number 