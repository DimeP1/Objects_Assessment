const ol = document.querySelector('ol');
const favoriteMovies = [
{
    name: "The Dark Knight Rises",
    year: 2012, 
    director: "Christopher Nolan",
    img: src='https://images.app.goo.gl/zKXtgcgwHnBNxS4A7'
},

{
    name: "The Infinity Saga",
    year: '2008 - 2019', 
    director: "Jon Favreau, Kenneth Branagh, Joe Johnston, Joss Whedon, Shane Black, Alan Taylor, Anthony and Joe Russo, James Gunn, Peyton Reed, Scott Derrikson, John Watts, Taika Waititi, Ryan Coogler, & Peyton Reed ",
    img: src='https://images.app.goo.gl/RkRS95AmzksFfE6k7'
},

{
    name: "The Hunger Games Saga",
    year: '2012-2015',
    director: "Gary Ross & Francis Lawrence",
    img: src='https://images.app.goo.gl/zKXtgcgwHnBNxS4A7'
},

{
    name: "Pride & Prejudice",
    year: 2005, 
    director: "Joe Wright",
    img: src='https://images.app.goo.gl/GeukqrZvfoUpYpnU7'
},

{
    name: "X-Men: Days of Future Past",
    year: 2014, 
    director: "Bryan Singer",
    img: src='https://images.app.goo.gl/mYuBwTV2LxhFgZUR7'
}
];

const template = favoriteMovies.map(favoriteMovies => `
<li>
    <p>Name: ${favoriteMovies.name}</p>
    <p>Year: ${favoriteMovies.year}</p>
    <p>Director: ${favoriteMovies.director}</p>
    <p> Picture: ${favoriteMovies.img}</p>
</li>
`);

ol.innerHTML = template.join('');