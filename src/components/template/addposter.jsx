import { useQuery } from "react-query";
import { GetCategory } from "../../services/categories";
import styles from "./addposter.module.css"
import { useState } from "react";
import { Toaster, toast } from 'sonner'
import axios from "axios";
import { GetCookie } from "../../utils/cookie";
import { useNavigate } from "react-router-dom";
const AddPoster = () => {
    const { data } = useQuery(["GET-CATEGORY"], GetCategory)
    const navigate = useNavigate()
    const [form, setForm] = useState({
        title: "",
        content: "",
        amount: null,
        city: "",
        category: "",
        images: null
    })
    const chnageaddposter = (e) => {
        const name = e.target.name
        if (name !== "images") {
            setForm({ ...form, [name]: e.target.value })
        } else {
            setForm({ ...form, [name]: e.target.files[0] })
        }
    }
    const createposterhandler = (e) => {
        e.preventDefault()
        const formData = new FormData()
        for (let i in form) {
            formData.append(i, form[i])

        }
        const token = GetCookie("accessToken")
        axios.post(`${import.meta.env.VITE_BASE_URL}/post/create`, formData, { headers: { "Content-Type ": "multipart/form-data", Authorization: `Bearer ${token}` } }).then((res) => toast.success("اگهی با موفیقت ثبت شد"), navigate("/")).catch(error => toast.error("اگهی ثبت نشد"))


    }
    return (
        <div className={styles.container} >
            <Toaster position="top-center" richColors />
            <h3>افزودن اگهی</h3>
            <p></p>
            <form onSubmit={createposterhandler} className={styles.form} onChange={chnageaddposter}>
                <label htmlFor="title">عنوان</label>
                <input id="title" name="title" value={form.title} type="text" />
                <label htmlFor="content">توضیحات</label>
                <textarea id="content" value={form.content} name="content" rows="4" cols="45"></textarea>
                <label htmlFor="amount">مبلغ</label>
                <input id="amount" name="amount" value={form.amount} type="number" />
                <label htmlFor="city">شهر</label>
                <input id="city" value={form.city} name="city" type="text" />
                <label htmlFor="category">دسته بندی</label>
                <select name="category" id="category" value={form.category}>
                    {data?.data.map(item => <option value={item._id} key={item._id}>{item.name}</option>)}
                </select>
                <label htmlFor="images">عکس</label>
                <input name="images" type="file" id="images" />
                <button type="submit">ایجاد</button>
            </form>

        </div>
    );
};

export default AddPoster;