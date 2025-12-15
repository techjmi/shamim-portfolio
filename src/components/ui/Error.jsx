//this is a error component which will be used to handle the error at component level
//this is a fallback component which will be shown when the error is caught by the error boundry
import { error_boundry_title, error_boundry_description, error_boundry_back_to_home, error_boundry_href } from '@/constant/errorcomponent-constant';

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-125px)]">
      <div className="heading-1-bold">{error_boundry_title}</div>
      <div className="body-regular mb-6">{error_boundry_description}</div>
      <button
        href={error_boundry_href}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
      >
        {error_boundry_back_to_home}
      </button>
    </div>
  );
}
