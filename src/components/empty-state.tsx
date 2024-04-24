'use client';
import { useRouter } from 'next/navigation';

interface Emptystate {
  title?: string;
  subtitle?: string;
  redirectUrl?: string;
  buttonText?: string;
  hideBtn?: boolean;
}

const EmptyState: React.FC<Emptystate> = ({
  title = '404',
  subtitle = 'content not found',
  redirectUrl,
  buttonText,
  hideBtn
}) => {
  const router = useRouter();

  return (
    <div className="h-[60vh] flex w-full flex-col gap-2 justify-center items-center">
      <div className={'text-center'}>
        <div className="text-2xl font-bold">{title}</div>
        <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
      </div>
      <div className=" mt-4">
        {!hideBtn && (
          <button
            className="ring-black p-2 text-sm text-blue hover:underline"
            onClick={() => router.back()}
          >
            {buttonText ? buttonText : 'go back'}
          </button>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
