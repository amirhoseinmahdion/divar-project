import CreateCategories from "../module/createcategories";
import GetCategories from "../module/getcategories";
import styles from "./adminpage.module.css"

const AdminPage = () => {
    
    return (
        <div className={styles.container}>
            <GetCategories />
            <CreateCategories />
        </div>
    );
};

export default AdminPage;