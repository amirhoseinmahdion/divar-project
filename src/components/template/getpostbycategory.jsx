import { Link } from "react-router-dom";
import { e2p } from "../../utils/replacenumber";
import { numberWithCommas } from "../../utils/spreatenumber";
import styles from "../module/getallpost.module.css"

const GetPostByCategory = ({ posts }) => {
    console.log(posts)
    return (
        <div className={styles.container}>
            <h1 style={{ textAlign: "center" }}> هنوز قسمت بک اند توسعه پیدا نکرده</h1>



        </div>
    );
};

export default GetPostByCategory;