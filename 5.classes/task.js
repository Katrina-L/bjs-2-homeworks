// Задача №1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  
  set state (assessment) {
    if (assessment < 0) {
      return this._state = 0;
    }
    if (assessment > 100) {
      return this._state = 100;
    }
    this._state = assessment;
  }
  
  get state() {
    return this._state;
  }

  fix() {
    this.state *= 1.5;
  }
}

class Magazine extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
    super (name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}
  
class Book extends PrintEditionItem {
  constructor (author, name, releaseDate, pagesCount) {
    super (name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}
  
class NovelBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super (author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}
  
class FantasticBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super (author, name, releaseDate, pagesCount);
    this.type = "fantastic"
  }
} 
  
class DetectiveBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super (author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
} 

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    const book = this.books.find( (book) => book[type] === value );
    return book || null;
  }
  
  // findBookBy(type, value) {
  //   for (let i = 0; i < this.books.length; i++) {
  //     for (let property in this.books[i]) {
  //       if ( property === type && this.books[i][property] === value ) {
  //       // if ( property === type && this.books[i][property].includes(value) ) {
  //       // if ( property === type && ( this.books[i][property] === value || this.books[i][property].includes(value)) ) {
  //         return this.books[i];
  //       }
  //     }
  //   }
  //   return null;
  // }

  findBookByPart(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      for (let property in this.books[i]) {
        if ( property === type && this.books[i][property].includes(value) ) {
          return this.books[i];
        }
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    const indexBook = this.books.indexOf( this.findBookBy("name", bookName) );
    return (indexBook !== -1) ? this.books.splice(indexBook, 1)[0] : null;
  }

  // giveBookByName(bookName) {
  //   const indexBook = this.books.findIndex( (book) => book.name === bookName );
  //   return ( indexBook !== -1 ) ? this.books.splice(indexBook, 1)[0] : null;
  // }
}

//  Задача #3
class Student {
  constructor(name) {
    this.name = name;
    this.subjects = {};
  }

  checkSubject(subject) {
    if (this.subjects[subject] === undefined) {
      this.subjects[subject] = [];
    }
  }
  
  addMark(mark, subject) {
    this.checkSubject(subject);
    if (mark >= 1 && mark <= 5) {
      this.subjects[subject].push(mark);
    } else console.log("Ошибка, оценка должна быть числом от 1 до 5");
  }

  getAverageBySubject(subject) {
    for(let subjectName in this.subjects) {
      if (subjectName === subject) {
        this.subjectAverage = this.subjects[subject].reduce((accum, item) => accum + item, 0) / this.subjects[subject].length;
        // this.subjectAverage = +(this.subjects[subject].reduce((accum, item) => accum + item, 0) / this.subjects[subject].length).toFixed(2);
        return this.subjectAverage;
      }
    }
    return "Несуществующий предмет";
  }

  getAverage() {
    let sum = 0;
    let subjectsLength = 0;
    for (let subject in this.subjects) {
      sum += this.subjects[subject].reduce( (accum, item) => accum + item, 0);
      subjectsLength += this.subjects[subject].length;
    }
    this.allSubjectAverage = sum / subjectsLength;
    // this.allSubjectAverage = +(sum / subjectsLength).toFixed(2);
    return this.allSubjectAverage;
  }

  exclude(reason) {
    this.excluded = reason;
    delete this.subjectAverage;
    delete this.allSubjectAverage;
    delete this.subjects;
  }
}