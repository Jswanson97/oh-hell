import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const GoBack = () => {
    const history = useHistory();
return(
     <button onClick={()=> history.goBack()}>Back</button>
)
};