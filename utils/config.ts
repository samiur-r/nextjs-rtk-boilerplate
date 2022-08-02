const isDevEnv = process.env.NEXT_PUBLIC_NODE_ENV !== 'production'
const isClientSide = typeof window !== 'undefined'

export const config = {
  reduxPersistConfig: {
    key: 'NextAppData',
    debug: isDevEnv,
    enabled: true
  },
  isDevEnv,
  isClientSide
}

export default config
