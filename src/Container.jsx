function Container({ img, title, desc }) {
   return (
      <div>
         <div className="card-group">
            <div className="card">
               <img src={img} className="card-img-top" />
               <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{desc}</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Container;
