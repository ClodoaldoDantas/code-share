import { getSessionUser } from '@/utils/get-session-user'
import prisma from '@/lib/prisma'
import { z } from 'zod'

const schema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  technology: z.string().min(1),
  link: z.string().min(1),
})

export async function POST(request: Request) {
  try {
    const bodyRaw = await request.json()
    const body = schema.safeParse(bodyRaw)

    if (!body.success) {
      const { errors } = body.error

      return Response.json(
        { message: 'Invalid format data', errors },
        { status: 400 }
      )
    }

    const session = await getSessionUser()

    if (!session) {
      return Response.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const { data } = body

    console.log({
      title: data.title,
      description: data.description,
      technology: data.technology,
      link: data.link,
      userId: session.user.id,
    })

    const result = await prisma.snippet.create({
      data: {
        title: data.title,
        description: data.description,
        technology: data.technology,
        link: data.link,
        userId: session.user.id,
      },
    })

    return Response.json({ snippetId: result.id }, { status: 201 })
  } catch (err) {
    console.log(err)
    return Response.json({ message: 'Something went wrong' }, { status: 500 })
  }
}
