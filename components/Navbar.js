import { menuList } from "../data"

const Navbar = () => {
    return `
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="/" class="flex items-center">
        <img src="/images/images.jpeg" class="h-6 mr-3 sm:h-9 rounded-full" alt="Flowbite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">HUNGBODOI</span>
    </a>

    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      ${menuList.map((menu)=>{
        return`
        <li>
          <a href="/admin/login" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">${menu.name}</a>
        </li>`
          }).join("")}
       
      </ul>
    </div>
  </div>
</nav>

    `

        
}

export default Navbar