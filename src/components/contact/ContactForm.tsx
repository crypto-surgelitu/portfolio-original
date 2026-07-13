"use client";

import { type FormEvent, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  whatsapp: string;
  projectType: string;
  budget: string;
  timeline: string;
  scope: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

const projectTypes = [
  "Business Website",
  "Web Application",
  "Mobile Application",
  "ERP System",
  "Custom Software",
  "Other",
];

const KES_TO_USD = 129;

const budgets = [
  "Below KSh 50,000 (~$387)",
  "KSh 50,000 - 100,000 (~$387 - $774)",
  "KSh 100,000 - 250,000 (~$774 - $1,935)",
  "KSh 250,000+ (~$1,935+)",
  "Not Sure Yet",
];

const timelines = ["1-2 Weeks", "3-4 Weeks", "1-2 Months", "3+ Months", "Flexible"];

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  whatsapp: "",
  projectType: "",
  budget: "",
  timeline: "",
  scope: "",
};

function Input({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = true,
  placeholder,
  error,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  error?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-[14px] font-normal text-[#e2e2e2] mb-2 block"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder || label}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={`w-full bg-surface-elevated border rounded px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-text-muted outline-none transition-colors duration-200 focus:ring-1 min-h-[44px] ${
          error
            ? "border-error focus:border-error focus:ring-error"
            : "border-border-subtle focus:border-primary focus:ring-primary"
        }`}
      />
      {error && (
        <p id={errorId} className="text-error text-[14px] leading-[20px]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function Select({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  error,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
  error?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-[14px] font-normal text-[#e2e2e2] mb-2 block"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={`w-full bg-surface-elevated border rounded px-4 py-3 font-body-md text-body-md text-on-surface outline-none transition-colors duration-200 focus:ring-1 min-h-[44px] appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22none%22%20stroke%3D%22%23e2e2e2%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat ${
          error
            ? "border-error focus:border-error focus:ring-error"
            : "border-border-subtle focus:border-primary focus:ring-primary"
        }`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && (
        <p id={errorId} className="text-error text-[14px] leading-[20px]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  function update(field: keyof FormData) {
    return (value: string) => {
      setForm((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };
  }

  function validate(): boolean {
    const newErrors: FormErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.whatsapp.trim()) {
      newErrors.whatsapp = "Phone number is required";
    } else if (!/^[+\d\s]{7,20}$/.test(form.whatsapp.trim())) {
      newErrors.whatsapp = "Use +, digits, and spaces only (7–20 characters)";
    }

    if (!form.projectType) newErrors.projectType = "Select a project type";
    if (!form.budget) newErrors.budget = "Select a budget range";
    if (!form.timeline) newErrors.timeline = "Select a timeline";

    if (!form.scope.trim()) {
      newErrors.scope = "Project scope is required";
    } else if (form.scope.trim().length < 10) {
      newErrors.scope = "Describe your project in at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    if (!validate()) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setForm(initialForm);
      setErrors({});
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send inquiry");
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-surface-elevated border border-border-subtle rounded-xl p-6 md:p-8"
    >
      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-md">
        Detailed Proposal Request
      </h2>

      {status === "success" ? (
        <div className="py-12 text-center" role="alert">
          <span className="material-symbols-outlined text-status-success text-5xl mb-stack-sm block select-none">
            check_circle
          </span>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
            Inquiry Received
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Thank you. I will review your project details and get back to you
            within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Input
              label="First Name"
              name="firstName"
              value={form.firstName}
              onChange={update("firstName")}
              placeholder="First Name"
              error={errors.firstName}
            />
            <Input
              label="Last Name"
              name="lastName"
              value={form.lastName}
              onChange={update("lastName")}
              placeholder="Last Name"
              error={errors.lastName}
            />
          </div>

          <Input
            label="Corporate Email"
            name="email"
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="Corporate Email"
            error={errors.email}
          />

          <Input
            label="Phone Number (WhatsApp)"
            name="whatsapp"
            type="tel"
            value={form.whatsapp}
            onChange={update("whatsapp")}
            placeholder="+254 7XX XXX XXX"
            error={errors.whatsapp}
          />

          <Select
            label="Project Type"
            name="projectType"
            value={form.projectType}
            onChange={update("projectType")}
            options={projectTypes}
            placeholder="Select Project Type"
            error={errors.projectType}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Select
              label="Estimated Budget"
              name="budget"
              value={form.budget}
              onChange={update("budget")}
              options={budgets}
              placeholder="Select Budget Range"
              error={errors.budget}
            />
            <Select
              label="Expected Timeline"
              name="timeline"
              value={form.timeline}
              onChange={update("timeline")}
              options={timelines}
              placeholder="Select Timeline"
              error={errors.timeline}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="scope"
              className="text-[14px] font-normal text-[#e2e2e2] mb-2 block"
            >
              Project Scope Overview
            </label>
            <textarea
              id="scope"
              name="scope"
              value={form.scope}
              onChange={(e) => update("scope")(e.target.value)}
              rows={4}
              required
              aria-invalid={!!errors.scope}
              aria-describedby={errors.scope ? "scope-error" : undefined}
              placeholder="Describe your project, goals, and any specific requirements"
              className={`w-full bg-surface-elevated border rounded px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-text-muted outline-none transition-colors duration-200 focus:ring-1 resize-y min-h-[100px] ${
                errors.scope
                  ? "border-error focus:border-error focus:ring-error"
                  : "border-border-subtle focus:border-primary focus:ring-primary"
              }`}
            />
            {errors.scope && (
              <p id="scope-error" className="text-error text-[14px] leading-[20px]" role="alert">
                {errors.scope}
              </p>
            )}
          </div>

          {status === "error" && (
            <p className="font-body-md text-body-md text-error" role="alert">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-primary-container text-on-primary font-button text-button py-4 px-8 rounded hover:bg-primary transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] flex items-center justify-center"
          >
            {status === "loading" ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 border-2 border-on-primary border-t-transparent rounded-full animate-spin" />
                Sending...
              </span>
            ) : (
              "Submit Inquiry"
            )}
          </button>
        </form>
      )}
    </motion.div>
  );
}
