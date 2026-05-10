import { TuVanData } from "@/services/tu-van-service";

type ContactSupportProps = Pick<TuVanData, "item_9">;

export function ContactSupport({ item_9 }: ContactSupportProps) {
  return (
    <section className="bg-black py-6">
      <div className="mx-auto border border-[#f3d9a9]/20 rounded-xl p-4 md:p-6 bg-linear-to-b from-[#111] to-black relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-[#f3d9a9] to-transparent opacity-50" />

        <div className="text-center mb-6">
          <h2 className="text-xl md:text-3xl font-bold pt-1 uppercase bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-transparent mb-4">
            {item_9.title}
          </h2>
          <p className="text-gray-400 text-xs md:text-base max-w-2xl mx-auto">
            {item_9.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Phone */}
          <div className="bg-black/40 border border-white/5 rounded-xl p-4 md:p-6 flex items-center justify-center group">
            <div className="flex items-center gap-3 md:gap-4 w-full">
              <p className="text-3xl md:text-4xl text-[#f3d9a9] shrink-0">
                {item_9.phone.icon}
              </p>
              <div className="text-left min-w-0">
                <h3 className="text-[#f3d9a9] text-base md:text-lg font-bold tracking-wider truncate">
                  {item_9.phone.text_1}
                </h3>
                <p className="text-gray-400 text-[10px] md:text-sm uppercase tracking-tight line-clamp-1">
                  {item_9.phone.text_2}
                </p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="bg-black/40 border border-white/5 rounded-xl p-4 md:p-6 flex items-center justify-center group">
            <div className="flex items-center gap-3 md:gap-4 w-full">
              <p className="text-3xl md:text-4xl text-[#f3d9a9] shrink-0">
                {item_9.email.icon}
              </p>
              <div className="text-left min-w-0">
                <h3 className="text-[#f3d9a9] text-base md:text-lg font-bold tracking-wider truncate">
                  {item_9.email.text_1}
                </h3>
                <p className="text-gray-400 text-[10px] md:text-sm uppercase tracking-tight line-clamp-1">
                  {item_9.email.text_2}
                </p>
              </div>
            </div>
          </div>

          {/* Chat */}
          <div className="bg-black/40 border border-white/5 rounded-xl p-4 md:p-6 flex items-center justify-center group">
            <div className="flex items-center gap-3 md:gap-4 w-full">
              <p className="text-3xl md:text-4xl text-[#f3d9a9] shrink-0">
                {item_9.chat.icon}
              </p>
              <div className="text-left min-w-0">
                <h3 className="text-[#f3d9a9] text-base md:text-lg font-bold tracking-wider truncate">
                  {item_9.chat.text_1}
                </h3>
                <p className="text-gray-400 text-[10px] md:text-sm uppercase tracking-tight line-clamp-1">
                  {item_9.chat.text_2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
