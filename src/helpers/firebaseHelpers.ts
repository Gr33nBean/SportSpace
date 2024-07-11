import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyC20wLu8nFT5YujH9_wWb-G7JGpR3BpCNE',
  authDomain: 'tobogo-court.firebaseapp.com',
  projectId: 'tobogo-court',
  storageBucket: 'tobogo-court.appspot.com',
  messagingSenderId: '275793391377',
  appId: '1:275793391377:web:465b4126a162b5f44366b0',
  measurementId: 'G-DBGDW4L74B',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }
