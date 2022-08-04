function MovieInfo({ description, downCount, genre, coverImg, title }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <ul>
        {genre.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <p>DownLoaded Count: {downCount}</p>
      <p>{description}</p>
    </div>
  );
}

export default MovieInfo;
