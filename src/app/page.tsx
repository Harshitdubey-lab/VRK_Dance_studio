import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import HeroImage from "@/components/HeroImage";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Timetable from "@/components/Timetable";
import TrialForm from "@/components/TrialForm";
import WhatsAppQuickActions from "@/components/WhatsAppQuickActions";
import Gallery from "@/components/Gallery";
import PerformanceGallery from "@/components/PerformanceGallery";
import Reviews from "@/components/Reviews";
import WeddingChoreo from "@/components/WeddingChoreo";
import Fitness from "@/components/Fitness";
import KidsSafety from "@/components/KidsSafety";
import Events from "@/components/Events";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      
      <section className={styles.heroSection}>
        <HeroImage />
      </section>
      
      <About />
      <KidsSafety />
      <Classes />
      <Fitness />
      <WeddingChoreo />
      <Timetable />
      <TrialForm />
      <Gallery />
      <PerformanceGallery />
      <Events />
      <Reviews />
      <FAQ />
      
      <Footer />
      <WhatsAppQuickActions />
    </main>
  );
}
