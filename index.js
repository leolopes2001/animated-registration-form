


let count = 1;
const changeImg = () => {
    const img = document.querySelector(".slider .selected")

    img.classList.remove("selected")


    if(count === 3){
        const img = document.querySelectorAll(".slider img")[0]
        
        img.classList.add("selected")
        count = 1
        return
        
    }
    img.nextElementSibling.classList.add("selected")
    

    count++
};

setInterval(() => {
  changeImg();
}, 7000);
