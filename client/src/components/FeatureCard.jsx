const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="group rounded-3xl border border-slate-100 bg-white p-8 transition-all hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50/50">
    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
      <Icon size={24} />
    </div>
    <h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3>
    <p className="leading-relaxed text-slate-600">{description}</p>
  </div>
);
export default FeatureCard;
