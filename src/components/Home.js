
import { useEffect, useState } from 'react'
import Characters from './Characters';
import Pagination from './Pagination';

import axios from'axios';
import './Home.scss'

const Home = () => {

    const initialUrl = "https://rickandmortyapi.com/api/character"
    const [characters, setCharacters] = useState([]);
    const [query, setQuery] = useState("");
    const [info, setInfo] = useState({});

    const fetchCharacters = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results)
                setInfo(data.info)
            })
            
            .catch(err => console.log(err))
    }

    useEffect(()=>{
        fetchCharacters(initialUrl)
    },[])

    const onPrevious = ()=>{
        fetchCharacters(info.prev);
    }
    const onNext = ()=>{
        fetchCharacters(info.next);
    }

    
    //Filter
    useEffect(() => {

        const fetchData = async () =>{
            try {
                const {data} = await axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
                setCharacters(data.results)
                setInfo(data.info)
                
            } catch(error){
                console.log(error)
            }
            
        }

        
        
        
        fetchData()
       
    }, [query])


    

    

  
 
  return (
      <>
      
      <div className="container">

        
        
        <input className={"filter"} type="search" placeholder={"Search character"} onChange={e => setQuery(e.target.value)} value={query}/>
        
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
        <Characters characters={characters} />
        
        
        
    </div>
      </>
    
    )
};

export default Home;
