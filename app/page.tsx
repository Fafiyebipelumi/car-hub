"use client";

import { UseQueryResult, useQuery } from "@tanstack/react-query";
// import { Navbar } from "./components";
import axios from "axios";
import { ITransactionResponse } from "./interfaces/transaction.interface";


export default function Home() {
  async function fetchTransactions(): Promise<ITransactionResponse> {
    const response = await axios.get('http://jsonplaceholder.typicode.com/users')
    return response.data
  }

  const { data, isLoading } = useQuery({
    queryKey: ['transaction'],
    queryFn: fetchTransactions
  })
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <h3 style={{ color: 'black' }}>{data?.id} - {data?.username}</h3>
    </div>
  )
}
