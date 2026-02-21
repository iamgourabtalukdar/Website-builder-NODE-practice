const Step = ({ number, title, description }) => (
  <div className="flex flex-col items-center px-4 text-center">
    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-lg font-bold text-white shadow-lg shadow-indigo-200">
      {number}
    </div>
    <h4 className="mb-3 text-xl font-bold text-slate-900">{title}</h4>
    <p className="leading-relaxed text-slate-500">{description}</p>
  </div>
);
export default Step;
