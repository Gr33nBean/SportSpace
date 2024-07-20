export const routes = {
  home: '/home',
  aboutUs: '/about-us',
  search: '/search',
  booking: booking,
  contact: '/contact',
  aboutUser: '/about-user',
  profile: '/profile',
  business: business(''),
}

function business(path: string) {
  return '/business' + path
}

function booking(id: string) {
  return '/booking/' + id
}
