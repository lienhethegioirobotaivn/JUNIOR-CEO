import {
  CourseValues,
  EnrollmentBanner,
  FeaturedStudents,
  Hero,
  ProgramOverview,
} from "@/components/chung-nhan";

const ChungNhanPage = () => {
  return (
    <div className="text-white space-y-4 pt-8 mt-8 mb-10">
      <Hero />
      <div className="px-8 space-y-8">
        <CourseValues />
        <ProgramOverview />
        <FeaturedStudents />
        <EnrollmentBanner />
      </div>
    </div>
  );
};

export default ChungNhanPage;
