export async function GET(request) {
    return NextResponse.json({ message: "Hello, world!" });
}

export async function POST(request) {
    const { name } = await request.json();
    return NextResponse.json({ message: `Hello, ${name}!` });
}


