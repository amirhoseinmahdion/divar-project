import { useState } from "react";
import SentToOtp from "../components/template/send-to-otp";
import CheckToOtp from "../components/template/check-to-otp";
import styles from "./authpage.module.css"

const AuthPage = () => {
    const [step, setStep] = useState(1)
    const [mobile, setMobile] = useState("")
    const [code, setCode] = useState("")
    return (
        <div className={styles.container}>
            {step === 1 && <SentToOtp setStep={setStep} mobile={mobile} setMobile={setMobile} />}
            {step === 2 && <CheckToOtp setStep={setStep} code={code} setCode={setCode}  mobile={mobile} />}
        </div>
    );
};

export default AuthPage;