import { clientOnly } from '@solidjs/start'

export const HelloWorld = clientOnly(() => import('./hello-world'))
export const Hippos = clientOnly(() => import('./hippos'))
export const NavMesh = clientOnly(() => import('./nav-mesh'))