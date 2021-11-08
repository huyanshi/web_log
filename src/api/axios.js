import axios from 'axios'

class HttpRequest{

    constructor(baseUrl) {
        this.baseURL= baseUrl
        this.queue = {}
    }

    getInsideConfig() {
        const config = {
            baseURL:this.baseURL,
            Header:{
            }
        }
        return config
    }

    interceptors(instance,url) {
        console.log(url)
        instance.interceptors.request.use((config)=>{
            console.log('拦截和处理请求')
            console.log(config)
            return config
        })

        instance.interceptors.response.use()

        instance.interceptors.response.use((res)=>{
            console.log('处理res')
            console.log(res)
            return res
        },(error)=>{
            console.log(error)
            return {error:"network error"}
        })
    }

    request(options){
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(),options)
        this.interceptors(instance,options,options.url)
        return instance(options)
    }
}

const axiosObj = new HttpRequest("http://localhost:8080");
export default axiosObj