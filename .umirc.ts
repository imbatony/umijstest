// .umirc.ts
 
export default {
  npmClient: 'pnpm',
  apiRoute: {
    platform: 'vercel'
  },
  routes: [
    { path: '/', component: 'index' },
    { path: '/posts/create', component: 'posts/create' },
    { path: '/login', component: 'login' },
    { path: '/register', component: 'register' },
    { path: '/posts/:postId', component: 'posts/post' },
  ],
  plugins: [require.resolve('@umijs/plugins/dist/tailwindcss')],
  tailwindcss: {}
};