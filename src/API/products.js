import axios from 'axios';
axios.defaults.baseURL = 'https://dummyjson.com/';

const getProductsBySearch = async (query) => {
	const { data } = await axios(`products/search?q=${query}`)
	return data
}


export default getProductsBySearch; 

