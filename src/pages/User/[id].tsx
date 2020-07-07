import React, { useEffect, FC } from 'react'
import { connect, HeroModelState, ConnectProps } from 'umi';

interface PageProps extends ConnectProps {
  hero: HeroModelState;
}

const User: FC<PageProps> = (props: any) => {
  useEffect(() => {
    console.log(props.hero)
  })
  const beAHero = () => {
    props.dispatch({
      type: 'hero/setHero',
      payload: { name: 'yjc--hero' }
    })
    console.log(props)
  }
  return <>
    user: {props.match.params.id}
    <button onClick={beAHero}>变身hero</button>
  </>
}

export default connect(({ hero }: { hero: HeroModelState }) => (
  { hero }
))(User)