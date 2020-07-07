import { Effect, Reducer } from 'umi';

export interface HeroModelState {
  name: string;
}

export interface HeroModelType {
  namespace: 'hero';
  state: HeroModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<HeroModelState>;
    setHero: Reducer<HeroModelState>
  };
}

const HeroModel: HeroModelType = {
  namespace: 'hero',

  state: {
    name: 'yjc',
  },

  effects: {
    *query({ payload }, { call, put }) {
      return payload
    },
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
        ...{ name: action.payload.name }
      }
    }
  },
};

export default HeroModel;