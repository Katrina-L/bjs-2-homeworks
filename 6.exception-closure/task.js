//  Задача #1

function parseCount(param) {
  if ( !isNaN(Number.parseInt(param)) ) {
    return Number.parseInt(param);
  } else throw new Error("Невалидное значение");
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
    try {
      if (this.a + this.b + this.c > 0) {
        return this.a + this.b + this.c;
      }
      throw "Ошибка! Треугольник не существует";
    } catch(error) {
      return error;
    }
  }
  
  getArea() {
    try {
      let area = +(( this.getPerimeter() * (this.getPerimeter() - 2 * this.a) * (this.getPerimeter() - 2 * this.b) * (this.getPerimeter() - 2 * this.c) / 16 ) ** (1 / 2)).toFixed(3);
      if ( area > 0 ) {
        return area;
      }
      throw "Ошибка! Треугольник не существует";
    } catch(error) {
      return error;
    }
  }
}

function getTriangle(a,b,c) {
  try {
    return triangle = new Triangle(a, b, c);
  } catch(error) {
    return triangle = {
      getPerimeter: () => "Ошибка! Треугольник не существует",
      getArea: () => "Ошибка! Треугольник не существует",
    };
  }
}