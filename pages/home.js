import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Category from "../components/Category";  
import { useEffect , useState } from "../libs";
const HomePage = () => {
    const [categories, setCategories] = useState([]);
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(response => response.json())
            .then(data => setCategories(data))
    }, []);
    const onHandleClick = (id) => {
        fetch(`http://localhost:3000/categories/${id}?_embed=projects`)
            .then(response => response.json())
            .then(data => setProjects(data.projects))
         
    }
    return `
        ${Header()}
        ${Body()}
        ${Category({ categories, onClick: onHandleClick })}
        ${Projects({ projects })}
        ${Footer()}
    `;
};
export default HomePage;