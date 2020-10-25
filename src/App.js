
import './App.css';

import Animations from "./components/animations"
import Opacity from "./components/opacity"

function App() {
  return (
    <main >
     <Animations/>
     <div style={{width: "100%", marginTop: "200vh"}}>
     <Opacity/>
     </div>
     <div style={{width: "100%", marginTop: "100vh", color: "black", textAlign: "center"}}>
<h1>ANIMATIONS ARE COMPLETED</h1>
     </div>
    </main>
  );
}

export default App;
