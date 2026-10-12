// Shared by the Our Services page and the navbar slide-down menu.
import doorLeftOpenVideo from "../../static/HomePageVIdeos/door left open-ezremove.mp4";
import fireInKitchenVideo from "../../static/HomePageVIdeos/fire in kitchen.mp4";
import parkingVideo from "../../static/HomePageVIdeos/parking.mp4";
import staffAttendanceVideo from "../../static/HomePageVIdeos/Staff attendance-ezremove.mp4";
import personDetectedVideo from "../../static/HomePageVIdeos/person detected-ezremove.mp4";
import aiChatbotVideo from "../../static/HomePageVIdeos/ai chatbot-ezremove.mp4";
import hotelSearchVideo from "../../static/HomePageVIdeos/Hotel_CCTV_video_search_feature_20261012154811 (1).mp4";

// A feature explained in depth inside a service's detail panel.
export type ServiceFeature = {
  title: string;
  desc: string;
  video?: string;
  // Small label above a video feature's title (defaults to "Featured").
  label?: string;
};

export type Segment = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
  features?: ServiceFeature[];
  icon: React.ReactNode;
};

export const SEGMENTS: Segment[] = [
  {
    id: "home",
    title: "Home",
    tagline: "Round-the-clock protection for your family & property",
    description:
      "Keep an eye on your home from anywhere with AI-driven motion detection, instant mobile alerts and night-vision monitoring that never sleeps.",
    points: [
      "Instant intrusion & motion alerts",
      "Live remote access from your phone",
      "Night-vision coverage after dark",
    ],
    features: [
      {
        title: "Door Left Open? You'll Know.",
        desc: "Parmenion's AI recognises when a door or gate has been left open longer than it should be. Whether the kids forgot to close it or someone left in a hurry, you get an instant alert on your phone — so you can check the live view and act before it becomes a problem.",
        video: doorLeftOpenVideo,
      },
      {
        title: "Fire in the Kitchen? Alerted in Seconds.",
        desc: "A pan left on the stove can turn into a fire in moments. Parmenion's AI spots flames and smoke on camera the instant they appear and alerts you straight away — even when you're not at home — so you can act before a small flare-up becomes a disaster.",
        video: fireInKitchenVideo,
        label: "Fire Detection",
      },
      {
        title: "Instant Intrusion & Motion Alerts",
        desc: "The moment someone steps onto your property when they shouldn't, our AI tells people apart from pets, cars and swaying trees, and alerts you only when it matters — no flood of false alarms.",
      },
      {
        title: "Live Remote Access",
        desc: "Open the app and see every camera at home in real time, wherever you are. Check on family, packages or deliveries in a tap.",
      },
      {
        title: "Night-Vision Coverage",
        desc: "Clear footage after dark means your home is just as protected at 3 a.m. as it is at noon, with the same smart detection working all night.",
      },
    ],
    icon: (
      <>
        <path d="M3 11 12 3l9 8" />
        <path d="M5 10v10h14V10" />
        <path d="M10 20v-5h4v5" />
      </>
    ),
  },
  {
    id: "business",
    title: "Business / Shops",
    tagline: "Complete coverage for retail & commercial spaces",
    description:
      "From single storefronts to multi-location chains, Parmenion gives you AI-powered CCTV, real-time alerts and remote monitoring so you can protect stock, staff and customers from anywhere.",
    points: [
      "AI CCTV monitoring",
      "Real-time alerts",
      "Remote monitoring",
      "Staff management",
      "Cash drawer / counter monitoring",
      "Suspicious activity detection",
      "Night activity detection",
    ],
    features: [
      {
        title: "Staff Attendance, Without a Register",
        desc: "Parmenion recognises your team as they arrive and logs attendance automatically. See who came in on time, who was late and who hasn't shown up — along with where they're working — all at a glance, with no registers or punch cards.",
        video: staffAttendanceVideo,
        label: "Staff Attendance",
      },
      {
        title: "Person Detected After Hours",
        desc: "Once the shop is closed, Parmenion keeps watch. The moment a person or any movement is detected after hours, you get an instant alert with a clip — so you know straight away if something isn't right.",
        video: personDetectedVideo,
        label: "After-Hours Security",
      },
      {
        title: "Ask About Your Store in Plain Words",
        desc: "Chat with Parmenion's AI like you would a manager on the floor. Ask \"How many people came in today?\" or \"Who was at the counter when the drawer opened?\" and get clear answers — with clips — in seconds.",
        video: aiChatbotVideo,
        label: "AI Assistant",
      },
    ],
    icon: (
      <>
        <path d="M6 7h12l1 13H5L6 7Z" />
        <path d="M9 7a3 3 0 0 1 6 0" />
      </>
    ),
  },
  {
    id: "parking",
    title: "Parking",
    tagline: "Every bay and entrance, always in view",
    description:
      "Track vehicles coming and going, spot loitering or break-in attempts, and review any incident in seconds across open lots and multi-level car parks.",
    points: [
      "Vehicle entry & exit tracking",
      "Break-in & loitering detection",
      "Night-time lot monitoring",
    ],
    features: [
      {
        title: "Find Any Car by Its Number Plate",
        desc: "Forgot where you parked, or need to locate a vehicle fast? Just search the number plate. Parmenion's AI reads every plate as cars enter and park, then shows the exact level and bay — with walking directions on your phone straight to the spot.",
        video: parkingVideo,
        label: "Number Plate Search",
      },
      {
        title: "Vehicle Entry & Exit Tracking",
        desc: "Every vehicle coming in or going out is logged automatically with its plate and time, giving you a searchable record of who was on site and when.",
      },
      {
        title: "Break-in & Loitering Detection",
        desc: "Our AI flags anyone lingering around parked cars or trying door handles, and alerts security the moment it happens — not after the damage is done.",
      },
      {
        title: "Night-Time Lot Monitoring",
        desc: "Open lots and quiet levels stay protected after dark, with the same smart detection running all night long.",
      },
    ],
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
      </>
    ),
  },
  {
    id: "hotels",
    title: "Hotels",
    tagline: "Guest safety and smooth operations, watched over",
    description:
      "Monitor lobbies, corridors and entry points in real time, spot suspicious activity early and keep every shift accountable — without disturbing guests.",
    points: [
      "Lobby & entry point monitoring",
      "Corridor & floor coverage",
      "Guest & staff safety alerts",
    ],
    features: [
      {
        title: "Every Camera. One Simple Search.",
        desc: "Lost luggage, a guest complaint or an incident in a corridor? Just describe what you're looking for — like \"man with a red bag\" — and Parmenion searches every hotel camera at once. It shows each place and time the match was seen, from the lobby to the corridor to the lifts, turning hours of footage into seconds of search.",
        video: hotelSearchVideo,
        label: "CCTV Video Search",
      },
      {
        title: "Staff Management Made Simple",
        desc: "From front desk to housekeeping, Parmenion recognises your team as they clock in and logs attendance automatically. See who's on time, who's late and who hasn't arrived — across every department and shift — without registers or punch cards.",
        video: staffAttendanceVideo,
        label: "Staff Management",
      },
      {
        title: "Fire Alerts Before It Spreads",
        desc: "Hotel kitchens and laundry rooms run all day. Parmenion's AI detects flames and smoke the moment they appear and alerts your duty manager and staff instantly — so guests stay safe and a small flare-up never becomes an evacuation.",
        video: fireInKitchenVideo,
        label: "Fire Alert",
      },
      {
        title: "Every Property, One Screen",
        desc: "Run multiple hotels or branches from a single dashboard. See every camera at every location, which sites are all clear and which have alerts — and jump straight to the one that needs attention.",
      },
      {
        title: "Lobby & Entry Point Monitoring",
        desc: "Keep the front desk, entrances and exits in view around the clock, and know who is coming and going without disturbing guests.",
      },
      {
        title: "Corridor & Floor Coverage",
        desc: "Every floor and corridor stays protected, with AI that flags anyone lingering where they shouldn't be or entering restricted areas.",
      },
      {
        title: "Guest & Staff Safety Alerts",
        desc: "Falls, fights or unusual activity trigger an instant alert to your team, so help arrives quickly and every shift stays accountable.",
      },
    ],
    icon: (
      <>
        <path d="M3 7v13M3 14h18v6" />
        <path d="M21 14v-2a3 3 0 0 0-3-3h-7v5" />
        <circle cx="7" cy="11" r="1.6" />
      </>
    ),
  },
  {
    id: "restaurants",
    title: "Restaurants",
    tagline: "Front of house to kitchen, fully covered",
    description:
      "Keep dining areas, kitchens and cash counters in view, check hygiene and service from anywhere, and get alerted to anything unusual after closing.",
    points: [
      "Kitchen & back-of-house oversight",
      "Counter & cash monitoring",
      "After-hours activity alerts",
    ],
    features: [
      {
        title: "AI-Powered Fire Detection",
        desc: "Busy kitchens run hot, and a flare-up can get out of hand fast. Parmenion watches every burner and fryer, detects flames and smoke the moment they appear, and alerts your staff and manager instantly — so a kitchen fire is stopped before it spreads.",
        video: fireInKitchenVideo,
        label: "Fire Detection",
      },
      {
        title: "Kitchen & Back-of-House Oversight",
        desc: "Check hygiene, prep and service from anywhere. See your kitchen in real time and make sure standards are met on every shift.",
      },
      {
        title: "Counter & Cash Monitoring",
        desc: "Keep an eye on the till and payment counter, with AI that spots unusual cash handling and keeps every transaction accountable.",
      },
      {
        title: "After-Hours Activity Alerts",
        desc: "Once you close, Parmenion keeps watch. Any person or movement detected after hours triggers an instant alert on your phone.",
      },
    ],
    icon: (
      <>
        <path d="M7 3v18M5 3v5a2 2 0 0 0 4 0V3" />
        <path d="M17 21V3c-2 0-3 2.5-3 6h3" />
      </>
    ),
  },
  {
    id: "office",
    title: "Office",
    tagline: "Secure workplaces, smarter attendance",
    description:
      "Know who is on site, protect equipment and restricted rooms, and keep track of staff attendance automatically — all from one dashboard.",
    points: [
      "Staff attendance tracking",
      "Restricted area alerts",
      "Reception & entry monitoring",
    ],
    icon: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="1" />
        <path d="M9 7h1M14 7h1M9 11h1M14 11h1" />
        <path d="M10 21v-5h4v5" />
      </>
    ),
  },
];

export function ServiceIcon({ icon, size }: { icon: React.ReactNode; size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--gold-light)"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icon}
    </svg>
  );
}
