import SigninReducer from "./SIgnreducer";
import { initialstate } from "./initailstate";
import { useReducer,createContext,useState,useEffect} from "react";
import axios from "axios";

export const callContext = createContext()
export const AlbumContext = createContext();

const Index =({children})=>{
    const [albums, setAlbums] = useState([]);
    const fetchData = async () => {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
          setAlbums(response.data);

        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);

    const[formstate,formdispatch]=useReducer(SigninReducer,initialstate)
    
    return(
    <>
  
        <AlbumContext.Provider value={albums}>
        <callContext.Provider value={{formstate,formdispatch}}>
        {children}
       </callContext.Provider>
       </AlbumContext.Provider>
    </>
    )
}
export default Index