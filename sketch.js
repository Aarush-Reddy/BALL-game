var ball;
function setup() {
  createCanvas(800,700);
  ball = createSprite  (213,200,20,20)
  
}

function draw() 
{
  background(30);
drawSprites();
if (keyIsDown(RIGHT_ARROW))
{
  ball.x += 10;
}
if (keyIsDown(LEFT_ARROW))
{
  ball.x -= 10;
}
if (keyIsDown(UP_ARROW))
{
  ball.y -= 10;
}
if (keyIsDown(DOWN_ARROW))
{
  ball.y += 10;
}
}




