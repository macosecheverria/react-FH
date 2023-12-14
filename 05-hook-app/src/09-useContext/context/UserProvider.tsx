import { ReactNode, useState } from "react";
import { User, UserContext } from "./UserContext";

type Props = {
    children: ReactNode
}


const userData: User =  {
    id: 1,
    name: "Marcos",
    email: "marcostest1234@gmail.com"
} 

const UserProvider = ({children}:Props) => {
    const [user, setUser] = useState<User>(userData);

    const shareData = {
        user,
        setUser
    }
    return ( 
        <UserContext.Provider value={shareData}>
            {children}
        </UserContext.Provider>
     );
}
 
export default UserProvider ;