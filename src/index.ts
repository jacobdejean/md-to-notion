import { Hono } from 'hono'
import {markdownToBlocks, markdownToRichText} from '@tryfabric/martian';

const app = new Hono()

app.post('/', async (c) => {
  const markdown = await c.req.text()
  const blocks = markdownToBlocks(markdown)
  return c.text(JSON.stringify(blocks))
})

export default app
