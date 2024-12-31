// any-component.tsx
import { queryClient } from "@store/index";
import { useQuery } from "@tanstack/react-query";
import { VITE_BASE_MOKA_URL } from 'astro:env/client'


const getAdvisors = async () => {
  const response = await fetch(`${VITE_BASE_MOKA_URL}/api/advisors?populate=*`);
  return response.json();
};


export const useAdvisorsQuery = () =>{
const {data, isLoading} = useQuery({ 
  queryKey: ['advisors'], 
  queryFn: getAdvisors 
}, queryClient)


return {dataAdvisors: data, isLoading}
}