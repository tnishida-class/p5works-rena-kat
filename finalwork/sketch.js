// 最終課題を制作しよう
class Fish {
  constructor(x,y) {
    this.position = createVector(x,y)
    this.theta = 0
    this.color = { filet: color(255,255,255), body: color(255, 0, 0) }
  }

  update() {
    this.theta += PI / 100
  }

  display() {
    push()
    noStroke()
    translate(this.position.x, this.position.y)


    for (let i = -1; i <= 1; i += 2) {
      push()
      fill(this.color.filet)
      translate(0, 10)
      rotate((PI / 30) * sin(this.theta * 2) * i)

      beginShape()
      vertex(0, 0)
      vertex(12 * i, 4)
      vertex(10 * i, 10)
      vertex(0, 4)
      endShape()
      pop()
    }



    push()
    fill(this.color.filet)
    translate(0, 25)
    rotate((PI / 30) * sin(this.theta * 2))
    beginShape()
    vertex(0, 0)
    bezierVertex(0, 0, 5, 5, 3, 15)
    bezierVertex(3, 15, 0, 8, 0, 8)
    bezierVertex(0, 8, 0, 8, -3, 15)
    bezierVertex(-3, 15, -5, 5, 0, 0)
    endShape()
    pop()


    beginShape()
    fill(this.color.body)
    vertex(0, 30)
    bezierVertex(0, 30, -10, 10, 0, 0)
    bezierVertex(0, 0, 10, 10, 0, 30)
    endShape()

    pop()
  }
}


let fish

function setup() {
  createCanvas(300, 200)
  fish = new Fish(width / 2, height / 2)
}

function draw() {

  background(0)
  fish.update()
  fish.display()

}
