let p0 = [500,450]
let p1 = [600,150]
let p2 = [900,150]
let p3 = [1000,450]
let t = 0.5

function setup() {
    createCanvas(1900, 900);
  }

  function draw() {

    background(250)

    if(keyIsDown(49)){
      p0 = [mouseX,mouseY]
    }
    if(keyIsDown(50)){
      p1 = [mouseX,mouseY]
    }
    if(keyIsDown(51)){
      p2 = [mouseX,mouseY]
    }
    if(keyIsDown(52)){
      p3 = [mouseX,mouseY]
    }

    fill(50,0,0)
    circle(p0[0],p0[1],15)
    circle(p1[0],p1[1],15)
    circle(p2[0],p2[1],15)
    circle(p3[0],p3[1],15)

    let ax = lerp(p0[0],p1[0],t)
    let ay = lerp(p0[1],p1[1],t)
    let ax1 = lerp(p1[0],p2[0],t)
    let ay1 = lerp(p1[1],p2[1],t)
    let ax2 = lerp(p2[0],p3[0],t)
    let ay2 = lerp(p2[1],p3[1],t)

    fill(100,0,0)
    circle(ax,ay,10)
    circle(ax1,ay1,10)
    circle(ax2,ay2,10)

    line(ax,ay,ax1,ay1)
    line(ax1,ay1,ax2,ay2)

    let bx = lerp(ax,ax1,t)
    let by = lerp(ay,ay1,t)
    let bx1 = lerp(ax1,ax2,t)
    let by1 = lerp(ay1,ay2,t)

    fill(150,0,0)
    circle(bx,by,10)
    circle(bx1,by1,10)

    line(bx,by,bx1,by1)

    let cx = lerp(bx,bx1,t)
    let cy = lerp(by,by1,t)

    for(let i = 0;i < 1;i += 0.005){
      let a1x = lerp(p0[0],p1[0],i)
      let a1y = lerp(p0[1],p1[1],i)
      let a1x1 = lerp(p1[0],p2[0],i)
      let a1y1 = lerp(p1[1],p2[1],i)
      let a1x2 = lerp(p2[0],p3[0],i)
      let a1y2 = lerp(p2[1],p3[1],i)
      let b1x = lerp(a1x,a1x1,i)
      let b1y = lerp(a1y,a1y1,i)
      let b1x1 = lerp(a1x1,a1x2,i)
      let b1y1 = lerp(a1y1,a1y2,i)
      let c1x = lerp(b1x,b1x1,i)
      let c1y = lerp(b1y,b1y1,i)
      fill(0,0,150)
      circle(c1x,c1y,5)
    }

    fill(255,0,0)
    circle(cx,cy,10)

    line(p0[0],p0[1],p1[0],p1[1])
    line(p1[0],p1[1],p2[0],p2[1])
    line(p2[0],p2[1],p3[0],p3[1])
    
    if(t<1){
      t += 0.01
    }
    if(t>1){
      t = 0      
    }

  }