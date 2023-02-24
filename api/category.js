import instance from "./config"

const getCategory = () => {
    return instance.get(`/categorys`)
}

export {getCategory}