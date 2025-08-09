import { useForm } from "react-hook-form";
import { useState } from "react";

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
}

// Extend form attributes for Netlify
declare module "react" {
  interface FormHTMLAttributes<T> {
    netlify?: boolean;
    "netlify-honeypot"?: string;
  }
}

export const InquiryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<FormData>();

  // Watch the checkbox groups to validate them
  const watchedGoals = watch("goals");
  const watchedInterests = watch("interests");

  const [submitStatus, setSubmitStatus] = useState<
    "submitting" | "success" | "error" | ""
  >("");

  const onSubmit = async (data: FormData) => {
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

      const formData: Record<string, string> = {
        "form-name": "inquiry",
        fname: data.fname,
        lname: data.lname,
        email: data.email,
        phone: data.phone || "",
        goals: goals,
        interests: interests,
        message: data.message,
      };

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(""), 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Form submission error:", error);
    }
  };

  return (
    <>
      <form
        className="p-6 border bg-[#ff4a26] m-4 md:max-w-3xl w-full"
        onSubmit={handleSubmit(onSubmit)}
        name="inquiry"
        method="POST"
        data-netlify="true"
      >
        <div className="flex flex-col mx-auto">
          <div className="flex gap-8 flex-col">
            <p className="text-2xl mb-4 text-white text-center">Inquiry Form</p>

            <div className="flex flex-col gap-4">
              {/* First Name */}
              <div className="flex items-center">
                <label
                  htmlFor="fname"
                  className="w-32 text-left text-sm text-white"
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
                    className={`border border-solid bg-white outline-none px-2 py-1 w-full flex-1 ${
                      errors.fname ? "border-red-500" : ""
                    }`}
                  />
                  {errors.fname && (
                    <p className="text-red-200 text-xs mt-1">
                      {errors.fname.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Last Name */}
              <div className="flex items-center">
                <label
                  htmlFor="lname"
                  className="w-32 text-left text-sm text-white"
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
                    className={`border border-solid bg-white outline-none px-2 py-1 w-full flex-1 ${
                      errors.lname ? "border-red-500" : ""
                    }`}
                  />
                  {errors.lname && (
                    <p className="text-red-200 text-xs mt-1">
                      {errors.lname.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <label
                  htmlFor="email"
                  className="w-32 text-left text-sm text-white"
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
                    className={`border border-solid bg-white outline-none px-2 py-1 w-full flex-1 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-200 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center">
                <label
                  htmlFor="phone"
                  className="w-32 text-left text-sm text-white"
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
                    className={`border border-solid bg-white outline-none px-2 py-1 w-full flex-1 ${
                      errors.phone ? "border-red-500" : ""
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-200 text-xs mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Goals Section */}
            <div className="flex flex-col">
              <div>
                <label className="mb-2">
                  <p className="text-xl mb-4 text-white text-center">
                    Your Goals:
                  </p>
                </label>

                <div className="flex items-center h-8 ml-10 sm:ml-60">
                  <input
                    type="checkbox"
                    id="stronger"
                    {...register("goals.stronger", {
                      validate: {
                        atLeastOne: () => {
                          const goals = watchedGoals;
                          return (
                            (goals &&
                              Object.values(goals).some(
                                (value) => value === true
                              )) ||
                            "Please select at least one goal"
                          );
                        },
                      },
                    })}
                    className="mr-2"
                  />
                  <label htmlFor="stronger" className="text-white">
                    Get Stronger
                  </label>
                </div>
                <div className="flex items-center h-8 ml-10 sm:ml-60">
                  <input
                    type="checkbox"
                    id="health"
                    {...register("goals.health", {
                      validate: {
                        atLeastOne: () => {
                          const goals = watchedGoals;
                          return (
                            (goals &&
                              Object.values(goals).some(
                                (value) => value === true
                              )) ||
                            "Please select at least one goal"
                          );
                        },
                      },
                    })}
                    className="mr-2"
                  />
                  <label htmlFor="health" className="text-white">
                    Health & Longevity
                  </label>
                </div>
                <div className="flex items-center h-8 ml-10 sm:ml-60">
                  <input
                    type="checkbox"
                    id="muscle"
                    {...register("goals.muscle", {
                      validate: {
                        atLeastOne: () => {
                          const goals = watchedGoals;
                          return (
                            (goals &&
                              Object.values(goals).some(
                                (value) => value === true
                              )) ||
                            "Please select at least one goal"
                          );
                        },
                      },
                    })}
                    className="mr-2"
                  />
                  <label htmlFor="muscle" className="text-white">
                    Build Muscle
                  </label>
                </div>
                <div className="flex items-center h-8 ml-10 sm:ml-60">
                  <input
                    type="checkbox"
                    id="performance"
                    {...register("goals.performance", {
                      validate: {
                        atLeastOne: () => {
                          const goals = watchedGoals;
                          return (
                            (goals &&
                              Object.values(goals).some(
                                (value) => value === true
                              )) ||
                            "Please select at least one goal"
                          );
                        },
                      },
                    })}
                    className="mr-2"
                  />
                  <label htmlFor="performance" className="text-white">
                    Athletic Performance
                  </label>
                </div>
                <div className="flex items-center h-8 ml-10 sm:ml-60">
                  <input
                    type="checkbox"
                    id="weight"
                    {...register("goals.weight", {
                      validate: {
                        atLeastOne: () => {
                          const goals = watchedGoals;
                          return (
                            (goals &&
                              Object.values(goals).some(
                                (value) => value === true
                              )) ||
                            "Please select at least one goal"
                          );
                        },
                      },
                    })}
                    className="mr-2"
                  />
                  <label htmlFor="weight" className="text-white">
                    Lose Weight
                  </label>
                </div>
                {errors.goals && (
                  <p className="text-red-200 text-xs mt-2 text-center">
                    {errors.goals.stronger?.message ||
                      errors.goals.health?.message ||
                      errors.goals.muscle?.message ||
                      errors.goals.performance?.message ||
                      errors.goals.weight?.message}
                  </p>
                )}
              </div>
            </div>

            {/* Interests Section */}
            <div className="flex flex-col">
              <div>
                <label className="mb-2">
                  <p className="text-xl mb-4 text-white text-center">
                    Your Interests:
                  </p>
                </label>
                <div className="flex items-center h-8 ml-10 sm:ml-60">
                  <input
                    type="checkbox"
                    id="learn"
                    {...register("interests.learn", {
                      validate: {
                        atLeastOne: () => {
                          const interests = watchedInterests;
                          return (
                            (interests &&
                              Object.values(interests).some(
                                (value) => value === true
                              )) ||
                            "Please select at least one interest"
                          );
                        },
                      },
                    })}
                    className="mr-2"
                  />
                  <label htmlFor="learn" className="text-white">
                    Learn to Lift
                  </label>
                </div>
                <div className="flex items-center h-8 ml-10 sm:ml-60">
                  <input
                    type="checkbox"
                    id="powerlifting"
                    {...register("interests.powerlifting", {
                      validate: {
                        atLeastOne: () => {
                          const interests = watchedInterests;
                          return (
                            (interests &&
                              Object.values(interests).some(
                                (value) => value === true
                              )) ||
                            "Please select at least one interest"
                          );
                        },
                      },
                    })}
                    className="mr-2"
                  />
                  <label htmlFor="powerlifting" className="text-white">
                    Compete in Powerlifting
                  </label>
                </div>
                <div className="flex items-center h-8 ml-10 sm:ml-60">
                  <input
                    type="checkbox"
                    id="calisthenics"
                    {...register("interests.calisthenics", {
                      validate: {
                        atLeastOne: () => {
                          const interests = watchedInterests;
                          return (
                            (interests &&
                              Object.values(interests).some(
                                (value) => value === true
                              )) ||
                            "Please select at least one interest"
                          );
                        },
                      },
                    })}
                    className="mr-2"
                  />
                  <label htmlFor="calisthenics" className="text-white">
                    Work on Calisthenics Skills
                  </label>
                </div>
                <div className="flex items-center h-8 ml-10 sm:ml-60">
                  <input
                    type="checkbox"
                    id="handstands"
                    {...register("interests.handstands", {
                      validate: {
                        atLeastOne: () => {
                          const interests = watchedInterests;
                          return (
                            (interests &&
                              Object.values(interests).some(
                                (value) => value === true
                              )) ||
                            "Please select at least one interest"
                          );
                        },
                      },
                    })}
                    className="mr-2"
                  />
                  <label htmlFor="handstands" className="text-white">
                    Learn Handstands
                  </label>
                </div>
                {errors.interests && (
                  <p className="text-red-200 text-xs mt-2 text-center">
                    {errors.interests.learn?.message ||
                      errors.interests.powerlifting?.message ||
                      errors.interests.calisthenics?.message ||
                      errors.interests.handstands?.message}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message">
                <p className="text-xl mb-4 text-white text-center">Message:</p>
              </label>
              <div>
                <textarea
                  id="message"
                  {...register("message", {
                    required: "Please include a message",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                  className={`border h-64 w-full p-6 bg-white ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  placeholder="Tell me about yourself and your fitness goals..."
                />
                {errors.message && (
                  <p className="text-red-200 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center my-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="border solid 1 py-2 px-4 rounded-md bg-yellow-400 hover:bg-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Inquiry"}
            </button>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="bg-teal-200 border border-black text-teal-700 px-4 py-3">
                Your inquiry has been submitted successfully. I'll be in touch
                soon!
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
