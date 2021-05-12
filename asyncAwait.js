/*
there is two ways to handle the promises

#1 with .then & .catch 
#2 with async await 

*/

// async await
// used with functions labeled with async and await is used before the async expression to wait for it then move to the next routine 

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


function addPost(post){ 
    return new Promise( (resolve , reject) => {
    
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

/*

handle the promise with .then .catch

addPost( { title: "Post three" , body: 'This is post three' } )
.then(getPost)
.catch(error => console.log(error));

*/


// async/await is a way to handle the responses of the promises it's not like a different way to write them 
// first lets make a function to label it with async to make async function 
// await waits for asyncronous process or action to complete 

// this is instead of using .then .

async function init(){
    await addPost( { title: "Post three" , body: 'This is post three' } );
    getPost();
}

init();


// async / await / fetch 
// using of async await with fetch instead of .then 


async function fetchUsers(){

    //because we use two .then with fetch API method the first is to convert is to json and the second is to use the response itself
    //here we will make a res var to hold the return promise of the fetch method then we will convert it to json with this var


    /*
    Once you mark a function as 'async' you have access to the keywords await, try, and catch.
    */ 


    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    try{

        const data = await res.json();
        console.log(data);

    }

    catch(error){
        console.log('error', error);
    }

    /*
    this is instead of 

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data));

    */

}

fetchUsers();



