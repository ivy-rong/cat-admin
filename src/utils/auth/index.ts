export class AuthUtils {
  /**
   *  token LocalStorage
   */
  private static LOCAL_STORAGE_TOKEN = "access_token";

  /**
   * 获取 token
   */
  static getToken() {
    return localStorage.getItem(this.LOCAL_STORAGE_TOKEN);
  }

  /**
   * 设置 token
   */
  static setToken(token: string) {
    localStorage.setItem(this.LOCAL_STORAGE_TOKEN, token);
  }

  /**
   * 清除 token
   */
  static clearToken() {
    localStorage.removeItem(this.LOCAL_STORAGE_TOKEN);
  }

  /**
   * 是否登录
   */
  static isAuthenticated(): boolean {
    return !!localStorage.getItem(this.LOCAL_STORAGE_TOKEN);
  }
}
