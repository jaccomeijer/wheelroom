import { Dispatch } from 'react'

export interface AdminModuleStore {
  state: any
  dispatch: Dispatch<any>
  actions: any
}

export interface AdminModule {
  /** store actions, dispatch and state */
  store?: AdminModuleStore
  /** Heading used in admin panel */
  heading: string
  /** Image used in admin panel */
  image?: any
  /** Options set when module is registered */
  options: any
  /** Order in admin panel */
  order: number
  /** Path app routes to when module is clicked in admin panel */
  path: string
}

export interface AdminModules {
  [adminModuleId: string]: AdminModule
}

export interface BaseAction {
  type: string
}

export interface AdminCoreState {
  /** All admin modules register here */
  modules: AdminModules
  /** SET_PAGE_PROPS action can save page props here */
  pageProps?: any
  /** Module id of which state updated - '*' for matching all */
  lastModuleId: string
}

export interface RegisterModule extends BaseAction {
  type: 'REGISTER_MODULE'
  moduleId: string
  module: AdminModule
}

export interface SetLastModuleId extends BaseAction {
  type: 'SET_LAST_MODULE_ID'
  moduleId: string
}

export interface SetPageProps extends BaseAction {
  type: 'SET_PAGE_PROPS'
  pageProps: any
}

export type ActionTypes = RegisterModule | SetPageProps | SetLastModuleId