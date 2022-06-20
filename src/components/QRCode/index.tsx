import Image from 'next/image';

export function QRCode() {
  return (
    <div className="relative w-full h-[275px] rounded-xl">
      <Image
        src="/image-qr-code.png"
        alt="QR code image"
        layout="fill"
        priority
      />
    </div>
  );
}
