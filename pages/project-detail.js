import { projectList } from "../data"
import { router } from "../libs";
const ProjectDetailPage = ({data: {id}}) => {
    // console.log('data: ',data);
    // const id = data.id;
    console.log(id);

    const project = projectList.find(function(project){
        return project.id == id
    })
    
    // check trước khi hiển thị ra
    if(!project){
        return router.navigate("/projects")
    }
    // nếu project id có tồn tại thì tiến hành hiển thị
    return `
    <div class="grid grid-cols-3 grid-rows-3 gap-4 bg-white h-80 pr-30 pl-30 m-20 rounded-xl" style="height : 500px">
    <div class=" h-16"></div>
    <div class= "h-16 mx-auto text-2xl font-bold pt-5">${project.name}</div>
    <div class=" h-16"></div>
    <div class=" h-16 mx-auto "><img src="/images/images.png " style = "width : 50%" class="mx-auto"><div class="ml-11">Sô lượng thành viên : ${project.soluong}</div></div>
    <div class=" h-16 "><img src="/images/html (1).png " style = "width : 25%" class="mx-auto"><div class="ml-36">Ngôn ngữ : ${project.ngonngu}</div></div>
    <div class=" h-16 mx-auto"><img src="/images/images (1).jpeg" style = "width : 50%" class="mx-auto"><div class="ml-8">Thời gian : ${project.time}</div></div>
    <div class=" h-16 mx-auto"><img src="/images/tải xuống (2).png" style = "width : 50%" class="mx-auto"><div class="ml-8">Số lượng commits : ${project.commits}</div></div>
    <div class=" h-16 "><img src="/images/tailwin.png " style = "width : 25%" class="mx-auto pt-4"><div class="ml-36 mt-5">Thư viện : ${project.thuvien}</div></div>
    <div class=" h-16 mx-auto "><img src="/images/images (2).jpeg" style = "width : 50%" class="mx-auto"><div class="ml-8 ">Chủ đề chính : ${project.chude}</div></div>
  

  </div>
    `
}

export default ProjectDetailPage