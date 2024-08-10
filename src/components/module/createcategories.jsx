
import { useState } from "react";
import styles from "./createcategories.module.css"
import { useMutation, useQueryClient } from "react-query";
import { SendCategories } from "../../services/categories";
import { Toaster, toast } from 'sonner'
const CreateCategories = () => {
    const QueryClient = useQueryClient()
    const [categori, setCategori] = useState({
        name: "",
        slug: "",
        icon: ""
    })
    const ChnageCategory = (e) => {
        const name = e.target.name
        const value = e.target.value
        setCategori({ ...categori, [name]: value })
    }
    const { mutate, isLoading } = useMutation(SendCategories, { onSuccess: () => QueryClient.invalidateQueries("GET-CATEGORY") })

    const Createcategoties = (e) => {
        e.preventDefault()
        if (!categori.name || !categori.slug || !categori.icon) {
            toast.error("درخواست موضوع جدید را کامل پر نکردید")
            return;
        }
        mutate(categori)
        toast.success("با موفقیت موضوع جدید ساخته شد")

    }
    return (
        <div className={styles.container}>
            <Toaster position="top-center" richColors />
            <h3>دسته بندی جدید</h3>
            <form onSubmit={Createcategoties}>
                <label htmlFor="">اسم دسته بندی</label>
                <input id="name" name="name" value={categori.name} placeholder="نام" onChange={ChnageCategory} />
                <label htmlFor="slug" >اسلاگ</label>
                <input id="slug" name="slug" value={categori.slug} placeholder="مسیردهی" onChange={ChnageCategory} />
                <label htmlFor="icon">ایکون</label>
                <input id="icon" name="icon" value={categori.icon} placeholder="ایکون" onChange={ChnageCategory} />
                <button type="submit" disabled={isLoading}>ایجاد</button>
            </form>
        </div>
    );
};

export default CreateCategories;