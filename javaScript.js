document.getElementById("mode").addEventListener("click",function(){
    document.querySelector(':root').style.setProperty('--bg','#FCAEAD')
    document.querySelector(':root').style.setProperty('--textColor' , '#0E0C00')
    document.querySelector(':root').style.setProperty('--headerTextColor' , '#800080')
    document.querySelector(':root').style.setProperty('--headerBackgoundColor' , '#008000')
})

document.getElementById("switch").addEventListener("click",function(){
    document.querySelector(':root').style.setProperty('--bg','#BA67FC')
    document.querySelector(':root').style.setProperty('--textColor' , '#0E0C00')
    
})



document.getElementById("default").addEventListener("click",function(){
    document.querySelector(':root').style.setProperty('--bg','#00000')
   

})