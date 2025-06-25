const HowToGetIn = () => {
  const steps = [
    {
      number: "1",
      title: "Online Application (10 minutes)",
      desc: "Fill in an application with your details. It also includes taking a video."
    },
    {
      number: "2",
      title: "Group Call (60 minutes)",
      desc: "If required, some applicants will need to book a 1:1 session to see if we're a mutual fit."
    },
    {
      number: "3",
      title: "Decision",
      desc: "Receive your decision by email (keep checking your spam). We accept only 20 members in each cohort."
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">How do you get in?</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-gradient-to-br from-amber-900 to-orange-800 p-8 rounded-2xl shadow-2xl hover:shadow-orange-900/20 transition-all hover:scale-105 border border-orange-600/30 text-center">
              <div className="w-16 h-16 bg-amber-700/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-amber-300">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
              <p className="text-amber-100 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all hover:scale-105 shadow-lg hover:shadow-orange-500/25 border border-orange-500/30">
            Apply now
          </button>
          <p className="mt-6 text-amber-200 font-medium text-lg">COHORT STARTS ON JULY 28</p>
        </div>
      </div>
    </section>
  );
};

export default HowToGetIn;