import { RequestConfig } from 'umi';

export const request: RequestConfig = {
  prefix: '/api',
  errorConfig: {
    adaptor: (resData) => {
      return {
        ...resData,
        success: resData.ok,
        errorMessage: resData.message,
      };
    },
  },
};