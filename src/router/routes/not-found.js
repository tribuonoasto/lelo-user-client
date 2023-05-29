export default [{
  path: '/:pathMatch(.*)*',
  name: 'notFound',
  redirect: "/",
  meta: {
    title: "Not Found"
  }
}];
