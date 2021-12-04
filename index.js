function check(){

  let bill = document.getElementById('bill-amount').value;
  let cash = document.getElementById('cash-given').value;

  if(bill == "" || cash == "")
  {
    alert('Both values are needed!');
    return false;
  }

  cash = parseInt(cash);
  bill = parseInt(bill);

  //Check if cash given is less than the bill amount?
  if(cash < bill)
  {
    document.getElementById('ans').innerHTML = 'Kindly pay the bill &#128591';
    return false;
  }

  else
  {
    let notes = [2000, 500, 100, 20, 10, 5, 1];
    let change = cash - bill;
  
    for(let i=0;i<notes.length;i++)
    {
      let no_of_notes = Math.trunc(change / notes[i]);
      change %= notes[i];
      document.getElementById(notes[i]).innerHTML = no_of_notes;
      document.getElementById('ans').innerHTML = '';
    }
  }
}