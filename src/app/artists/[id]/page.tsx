import ScreenArtistDetail from "@/components/tattoo/screen-artist-detail";

export default async function ArtistDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ScreenArtistDetail artistId={id} />;
}
