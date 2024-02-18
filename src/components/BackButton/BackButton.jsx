import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './Back.css';

export const GoBack = () => {
    const history = useHistory();
return(
     <button onClick={()=> history.goBack()}>Back</button>
)
};