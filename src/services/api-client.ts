import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api', 
    params: {
        key: 'f6de02ad1d264d05a4b428b6242bdf95'
    }
})
