import logo from './logo.svg';
import './style.css';
import image from "./webdev1.jpg"

function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black',maxWidth:'100vw'}}>

<h1 className="title red">Your name here</h1>

<br />

<img className= "webdev" src={image} />

<br />

<img className= "webdev" src="/webdev2.jpg" />

</div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App;
