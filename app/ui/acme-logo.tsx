import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { Lusitana } from 'next/font/google';

export default function AcmeLogo() {
  return (
    <div
      className={`${
        Lusitana({ weight: '400' }).className
      } flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
