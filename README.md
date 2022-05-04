## La moara

Javascript course organized by cognizant softvision

### First Course

- we set up the followings: Git, VSCode, nodejs
- we created a simple stylized page
- to run the created static page, we used nodemon with express js to automatically detect changes in the project and restart when change is detected

**Homework:**

1. create a new github repo which will be used for all the themes we will receive in future courses
2. create a HTML page about a favorite topic ( for ex, your favorite pet) and include the followings:
   - at least 5 different HTML elements
   - at least one class selector and one id selector with their styles
   - at least one style that will be applied to multiple child elements ( for ex: `.blog-text p`, `.blog-text a`, `.blog-text span`)
3. following the steps from the first course, create a server that will display the created page

### Second Course

- Javascript concepts was presented such as primitives, operators, functions, arrays and so on

**Homework:**

1. create a function that takes a number as an argument and returns the number's double value if is odd, otherwise, return the number subtracted with 2. Display the result in the console.
2. create a function that takes an array as an argument and stores in another one only the prime numbers. Loop through the array using a for loop. Display the result in the console.
   Ex: `const arr = [1,2,3,4,5,6,7,8,9]; savePrimes(arr) => [1,2,3,5,7]; `
3. create a function that takes an array as an argument and stores in another one only the strings. Loop through the array using a forEach loop. Display the result in the console.
   Ex: `saveStrings([1, ‘1’, ‘salut’, 2, 6, true, ‘true’]) -> [‘1’, ‘salut’, ‘true’];`
   `saveStrings([1,2,3,4]) -> [];`
   `saveStrings([‘1’,’2’,’3’,’4’]) -> [‘1’,’2’,’3’,’4’]`
4. create a function that takes a string, converts it in a number and make a sum of its odd digits using a for loop and the continue statement
   Ex: `addDigits(“1523”) => 9`
5. create a switch statement with at least 5 cases (from which at least 2 multi-cases) following the example presented in the course
