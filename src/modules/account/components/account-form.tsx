"use client";
import Image from "next/image";
import useAccountForm from "../hooks/use-account-form";
export default function AccountForm() {
  const { register, handleSubmit, errors, image, preview, handleImage, onSubmit, setImage, setPreview, isDirty } = useAccountForm();
  return (
    <>
      <div className="pt-22">
        <div className="container mx-auto ">
          <form className="shadow p-3 py-4 mb-5 rounded" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="m-3 text-xl">Edit Your Profile</h2>

            <div className="mt-2 flex flex-col justify-center items-center gap-3">
              <label htmlFor="fileInput" className="cursor-pointer w-32 h-32 border flex items-center justify-center overflow-hidden rounded-full">
                {image && preview ? <Image src={preview} alt="profile image" width={128} height={128} unoptimized /> : <span className="text-sm text-gray-400">Upload</span>}
              </label>
              <input type="file" accept="image/*" onChange={handleImage} className="hidden" id="fileInput" />
            </div>

            <div className="flex sm:flex-nowrap flex-wrap gap-3 pt-4">
              <div className="w-full">
                <label className="block mx-3">
                  <span className="text-red-500">*</span> First Name
                </label>
                <input
                  {...register("firstName", {
                    required: "Fist Neme is Required",
                    maxLength: {
                      value: 15,
                      message: "The maximum character limit is 15 char",
                    },
                    minLength: {
                      value: 2,
                      message: "The minimum number of characters is 2",
                    },
                  })}
                  type="text"
                  className="bg-[#f5f5f5]  w-[95%] m-3  p-2 rounded"
                />
                {errors.firstName && <p className="text-red-500 text-sm pl-3">{errors.firstName.message}</p>}
              </div>
              <div className="w-full">
                <label className="block mx-3">
                  <span className="text-red-500">*</span> Last Name
                </label>
                <input
                  {...register("lastName", {
                    required: "Last Name is Required",
                    maxLength: {
                      value: 15,
                      message: "The maximum character limit is 15 char",
                    },
                    minLength: {
                      value: 2,
                      message: "The minimum number of characters is 2",
                    },
                  })}
                  type="text"
                  className="bg-[#f5f5f5]  w-[95%] m-3 p-2 rounded"
                />
                {errors.lastName && <p className="text-red-500 text-sm pl-3">{errors.lastName.message}</p>}
              </div>
            </div>
            <div className="flex sm:flex-nowrap flex-wrap gap-3">
              <div className="w-full">
                <label className="block mx-3">
                  <span className="text-red-500">*</span> Username
                </label>
                <input
                  {...register("userName", {
                    required: "user name is Required",
                    pattern: {
                      value: /^[a-z0-9._]+$/,
                      message: "Only lowercase letters, numbers, . and _ allowed",
                    },
                  })}
                  type="email"
                  className="bg-[#f5f5f5] w-[95%] m-3 p-2 rounded"
                />
                {errors.userName && <p className="text-red-500 text-sm pl-3">{errors.userName.message}</p>}
              </div>
              <div className="w-full">
                <label className="block mx-3 ">Email</label>
                <input
                  {...register("email", {
                    pattern: {
                      value: /^[aA-zZ0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                      message: "Please enter a valid email address",
                    },
                  })}
                  type="email"
                  className="bg-[#f5f5f5] w-[95%] m-3 p-2 rounded "
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
            </div>
            <div className="flex sm:flex-nowrap flex-wrap gap-3">
              <div className="w-full">
                <label className="block mx-3">Address</label>
                <input
                  {...register("address", {
                    maxLength: {
                      value: 50,
                      message: "The maximum character limit is 50 char",
                    },
                  })}
                  type="text"
                  className="bg-[#f5f5f5] w-[95%] m-3 p-2 rounded"
                />
              </div>
              <div className="w-full">
                <label className="block mx-3 ">Phone Numper</label>
                <input
                  {...register("phoneNumber", {
                    pattern: {
                      value: /^\+20(1)[0-2,5]{1}[0-9]{8}$/,
                      message: "Invalid phone number format",
                    },
                  })}
                  type="tel"
                  className="bg-[#f5f5f5] w-[95%] m-3 p-2 rounded"
                />
              </div>
            </div>
            <div className="flex justify-end gap-6 mx-6 my-2">
              <button
                type="button"
                className=" cursor-pointer"
                onClick={() => {
                  setImage(null);
                  setPreview(null);
                }}
              >
                Cancel
              </button>
              <button
                title={!isDirty ? "Make changes to enable saving" : ""}
                className={`px-5 py-2 bg-black rounded text-white ${isDirty ? "cursor-pointer" : " cursor-not-allowed bg-main-bg"}`}
                type="submit"
                disabled={!isDirty}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
