
import './App.css';
import Card from "./components/Card";
function App() {
  return (
    <div className="wpp">
        <div className="main"> <p> first answer</p>

        <div>
            <h1>BART</h1>
            <img className="pict" src="https://i1.sndcdn.com/avatars-000099391844-1oczm0-t500x500.jpg"/>
        </div>
            <div>
                <h1>HOMER</h1>
                <img className="pict" src="https://w7.pngwing.com/pngs/797/520/png-transparent-homer-simpson-thumbs-up-ush.png"/>
            </div>
            <div>
                <h1>Marge</h1>
                <img className="pict" src=" https://static.wikia.nocookie.net/simpsons/images/0/0b/Sexy_Santa_Marge.png"/>
            </div>
            <div>
                <h1>Lisa</h1>
                <img className="pict" src="https://pngimg.com/uploads/simpsons/simpsons_PNG64.png"/>
            </div>
            <div>
                <h1>Maggy</h1>
                <img className="pict" src="https://static.wikia.nocookie.net/vsbattles/images/4/41/IMG_6957.png"/>
            </div>
        </div>
        Second part of first homework
        <Card id={1}/>
        <Card id={2}/>
        <Card id={3}/>
        <Card id={4}/>
        <Card id={5}/>
        <Card id={6}/>
    </div>
  );
}

export default App;
