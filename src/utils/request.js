import axios from 'axios';

const request = axios.create({
    baseURL: "https://tiktok.fullstack.edu.vn/api/",
});

// Khi gọi hàm có từ khóa async thì nó sẽ trả về 1 Promise
export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
}

export default request;