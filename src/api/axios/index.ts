import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

import axios from 'axios'

import { axiosConfig } from './config'

import { AuthUtils } from '@/utils/index'

import { errorMessageMap, ResponseStatusCode } from './statusCode'

import { useRouter } from 'vue-router'

const message = useMessage()

const router = useRouter()

class Request {
  instance: AxiosInstance

  public constructor(config: AxiosRequestConfig) {
    axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

    this.instance = axios.create(config)

    this.instance.interceptors.request.use(
      (req: InternalAxiosRequestConfig) => {
        //设置token
        // const { url } = req
        if (AuthUtils.isAuthenticated()) {
          req.headers.Authorization = AuthUtils.isAuthenticated()
        }
        return req
      },
      (err: AxiosError) => Promise.reject(err)
    )

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => res.data,
      (err: AxiosError) => {
        const { response } = err
        const { data, status } = response || {}
        if (response) {
          Request.handleCode(status as number)
        }
        //网络错误 跳转404页面
        if (!window.navigator.onLine) {
          router.replace('/404')
          message.error('没有网络')
        }
        return Promise.reject(data)
      }
    )
  }

  /**
   * 处理响应状态码
   * @param code响应状态码
   * @description
   * -401未授权，清除token跳转到登录页
   * -403禁止访问
   * -404未找到 跳转404页面
   * -500服务器错误 跳转500页面
   */
  static handleCode(code: number): void {
    const errorMessage = errorMessageMap.get(code) || 'Unknown Error'
    switch (code) {
      case ResponseStatusCode.UNAUTHORIZED:
        AuthUtils.clearToken()
        message.error('401')
        if (router.currentRoute.value.path !== '/login') {
          router.replace({
            path: '/login'
          })
        }
        break
      case ResponseStatusCode.FORBIDDEN:
        message.error(errorMessage)
        break
      case ResponseStatusCode.INTERNAL_SERVER_ERROR:
        message.error('服务器错误')
        if (router.currentRoute.value.path !== '/login') {
          router.replace('/500')
        }
        break
      default:
        break
    }
  }

  /**
   * 通用请求
   * @param config 请求配置
   */
  request(config: AxiosRequestConfig) {
    return this.instance.request(config)
  }

  /**
   * GET 请求
   * @param url 请求地址
   * @param param 请求参数
   * @param config 请求配置
   */
  get<T>(url: string, params?: Record<string, unknown>, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.get(url, { params, ...config })
  }

  /**
   * POST 请求
   * @param url 请求地址
   * @param data 请求参数
   * @param config 请求配置
   */
  post<T>(url: string, data?: Record<string, unknown>, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.post(url, data, config)
  }

  /**
   * PUT 请求
   * @param url 请求地址
   * @param data 请求参数
   * @param config 请求配置
   */
  put<T>(url: string, data?: Record<string, unknown>, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.put(url, data, config)
  }

  /**
   * DELETE 请求
   * @param url 请求地址
   * @param param 请求参数
   * @param config 请求配置
   */
  delete<T>(url: string, params?: Record<string, unknown>, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.delete(url, { params, ...config })
  }

  /**
   * PATCH 请求
   * @param url 请求地址
   * @param data 请求参数
   * @param config 请求配置
   */
  patch<T>(url: string, data?: Record<string, unknown>, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.patch(url, data, config)
  }
}

export default new Request(axiosConfig)
