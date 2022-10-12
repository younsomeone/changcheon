let img1;
let pretendard;
let t = 100;

function preload(){
  img1 = loadImage('sky.png');
  pretendard = loadFont('Pretendard-ExtraLight.otf');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  let inp = createInput('7글자 이하로 입력해주세요.');
  inp.position(75, windowHeight-220);
  inp.size(windowWidth-150,170);
  inp.style('font-size', '150px');
  inp.style('font-family', 'pretendard');
  inp.style('font-weight', '100')
  inp.input(myInputEvent);
}
  
function myInputEvent() {
  console.log('you are typing:', this.value());
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

function draw(){
  background("white");
  sky();
  maintext();
  fill(255);
}

function maintext() {
  translate(70,150);
  scale(1.1)
  push();
  fill("black");
  textSize(70);
  textFont(pretendard);
  text("창천동 하늘에 날려보내고 싶은",0,0);
  text("고민이나 소망을 적어보세요.",0,98);
  fill(150);
  textSize(30);
  
  strokeWeight(2.2)
  line(5,-72,832,-72);
  line(5,25,769.5,25);
  //line(5,120,769.5,120);
  pop();
}

function sky(){
  //tint(255, t)
  t=t+10;
  if(t>=255){
    t=t-31;
  }
  imageMode(CORNER)
  image(img1,400,0,1000,600);
}

function doit(){
  socket.emit("value", inp.value());
  const name = inp.value();
}