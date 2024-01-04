'use strict';

const person = {
  name: "Alex",
  tel: '+380957778889',
  parents: {
    mom: 'Olga',
    dad: 'Mike'
  }
};

const clone = JSON.parse(JSON.stringify(person)); // Способ сделать глубокую копию.
clone.parents.mom = 'Ann';
console.log(person);
console.log(clone);