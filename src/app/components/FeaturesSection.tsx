const features = [
  { title: 'Hire Around the Globe', description: 'The AI is not constrained by time zones or a need to sleep.' },
  { title: 'Secure Platform', description: 'All data is encrypted through state-of-the-art encryption techniques.' },
  { title: 'Schedule Interviews', description: 'Interviews can be scheduled for anytime. No human limits apply.' },
  { title: 'Minimal Human Effort Involved', description: 'Recruiters only need to schedule interviews.' },
];

const FeatureSection = () => {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold text-foreground mb-8">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="p-4">
            <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
            <p className="text-foreground/70">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
