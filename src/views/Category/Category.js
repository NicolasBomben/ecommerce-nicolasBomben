
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";

const Category = () => {

    const { categoryId } = useParams();
   
    return(
        <div>
            <h1>Productos</h1>
            <ItemListContainer categoryId={categoryId}/>
        </div>
    );
};

export default Category;