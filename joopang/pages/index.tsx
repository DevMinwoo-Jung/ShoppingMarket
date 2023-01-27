import Head from 'next/head'
import { store } from '../redux-toolkit/app'
import { Provider } from 'react-redux'


export default function Home() {
  return (
    <Provider store={store}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Provider>
  )
}
