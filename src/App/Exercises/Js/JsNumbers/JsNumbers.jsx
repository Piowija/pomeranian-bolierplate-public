export const JsNumbers = () => {
  const myNumber = '1.231';

  let myInt = parseInt(myNumber);

  let myFloat = parseFloat(myNumber);

  return (
    <div>
      <p>Integer: {myInt}</p>
      <p>Float: {myFloat}</p>

      <hr />

      <h3>Podstawowe operatory</h3>
      <p>+ (int): {myInt + myInt}</p>
      <p>+ (float): {myFloat + myFloat}</p>
      <p>- (int): {myInt - myInt}</p>
      <p>- (float): {myFloat - myFloat}</p>
      <p>* (int): {myInt * myInt}</p>
      <p>* (float): {myFloat * myFloat}</p>
      <p>/ (int): {myInt / myInt}</p>
      <p>/ (float): {myFloat / myFloat}</p>
      <p>% (int): {myInt % myInt}</p>
      <p>% (float): {myFloat % myFloat}</p>
      <p>** (int): {myInt ** myInt}</p>
      <p>** (float): {myFloat ** myFloat}</p>

      <h3>Operatory złozone</h3>

      <p>+=: {`${(myInt += 2)}`}</p>
      <p>-=: {`${(myInt -= 1)}`}</p>
      <p> ++i: {`${++myInt}`}</p>
      <p> --i: {`${--myInt}`}</p>

      <h3>Operatory porównawcze</h3>

      <p> {`<: ${myInt < 3}`}</p>
      <p> {`<=: ${myInt <= 3}`}</p>
      <p> {`>: ${myInt > 3}`}</p>
      <p> {`>=: ${myInt >= 3}`}</p>
      <p> {`===: ${myInt === 3}`}</p>
    </div>
  );
};
