
import Category from "./components/Category";

import { render, router } from "./libs";

//import "./style.css";
import AboutPage from "./pages/about";
import login from "./pages/admin/login";
import AdminProjectAddPage from "./pages/admin/project-add";
import AdminProjectUpdatePage from "./pages/admin/project-update";
import AdminProjectPage from "./pages/admin/projects";

import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/not-found";
import PostsPage from "./pages/posts";
import ProjectDetailPage from "./pages/project-detail";
import ProjectsPage from "./pages/projects";

const app = document.querySelector("#app");

router.on("/", () => {
    render(HomePage, app)
});
router.on("/about", () => {
    render(AboutPage, app)
});
router.on("/contact", () => {
    render(ContactPage, app)
});
router.on("/posts", () => {
    render(PostsPage, app)
});
router.on("/projects", () => {
    render(ProjectsPage, app)
});
router.on("/categorys", () => {
    render(Category, app)
});
router.on("/projects/:id",(params)=>{
    // console.log(params);
    render(function(){
        return ProjectDetailPage(params)
    },app)
})
router.on("/admin/projectList/:id",(params)=>{
    render(function(){
        return projectsList(params)
    },app)
})
router.on("/admin/projects",()=>{
    render(AdminProjectPage,app)
})
router.on("/admin/login",()=>{
    render(login,app)
})
router.on("/admin/projects/add",()=>{
    render(AdminProjectAddPage,app)
})
router.on("/admin/projects/:id/update",(params)=>{
    render(function(){
        return AdminProjectUpdatePage(params)
    },app)
})

router.notFound(()=>{
    render(NotFoundPage,app)
})

router.resolve();