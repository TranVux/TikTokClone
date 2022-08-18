import axios from 'axios';
const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

// Khi gọi hàm có từ khóa async thì nó sẽ trả về 1 Promise
export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
}

export default httpRequest;
