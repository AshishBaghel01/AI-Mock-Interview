import dotenv from "dotenv"

const result = dotenv.config({ quiet: true })

if (result.error && result.error.code !== "ENOENT") {
  throw result.error
}
