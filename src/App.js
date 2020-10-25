
import './App.css';

import Animations from "./components/animations"
import Opacity from "./components/opacity"

function App() {
  return (
    <main >
     <Animations/>
     <div className="normal-image-container" style={{width: "100%", marginTop: "200vh"}}>
     <Opacity/>
     </div>
    </main>
  );
}

export default App;
