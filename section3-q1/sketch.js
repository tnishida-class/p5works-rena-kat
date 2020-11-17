// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon(0,0,0,"I love keyakizaka46",50,50);
}

function balloon(a,b,c,t,x,y){
 let w = textWidth(t);
 let h = textAscent() + textDescent();
 let p = 2;

noStroke();
 fill(a,b,c);
rect(x,y,w+p*2,h+p*2);
  beginShape();
   vertex(w+p*2+x,(h+p*2)*2/3+y);
   vertex(w+p*2+x,(h+p*2)/3+y);
   vertex(w+p*2+x+20,y+(h+p*2)/2);

  endShape();
 fill(255)
 text(t,x+p,y+h+p);
}
