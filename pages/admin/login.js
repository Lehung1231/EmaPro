import { router, useEffect } from "../../libs";

const login = () => {
    useEffect(() => {
        const loginForm = document.getElementById("loginForm");

        loginForm.addEventListener("submit", function(event) {
        //  event.preventDefault(); // ngăn chặn trang được tải lại khi form được gửi đi
        
          const username = document.getElementById("username").value;
          const password = document.getElementById("password").value;
          const uErr = document.getElementById("uError");
          const pErr = document.getElementById("pError");
          // Kiểm tra thông tin đăng nhập
        if(!username || !password){
            if(!username){
                uErr.innerHTML = "VUI LÒNG NHẬP";
              }else{
                uErr.innerHTML = "";
              }
              if(!password){
                pErr.innerHTML = "VUI LÒNG NHẬp";
              }else{
                pErr.innerHTML = "";
              }
        }else     if (username === "hungbodoi" && password === "123456") {
            router.navigate("/admin/projects")
          } else {
            alert("SAI R");
            pErr.innerHTML = "";
            uErr.innerHTML = "";
          }
         
         
          
          
     
          event.preventDefault();
        });
    });
  return `
  <div class="flex items-center justify-center h-screen ">
  <form class="bg-white p-6 rounded-lg shadow-md " id="loginForm" style="width: 400px;">
    <label class="block text-gray-700 font-bold mb-2" >
      Username
    </label>
    <input
      class="border border-gray-300 rounded-lg py-2 px-4 mb-4 w-full"
      id="username"
      type="text"
      placeholder="Enter your username"
    >
    <div id="uError" class="error text-red-400 text-center"></div>
    <label class="block text-gray-700 font-bold mb-2" >
      Password
    </label>
    <input
      class="border border-gray-300 rounded-lg py-2 px-4 mb-4 w-full"
      id="password"
      type="password"
      placeholder="Enter your password"
    >
    <div id="pError" class="error text-red-400 text-center"></div>
    <button
      class="bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
      type="submit"  id="loginForm"
    >
      Sign In
    </button>
  </form>
</div>
  `
}

export default login