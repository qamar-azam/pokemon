import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Image
        src={'/pokemon_logo.png'}
        alt='pokemon logo'
        width='400'
        height='400'
      />
    </div>
  );
}
