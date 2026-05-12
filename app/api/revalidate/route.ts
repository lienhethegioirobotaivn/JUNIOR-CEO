import { revalidatePath } from "next/cache";
console.log("REVALIDATE WORKING");
export async function POST(req: Request) {
  try {
    const body = await req.json();

    revalidatePath("/");
    revalidatePath("/tin-tuc");
    revalidatePath(`/tin-tuc/${body.slug}`);

    return Response.json({
      success: true,
    });
  } catch {
    return Response.json({
      success: false,
    });
  }
}
