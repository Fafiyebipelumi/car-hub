"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './globals.css'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export const metadata = {
  title: 'Car Logs',
  description: "Discover world's best car showcase application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <ReactQueryProvider>
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body>{children}</body>
        <ReactQueryDevtools initialIsOpen={false} />
      </html>
    </QueryClientProvider>
  )
}
