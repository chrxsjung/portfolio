import SongCard from "./SongCard";

export default function FavoriteSongs() {
  return (
    <div className="mt-5 flex flex-wrap gap-4">
      <SongCard
        title="maybe baby"
        artist="Effie"
        url="https://www.youtube.com/watch?v=mY29OplGMkY"
      />

      <SongCard
        title="SKY PASS"
        artist="OSUN & Mason Home (ft. BOBBY)"
        url="https://www.youtube.com/watch?v=uvNbnNVMyIA"
      />

      <SongCard
        title="PUBLIC ENEMIES"
        artist="Sik-K & Lil Moshpit (ft. OSUN, Iyaan, Jeffrey White, Raf Sandou)"
        url="https://www.youtube.com/watch?v=4R4CG2UUNhA"
      />

      <SongCard
        title="AH AH"
        artist="nowimyoung (ft. Sik-k)"
        url="https://www.youtube.com/watch?v=Y4bGXIMDk38"
      />

      <SongCard
        title="Ms. Menhera"
        artist="Jvcki Wai & vangdale"
        url="https://www.youtube.com/watch?v=_Bp6g2JIZg4"
      />

      <SongCard
        title="STYLE"
        artist="Hearts2Hearts"
        url="https://www.youtube.com/watch?v=n7kFRxFIPrI"
      />

      <SongCard
        title="ROB LUCCI"
        artist="OKASHII"
        url="https://www.youtube.com/watch?v=LtaVzhVZFC8"
      />

      <SongCard
        title="LOV3"
        artist="Sik-K & Lil Moshpit (ft. Bryan Chase, Okasian)"
        url="https://www.youtube.com/watch?v=7mjg-7ibaQA"
      />

      <SongCard
        title="EmptyHouse"
        artist="Giriboy (ft. Thama)"
        url="https://www.youtube.com/watch?v=GToAIpJKUkA"
      />
    </div>
  );
}
