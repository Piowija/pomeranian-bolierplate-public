export const JsStringCoding = () => {
  const singleQuote = 'siema';

  const doubleQoute = 'siema';

  const templateString = `siema`;

  const newString = new String(123);

  const string1 = "hello 'world'";

  const string2 = 'hello "world"';

  const string3 = "It's raining outside.";

  const concatenated = string1 + ' ' + string3;

  // METODY STRINGoW

  const stringLength = singleQuote.length; // 5

  const substring = doubleQoute.substring(0, 2); // si (wycięcie fragmentu tekstu)

  const replaceString = string1.replace('o', '0'); // hell0 "world"

  const replaceAllString = string1.replaceAll('o', '0'); // hell0 "w0rld"

  const upperCase = string3.toUpperCase(); // IT'S RAINING OUTSIDE.

  const trimString = templateString.trim(); // siema

  const indexOfString = string2.indexOf('hel'); // 0

  return <div>Hello</div>;
};
