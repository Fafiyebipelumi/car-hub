"use client";

import { useQuery } from "@tanstack/react-query";
// import { Navbar } from "./components";
import axios from "axios";
// import { ICarsResponse } from "./interfaces/cars.interface";
import { useFetchCars } from "./hooks/useFetchCars.hook";


export default function Home() {

  const { data, isLoading, isError, error } = useFetchCars()
  if (isLoading) return <h2>Loading...</h2>
  if (isError) return `${error}`

  return (
    <div>
      {data?.data.map((car, idx) => (
        <div key={idx}>
          <p>{car.city_mpg}</p>
        </div>
      ))}
    </div>
  )
}
