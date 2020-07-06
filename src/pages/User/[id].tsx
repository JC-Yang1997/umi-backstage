import React, { useEffect } from 'react'

export default (props: any) => {
  useEffect(() => {
    console.log(props)
  })
  return <>
    user: {props.match.params.id}
  </>
}