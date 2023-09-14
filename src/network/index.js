import axios from 'axios';
import configsys from '../_conf';

const API = configsys.apiV1;

const network = {

    /**
     * Post function to cover the await solution
     * @param url
     * @returns {Promise<void>}
     */
    async post(url,body){
        let header = this.getHeader();
        return axios.post(API+url, body, header).then(response => {
            return response;
        });
    },
    
    /**
     * Put function to cover the await solution
     * @param url
     * @returns {Promise<void>}
     */
    async put(url,body){
        let header = this.getHeader();
        return axios.put(API+url, body, header).then(response => {
            return response;
        });
    },
    
    /**
     * Delete function to cover the await solution
     * @param url
     * @returns {Promise<void>}
     */
    async delete(url){
        let header = this.getHeader();
        return axios.delete(API+url, header).then(response => {
            return response;
        });
    },

    /**
     * Get function as async
     * @param url
     * @param params
     * @returns {Promise<void>}
     */
    async get(url, params = null){
        let header      = this.getHeader();
        header.params   = params;
        return axios.get(API+url,header).then(response => {
           return response;
        });
    },

    getHeader(){
        return { headers: {'Authorization':'Bearer ' + localStorage.getItem(configsys.localStorageKeys.accesstoken) }};
    }
}

export default network;