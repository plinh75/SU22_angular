export type CateType = {
    _id: string, //dùng nodejs thì thay = string
    name: string,
    status: number,
}

export type CateCreate = {
    name?: string,
    status?: number,
}