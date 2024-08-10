import { Link } from "react-router-dom";
import { e2p } from "../../utils/replacenumber";
import { numberWithCommas } from "../../utils/spreatenumber";
import styles from "./getallpost.module.css"
const GetAllPost = ({ posts }) => {
    console.log(posts)
    return (
        <div className={styles.container}>
            {posts?.map(post => <div className={styles.card} key={post._id}>

                <div className={styles.title} >
                    <h5>{post?.options?.title}</h5>
                    <div>
                        <span>{e2p(numberWithCommas(post?.amount))}تومان</span>
                        <h5>{post?.options?.city}</h5>
                        <Link to={`/${post._id}`}><button>جزییات</button></Link>
                    </div>

                </div>
                <div>
                    <img src={`http://localhost:3400/${post?.images[0]}`} />
                </div>
            </div>

            )}

        </div>
    );
};

export default GetAllPost;