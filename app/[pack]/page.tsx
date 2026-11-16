import { PagoRedirect, pagoMetadata, pagoParams } from '@/components/PagoRedirect';

export const dynamicParams = false;
export const generateStaticParams = pagoParams;

type Props = { params: Promise<{ pack: string }> };

export async function generateMetadata({ params }: Props) {
  const { pack } = await params;
  return pagoMetadata(pack, `/${pack}`);
}

export default async function Page({ params }: Props) {
  const { pack } = await params;
  return <PagoRedirect pack={pack} />;
}
