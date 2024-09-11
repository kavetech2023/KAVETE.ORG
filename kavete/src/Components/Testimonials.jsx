import TagLine from "./TagLine";

const Testimonials = () => {
  return (
    <section className="flex items-center justify-center flex-col">
      <TagLine>Testimonials</TagLine>
      <h2 className="text-3xl font-bold text-center mt-3 mb-8">
        What our clients say about us
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 items-center max-w-screen-xl text-left">
        <div className="grid gap-4">
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img
                src="/testimonials/1.png"
                alt="User"
                className="w-12 h-12 rounded-full"
              />
              <p>User</p>
            </div>
            <p className="text-sm space-y-4">
              <span>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </span>
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;
