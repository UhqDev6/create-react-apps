import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const loginHandler = (event) => {
        event.preventDefault();
        
        const checkLogin = true;
        if(checkLogin) {
            //redirect to ...
            navigate('/dashboard');
        }
    }
    return(
        <>
            <form onSubmit={loginHandler}>
                <input type="text" name="username" />
                <input type="text" name="password" />
                <button className="btn-edit">Login</button>
            </form>
        </>
    );
}

export default Login;