import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const HomePage = () => {
    const {user} = useContext(UserContext)

    return ( 
        <>
            <h2>Home Page { user.name}</h2>
            <pre>
                {JSON.stringify(user,null, 3)}
            </pre>
        </>
     );
}
 
export default HomePage;