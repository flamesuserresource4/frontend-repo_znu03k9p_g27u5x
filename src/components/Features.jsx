import { Heart, MessageCircle, Video, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: 'Reactions that pop',
    desc: 'Tap-to-like with haptics, bursts, and delightful microinteractions.'
  },
  {
    icon: MessageCircle,
    title: 'Stories & chats',
    desc: 'Built-in story timelines and DM threads with typing indicators.'
  },
  {
    icon: Video,
    title: 'Shorts-ready',
    desc: 'Vertical video rails with auto-play, mute, and swipe gestures.'
  },
  {
    icon: Sparkles,
    title: 'Theming',
    desc: 'Switch presets for cozy pastel, neon rave, or minimal noir.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Everything you need to launch</h2>
          <p className="mt-3 text-gray-600">Drop-in modules for feeds, profiles, notifications, and more.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({icon:Icon, title, desc}) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-6 hover:shadow-sm transition bg-white">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-pink-500 to-purple-500 text-white grid place-items-center mb-4">
                <Icon size={20} />
              </div>
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-600 text-sm mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
