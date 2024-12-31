// any-component.tsx
import { queryClient } from "@store/index";
import { useQuery } from "@tanstack/react-query";
import { VITE_MOKA_URL, VITE_MEMBERS_URL } from 'astro:env/client'


const getMembers = async () => {
  const response = await fetch(`${VITE_MOKA_URL}${VITE_MEMBERS_URL}`);
  return response.json();
};


export const useMembersQuery = () =>{
const {data, isLoading} = useQuery({ 
  queryKey: ['partners'], 
  queryFn: getMembers 
}, queryClient)


return {dataMembers: data, isLoading}
}