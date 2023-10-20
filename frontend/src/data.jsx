import React from 'react'

export default function Data() {
  const [data, setData] = React.useState(null)

  console.log({ data })

  React.useEffect(() => {
    console.log('entering use effect')
    try {
      console.log('entering try')
      fetch('http://localhost:3000/api/').then(res => {
        console.log('response ok')
        console.log({ res })

        return res.text()
      }).then(d => {
        console.log({ d })

        setData(d)
      })
    } catch (e) {
      console.log('entering catch')
      console.log({ e })
    }
    
  }, [])

  return <>
    {data}
  </>
}