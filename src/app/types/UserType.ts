export type TypeLogInRequest = {
    email: string,
    password: string
}

export type TypeLogInResponse = {
    accessToken: string,
    user: {
        _id: string,
        email: string
    }
}