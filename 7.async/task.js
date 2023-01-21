class AlarmClock {
    constructor() {
        this.alarmCollection = [];  // коллекция звонков
        this.timerId = null;   //  для хранения Id
    }

    addClock(time, callback, id) {   //  добавляет новый звонок к сущ-им
        if (!id) {
            throw new Error('error text');
        }

        if ( this.alarmCollection.some( alarm => alarm.id === id) ) {
            console.log("error");
            return;
        } else {
            this.alarmCollection.push({id, time, callback});
        }
    }

    removeClock(id) { //    удаляет звонок с соответствующим id
        // this.alarmCollection.forEach( (alarm, index) => {
        //     if ( alarm.id === id ) {
        //         this.alarmCollection.splice(index, 1);
        //         return true;
        //     }
        //     return false; 
            
            let lengthBeforRemove = this.alarmCollection.length;
            this.alarmCollection = this.alarmCollection.filter( alarm => alarm.id !== id );
            return lengthBeforRemove !== this.alarmCollection;
        // })     
    }

    getCurrentFormattedTime() { //  возвращает текущее время в строковом формате HH:MM
        let date = new Date();
        let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
        let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
        let currentDate = `${hours}:${minutes}`;
        return currentDate;
    }

    checkClock(alarm) {
        if (alarm.time === this.getCurrentFormattedTime()) {
            alarm.callback();
        }
    }    

    start() {  //  запускает все звонки
        if ( this.timerId ) {
            return;
        }

        this.timerId = setInterval( () => this.alarmCollection.forEach( alarm => this.checkClock(alarm)), 1000);  
        // this.timerId = setInterval(() => {
        //     this.alarmCollection.forEach( alarm => {
        //         if (alarm.time === this.getCurrentFormattedTime) {
        //             alarm.callback();
        //         }
        //     })
        // }, 1000); 
    }

    stop() {  //  })останавливает выполнение всех звонков
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {   //  печатает все звонки
        this.alarmCollection.forEach( element => console.log(`Будильник №${id} заведен на ${time}`));
    }

    clearAlarms() {   //  удаляет все звонки
        this.stop();
        this.alarmCollection.splice(0);
        // this.alarmCollection = [];
    }
}

function testCase() {
    let phoneAlarm = new AlarmClock;
    phoneAlarm.addClock("12:00", () => console.log("Пора вставать"), 1);
    phoneAlarm.addClock("12:01", () => console.log("Надо встать"), 2);
    phoneAlarm.addClock("14:00", () => console.log("Вставай, а то проспишь"), 3);
    console.log(phoneAlarm.alarmCollection);

    phoneAlarm.removeClock(2);
    console.log(phoneAlarm.alarmCollection);

    console.log(phoneAlarm.timerId);    // null

    console.log(phoneAlarm.getCurrentFormattedTime());

    phoneAlarm.addClock("11:00", () => console.log("Пора вставать"), 4);
    phoneAlarm.addClock("19:00", () => console.log("Надо встать"), 5);
    phoneAlarm.addClock("02:00", () => console.log("Вставай, а то проспишь"), 6);
    console.log(phoneAlarm.alarmCollection);
    phoneAlarm.clearAlarms();
    console.log(phoneAlarm.alarmCollection);
    
    phoneAlarm.addClock("16:45", () => f, 7);
    phoneAlarm.addClock("18:45", () => f, 7);
    console.log(phoneAlarm.alarmCollection);

    phoneAlarm.addClock("11:35", () => console.log("проверка времени"), 11);
    phoneAlarm.start();
}