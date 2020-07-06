import { defineConfig } from 'umi';
import umiConfig from './umi.config'

let config: Object = {
  ...umiConfig,
  ...{
    define: {
      'process.env.DEPLOY_ENV': 'dev'
    }
  }
}

export default defineConfig(config);