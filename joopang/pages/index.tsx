import Head from 'next/head'
import { store } from '../redux-toolkit/app'
import { Provider } from 'react-redux'
import LoginForm from './components/LoginForm/LoginForm'
import '../utils/lang/i18n'
import SignupForm from './components/SignupForm/SignupForm'

export default function Home() {
  return (
    <Provider store={store}>
      <Head>
        <title>JooPang!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* <LoginForm/> */}
      <SignupForm/>
    </Provider>
  )
}
