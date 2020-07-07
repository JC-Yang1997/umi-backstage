import React, { useEffect, FC } from 'react'
import { connect, HeroModelState, HeroItem, ConnectProps } from 'umi';

interface PageProps extends ConnectProps {
  hero: HeroModelState;
}

const User: FC<PageProps> = (props: any) => {

  const getHeroList = () => {
    props.dispatch({
      type: 'hero/fetch',
      payload: { pageIndex: 1, pageSize: 20 },
      callback: (data: Array<HeroItem>) => {
        console.log(data)
      }
    })
  }

  const beAHero = () => {
    props.dispatch({
      type: 'hero/setHero',
      payload: { name: 'yjc--hero' }
    })
  }

  // useEffect 第二个参数传空数组只执行一次，不传则props改变会一直调用
  useEffect(() => {
    getHeroList()
  }, [])

  return <>
    user: {props.match.params.id}
    <button onClick={beAHero}>变身hero</button>
  </>
}

export default connect(({ hero }: { hero: HeroModelState }) => (
  { hero }
))(User)