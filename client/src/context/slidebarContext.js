import { createContext, useState }from 'react'

const SidebarContext = createContext()

const SidebarContextProvider = ({children})=>{

    const [isOpen, setIsOpen] = useState(false)

    const updateIsOpen=()=>{
        setIsOpen(!isOpen)
    }

    return(
        <SidebarContext.Provider value={{updateIsOpen, isOpen}}>
            {children}
        </SidebarContext.Provider>
    )
}

export {SidebarContext, SidebarContextProvider}