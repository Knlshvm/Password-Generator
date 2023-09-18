here is my first line  
here is my second line  
```javascript
const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)

```
```
/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/
```
```javascript 

const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root"))

```
rendering element from 17 version to 18  
1st method react 18  
2nd method react 17 and 3rd method react 18
```javascript
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(navbar)

ReactDOM.render(navbar, document.getElementById("root"))
ReactDOM.createRoot(document.getElementById("root")).render(navbar)
```
In react img tag is selfclosing <img  />  

```
1. Why do we need to `import React from "react"` in our files?
React is what defines JSX

2. If I were to console.log(page) in index.js, what would show up?
A JavaScript object. React elements that describe what React should
eventually add to the real DOM for us.

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
We need our JSX to be nested under a single parent element

4. What does it mean for something to be "declarative" instead of "imperative"?
Declarative means I can tell the computer WHAT to do 
and expect it to handle the details. Imperative means I need
to tell it HOW to do each step.

5. What does it mean for something to be "composable"?
We have small pieces that we can put together to make something
larger/greater than the individual pieces.

6. What is a React component?
A function that returns React elements. (UI)
```
```javascript
function Page() { // in react function name should start with capital case
    return (
        <ol>
        </ol>
    )
}
ReactDOM.render(<Page />, document.getElementById("root"))

//for calling function it should be selfinclosed in a tag with function name 
```
```javascript
function Header() {
    return (
    )
}
//way of calling function inside another function  
function Page() {
    return (
        <div>
            <Header /> 
            <h1>Reasons I'm excited to learn React</h1>
        </div>
    )
}
```
```javascript
.nav-items > li {
}
//here nav-item is parent class and we are using parent class and > we can change stylimg to direct that element  

```
```javascript
padding-block:10px;
//it directly gives padding to to top and bottom 
 background: url("./images/react-icon-large.png")no-repeat center right;
 //to place the image in backgound and positioning it to the center right 
```
```javascript
//about props  
//Parent component
export default function App(){
    return(
        <>
        <Jokes
        setup =" I got my daughter a fridge for her birthday"
        punchline="I can't wait to see her face light up when she opens it." 
        //pass value that are not string in props  
             isPun={true}
            upvotes={10}
            downvotes={2}
            comments={[{author: "", body: "", title: ""}, {...}]}
         />
        <Jokes />
        <Jokes />
        <Jokes 
        Name="Kunal"
        />
        </>
    )
}
//children component  

export default function Joke(props){
    console.log(props)
    return(
        <div>
         { props.Setup && <h3>setup={props.Setup}</h3>}
        { props.Punchline && <p> Punchline={props.Punchline}</p>}
        { props.Setup && props.Punchline && <hr/>}
         <p>{props.Name}</p>
       
        </div>
    )
}

// props is passed as parameter and introduced with curly barces{} to access the value or change the syntax from jsx to js.    
//one more example to pass image using templete literal and curlybracket  
 <img src={`../images/${props.img}`} className="card--image" />

//conditional rendering 
 {props.setup && <h3>Setup: {props.setup}</h3>}
 //if props.setup is truthy value or exist then only render the setup props
 //using terninary operator 
 <h3 style={{display: props.setup ? "block" : "none"}}>Setup: {props.setup}</h3>
```
```
1. What do props help us accomplish?
Make a component more reusable.


2. How do you pass a prop into a component?
<MyAwesomeHeader title="???" />


3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
No, because the JSX we use to describe native DOM elements will
be turned into REAL DOM elements by React. And real DOM elements
only have the properties/attributes specified in the HTML specification.
(Which doesn't include properties like `blahblahblah`)


4. How do I receive props in a component?
function Navbar(props) {
    console.log(props.blahblahblah)
    return (
        <header>
            ...
        </header>
    )
}


5. What data type is `props` when the component receives it?
An object!
```
```javascript
/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
const squares = nums.map(function(num) {
    return num * num
})

// console.log(squares)



/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
const capitalized = names.map(name => (
    name[0].toUpperCase() + name.slice(1))
)
// console.log(capitalized)



/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

const paragraphs = pokemon.map(mon => `<p>${mon}</p>`)

console.log(paragraphs)

// map question
1. What does the `.map()` array method do?
Returns a new array. Whatever gets returned from the callback
function provided is placed at the same index in the new array.
Usually we take the items from the original array and modify them
in some way.


2. What do we usually use `.map()` for in React?
Convert an array of raw data into an array of JSX elements
that can be displayed on the page.


3. Why is using `.map()` better than just creating the components
   manually by typing them out?
It makes our code more "self-sustaining" - not requiring
additional changes whenever the data changes.
```
```javascript
export default function App() {
    const jokeElements = jokesData.map(joke => {
        return <Joke  
        setup={joke.setup}
        punchline={joke.punchline}
        />
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}
//here joke is mapped with the data that is stored in another file and the setup is passed as prop to children  
```
```javascript
//rendering items stored in different js file  
//importing
import data from "./data"

export default function App() {
    const CardComponent = data.map( (item) =>{
        return(
             <Card 
                key ={item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
            />
            
        )
    })
    return(
        {CardComponent}
    )

    //simplified version 
     const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item} // or we can use {...item} and remove .item from children componnets
            />)
     })
     
 //and accessing props from above app to cards
 export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}    
```
```javascript  
//onClick or event listner in react 
 <button onClick={handleClick}>Click me</button>  

 function (handleClick){
    //do whatever you want to on onClick
 }

  onMouseOver={change}
  //to show the effect when cursor is placed over to that button or tag  

//api fetched data  
export default {
    "success": true,
    "data": {
        "memes": [
            {
                "id": "181913649"
            }
        ]}}   

//array fro this data 
const arr = memesData.data.memes //memesData is js filename  

// mapping over data and adding html syntax 
const thingsArray = ["Thing 1", "Thing 2"]
const render = thingsArray.map(item => <p key={item}> {item} </p>) 
            
```
```
1. How would you describe the concept of "state"?
A way for React to remember saved values from within a component.
This is similar to declaring variables from within a component,
with a few added bonuses (which we'll get to later)


2. When would you want to use props instead of state?
Anytime you want to pass data into a component so that
component can determine what will get displayed on the
screen.


3. When would you want to use state instead of props?
Anytime you want a component to maintain some values from
within the component. (And "remember" those values even
when React re-renders the component).


4. What does "immutable" mean? Are props immutable? Is state immutable?
Unchanging. Props are immutable. State is mutable.
```
```javascript  
const result = React.useState("Yes")
["Yes", ƒ()] // use state return a static value and function inside that  

//destructuring state
const [isImportant, func] = React.useState("Yes")
Yes // output  

//function name can be anythimg ex set and the variable
const [isImportant, setIsImportant] = React.useState("Yes")

//increase counter using state 
 const [count, setCount] = React.useState(0)
    
    function add() {
        setCount(count + 1)
    }
//one more method

 function add() {
        setCount(function(oldValue) {
            return oldValue + 1
        })
    }
//one more method
/**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */

    function add(){
        setCount(prevCount => prevcount + 1)
    }

 
```
```
1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?
   
a. New value of state (setCount(42))
b. Callback function - whatever the callback function 
   returns === new value of state


2. When would you want to pass the first option (from answer
   above) to the state setter function?
Whenever you don't need the previous value of state to determine
what the new value of state should be.


3. When would you want to pass the second option (from answer
   above) to the state setter function?
Whenever you DO need the previous value to determine the new value
```
```javascript
//getting memedat from another js file and randmoly picking it setting the new changes and rendering it
 const [value , setValue] = React.useState("")
  function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url 
        setValue(url)
        
    }
```
```javascript
//ternanry operation
//1st method
    const isGoingOut = true
    
    let answer  // Use ternary here
    if(isGoingOut === true) {
        answer = "Yes"
    } else {
        answer = "No"
    }
//ternanry method  
    let answer = isGoingOut ? "true" : "false";

//assigning the opposite value
setValue( prevValue => !prevValue ) 
```
```javascript
  const thingsArray = ["Thing 1", "Thing 2"]
    const [array, setArray]=React.useState(thingsArray)
    console.log(array)
    
    
    function addItem() {
       //changing the state appending new elemnts in array  
       // ... spraed operator imp 
          setArray(prevState => [...prevState, `Thing ${prevState.length + 1}`])
    }
    // thing is the element inside the array
    const thingsElements = array.map(thing => <p key={thing}>{thing}</p>)

    // if we have object in our array 
        const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    //to access this property
     <h2 className="card--name">
         {contact.firstName} {contact.lastName}
     </h2>

    //using ternary operator on objects
     let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"

     //updating it to img tag
      src={`../images/${starIcon}`} 

    //while changing state in objects we have to prserve the other information using ... spread
        function toggleFavorite() {
        setContact(prevContact => {
            return {
                ...prevContact ,
               isFavorite: !prevContact.isFavorite
               //So, isFavorite: !prevContact.isFavorite is like saying,  
               //"Change the isFavorite status to the opposite of what it was before.
               //" If it was true, it becomes false, and if it was false, it becomes true.  
               //This is a common way to switch between two options, like turning a light switch ON and OFF.
            }
        })
    }
```
```javascript
//Create a new component named Count
// that means make a Count.js file 

 < Count 
  number={count} /> 
  //passing count as a prop to Count component
 
 //fetching object data from boxes file 
 const [squares, setSquares] = React.useState(boxes)
//mapping in () to make a div for each object
    const squareElements = squares.map(square => (
        <div className="box" key={square.id}></div>
    ))

//the first curly bracket is for converting jsx to js
//the second curly bracket is for using css in js
style={{styles}}
```
```javascript
const squareElements = squares.map((square) => (
  <Box key={square.id} on={square.on} />
));
//squares is an array containing two objects, each representing a square.
// map iterates over each element (square object) in the squares array.
// For each square object, a <Box> component is created.
// The key prop is set to square.id, which helps React keep track of each component uniquely.
// The on prop is set to square.on, passing the on property from each square to the <Box> component
``` 
```javascript
 //we are giving id to pass and diffrentiate between all squares
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            id={square.id}
            on={square.on} 
            toggle={toggle}
        />
    ))
//in children component we are passing props.id and in toggle function passing the value of id when its clciked
    return (
        <div 
            style={styles} 
            className="box"
            onClick={() => props.toggle(props.id)}
        >
        </div>
    )

// toggle function imperative code to flip the value of the squares  
function toggle(id) {
        setSquares(prevSquares => {
            const newSquares = []
            for(let i = 0; i < prevSquares.length; i++) {
                const currentSquare = prevSquares[i]
                if(currentSquare.id === id) {
                    const updatedSquare = {
                        ...currentSquare,
                        on: !currentSquare.on
                    }
                    newSquares.push(updatedSquare)
                } else {
                    newSquares.push(currentSquare)
                }
            }
            return newSquares
        })
    }
// declarative way
   function toggle(id) {
    // // Call the `setSquares` function to update the `squares` state.
        setSquares(prevSquares => {
        // // Use the `map` method to iterate over each square in the previous state.
            return prevSquares.map((square) => {
            // Check if the `id` of the current square matches the provided `id`.
             //If it matches, create a new object (copying existing properties)
            // and toggle the `on` property using `!square.on`.
                return square.id === id ? {...square, on: !square.on} : square
            // // If it doesn't match, simply return the current square unchanged.
            })
        })
    }

    //logical and &&
     {isShown && <p>{props.punchline}</p>} // if first is truthy then only check seconf or print
```
```
1. What is "conditional rendering"?
When we want to only sometimes display something on the page
based on a condition of some sort


2. When would you use &&?
When you want to either display something or NOT display it


3. When would you use a ternary?
When you need to decide which thing among 2 options to display


4. What if you need to decide between > 2 options on
   what to display?
Use an `if...else if... else` conditional or a `switch` statement


function App() {
    let someVar
    if () {
        someVar = <SomeJSX />
    } else if() {
        ...
    } else {
        ...
    }
    return (
        <div>{someVar}</div>
    )
}
```
```javascript
//handling forms 
export default function Form() {
    const [firstName, setFirstName] = React.useState("")
    
    console.log(firstName)
    
    function handleChange(event) {
        setFirstName(event.target.value)
    }
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />
        </form>
    )
}
//handling forms for two input one onClick function
export default function Form() {
    const [formData, setFormData] = React.useState({
        firstName : "",
        secondName : ""
    })
  console.log(formData)
    
    function handleChange(event) {
        setFormData(prevData => {
            return{
                 ...prevData ,
                 [event.target.name] : event.target.value
            
            }  
        })
    }
// example of placing one input
 <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name = "firstName"
            />
</form>
//value controlled by react not bu input feild 
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
// text area in react is self closing
 <textarea value={} />
  <textarea 
         value={formData.comments}
        placeholder="Comments"
         onChange={handleChange}
        name="comments"
            />
//checkbox handling
 <input 
    type="checkbox" 
    id="isFriendly" 
    checked={formData.isFriendly}
    onChange={handleChange}
    name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
//function for the above 
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "", 
            isFriendly: true,
             employment: "",
            favColor: ""
        }
    )
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
// creating feildstate and select option value 
 <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>
    <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
```
```
1. In a vanilla JS app, at what point in the form submission
   process do you gather all the data from the filled-out form?
Right before the form is submitted.


2. In a React app, when do you gather all the data from
   the filled-out form?
As the form is being filled out. The data is all held in local state.


3. Which attribute in the form elements (value, name, onChange, etc.)
   should match the property name being held in state for that input?
`name` property.


4. What's different about saving the data from a checkbox element
   vs. other form elements?
A checkbox uses the `checked` property to determine what should
be saved in state. Other form elements use the `value` property instead.


5. How do you watch for a form submit? How can you trigger
   a form submit?
- Can watch for the submit with an onSubmit handler on the `form` element.
- Can trigger the form submit with a button click.
```
```javascript
//fetching data from api
   fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => setStarWarsData(data))
```
```
1. What is a "side effect" in React? What are some examples?
- Any code that affects an outside system.
- local storage, API, websockets, two states to keep in sync


2. What is NOT a "side effect" in React? Examples?
- Anything that React is in charge of.
- Maintaining state, keeping the UI in sync with the data, 
  render DOM elements


3. When does React run your useEffect function? When does it NOT run
   the effect function?
- As soon as the component loads (first render)
- On every re-render of the component (assuming no dependencies array)
- Will NOT run the effect when the values of the dependencies in the
  array stay the same between renders


4. How would you explain what the "dependecies array" is?
- Second paramter to the useEffect function
- A way for React to know whether it should re-run the effect function
```
```javascript
//fetching data from api and combinig count to change with change of count
export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)
    
    React.useEffect(function() {
        console.log("Effect ran")
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])
    
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}
``` 
```javascript
//useEffect and side effect
   React.useEffect(() => {
        function watchWidth() {
            console.log("Setting up...")
            setWindowWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", watchWidth)
        
        return function() {
            console.log("Cleaning up...")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

     /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */
    
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])
```