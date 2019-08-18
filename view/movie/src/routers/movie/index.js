export default{
    path: '/movie',
    name: 'movie',
    component: () => import('@/views/Movie')             //@表示src这个目录, vue-cli配好的
}