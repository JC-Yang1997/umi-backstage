import React from 'react'
import { history } from 'umi'
import Cookie from 'js-cookie'

export default (props: any) => {
  const isLogin = Cookie.get('userId') === '2537'
  if (isLogin) {
    return <>{props.children} </>
  } else {
    history.replace('/login')
    return <></>
  }
}