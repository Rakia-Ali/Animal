const nextbutton  = document.querySelector("#next")
const prevbutton  = document.querySelector("#prev")
const imageSlider = document.querySelector("#slider")


const images = [
  "https://images.pexels.com/photos/210237/pexels-photo-210237.jpeg",
  "https://images.pexels.com/photos/1366913/pexels-photo-1366913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1366913/pexels-photo-1366913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/85681/horse-wild-horse-marsh-pony-swamp-85681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2928178/pexels-photo-2928178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
]

let indexNumber = 0

const current = document.querySelector("#he")


nextbutton.addEventListener("click" , function(){
  if(indexNumber <= images.length -1){
  imageSlider.src = images[indexNumber]
  current.innerHTML = indexNumber
  indexNumber++
  }
  if(indexNumber == images.length){
    current.innerHTML = "End"
  }
})

prevbutton.addEventListener("click" , function(){
  if(indexNumber > 0){
    indexNumber--
    imageSlider.src = images[indexNumber]
    current.innerHTML = indexNumber

  }
  if(indexNumber == 0){
    current.innerHTML = "End"
  }
})