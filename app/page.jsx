import { HomeHero } from "@/home-components/HomeHero";
import { HomeStats } from "@/home-components/HomeStats";
import { HomeAbout } from "@/home-components/HomeAbout";
import { HomePrograms } from "@/home-components/HomePrograms";
import { HomeFeatures } from "@/home-components/HomeFeatures";
import { HomePrincipal } from "@/home-components/HomePrincipal";
import { HomeTestimonials } from "@/home-components/HomeTestimonials";
import { HomeNews } from "@/home-components/HomeNews";
import { HomeCTA } from "@/home-components/HomeCTA";
import { EventsPopup } from "@/shared/EventsPopup";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <HomeAbout />
      <HomePrograms />
      <HomeFeatures />
      <HomePrincipal />
      <HomeTestimonials />
      <HomeNews />
      <HomeCTA />
      <EventsPopup />
    </>
  );
}
