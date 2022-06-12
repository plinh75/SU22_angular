import instance from "./instance";
import { CateType } from "src/app/types/Category";

export const list = () => {
    const url = `/category`;
    return instance.get(url)
}

export const add = (category:CateType) => {
    const url = `/category`;
    return instance.post(url)
}

export const read = (_id: string) => {
    const url = `/category/${_id}`;
    return instance.get(url)
}

export const remove = (_id: string) => {
    const url = `/category/${_id}`;
    return instance.delete(url)
}

export const update = (category: CateType) => {
    const url = `category/${category._id}`;
    return instance.patch(url, category )
}