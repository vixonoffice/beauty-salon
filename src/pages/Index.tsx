import HeroSection from '@/components/home/HeroSection';
import SplitIntro from '@/components/home/SplitIntro';
import PopularServices from '@/components/home/PopularServices';
import TeamSection from '@/components/home/TeamSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import StatsSection from '@/components/home/StatsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import BrandsSection from '@/components/home/BrandsSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <main>
      <HeroSection />
      <SplitIntro />
      <PopularServices />
      <TeamSection />
      <WhyUsSection />
      <StatsSection />
      <TestimonialsSection />
      <BrandsSection />
      <CTASection />
    </main>
  );
};

export default Index;
