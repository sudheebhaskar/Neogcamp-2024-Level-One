const movies = [
    { id: 1, title: 'Movie 1', genre: 'action' },
    { id: 2, title: 'Movie 2', genre: 'drama' },
    { id: 3, title: 'Movie 3', genre: 'action' },
    { id: 4, title: 'Movie 4', genre: 'comedy' },
  ];
  
  document.getElementById('moviesList').innerHTML = movies.map(movie => 
    `<li>${movie.title} - Genre: ${movie.genre}</li>`
  ).join('');
  
  const genreGroups = movies.reduce((acc, movie) => {
    acc[movie.genre] = acc[movie.genre] || [];
    acc[movie.genre].push(movie.title);
    return acc;
  }, {});
  
  let genreHTML = '';
  for (const genre in genreGroups) {
    genreHTML += `
      <div class="genre-group">
        <p><strong>Genre:</strong> ${genre}</p>
        <p><strong>Movies:</strong> ${genreGroups[genre].join(', ')}</p>
        <hr>
      </div>
    `;
  }
  
  document.getElementById('genreGroups').innerHTML = genreHTML;
  