import { Effect, Reducer, Subscription, request } from 'umi';

export interface HeroItem {
  ename: number,
  cname: string,
  title: string,
  new_type: number,
  hero_type: number,
  skin_name: string,
}

export interface HeroModelState {
  name: string;
  pathname: string,
  heroList: Array<HeroItem>
}

export interface HeroModelType {
  namespace: 'hero';
  state: HeroModelState;
  effects: {
    //每一个 effect 都是一个 生成器函数 ，你可以在这里获取你需要的数据，
    //例如向服务器发起一个请求、或是获取其他 model 里的 state 。
    //为了明确分工，你无法在 effect 中直接修改 state ，但你可以通过 put 方法 调用 reducer 来修改 state
    // (可以配合服务端请求使用)
    // query: Effect;
    fetch: Effect
  };
  reducers: {
    save: Reducer<HeroModelState>;
    setHero: Reducer<HeroModelState>
    setPathname: Reducer<HeroModelState>
  };
  subscriptions: { setup: Subscription };
}

const HeroModel: HeroModelType = {
  namespace: 'hero',

  state: {
    name: 'yjc',
    pathname: '',
    heroList: []
  },

  effects: {
    // *query({ payload }, { call, put, select }) {
    // },

    // select
    // 此方法用于获取当前或其他 model 的 state 。
    // const data = yield select(states => states[namespace]);
    // call
    // 此方法用于执行一个异步函数，可以理解为等待这个函数执行结束。项目中常用于发送 http 请求，等待服务端响应数据。
    // const data = yield call(doSomethingFunc, parameter);
    // put
    // 此方法用于触发一个 action，这个 action 既可以是一个 reducer 也可以是一个 effect 。
    // yield put({ type: 'reducerName', payload: { page } });

    *fetch({ payload, callback }, { put }) {
      const response = yield request('/web201605/js/herolist.json', {
        method: "GET",
        data: payload
      })
      callback(response)

      // 根据实际接口返回定义处理逻辑 / 根据实际业务设置状态管理
      // if (response && response.success) {
      //   yield put({
      //     type: 'save',
      //     payload: { heroList: response.data || [] }
      //   })
      //   callback(response.data)
      // } else {
      //   callback()
      // }
    }
  },
  reducers: {
    'save'(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    'setHero'(state, action) {
      return {
        ...state,
        ...action.payload
      }
    },
    'setPathname'(state, action) {
      return {
        ...state,
        ...action.payload
      }
    }
  },
  subscriptions: {
    // 此处只有dispatch, history两个参数
    setup: ({ dispatch, history }) => {
      return history.listen(({ pathname }) => {
        dispatch({
          type: 'setPathname',
          payload: { pathname }
        })
      });
    }
  }
};

export default HeroModel;