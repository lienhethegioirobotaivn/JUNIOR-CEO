import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL;
    const SENDER_EMAIL = process.env.SENDER_EMAIL;

    if (!RECEIVER_EMAIL) {
      throw new Error("RECEIVER_EMAIL is missing in .env");
    }
    if (!SENDER_EMAIL) {
      throw new Error("SENDER_EMAIL is missing in .env");
    }

    await resend.emails.send({
      from: `${SENDER_EMAIL}`,
      to: `${RECEIVER_EMAIL}`,
      subject: "Đăng ký mới từ website JUNIOR CEO",
      html: `
        <h2>Thông tin đăng ký</h2>
        <p><b>Tên Phụ Huynh:</b> ${data.parentName}</p>
        <p><b>Độ tuổi của con:</b> ${data.childAge}</p>
        <p><b>Số Điện Thoại:</b> ${data.phone}</p>
        <p><b>Zalo:</b> ${data.zalo}</p>
        <p><b>Các yêu cầu và câu hỏi:</b> ${data.request}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}
