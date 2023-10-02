
import { useQuery } from '@tanstack/react-query'
import axiosInstance from '../lib/axios'


export const useProducts = ()=>{
  const {data,isLoading,refetch} = useQuery({
    queryFn : async ()=> {
      const productResponse = await axiosInstance.get('/')
      return productResponse
    }
  })
  return{
    data,
    isLoading,
    refetch
  }
}