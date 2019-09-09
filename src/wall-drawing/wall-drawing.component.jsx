export default function sketch(p){

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.background(245, 296, 243)
    }
    
      
    p.draw = () => {
        // p.background(p.random(255))
        //Anything you draw later will be drawn on top of what you've already drawn
        //strokeWeight(weight)
        //noStroke() --> disable a stroke
        //noFill() --> disable a fill
        //stroke(strokeColor)
        //fill(R, G, B)
        //add a fourth color to set transparency 255 is opaque, 0 is transparent
        //use only two arguments if you want grayscale and transparency
        // strokeWeight(10);
        // fill(255, 0, 0)
        // ellipse(500, 500, 100, 100);
        p.strokeWeight(5)
        p.fill('gray')
        p.ellipse(520, 300, 200, 200)
        p.noFill()
        p.stroke('black')
        p.strokeWeight(5)
        p.arc(520, 330, 100, 70, 0, 91.15)
        p.strokeWeight(10)
        
        p.point(490, 270)
        p.point(550, 270)






        // p.noStroke()
        // p.fill(237, 224, 203)
        // p.quad(336.98, 301.63, 572.52, 301.63, 580.33, 494.75, 351.5, 494.75)
        // p.fill(183, 182, 161, 200)
        // p.quad(467.59, 374.19, 521.17, 374.19, 521.17, 494.75, 467.59, 494.75)
        // p.fill(219, 199, 171)
        // p.quad(395.03, 373.36, 467.59, 373.36, 467.59, 494.75, 395.03, 494.75)
        // p.arc(283.84, 109.64, 80, 0, 180, 90)
      
      }
}





  
  