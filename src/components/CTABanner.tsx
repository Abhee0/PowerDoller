const CTABanner = () => {
  return (
    <section className="py-12 px-6 md:px-12 bg-gold">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-dark mb-6">
          Your Gateway to Digital Wealth
        </h2>
        <div className="flex justify-center space-x-4">
          <button className="bg-gray-dark hover:bg-gray text-white font-medium px-6 py-3 rounded-full transition">
            Join Our Community
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-dark font-medium px-6 py-3 rounded-full transition">
            View Library
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
