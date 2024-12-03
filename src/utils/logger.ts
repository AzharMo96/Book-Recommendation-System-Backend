/** @format */

import * as winston from "winston"

const fileName = "logs/log.log"

// Configure the Winston logger
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DDTHH:mm:ss.SSSZ",
    }),
    winston.format.printf(
      ({
        error_type,
        error_sub_type,
        errCode,
        timestamp,
        level,
        message,
        transactionTime,
        Description,
        user_id,
      }) => {
        return JSON.stringify({
          error_type,
          error_sub_type,
          errCode,
          level,
          message,
          transactionTime,
          timestamp,
          Description,
          user_id,
        })
      }
    )
  ),
  transports: [
    new winston.transports.File({
      filename: fileName,
    }),
  ],
})

export default logger
