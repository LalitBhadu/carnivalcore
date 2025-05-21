export default function WhatWeDoSection() {
  const items = [
    {
      title: 'Aesthetic Clothing',
      description: 'Fusing street style with dreamy vintage vibes to express your individuality.',
      icon: '👗',
      bg: 'bg-pink-100',
      emojiColor: 'text-pink-500',
    },
    {
      title: 'Minimalist Design',
      description: 'Simplicity at its finest. Clean cuts, soft tones, and subtle elegance.',
      icon: '🧼',
      bg: 'bg-gray-100',
      emojiColor: 'text-gray-600',
    },
    {
      title: 'Creative Expression',
      description: 'Your style is your story. CarnivalCore empowers bold self-expression.',
      icon: '🎨',
      bg: 'bg-blue-100',
      emojiColor: 'text-blue-500',
    },
    {
      title: 'Sustainable Fashion',
      description: 'Built on conscious choices — eco-friendly materials and ethical vibes.',
      icon: '🌿',
      bg: 'bg-green-100',
      emojiColor: 'text-green-600',
    },
  ];

  return (
    <section className="text-center py-20 px-4 bg-white">
      <h2 className="text-4xl font-bold mb-2">Our Focus</h2>
      <p className="text-xl text-gray-700 mb-12 font-semibold">
        <span className="text-black">Redefining fashion through clarity, comfort</span><br />
        and conscious aesthetics.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-lg shadow hover:shadow-lg transition-all bg-white"
          >
            <div
              className={`w-24 h-24 rounded-full mx-auto flex items-center justify-center text-4xl ${item.bg} ${item.emojiColor}`}
            >
              {item.icon}
            </div>
            <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
