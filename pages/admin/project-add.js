import { addProject } from "../../api/project";
import { router, useEffect,useState } from "../../libs";

const AdminProjectAddPage = () => {
    // kiểm tra localStorage có dữ liệu không?
    // nếu có thì lấy dữ liệu
    // ngược lại thì gán mảng rỗng

    const projectList = JSON.parse(localStorage.getItem("projects"))||[];
    console.log(projectList);

    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");
        const projectLink = document.getElementById("project-link");
        const projectImg = document.getElementById("project-image");
        const projectContent = document.getElementById("project-content");
        const nameError = document.getElementById('nameError');
        const imgError = document.getElementById('imgError');
        const linkError = document.getElementById('linkError');
        const contentError = document.getElementById('contentError');
        const linkRegex = /^(http(s)?:\/\/)?[a-zA-Z0-9]+\.[a-zA-Z]{2,}(\S*)?$/;
  
        let input = document.querySelector('input[type="file"]');
        let file ;
        input.addEventListener('change', () => {
            file = input.files[0];
       
        });
        const selectElement = document.getElementById("mySelect");
        let selectedOption;
        let selectedValue;
        selectElement.addEventListener("change", (event) => {
            selectedOption = event.target.options[event.target.selectedIndex];
            selectedValue = selectedOption.value;
 
         });
        form.addEventListener("submit", (e) => {
          e.preventDefault();
            // tạo ra 1 object mới lấy dữ liệu từ form
         
            if (projectName.value.trim() === '') {
                nameError.innerHTML = 'Vui lòng nhập tên';
                projectName.focus();
                return false;
              } else {
                nameError.innerHTML = '';
              }
            
              if (projectLink.value.trim() === '') {
                linkError.innerHTML = 'Vui lòng nhập link';
                projectLink.focus();
                return false;
              } else if(!linkRegex.test(projectLink.value)) {
                linkError.innerHTML = 'Không đúng định dạng link';
                projectLink.focus();
                return false;
              } else {
                linkError.innerHTML = '';
              }
              if(selectElement.value === ''){
                selectError.innerHTML = 'Vui lòng chọn';
              
            }else{
              selectError.innerHTML = '';
            }
              if (projectContent.value.trim() === '') {
                contentError.innerHTML = 'Vui lòng nhập content';
                projectContent.focus();
                return false;
              } else {
                contentError.innerHTML = '';
              }  
             
             
              if (projectImg.files.length === 0) {
                imgError.innerHTML = "Please select a file.";
          
              } else {
                imgError.innerHTML = '';
              }
             
          
            const newProject = {
                // id: projectList.length + 1,
                name: projectName.value,
                link: projectLink.value,
                image : `/images/${file.name}`,
                content : projectContent.value,
                categoryId : selectedValue,
            };
            addProject(newProject).then(()=> router.navigate("/admin/projects"))
        });
    });
    return `
    <div>
    <div   class="mt-20 ">
 
        <form action="" id="form-add" class="bg-white mx-auto p-6 rounded-xl" style="width: 600px" >
          

<div class="mb-6">
  <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">TÊN DỰ ÁN</label>
  <input type="text"  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" id="project-name" >
</div> 
<div id="nameError" class="error text-red-400 text-center"></div>

<div class="mb-6">
  <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">LINK</label>
  <input type="text"  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" id="project-link">
</div>
<div id="linkError" class="error text-red-400 text-center"></div>
<div class="mb-6">
<label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category ID</label>
<select id="mySelect" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option value = "">Chọn</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  
</select>
</div>
<div id="selectError" class="error text-red-400 text-center"></div>
<div class="mb-6">
  <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NỘI DUNG DỰ ÁN</label>
  <input type="text"  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"    id="project-content">
</div>
<div id="contentError" class="error text-red-400 text-center"></div>

<div class="mb-6">

<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2.5"  type="file" id="project-image" >
</div>
<div id="imgError" class="error text-red-400 text-center"></div>
<button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ADD</button>


        </form>
    </div>
    </div>`;
};

export default AdminProjectAddPage;