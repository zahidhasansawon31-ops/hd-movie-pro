fetch('movies.json')
.then(response => response.json())
.then(data => {
  const container = document.getElementById("moviesContainer");
  data.forEach(m => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img loading="lazy" src="${m.img}" alt="${m.title}"/>
                      <h3>${m.title}</h3>
                      <a href="${m.trailer}" class="btn">▶ Watch Trailer</a>
                      <a href="${m.download}" class="btn">⬇ Download</a>`;
    container.appendChild(card);
  });
});