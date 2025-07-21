const image=[
    "https://up.yimg.com/ib/th/id/OIP.0_INywwz74o8LLO4Lz7vCAHaEo?pid=Api&rs=1&c=1&qlt=95&w=175&h=109",
    "https://up.yimg.com/ib/th/id/OIP.YBwCYCzeUKyYHPLdP3He2AHaDt?pid=Api&rs=1&c=1&qlt=95&w=219&h=109",
    "https://up.yimg.com/ib/th/id/OIP.YBwCYCzeUKyYHPLdP3He2AHaDt?pid=Api&rs=1&c=1&qlt=95&w=219&h=109"
]
const con=document.getElementById("container")


function renderImage(){
    let DOMimage=""
    for(let i=0;i<image.length;i++){
        DOMimage+= `
            <img class="team-image" src="${image[i]}" >
        `
    }
    con.innerHTML=DOMimage
}
renderImage()                 