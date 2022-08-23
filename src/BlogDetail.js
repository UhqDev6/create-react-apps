import { useParams } from "react-router-dom";

const BlogDetail = () => {
    //this get url slug / param
    const urlParams = useParams();
    console.log(urlParams);
    return(
        <>
            <h1>Blog Detail</h1>
            <p>Ini adalah blog detail {urlParams.slug}</p>
        </>
    );
}

export default BlogDetail;