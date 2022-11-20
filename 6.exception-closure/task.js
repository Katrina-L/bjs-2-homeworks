//  Задача #1

function parseCount(param) {
  if ( isNaN(Number.parseInt(param)) ) {
    throw new Error("Невалидное значение");
  }
  return Number.parseInt(param)
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

    if ( this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a ) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
      return this;
  }

  getPerimeter() {
      try {
        this.p = this.a + this.b + this.c;
        if ( this.p > 0 ) {
          return this.p;
        }
        throw "Ошибка! Треугольник не существует";
      } catch(error) {
        return error;
      }
    }
  
    getArea() {
      try {
        this.area = +(( this.getPerimeter() * (this.getPerimeter() - 2 * this.a) * (this.getPerimeter() - 2 * this.b) * (this.getPerimeter() - 2 * this.c) / 16 ) ** (1 / 2)).toFixed(3);
        if ( this.area > 0 ) {
          return this.area;
        }
        throw "Ошибка! Треугольник не существует";
      } catch(error) {
        return error;
      }
    }
}

function getTriangle(a,b,c) {
  try {
    const triangle = new Triangle(a, b, c);
    return triangle;
  } catch(error) {
    return [this.getArea(), this.getPerimeter()];
  }
}

// //  Задача #2 (другой вариант)

// class Triangle {
//   constructor(a, b, c) {
//     this.a = a;
//     this.b = b;
//     this.c = c;
//   }

//   existedTriangle() {
//     try {
//       if ( this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a ) {
//         throw new Error("Треугольник с такими сторонами не существует");
//       }
//       return this;
//     } catch(error) {
//       return error;
//     }
//   }

//   getPerimeter() {
//     try {
//       if ( this.existedTriangle() !== this  ) {
//         throw "Ошибка! Треугольник не существует";
//       }
//       return this.p = this.a + this.b + this.c;
//     } catch(error) {
//       return error;
//     }
//   }

//   getArea() {
//     try {
//       if ( this.existedTriangle() !== this ) {
//         throw "Ошибка! Треугольник не существует";
//       }
//       return this.area = +(( this.getPerimeter() * (this.getPerimeter() - 2 * this.a) * (this.getPerimeter() - 2 * this.b) * (this.getPerimeter() - 2 * this.c) / 16 ) ** (1 / 2)).toFixed(3);
//     } catch(error) {
//       return error;
//     }
//   }
// }

// function getTriangle(a,b,c) {
//   try {
//     const triangle = new Triangle(a, b, c);
//     return triangle;
//   } catch(error) {
//     return [this.getArea(), this.getPerimeter()];
//   }
// }