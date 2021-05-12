const posts = [
    { title: "Post One" , body: 'This is post one'},
    { title: "Post two" , body: 'This is post two'},
];


function getPost(){
    setTimeout( () =>{
        let output = '';

        posts.forEach((post) => {
            output+= `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;

    } ,1000)
}

//Async JS
// we will return a promise in the add post function instead of using callback function 
//and we will use this promuise in to run async JS code

function addPost(post){

    // promise is constructed be new opreeator 
    //takes a callback function with two parameters
    // resolve and reject 
    return new Promise( (resolve , reject) => {
    
    // setTimeout is used to simulate a server that sends a res afters some time     
    
    setTimeout( () =>{
        posts.push(post);
        
        const error = false;

        if(!error){
            resolve();
        }
        else{
            reject('Error: Something went wrong');
        }

    } , 2000);

    } );
}

// the function returns a Promise
// so to handle this promise we use .then for resolve and .catch to catch the errors
//notice that the next three lines is considered as a one line but for readability we write it in this way

//.then is used to call the getpost function after the post is being added
// .then & .catch take callback functions 
//Async JS

addPost( { title: "Post three" , body: 'This is post three' } )
.then(getPost)
.catch(error => console.log(error));

//semicolon is used after the line of handling the promise is finsished

/*
Note: 90% of the time you will be working with pre-existing
promises. The step of "Creating a promise" would be done for
you either by a library, framework or environment you are
using. Examples of promises: fetch
*/ 


// how to handle multiple Promises with Promise.all

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve,reject) =>
setTimeout(resolve, 2000, 'goodbye'));

//fetch method is used to fetch an API and returns a promise
//fetch is used to make AJAX calls or to make HTTP requests 
// when you use fetch you need to do two .then  because you need to format it to json first beacuse it's a string
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then( res => res.json() );
// the callback function inside the .then with promise4 is used to return the res the return of the promise that's being returned from fetch with json format with .json() method



//Promise.all takes array of promises and handle all of them
// and return an array of the return value of each promise 
// it's gonna take however long the longest promise is that's how long it's gonna take 


Promise.all([promise1, promise2, promise3,promise4])
.then( values => console.log(values) );