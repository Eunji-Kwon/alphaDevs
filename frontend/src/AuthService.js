import axios from 'axios'; // 또는 다른 HTTP 요청 라이브러리

// const login = async (email, password) => {
//   try {
//     const response = await axios.post('http://localhost:8080/login', { email, password });
//     return response.data;
//   } catch (error) {
//     console.error('Login request failed:', error);
//     throw error; 
//   }
// };

// const logout = async () => {
//   try {
//     const response = await axios.post('http://localhost:8080/logout');
//     return response.data;
//   } catch (error) {
//     console.error('Logout request failed:', error);
//     throw error; 
//   }
// };

// // Additional Functions

// export { login, logout }; 


// Login function
export async function login(email, password) {
    try {
      const response = await axios.post('http://localhost:8080/login', { email, password });
      return response.data;
    } catch (error) {
      console.error('Login request failed:', error);
      throw error;
    }
  }
  
  // Logout function
  export async function logout() {
    try {
      const response = await axios.post('http://localhost:8080/logout');
      return response.data;
    } catch (error) {
      console.error('Logout request failed:', error);
      throw error;
    }
  }