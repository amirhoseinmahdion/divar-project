
import { useQuery } from "react-query";
import styles from "./categorylist.module.css"
import { GetCategory } from "../../services/categories";
import { Link } from "react-router-dom";
const CategoryList = () => {
    const { data } = useQuery(["GET-CATEGORY"], GetCategory)
    return (
        <div className={styles.container}>
            <h4>دسته ها</h4>
            {
                data?.data.map(category =>
                    <div key={category._id}  >
                        <Link to={`/by-category-slug/${category.slug}`} className={styles.categorilist}>
                            <img src={`${category.icon}.svg`} />
                            <p>{category.name}</p>
                        </Link>
                    </div>

                )
            }
        </div>
    );
};

export default CategoryList;