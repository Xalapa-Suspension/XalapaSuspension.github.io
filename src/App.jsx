export default function XalapaZiplineSuspensions2026() {
  const navItems = [
    "About",
    "Location",
    "Included",
    "Pricing",
    "Timeline",
    "Travel",
    "Hotels",
    "Packing",
    "FAQ",
  ];

  const faqItems = [
    {
      q: "Do I need prior suspension experience?",
      a: "Yes. This event is intended for people with some prior hook suspension experience.",
    },
    {
      q: "Is transportation from Xalapa included?",
      a: "Yes. Shuttle transportation between Xalapa and the retreat site is included.",
    },
    {
      q: "Can I arrive the same day as the shuttle?",
      a: "It is strongly recommended that attendees arrive in Xalapa at least the night before departure.",
    },
    {
      q: "Are meals included?",
      a: "Yes. Breakfast, lunch, and dinner are included during the retreat.",
    },
    {
      q: "Will I definitely get suspended?",
      a: "Each attendee receives one guaranteed suspension opportunity. Additional suspensions may happen if time allows.",
    },
    {
      q: "Are private rooms available?",
      a: "A limited number of private rooms may be available depending on lodging arrangements.",
    },
    {
      q: "What language is the event conducted in?",
      a: "Primarily Spanish and English.",
    },
    {
      q: "What happens if I cancel?",
      a: "No refunds are available after October 1, 2026.",
    },
  ];

  const includedItems = [
    "Shuttle transportation from Abracadabra Tattoos & Piercings in Xalapa to the retreat site in Teocelo",
    "Lodging for the nights of November 9, 10, and 11",
    "Breakfast, lunch, and dinner during the event",
    "One guaranteed suspension",
    "Event t-shirt",
    "Access to all retreat activities",
  ];

  const notIncluded = [
    "Transportation to or from Xalapa",
    "Flights",
    "Lodging in Xalapa before or after the retreat",
    "Personal travel expenses",
    "Alcohol or personal purchases",
  ];

  const packingItems = [
    "Bug spray",
    "Sunscreen",
    "Rain jacket or lightweight waterproof clothing",
    "Comfortable outdoor clothing",
    "Good walking shoes",
    "Swimwear and towel",
    "Flashlight/headlamp",
    "Water bottle",
    "Personal medications",
    "Cash for incidental expenses",
  ];

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen scroll-smooth selection:bg-emerald-700/40">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: Inter, sans-serif;
          background: #09090b;
        }

        .hero-overlay {
          background: linear-gradient(to bottom, rgba(0,0,0,.65), rgba(9,9,11,.96));
        }

        .glass {
          backdrop-filter: blur(14px);
          background: rgba(24,24,27,.55);
        }
      `}</style>

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 glass">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div>
            <h1 className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-100">
              Xalapa Zipline Suspensions 2026
            </h1>
          </div>

          <div className="hidden gap-6 text-sm text-zinc-300 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition hover:text-emerald-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-50" />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-24">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex rounded-full border border-emerald-700/40 bg-emerald-900/20 px-4 py-2 text-xs uppercase tracking-[0.25em] text-emerald-200">
              November 9–12, 2026 · Veracruz, Mexico
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
                Xalapa Zipline Suspensions 2026
              </h1>

              <h2 className="max-w-2xl text-xl font-light text-zinc-200 md:text-3xl">
                Hook Suspension Zipline Event Outside of Xalapa, Mexico
              </h2>

              <p className="max-w-2xl text-lg leading-8 text-zinc-300">
                An immersive multi-day suspension retreat in the mountains outside Xalapa, Mexico featuring zipline suspensions, jungle suspensions, community meals, cabin lodging, and a traditional Temazcal ceremony.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd2VFKokL-bGFvwrIYyVXvH18CvGIMEDwYru6f738lPTS2pwQ/viewform"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-emerald-700 px-8 py-4 text-center font-semibold text-white transition hover:scale-[1.02] hover:bg-emerald-600"
              >
                Register Now
              </a>

              <a
                href="#travel"
                className="rounded-2xl border border-zinc-700 px-8 py-4 text-center font-semibold text-zinc-200 transition hover:border-emerald-700 hover:text-white"
              >
                View Logistics
              </a>
            </div>

            <div className="pt-6">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
                Hosted By
              </p>

              <div className="flex flex-col gap-3 text-zinc-300 sm:flex-row sm:gap-8">
                <a
                  href="https://www.instagram.com/_indigenak_suspension_team_/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-emerald-300"
                >
                  @indigenak_suspension_team_
                </a>

                <a
                  href="https://www.instagram.com/chango_piercer/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-emerald-300"
                >
                  @chango_piercer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl space-y-28 px-6 py-24">
        <section id="about" className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div className="text-sm uppercase tracking-[0.25em] text-emerald-300">
              About The Event
            </div>

            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Immersive suspension retreat in the mountains of Veracruz
            </h2>

            <div className="space-y-5 text-lg leading-8 text-zinc-300">
              <p>
                Xalapa Zipline Suspensions 2026 is a community-oriented retreat focused on intentional suspension practice, nature immersion, and shared experience in a forested mountain environment outside Xalapa.
              </p>

              <p>
                The event combines zipline suspensions, jungle suspensions, communal meals, cabin lodging, and a traditional Temazcal ceremony within a secluded retreat atmosphere designed for connection and presence.
              </p>

              <p>
                This event is designed for people with some prior hook suspension experience.
              </p>

              <p>
                Although the event is called Xalapa Zipline Suspensions, the actual retreat location is in the nearby village of Teocelo, Veracruz.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900">
            <div className="aspect-[4/5] bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center transition duration-700 hover:scale-105" />
          </div>
        </section>

        <section id="location" className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6 rounded-[2rem] border border-white/10 bg-zinc-900/70 p-8">
            <div className="text-sm uppercase tracking-[0.25em] text-emerald-300">
              Retreat Location
            </div>

            <h2 className="text-4xl font-bold text-white">Finca Santa Rosa</h2>

            <div className="space-y-4 text-zinc-300 leading-8 text-lg">
              <p>
                Camino a Santa Rosa S/N, 91615 Teocelo, Ver., Mexico
              </p>

              <p>
                Teocelo is approximately 45 minutes from Xalapa and the retreat takes place in a forested mountainous environment surrounded by dense greenery and outdoor suspension spaces.
              </p>

              <p>
                Transportation between Xalapa and the retreat is provided.
              </p>

              <p>
                Participants are encouraged to arrive in Xalapa at least one night before the shuttle departure.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-40" />

            <div className="relative flex h-full min-h-[420px] items-center justify-center p-10">
              <div className="rounded-3xl border border-white/10 bg-black/50 px-8 py-6 text-center backdrop-blur-md">
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
                  Map Placeholder
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Teocelo, Veracruz
                </h3>
                <p className="mt-3 max-w-sm text-zinc-300">
                  Embedded map or transportation graphic can be added here.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="included" className="space-y-10">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-emerald-300">
              What's Included
            </div>
            <h2 className="mt-4 text-4xl font-bold text-white">
              Registration Information
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-emerald-700/20 bg-emerald-950/20 p-8">
              <h3 className="mb-6 text-2xl font-semibold text-white">
                Included in Registration
              </h3>

              <div className="space-y-4">
                {includedItems.map((item) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-2xl border border-white/5 bg-black/20 p-4"
                  >
                    <div className="mt-1 h-3 w-3 rounded-full bg-emerald-400" />
                    <p className="text-zinc-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-zinc-900/70 p-8">
              <h3 className="mb-6 text-2xl font-semibold text-white">
                Not Included
              </h3>

              <div className="space-y-4">
                {notIncluded.map((item) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-2xl border border-white/5 bg-black/20 p-4"
                  >
                    <div className="mt-1 h-3 w-3 rounded-full bg-zinc-500" />
                    <p className="text-zinc-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="space-y-10">
          <div className="text-center">
            <div className="text-sm uppercase tracking-[0.25em] text-emerald-300">
              Pricing
            </div>
            <h2 className="mt-4 text-4xl font-bold text-white">
              Registration Options
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-zinc-900/70 p-10 transition hover:-translate-y-1 hover:border-emerald-700/40">
              <h3 className="text-3xl font-bold text-white">Participant</h3>
              <p className="mt-6 text-5xl font-black text-emerald-300">
                375 EUR
              </p>
              <p className="mt-2 text-zinc-400">440 USD / 7600 MXN</p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-zinc-900/70 p-10 transition hover:-translate-y-1 hover:border-emerald-700/40">
              <h3 className="text-3xl font-bold text-white">Practitioner</h3>
              <p className="mt-6 text-5xl font-black text-emerald-300">
                325 EUR
              </p>
              <p className="mt-2 text-zinc-400">380 USD / 6600 MXN</p>
            </div>
          </div>

          <div className="space-y-3 text-center text-zinc-400">
            <p>Participants will be invoiced after registration approval.</p>
            <p>No refunds are possible after October 1, 2026.</p>
          </div>

          <div className="flex justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd2VFKokL-bGFvwrIYyVXvH18CvGIMEDwYru6f738lPTS2pwQ/viewform"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-emerald-700 px-8 py-4 font-semibold text-white transition hover:bg-emerald-600"
            >
              Register for the Retreat
            </a>
          </div>
        </section>

        <section id="timeline" className="space-y-10">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-emerald-300">
              Event Timeline
            </div>
            <h2 className="mt-4 text-4xl font-bold text-white">
              Retreat Schedule Overview
            </h2>
          </div>

          <div className="relative border-l border-white/10 pl-8 space-y-12">
            {[
              {
                day: "November 9",
                items: [
                  "Meet at Abracadabra Tattoos & Piercings in Xalapa at 8:00 AM",
                  "Shuttle departs for Teocelo",
                  "Arrival, load-in, and suspension setup",
                ],
              },
              {
                day: "November 10",
                items: [
                  "Zipline suspensions throughout the day",
                  "Traditional Temazcal ceremony in the evening",
                ],
              },
              {
                day: "November 11",
                items: [
                  "Possible additional zipline suspensions",
                  "Jungle suspensions and open activities",
                ],
              },
              {
                day: "November 12",
                items: [
                  "Load-out",
                  "Shuttle returns to Xalapa",
                ],
              },
            ].map((entry) => (
              <div key={entry.day} className="relative">
                <div className="absolute -left-[2.35rem] top-2 h-5 w-5 rounded-full border-4 border-zinc-950 bg-emerald-500" />

                <div className="rounded-[2rem] border border-white/10 bg-zinc-900/70 p-8">
                  <h3 className="text-2xl font-semibold text-white">
                    {entry.day}
                  </h3>

                  <div className="mt-5 space-y-3 text-zinc-300">
                    {entry.items.map((item) => (
                      <div key={item} className="flex gap-3">
                        <span className="text-emerald-400">•</span>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="travel" className="space-y-10">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-emerald-300">
              Travel Logistics
            </div>
            <h2 className="mt-4 text-4xl font-bold text-white">
              Planning Your Arrival
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-zinc-900/70 p-8">
              <h3 className="text-2xl font-semibold text-white">
                Getting to Mexico
              </h3>

              <div className="mt-5 space-y-4 text-zinc-300 leading-7">
                <p>
                  Most international attendees fly into Mexico City (MEX).
                </p>
                <p>
                  Some attendees may also fly into Veracruz.
                </p>
                <p>
                  Mexico City is usually less expensive and offers more international flight connections.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-zinc-900/70 p-8">
              <h3 className="text-2xl font-semibold text-white">
                Getting to Xalapa
              </h3>

              <div className="mt-5 space-y-4 text-zinc-300 leading-7">
                <p>
                  Most attendees take an ADO bus from Mexico City to Xalapa.
                </p>
                <p>
                  The bus ride is approximately 4 hours.
                </p>
                <p>
                  ADO buses are comfortable, modern, and commonly used for long-distance travel in Mexico.
                </p>
                <p>
                  Use the ADO app or website to book tickets in advance.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-zinc-900/70 p-8">
              <h3 className="text-2xl font-semibold text-white">
                Shuttle Information
              </h3>

              <div className="mt-5 space-y-4 text-zinc-300 leading-7">
                <p>
                  Shuttle transportation from Xalapa to the retreat is included.
                </p>

                <div className="rounded-2xl border border-white/5 bg-black/20 p-4">
                  <p className="font-medium text-white">
                    Abracadabra Tattoos & Piercings
                  </p>
                  <p>Xalapa, Veracruz</p>
                </div>

                <p>
                  Shuttle departs the morning of November 9.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="hotels" className="space-y-10">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-emerald-300">
              Hotel Recommendations
            </div>
            <h2 className="mt-4 text-4xl font-bold text-white">
              Suggested Accommodations in Xalapa
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-zinc-900/70 overflow-hidden">
              <div className="h-56 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />

              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white">
                  Holiday Inn Express Xalapa
                </h3>

                <p className="mt-4 leading-7 text-zinc-300">
                  Ignacio Zaragoza 8, Zona Centro, Centro, 91000 Xalapa-Enríquez, Ver., Mexico
                </p>

                <div className="mt-6 space-y-3 text-zinc-400">
                  <p>• Centrally located</p>
                  <p>• Walking distance to Abracadabra Tattoos & Piercings</p>
                  <p>• Convenient for shuttle pickup</p>
                </div>
              </div>
            </div>

            <div className="flex min-h-[420px] items-center justify-center rounded-[2rem] border border-dashed border-white/10 bg-zinc-900/40 text-center">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                  Additional Hotels
                </p>
                <p className="mt-3 text-zinc-300">
                  More accommodation recommendations coming soon.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-zinc-900/70 p-8">
            <div className="text-sm uppercase tracking-[0.25em] text-emerald-300">
              Lodging
            </div>

            <h2 className="mt-4 text-4xl font-bold text-white">
              Shared Retreat Accommodations
            </h2>

            <div className="mt-6 space-y-4 text-zinc-300 leading-8 text-lg">
              <p>
                Lodging consists primarily of shared cabins integrated into the retreat property.
              </p>

              <p>
                Some private room accommodations may be available depending on final lodging arrangements.
              </p>

              <p>
                Room assignments will be coordinated closer to the event.
              </p>

              <p>
                Bedding and towels are provided.
              </p>

              <p>
                Bathrooms and showers are available onsite.
              </p>
            </div>
          </div>

          <div
            id="packing"
            className="rounded-[2rem] border border-white/10 bg-zinc-900/70 p-8"
          >
            <div className="text-sm uppercase tracking-[0.25em] text-emerald-300">
              Packing List
            </div>

            <h2 className="mt-4 text-4xl font-bold text-white">
              Suggested Items
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {packingItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-white/5 bg-black/20 p-4"
                >
                  <input type="checkbox" className="h-5 w-5 accent-emerald-500" />
                  <p className="text-zinc-300">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-zinc-400 leading-7">
              November weather in Veracruz can include rain and humidity. Prepare for changing outdoor conditions.
            </p>
          </div>
        </section>

        <section className="space-y-10">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-emerald-300">
              Organizers
            </div>
            <h2 className="mt-4 text-4xl font-bold text-white">
              Organizer Bios
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              "Indigenak Suspension Team",
              "Chango Piercer",
            ].map((name) => (
              <div
                key={name}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/70"
              >
                <div className="h-72 bg-[url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />

                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-white">{name}</h3>

                  <p className="mt-5 leading-8 text-zinc-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="space-y-10">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-emerald-300">
              FAQ
            </div>
            <h2 className="mt-4 text-4xl font-bold text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-white/10 bg-zinc-900/70 p-6"
              >
                <summary className="cursor-pointer list-none text-lg font-medium text-white flex items-center justify-between">
                  {item.q}
                  <span className="transition group-open:rotate-45 text-2xl">
                    +
                  </span>
                </summary>

                <p className="mt-5 leading-7 text-zinc-300">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/40">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-white">
              Xalapa Zipline Suspensions 2026
            </h3>
            <p className="text-zinc-400">November 9–12, 2026</p>
            <p className="text-zinc-500">More information coming soon</p>
            <p className="text-zinc-500">Contact placeholder</p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex gap-6 text-zinc-300">
              <a
                href="https://www.instagram.com/_indigenak_suspension_team_/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-emerald-300"
              >
                Instagram
              </a>

              <a
                href="https://www.instagram.com/chango_piercer/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-emerald-300"
              >
                Organizer
              </a>
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd2VFKokL-bGFvwrIYyVXvH18CvGIMEDwYru6f738lPTS2pwQ/viewform"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-600"
            >
              Register Now
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
