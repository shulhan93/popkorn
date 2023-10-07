import WatchedMovie from "./WatchedMovie";

const WatchedList = ({ watched, onDeleteWathed }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          key={movie.imdbID}
          movie={movie}
          onDeleteWathed={onDeleteWathed}
        />
      ))}
    </ul>
  );
};

export default WatchedList;
