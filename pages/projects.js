import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import { projectList } from "../data";
import Body from "../components/Body";
const ProjectPage = ()=>{
 
    return `
        ${Header()}
        ${Body()}
        <h1>Project Page</h1>
        ${ProjectList({ projects: projectList})}
    `;
}
export default ProjectPage;