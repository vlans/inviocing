import Index from '@/components/dashboard/index'
import Stock from '@/components/dashboard/src/stock'
import Order from '@/components/dashboard/src/order'
import Finance from '@/components/dashboard/src/finance'

export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    redirect: '/dashboard/stock',
    component: Index,
    children: [
      {
        path: '/dashboard/stock',
        name: '/dashboard/stock',
        component: Stock
      },
      {
        path: '/dashboard/order',
        name: '/dashboard/order',
        component: Order
      },
      {
        path: '/dashboard/finance',
        name: '/dashboard/finance',
        component: Finance
      }
    ]
  }
]
