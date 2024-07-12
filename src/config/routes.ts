export const routes = {
  home: '/home',
  aboutUs: '/about-us',
  aboutUser: '/about-user',
  business: business(''),
}

function business(path: string) {
  return '/business' + path
}
