import { useQuery } from "react-query";
import CategoryList from "../components/module/categorylist";
import GetAllPost from "../components/module/getallpost";
import { AllPosts, GetPostbycat, } from "../services/post";
import { useParams } from "react-router-dom";
import GetPostByCategory from "../components/template/getpostbycategory";


const Homepage = () => {
    const { data } = useQuery(["GetAll-post"], AllPosts)
    const { slug } = useParams()

    const { data: postbycategory } = useQuery(["GetByCategory-post"], () => GetPostbycat(slug))
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <CategoryList />
            {slug ? <GetPostByCategory posts={postbycategory} /> : <GetAllPost posts={data?.data.posts} />}

        </div>
    );
};

export default Homepage;