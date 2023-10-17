const search=document.getElementById("searchbox")
const box=document.querySelectorAll(".box")
const btn=document.querySelectorAll(".btn")
const idly=document.querySelector("#idly")
const dosa=document.querySelector("#dosa")
const chapati=document.querySelector("#chapati")
const pizza=document.querySelector("#pizza")
const btnall=document.getElementById("all")


idly.addEventListener('click',()=>{
    let btnidly=idly.dataset.index
    box.forEach((btnbox)=>{
        let btnval=btnbox.dataset.index
        if(btnidly===btnval){
            btnbox.style.display='block'
    
        }else{
            btnbox.style.display='none'

        }
    
    })

})

dosa.addEventListener('click',()=>{
    let btndosa=dosa.dataset.index
    box.forEach((btnbox)=>{
        let btnval=btnbox.dataset.index
        if(btndosa===btnval){
            btnbox.style.display='block'
    
        }else{
            btnbox.style.display='none'
        }
    })

})
chapati.addEventListener('click',()=>{
    let btnchapati=chapati.dataset.index
    box.forEach((btnbox)=>{
        let btnval=btnbox.dataset.index
        if(btnchapati===btnval){
            btnbox.style.display='block'
    
        }else{
            btnbox.style.display='none'
        }
    })

})

pizza.addEventListener('click',()=>{
    let btnpizza=pizza.dataset.index
    box.forEach((btnbox)=>{
        let btnval=btnbox.dataset.index
        if(btnpizza===btnval){
            btnbox.style.display='block'
    
        }else{
            btnbox.style.display='none'
        }
    })

})


search.addEventListener('keyup',(even)=>{
    let searchvalue=even.target.value.toLowerCase().trim()
    console.log(searchvalue)
    
    box.forEach((boxs)=>{
        let data=boxs.dataset.index;
        if(data.includes(searchvalue)){
            boxs.style.display='block'
        }else{
            boxs.style.display='none'
        }
    })
})

btnall.addEventListener('click',()=>{
    box.forEach((boxval)=>{
        let imfbox=boxval.dataset.index
        console.log(imfbox)
        boxval.style.display='block'


    })
})

