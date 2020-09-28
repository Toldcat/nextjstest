import React from 'react'
//import useRouter for routing
import { useRouter } from 'next/router'

const Note = () => {
  //set router
  const router = useRouter()
  //get the param from the route
  const { id } = router.query

  return <div>Note page for {id} id</div>
}

export default Note
