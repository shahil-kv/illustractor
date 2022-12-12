const svg=document.querySelector('#svgClick')
const path=document.querySelector('#path')
const circle=document.querySelector('#circle')
const square=document.querySelector('#square')
let squareArray=[];
let moveSquare=[]
let flag=0;
const group=document.querySelector('#group')
const points=[]
svg.addEventListener('click',function(e){
    const realNumbers={
        x:Math.round((e.offsetX/svg.clientWidth)*300),
        y:Math.round((e.offsetY/svg.clientHeight)*300)
    }
    points.push(realNumbers)
    Draw()
})

function Draw(){
    let d;
    for(i=0;i<points.length;i++){
        if(i===0){
         d=`M${points[i].x} ${points[i].y}`
        }else{
            d+=`L${points[i].x} ${points[i].y}`
        }
        path.setAttribute('d',d)

    }
}


 function DrawRectangle(){
     const rect=document.createElementNS('http://www.w3.org/2000/svg','rect')  
 group.innerHTML=''
     squareArray.map((element)=>{
        console.log(element)
        rect.setAttribute('x',element.x)
        rect.setAttribute('y',element.y)
     })
     moveSquare.map((element)=>{
        rect.setAttribute('width',element.x)
        rect.setAttribute('height',element.y)
     })
      rect.setAttribute('fill','red')
     group.appendChild(rect)
 }



function mouseMove(e){
    if(flag===1){
        const shah={
            x:Math.round((e.offsetX/svg.clientWidth)*300),
            y:Math.round((e.offsetY/svg.clientHeight)*300)
        }
        moveSquare.push(shah)
         DrawRectangle()
    }
   
}

svg.addEventListener('mousedown',()=>{
    if(flag===1){
        
    }
})
svg.addEventListener('click',(e)=>{
    if(flag===1){
        const realNumbers={
                    x:Math.round((e.offsetX/svg.clientWidth)*300),
                    y:Math.round((e.offsetY/svg.clientHeight)*300)
                } 
                squareArray.push(realNumbers)
                console.log(squareArray)
    }
})
// svg.addEventListener('mousemove',mousemove)

square.addEventListener('click',(e)=>{
  flag=1;

})
svg.addEventListener('mousemove',mouseMove)

mouseMove()

// function clicks(e){
//     if(flag===1){
//       const  circle= document.createElementNS('http://www.w3.org/2000/svg','circle')

//       const realNumbers={
//         x:Math.round((e.offsetX/svg.clientWidth)*300),
//         y:Math.round((e.offsetY/svg.clientHeight)*300)
//     }
//     points.push(realNumbers);
//      for(i=0;i<points.length;i++){
          
//          circle.setAttribute('cx',points[i].x)
//          circle.setAttribute('cy',points[i].y)
//          circle.setAttribute('id',`c${i}`)
//         }
//         circle.setAttribute('r',realNumbers.x)
//         circle.setAttribute('fill','red')
//         svg.appendChild(circle)
//       }
//       else if(flag===2){
//         const realNumbers={
//             x:Math.round((e.offsetX/svg.clientWidth)*300),
//             y:Math.round((e.offsetY/svg.clientHeight)*300)
//         }
//         squaremouse(realNumbers.x,realNumbers.y)
//       }
// }


// function mousemove(e){  
//     if(flag===1)
//     console.log(e)
//     for(i=0;i<path.length;i++){
//         if(e.target.id==`c${i}`){
//             let realNumbers={
//                 x:Math.round((e.offsetX/svg.clientWidth)*300),
//                 y:Math.round((e.offsetY/svg.clientHeight)*300)
//              }
//          ;
//         }

//     }
// }

// square.addEventListener('click',()=>{
//     flag=2;

// })
// svg.addEventListener('mousemove',squaremouse)

// function squaremouse(e){
//     console.log(e)
//     const moveNumbers={
//         x:Math.round((e.offsetX/svg.clientWidth)*300),
//         y:Math.round((e.offsetY/svg.clientHeight)*300)
//     }
//     console.log(moveNumbers)
// }