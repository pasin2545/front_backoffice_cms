import { publicRequest } from "./requestMethods";
const api = publicRequest;
export const Get_All_Product = async () => {
    try {
        const res = await api.get('/showProducts').then(res => {
            console.log(res);
            console.log(res.data);
        });
        return res
    } catch (error) {
        return 'failure'
    }
}

export const Add_product = async () => {

    try {

        const res = await api.post('/createProduct', {}).then(res => {
            console.log(res);
        });


    } catch (error) {
        return 'failure'
    }
}

