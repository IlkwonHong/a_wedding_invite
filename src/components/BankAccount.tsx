"use client";

import { useState } from "react";

const SIDES = [
  {
    label: "신랑측",
    accounts: [
      { bank: "은행", number: "123-123-123", holder: "김김김" },
      { bank: "은행", number: "123-123-123", holder: "김김김" },
      { bank: "은행", number: "123-123-123", holder: "김김김" },
    ],
  },
  {
    label: "신부측",
    accounts: [
      { bank: "은행", number: "123-123-123", holder: "김김김" },
      { bank: "은행", number: "123-123-123", holder: "김김김" },
      { bank: "은행", number: "123-123-123", holder: "김김김" },
    ],
  },
];

function AccountRow({
  bank,
  number,
  holder,
}: {
  bank: string;
  number: string;
  holder: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
      <div className="text-left">
        <p className="text-sm font-medium text-gray-800">{holder}</p>
        <p className="mt-0.5 text-xs text-gray-400">
          {bank} {number}
        </p>
      </div>
      <button
        onClick={copy}
        className="ml-3 shrink-0 rounded-lg bg-gray-100 px-3 py-1 text-xs text-gray-500"
      >
        {copied ? "✓ 복사됨" : "복사"}
      </button>
    </div>
  );
}

function DropdownSection({
  label,
  accounts,
}: (typeof SIDES)[0]) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl bg-gray-100">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-5 py-4"
      >
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="flex flex-col gap-2 px-3 pb-3">
          {accounts.map((acc, i) => (
            <AccountRow key={i} {...acc} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function BankAccount() {
  return (
    <div className="mt-6 flex flex-col gap-3">
      {SIDES.map((side) => (
        <DropdownSection key={side.label} {...side} />
      ))}
    </div>
  );
}
