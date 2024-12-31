// any-component.tsx
import { queryClient } from "@store/index";
import { useQuery } from "@tanstack/react-query";
import { VITE_BASE_MOKA_URL } from 'astro:env/client'


const getMembers = async () => {
  const response = await fetch(`${VITE_BASE_MOKA_URL}/api/members?populate=*`);
  return response.json();
};


export const useMembersQuery = () =>{
const {data, isLoading} = useQuery({ 
  queryKey: ['members'], 
  queryFn: getMembers 
}, queryClient)


return {dataMembers: data, isLoading}
}