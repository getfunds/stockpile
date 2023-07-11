import Features from '@/components/Landing/Features';
import Header from '@/components/Header'
import Hero from '@/components/Landing/Hero';
import Statistics from '@/components/Landing/Stats';
import SEO from '@/components/SEO';
import Partners from '@/components/Landing/Partners';

export default function Landing() {
  return (
    <>
      <SEO
        title="Funding Without Barriers | Stockpile"
        description="Community crowdfunding for the best projects on Solana."
        image="https://i.imgur.com/OznPpM9.jpg"
      />
      <Header />
      <main
        className={`flex min-h-screen flex-col items-center justify-between`}
      >
        <section className="w-full relative">
          <Hero />
        </section>
        <section className="mt-16 w-full relative">
          <Statistics />
        </section>
        <section className="mt-16 w-full relative">
          <Features />
        </section>
      </main>
    </>
  )
}
