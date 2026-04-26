type CheckboxYellowProps = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

export function CheckboxYellow({
  checked = false,
  onChange,
}: CheckboxYellowProps) {
  return (
    <span className="relative mt-1 flex h-4 w-4 shrink-0 items-center justify-center">
      <input
        className="peer m-0 h-4 w-4 cursor-pointer appearance-none rounded-[4px] border border-[#efd98f] bg-[#fff4bf] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_1px_rgba(15,23,42,0.1)] outline-none transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8c72ff]"
        checked={checked}
        onChange={(event) => onChange?.(event.target.checked)}
        type="checkbox"
      />
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-[11px] font-bold leading-none text-[#8c72ff] opacity-0 transition peer-checked:opacity-100">
        ✓
      </span>
    </span>
  );
}
