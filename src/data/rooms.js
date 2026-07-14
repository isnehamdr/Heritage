// Shared room data - single source of truth used across the Home rooms
// preview, the full Rooms listing, individual Room Detail pages, and the
// Booking form's room dropdown.

const rooms = [
  {
    id: 1,
    slug: "heritage-courtyard-room",
    title: "Heritage Courtyard Room",
    description:
      "A quiet room facing our restored Newari courtyard, with carved wooden windows and hand-loomed textiles.",
    longDescription:
      "Set on the ground floor overlooking the original stone courtyard, this room keeps its 1892 carved window frames intact. Mornings here begin with the sound of the courtyard fountain and the smell of tea being poured two floors below. Furnishings are hand-loomed and locally made, kept deliberately simple so the architecture stays the focus.",
    image: "/images/img1.jpeg",
    gallery: ["/images/img1.jpeg", "/images/img2.jpeg", "/images/h1.avif"],
    area: "28 m²",
    bed: "Queen Bed",
    guests: "2 Guests",
    price: "$120",
  },
  {
    id: 2,
    slug: "pagoda-suite",
    title: "Pagoda Suite",
    description:
      "A generous suite beneath our original pagoda roofline, blending centuries-old timber with modern comfort.",
    longDescription:
      "This suite sits directly under the building's original pagoda-style roof, its exposed timber beams left visible and untouched. A separate sitting area and a deep soaking tub make it a favourite for longer stays, while the tiered roofline outside the window is a small piece of Newari architectural history in itself.",
    image: "/images/img2.jpeg",
    gallery: ["/images/img2.jpeg", "/images/h2.avif", "/images/img3.jpeg"],
    area: "42 m²",
    bed: "King Bed",
    guests: "2 Guests",
    price: "$185",
  },
  {
    id: 3,
    slug: "durbar-view-room",
    title: "Durbar View Room",
    description:
      "Wake up to rooftop views of Kathmandu's temple spires from your private window seat.",
    longDescription:
      "A corner room with a deep window seat built for watching the city wake up. From here you can pick out the tiered temple roofs of Kathmandu Durbar Square above the surrounding rooftops, particularly striking at sunrise when the valley mist is still settling.",
    image: "/images/img3.jpeg",
    gallery: ["/images/img3.jpeg", "/images/img4.jpeg", "/images/h3.avif"],
    area: "32 m²",
    bed: "King Bed",
    guests: "2 Guests",
    price: "$150",
  },
  {
    id: 4,
    slug: "royal-thamel-suite",
    title: "Royal Thamel Suite",
    description:
      "Our largest suite, with a sitting room, soaking tub, and a private balcony over the old town.",
    longDescription:
      "The largest room in the house, spread across a sitting room, bedroom, and private balcony overlooking Thamel's lanes. It was once the family's own quarters, and still carries their original wood carving above the entrance door, restored rather than replaced.",
    image: "/images/img4.jpeg",
    gallery: ["/images/img4.jpeg", "/images/h4.avif", "/images/img1.jpeg"],
    area: "58 m²",
    bed: "King Bed",
    guests: "3 Guests",
    price: "$260",
  },
  {
    id: 5,
    slug: "garden-wing-room",
    title: "Garden Wing Room",
    description:
      "Set beside our herb garden, this room opens onto a shared veranda scented with jasmine in bloom.",
    longDescription:
      "Tucked into the quieter garden wing, this room opens onto a shared veranda lined with jasmine and herbs used in the hotel kitchen. It's the room we recommend most to guests who want to read on a veranda rather than sightsee every day of their stay.",
    image: "/images/h1.avif",
    gallery: ["/images/h1.avif", "/images/img1.jpeg", "/images/img2.jpeg"],
    area: "26 m²",
    bed: "Twin Beds",
    guests: "2 Guests",
    price: "$110",
  },
  {
    id: 6,
    slug: "rooftop-terrace-suite",
    title: "Rooftop Terrace Suite",
    description:
      "A top-floor suite with its own private terrace, built for evening tea under the Himalayan sky.",
    longDescription:
      "Our top-floor suite comes with its own private terrace, unshared with any other room. On clear evenings the terrace catches the last light over the valley hills, and our staff can set up tea or a quiet dinner there on request.",
    image: "/images/h2.avif",
    gallery: ["/images/h2.avif", "/images/img3.jpeg", "/images/img4.jpeg"],
    area: "48 m²",
    bed: "King Bed",
    guests: "2 Guests",
    price: "$220",
  },
  {
    id: 7,
    slug: "heritage-family-suite",
    title: "Heritage Family Suite",
    description:
      "Two connected rooms around a shared sitting area, ideal for families exploring the valley together.",
    longDescription:
      "Two bedrooms connected by a shared sitting area, designed for families who want their own space without being spread across the building. Both rooms keep the original wood flooring, and the sitting area doubles as a quiet spot for breakfast before a day out.",
    image: "/images/h3.avif",
    gallery: ["/images/h3.avif", "/images/img2.jpeg", "/images/h1.avif"],
    area: "55 m²",
    bed: "King + Twin",
    guests: "4 Guests",
    price: "$240",
  },
  {
    id: 8,
    slug: "valley-view-room",
    title: "Valley View Room",
    description:
      "Sitting high above Thamel's lanes, with long views toward the terraced hills beyond the city.",
    longDescription:
      "On one of the upper floors, this room looks past Thamel's rooftops toward the terraced hills that ring the Kathmandu Valley. It's a smaller, simpler room, and a good match for guests who'd rather spend their budget on experiences than square footage.",
    image: "/images/h4.avif",
    gallery: ["/images/h4.avif", "/images/img1.jpeg", "/images/h2.avif"],
    area: "30 m²",
    bed: "Queen Bed",
    guests: "2 Guests",
    price: "$135",
  },
];

export default rooms;
