import dayjs from "dayjs";

function ArticlesGrid({ articles }: { articles: any[] }) {
  return (
    <div>
      <a
        className="block group"
        href="/it/blog/suggerimenti-base-per-il-prompt-engineering-di-immagini-ia"
      >
        <div className="flex items-center">
          <div className="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" />
          <span className="uppercase text-gray-500 text-xs">Tutorial</span>
        </div>
        <p className="text-heading-4 font-chivo font-bold inline-block mb-[26px]">
          Suggerimenti base per il prompt engineering di immagini IA
        </p>
        <div className="relative mb-16">
          <div className="relative">
            <div className="pr-[26px] aspect-auto">
              <img
                className="h-full w-full object-cover rounded-2xl z-10 relative"
                src="https://storage.googleapis.com/alsafi-files/asktoai.com/art-base-prompt-enginering_2024-01-16-150824_owyl.jpg"
                alt="Art base prompt enginering"
                height={800}
                width={1200}
                srcSet="https://storage.googleapis.com/alsafi-files/asktoai.com/googlecloud/17083/art-base-prompt-enginering_2024-01-16-150824_owyl_5f28a37dfffeac17d8504dfc1bc3d34b.webp 200w, https://storage.googleapis.com/alsafi-files/asktoai.com/googlecloud/17083/art-base-prompt-enginering_2024-01-16-150824_owyl_616b2c32fb7bb9679ad560fc61635847.webp 400w, https://storage.googleapis.com/alsafi-files/asktoai.com/googlecloud/17083/art-base-prompt-enginering_2024-01-16-150824_owyl_5472332afa344033d2bf9e7b6b9d883e.webp 600w"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]">
              <div className="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-8 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ArticlesGrid;
