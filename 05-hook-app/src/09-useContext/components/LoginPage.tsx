import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const LoginPage = () => {
    const {user,setUser} = useContext(UserContext);
    return (  
        <>
            <h2>Login Page</h2>
            <pre>
                {JSON.stringify(user, null , 3)}
            </pre>
            <button className="btn btn-outline-primary" onClick={()=> setUser({id: 2, email:"marcosTest2@gmail.com", name: "Marquiño"})}> 
                Establecer Usuario
            </button>
        </>
    );
}
 
export default LoginPage;