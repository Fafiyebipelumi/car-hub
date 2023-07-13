import { useQuery, UseQueryResult } from '@tanstack/react-query';
import Client from '../utils';
import { ICarsResponse } from '../interfaces/cars.interface';

const fetchCars = async () => {
    await Client({ method: 'GET', url: '/v1/cars', params: { model: 'corolla' } })
}

export const useFetchCars = () => {
    const query: UseQueryResult<ICarsResponse, Error> = useQuery({ queryKey: ['logs'], queryFn: fetchCars })
    // const result = query.data
    return query
}