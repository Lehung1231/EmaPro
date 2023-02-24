import { getProject, updateProject } from "../../api/project";
import { router, useEffect, useState } from "../../libs";

const AdminProjectUpdatePage = ({data: {id}}) => {
    // kiểm tra localStorage có dữ liệu không?
    // nếu có thì lấy dữ liệu
    // ngược lại thì gán mảng rỗng

    // const projectList = JSON.parse(localStorage.getItem("projects"))||[];
    // const currentProject = projectList.find((project)=> project.id == id)
    /*
        B1: call api -> lấy data
        B2: set lại data để đổ dữ liệu ra form
        B3: submit form -> call api (truyền theo id cần update)
        B4: sau khi submit form thành công thì điều hướng về admin/projects
    */ 
   const [data,setData] = useState([])
    useEffect(()=>{
        // fetch(`http://localhost:3000/projects/${id}`)
        //     .then((response)=> response.json())
        //     .then((data) => setData(data))

        getProject(id).then(({data}) => setData(data));

    },[])
    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");
        const projectLink = document.getElementById("project-link");
        const projectImg = document.getElementById("project-image");
        const projectContent = document.getElementById("project-content");
        let input = document.querySelector('input[type="file"]');
        let file ;
        input.addEventListener('change', () => {
            file = input.files[0];
       
        });
        const selectElement = document.getElementById("mySelect");
      
       
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
       
            
            
            const newProject = {
                id: id,
                name: projectName.value,
                link : projectLink.value,
                content : projectContent.value,
                categoryId : selectElement.value,
                image : `/images/${file.name}`,
            
            };
            // fetch(`http://localhost:3000/projects/${id}`,{
            //     method:"PUT",
            //     headers:{
            //         "Content-Type":"application/json"
            //     },
            //     body: JSON.stringify(newProject)
            // }).then(()=> router.navigate("/admin/projects"))

            updateProject(newProject).then(()=> router.navigate("/admin/projects"))


            // cập nhật vào mảng projectList
            // const newProjectList = projectList.map((project)=>{
            //     return project.id == newProject.id? newProject:project
            // })

            // lưu vào localStorage dưới dạng chuỗi
            // localStorage.setItem("projects",JSON.stringify(newProjectList));

            // điều hướng về trang projects
            // router.navigate("/admin/projects");
        });
    });
    return `<div>
    <div   class="mt-20 ">
 
        <form action="" id="form-add" class="bg-white mx-auto p-6 rounded-xl" style="width: 600px" >
          

<div class="mb-6">
  <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">TÊN DỰ ÁN</label>
  <input type="text"  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required    id="project-name" value="${data.name}">
</div>

<div class="mb-6">
  <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">LINK</label>
  <input type="text"  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" id="project-link" value="${data.link}" >
</div>
<div class="mb-6">
<label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category ID</label>
<select id="mySelect" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option value = "${data.categoryId}">${data.categoryId}</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  
</select>
</div>
<div class="mb-6">
  <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NỘI DUNG DỰ ÁN</label>
  <input type="text"  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required    id="project-content" value="${data.content}">
</div>
<div class="mb-6">

<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2.5"  type="file" id="project-image" value="${data.image}" >

</div>
<button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">UPDATE</button>


        </form>
    </div>
    </div>`;
};

export default AdminProjectUpdatePage;