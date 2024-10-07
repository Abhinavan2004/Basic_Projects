var arr =[
    {dp:"sukuna-xjixgtkkwa2ovcwy.jpg" , story:"IMG_20240123_233738.jpg"
    },
    {dp:"ai-generated-7967114_640.jpg" , story:"IMG_20240123_234249.jpg"
    },
    {dp:"avengers-modified-wallpaper.jpg" , story:"395313-sukuna-jujutsu-kaisen-4k-pc-wallpaper.jpg"
    },
    {dp:"rdj.jpg" ,story:"Acer_Wallpaper_05_3840x2400.jpg"
    },
    {dp:"images (1).jpeg" , story:"mountain-8473649_640.webp"
    },
    {dp:"cropped-1366-768-1329765.jpeg" , story:"cropped-1366-768-978464.jpg"
    },

]

var stories = document.querySelector("#stories")
var clutter = ""

arr.forEach(function(elem,id){
    clutter += `<div class="story">
    <img id="${id}" src="${elem.dp}" alt="error in loading image">
</div>`
})

stories.innerHTML = clutter
stories.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display="block"

    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display="none"
    },2000)
})