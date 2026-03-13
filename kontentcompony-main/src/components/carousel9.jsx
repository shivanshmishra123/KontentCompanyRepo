"use client";

import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const videos = [
  { id: "1169570021", title: "Chai" },
  // { id: "1169570298", title: "SimeeMeri" },
  { id: "1169569868", title: "ArmpitBala" },
  { id: "1169569974", title: "BackgroundAnimation" },
];

export default function CarouselComponent() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full max-w-lg mx-auto">
      <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {videos.map((video, index) => (
            <CarouselItem key={index} className="flex items-center justify-center">
              <div className="w-full rounded-lg overflow-hidden bg-black/5 transition-all duration-300 transform border-2 border-transparent hover:scale-[1.02] hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] focus-within:scale-[1.02] focus-within:border-orange-500 focus-within:shadow-[0_0_20px_rgba(249,115,22,0.4)]" style={{ position: "relative", paddingBottom: "177.78%", height: 0 }}>
                <iframe
                  src={`https://player.vimeo.com/video/${video.id}?autoplay=0&loop=1&title=0&byline=0&portrait=0`}
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={video.title}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="mt-4 flex justify-center gap-2 pb-2">
        {videos.map((video, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === current ? "bg-white scale-125" : "bg-white/40"
              }`}
            aria-label={`Go to ${video.title}`}
          />
        ))}
      </div>
    </div>
  );
}
