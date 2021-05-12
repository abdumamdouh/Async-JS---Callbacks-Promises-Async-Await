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
// callback function is used to be called after some code 
// the callback function getPost is being invoked after the post being added

function addPost(post , callback){
    setTimeout( () =>{
        posts.push(post);
        callback();
    } , 2000);

    
}

addPost( { title: "Post three" , body: 'This is post three' } ,getPost );