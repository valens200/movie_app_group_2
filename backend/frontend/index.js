const submit = document.getElementById("submit")
submit.addEventListener("click",async (e) => {
    e.preventDefault();
    const movie = document.getElementById('movie').files[0];
    console.log(movie);
    const video = new FileReader(movie);
    await fetch('localhost:4000/upload',{
        method:'POST',
        body:JSON.stringify(movie)
    })
})
