export const routes = {
  home: '/home',
  aboutUs: '/about-us',
  business: business(''),
}

function business(path: string) {
  return '/business' + path
}
