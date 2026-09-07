export type Photo = {
  id: string;
  src: string;
  width: number;
  height: number;
  featured?: boolean;
};

/** Ambiance photos from the client Drive folder (puri fotky final). */
export const photos: Photo[] = [
  {
    id: "terrace",
    src: "/media/photos/7aa9d451.jpg",
    width: 1537,
    height: 1023,
    featured: true,
  },
  {
    id: "dining-blue",
    src: "/media/photos/58168648.jpg",
    width: 1537,
    height: 1023,
    featured: true,
  },
  {
    id: "dining-main",
    src: "/media/photos/df192969.jpg",
    width: 1537,
    height: 1023,
    featured: true,
  },
  {
    id: "evening-bar",
    src: "/media/photos/4976c74f.jpg",
    width: 1537,
    height: 1023,
  },
  {
    id: "table-detail",
    src: "/media/photos/7576f484.jpg",
    width: 1536,
    height: 1024,
  },
  {
    id: "garden-view",
    src: "/media/photos/69b58eca.jpg",
    width: 1023,
    height: 1537,
  },
  {
    id: "patio-door",
    src: "/media/photos/6a86c580.jpg",
    width: 1023,
    height: 1537,
  },
  {
    id: "wine-shelf",
    src: "/media/photos/04d5ba3e.jpg",
    width: 1023,
    height: 1537,
  },
  {
    id: "oven",
    src: "/media/photos/b53588b4.jpg",
    width: 1023,
    height: 1537,
  },
  {
    id: "blue-room",
    src: "/media/photos/ceb31486.jpg",
    width: 1023,
    height: 1537,
  },
  {
    id: "interior-a",
    src: "/media/photos/4c73a1f2.jpg",
    width: 1536,
    height: 1024,
  },
  {
    id: "interior-b",
    src: "/media/photos/dfbe841c.jpg",
    width: 1537,
    height: 1023,
  },
  {
    id: "interior-c",
    src: "/media/photos/8277e7b0.jpg",
    width: 1023,
    height: 1537,
  },
  {
    id: "interior-d",
    src: "/media/photos/b748243e.jpg",
    width: 1023,
    height: 1537,
  },
];

export const heroPhoto = photos[0];

export const heroVideo = {
  src: "/media/videos/hero.mp4",
  poster: "/media/photos/7aa9d451.jpg",
  width: 720,
  height: 1280,
};

export const MENU_PDF = "/puri-menu-cz.pdf";
