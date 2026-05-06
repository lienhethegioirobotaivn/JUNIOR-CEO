import {
  BottomBanner,
  Hero,
  OutStandingStudents,
} from "@/components/phu-huynh-noi-gi";
import TestimonialSection from "@/components/phu-huynh-noi-gi/Testimonial";

export default async function GiangVien() {
  return (
    <div className="text-white space-y-4 pt-14 mt-3 mb-10">
      <Hero />
      <div className="px-8 space-y-8">
        <TestimonialSection />
      </div>
      <div className="px-3 lg:px-6">
        <OutStandingStudents />
      </div>
      <div className="px-8">
        <BottomBanner />
      </div>
    </div>
  );
}
