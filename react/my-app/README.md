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

### Course 3

- React concepts was presented such as components & their props, the State hook, the Effect hook

**Homework:**

Create a React app that contains the following:

1. Four react components displaying the text "Exercise X". (X is the number from 1 to 4). Add a border to these components using a class selector. Use separate components, without props to solve this.
2. A component that displays data about a product:
    - name, price, category, color of the category <- this data will be displayed using props
    - category color will be used for the component style (ex. backgroundColor)
    - if one of the props doesn't exist, a message like 'Price does not exist' will be displayed instead
    - use the component created at least three times inside the "Exercise 1" component.
3. The "Exercise 2" component will contain a component that renders your name.
    - when the name is clicked, a css class will be added to it that will color it in your favorite color
    - on the second click, the added class will be deleted. (toggle effect)
    - when the name is colored, another text will be displayed: "The name next to this is colored"
4. In the "Exercise 3" component, add another component that will contain a color input and an "Add" button.
    - each time the add button is pressed, the color code will be displayed in the parent component in a list of other components.
    - next to each color there will be a "Delete" button, pressing it will delete the color from the list.
    - using the array of colors and jsx advantages, display a div with exact dimensions(100x100px) in the parent component, which will have as a background color a gradient composed of those colors.
    - gradient example: https://www.w3schools.com/css/tryit.asp?filename=trycss3_gradient-linear_cs
    - to use colors from array, you can use join: https://medium.com/coding-at-dawn/how-to-convert-an-array-to-a-string-with-commas-in-javascript-79e212506c2
5. The "Exercise 4" component will contain an element that initially display "Loading, please wait" and after 5 seconds, "Finished loading". Use "useEffect" to implement this.

**To run my homework:**
- `cd react/my-app`
- `npm i`
- `npm start`
