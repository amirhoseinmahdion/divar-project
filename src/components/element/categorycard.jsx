
import { useMutation, useQueryClient } from "react-query";
import styles from "./getcategory.module.css"
import { DeleteCategory } from "../../services/categories";

const CategoryCard = ({ category }) => {
    const QueryClient = useQueryClient()
    const { mutate } = useMutation(DeleteCategory, { onSuccess: () => QueryClient.invalidateQueries("GET-CATEGORY") })
    const deletecategoryhandler = () => {
        mutate(category._id)
    }

    return (
        <div className={styles.container}>
            <div className={styles.rightcss} >
                <img src={`${category.icon}.svg`} />
                <p>{category.name}</p>
            </div>
            <div className={styles.leftcss}>
                <p className={styles.tagP}>slug:{category.slug}</p>
                <button onClick={deletecategoryhandler}>حذف</button>
            </div>
        </div >
    );
};

export default CategoryCard;