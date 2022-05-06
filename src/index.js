import {Toasted as T} from './js/toast'
import ToastComponent from './toast.vue'

const Toasted = {
  install(app, options) {
    if (!options) {
      options = {}
    }

    const Toast = new T(options)

    app.component('toasted', ToastComponent)

    if ('config' in app && 'globalProperties' in app.config) {
      app.config.globalProperties.$toasted = Toast
    } else {
      app.toasted = app.prototype.$toasted = Toast
    }
  }
}

export default Toasted
