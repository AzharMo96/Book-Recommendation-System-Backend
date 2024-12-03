import { Router } from "express"

// import gamesStatusRoutes from "./game_round_status.routes"
// import gamesRoutes from "./games.routes"
// import rtpRoutes from "./game.rtp"


const routes = Router()

const PATH = {
  API: "/api",
  GAME_HABANERO: "/",
  GAME_ROUND_STATUS: "/game-round-status",
  GAME_RTP: "/rtp",


}

// routes.use(PATH.GAME_HABANERO, gamesRoutes)
// routes.use(PATH.API + PATH.GAME_ROUND_STATUS, gamesStatusRoutes)
// routes.use(PATH.API + PATH.GAME_RTP, rtpRoutes)


export default routes
