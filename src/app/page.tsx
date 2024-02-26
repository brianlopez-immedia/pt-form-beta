import Image from "next/image";

export default function Home() {
  return (
    <main className="border border-white flex min-h-screen flex-col items-center justify-between p-24">
      <div className="border border-blue-800 mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <label className="border border-base-100 form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-xs">AM/AE:</span>
          </div>
          <input
            type="text"
            className="input input-ghost h-20 w-full max-w-xs"
          />
        </label>
        <label className="border border-base-100 form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-xs">AM/AE:</span>
          </div>
          <input
            type="text"
            className="input input-ghost h-20 w-full max-w-xs"
          />
        </label>
        <label className="border border-base-100 form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-xs">AM/AE:</span>
          </div>
          <input
            type="text"
            className="input input-ghost h-20 w-full max-w-xs"
          />
        </label>
        <label className="border border-base-100 form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-xs">AM/AE:</span>
          </div>
          <input
            type="text"
            className="input input-ghost h-20 w-full max-w-xs"
          />
        </label>
      </div>
    </main>
  );
}
