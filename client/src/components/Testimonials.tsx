function Testimonials() {
  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-screen-xl">
        <h2 className="heading md:text-4xl text-2xl text-center font-semibold text-gray-700 font-serif">
          Our Customers can’t live Without us
        </h2>
        <div className="flex justify-between mt-20 italic lg:text-base  text-sm gap-6 sm:flex-row flex-col">
          <div className="sm:max-w-xs">
            <div className="font-extrabold text-6xl -mb-8">"</div>
            <p>
              I've tried several food delivery apps, but CraveCart is by far
              the best. The intuitive interface and powerful search and filter
              features make finding my favorite restaurants a breeze. The
              real-time order tracking and seamless Stripe integration ensure a
              smooth and secure checkout process. CraveCart has quickly become
              my go-to app for satisfying my cravings!
            </p>
            <div className="flex items-center sm:mt-8 mt-4 gap-2">
              <div></div>

              <span>Alberto Duncan</span>
            </div>
          </div>
          <div className="sm:max-w-xs">
            <div className="font-extrabold text-6xl -mb-8">"</div>
            <p>
              CraveCart has completely changed how I order food online. The app
              is incredibly user-friendly, and I love the ability to manage my
              profile and preferences with ease. The restaurant management
              features, including image uploads, allow for a visually engaging
              experience. With its reliable order status updates, I always know
              when my food will arrive.
            </p>
            <div className="flex items-center sm:mt-8 mt-4 gap-2">
              <div></div>

              <span>Joana Silva</span>
            </div>
          </div>
          <div className="sm:max-w-xs">
            <div className="font-extrabold text-6xl -mb-8">"</div>
            <p>
              As a busy professional, I appreciate the convenience CraveCart
              brings to my life. The app's advanced filtering options save me
              time by helping me quickly find exactly what I want to eat. 
              CraveCart's responsive design looks great on all my devices,
              making it easy to order food anytime, anywhere. I can't imagine
              using any other app for my food delivery needs!
            </p>
            <div className="flex items-center sm:mt-8 mt-4 gap-2">
              <div></div>

              <span>Milton Chapman</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
