window.addEventListener('DOMContentLoaded',function(){
  initImages()
})




function initImages(){
  const images = [].slice.call(document.getElementsByClassName("image"))
  // const display = document.getElementById("display")
  // display.addEventListener("click",unset)

  // function set(img,full){
  //   let src = getSrc(img,full)
  //   display.style.backgroundImage = "url(" + src + ")"
  //   document.body.classList.add("image-active")
  // }
  function getSrc(img,full){
    let bg = img.getAttribute("data-thumbnail")
    let src
    let cap = full ? window.innerWidth : 1080
    let srcset = {
      640: img.getAttribute("data-small"),
      768: img.getAttribute("data-medium"),
      1080: img.getAttribute("data-large"),
      1440: img.getAttribute("data-full")
    }
    let wset = Object.keys(srcset).sort((a, b) => a - b)
    for(let w in wset){
      if(cap < wset[w] && !src){
        src = srcset[wset[w]]
      }
    }
    if(!src){
      src = srcset[wset[wset.length - 1]]
    }
    return src
  }
  for(let i in images){
    let img = images[i]
    img.src = getSrc(img)
    // img.addEventListener("click",function(e){
    //   set(img,true)
    // })
  }
}
