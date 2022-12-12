let squareFlag;
let flag;
let moves;
let index='';
const svg=document.querySelector('#svgClick')
const path=document.querySelector('#path')
const circles=document.querySelector('#circles')
const square=document.querySelector('#square')
const pointss=document.querySelector('#points')
const move=document.querySelector('#move')
let squareArray=[];
let moveSquare=[]
const group=document.querySelector('#group')
const circless=document.querySelector('#circles')
const points=[]

square.addEventListener('click',()=>squareFlag=2)
pointss.addEventListener('click',()=>
{ flag= 1,squareFlag=0,group.innerHTML=''}) 
move.addEventListener('click',()=>{
    moves=1,flag=0;
}) 

svg.addEventListener('click',clicks);
    function clicks(e){
        if(flag===1){
            const realNumbers={
                x:Math.round((e.offsetX/svg.clientWidth)*300),
                y:Math.round((e.offsetY/svg.clientHeight)*300)
            }
            points.push(realNumbers)
            Draw()   
        }  else if(squareFlag===2){
            const realNumbers={
                            x:Math.round((e.offsetX/svg.clientWidth)*300),
                            y:Math.round((e.offsetY/svg.clientHeight)*300)
                        } 
                        squareArray.push(realNumbers)
                        svg.addEventListener('mousemove',mouseMove)
                        mouseMove(e)
        }
        else if(moves===1){
            select(e);

        }
    }


    function select(e){
        let circleId=e.target.id
        if(!(/c\d/).test(circleId)) return 
     index= circleId.replace('c','')
     console.log(index)
     svg.addEventListener('mousemove',movingPath)
     
     console.log('selection is working')
    }
function movingPath(e){
    console.log(e)
    if(!(index>=0))  return
    const realNumbers={
        x:Math.round((e.offsetX/svg.clientWidth)*300),
        y:Math.round((e.offsetY/svg.clientHeight)*300)
    }
  points[index]=realNumbers
  Draw()
}
     
function Draw(){
    let d;
    circles.innerHTML='';
    for(i=0;i<points.length;i++){
        if(i===0){
            d=`M${points[i].x} ${points[i].y}`
        }else{
            d+=`L${points[i].x} ${points[i].y}`
        }
        path.setAttribute('d',d)
        drawCircle(points[i].x,points[i].y,i)
    }
}

function drawCircle(x,y,i){
    
    const circle=document.createElementNS('http://www.w3.org/2000/svg','circle');
    circle.setAttribute('id', `c${i}`);
    circle.setAttribute('cx',x)
    circle.setAttribute('cy',y)
    circle.setAttribute('r',1)
    circle.classList.add('my-class');
    circle.setAttribute('stroke','none')
    circle.setAttribute('fill','none')
    circles.appendChild(circle)
    if(i===points.length-1){
        circle.style.fill='red'
        circle.style.stroke='green'     
    }
    
}

// svg.addEventListener('mouseup',()=>(squareFlag=-1))
 
function mouseMove(e){
    if(squareFlag===2){
        // console.log('mosemove')
        const shah={
            x:Math.round((e.offsetX/svg.clientWidth)*300),
            y:Math.round((e.offsetY/svg.clientHeight)*300)
        }
        moveSquare.push(shah)
        // console.log(`square${moveSquare}`)
         DrawRectangle()
    }  
}

 function DrawRectangle(){
    if(squareFlag===2){
     const rect=document.createElementNS('http://www.w3.org/2000/svg','rect')  
 group.innerHTML=''
console.log(moveSquare)
console.log(squareArray)
     squareArray.map(element=>{
        rect.setAttribute('x',element.x)
        rect.setAttribute('y',element.y)
     })
     moveSquare.map(element=>{
        rect.setAttribute('width',element.x)
        rect.setAttribute('height',element.y)
     })
      rect.setAttribute('fill','red')
     group.appendChild(rect)
    }
 }

  











































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