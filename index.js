let language = 'JavaScript';

//a) Use string concatenation and two .slice() methods to print 'JS' from 'JavaScript'.
 let letter1 =(language.slice(0,1));
 let letter2 = (language.slice(4,5));
 console.log(letter1 + letter2);



//b) Without using .slice(), use method chaining to accomplish the same thing.
console.log(language.replace('ava',' ').replace('cript','').replace(/\s/g, ""));




//c) Use bracket notation and a template literal to print "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for '${language}' is '${letter1 + letter2}'.`);


//d) Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(language.toUpperCase().slice(2,6).replace('VASC','ITSLIT'));

console.log(language.slice(4).toLowerCase());

console.log(language.replace("Java","Python").toUpperCase());

