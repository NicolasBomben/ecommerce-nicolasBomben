
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";

const Category = () => {

    const { categoryId } = useParams();
   
    return(
        <div>
            <ItemListContainer categoryId={categoryId}/>
        </div>
    );
};

export default Category;