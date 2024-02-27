import Image from "next/image";

export default function Home() {
  return (
    <main className="border border-white flex min-h-screen flex-col items-center justify-between p-8">
      <div className="border border-blue-800 grid text-center grid-cols-2 lg:grid-cols-4">
        <label className="border border-base-100 form-control w-full">
          <div className="label">
            <span className="label-text text-xs">AM/AE:</span>
          </div>
          <input
            type="text"
            className="input input-ghost text-center text-black h-20 w-full"
          />
        </label>
        <label className="border border-base-100 form-control w-full">
          <div className="label">
            <span className="label-text text-xs">PT CREATION DATE:</span>
          </div>
          <input
            type="text"
            className="input input-ghost text-center text-black h-20 w-full"
          />
        </label>
        <label className="border border-base-100 form-control w-full">
          <div className="label">
            <span className="label-text text-xs">CLIENT NAME:</span>
          </div>
          <input
            type="text"
            className="input input-ghost text-center text-black h-20 w-full"
          />
        </label>
        <label className="border border-base-100 form-control w-full">
          <div className="label">
            <span className="label-text text-xs">JOB NUMBER:</span>
          </div>
          <input
            type="text"
            className="input input-ghost text-center text-black h-20 w-full"
          />
        </label>


        <label className="border border-base-100 form-control w-full">
          <div className="label">
            <span className="label-text text-xs">MAIN CONTACT:</span>
          </div>
          <input
            type="text"
            className="input input-ghost text-center text-black h-20 w-full"
          />
        </label>
        <label className="border border-base-100 form-control w-full">
          <div className="label">
            <span className="label-text text-xs">INSTALL ADDRESS:</span>
          </div>
          <input
            type="text"
            className="input input-ghost text-center text-black h-20 w-full"
          />
        </label>
        <label className="border border-base-100 form-control w-full">
          <div className="label">
            <span className="label-text text-xs">TYPE OF INSTALL:</span>
          </div>
          <input
            type="text"
            className="input input-ghost text-center text-black h-20 w-full"
          />
        </label>
        <label className="border border-base-100 form-control w-full">
          <div className="label">
            <span className="label-text text-xs">SITEWALK:</span>
          </div>
          <input
            type="text"
            className="input input-ghost text-center text-black h-20 w-full"
          />
        </label>

        <label className="border border-base-100 form-control w-full">
          <div className="label">
            <span className="label-text text-xs">BUDGET/ROM:</span>
          </div>
          <input
            type="text"
            className="input input-ghost text-center text-black h-20 w-full"
          />
        </label>
        <label className="border border-base-100 form-control w-full">
          <div className="label">
            <span className="label-text text-xs">NETWORK:</span>
          </div>
          <input
            type="text"
            className="input input-ghost text-center text-black h-20 w-full"
          />
        </label>
        <label className="border border-base-100 form-control w-full">
          <div className="label">
            <span className="label-text text-xs">PREVIOUS JOB NUMBERS:</span>
          </div>
          <input
            type="text"
            className="input input-ghost text-center text-black h-20 w-full"
          />
        </label>
        <label className="border border-base-100 form-control w-full">
          <div className="label">
            <span className="label-text text-xs">LINKED PROJECT FILES:</span>
          </div>
          <input
            type="text"
            className="input input-ghost text-center text-black h-20 w-full"
          />
        </label>
      </div>
    </main>
  );
}
