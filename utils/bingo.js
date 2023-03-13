export const bingo = (amount) => {
  let numbers = [];
  let riffledNumbers = [];

  for (let i = 1; i <= amount; i++) numbers.push(i);

  function generateRandomInteger(max) {
    return Math.floor(Math.random() * max);
  }

  let tt = true;

  while (tt) {
    let riffled = generateRandomInteger(numbers.length);
    riffledNumbers.push(numbers[riffled]);

    numbers.splice(riffled, 1);
    tt = riffledNumbers.length >= amount ? false : true;
  }

  return riffledNumbers;
};

export const createCartela = (maxBalls, cartelas, amountCards, amountNumbers) => {

  console.log({
    amountCards,
    amountNumbers
  });

  let cards = [];

  for(let j = 0; j < amountCards; j++) {

    let numbers;
    let card;
    let cicle = 0;

    do {
    
      numbers = [];
      card = [];
  
      //create an list of numbers
      for (let i = 1; i <= maxBalls; i++) numbers.push(i);
  
      //returns a randon integer with max value passed trough param
      function generateRandomInteger(max) {
        return Math.floor(Math.random() * max);
      }
  
      //random defy the amount of numbers in the card
      let amountRaffledNumbers = amountNumbers + generateRandomInteger(3);
      
      //random chose the numbers
      for (let i = 1; i <= amountRaffledNumbers; i++) {
        //random generate a index
        let idx = generateRandomInteger(numbers.length);
        //adds the number of index genereted to the card list
        card.push(numbers[idx]);
        //remove that number of numbers list, so the number will not be selected twice
        numbers.splice(idx, 1);
      }
  
      cicle++;
  
      //reapet process while found same card and cicle <= 5
    } while (!(cartelas.find((el) => el == card) === undefined) && cicle <= 5);

    cards.push(card);

  }

  return cards;
};
