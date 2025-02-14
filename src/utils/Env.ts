import * as dotenv from 'dotenv'
import {z} from 'zod'

dotenv.config()

const envSchema = z.object({
  ACTIVITY_INFO_API_TOKEN: z.string(),
  ROOT_DIR: z.string(),
})

export const env = envSchema.parse(process.env)
