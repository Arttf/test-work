import {
  Handle,
  Position,
  type Node,
  type NodeProps,
} from '@xyflow/react';

export type PersonNodeData = {
  isMultiline?: boolean;
  lines: string[];
};

export type PersonFlowNode = Node<PersonNodeData, 'person'>;

const handleStyle = {
  height: 6,
  opacity: 0,
  pointerEvents: 'none' as const,
  width: 6,
};

export function PersonNode({ data }: NodeProps<PersonFlowNode>) {
  const sizeClass = data.isMultiline
    ? 'h-[68px] text-[15px] leading-[1.2]'
    : 'h-[52px] text-[15px] leading-[1.2]';

  return (
    <div
      className={`relative flex w-[220px] items-center justify-center rounded-sm border border-slate-300 bg-white px-4 text-center font-normal text-[#1f3553] shadow-[0_1px_0_rgba(255,255,255,0.9)] ${sizeClass}`}
    >
      <Handle id="top" position={Position.Top} style={handleStyle} type="target" />
      <Handle id="right" position={Position.Right} style={handleStyle} type="target" />
      <Handle id="bottom" position={Position.Bottom} style={handleStyle} type="target" />
      <Handle id="left" position={Position.Left} style={handleStyle} type="target" />
      <Handle id="source-top" position={Position.Top} style={handleStyle} type="source" />
      <Handle
        id="source-right"
        position={Position.Right}
        style={handleStyle}
        type="source"
      />
      <Handle
        id="source-bottom"
        position={Position.Bottom}
        style={handleStyle}
        type="source"
      />
      <Handle id="source-left" position={Position.Left} style={handleStyle} type="source" />

      <div>
        {data.lines.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </div>
    </div>
  );
}
