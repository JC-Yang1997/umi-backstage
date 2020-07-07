import { Effect, Reducer } from 'umi'

interface UserState {
  username: string | null,
  password: string | null
}

interface UserModalType {
  namespace: string,
  state: UserState,
  effects: {
    query: Effect
  },
  reducers: {
    save: Reducer<UserState>
  }
}

const UserModal: UserModalType = {
  namespace: 'user',
  state: {
    username: null,
    password: null
  },
  effects: {
    *query({ payload }, { call, put }) {
      return payload
    }
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload
      }
    }
  }
}

export default UserModal