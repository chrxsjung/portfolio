import ArtistCard from "./ArtistCard";

export default function FavoriteArtists() {
  return (
    <div className="mt-5 flex flex-wrap gap-4">
      <ArtistCard
        name="Giriboy"
        genre="khh"
        url="https://www.youtube.com/@GIRIBOYWORLD/releases"
      />

      <ArtistCard
        name="Heize"
        genre="krnb"
        url="https://www.youtube.com/@Heizeofficial/releases"
      />
      <ArtistCard
        name="KC (label)"
        genre="khh"
        url="https://www.youtube.com/@KCTHECOMPANY/videos"
      />

      <ArtistCard
        name="NewJeans"
        genre="kpop"
        url="https://www.youtube.com/@NewJeans_official/releases"
      />

      <ArtistCard
        name="OKASHII"
        genre="khh"
        url="https://open.spotify.com/artist/6Vs5u8gSzXsS1LPZhmXoiB"
        nameClassName="font-roboto"
      />

      <ArtistCard
        name="Hearts2Hearts"
        genre="kpop"
        url="https://www.youtube.com/@hearts2hearts.official/releases"
      />
    </div>
  );
}
