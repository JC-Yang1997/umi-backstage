import { useState, useCallback } from 'react'

interface UserInfo {
  username: string | null,
  password: string | null
}

export default () => {
  let userInfo: UserInfo = {
    username: null,
    password: null
  }
  const [user, setUser] = useState(userInfo)

  const signin = useCallback((username, password) => {
    if (username === 'yjc' && password === '123456') {
      setUser({
        username,
        password
      })
      console.log('登录成功')
    }
  }, [])

  const signout = useCallback(() => {
    setUser(userInfo)
    console.log('登出')
  }, [])

  return {
    user,
    signin,
    signout
  }
}