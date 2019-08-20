export default{
    path: '/movie',
    name: 'movie',
    component: () => import('@/views/Movie'),             //@表示src这个目录, vue-cli配好的
    children: [
        {
            path: "city",
            component: () => import("@/components/City")
        },
        {
            path: "nowPlaying",
            component: () => import("@/components/NowPlaying")
        },
        {
            path: "comingSoon",
            component: () => import("@/components/ComingSoon")
        },
        {
            path: "search",
            component: () => import("@/components/Search")
        }
    ]
}