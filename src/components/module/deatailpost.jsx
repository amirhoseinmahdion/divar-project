

import { Link, useParams } from 'react-router-dom';
import { GetPostId } from '../../services/post';
import { useQuery } from 'react-query';
import styles from "./getdetail.module.css"
import { sp } from '../../utils/replacenumber';

const DetailPost = () => {
    const { id } = useParams()
    const { data } = useQuery(["Get-postId"], () => GetPostId(id))
    const post = data?.data?.post
    console.log(post)
    return (
        <div className={styles.container}>
                <p>عنوان:{post?.options?.title}</p>
                <p>قیمت:{sp(post?.amount)}تومان</p>
                <p>شهر:{post?.options?.city}</p>
                <p>توضیحات:{post?.options?.content}</p>
                <p>تاریخ انتشار:{new Date(post?.createdAt).toLocaleDateString('fa-IR')}</p>
            <div className={styles.detailimg}>
                <img src={`${import.meta.env.VITE_BASE_URL}/${post?.images[0]}`} />
            </div>
        </div>

    );
};

export default DetailPost;