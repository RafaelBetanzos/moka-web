// any-component.tsx
import { queryClient } from "@store/index";
import { useQuery } from "@tanstack/react-query";
import { VITE_MOKA_URL, VITE_PARTNERS_URL } from 'astro:env/client'


const getPartners = async () => {
  const response = await fetch(`${VITE_MOKA_URL}${VITE_PARTNERS_URL}`);
  return response.json();
};


export const usePartnersQuery = () =>{
const {data, isLoading} = useQuery({ 
  queryKey: ['partners'], 
  queryFn: getPartners 
}, queryClient)


return {data, isLoading}
}