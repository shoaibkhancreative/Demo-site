import { useState } from "react";
import { validateUserInfo } from "../../lib/validation";

function Field({ label, error, required, children, hint }) {
  return (
    <div>
      <label className="block text-[13px] font-semibold text-ink mb-1.5">
        {label} {required && <span className="text-bear">*</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1 text-[11.5px] text-ink-faint">{hint}</p>}
      {error && <p className="mt-1 text-[11.5px] font-medium text-bear">{error}</p>}
    </div>
  );
}

const inputClass = (hasError) =>
  `w-full rounded-xl border px-4 py-3 text-[14.5px] text-ink placeholder:text-ink-faint outline-none transition-colors duration-150 focus:border-ink ${
    hasError ? "border-bear" : "border-line-strong"
  }`;

export default function Step2Info({ userInfo, setUserInfo, forceShowErrors }) {
  const [touched, setTouched] = useState({});
  const errors = validateUserInfo(userInfo);

  function update(field, value) {
    setUserInfo((s) => ({ ...s, [field]: value }));
  }
  function markTouched(field) {
    setTouched((t) => ({ ...t, [field]: true }));
  }
  function showError(field) {
    return (touched[field] || forceShowErrors) && errors[field];
  }

  return (
    <div>
      <h2 className="font-display text-2xl sm:text-[1.7rem] font-semibold text-ink">আপনার তথ্য দিন</h2>
      <p className="mt-2 text-[14.5px] text-ink-soft">Enrollment Confirm করতে নিচের তথ্যগুলো লাগবে।</p>

      <div className="mt-7 space-y-5">
        <Field label="পূর্ণ নাম (Full Name)" required error={showError("name")}>
          <input
            type="text"
            value={userInfo.name}
            onChange={(e) => update("name", e.target.value)}
            onBlur={() => markTouched("name")}
            placeholder="আপনার পূর্ণ নাম"
            className={inputClass(showError("name"))}
          />
        </Field>

        <Field label="জন্ম তারিখ (Date of Birth)" required error={showError("dob")}>
          <input
            type="date"
            value={userInfo.dob}
            onChange={(e) => update("dob", e.target.value)}
            onBlur={() => markTouched("dob")}
            max={new Date().toISOString().split("T")[0]}
            className={inputClass(showError("dob"))}
          />
        </Field>

        <div>
          <p className="text-[13px] font-semibold text-ink mb-1.5">
            যোগাযোগের তথ্য <span className="text-bear">*</span>
          </p>
          <p className="text-[11.5px] text-ink-faint mb-3">Phone, Email বা Telegram Username — অন্তত একটি দিন।</p>

          <div className="space-y-3">
            <input
              type="tel"
              value={userInfo.phone}
              onChange={(e) => update("phone", e.target.value)}
              onBlur={() => markTouched("contact")}
              placeholder="Phone Number (e.g. +8801XXXXXXXXX)"
              className={inputClass(false)}
            />
            <input
              type="email"
              value={userInfo.email}
              onChange={(e) => update("email", e.target.value)}
              onBlur={() => {
                markTouched("email");
                markTouched("contact");
              }}
              placeholder="Email Address"
              className={inputClass(showError("email"))}
            />
            {showError("email") && <p className="text-[11.5px] font-medium text-bear">{errors.email}</p>}
            <input
              type="text"
              value={userInfo.telegram}
              onChange={(e) => update("telegram", e.target.value)}
              onBlur={() => markTouched("contact")}
              placeholder="Telegram Username (e.g. @yourusername)"
              className={inputClass(false)}
            />
          </div>
          {showError("contact") && <p className="mt-2 text-[11.5px] font-medium text-bear">{errors.contact}</p>}
        </div>

        <Field label="ঠিকানা (Address)" hint="Optional">
          <textarea
            value={userInfo.address}
            onChange={(e) => update("address", e.target.value)}
            placeholder="আপনার ঠিকানা (Optional)"
            rows={2}
            className={inputClass(false) + " resize-none"}
          />
        </Field>
      </div>
    </div>
  );
}
