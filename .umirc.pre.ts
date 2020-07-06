import { defineConfig } from 'umi';
import umiConfig from './umi.config'

let config: Object = {
  ...umiConfig,
  ...{
    define: {
      'process.env.DEPLOY_ENV': 'pre'
    }
  }
}

export default defineConfig(config);