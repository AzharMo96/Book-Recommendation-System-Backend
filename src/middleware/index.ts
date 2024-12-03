import bodyParser from "body-parser"
import cors from "cors"
import { Application, NextFunction, Request, Response } from "express"
import useragent from "express-useragent"
import helmet from "helmet"
import iconv from "iconv-lite"
import requestIp from "request-ip"

export default (app: Application) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (
      req.headers["content-encoding"] &&
      req.headers["content-encoding"].toUpperCase() === "UTF-8"
    ) {
      console.warn("Warning: Invalid content encoding header received.")

      // Remove content-encoding header
      delete req.headers["content-encoding"]

      // Use bodyParser.urlencoded with a custom verify function for UTF-8 encoding
      bodyParser.urlencoded({ extended: true, verify: utf8Verify })(
        req,
        res,
        next
      )
    } else {
      next()
    }
  })

  function utf8Verify(
    req: Request,
    res: Response,
    buf: Buffer,
    encoding: string
  ) {
    // Verify and decode the buffer using UTF-8
    if (buf && buf.length) {
      const decoded = iconv.decode(buf, "utf-8")
      req.body = decoded
    }
  }

  app.use(cors())
  app.use(helmet())
  app.use(useragent.express())
  app.use(requestIp.mw())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

}
