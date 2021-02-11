import { getAllByAltText } from '@testing-library/react';
import axios from 'axios';
const GETALL_DATA_BASEURL="http://localhost:8080/getAll";
const GET_DATA_BASEURL="http://localhost:8081/getdata";
const POST_DATA_BASEURL="http://localhost:8081/postdata";

class GetDataService{
    getData()
    {
        return axios.get(GETALL_DATA_BASEURL);
    }
    addData(obj)
    {
       return axios.post(POST_DATA_BASEURL,obj);
    }
    getDatabyid(obj)
    {
        return axios.post(GET_DATA_BASEURL,obj);
    }
}
export default new GetDataService()