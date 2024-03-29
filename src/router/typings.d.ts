/*
 * @Description: 
 */
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // options
    roles?: string[]
    requiresAuth: boolean // need login
    icon?: string
    // locale?: string
    menuSelectKey?: string
    hideInMenu?: boolean
  }
}
