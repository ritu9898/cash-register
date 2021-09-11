function check(){

  let bill = document.getElementById('bill-amount').value;
  let cash = document.getElementById('cash-given').value;

  if(bill == "" || cash == "")
  {
    alert('Both values are needed!');
    return false;
  }

  if(cash < bill)
  {
    document.getElementById('ans').innerHTML = 'Kindly pay the bill &#128591';
  }

  else
  {
    let notes = [2000, 500, 100, 20, 10, 5, 1];
    let change = cash - bill;
    let c = '';

    if(change >= 2000)
    {
      c = 2000;
    }
    else 
    {
      while(change != 0)
      {
        let i,j = 1;
        for(i=0;i<notes.length;i++)
        {
          if(notes[i] <= change)
          {
            let temp = document.getElementById(notes[i]).innerText;
            document.getElementById(notes[i]).innerHTML = temp-0+1;
            change -= notes[i];
          }
        }
      }
    }
  }
  
}