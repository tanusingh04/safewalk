import { Suspense } from "react"
import Header from "@/components/header"
import FallDetectionLanding from "@/components/fall-detection-landing"
import OptimizedHeroSection from "@/components/optimized-hero-section"
import OptimizedStatisticsSection from "@/components/optimized-statistics-section"
import EmergencySection from "@/components/emergency-section"
import PrecautionsSection from "@/components/precautions-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import OptimizedChatbot from "@/components/optimized-chatbot"

// Loading components
const LoadingCard = () => (
  <div className="animate-pulse">
    <div className="bg-gray-200 h-32 rounded-lg mb-4"></div>
    <div className="bg-gray-200 h-4 rounded mb-2"></div>
    <div className="bg-gray-200 h-4 rounded w-3/4"></div>
  </div>
)

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Header />
      <main>
        <FallDetectionLanding />

        <Suspense fallback={<LoadingCard />}>
          <OptimizedHeroSection />
        </Suspense>

        <Suspense fallback={<LoadingCard />}>
          <OptimizedStatisticsSection />
        </Suspense>

        <Suspense fallback={<LoadingCard />}>
          <EmergencySection />
        </Suspense>

        <Suspense fallback={<LoadingCard />}>
          <PrecautionsSection />
        </Suspense>

        <Suspense fallback={<LoadingCard />}>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
      <OptimizedChatbot />
    </div>
  )
}
