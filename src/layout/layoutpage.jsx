import { Link, useNavigate } from "react-router-dom";
import styles from "./layoupage.module.css"
import { GetCookie } from "../utils/cookie";
import { getUser } from "../services/user";
import { useQuery } from "react-query";


const LayoutPage = ({ children }) => {
    const getcookie = GetCookie("refreshToken")
    const navigate = useNavigate()
    const { isSuccess, refetch, data } = useQuery(["Get-User"], getUser)
    const signouthandler = () => {
        document.cookie = "accessToken=";
        document.cookie = "refreshToken=";
        refetch()
        if (!isSuccess) {
            navigate("/auth")
        }

    }
    return (
        <main>
            <header className={styles.header}>
                <div className={styles.rightheader}>
                    <Link to="/">
                        <img src="../../public/divar.svg" alt="divar" />
                    </Link>
                    <span>

                        <img src="../../public/location.svg" alt="divar" />
                        <p> تهران</p>
                    </span>
                   

                </div>
                <div className={styles.leftheader}>
              
                    <span>
                        <img src="../../public/profile.svg" alt="divar" />
                        <Link to="/auth">
                            <p>   دیوار من</p>
                        </Link>
                    </span>
                    <Link to="/dashboard">
                        <button>ثبت اگهی</button>
                    </Link>
                    {getcookie ? <button onClick={signouthandler}>خروج</button> : null}
                    {data && data?.data?.role === "ADMIN" ? <Link to="/admin">
                        <button>پنل ادمین</button>
                    </Link> : null}

                </div>

            </header>
            {children}
            <footer>
                <p>Developed by AmirHosein Mahdion</p>
            </footer>
        </main>
    );
};

export default LayoutPage;