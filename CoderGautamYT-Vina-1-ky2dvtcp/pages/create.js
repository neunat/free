import Head from 'next/head'
import Creator from '../components/Creator'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Vina - Create</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Creator />
      </main>
<style>
{`
body {

}
.button {
  background-color: #0F67FFFF; /* Green */
  bottom: 0;
  position: sticky;
top: 0;
  border: none;
  color: white;
    white-space: nowrap;
  padding: 10px 30px 10px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 1px;
  cursor: pointer;
  border-radius: 5%;
  
}
.button:active {
background-color: #1C9DFFFF;
}
.button:hover {
 outline: 1px solid black;
}
`}
</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
