module.exports = {
}

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = phase => {
  const isDevelopment = phase === PHASE_DEVELOPMENT_SERVER
  const reactStrictMode = true
  const env = {
    SITE_NAME: "EDblog",
    API_BLOG: (() => {
      if (isDevelopment) {
        return "https://jsonplaceholder.typicode.com"
      } else {
        return "https://jsonplaceholder.typicode.com"
      }
    })()
  }

  return {
    reactStrictMode,
    env,
  }
}