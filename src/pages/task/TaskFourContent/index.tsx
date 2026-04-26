import {
  Background,
  MarkerType,
  ReactFlow,
  type Edge,
  type NodeTypes,
} from '@xyflow/react';
import { PersonNode, type PersonFlowNode } from './PersonNode';

const nodeTypes: NodeTypes = {
  person: PersonNode,
};

const edgeStyle = {
  stroke: '#9aa0a6',
  strokeWidth: 3,
};

const nodes: PersonFlowNode[] = [
  {
    data: { lines: ['Алликсаар'] },
    id: 'alliksaar',
    position: { x: 0, y: 28 },
    type: 'person',
  },
  {
    data: { isMultiline: true, lines: ['Ду Хаст', 'Вячеславович'] },
    id: 'du-hast',
    position: { x: 780, y: 20 },
    type: 'person',
  },
  {
    data: { lines: ['Анастасия Ширинкина'] },
    id: 'anastasia',
    position: { x: 780, y: 116 },
    type: 'person',
  },
  {
    data: { isMultiline: true, lines: ['Станислав', 'Клитотехнис'] },
    id: 'stanislav',
    position: { x: 140, y: 196 },
    type: 'person',
  },
  {
    data: { isMultiline: true, lines: ['Людмила', 'Водолазская'] },
    id: 'lyudmila',
    position: { x: 280, y: 296 },
    type: 'person',
  },
  {
    data: { lines: ['Ольга Боргдорф'] },
    id: 'olga',
    position: { x: 280, y: 388 },
    type: 'person',
  },
  {
    data: { lines: ['Сергей Брус'] },
    id: 'sergey',
    position: { x: 280, y: 536 },
    type: 'person',
  },
  {
    data: { lines: ['Игорь Зверёк'] },
    id: 'igor',
    position: { x: 140, y: 608 },
    type: 'person',
  },
  {
    data: { lines: ['Антон Строй'] },
    id: 'anton',
    position: { x: 140, y: 692 },
    type: 'person',
  },
  {
    data: { lines: ['Александр Троян'] },
    id: 'alexander',
    position: { x: 780, y: 204 },
    type: 'person',
  },
  {
    data: { lines: ['Дмитрий Возигнуй'] },
    id: 'dmitriy',
    position: { x: 780, y: 388 },
    type: 'person',
  },
  {
    data: { lines: ['Кристина Болтушкина'] },
    id: 'kristina',
    position: { x: 780, y: 472 },
    type: 'person',
  },
  {
    data: { lines: ['Максим Висюлькин'] },
    id: 'maksim',
    position: { x: 780, y: 556 },
    type: 'person',
  },
];

const edges: Edge[] = [
  {
    id: 'du-hast-alliksaar',
    markerEnd: { color: '#9aa0a6', type: MarkerType.ArrowClosed },
    source: 'du-hast',
    sourceHandle: 'source-left',
    style: edgeStyle,
    target: 'alliksaar',
    targetHandle: 'right',
    type: 'smoothstep',
  },
  {
    id: 'anastasia-alliksaar',
    markerEnd: { color: '#9aa0a6', type: MarkerType.ArrowClosed },
    source: 'anastasia',
    sourceHandle: 'source-left',
    style: edgeStyle,
    target: 'alliksaar',
    targetHandle: 'right',
    type: 'smoothstep',
  },
  {
    id: 'stanislav-alliksaar',
    markerEnd: { color: '#9aa0a6', type: MarkerType.ArrowClosed },
    source: 'stanislav',
    sourceHandle: 'source-left',
    style: edgeStyle,
    target: 'alliksaar',
    targetHandle: 'bottom',
    type: 'smoothstep',
  },
  {
    id: 'igor-alliksaar',
    markerEnd: { color: '#9aa0a6', type: MarkerType.ArrowClosed },
    source: 'igor',
    sourceHandle: 'source-left',
    style: edgeStyle,
    target: 'alliksaar',
    targetHandle: 'bottom',
    type: 'smoothstep',
  },
  {
    id: 'anton-alliksaar',
    markerEnd: { color: '#9aa0a6', type: MarkerType.ArrowClosed },
    source: 'anton',
    sourceHandle: 'source-left',
    style: edgeStyle,
    target: 'alliksaar',
    targetHandle: 'bottom',
    type: 'smoothstep',
  },
  {
    id: 'alexander-stanislav',
    markerEnd: { color: '#9aa0a6', type: MarkerType.ArrowClosed },
    source: 'alexander',
    sourceHandle: 'source-left',
    style: edgeStyle,
    target: 'stanislav',
    targetHandle: 'right',
    type: 'smoothstep',
  },
  {
    id: 'lyudmila-stanislav',
    markerEnd: { color: '#9aa0a6', type: MarkerType.ArrowClosed },
    source: 'lyudmila',
    sourceHandle: 'source-left',
    style: edgeStyle,
    target: 'stanislav',
    targetHandle: 'bottom',
    type: 'smoothstep',
  },
  {
    id: 'olga-stanislav',
    markerEnd: { color: '#9aa0a6', type: MarkerType.ArrowClosed },
    source: 'olga',
    sourceHandle: 'source-left',
    style: edgeStyle,
    target: 'stanislav',
    targetHandle: 'bottom',
    type: 'smoothstep',
  },
  {
    id: 'sergey-stanislav',
    markerEnd: { color: '#9aa0a6', type: MarkerType.ArrowClosed },
    source: 'sergey',
    sourceHandle: 'source-left',
    style: edgeStyle,
    target: 'stanislav',
    targetHandle: 'bottom',
    type: 'smoothstep',
  },
  {
    id: 'dmitriy-olga',
    markerEnd: { color: '#9aa0a6', type: MarkerType.ArrowClosed },
    source: 'dmitriy',
    sourceHandle: 'source-left',
    style: edgeStyle,
    target: 'olga',
    targetHandle: 'right',
    type: 'smoothstep',
  },
  {
    id: 'kristina-olga',
    markerEnd: { color: '#9aa0a6', type: MarkerType.ArrowClosed },
    source: 'kristina',
    sourceHandle: 'source-left',
    style: edgeStyle,
    target: 'olga',
    targetHandle: 'right',
    type: 'smoothstep',
  },
  {
    id: 'maksim-olga',
    markerEnd: { color: '#9aa0a6', type: MarkerType.ArrowClosed },
    source: 'maksim',
    sourceHandle: 'source-left',
    style: edgeStyle,
    target: 'olga',
    targetHandle: 'right',
    type: 'smoothstep',
  },
  {
    id: 'maksim-dmitriy',
    markerEnd: { color: '#9aa0a6', type: MarkerType.ArrowClosed },
    source: 'maksim',
    sourceHandle: 'source-right',
    style: edgeStyle,
    target: 'dmitriy',
    targetHandle: 'right',
    type: 'smoothstep',
  },
];

export function TaskFourContent() {
  return (
    <section className="rounded-[28px] border border-slate-700 bg-[#323841] p-6 shadow-sm">
      <div className="text-[48px] font-light tracking-tight text-white">
        Масоны Самсона
      </div>

      <div className="overflow-x-auto overflow-y-hidden rounded-[20px]">
        <div className="h-[800px] min-w-[1080px]">
          <ReactFlow
            defaultEdgeOptions={{
              animated: false,
              type: 'smoothstep',
            }}
            defaultViewport={{ x: 0, y: 0, zoom: 1 }}
            edges={edges}
            elementsSelectable={false}
            fitView={false}
            maxZoom={1}
            minZoom={1}
            nodeTypes={nodeTypes}
            nodes={nodes}
            nodesConnectable={false}
            nodesDraggable={false}
            panOnDrag={false}
            panOnScroll={false}
            preventScrolling={false}
            proOptions={{ hideAttribution: true }}
            zoomOnDoubleClick={false}
            zoomOnPinch={false}
            zoomOnScroll={false}
          >
            <Background color="#323841" gap={28} />
          </ReactFlow>
        </div>
      </div>
    </section>
  );
}
