import prisma from '@/lib/prisma'
import { getSessionUser } from '@/utils/get-session-user'

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getSessionUser()

    if (!session) {
      return Response.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const snippetId = params.id

    const snippet = await prisma.snippet.findFirst({
      where: {
        id: snippetId,
        userId: session.user.id,
      },
    })

    if (!snippet) {
      return Response.json({ message: 'Snippet not found' }, { status: 404 })
    }

    await prisma.snippet.delete({
      where: {
        id: snippetId,
      },
    })

    return Response.json({ message: 'Snippet removed' })
  } catch (err) {
    console.log(err)
    return Response.json({ message: 'Something went wrong' }, { status: 500 })
  }
}
