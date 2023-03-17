let slideIndex = 0;

slideShow(slideIndex)
function controller(x){
    console.log('VAlue of x is : ', x)
    slideIndex += x;
    // slideIndex = slideIndex+x;  0+1 = 1
    console.log('SliderIndex Num is : ',slideIndex)
    slideShow(slideIndex)

}


function slideShow(num){

    let slider = document.getElementsByClassName('slides') 
    
    if(num === slider.length){
        slideIndex =0
        num = 0
    }
    if(num < 0){
        slideIndex = slider.length-1
         num = slider.length-1
    }
    for(i of slider){
        i.style.display = 'none'
    }       
    slider[num].style.display = 'block'

}

/* Card Script Starts */

const cardSliderData = [
    {
        imgSrc : 'images/1.jpg',
        slider_title : 'Card Tittle',
        slider_price : 'Price 200Rs'
    },
    {
        imgSrc : 'images/2.jpg',
        slider_title : 'Card Tittle - 2',
        slider_price : 'Price 200Rs',
        slider_button : 'Add To Cart'
    },
    {
        imgSrc : 'images/3.jpg',
        slider_title : 'Card Tittle -3',
        slider_price : 'Price 200Rs',
        slider_button : 'Add To Cart'
    },
    {
        imgSrc : 'images/4.jpg',
        slider_title : 'Card Tittle -4',
        slider_price : 'Price 200Rs',
        slider_button : 'Add To Cart'
    },
    {
        imgSrc : 'images/5.jpg',
        slider_title : 'Card Tittle -5',
        slider_price : 'Price 200Rs',
        slider_button : 'Add To Cart'
    },
    {
        imgSrc : 'images/1.jpg',
        slider_title : 'Card Tittle -6',
        slider_price : 'Price 200Rs',
        slider_button : 'Add To Cart'
    },
    {
        imgSrc : 'images/2.jpg',
        slider_title : 'Card Tittle -7',
        slider_price : 'Price 200Rs',
        slider_button : 'Add To Cart'
    },
    {
        imgSrc : 'images/3.jpg',
        slider_title : 'Card Tittle -8',
        slider_price : 'Price 200Rs',
        slider_button : 'Add To Cart'
    },
    {
        imgSrc : 'images/4.jpg',
        slider_title : 'Card Tittle -9',
        slider_price : 'Price 200Rs',
        slider_button : 'Add To Cart'
    },
    {
        imgSrc : 'images/5.jpg',
        slider_title : 'Card Tittle -10',
        slider_price : 'Price 200Rs',
        slider_button : 'Add To Cart'
    },

]
let cardSliderContainer  = document.getElementById('cardbox')
 let cardData = cardSliderData.map((data)=>{
    return(`
    <div class="image">
              <img src="${data.imgSrc}" class="slider_image">
              <h1 class="slider_title">${data.slider_title}</h1>
              <h4 class="slider_price">${data.slider_price}</h4>
              <button class="slider_button">${data.slider_button}</button>
          </div>
    `)
 })

 cardSliderContainer.innerHTML += cardData ;





/*  --------------Product Slider --------- */
let box = document.getElementById('cardbox')
console.log(box)

const next = () => {
    let width = box.clientWidth
    // console.log(width)
    box.scrollLeft = box.scrollLeft+width
    console.log(box.scrollLeft)
}
const prev = () => {
    let width = box.clientWidth
    box.scrollLeft = box.scrollLeft-width
    console.log(box.scrollLeft)
}

/* card script ends */
