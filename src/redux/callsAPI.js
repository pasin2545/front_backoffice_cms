import { publicRequest } from "./requestMethods";

const api = publicRequest();

export const callapi = async (dispatch) => {

    try{
        
        const res = await api.get('/').then(res=>console.log(res.data));
           
        return res
    }catch (error){
        return 'failure'
    }

    
}
