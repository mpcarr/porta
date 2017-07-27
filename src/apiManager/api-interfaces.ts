export interface IError{
    message: string,
    options: IOptions
}

export interface ILoading{
    dismiss?: boolean,
    options?: IOptions
}

export interface IOptions{
    toast?: boolean,
    loading?: boolean
}

export interface IPortaAPIManagerConfig{
    endpoint: string
}