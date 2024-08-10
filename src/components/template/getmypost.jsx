import { useQuery } from "react-query";
import styles from "./getmypost.module.css"
import { GetMyPosts } from "../../services/post";
import MypostCard from "../module/MypostCard";

const GetMyPost = () => {
    const { data } = useQuery("GET-MYPOST", GetMyPosts)
    return (
        <div className={styles.container} >
            <h3>اگهی های من</h3>
            <p></p>
            {data?.data?.posts.map(post => <MypostCard key={post._id} post={post} />)}
        </div>
    );
};

export default GetMyPost;