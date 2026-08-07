import { useState } from "react";

const TABS = {
  Story: {
    label: "Story",
    paragraphs: [
      "It started with a single late-night delivery that almost didn't make it — a birthday gift, one city away, and a courier who refused to let a flat tire stop him. That night taught us what this business is really about: someone, somewhere, is waiting for something to arrive. We built our first routing system on a kitchen table with three drivers and a shared spreadsheet, and we obsessed over every late parcel like it was our own.",
      "As we grew, we kept that same obsession but gave it better tools. Real-time GPS tracking replaced phone calls to drivers asking 'where are you?'. Automated dispatch replaced guesswork. What hasn't changed is the promise we started with — that a package in our hands is a promise kept, not just a job done. Today that promise runs through every warehouse, every route, and every driver we bring on board.",
      "We've delivered everything from handwritten letters to entire office relocations, and each one gets the same standard: tracked, on time, and handled like it matters — because to someone, it always does. That's the story we're still writing, one parcel at a time.",
    ],
  },
  Mission: {
    label: "Mission",
    paragraphs: [
      "Our mission is simple to say and hard to do every single day: make sure nothing gets lost, nothing arrives late without warning, and nobody has to wonder where their package is. We chase that by investing in smarter routing, real-time visibility, and a courier network trained to treat every box like it's fragile — even when it isn't.",
      "We don't measure ourselves by how many parcels we move. We measure ourselves by how many people didn't have to call support to ask 'is it coming today?' That's the number that tells us if we're actually doing our job — not just shipping volume, but earning trust one delivery at a time.",
      "Looking ahead, our focus is on closing the gap between 'shipped' and 'delivered' even further — same-day windows, tighter tracking accuracy, and a support team that picks up before you finish dialing. We're not trying to be the biggest delivery company. We're trying to be the one people actually rely on.",
    ],
  },
  Success: {
    label: "Success",
    paragraphs: [
      "Success, for us, looks like a small business owner who no longer worries about whether their products will show up on time for a customer's event. It looks like families reconnecting through parcels sent across cities, and companies that scaled their shipping without ever scaling their stress. Thousands of businesses and individuals now build their delivery expectations around us — and that trust took years, not months, to earn.",
      "We've handled peak-season surges without missing our delivery windows, expanded into new regions without dropping our tracking accuracy, and kept our customer satisfaction consistently high even as volume multiplied. None of that happened by accident — it happened because we treat every single parcel like it's the only one moving that day.",
      "The real proof isn't in our numbers, though they matter. It's in the repeat customers who never had to think twice about choosing us again, and the businesses that quietly built their operations around a delivery service they no longer have to worry about.",
    ],
  },
  "Team & Others": {
    label: "Team & Others",
    paragraphs: [
      "Behind every parcel that arrives on time is a team most customers never see: dispatchers making split-second routing calls, drivers navigating traffic and weather to hit a delivery window, and a support team fielding questions with patience even during the busiest weeks. They're the reason 'on time, every time' isn't just a slogan on a webpage.",
      "We've built partnerships with local courier networks, warehousing providers, and technology vendors to extend our reach into places we couldn't cover alone — without ever lowering the standard we hold ourselves to. Every partner who joins our network is trained on the same principle our first three drivers followed: the parcel matters, and so does the person waiting for it.",
      "We're a team that grew up solving problems in real time — a missed address, a storm delaying a route, a customer needing an update at 11pm. That's the culture we protect as we scale: people first, systems second, and a shared refusal to let 'good enough' be good enough.",
    ],
  },
};

const TAB_ORDER = ["Story", "Mission", "Success", "Team & Others"];

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("Story");

  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-sm p-20">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-secondary tracking-tight mb-3">
          About Us
        </h1>
        <p className="text-sm text-secondary-content leading-relaxed max-w-xl">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        <hr className="my-6 border-gray-200" />

        {/* Tabs */}
        <div
          className="flex items-center gap-8 mb-6"
          role="tablist"
          aria-label="About Us sections"
        >
          {TAB_ORDER.map((tabKey) => {
            const isActive = activeTab === tabKey;
            return (
              <button
                key={tabKey}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tabKey)}
                className={`text-sm font-medium pb-1 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6b7f3c] rounded-sm ${
                  isActive
                    ? "text-[#6b7f3c] font-semibold"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {TABS[tabKey].label}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <div className="space-y-4">
          {TABS[activeTab].paragraphs.map((p, i) => (
            <p key={i} className="text-sm text-gray-600 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
