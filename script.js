const btn=document.getElementById('btn');
btn.addEventListener("click",()=>{
    const movie=document.getElementById('movie').value;
    console.log(movie);
    if(movie=="")
    {
        alert("Search panel can't be left blank");
    }
    else{
        const url = 'https://www.omdbapi.com/?t='+movie+'&apikey=5b3db25b';
        fetch(url).then(response=>response.json()).then((data,err)=>{
            console.log(data.Response);
            if(data.Response=='False'){
                document.getElementById('fail').style.visibility='visible';
                document.getElementById('Values').style.visibility='hidden';
            }
            else
            {
                document.getElementById('fail').style.visibility='hidden';
                document.getElementById('Values').style.visibility='visible';
                document.getElementById('img').src=data.Poster;
                document.getElementById('title').innerHTML=data.Title;
                document.getElementById('year').innerHTML=data.Year;
                document.getElementById('genre').innerHTML=data.Genre;
                document.getElementById('type').innerHTML=data.Type;
                document.getElementById('actor').innerHTML=data.Actors;
                document.getElementById('director').innerHTML=data.Director;
                document.getElementById('language').innerHTML=data.Language;
                document.getElementById('imdb').innerHTML=data.imdbRating;
                document.getElementById('plot').innerHTML=data.Plot;
            }
        });
    }
});