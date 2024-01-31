
export const POST = async (req: Request) => {
    try {
        return Response.json({ msg: "Hello " }, { status: 200 })
    } catch (e) {
        return Response.json({ msg: "got some error ", e }, { status: 500 })
    }
}
