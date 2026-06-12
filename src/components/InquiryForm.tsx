import { useForm } from "react-hook-form";
import { useState } from "react";
import { submitInquiry } from "../utils/submitInquiry";

// TypeScript interfaces
interface FormData {
  fname: string;
  lname: string;
  email: string;
  phone?: string;
  goals?: {
    stronger?: boolean;
    health?: boolean;
    muscle?: boolean;
    performance?: boolean;
    weight?: boolean;
  };
  interests?: {
    learn?: boolean;
    powerlifting?: boolean;
    calisthenics?: boolean;
    handstands?: boolean;
  };
  message: string;
  "bot-field"?: string;
}

export const InquiryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const [submitStatus, setSubmitStatus] = useState<
    "submitting" | "success" | "error" | ""
  >("");

  const onSubmit = async (data: FormData) => {
    // Honeypot: a real user never fills this; pretend success and bail.
    if (data["bot-field"]) {
      setSubmitStatus("success");
      reset();
      setTimeout(() => setSubmitStatus(""), 5000);
      return;
    }

    try {
      setSubmitStatus("submitting");

      // Convert checkbox arrays to comma-separated strings with proper type handling
      const goals = data.goals
        ? Object.entries(data.goals)
            .filter(([_, value]) => value === true)
            .map(([key, _]) => {
              switch (key) {
                case "stronger":
                  return "Get Stronger";
                case "health":
                  return "Health & Longevity";
                case "muscle":
                  return "Build Muscle";
                case "performance":
                  return "Athletic Performance";
                case "weight":
                  return "Lose Weight";
                default:
                  return key;
              }
            })
            .join(", ")
        : "";

      const interests = data.interests
        ? Object.entries(data.interests)
            .filter(([_, value]) => value === true)
            .map(([key, _]) => {
              switch (key) {
                case "learn":
                  return "Learn to Lift";
                case "powerlifting":
                  return "Compete in Powerlifting";
                case "calisthenics":
                  return "Work on Calisthenics Skills";
                case "handstands":
                  return "Learn Handstands";
                default:
                  return key;
              }
            })
            .join(", ")
        : "";

      const result = await submitInquiry({
        fname: data.fname,
        lname: data.lname,
        email: data.email,
        phone: data.phone || "",
        goals,
        interests,
        message: data.message || "",
        "bot-field": "",
      });

      if (result.success) {
        setSubmitStatus("success");
        reset();
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(""), 5000);
      } else {
        throw new Error(result.error ?? "Form submission failed");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Form submission error:", error);
    }
  };

  return (
    <>
      <form
        className="p-6 border bg-brand-orange m-4 md:max-w-3xl w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Honeypot: hidden from humans; bots that auto-fill forms reveal themselves. */}
        <p className="hidden" aria-hidden="true">
          <label>
            Don't fill this out if you're human:
            <input tabIndex={-1} autoComplete="off" {...register("bot-field")} />
          </label>
        </p>
        <div className="flex flex-col mx-auto">
          <div className="flex gap-8 flex-col">
            <p className="ba-form-title mb-4 text-black text-center">Join the Waitlist</p>

            <div className="flex flex-col gap-4">
              {/* First Name */}
              <div className="flex items-center">
                <label
                  htmlFor="fname"
                  className="w-32 text-left text-sm text-black"
                >
                  First Name:
                </label>
                <div className="flex-1">
                  <input
                    type="text"
                    id="fname"
                    {...register("fname", {
                      required: "First name is required",
                      minLength: {
                        value: 2,
                        message: "First name must be at least 2 characters",
                      },
                    })}
                    className={`border border-solid bg-white focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black px-2 py-1 w-full flex-1 ${
                      errors.fname ? "border-red-500" : ""
                    }`}
                  />
                  {errors.fname && (
                    <p className="mt-1 inline-block bg-red-700 px-2 py-0.5 text-xs text-white">
                      {errors.fname.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Last Name */}
              <div className="flex items-center">
                <label
                  htmlFor="lname"
                  className="w-32 text-left text-sm text-black"
                >
                  Last Name:
                </label>
                <div className="flex-1">
                  <input
                    type="text"
                    id="lname"
                    {...register("lname", {
                      required: "Last name is required",
                      minLength: {
                        value: 2,
                        message: "Last name must be at least 2 characters",
                      },
                    })}
                    className={`border border-solid bg-white focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black px-2 py-1 w-full flex-1 ${
                      errors.lname ? "border-red-500" : ""
                    }`}
                  />
                  {errors.lname && (
                    <p className="mt-1 inline-block bg-red-700 px-2 py-0.5 text-xs text-white">
                      {errors.lname.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <label
                  htmlFor="email"
                  className="w-32 text-left text-sm text-black"
                >
                  Email Address:
                </label>
                <div className="flex-1">
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Please enter a valid email address",
                      },
                    })}
                    className={`border border-solid bg-white focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black px-2 py-1 w-full flex-1 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 inline-block bg-red-700 px-2 py-0.5 text-xs text-white">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center">
                <label
                  htmlFor="phone"
                  className="w-32 text-left text-sm text-black"
                >
                  Phone Number:
                </label>
                <div className="flex-1">
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone", {
                      pattern: {
                        value: /^[\+]?[1-9][\d]{0,15}$/,
                        message: "Please enter a valid phone number",
                      },
                    })}
                    className={`border border-solid bg-white focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black px-2 py-1 w-full flex-1 ${
                      errors.phone ? "border-red-500" : ""
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 inline-block bg-red-700 px-2 py-0.5 text-xs text-white">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Goals & Interests, side by side on larger screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Goals Section */}
            <div className="flex flex-col">
              <fieldset>
                <legend className="text-xl mb-4 text-black text-center w-full">
                  Your Goals (optional):
                </legend>

                <div className="flex flex-col gap-y-1 w-max mx-auto">
                  <div className="flex items-center h-9">
                    <input
                      type="checkbox"
                      id="stronger"
                      {...register("goals.stronger")}
                      className="mr-2"
                    />
                    <label htmlFor="stronger" className="text-black">
                      Get Stronger
                    </label>
                  </div>
                  <div className="flex items-center h-9">
                    <input
                      type="checkbox"
                      id="health"
                      {...register("goals.health")}
                      className="mr-2"
                    />
                    <label htmlFor="health" className="text-black">
                      Health & Longevity
                    </label>
                  </div>
                  <div className="flex items-center h-9">
                    <input
                      type="checkbox"
                      id="muscle"
                      {...register("goals.muscle")}
                      className="mr-2"
                    />
                    <label htmlFor="muscle" className="text-black">
                      Build Muscle
                    </label>
                  </div>
                  <div className="flex items-center h-9">
                    <input
                      type="checkbox"
                      id="performance"
                      {...register("goals.performance")}
                      className="mr-2"
                    />
                    <label htmlFor="performance" className="text-black">
                      Athletic Performance
                    </label>
                  </div>
                  <div className="flex items-center h-9">
                    <input
                      type="checkbox"
                      id="weight"
                      {...register("goals.weight")}
                      className="mr-2"
                    />
                    <label htmlFor="weight" className="text-black">
                      Lose Weight
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            {/* Interests Section */}
            <div className="flex flex-col">
              <fieldset>
                <legend className="text-xl mb-4 text-black text-center w-full">
                  Your Interests (optional):
                </legend>
                <div className="flex flex-col gap-y-1 w-max mx-auto">
                  <div className="flex items-center h-9">
                    <input
                      type="checkbox"
                      id="learn"
                      {...register("interests.learn")}
                      className="mr-2"
                    />
                    <label htmlFor="learn" className="text-black">
                      Learn to Lift
                    </label>
                  </div>
                  <div className="flex items-center h-9">
                    <input
                      type="checkbox"
                      id="powerlifting"
                      {...register("interests.powerlifting")}
                      className="mr-2"
                    />
                    <label htmlFor="powerlifting" className="text-black">
                      Compete in Powerlifting
                    </label>
                  </div>
                  <div className="flex items-center h-9">
                    <input
                      type="checkbox"
                      id="calisthenics"
                      {...register("interests.calisthenics")}
                      className="mr-2"
                    />
                    <label htmlFor="calisthenics" className="text-black">
                      Work on Calisthenics Skills
                    </label>
                  </div>
                  <div className="flex items-center h-9">
                    <input
                      type="checkbox"
                      id="handstands"
                      {...register("interests.handstands")}
                      className="mr-2"
                    />
                    <label htmlFor="handstands" className="text-black">
                      Learn Handstands
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message">
                <p className="text-xl mb-4 text-black text-center">Message (optional):</p>
              </label>
              <div>
                <textarea
                  id="message"
                  {...register("message")}
                  className="border h-64 w-full p-6 bg-white"
                  placeholder="Optional: tell me about yourself and your fitness goals..."
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center my-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="border border-solid py-2 px-4 rounded-md bg-brand-yellow hover:bg-brand-yellow-hover disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Joining..." : "Join the Waitlist"}
            </button>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="bg-brand-teal-200 border border-black text-brand-teal-700 px-4 py-3">
                You're on the list! I'll reach out as soon as a spot opens.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="bg-red-100 border border-black text-red-700 px-4 py-3">
                There was an error submitting your form. Please try again.
              </div>
            )}
        </div>
      </form>
    </>
  );
};
