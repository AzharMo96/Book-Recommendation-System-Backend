import mongoose from "mongoose"

const constructURI = () => {
  const {
    REPLICATION_DATABASE,
    DATABASE_USER_REP,
    DATABASE_PASSWORD_REP,
    DATABASE_HOST1,
    DATABASE_PORT1,
    DATABASE_HOST2,
    DATABASE_PORT2,
    DATABASE_HOST3,
    DATABASE_PORT3,
    DATABASE_USER,
    DATABASE_PASSWORD,
    DATABASE_HOST,
    DATABASE_PORT,
  } = process.env

  // Replication DB URI
  if (REPLICATION_DATABASE?.toLowerCase() === "true") {
    return `mongodb://${DATABASE_USER_REP}:${DATABASE_PASSWORD_REP || ""}@${DATABASE_HOST1}:${DATABASE_PORT1},${DATABASE_HOST2}:${DATABASE_PORT2},${DATABASE_HOST3}:${DATABASE_PORT3}/admin?readPreference=primary&authMechanism=DEFAULT&authSource=admin`
  } else {
    // Single DB URI
    return `mongodb://${DATABASE_USER}:${DATABASE_PASSWORD || ""}@${DATABASE_HOST}:${DATABASE_PORT}/admin`
  }
}

const connectToDatabase = () => {
  const URI = constructURI()
  const databaseName = process.env.DATABASE || ""

  try {
    const connection = mongoose
      .createConnection(URI, {
        autoIndex: false,
      })
      .useDb(databaseName, { useCache: true, noListener: true })

    connection.on("open", () => {
      console.log(
        "[DATABASE] Database Connection has been established successfully!"
      )
    })

    connection.on("error", (err) => {
      console.error("[DATABASE] Database connection error:", err)
      process.exit(1)
    })

    return connection
  } catch (error) {
    console.error("[DATABASE] Error while connecting to the database:", error)
    process.exit(1)
  }
}

const connection = connectToDatabase()

export default connection
