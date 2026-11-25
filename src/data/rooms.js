// Shared room data - single source of truth used across the Home rooms
// preview, the full Rooms listing, individual Room Detail pages, and the
// Booking form's room dropdown.

const rooms = [
  {
    id: 1,
    slug: "deluxe-room",
    title: "Deluxe Room",
    description:
      "A quiet, light-filled room with carved wooden windows, hand-loomed textiles, and a view over our restored Newari courtyard.",
    longDescription:
      "Set on the ground floor overlooking the original stone courtyard, this room keeps its 1892 carved window frames intact. Mornings here begin with the sound of the courtyard fountain and the smell of tea being poured two floors below. Furnishings are hand-loomed and locally made, kept deliberately simple so the architecture stays the focus.",
    image: "/images/hotel/new (5).jpeg",
    gallery: ["/images/img1.jpeg", "/images/img2.jpeg","/images/room5.jpeg"],
    area: "28 m²",
    bed: "Queen Bed",
    guests: "2 Guests",
    price: "$120",
  },
  {
    id: 2,
    slug: "premium-room",
    title: "Premium Room",
    description:
      "A generous suite beneath our original pagoda roofline, blending centuries-old timber with modern comfort.",
    longDescription:
      "This suite sits directly under  courtyard, with carved wooden  the building's original pagoda-style roof, its exposed timber beams left visible and untouched. A separate sitting area and a deep soaking tub make it a favourite for longer stays, while the tiered roofline outside the window is a small piece of Newari architectural history in itself.",
    image: "/images/room1.jpeg",
    gallery: ["/images/room1.jpeg", "/images/room3.jpeg", "/images/room5.jpeg"],
    area: "42 m²",
    bed: "King Bed",
    guests: "2 Guests",
    price: "$185",
  },

  
];

export default rooms;
