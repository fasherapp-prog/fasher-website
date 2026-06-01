import imgImage2 from "./f270dc9e98d9f5be21d762c7a7d082f53cda9728.png";
import imgImage3 from "./572cf5b75e13ac87f8c68efafb36e9cac7a7eb07.png";

export default function MaskGroup() {
  return (
    <div className="relative size-full" data-name="Mask group">
      <div className="absolute h-[664px] left-[456px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-456px_-553px] mask-size-[1232px_1016px] top-[553px] w-[320px]" style={{ maskImage: `url('${imgImage2}')` }} data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}