// 小手調べ
function setup(){
  for(let i = 0; i < 10; i++){
    // BLANK[1]
    let x = (i + 1) * 10;
noFill();
stroke(255, 0, 0);
    ellipse(50, 50, x, x);
  }

  for(let i = 0; i < 5; i++){
    // BLANK[1]
    let x = (i + 1) * 10;
noFill();
stroke( 0, 0, 255 );
  ellipse(50, 50, x, x);

}
}
