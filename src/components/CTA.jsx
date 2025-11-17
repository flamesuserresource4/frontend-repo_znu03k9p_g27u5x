export default function CTA() {
  return (
    <section id="get-started" className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Ready to ship your social app?</h3>
        <p className="mt-3 text-gray-700">Start from a polished template, customize the vibe, and go live today.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#" className="inline-flex px-5 py-3 rounded-full bg-gray-900 text-white font-medium shadow hover:bg-black transition">Create a project</a>
          <a href="/test" className="inline-flex px-5 py-3 rounded-full bg-white text-gray-900 font-medium shadow border border-gray-200 hover:bg-gray-50 transition">Check backend</a>
        </div>
      </div>
    </section>
  )
}
