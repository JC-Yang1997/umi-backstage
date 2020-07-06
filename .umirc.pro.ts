import { defineConfig } from 'umi';
import umiConfig from './umi.config'

let config: Object = {
  ...umiConfig,
  ...{
    define: {
      'process.env.DEPLOY_ENV': 'pro'
    }
  }
}

export default defineConfig(config);