import React, {useState} from "react";

export const GetAndSendId = React.createContext({
    id: '',
    getNewId: ()=>{}
})

let SendId = ({children})=>{

    const [ lastId, setLastId ] = useState('1');

    const changeId = (id)=>{
        setLastId(id);
    }

    return(
        <GetAndSendId.Provider value={{
            id: lastId,
            getNewId: changeId
        }}>
            {children}
        </GetAndSendId.Provider>
    )

}

export default SendId
