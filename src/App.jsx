

export const App =()=>{
  return (

    <>
      <ArunPanda/>
    <NetflixCards/>
    <NetflixCards/>
    <NetflixCards/>
    </>
  );

};


const NetflixCards =()=>{
  return (
    <div >
    
    <div >
      <img src="images/tumbbadposter.webp" alt="images/tumbadposter" />
    </div>
    <div >
      <h1>Tumbbad</h1>
      <h3>Release Date: 12 October 2018</h3>
      <h3>
        Rating: 8.3/10
      </h3>
      <p>
        Tumbbad is a 2018 Indian Hindi-language period horror film directed by
        Rahi Anil Barve and Adesh Prasad. Anand Gandhi, best known for the
        National Award-winning film Ship of Theseus, brought it to life as a
        creative director. 
      </p>
    </div>
  </div>
  );
};


const ArunPanda = () => {
  return (
    <header>
      <h1>My Favourite Movies</h1>
    </header>
  );
};




