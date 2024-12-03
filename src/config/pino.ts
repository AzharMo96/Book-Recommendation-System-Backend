/** @format */

import dayjs from "dayjs-plugin-utc";
import logger from "pino"

import loger from "../utils/logger"

const log = logger({
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
})

function createLogger() {
  function error(message: any, error?: any) {
    loger.error(message, error)
    log.error(message)
  }
  function info(message: any, error?: any) {
    loger.info(message, error)
    log.info(message)
  }

  return {
    error: error,
    info: info,
  }
}
const logs = createLogger()

export default logs
