import axios from 'axios';
function getCookie(name: string) {
  if (typeof window === 'undefined') return;
  const value = `; ${document?.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
}
const axiosInstance = axios.create({});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // const separator = config.url?.includes('?') ? '&' : '?';
    // config.url = `${config.url}${separator}locale=en`;
    if (typeof window !== undefined && localStorage) {
      config.headers.Authorization = `Bearer ${localStorage.getItem(
        'accessToken'
      )}`;
    }

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axiosInstance;
