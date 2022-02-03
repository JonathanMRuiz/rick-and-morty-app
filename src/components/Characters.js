import './Characters.scss'

const Characters = ({ characters = []}) => {
  return (
    <div className="row">
     
            {
                characters.map((item,index) => (
                    <div className="col mb-4" key={index}>
                        <div className="card">
                            <img className="image" src={item.image} alt={item.image}/>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <hr/>
                                <p>Specie: {item.species}</p>
                                <hr/>
                                <p>Location: {item.location.name}</p>
                            </div>

                            
                        </div> 
                        
                    </div>
                    
                ))
            }
            
   
    </div>
    )
};

export default Characters;
