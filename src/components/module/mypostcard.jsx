
import { e2p } from "../../utils/replacenumber";
import { numberWithCommas } from "../../utils/spreatenumber";
import styles from "./mypostcard.module.css"

const MypostCard = ({ post }) => {
    return (
        <div className={styles.container}>
            <div className={styles.rightcss} >
                <img src={`${import.meta.env.VITE_BASE_URL}/${post?.images[0]}`} />
                <div className={styles.inform} >
                    <h5>{post?.options?.title}</h5>
                    <span>{post?.options?.content}</span>
                </div>
            </div>
            <div className={styles.leftcss}>
                <h5>{new Date(post?.createdAt).toLocaleDateString('fa-IR')}</h5>

                <span>{e2p(numberWithCommas(post?.amount))}تومان</span>
            </div>
        </div>
    );
};

export default MypostCard;