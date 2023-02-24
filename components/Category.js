import { useEffect } from "../libs"

const Category = ({ categories, onClick }) => {
  useEffect(() => {
    const btns = document.querySelectorAll('.btn');
    for (const btn of btns) {
      btn.addEventListener('click', function () {
        const id = btn.dataset.id;
        onClick(id);
        console.log(id);
      })
    }
  })
  return `
  <h1 class="text-center text-5xl font-bold text-white mb-20 ">PROJECTS</h1>
    <div class="text-center mb-20 ">${categories.map(category => {
    return `<button data-id="${category.id}" class="btn text-white bg-blue-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 ">${category.name}</button>`
  })}</div>
  `
}

export default Category
