// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    this.radius * 2
  }

  get circumference() {
    Math.PI * this.diameter
  }

  get area() {
    Math.PI * (this.radius * this.radius)
  }
}
