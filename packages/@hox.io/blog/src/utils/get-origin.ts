import { isServer } from 'solid-js/web'

const getOrigin = () =>
  isServer ? process.env.APP_SERVER_ORIGIN : window.location.origin

export default getOrigin
