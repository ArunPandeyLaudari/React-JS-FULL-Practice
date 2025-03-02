

export const App = () => {
  return (

    <>
      <ArunPanda />
      <NetflixCards />
    </>
  );

};


const NetflixCards = () => {
  const images = "/images/tumbbadposter.webp";
  const name = "Tumbbad"
  const ReleaseDate = "12 October 2018";
  const Rating = "8.3/10";
  const Description = "Tumbbad is a 2018 Indian Hindi-language period horror film directed by Rahi Anil Barve and Adesh Prasad. Anand Gandhi, best known for the National Award-winning film Ship of Theseus, brought it to life as a creative director.";
  return (

    <div >

      <div >
        <img src={images} alt="images/tumbadposter" />
      </div>
      <div >
        <h1>Name: {name}</h1>
        <h3>Release Date: {ReleaseDate}</h3>
        <h3>
          Rating: {Rating}
        </h3>
        <h3>
          Description: {Description}
        </h3>
        <h3> Genere:
          {returnGenre()}
        </h3>
      </div>
    </div>
  );
};


const ArunPanda = () => {
  return (
    <header>
      <h1>My Favourite Movies {1 + 2 + 3}</h1>
    </header>
  );
};


const returnGenre = () => {
  const genre ="Horror";
  return genre;

};

