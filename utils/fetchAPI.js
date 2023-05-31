import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

 export const fetchApi = async (url) =>{
     const {data} = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '896e1d9cbfmsh7a309dce96f785cp19756cjsna2a7c4a1851f'
          }
     });

     return data;
 }
