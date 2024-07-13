export const routes = {
  home: '/home',
  aboutUs: '/about-us',
  search: '/search',
  booking: booking,
  contact: '/contact',
  business: business(''),
}

function business(path: string) {
  return '/business' + path
}

function booking(id: string) {
  return '/booking/' + id
}
