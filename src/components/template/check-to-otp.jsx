import { checkCode } from "../../services/auth";
import styles from "./auth.module.css"
import { Toaster, toast } from 'sonner'
import { useCookies } from "react-cookie";
import { SetCookie } from "../../utils/cookie";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getUser } from "../../services/user";

const CheckToOtp = ({ setStep, code, setCode, mobile }) => {
    const router = useNavigate()
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name'])
    const { refetch, isSuccess } = useQuery(["Get-User"], getUser)
    const sendOtpCode = async () => {
        if (code.length !== 5) {
            toast.error("کد ارسالی مشکل دارد");
            return;
        }
        const response = await checkCode(mobile, code)
        if (response) {
            toast.success("ورود با موفقیت انجام شد")
            // setCookie("accessToken", response.data.accessToken, {maxAge  : 1* 24 * 60 * 60})
            // setCookie("refreshToken", response.data.refreshToken ,{maxAge : 30 * 24 * 60 * 60})
            SetCookie(response.data)
            router("/dashboard")
            refetch()

        } else {
            toast.error("مشکلی در تایید کد وجود دارد")
        }
    }
    return (
        <div className={styles.container}>
            <Toaster position="top-center" richColors />
            <h2>ورود به حساب کاربری</h2>
            <p>کد پیامک شده به شماره  {mobile} را وارد کنید</p>
            <div className={styles.inputtext}>
                <label htmlFor="code">کد تایید را وارد کنید</label>
                <input id="code" value={code} placeholder="کد تایید" type="Number" onChange={(e) => setCode(e.target.value)} />
            </div>
            <div className={styles.btn}>
                <button className={styles.btn1} onClick={sendOtpCode}>ورود</button>
                <button className={styles.btn2} onClick={() => setStep(1)}>تغیر شماره موبایل</button>
            </div>
        </div>
    );
};

export default CheckToOtp;