const submit = document.getElementById("submit")
submit.addEventListener("click", (e) => {
    e.preventDefault();
    const movie = document.getElementById('movie').files[0];
    console.log(movie);
    const reader = new FileReader();
    reader.readAsDataURL(movie);
    reader.onloadend =async() =>{
        console.log(reader.result);
        await fetch('http://localhost:4000/movie/upload',{
            method:'POST',
            body:JSON.stringify({video:reader.result})
        })
        .then(res => console.log(res))
    }
    // console.log(video);
})
