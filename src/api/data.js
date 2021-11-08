import axios from './axios'

export const getFileListWithPath= (path)=>{
    return axios.request({
        url:"list",
        method:"get",
        params:{'path':path}
    })
}

export const downloadFileWithPath = (path)=>{
    return axios.request({
        url:"list",
        method:"get",
        params:{'path':path}
    })
}