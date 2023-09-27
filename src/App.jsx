import { useState } from "react";
import Container from "./Container";
import img1 from "./assets/imgjpg.jpeg";

function App() {
   return (
      <div className="container">
         <div className="row">
            <div className="col">
               <Container
                  img={img1}
                  title="11"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsam ducimus reiciendis fugiat facere maiores esse! Fuga praesentium est dolore, aperiam blanditiis culpa asperiores quas esse, ex quos autem laborum..."
               />
            </div>
            <div className="col">
               <Container
                  img={img1}
                  title="11"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsam ducimus reiciendis fugiat facere maiores esse! Fuga praesentium est dolore, aperiam blanditiis culpa asperiores quas esse, ex quos autem laborum..."
               />
            </div>
            <div className="col">
               <Container
                  img={img1}
                  title="11"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsam ducimus reiciendis fugiat facere maiores esse! Fuga praesentium est dolore, aperiam blanditiis culpa asperiores quas esse, ex quos autem laborum..."
               />
            </div>
            <div className="col">
               <Container
                  img={img1}
                  title="11"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsam ducimus reiciendis fugiat facere maiores esse! Fuga praesentium est dolore, aperiam blanditiis culpa asperiores quas esse, ex quos autem laborum..."
               />
            </div>
         </div>
      </div>
   );
}

export default App;
