// Вариант через кеш-массив
function cachingDecoratorNew(func) {
  let cache = [];
  let maximumQuantityElements = 5;

  return (... args) => {
    const hash = args.join(",");
    const findHash = cache.find( item => item[hash] );
    
    if (findHash) {
      const findIndexHash = cache.findIndex( item => item[hash] );
      console.log(`Из кэша: ${cache[findIndexHash][hash]}`);
      return `Из кэша: ${cache[findIndexHash][hash]}`;
    }

    const result = func(...args);
      if (cache.length === maximumQuantityElements) {
        cache.shift();
      }
        cache.push({});
        cache[cache.length - 1][hash] = result;
      console.log(`Вычисляем: ${cache[cache.length - 1][hash]}`);
      return `Вычисляем: ${cache[cache.length - 1][hash]}`;
  }
}

// //  Вариант через кеш-объект
// function cachingDecoratorNew(func) {
//   const cache = {};
//   const maxElements = 5;

//   return function(...args) {
//     const hash = args.join(",");
    
//     if (hash in cache) {
//       console.log(`Из кэша: ${cache[hash]}`);
//       return `Из кэша: ${cache[hash]}`;
//     }

//     const result = func(...args);
//     cache[hash] = result;

//     if (Object.keys(cache).length > maxElements) {
//       delete cache[Object.keys(cache)[0]];
//     }

//     console.log(`Вычисляем: ${result}`);
//     return `Вычисляем: ${result}`;
//   }
// }

//------------------------------------------------------------
// //  работает
// function debounceDecoratorNew(func, delay) {
//   let timeoutId = null;
//   return function(...args) {

//     if (timeoutId === null) {
//       func(...args);
//     }

//     clearTimeout(timeoutId);
//     timeoutId = setTimeout( () => {
//       func(...args);
//     }, delay )
//   }
// }
//------------------------------------------------------------

function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(...args) {
    wrapper.allCount++;

    if (timeoutId === null) {
      wrapper.count++;
      func(...args);
    }

    clearTimeout(timeoutId);
    timeoutId = setTimeout( () => {
      wrapper.count++;
      func(...args);
    }, delay );
  }
  
  return wrapper; 
}