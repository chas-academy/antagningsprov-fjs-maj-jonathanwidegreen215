function uppg10(){
    const numbers = [5, 12, 7, 10, 20, 9, 11];

    const bigEven = [];
    const smallOdd = [];
    const other = [];
    let bigEvenPicked = 0;
    let smallOddPicked = 0;
    let otherPicked = 0;

    for(i=0; i<numbers.length; i++)
        {
        if(numbers[i] > 10 && numbers[i] %2 ===0)
        {
            bigEven[bigEvenPicked] = numbers[i];
            bigEvenPicked++;
        }
        else if(numbers[i] < 10 && numbers[i] %2 !== 0)
        {
            smallOdd[smallOddPicked] = numbers[i];
            smallOddPicked++;
        }
        else
        {
            other[otherPicked] = numbers[i];
            otherPicked++;
        }
        }
    
   
    // skapa tre arrayer - bigEven, smallOdd, other
    // loopa igenom numbers och placera talen i respektive array
    // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
    // smallOdd ska innehålla tal mindre än 10 och udda
    // other ska innehålla alla andra tal
    // returnera ett objekt med de tre arrayerna
  }
  
  module.exports = { uppg10 };
  
