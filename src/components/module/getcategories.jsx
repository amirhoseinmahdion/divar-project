import { useQuery } from "react-query";
import { GetCategory } from "../../services/categories";

import CategoryCard from "../element/categorycard";


const GetCategories = () => {
    const { data } = useQuery(["GET-CATEGORY"], GetCategory)

    return (
        <>
            {
                data?.data.map(category => <CategoryCard key={category._id} category={category} />
                )
            }
           
        </>

    );
};

export default GetCategories;