import axios, { AxiosResponse } from 'axios'

const BASE_URL: string = 'https://cars-by-api-ninjas.p.rapidapi.com'

interface AxiosParams {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    params?: {
        model: string
    }
    data?: object
}

const Client = async ({ url, method, params, data }: AxiosParams) => {
    try {
        const response: AxiosResponse = await axios({
            method,
            url,
            baseURL: BASE_URL,
            params,
            headers: {
                'X-RapidAPI-Key': '50e5875042mshc342f1fcf2d5632p14862ajsnc51b3f2e63c7',
                'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
            },
            data: data && JSON.stringify(data)
        })
        if (response.status === 200 || response.status === 201) {
            return response.data
        }
    } catch (error: any) {
        throw new Error(error.message || 'Error handling request')
    }
}

export default Client;