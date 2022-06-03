import instance from "./instance";
import { ProductType } from "src/app/types/Product";

export const list = () => {
    const url = `/product`;
    return instance.get(url)
}

export const add = (product:ProductType) => {
    const url = `/product`;
    return instance.post(url)
}

export const read = (_id: string) => {
    const url = `/product/${_id}`;
    return instance.get(url)
}

export const remove = (_id: string) => {
    const url = `/product/${_id}`;
    return instance.delete(url)
}