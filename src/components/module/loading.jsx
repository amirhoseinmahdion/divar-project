import { Circles } from "react-loader-spinner";
import styles from "./loadnig.module.css"

const Loadnig = () => {
    return (
        <div style={{ minHeight: "100vh" }}>
            <Circles
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass={styles.loader}
                visible={true}
            />
        </div>
    );
};

export default Loadnig;