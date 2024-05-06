import AboutUsSection from "@/sections/AboutUsSection";
import WSUASection from "@/sections/WSUASection";
import React from "react";

const AboutPage = (): JSX.Element => {
  return (
    <>
      <div>
        <AboutUsSection />
        <div className="mx-auto flex max-w-6xl flex-col items-center py-10 md:flex-row">
          <div className="p-5 md:w-1/2">
            <h2>Our Mission</h2>
          </div>
          <div className="p-5 md:w-1/2">
            <p>
              At Junnar Tourism Destination Management Company, our mission is
              clear: to foster sustainable tourism practices that benefit both
              visitors and the local community. We strive to strike a balance
              between economic growth, environmental conservation, and social
              responsibility, ensuring that tourism development in Junnar is
              holistic and inclusive.
            </p>
          </div>
        </div>
        <WSUASection />
        <div className="mx-auto flex max-w-6xl flex-col items-center py-10 md:flex-row">
          <div className="p-5 md:w-1/2">
            <h2>Our Approach</h2>
          </div>
          <div className="p-5 md:w-1/2">
            <p>
              Our approach to tourism development in Junnar is guided by the
              principles of sustainability, authenticity, and inclusivity. We
              work closely with stakeholders, including government agencies,
              local businesses, community groups, and tourism professionals, to
              develop and implement initiatives that support our vision for
              responsible tourism.
            </p>
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl flex-col items-center py-10 md:flex-row">
          <div className="p-5 md:w-1/2">
            <h2>Get Involved</h2>
          </div>
          <div className="p-5 md:w-1/2">
            <p>
              Join us in our journey to create a more sustainable and meaningful
              tourism model for Junnar. Whether you&apos;re a traveler seeking
              authentic experiences, a local resident passionate about
              preserving your community&apos;s heritage, or a business owner
              interested in sustainable tourism practices, there are many ways
              to get involved and make a positive impact.
            </p>
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl flex-col items-center py-10 md:flex-row">
          <div className="p-5 md:w-1/2">
            <h2>Contact Us</h2>
          </div>
          <div className="p-5 md:w-1/2">
            <p>
              Ready to learn more about our initiatives or collaborate with us
              on a project? Get in touch with Junnar Tourism Destination
              Management Company today. Together, we can build a brighter future
              for tourism in Junnar that benefits everyone involved.
            </p>
            <p>
              Thank you for your interest in Junnar Tourism Destination
              Management Company. Let&apos;s work together to create
              unforgettable experiences and lasting memories in this beautiful
              corner of Maharashtra.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
