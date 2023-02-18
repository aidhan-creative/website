import Image from "next/image";
import Link from "next/link";

export default function Test() {
  return (
    <div>
      <section id="section-one" className="my-32">
        <h1 className="text-5xl text-center mb-12">A big 'ol hero title</h1>
        <div className="hero-content flex-col md:flex-row justify-around">
          <div className="text-right">
            beautiful boobies or astonishing asses?
            <p>
              both are... <em>excellent</em>
            </p>
          </div>
          <div className="">
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </section>
      <section id="section-two" className="my-12">
        <h2>
          title <a href="#section-two">#</a>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <p className="">
            lgsoprfdign ;aoufbsdo;if a;osfibun asdo;iufhbliasdujfbil
            abliqapdfhop;aseh fp;oasdh fo;asduh fuio wsebyufgwe8o fub wuio uiof
            b wuioe fiuow eil fnol;wsae dhfuioph sduoifhuo;sd hiojfh
            s;oifguhjsdp;oig hjo;sdigh josdf huihiljabhjifbilhjasdbf iouywe8oiuf
            how9euhf 9uwerh gjkdsfb vljkhs abdcyui guwyo by
          </p>

          <Image
            alt="Firefighters"
            src="https://cdn.aidhan.au/cdn-cgi/imagedelivery/Dxsm1yoM7Ap4me0rmkAg9w/c4baf841-92ed-464d-dc3c-f28ecbfb8000/public"
            width={3000}
            height={2000}
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkMAYAADkANVKH3ScAAAAASUVORK5CYII="
            placeholder="blur"
            className="row-span-3 object-contain object-left"
          />
          <p className="">
            lgsoprfdign ;aoufbsdo;if a;osfibun asdo;iufhbliasdujfbil
            abliqapdfhop;aseh fp;oasdh fo;asduh fuio wsebyufgwe8o fub wuio uiof
            b wuioe fiuow eil fnol;wsae dhfuioph sduoifhuo;sd hiojfh
            s;oifguhjsdp;oig hjo;sdigh josdf huihiljabhjifbilhjasdbf iouywe8oiuf
            how9euhf 9uwerh gjkdsfb vljkhs abdcyui guwyo by
          </p>
        </div>
      </section>
      <section id="section-three">
        <h2>
          title <a href="#section-three">#</a>
        </h2>
        <p>text</p>
      </section>
      <section id="section-four">
        <h2>
          title <a href="#section-four">#</a>
        </h2>
      </section>
      <section id="section-five">
        <h2>
          title <a href="#section-five">#</a>
        </h2>
        <p>text</p>
      </section>
    </div>
  );
}
