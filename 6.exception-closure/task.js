//  Задача #1

function parseCount(param) {
  let result = Number.parseInt(param);
  if ( !isNaN(result) ) {
    return result;
  } else {
    throw new Error("Невалидное значение");
  }
}

function validateCount(param) {
  try {
    return parseCount(param);
  } catch(error) {
    return error;
  }
}

//  Задача #2

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if ( a + b < c || a + c < b || b + c < a ) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }
  
  getArea() {
    // const p = this.getPerimeter();
    // const area = +(( p * (p - 2 * this.a) * (p - 2 * this.b) * (p - 2 * this.c) / 16 ) ** (1 / 2)).toFixed(3);

    const p = this.getPerimeter() / 2;
    const area = +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);

    return area;
  }
}

function getTriangle(a,b,c) {
  try {
    return triangle = new Triangle(a, b, c);
  } catch(error) {
    triangle = {
      getPerimeter: () => "Ошибка! Треугольник не существует",
      getArea: () => "Ошибка! Треугольник не существует",
    };
    return triangle;
  }
}