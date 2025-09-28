import React, { createContext, useContext } from 'react'
import { useAppwrite } from './useAppwrite';
import { getCurretUser } from './appwrite';


interface User{
    $id:string;
    name:string;
    email:string;
    avatar:string;
}

interface GlobalContextType{
    isLoggedIn:boolean;
    user:User | null;
    loading:boolean;
    refetch: (newParams: Record<string , string | number>)=>Promise<void>

}

export const Context= createContext<GlobalContextType | undefined>(undefined)
const GlobalProvider = ({children}:{children:React.ReactNode}) => {
    const {data:user,loading,refetch}= useAppwrite({
        fn: getCurretUser
    })
const isLoggedIn= !!user;

  return (
    <Context.Provider value={{isLoggedIn,user,loading,refetch}}>
       {children}
    </Context.Provider>
  )
}

export const useGlobalContext= ()=>{
    const context= useContext(Context);
    if(!context){
        throw new Error("useGlobalContext must be used within a GlobalProvider")
    }
    return context;
}

export default GlobalProvider


