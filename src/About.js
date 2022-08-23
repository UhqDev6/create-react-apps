import { Link, Outlet } from "react-router-dom";

const About = () => {
    return(
        <>
            <h1>Halaman About</h1>
            <p>Halo Ini adalah about, detailnya pada link berikut ya ... </p>
            <Link to="/about/team">View..</Link>
            <Outlet />
        </>
    );
}

export default About;