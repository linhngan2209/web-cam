import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000, 
      gcTime: 1000 * 60 * 5, 
      refetchOnWindowFocus: false, 
    },
  },
});

export default queryClient;