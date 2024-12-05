const movies = [
    {id: 1, title: "The Shawshank Redemption", genre: "drama", year: 1994},
    {id: 2, title: "The Godfather", genre: "crime", year: 1972},
    {id: 3, title: "The Dark Knight", genre: "action", year: 2008},
    {id: 4, title: "Pulp Fiction", genre: "crime", year: 1994}
  ];
  
  const movieListDiv = document.querySelector("#movieList");
  
  const movieListHTML = movies.map(movie => `
  <div>
    <strong>ID:</strong> ${movie.id} <br>
    <strong>Title:</strong> ${movie.title}<br>
    <strong>Genre:</strong> ${movie.genre} <br>
    <strong>Year:</strong> ${movie.year} <br>
    <hr>
  </div>
  `)
  
  movieListDiv.innerHTML = movieListHTML.join('')
  
  