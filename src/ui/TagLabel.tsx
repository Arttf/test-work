type TagLabelProps = {
  name: string;
};

export function TagLabel({ name }: TagLabelProps) {
  return (
    <span className="mr-2 inline-block rounded bg-slate-900 px-2 py-0.5 font-mono text-xs font-semibold text-white">
      {`<${name}>`}
    </span>
  );
}
