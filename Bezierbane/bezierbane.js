let p0 = [0,450]
let p1 = [150,450]
let p2 = [300,450]
let p3 = [450,450]

let p4 = [600,450]
let p5 = [750,450]
let p6 = [900,450]

let p7 = [1050,450]
let p8 = [1200,450]
let p9 = [1350,450]

let p10 = [1500,450]
let p11 = [1650,450]
let p12 = [1800,450]

let t = 0
let t1 = 0
let t2 = 0
let t3 = 0

function setup() {
    createCanvas(1900, 900);

    p0 = [0,Math.round(random(900))]
    p1 = [Math.round(random(125,175)),Math.round(random(900))]
    p2 = [Math.round(random(275,325)),Math.round(random(900))]
    p3 = [Math.round(random(425,475)),Math.round(random(900))]

    p4 = [Math.round(random(575,625)),Math.round(random(900))]
    p5 = [Math.round(random(725,775)),Math.round(random(900))]
    p6 = [Math.round(random(875,925)),Math.round(random(900))]

    p7 = [Math.round(random(1025,1075)),Math.round(random(900))]
    p8 = [Math.round(random(1175,1225)),Math.round(random(900))]
    p9 = [Math.round(random(1325,1375)),Math.round(random(900))]

    p10 = [Math.round(random(1475,1525)),Math.round(random(900))]
    p11 = [Math.round(random(1625,1675)),Math.round(random(900))]
    p12 = [Math.round(random(1775,1825)),Math.round(random(900))]
  }

  function draw() {

    frameRate(40)

    background(250)

    fill(50,0,0)

    if(t<1&&t>0.0001){
      circle(p0[0],p0[1],15)
      circle(p1[0],p1[1],15)
      circle(p2[0],p2[1],15)
      circle(p3[0],p3[1],15)

      line(p0[0],p0[1],p1[0],p1[1])
      line(p1[0],p1[1],p2[0],p2[1])
      line(p2[0],p2[1],p3[0],p3[1])
    }
    if(t1<1&&t1>0.0001){
      circle(p3[0],p3[1],15)
      circle(p4[0],p4[1],15)
      circle(p5[0],p5[1],15)
      circle(p6[0],p6[1],15)

      line(p3[0],p3[1],p4[0],p4[1])
      line(p4[0],p4[1],p5[0],p5[1])
      line(p5[0],p5[1],p6[0],p6[1])
    }
    if(t2<1&&t2>0.0001){
      circle(p6[0],p6[1],15)
      circle(p7[0],p7[1],15)
      circle(p8[0],p8[1],15)
      circle(p9[0],p9[1],15)

      line(p6[0],p6[1],p7[0],p7[1])
      line(p7[0],p7[1],p8[0],p8[1])
      line(p8[0],p8[1],p9[0],p9[1])
    }
    if(t3<1&&t3>0.0001){
      circle(p9[0],p9[1],15)
      circle(p10[0],p10[1],15)
      circle(p11[0],p11[1],15)
      circle(p12[0],p12[1],15)

      line(p9[0],p9[1],p10[0],p10[1])
      line(p10[0],p10[1],p11[0],p11[1])
      line(p11[0],p11[1],p12[0],p12[1])
    }

    let ax = lerp(p0[0],p1[0],t)
    let ay = lerp(p0[1],p1[1],t)
    let ax1 = lerp(p1[0],p2[0],t)
    let ay1 = lerp(p1[1],p2[1],t)
    let ax2 = lerp(p2[0],p3[0],t)
    let ay2 = lerp(p2[1],p3[1],t)

    let a1x = lerp(p3[0],p4[0],t1)
    let a1y = lerp(p3[1],p4[1],t1)
    let a1x1 = lerp(p4[0],p5[0],t1)
    let a1y1 = lerp(p4[1],p5[1],t1)
    let a1x2 = lerp(p5[0],p6[0],t1)
    let a1y2 = lerp(p5[1],p6[1],t1)

    let a2x = lerp(p6[0],p7[0],t2)
    let a2y = lerp(p6[1],p7[1],t2)
    let a2x1 = lerp(p7[0],p8[0],t2)
    let a2y1 = lerp(p7[1],p8[1],t2)
    let a2x2 = lerp(p8[0],p9[0],t2)
    let a2y2 = lerp(p8[1],p9[1],t2)

    let a3x = lerp(p9[0],p10[0],t3)
    let a3y = lerp(p9[1],p10[1],t3)
    let a3x1 = lerp(p10[0],p11[0],t3)
    let a3y1 = lerp(p10[1],p11[1],t3)
    let a3x2 = lerp(p11[0],p12[0],t3)
    let a3y2 = lerp(p11[1],p12[1],t3)

    fill(100,0,0)

    if(t<1&&t>0.0001){
      circle(ax,ay,10)
      circle(ax1,ay1,10)
      circle(ax2,ay2,10)

      line(ax,ay,ax1,ay1)
      line(ax1,ay1,ax2,ay2)
    }
    if(t1<1&&t1>0.0001){
      circle(a1x,a1y,10)
      circle(a1x1,a1y1,10)
      circle(a1x2,a1y2,10)

      line(a1x,a1y,a1x1,a1y1)
      line(a1x1,a1y1,a1x2,a1y2)
    }
    if(t2<1&&t2>0.0001){
      circle(a2x,a2y,10)
      circle(a2x1,a2y1,10)
      circle(a2x2,a2y2,10)

      line(a2x,a2y,a2x1,a2y1)
      line(a2x1,a2y1,a2x2,a2y2)
    }
    if(t3<1&&t3>0.0001){
      circle(a3x,a3y,10)
      circle(a3x1,a3y1,10)
      circle(a3x2,a3y2,10)

      line(a3x,a3y,a3x1,a3y1)
      line(a3x1,a3y1,a3x2,a3y2)
    }

    let bx = lerp(ax,ax1,t)
    let by = lerp(ay,ay1,t)
    let bx1 = lerp(ax1,ax2,t)
    let by1 = lerp(ay1,ay2,t)

    let b1x = lerp(a1x,a1x1,t1)
    let b1y = lerp(a1y,a1y1,t1)
    let b1x1 = lerp(a1x1,a1x2,t1)
    let b1y1 = lerp(a1y1,a1y2,t1)

    let b2x = lerp(a2x,a2x1,t2)
    let b2y = lerp(a2y,a2y1,t2)
    let b2x1 = lerp(a2x1,a2x2,t2)
    let b2y1 = lerp(a2y1,a2y2,t2)

    let b3x = lerp(a3x,a3x1,t3)
    let b3y = lerp(a3y,a3y1,t3)
    let b3x1 = lerp(a3x1,a3x2,t3)
    let b3y1 = lerp(a3y1,a3y2,t3)

    fill(150,0,0)

    if(t<1){
      circle(bx,by,10)
      circle(bx1,by1,10)

      line(bx,by,bx1,by1)
    }
    if(t1<1&&t1>0.0001){
      circle(b1x,b1y,10)
      circle(b1x1,b1y1,10)

      line(b1x,b1y,b1x1,b1y1)
    }
    if(t2<1&&t2>0.0001){
      circle(b2x,b2y,10)
      circle(b2x1,b2y1,10)

      line(b2x,b2y,b2x1,b2y1)
    }
    if(t3<1&&t3>0.0001){
      circle(b3x,b3y,10)
      circle(b3x1,b3y1,10)

      line(b3x,b3y,b3x1,b3y1)
    }

    let cx = lerp(bx,bx1,t)
    let cy = lerp(by,by1,t)

    let c1x = lerp(b1x,b1x1,t1)
    let c1y = lerp(b1y,b1y1,t1)

    let c2x = lerp(b2x,b2x1,t2)
    let c2y = lerp(b2y,b2y1,t2)

    let c3x = lerp(b3x,b3x1,t3)
    let c3y = lerp(b3y,b3y1,t3)

    for(let i = 0;i < 1;i += 0.005){
      let aax = lerp(p0[0],p1[0],i)
      let aay = lerp(p0[1],p1[1],i)
      let aax1 = lerp(p1[0],p2[0],i)
      let aay1 = lerp(p1[1],p2[1],i)
      let aax2 = lerp(p2[0],p3[0],i)
      let aay2 = lerp(p2[1],p3[1],i)
      let bbx = lerp(aax,aax1,i)
      let bby = lerp(aay,aay1,i)
      let bbx1 = lerp(aax1,aax2,i)
      let bby1 = lerp(aay1,aay2,i)
      let ccx = lerp(bbx,bbx1,i)
      let ccy = lerp(bby,bby1,i)
      fill(0,0,150)
      circle(ccx,ccy,5)
      let a1ax = lerp(p3[0],p4[0],i)
      let a1ay = lerp(p3[1],p4[1],i)
      let a1ax1 = lerp(p4[0],p5[0],i)
      let a1ay1 = lerp(p4[1],p5[1],i)
      let a1ax2 = lerp(p5[0],p6[0],i)
      let a1ay2 = lerp(p5[1],p6[1],i)
      let b1bx = lerp(a1ax,a1ax1,i)
      let b1by = lerp(a1ay,a1ay1,i)
      let b1bx1 = lerp(a1ax1,a1ax2,i)
      let b1by1 = lerp(a1ay1,a1ay2,i)
      let c1cx = lerp(b1bx,b1bx1,i)
      let c1cy = lerp(b1by,b1by1,i)
      fill(0,0,150)
      circle(c1cx,c1cy,5)
      let a2ax = lerp(p6[0],p7[0],i)
      let a2ay = lerp(p6[1],p7[1],i)
      let a2ax1 = lerp(p7[0],p8[0],i)
      let a2ay1 = lerp(p7[1],p8[1],i)
      let a2ax2 = lerp(p8[0],p9[0],i)
      let a2ay2 = lerp(p8[1],p9[1],i)
      let b2bx = lerp(a2ax,a2ax1,i)
      let b2by = lerp(a2ay,a2ay1,i)
      let b2bx1 = lerp(a2ax1,a2ax2,i)
      let b2by1 = lerp(a2ay1,a2ay2,i)
      let c2cx = lerp(b2bx,b2bx1,i)
      let c2cy = lerp(b2by,b2by1,i)
      fill(0,0,150)
      circle(c2cx,c2cy,5)
      let a3ax = lerp(p9[0],p10[0],i)
      let a3ay = lerp(p9[1],p10[1],i)
      let a3ax1 = lerp(p10[0],p11[0],i)
      let a3ay1 = lerp(p10[1],p11[1],i)
      let a3ax2 = lerp(p11[0],p12[0],i)
      let a3ay2 = lerp(p11[1],p12[1],i)
      let b3bx = lerp(a3ax,a3ax1,i)
      let b3by = lerp(a3ay,a3ay1,i)
      let b3bx1 = lerp(a3ax1,a3ax2,i)
      let b3by1 = lerp(a3ay1,a3ay2,i)
      let c3cx = lerp(b3bx,b3bx1,i)
      let c3cy = lerp(b3by,b3by1,i)
      fill(0,0,150)
      circle(c3cx,c3cy,5)
    }

    fill(255,0,0) 
    circle(cx,cy,10)
    circle(c1x,c1y,10)
    circle(c2x,c2y,10)
    circle(c3x,c3y,10)
    
    if(t<1){
      t += 0.01
    }
    if(t>1){
      t1 += 0.01
      t0 = 1.0001
    }
    if(t1>1){
      t2 += 0.01
      t1 = 1.0001
    }
    if(t2>1){
      t3 += 0.01
      t2 = 1.0001
    }
    if(t3>1){
      t = 0
      t1 = 0   
      t2 = 0
      t3 = 0   
    }
  }