import Index from '@/components/dashboard/index'

export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    redirect: '/dashboard/stock',
    component: Index,
    children: [
      {
        path: '/dashboard/stock',
        name: '/dashboard/stock'
      },
      {
        path: '/dashboard/order',
        name: '/dashboard/order'
      },
      {
        path: '/dashboard/finance',
        name: '/dashboard/finance'
      }
    ]
  }
]
