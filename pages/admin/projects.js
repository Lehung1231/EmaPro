
import { deleteProject, getProjects } from "../../api/project";
import { useEffect, useState } from "../../libs"


const AdminProjectPage = () => {
    //   const[data,setData] = useState(projectList);
    const [data, setData] = useState([]);

    // Hàm được gọi lại sau khi return ( render ) ra ngoài màn hình
    useEffect(()=>{
        // Lấy dữ liệu từ localStorage ra, nếu nó không có thì gán bằng []
        // const projects = JSON.parse(localStorage.getItem("projects"))||[];
        // setData(projects)
        // fetch("http://localhost:3000/projects")
        //   .then((response)=> response.json())
        //   .then((data)=> setData(data))

        getProjects().then(({data})=> setData(data))
    },[])
    // chạy sau khi render
    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove");
        console.log(btns);
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                //console.log(id)
                const newData = data.filter((project) => {
                    return project.id != id;
                })
                // Xóa ở local
                setData(newData); //set lại data ở client
                // localStorage.setItem("projects",JSON.stringify(newData)); //set lại data ở localStorage

                // Xóa ở server
                // fetch(`http://localhost:3000/projects/${id}`,{
                //   method:"DELETE"
                // })

                deleteProject(id)
            })
        }
    })
    return /*html*/` 
  
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
       
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 " style="width : 50px">
                   ID
                </th>
                <th scope="col" class="px-6 py-3 " style="width : 200px">
                   TÊN DỰ ÁN
                </th>
                <th scope="col" class="px-6 py-3 " style="width : 300px">
                LINK
                </th>
                <th scope="col" class="px-6 py-3 " style="width : 250px">
                CONTENT
                </th>
                <th scope="col" class="px-6 py-3  " style="width : 200px">
                  HÌNH ẢNH
                </th>
                <th scope="col" class="px-6 py-3  " style="width : 20px">
                CATEGORY_ID
              </th>
                <th scope="col" class="px-6 py-3 text-center" style="width : 150px">
                <a href="/admin/projects/add" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">ADD</a>
                </th>
            </tr>
        </thead>
        <tbody>
        ${data.map((project, index) => {
          return `  
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ${project.id}
                </th>
                <td class="px-6 py-4">
                ${project.name}
                </td>
                <td class="px-6 py-4">
                ${project.link}
              
                </td>
                <td class="px-6 py-4">
                ${project.content}
              
                </td>
                <td class="px-6 py-4">
                <img src="${project.image}" alt="" style="width : 30%">
                </td>
                </td>
                <td class="px-6 py-4" >
                ${project.categoryId}
                </td>
                <td class="px-6 py-4  text-center">
                <a href="/admin/projects/${project.id}/update" class =" bg-purple-500 text-white rounded-md p-2 text-base font-medium">Sửa</a>
                    <button class="btn-remove bg-red-600 text-white rounded-md p-1.5 text-base font-medium "  data-id="${project.id}">Delete</button>
                </td>
            </tr>
            `
          }).join("")}
        </tbody>
    </table>
</div>
  `
}

export default AdminProjectPage