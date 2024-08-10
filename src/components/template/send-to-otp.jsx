import { postMobile } from "../../services/auth";
import styles from "./auth.module.css"
import { Toaster, toast } from 'sonner'

const SentToOtp = ({ setStep, mobile, setMobile }) => {

    const sendmobilehandler = async () => {
        if (mobile.length !== 11) {
            toast.error("مشکلی در شماره موبایل وجود دارد")
            return;
        }
        const response = await postMobile(mobile)
        if (response.status === 200) {
            setStep(2)
        } else {
            toast.error("مشکلی در  سایت وجود دارد")
        }
    }

    return (
        <div className={styles.container}>
            <Toaster position="top-center" richColors />
            <h2>ورود به حساب کاربری</h2>
            <p>برای استفاده از امکانات دیوار لطفا شماره موبایل خود را وارد کنیدتا کد تایید ارسال شود</p>
            <div className={styles.inputtext}>
                <label htmlFor="mobile">شماره موبایل خود را وارد کنید</label>
                <input id="mobile" value={mobile} placeholder="شماره موبایل" type="Number" onChange={(e) => setMobile(e.target.value)} />
            </div>
            <button className={styles.btn1} onClick={sendmobilehandler}>تایید</button>


        </div>
    );
};

export default SentToOtp;