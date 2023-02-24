
import { getProjects } from "../api/project";
import { useEffect,useState } from "../libs"
const Projects = ({ projects }) => {
  const [data, setData] = useState([]);
  useEffect(()=>{
      getProjects().then(({data})=> setData(data));
     
  },[]);
  

  return `

    <div>${projects.map(project => `<div><div class="grid grid-cols-1 md:grid-cols-3 gap-10 pl-10 pr-10 mb-20"><a href="${project.link}" >
    <div class ="hover:scale-110 transition duration-300 ease-in-out text-center bg-slate-500 pb-10" > 
     <img src="${project.image}" alt="" class="mx-auto mb-10" style="width: 100%">
     <span class="text-center text-2xl font-bold text-white ">${project.name} </span>
     <p class="ml-2 text-xl  text-white text-left mt-3">${project.content} </p>
    </div>
   
    </a></div></div>`)}</div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-10 pl-10 pr-10 mb-20">
  ${data.map((project, index) => {
    return `  
    <div class="hover:scale-110 transition duration-300 ease-in-out text-center bg-slate-500 " >
  <a href="${project.link}" >
     <div > 
      <img src="${project.image}" alt="" class="mx-auto mb-10" style="width: 100%; height : 150px">
      <span class="text-center text-2xl font-bold text-white ">${project.name} </span>
      <p class="ml-2 text-xl  text-white text-left mt-3">${project.content} </p>
     </div>
     </a>
    
     <a class=" text-2xl font-bold text-white " href="/projects/${project.id}"  data-id="${project.id}"> <div class="h-20  bg-indigo-900 mt-5 mb--5 pt-5" >Chi tiết </div></a>
     
     </div>
     `
    }).join("")}
 
   
  </div>
  `
}

export default Projects