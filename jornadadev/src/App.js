import React from 'react';
import "./App.css";
import Video from "./pages/video"

function App() {
  return (
    <div className="App">
     <div className ="app__videos">
      <Video 
        likes={500}
        messages={200}
        shares={100}
        name="Dayyy"
        description="gatin goleiro!"
        music="musica epica!!"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
      />
      <Video 
        likes={449}
        messages={180}
        shares={90}
        name="Wiid"
        description="gatin!"
        music="Clap your hands"
        url= "https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
        />
     </div>
    </div>
  );
}

export default App;
