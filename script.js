var contentBox = document.querySelector(".box-container")
window.addEventListener('click',() =>{
    contentBox.innerHTML = '<iframe id="video" width="640" height="360" src="https://www.youtube.com/embed/hZQAtt7z89g?autoplay=1&loop=1&controls=0&modestbranding=1" allow="autoplay" title="YouTube video player" frameborder="0"></iframe>'
})
